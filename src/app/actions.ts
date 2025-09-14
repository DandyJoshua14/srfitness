
'use server';

import { z } from 'zod';
import { addVote, addNomination } from '@/services/firestore';
import { Resend } from 'resend';
import { redirect } from 'next/navigation';

// Explicitly read environment variables at the top level
const WEMA_ALAT_SUBSCRIPTION_KEY = process.env.WEMA_ALAT_SUBSCRIPTION_KEY;
const WEMA_ALAT_SOURCE_ACCOUNT = process.env.WEMA_ALAT_SOURCE_ACCOUNT;
const WEMA_ALAT_CHANNEL_ID = process.env.WEMA_ALAT_CHANNEL_ID;
const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:9002';
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

const nominationFormSchema = z.object({
  category: z.string(),
  nomineeName: z.string(),
  nomineePhone: z.string(),
  nominationReason: z.string(),
  nominatorName: z.string(),
  nominatorPhone: z.string(),
});

const voteSchema = z.object({
  contestantId: z.string(),
  contestantName: z.string(),
  contestantCategory: z.string(),
  numberOfVotes: z.number().int().positive(),
});

const wemaPaymentStatusSchema = z.object({
  channelId: z.string(),
  transactionReference: z.string(),
});

const wemaPaymentRequestSchema = z.object({
  amount: z.number(),
  contestantId: z.string(),
  contestantName: z.string(),
  contestantCategory: z.string(),
  numberOfVotes: z.number(),
});

const wemaPaymentValidationSchema = z.object({
  channelId: z.string(),
  transactionReference: z.string(),
  platformTransactionReference: z.string(),
  otp: z.string(),
});

const remitaPaymentRequestSchema = z.object({
    amount: z.number(),
    charge: z.number(),
    transactionReference: z.string(),
    customerEmail: z.string().email(),
    customerName: z.string(),
    customerPhoneNumber: z.string(),
    description: z.string(),
});

const remitaReceiptSchema = z.object({
  rrr: z.string(),
});

const remitaRrrValidationSchema = z.object({
  rrr: z.string(),
  channelId: z.string(),
});

const paystackPaymentRequestSchema = z.object({
  email: z.string().email(),
  amount: z.number(),
  metadata: z.object({
    contestantId: z.string(),
    contestantName: z.string(),
    contestantCategory: z.string(),
    numberOfVotes: z.number(),
  }),
});


export async function sendNominationEmail(formData: z.infer<typeof nominationFormSchema>) {
  const validatedFields = nominationFormSchema.safeParse(formData);
  if (!validatedFields.success) {
    return { success: false, error: 'Invalid form data.' };
  }

  const { category, nomineeName, nomineePhone, nominationReason, nominatorName, nominatorPhone } = validatedFields.data;

  try {
    if (!RESEND_API_KEY) {
      console.warn('Resend API key is not configured. Skipping email but saving nomination.');
      await addNomination(validatedFields.data);
      return { success: true, message: 'Nomination submitted successfully! (Email notification skipped)' };
    }
    
    const resend = new Resend(RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'SR Fitness Awards <noreply@srfitness.com.ng>',
      to: ['sampson07@outlook.com', 'srfitness247@gmail.com'],
      subject: 'New Award Nomination Received!',
      html: `
          <h1>New SR Fitness Award Nomination</h1>
          <p>A new nomination has been submitted. Here are the details:</p>
          <h2>Nominee Details:</h2>
          <ul>
              <li><strong>Category:</strong> ${category}</li>
              <li><strong>Name:</strong> ${nomineeName}</li>
              <li><strong>Phone:</strong> ${nomineePhone}</li>
          </ul>
          <h2>Reason for Nomination:</h2>
          <p>${nominationReason}</p>
          <hr />
          <h2>Nominator Details:</h2>
          <ul>
              <li><strong>Name:</strong> ${nominatorName}</li>
              <li><strong>Phone:</strong> ${nominatorPhone}</li>
          </ul>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return { success: false, error: 'Failed to send nomination email. Please try again.' };
    }

    await addNomination(validatedFields.data);
    
    return { success: true, message: 'Nomination submitted and notification email sent successfully!' };

  } catch (error) {
    console.error('An unexpected error occurred in sendNominationEmail:', error);
    return {
      success: false,
      error: 'An unexpected server error occurred. Please try again later.',
    };
  }
}

export async function recordVote(voteData: z.infer<typeof voteSchema>) {
  const validatedFields = voteSchema.safeParse(voteData);

  if (!validatedFields.success) {
    return {
      success: false,
      error: 'Invalid vote data provided.',
    };
  }

  try {
    await addVote(validatedFields.data);
    return { success: true };
  } catch (error) {
    console.error("Failed to record vote in Server Action: ", error);
    return {
      success: false,
      error: 'There was an error recording your vote to the database.'
    };
  }
}


export async function createPaystackPayment(paymentData: z.infer<typeof paystackPaymentRequestSchema>) {
    const validatedFields = paystackPaymentRequestSchema.safeParse(paymentData);
    if (!validatedFields.success) {
        return { success: false, error: 'Invalid payment data provided.' };
    }

    if (!PAYSTACK_SECRET_KEY) {
        console.error("Paystack secret key is not configured.");
        return { success: false, error: "Payment gateway is not configured correctly." };
    }

    const { email, amount, metadata } = validatedFields.data;

    const body = {
        email,
        amount: amount * 100, // Paystack expects amount in kobo
        callback_url: `${NEXT_PUBLIC_BASE_URL}/vote/callback`,
        metadata,
    };

    try {
        const response = await fetch('https://api.paystack.co/transaction/initialize', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`,
            }
        });
        
        const data = await response.json();
        
        if (data.status) {
            return {
                success: true,
                authorizationUrl: data.data.authorization_url,
            };
        } else {
            console.error("Paystack API error:", data.message);
            return { success: false, error: data.message || 'Payment initiation failed.' };
        }

    } catch (error) {
        console.error("Error calling Paystack API:", error);
        return { success: false, error: "Could not connect to the payment gateway." };
    }
}

