
"use server";

import { getVotes as getVotesFromDB, Vote as DBVote, getVoteStatistics } from '@/services/database-service';

// --------- Vote Types and Functions ---------

export interface Vote {
    id?: number;
    contestantId: string;
    contestantName: string;
    contestantCategory: string;
    numberOfVotes: number;
    timestamp: any;
}

// Convert database format to frontend format
const convertDBVoteToVote = (dbVote: DBVote): Vote => ({
    id: dbVote.id,
    contestantId: dbVote.contestant_id,
    contestantName: dbVote.contestant_name,
    contestantCategory: dbVote.contestant_category,
    numberOfVotes: dbVote.number_of_votes,
    timestamp: dbVote.created_at,
});

export const getVotes = async (): Promise<Vote[]> => {
    try {
        const dbVotes = await getVotesFromDB();
        return dbVotes.map(convertDBVoteToVote);
    } catch (error) {
        console.error("Error getting votes from PostgreSQL: ", error);
        throw new Error("Could not fetch votes from PostgreSQL database.");
    }
};

export const getVoteTotals = async () => {
    try {
        const statistics = await getVoteStatistics();
        return statistics.map(stat => ({
            contestantId: stat.contestant_id,
            contestantName: stat.contestant_name,
            contestantCategory: stat.contestant_category,
            totalVotes: stat.total_votes,
        }));
    } catch (error) {
        console.error("Error getting vote statistics from PostgreSQL: ", error);
        throw new Error("Could not fetch vote statistics from PostgreSQL database.");
    }
};
