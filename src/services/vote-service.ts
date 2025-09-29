
"use server";

import fs from 'fs/promises';
import path from 'path';

// --------- Vote Types and Functions ---------

export interface Vote {
    id?: string;
    contestantId: string;
    contestantName: string;
    contestantCategory: string;
    numberOfVotes: number;
    timestamp: any;
}

const votesFilePath = path.join(process.cwd(), 'src', 'data', 'votes.json');

export const getVotes = async (): Promise<Vote[]> => {
    try {
        const data = await fs.readFile(votesFilePath, 'utf-8');
        const votes = JSON.parse(data) as Vote[];
        // Sort by timestamp descending
        return votes.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    } catch (error) {
        if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
          return []; // If file doesn't exist, return empty array
        }
        console.error("Error getting votes from JSON file: ", error);
        throw new Error("Could not fetch votes from JSON file.");
    }
};
