
'use server';

import { z } from 'zod';
import { addNomination } from '@/services/firestore';
import { Resend } from 'resend';
import { redirect } from 'next/navigation';

// Explicitly read environment variables at the top level
const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:9002';
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;
// We will read the Zapier URL inside the function to ensure it's not missed.

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

const remitaPaymentRequestSchema = z.object({
  amount: z.number(),
  charge: z.number(),
  transactionReference: z.string(),
  customerEmail: z.string().email(),
  customerName: z.string(),
  customerPhoneNumber: z.string(),
  description: z.string(),
  // Pass along vote data for recording
  contestantId: z.string(),
  contestantName: z.string(),
  contestantCategory: z.string(),
  numberOfVotes: z.number(),
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
  
  try {
    const { category, nomineeName, nomineePhone, nominationReason, nominatorName, nominatorPhone } = validatedFields.data;

    // 1. Attempt to send email
    if (RESEND_API_KEY) {
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
        // If email fails, return an error and do not save to DB
        console.error('Resend API Error:', error);
        return { success: false, error: 'Failed to send nomination email. Please try again.' };
      }
    } else {
        console.warn('Resend API key is not configured. Skipping email sending.');
    }

    // 2. If email is sent (or skipped), save to Firestore
    await addNomination(validatedFields.data);
    
    return { success: true, message: 'Nomination submitted successfully!' };

  } catch (error) {
    console.error('An unexpected error occurred in sendNominationEmail:', error);
    return {
      success: false,
      error: 'An unexpected server error occurred. Please try again later.',
    };
  }
}

/**
 * Sends vote data to a Zapier webhook.
 */