export async function verifyPaystackPayment(reference: string) {
    if (!reference) {
        return { success: false, error: 'No payment reference provided.' };
    }

    if (!PAYSTACK_SECRET_KEY) {
        console.error("Paystack secret key is not configured.");
        return { success: false, error: "Payment gateway is not configured correctly." };
    }

    try {
        const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`,
            }
        });

        const data = await response.json();

        if (data.status && data.data.status === 'success') {
            const { contestantId, contestantName, contestantCategory, numberOfVotes } = data.data.metadata;
            const voteData: z.infer<typeof voteSchema> = {
                contestantId,
                contestantName,
                contestantCategory,
                numberOfVotes: Number(numberOfVotes),
            };

            await recordVote(voteData);

            return { 
                success: true, 
                message: 'Payment verified and vote recorded successfully!',
                status: 'success',
            };
        } else {
            return { 
                success: false, 
                error: `Payment verification failed: ${data.data.gateway_response}`,
                status: data.data.status,
            };
        }

    } catch (error) {
        console.error("Error verifying Paystack payment:", error);
        return { success: false, error: "Could not connect to the payment gateway for verification." };
    }
}


export async function createWemaAlatPayment(paymentData: z.infer<typeof wemaPaymentRequestSchema>) {
  const validatedFields = wemaPaymentRequestSchema.safeParse(paymentData);
  if (!validatedFields.success) {
    return { success: false, error: 'Invalid payment data provided.' };
  }
  
  if (!WEMA_ALAT_SUBSCRIPTION_KEY || !WEMA_ALAT_SOURCE_ACCOUNT || !WEMA_ALAT_CHANNEL_ID) {
    console.error("Wema Alat environment variables are not set.");
    return { success: false, error: "Payment gateway is not configured correctly." };
  }

  const { amount, contestantId, contestantName, contestantCategory, numberOfVotes } = validatedFields.data;

  const transactionReference = `SRF-VOTE-${contestantId}-${Date.now()}`;
  const narration = `Vote for ${contestantName} in ${contestantCategory}`;

  const body = {
    amount: amount,
    sourceAccountNumber: WEMA_ALAT_SOURCE_ACCOUNT,
    channelId: WEMA_ALAT_CHANNEL_ID,
    narration: narration,
    transactionReference: transactionReference
  };

  try {
    const response = await fetch('https://wema-alatdev-apimgt.azure-api.net/alat-pay/api/EcommerceTransfer/transfer-fund-request', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Ocp-Apim-Subscription-Key': WEMA_ALAT_SUBSCRIPTION_KEY,
      }
    });
    
    const responseText = await response.text();
    console.log("Wema Alat transfer-fund-request response status:", response.status);
    console.log("Wema Alat transfer-fund-request response body:", responseText);

    if (response.ok) {
        try {
            const data = JSON.parse(responseText);
            return {
                success: true,
                message: "Payment initiated. Please enter OTP.",
                data: {
                    platformTransactionReference: data.platformTransactionReference,
                    transactionReference: transactionReference,
                    channelId: WEMA_ALAT_CHANNEL_ID,
                }
            };
        } catch (e) {
            console.error("Failed to parse JSON from Wema Alat response", e);
             return { success: false, error: `Received an unreadable response from payment gateway: ${responseText}` };
        }
    } else {
       return { success: false, error: `Payment initiation failed: ${responseText}`, status: response.status };
    }

  } catch (error) {
    console.error("Error calling Wema Alat API:", error);
    return { success: false, error: "Could not connect to the payment gateway." };
  }
}

export async function validateWemaAlatPayment(validationData: z.infer<typeof wemaPaymentValidationSchema>) {
    const validatedFields = wemaPaymentValidationSchema.safeParse(validationData);
    if (!validatedFields.success) {
        return { success: false, error: 'Invalid validation data provided.' };
    }

    if (!WEMA_ALAT_SUBSCRIPTION_KEY) {
        console.error("Wema Alat subscription key is not set.");
        return { success: false, error: "Payment gateway is not configured correctly." };
    }

    const { channelId, transactionReference, platformTransactionReference, otp } = validatedFields.data;

    const body = {
        channelId,
        transactionReference,
        platformTransactionReference,
        otp,
    };

    try {
        const response = await fetch('https://wema-alatdev-apimgt.azure-api.net/alat-pay/api/EcommerceTransfer/transfer-fund-validation', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'Ocp-Apim-Subscription-Key': WEMA_ALAT_SUBSCRIPTION_KEY,
            }
        });

        const responseText = await response.text();
        console.log("Wema Alat transfer-fund-validation response status:", response.status);
        console.log("Wema Alat transfer-fund-validation response body:", responseText);
        
        if(response.ok) {
            return { success: true, message: "Payment validated successfully!" };
        } else {
            return { success: false, error: `OTP validation failed: ${responseText}` };
        }

    } catch(error) {
        console.error("Error calling Wema Alat validation API:", error);
        return { success: false, error: "Could not connect to the payment gateway for validation." };
    }
}


export async function checkWemaAlatTransactionStatus(statusData: z.infer<typeof wemaPaymentStatusSchema>) {
    const validatedFields = wemaPaymentStatusSchema.safeParse(statusData);
    if (!validatedFields.success) {
        return { success: false, error: 'Invalid transaction data' };
    }

    const { channelId, transactionReference } = validatedFields.data;

    const wemaAlatUrl = `https://wema-alatdev-apimgt.azure-api.net/alat-pay/api/EcommerceTransfer/CheckTransactionStatus/${channelId}/${transactionReference}`;

    if (!WEMA_ALAT_SUBSCRIPTION_KEY) {
        console.error("Wema Alat subscription key is not set in environment variables.");
        return { success: false, error: "Payment gateway is not configured." };
    }
    
    try {
        const response = await fetch(wemaAlatUrl, {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-cache',
                'Ocp-Apim-Subscription-Key': WEMA_ALAT_SUBSCRIPTION_KEY,
            }
        });

        const resultText = await response.text();
        const resultStatus = response.status;
        console.log('Wema Alat Status:', resultStatus);
        console.log('Wema Alat Response:', resultText);

        if (response.ok) {
            return { success: true, status: resultStatus, data: resultText };
        } else {
            return { success: false, error: `Failed to check transaction status: ${resultText}`, status: resultStatus };
        }

    } catch (error) {
        console.error("Error calling Wema Alat API:", error);
        return { success: false, error: "Could not connect to the payment gateway." };
    }
}


