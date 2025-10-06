
"use server";

import { getRedisClient } from '@/lib/redis';

// --------- Vote Types and Functions ---------

export interface Vote {
    id?: string;
    contestantId: string;
    contestantName: string;
    contestantCategory: string;
    numberOfVotes: number;
    timestamp: string;
}

export interface VoteTotal {
    contestantId: string;
    contestantName: string;
    contestantCategory: string;
    totalVotes: number;
}

export const getVotes = async (): Promise<Vote[]> => {
    try {
        const redis = await getRedisClient();
        
        // Get all vote keys
        const voteKeys = await redis.keys('vote:*');
        const votes: Vote[] = [];
        
        // Get individual vote records
        for (const key of voteKeys) {
            const voteData = await redis.get(key);
            if (voteData) {
                votes.push(JSON.parse(voteData));
            }
        }
        
        return votes;
    } catch (error) {
        console.error("Error getting votes from Redis: ", error);
        throw new Error("Could not fetch votes from Redis database.");
    }
};

export const getVoteTotals = async (): Promise<VoteTotal[]> => {
    try {
        const redis = await getRedisClient();
        
        // Get all total vote keys
        const totalVoteKeys = await redis.keys('total_votes:*');
        const voteTotals: VoteTotal[] = [];
        
        // Get total vote counts and match with vote data
        for (const key of totalVoteKeys) {
            const contestantId = key.replace('total_votes:', '');
            const totalVotes = await redis.get(key);
            
            // Get the latest vote data for this contestant to get name and category
            const voteKey = `vote:${contestantId}`;
            const voteData = await redis.get(voteKey);
            
            if (voteData) {
                const vote = JSON.parse(voteData);
                voteTotals.push({
                    contestantId,
                    contestantName: vote.contestantName,
                    contestantCategory: vote.contestantCategory,
                    totalVotes: parseInt(totalVotes || '0'),
                });
            }
        }
        
        return voteTotals;
    } catch (error) {
        console.error("Error getting vote statistics from Redis: ", error);
        throw new Error("Could not fetch vote statistics from Redis database.");
    }
};