export async function recordVote(voteData: z.infer<typeof voteSchema>) {
  const validatedFields = voteSchema.safeParse(voteData);

  if (!validatedFields.success) {
    console.error("Invalid vote data for Zapier:", validatedFields.error);
    return {
      success: false,
      error: 'Invalid vote data provided.',
    };
  }

  const zapierWebhookUrl = process.env.ZAPIER_VOTE_WEBHOOK_URL;
  
  if (!zapierWebhookUrl) {
    console.error("ZAPIER_VOTE_WEBHOOK_URL is not set. Cannot send vote data.");
    return {
      success: false,
      error: 'Integration endpoint is not configured. Please contact support.',
    };
  }
  
  const payload = {
    ...validatedFields.data,
    timestamp: new Date().toISOString(),
  };
  
  console.log("`recordVote` triggered. Attempting to send data to Zapier webhook:", payload);

  try {
    const response = await fetch(zapierWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
        console.log("Successfully sent vote data to Zapier. Response status:", response.status);
        return { success: true, message: "Vote successfully recorded." };
    } else {
        const responseBody = await response.text();
        console.error(`Zapier webhook call failed with status ${response.status}: ${responseBody}`);
        return {
          success: false,
          error: `Failed to send vote data to the tracking system. Status: ${response.status}`,
        };
    }
  } catch (error) {
    console.error("Failed to trigger Zapier webhook due to a network or fetch error:", error);
    return {
      success: false,
      error: 'Could not connect to the vote tracking system.',
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
    
    // Ensure the callback URL is correctly formed.
    const callbackUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:9002'}/vote/callback`;


    const body = {
        email,
        amount: amount * 100, // Paystack expects amount in kobo
        callback_url: callbackUrl,
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
        return { success: false, error: 'No payment reference provided.', status: 'error' };
    }
    
    // --- TEMPORARY TEST BLOCK ---
    if (reference === 'test-zapier') {
        console.log('--- ZAPIER TEST MODE ACTIVATED ---');
        const testVoteData = {
            contestantId: 'test-001',
            contestantName: 'Test Contestant',
            contestantCategory: 'Test Category',
            numberOfVotes: 5,
        };
        const voteRecordResult = await recordVote(testVoteData);
        if (voteRecordResult.success) {
            return { 
                success: true, 
                message: 'TEST: Zapier webhook triggered successfully!',
                status: 'success',
            };
        } else {
            return { 
                success: false, 
                error: `TEST FAILED: ${voteRecordResult.error}`,
                status: 'error',
            };
        }
    }
    // --- END TEMPORARY TEST BLOCK ---

    if (!PAYSTACK_SECRET_KEY) {
        console.error("Paystack secret key is not configured.");
        return { success: false, error: "Payment gateway is not configured correctly.", status: 'error' };
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
            
            // This is the crucial step: record the vote only after successful verification.
            const voteRecordResult = await recordVote({
                contestantId,
                contestantName,
                contestantCategory,
                numberOfVotes: Number(numberOfVotes),
            });

            if (voteRecordResult.success) {
                return { 
                    success: true, 
                    message: 'Payment verified and vote recorded successfully!',
                    status: 'success',
                };
            } else {
                 return { 
                    success: false, 
                    error: `Payment was successful, but vote recording failed. Please contact support. Error: ${voteRecordResult.error}`,
                    status: 'error',
                };
            }
            
        } else {
            return { 
                success: false, 
                error: `Payment verification failed: ${data.data.gateway_response || 'Unknown reason.'}`,
                status: data.data.status || 'failed',
            };
        }

    } catch (error) {
        console.error("Error verifying Paystack payment:", error);
        return { success: false, error: "Could not connect to the payment gateway for verification.", status: 'error' };
    }
}


export async function createRemitaPayment(paymentData: z.infer<typeof remitaPaymentRequestSchema>) {
    const validatedFields = remitaPaymentRequestSchema.safeParse(paymentData);
    if (!validatedFields.success) {
        return { success: false, error: "Invalid Remita payment data." };
    }

    // Remita API key is missing. Assuming it's also a subscription key, similar to the Wema one that was removed.
    const REMITA_SUBSCRIPTION_KEY = process.env.REMITA_SUBSCRIPTION_KEY;
    if (!REMITA_SUBSCRIPTION_KEY) {
      console.error("Remita subscription key is not set.");
      return { success: false, error: "Payment gateway is not configured correctly." };
    }


    const { amount, charge, transactionReference, customerEmail, customerName, customerPhoneNumber, description, contestantId, contestantName, contestantCategory, numberOfVotes } = validatedFields.data;

    const body = {
        // ... (Remita API specific body, placeholders for simplicity)
        channelId: "string", 
        cif: "string", 
        customerAccount: "string", 
        amount: amount,
        charge: charge,
        transactionReference: transactionReference,
        customerEmail: customerEmail,
        customerPhoneNumber: customerPhoneNumber,
        customerName: customerName,
        rrr: "string", 
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
                'Ocp-Apim-Subscription-Key': REMITA_SUBSCRIPTION_KEY,
            }
        });

        const responseText = await response.text();
        console.log("Remita PayRemitaBill response status:", response.status);
        console.log("Remita PayRemitaBill response body:", responseText);
        
        if (response.ok) {
            const voteData = { contestantId, contestantName, contestantCategory, numberOfVotes };
            const voteRecordResult = await recordVote(voteData);
            if (voteRecordResult.success) {
                return { success: true, message: "Remita payment processed and vote recorded successfully.", data: JSON.parse(responseText) };
            } else {
                return { success: false, error: `Remita payment succeeded, but vote recording failed: ${voteRecordResult.error}` };
            }
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
    
    // Remita API key is missing. Assuming it's also a subscription key.
    const REMITA_SUBSCRIPTION_KEY = process.env.REMITA_SUBSCRIPTION_KEY;
    if (!REMITA_SUBSCRIPTION_KEY) {
      console.error("Remita subscription key is not set.");
      return { success: false, error: "Payment gateway is not configured correctly." };
    }

    const { rrr } = validatedFields.data;

    const remitaUrl = `https://wema-alatdev-apimgt.azure-api.net/remita-payments/api/RemitaPayment/PrintRemitaReceipt/${rrr}`;

    try {
        const response = await fetch(remitaUrl, {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-cache',
                'Ocp-Apim-Subscription-Key': REMITA_SUBSCRIPTION_KEY,
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

    // Remita API key is missing. Assuming it's also a subscription key.
    const REMITA_SUBSCRIPTION_KEY = process.env.REMITA_SUBSCRIPTION_KEY;
    if (!REMITA_SUBSCRIPTION_KEY) {
      console.error("Remita subscription key is not set.");
      return { success: false, error: "Payment gateway is not configured correctly." };
    }
    
    const { rrr, channelId } = validatedFields.data;

    const remitaUrl = `https://wema-alatdev-apimgt.azure-api.net/remita-payments/api/RemitaPayment/ValidateRrr/${rrr}/${channelId}`;

    try {
        const response = await fetch(remitaUrl, {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-cache',
                'Ocp-Apim-Subscription-Key': REMITA_SUBSCRIPTION_KEY,
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

    