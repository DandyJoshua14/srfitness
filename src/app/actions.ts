
'use server';

import { z } from 'zod';
// import { Resend } from 'resend';

const nominationFormSchema = z.object({
  category: z.string(),
  nomineeName: z.string(),
  nomineePhone: z.string(),
  nominationReason: z.string(),
  nominatorName: z.string(),
  nominatorPhone: z.string(),
});

// Example using Resend. You would install it with `npm install resend`
// const resend = new Resend(process.env.RESEND_API_KEY);
// const YOUR_EMAIL = process.env.NOTIFICATION_EMAIL; // The email you want to receive nominations at

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

  // 3. Send the email (this part is commented out until you set up an email provider)
  try {
    //  if (!YOUR_EMAIL) {
    //      console.error("Email sending is not configured. Missing NOTIFICATION_EMAIL in .env file.");
    //      // We still return success to the user because the data was logged.
    //      return { success: true };
    //  }
    //
    //  await resend.emails.send({
    //      from: 'SR Fitness Awards <noreply@yourdomain.com>', // Needs a verified domain in Resend
    //      to: YOUR_EMAIL,
    //      subject: `New Award Nomination: ${nomineeName} for ${category}`,
    //      html: `
    //          <h1>New Award Nomination</h1>
    //          <p><strong>Category:</strong> ${category}</p>
    //          <p><strong>Nominee Name:</strong> ${nomineeName}</p>
    //          <p><strong>Nominee Phone:</strong> ${nomineePhone}</p>
    //          <hr>
    //          <h2>Reason for Nomination:</h2>
    //          <p>${nominationReason}</p>
    //          <hr>
    //          <p><strong>Nominated By:</strong> ${nominatorName}</p>
    //          <p><strong>Nominator's Phone:</strong> ${nominatorPhone}</p>
    //      `
    //  });

    return { success: true };

  } catch (error) {
    console.error('Email sending failed:', error);
    return {
      success: false,
      error: 'Sorry, we couldn\'t submit your nomination at this time.',
    };
  }
}
