
'use server';

import { z } from 'zod';
import { addVote } from '@/services/firestore';

// Explicitly read environment variables at the top level
const WEMA_ALAT_SUBSCRIPTION_KEY = process.env.WEMA_ALAT_SUBSCRIPTION_KEY;
const WEMA_ALAT_SOURCE_ACCOUNT = process.env.WEMA_ALAT_SOURCE_ACCOUNT;
const WEMA_ALAT_CHANNEL_ID = process.env.WEMA_ALAT_CHANNEL_ID;
const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


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


export async function sendNominationEmail(formData: z.infer<typeof nominationFormSchema>) {
  
  // 1. Validate the data on the server
  const validatedFields = nominationFormSchema.safeParse(formData);
  if (!validatedFields.success) {
    return {
      success: false,
      error: 'Invalid form data.',
    };
  }

  const { category, nomineeName, nomineePhone, nominationReason, nominatorName, nominatorPhone } = validatedFields.data;

  // 2. Log the data to the server console (this will work without any setup)
  console.log('New Nomination Received:');
  console.log({
    category,
    nomineeName,
    nomineePhone,
    nominationReason,
    nominatorName,
    nominatorPhone,
  });

  try {
    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    return {
      success: false,
      error: 'Sorry, we couldn\'t submit your nomination at this time.',
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
            // Assuming the platformTransactionReference is in the response body.
            // This may need to adjustment based on the actual API response structure.
            return {
                success: true,
                message: "Payment initiated. Please enter OTP.",
                data: {
                    platformTransactionReference: data.platformTransactionReference, // Adjust this key based on actual response
                    transactionReference: transactionReference,
                    channelId: WEMA_ALAT_CHANNEL_ID,
                }
            };
        } catch (e) {
            console.error("Failed to parse JSON from Wema Alat response", e);
             return { success: false, error: "Received an unreadable response from payment gateway." };
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
            // Assuming a 200 OK response means success. You might need to adjust based on the actual API response content.
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

    // NOTE: This endpoint does not seem to require the Ocp-Apim-Subscription-Key based on the user's snippet.
    // This may need to be adjusted.

    const { amount, charge, transactionReference, customerEmail, customerName, customerPhoneNumber, description } = validatedFields.data;

    // NOTE: Many fields are missing from the input and are hardcoded as placeholders.
    // This function will need to be updated with real data.
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
        payerEmail: customerEmail, // Assuming payer is the customer
        payerName: customerName, // Assuming payer is the customer
        payerNumber: customerPhoneNumber, // Assuming payer is the customer
        description: description,
        billAuthOptions: {
            pin: "string", // Placeholder
            otp: "string", // Placeholder
            biometricPolicy: "string", // Placeholder
            biometricToken: "string", // Placeholder
            platformTransactionReference: "string", // Placeholder
            authenticationType: 0 // Placeholder
        }
    };

    try {
        const response = await fetch('https://wema-alatdev-apimgt.azure-api.net/remita-payments/api/RemitaPayment/PayRemitaBill', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
            }
        });

        const responseText = await response.text();
        console.log("Remita PayRemitaBill response status:", response.status);
        console.log("Remita PayRemitaBill response body:", responseText);
        
        if (response.ok) {
            return { success: true, message: "Remita payment processed successfully.", data: JSON.parse(responseText) };
        } else {
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
            // Depending on what the API returns (e.g., HTML, a URL to a PDF),
            // this response will need to be handled by the client.
            // For now, we'll just return the text content.
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
    