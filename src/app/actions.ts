
'use server';

import { z } from 'zod';
import { addVote } from '@/services/firestore';
import crypto from 'crypto';

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

    const OpayUrl = "https://testapi.opaycheckout.com/api/v1/international/cashier/create";
    const merchantId = process.env.OPAY_MERCHANT_ID;
    const secretKey = process.env.OPAY_SECRET_KEY;

    if (!merchantId || !secretKey) {
        console.error("OPay credentials are not set in environment variables.");
        return { success: false, error: "Payment gateway is not configured." };
    }

    const reference = `SRVOTE_${contestantId}_${Date.now()}`;

    const payload = {
        amount: {
            total: amount,
            currency: "NGN"
        },
        reference,
        country: "NG",
        returnUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/vote?payment=success&ref=${reference}`,
        cancelUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/vote?payment=cancelled`,
        callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/opay-webhook`, // Needs a webhook handler
        customer: {
            name: "SR Fitness Voter",
            email: "voter@example.com"
        },
        products: [{
            name: `Vote for ${contestantName}`,
            description: `${numberOfVotes} votes for ${contestantCategory}`,
            price: amount,
            quantity: 1
        }]
    };
    
    const payloadString = JSON.stringify(payload);
    const signature = crypto.createHmac('sha512', secretKey).update(payloadString).digest('hex');

    try {
        const response = await fetch(OpayUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${secretKey}`,
                'MerchantId': merchantId
            },
            body: payloadString
        });

        const result = await response.json();

        if (result.code === "00000" && result.data?.cashierUrl) {
            // Before returning, let's also record the vote optimistically
            // In a real app, you'd wait for the webhook confirmation
            await recordVote({ contestantId, contestantName, contestantCategory, numberOfVotes });
            
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
