
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { addVote } from '@/services/firestore';

const voteSchema = z.object({
  contestantId: z.string(),
  contestantName: z.string(),
  contestantCategory: z.string(),
  numberOfVotes: z.number().int().positive(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedVote = voteSchema.safeParse(body);

    if (!validatedVote.success) {
      return NextResponse.json({ error: 'Invalid vote data provided.', details: validatedVote.error.flatten() }, { status: 400 });
    }

    // You can add more logic here, e.g., sending data to another service,
    // before or after saving it to Firestore.

    await addVote(validatedVote.data);

    // This console.log will appear in your Next.js server logs
    console.log('Vote successfully processed by API route:', validatedVote.data);

    return NextResponse.json({ message: 'Vote recorded successfully by the API.' }, { status: 200 });

  } catch (error) {
    console.error('Error in vote API route:', error);
    
    if (error instanceof z.ZodError) {
        return NextResponse.json({ error: 'Validation failed', details: error.errors }, { status: 400 });
    }

    return NextResponse.json({ error: 'An internal server error occurred.' }, { status: 500 });
  }
}

    