export async function createRemitaPayment(paymentData: z.infer<typeof remitaPaymentRequestSchema>) {
    const validatedFields = remitaPaymentRequestSchema.safeParse(paymentData);
    if (!validatedFields.success) {
        return { success: false, error: "Invalid Remita payment data." };
    }

    if (!WEMA_ALAT_SUBSCRIPTION_KEY) {
        console.error("Remita subscription key is not set.");
        return { success: false, error: "Payment gateway is not configured correctly." };
    }

    const { amount, charge, transactionReference, customerEmail, customerName, customerPhoneNumber, description } = validatedFields.data;

    const body = {
        channelId: "string", // Placeholder
        cif: "string", // Placeholder
        customerAccount: "string", // Placeholder
        amount: amount,
        charge: charge,
        transactionReference: transactionReference,
        customerEmail: customerEmail,
        customerPhoneNumber: customerPhoneNumber,
        customerName: customerName,
        rrr: "string", // Placeholder
        payerEmail: customerEmail,
        payerName: customerName,
        payerNumber: customerPhoneNumber,
        description: description,
        billAuthOptions: {
            pin: "string",
            otp: "string",
            biometricPolicy: "string",
            biometricToken: "string",
            platformTransactionReference: "string",
            authenticationType: 0
        }
    };

    try {
        const response = await fetch('https://wema-alatdev-apimgt.azure-api.net/remita-payments/api/RemitaPayment/PayRemitaBill', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'Ocp-Apim-Subscription-Key': WEMA_ALAT_SUBSCRIPTION_KEY,
            }
        });

        const responseText = await response.text();
        console.log("Remita PayRemitaBill response status:", response.status);
        console.log("Remita PayRemitaBill response body:", responseText);
        
        if (response.ok) {
            return { success: true, message: "Remita payment processed successfully.", data: JSON.parse(responseText) };
        } else {
             if (response.status === 500) {
                 return { success: false, error: `Remita payment failed due to an internal server error on the gateway. Please try again later or contact support.` };
             }
            return { success: false, error: `Remita payment failed: ${responseText}` };
        }

    } catch(error) {
        console.error("Error calling Remita PayRemitaBill API:", error);
        return { success: false, error: "Could not connect to the Remita payment gateway." };
    }
}

