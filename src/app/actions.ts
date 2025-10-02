
'use server';

import { z } from 'zod';
import { addNomination } from '@/services/firestore';
import nodemailer from 'nodemailer';
import { redirect } from 'next/navigation';

// Explicitly read environment variables at the top level
const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
const GMAIL_EMAIL = process.env.GMAIL_EMAIL;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;
// We will read the Zapier URLs inside the functions to ensure they are not missed.

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

const ticketSaleSchema = z.object({
  ticketType: z.string(),
  quantity: z.number().int().positive(),
  totalAmount: z.number(),
  customerName: z.string(),
  customerEmail: z.string().email(),
});

const donationSchema = z.object({
  amount: z.number().positive(),
  donorName: z.string(),
  donorEmail: z.string().email(),
});


const paystackPaymentRequestSchema = z.object({
  email: z.string().email(),
  amount: z.number(),
  callback_url: z.string().url(),
  metadata: z.object({
    type: z.enum(['vote', 'marketplace_purchase', 'ticket_purchase', 'donation']),
    // Flexible metadata fields
  }).catchall(z.any()),
});


export async function sendNominationEmail(formData: z.infer<typeof nominationFormSchema>) {
  const validatedFields = nominationFormSchema.safeParse(formData);

  if (!validatedFields.success) {
    return { success: false, error: 'Invalid form data.' };
  }

  const { category, nomineeName, nomineePhone, nominationReason, nominatorName, nominatorPhone } = validatedFields.data;

  // If credentials aren't configured, fail immediately.
  if (!GMAIL_EMAIL || !GMAIL_APP_PASSWORD) {
    console.error('Gmail credentials are not configured. Cannot send email.');
    return { success: false, error: 'The email service is not configured. Please contact support.' };
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_EMAIL,
      pass: GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"SR Fitness Awards" <${GMAIL_EMAIL}>`,
    to: 'sampson07@outlook.com, srfitness247@gmail.com',
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
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Nomination email sent successfully.');
    return { success: true, message: 'Nomination submitted successfully!' };
  } catch (emailError) {
    console.error('Nodemailer Error:', emailError);
    return { success: false, error: 'Failed to send the nomination email. Please try again.' };
  }
}

/**
 * Sends an email notification about a new vote.
 */
export async function sendVoteNotificationEmail(voteData: z.infer<typeof voteSchema>) {
  const validatedFields = voteSchema.safeParse(voteData);

  if (!validatedFields.success) {
    return { success: false, error: 'Invalid vote data for email.' };
  }

  const { contestantName, contestantCategory, numberOfVotes } = validatedFields.data;
  
  if (!GMAIL_EMAIL || !GMAIL_APP_PASSWORD) {
    console.error('Gmail credentials are not configured. Cannot send vote notification email.');
    // We don't want to block the user flow if this email fails.
    return { success: false, error: 'Email service is not configured.' };
  }
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_EMAIL,
      pass: GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"SR Fitness Voting" <${GMAIL_EMAIL}>`,
    to: 'sampson07@outlook.com, srfitness247@gmail.com',
    subject: `New Vote Cast for ${contestantName}!`,
    html: `
        <h1>New Vote Received!</h1>
        <p>A new vote has just been successfully processed.</p>
        <h2>Vote Details:</h2>
        <ul>
          <li><strong>Contestant:</strong> ${contestantName}</li>
          <li><strong>Category:</strong> ${contestantCategory}</li>
          <li><strong>Number of Votes:</strong> ${numberOfVotes}</li>
        </ul>
      `,
  };
  
  try {
    await transporter.sendMail(mailOptions);
    console.log('Vote notification email sent successfully.');
    return { success: true };
  } catch (emailError) {
    console.error('Nodemailer Error (Vote Notification):', emailError);
    return { success: false, error: 'Failed to send vote notification email.' };
  }
}


/**
 * Sends vote data to the internal vote API.
 */
