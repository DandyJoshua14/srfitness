
'use server';

import { z } from 'zod';
import { addVote } from '@/services/firestore';

// Explicitly read environment variables at the top level
const OPAY_MERCHANT_ID = process.env.OPAY_MERCHANT_ID;
const OPAY_PUBLIC_KEY = process.env.OPAY_PUBLIC_KEY;
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

const opayPaymentSchema = z.object({
  amount: z.number(),
  contestantName: z.string(),
  contestantId: z.string(),
  contestantCategory: z.string(),
  numberOfVotes: z.number().int().positive(),
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

export async function createOpayPayment(paymentData: z.infer<typeof opayPaymentSchema>) {
    const validatedFields = opayPaymentSchema.safeParse(paymentData);
    if (!validatedFields.success) {
        return { success: false, error: 'Invalid payment data' };
    }

    const { amount, contestantName, contestantId, contestantCategory, numberOfVotes } = validatedFields.data;

    const opayUrl = "https://testapi.opaycheckout.com/api/v1/international/cashier/create";

    if (!OPAY_MERCHANT_ID || !OPAY_PUBLIC_KEY) {
        console.error("OPay credentials are not set in environment variables.");
        return { success: false, error: "Payment gateway is not configured." };
    }

    const reference = `SRVOTE_${contestantId}_${Date.now()}`;
    
    // This payload is structured based on the provided working example
    const payload = {
        amount: {
            total: amount,
            currency: "NGN"
        },
        reference: reference,
        country: "NG",
        returnUrl: `${NEXT_PUBLIC_BASE_URL}/vote?payment=success&ref=${reference}`,
        cancelUrl: `${NEXT_PUBLIC_BASE_URL}/vote?payment=cancelled`,
        callbackUrl: `${NEXT_PUBLIC_BASE_URL}/api/opay-webhook`,
        expireAt: 300,
        product: {
            name: `Vote for ${contestantName}`,
            description: `${numberOfVotes} votes for ${contestantCategory}`,
        },
        userInfo: {
            userId: `voter_${Date.now()}`,
            userName: "SR Fitness Voter",
            userEmail: "voter@example.com",
            userMobile: "9999999999"
        }
    };
    
    try {
        const response = await fetch(opayUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPAY_PUBLIC_KEY}`,
                'MerchantId': OPAY_MERCHANT_ID
            },
            body: JSON.stringify(payload)
        });

        const result = await response.json();

        if (result.code === "00000" && result.data?.cashierUrl) {
            return { success: true, checkoutUrl: result.data.cashierUrl };
        } else {
            console.error("OPay API Error:", result);
            return { success: false, error: result.message || 'Failed to create payment link.' };
        }

    } catch (error) {
        console.error("Error calling OPay API:", error);
        return { success: false, error: "Could not connect to the payment gateway." };
    }
}
