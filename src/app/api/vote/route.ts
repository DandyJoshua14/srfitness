
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { addVote, initializeVotesTable, initializeNominationsTable } from '@/services/database-service';

const voteSchema = z.object({
  contestantId: z.string(),
  contestantName: z.string(),
  contestantCategory: z.string(),
  numberOfVotes: z.number().int().positive(),
});

// Initialize database table on first use
let tableInitialized = false;

export async function POST(request: Request) {
  try {
    // Initialize database table if not already done
    if (!tableInitialized) {
      await initializeVotesTable();
      tableInitialized = true;
    }

    // Get raw text first to debug
    const rawText = await request.text();
    console.log('Raw request body:', rawText);
    
    // Parse JSON with better error handling
    let body;
    try {
      body = JSON.parse(rawText);
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      console.error('Raw text that failed to parse:', rawText);
      return NextResponse.json({ error: 'Invalid JSON format in request body.' }, { status: 400 });
    }
    
    const validatedVote = voteSchema.safeParse(body);

    if (!validatedVote.success) {
      return NextResponse.json({ error: 'Invalid vote data provided.', details: validatedVote.error.flatten() }, { status: 400 });
    }

    // Convert to database format
    const voteData = {
      contestant_id: validatedVote.data.contestantId,
      contestant_name: validatedVote.data.contestantName,
      contestant_category: validatedVote.data.contestantCategory,
      number_of_votes: validatedVote.data.numberOfVotes,
    };

    const savedVote = await addVote(voteData);

    console.log('Vote successfully written to PostgreSQL:', savedVote);

    return NextResponse.json({ message: 'Vote recorded successfully in PostgreSQL database.' }, { status: 200 });

  } catch (error) {
    console.error('Error in vote API route (PostgreSQL):', error);
    
    if (error instanceof z.ZodError) {
        return NextResponse.json({ error: 'Validation failed', details: error.errors }, { status: 400 });
    }

    return NextResponse.json({ error: 'An internal server error occurred while writing to PostgreSQL database.' }, { status: 500 });
  }
}
