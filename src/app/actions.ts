
'use server';

import { z } from 'zod';
import { addVote } from '@/services/firestore';

// Explicitly read environment variables at the top level
const WEMA_ALAT_SUBSCRIPTION_KEY = process.env.WEMA_ALAT_SUBSCRIPTION_KEY;
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