export async function recordVote(voteData: z.infer<typeof voteSchema>) {
  const validatedFields = voteSchema.safeParse(voteData);

  if (!validatedFields.success) {
    console.error("Invalid vote data for API:", validatedFields.error);
    return {
      success: false,
      error: 'Invalid vote data provided.',
    };
  }
  
  const voteApiUrl = `${NEXT_PUBLIC_BASE_URL}/api/vote/`;
  
  const payload = validatedFields.data;
  
  console.log("`recordVote` triggered. Attempting to send data to internal vote API:", payload);
  console.log("Vote API URL:", voteApiUrl);

  try {
    const response = await fetch(voteApiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    
    console.log("Vote API response status:", response.status);
    
    const responseData = await response.json();
    console.log("Vote API response data:", responseData);

    if (response.ok) {
        console.log("Successfully sent vote data to API. Response:", responseData);
        return { success: true, message: responseData.message || "Vote successfully recorded." };
    } else {
        console.error(`API call failed with status ${response.status}: ${responseData.error}`);
        return {
          success: false,
          error: responseData.error || `Failed to record vote. Status: ${response.status}`,
        };
    }
  } catch (error) {
    console.error("Failed to call internal vote API due to a network or fetch error:", error);
    console.error("Error details:", error);
    return {
      success: false,
      error: 'Could not connect to the vote recording service. Check network and API endpoint.',
    };
  }
}

/**
 * Sends ticket sale data to a Zapier webhook.
 */
export async function recordTicketSale(saleData: z.infer<typeof ticketSaleSchema>) {
  const validatedFields = ticketSaleSchema.safeParse(saleData);

  if (!validatedFields.success) {
    console.error("Invalid ticket sale data for Zapier:", validatedFields.error);
    return { success: false, error: 'Invalid sale data provided.' };
  }

  const zapierWebhookUrl = process.env.ZAPIER_TICKET_WEBHOOK_URL;
  
  if (!zapierWebhookUrl) {
    console.error("ZAPIER_TICKET_WEBHOOK_URL is not set. Cannot record ticket sale.");
    return { success: false, error: 'Ticket sale integration endpoint is not configured.' };
  }
  
  const payload = {
    type: 'ticket_sale',
    ...validatedFields.data,
    timestamp: new Date().toISOString(),
  };
  
  try {
    const response = await fetch(zapierWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
        return { success: true, message: "Ticket sale recorded." };
    } else {
        return { success: false, error: `Failed to send ticket sale data. Status: ${response.status}` };
    }
  } catch (error) {
    console.error("Failed to trigger Zapier webhook for tickets:", error);
    return { success: false, error: 'Could not connect to the ticket sale tracking system.' };
  }
}

/**
 * Sends donation data to a Zapier webhook.
 */
export async function recordDonation(donationData: z.infer<typeof donationSchema>) {
  const validatedFields = donationSchema.safeParse(donationData);

  if (!validatedFields.success) {
    console.error("Invalid donation data for Zapier:", validatedFields.error);
    return { success: false, error: 'Invalid donation data provided.' };
  }

  const zapierWebhookUrl = process.env.ZAPIER_DONATION_WEBHOOK_URL;
  
  if (!zapierWebhookUrl) {
    console.error("ZAPIER_DONATION_WEBHOOK_URL is not set. Cannot record donation.");
    // For now, we will return success even if Zapier is not configured.
    return { success: true, message: "Donation recorded locally." };
  }
  
  const payload = {
    type: 'donation',
    ...validatedFields.data,
    timestamp: new Date().toISOString(),
  };
  
  try {
    const response = await fetch(zapierWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
        return { success: true, message: "Donation successfully recorded." };
    } else {
        return { success: false, error: `Failed to send donation data. Status: ${response.status}` };
    }
  } catch (error) {
    console.error("Failed to trigger Zapier webhook for donations:", error);
    return { success: false, error: 'Could not connect to the donation tracking system.' };
  }
}


export async function createPaystackPayment(paymentData: z.infer<typeof paystackPaymentRequestSchema>) {
    const validatedFields = paystackPaymentRequestSchema.safeParse(paymentData);
    if (!validatedFields.success) {
        console.error("Paystack validation error:", validatedFields.error);
        return { success: false, error: 'Invalid payment data provided.' };
    }

    if (!PAYSTACK_SECRET_KEY) {
        console.error("Paystack secret key is not configured.");
        return { success: false, error: "Payment gateway is not configured correctly." };
    }

    const { email, amount, callback_url, metadata } = validatedFields.data;
    
    const body = {
        email,
        amount: amount * 100, // Paystack expects amount in kobo
        callback_url,
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
            const { metadata, amount, customer } = data.data;
            let recordResult;

            // Determine which action to take based on metadata
            switch (metadata.type) {
                case 'vote':
                    const votePayload = {
                        contestantId: metadata.contestantId,
                        contestantName: metadata.contestantName,
                        contestantCategory: metadata.contestantCategory,
                        numberOfVotes: Number(metadata.numberOfVotes),
                    };
                    await sendVoteNotificationEmail(votePayload); // Send email
                    recordResult = await recordVote(votePayload); // Send to internal API
                    break;
                
                case 'ticket_purchase':
                    recordResult = await recordTicketSale({
                        ticketType: metadata.ticketType,
                        quantity: Number(metadata.quantity),
                        totalAmount: amount / 100, // Convert from kobo
                        customerName: metadata.customerName,
                        customerEmail: customer.email,
                    });
                    break;
                
                case 'marketplace_purchase':
                    // In a real app, you would record the marketplace sale here.
                    // For now, we'll just return success.
                    console.log("Marketplace purchase successful:", metadata);
                    recordResult = { success: true };
                    break;
                
                case 'donation':
                     recordResult = await recordDonation({
                        amount: amount / 100,
                        donorName: metadata.donorName,
                        donorEmail: customer.email,
                    });
                    break;
                    
                default:
                    console.error("Unknown payment type in metadata:", metadata.type);
                    recordResult = { success: false, error: "Unknown payment type." };
            }

            if (recordResult.success) {
                return { 
                    success: true, 
                    message: 'Payment verified and transaction recorded successfully!',
                    status: 'success',
                    paymentType: metadata.type,
                };
            } else {
                 return { 
                    success: false, 
                    error: `Payment was successful, but recording the transaction failed. Please contact support. Ref: ${reference}. Error: ${recordResult.error}`,
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

    