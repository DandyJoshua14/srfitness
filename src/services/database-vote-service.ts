"use server";

import { getPool } from '@/lib/database/config';
import { PoolClient } from 'pg';

export interface Vote {
    id?: number;
    contestant_id: string;
    contestant_name: string;
    contestant_category: string;
    number_of_votes: number;
    created_at?: Date;
}

// Initialize the votes table if it doesn't exist
export const initializeVotesTable = async (): Promise<void> => {
    const pool = getPool();
    const client: PoolClient = await pool.connect();
    
    try {
        await client.query(`
            CREATE TABLE IF NOT EXISTS votes (
                id SERIAL PRIMARY KEY,
                contestant_id VARCHAR(255) NOT NULL,
                contestant_name VARCHAR(255) NOT NULL,
                contestant_category VARCHAR(255) NOT NULL,
                number_of_votes INTEGER NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `);
        
        // Create an index for better performance
        await client.query(`
            CREATE INDEX IF NOT EXISTS idx_votes_contestant_id ON votes(contestant_id);
        `);
        
        console.log('Votes table initialized successfully');
    } catch (error) {
        console.error('Error initializing votes table:', error);
        throw new Error('Failed to initialize votes table');
    } finally {
        client.release();
    }
};

// Add a new vote
export const addVote = async (voteData: Omit<Vote, 'id' | 'created_at'>): Promise<Vote> => {
    const pool = getPool();
    const client: PoolClient = await pool.connect();
    
    try {
        const query = `
            INSERT INTO votes (contestant_id, contestant_name, contestant_category, number_of_votes)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `;
        
        const values = [
            voteData.contestant_id,
            voteData.contestant_name,
            voteData.contestant_category,
            voteData.number_of_votes
        ];
        
        const result = await client.query(query, values);
        console.log('Vote added successfully:', result.rows[0]);
        return result.rows[0];
    } catch (error) {
        console.error('Error adding vote:', error);
        throw new Error('Failed to add vote to database');
    } finally {
        client.release();
    }
};

// Get all votes
export const getVotes = async (): Promise<Vote[]> => {
    const pool = getPool();
    const client: PoolClient = await pool.connect();
    
    try {
        const query = `
            SELECT * FROM votes 
            ORDER BY created_at DESC;
        `;
        
        const result = await client.query(query);
        return result.rows;
    } catch (error) {
        console.error('Error getting votes:', error);
        throw new Error('Failed to fetch votes from database');
    } finally {
        client.release();
    }
};

// Get votes by contestant
export const getVotesByContestant = async (contestantId: string): Promise<Vote[]> => {
    const pool = getPool();
    const client: PoolClient = await pool.connect();
    
    try {
        const query = `
            SELECT * FROM votes 
            WHERE contestant_id = $1 
            ORDER BY created_at DESC;
        `;
        
        const result = await client.query(query, [contestantId]);
        return result.rows;
    } catch (error) {
        console.error('Error getting votes by contestant:', error);
        throw new Error('Failed to fetch contestant votes from database');
    } finally {
        client.release();
    }
};

// Get vote statistics
export const getVoteStatistics = async (): Promise<{ contestant_id: string; contestant_name: string; contestant_category: string; total_votes: number }[]> => {
    const pool = getPool();
    const client: PoolClient = await pool.connect();
    
    try {
        const query = `
            SELECT 
                contestant_id,
                contestant_name,
                contestant_category,
                SUM(number_of_votes) as total_votes
            FROM votes 
            GROUP BY contestant_id, contestant_name, contestant_category
            ORDER BY total_votes DESC;
        `;
        
        const result = await client.query(query);
        return result.rows;
    } catch (error) {
        console.error('Error getting vote statistics:', error);
        throw new Error('Failed to fetch vote statistics from database');
    } finally {
        client.release();
    }
};
