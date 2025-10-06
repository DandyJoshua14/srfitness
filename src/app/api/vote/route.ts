
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { getRedisClient } from '@/lib/redis';

const voteSchema = z.object({
  contestantId: z.string(),
  contestantName: z.string(),
  contestantCategory: z.string(),
  numberOfVotes: z.number().int().positive(),
});

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

    // Get Redis client
    const redis = await getRedisClient();
    
    // Create vote key
    const voteKey = `vote:${validatedVote.data.contestantId}`;
    const voteData = {
      contestantId: validatedVote.data.contestantId,
      contestantName: validatedVote.data.contestantName,
      contestantCategory: validatedVote.data.contestantCategory,
      numberOfVotes: validatedVote.data.numberOfVotes,
      timestamp: new Date().toISOString()
    };

    // Store vote in Redis
    await redis.set(voteKey, JSON.stringify(voteData));
    
    // Also increment total votes counter
    const totalVotesKey = `total_votes:${validatedVote.data.contestantId}`;
    await redis.incrBy(totalVotesKey, validatedVote.data.numberOfVotes);

    console.log('Vote successfully written to Redis:', voteData);

    return NextResponse.json({ message: 'Vote recorded successfully in Redis database.' }, { status: 200 });

  } catch (error) {
    console.error('Error in vote API route (Redis):', error);
    
    if (error instanceof z.ZodError) {
        return NextResponse.json({ error: 'Validation failed', details: error.errors }, { status: 400 });
    }

    return NextResponse.json({ error: 'An internal server error occurred while writing to Redis database.' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const redis = await getRedisClient();
    
    // Get all vote keys
    const voteKeys = await redis.keys('vote:*');
    const totalVoteKeys = await redis.keys('total_votes:*');
    
    const votes = [];
    const voteTotals: Record<string, number> = {};
    
    // Get individual vote records
    for (const key of voteKeys) {
      const voteData = await redis.get(key);
      if (voteData) {
        votes.push(JSON.parse(voteData));
      }
    }
    
    // Get total vote counts
    for (const key of totalVoteKeys) {
      const contestantId = key.replace('total_votes:', '');
      const totalVotes = await redis.get(key);
      voteTotals[contestantId] = parseInt(totalVotes || '0');
    }
    
    return NextResponse.json({ 
      votes, 
      voteTotals,
      totalVotes: Object.values(voteTotals).reduce((sum: number, count: number) => sum + count, 0)
    });
    
  } catch (error) {
    console.error('Error retrieving votes from Redis:', error);
    return NextResponse.json({ error: 'Failed to retrieve votes from Redis.' }, { status: 500 });
  }
}