export async function printRemitaReceipt(receiptData: z.infer<typeof remitaReceiptSchema>) {
    const validatedFields = remitaReceiptSchema.safeParse(receiptData);
    if (!validatedFields.success) {
        return { success: false, error: "Invalid Remita receipt data." };
    }

    const { rrr } = validatedFields.data;

    const remitaUrl = `https://wema-alatdev-apimgt.azure-api.net/remita-payments/api/RemitaPayment/PrintRemitaReceipt/${rrr}`;

    try {
        const response = await fetch(remitaUrl, {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-cache',
            }
        });

        const responseText = await response.text();
        console.log("Remita PrintRemitaReceipt response status:", response.status);
        console.log("Remita PrintRemitaReceipt response body:", responseText);
        
        if (response.ok) {
            return { success: true, receiptData: responseText };
        } else {
            return { success: false, error: `Failed to fetch Remita receipt: ${responseText}` };
        }

    } catch(error) {
        console.error("Error calling Remita PrintRemitaReceipt API:", error);
        return { success: false, error: "Could not connect to the Remita payment gateway to print receipt." };
    }
}


export async function validateRemitaRrr(validationData: z.infer<typeof remitaRrrValidationSchema>) {
    const validatedFields = remitaRrrValidationSchema.safeParse(validationData);
    if (!validatedFields.success) {
        return { success: false, error: "Invalid Remita RRR validation data." };
    }

    const { rrr, channelId } = validatedFields.data;

    const remitaUrl = `https://wema-alatdev-apimgt.azure-api.net/remita-payments/api/RemitaPayment/ValidateRrr/${rrr}/${channelId}`;

    try {
        const response = await fetch(remitaUrl, {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-cache',
            }
        });

        const responseText = await response.text();
        console.log("Remita ValidateRrr response status:", response.status);
        console.log("Remita ValidateRrr response body:", responseText);
        
        if (response.ok) {
            return { success: true, message: "Remita RRR validated successfully.", data: JSON.parse(responseText) };
        } else {
            return { success: false, error: `Failed to validate Remita RRR: ${responseText}` };
        }

    } catch(error) {
        console.error("Error calling Remita ValidateRrr API:", error);
        return { success: false, error: "Could not connect to the Remita payment gateway to validate RRR." };
    }
}

    

    

    

    

    
