
import { NextResponse } from 'next/server';
import { z } from 'zod';
import fs from 'fs/promises';
import path from 'path';

const voteSchema = z.object({
  contestantId: z.string(),
  contestantName: z.string(),
  contestantCategory: z.string(),
  numberOfVotes: z.number().int().positive(),
});

// Path to the JSON file
const votesFilePath = path.join(process.cwd(), 'src', 'data', 'votes.json');

async function readVotes() {
  try {
    const data = await fs.readFile(votesFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // If the file doesn't exist, return an empty array
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

async function writeVotes(votes: any) {
  try {
    await fs.writeFile(votesFilePath, JSON.stringify(votes, null, 2), 'utf-8');
    console.log('Votes successfully written to file');
  } catch (error) {
    console.error('Error writing votes to file:', error);
    throw new Error('Failed to write votes to file');
  }
}

export async function POST(request: Request) {
  try {
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

    const allVotes = await readVotes();
    
    const newVote = {
      ...validatedVote.data,
      id: new Date().toISOString() + Math.random(), // Simple unique ID
      timestamp: new Date().toISOString(),
    };

    allVotes.push(newVote);
    await writeVotes(allVotes);

    console.log('Vote successfully written to JSON file:', newVote);

    return NextResponse.json({ message: 'Vote recorded successfully in JSON file.' }, { status: 200 });

  } catch (error) {
    console.error('Error in vote API route (JSON):', error);
    
    if (error instanceof z.ZodError) {
        return NextResponse.json({ error: 'Validation failed', details: error.errors }, { status: 400 });
    }

    return NextResponse.json({ error: 'An internal server error occurred while writing to file.' }, { status: 500 });
  }
}
