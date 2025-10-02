"use server";

import { getNominations as getNominationsFromDB, Nomination as DBNomination, addNomination, Nomination as NominationDB } from '@/services/database-service';

// --------- Nomination Types for Frontend ---------

export interface Nomination {
    id?: number;
    category: string;
    nomineeName: string;
    nomineePhone: string;
    nominationReason: string;
    nominatorName: string;
    nominatorPhone: string;
    timestamp?: string;
}

// Convert database nomination to frontend format
function convertDBNominationToNomination(dbNomination: DBNomination): Nomination {
    return {
        id: dbNomination.id,
        category: dbNomination.category,
        nomineeName: dbNomination.nominee_name,
        nomineePhone: dbNomination.nominee_phone,
        nominationReason: dbNomination.nomination_reason,
        nominatorName: dbNomination.nominator_name,
        nominatorPhone: dbNomination.nominator_phone,
        timestamp: dbNomination.created_at ? new Date(dbNomination.created_at).toLocaleDateString() : undefined
    };
}

// Get all nominations
export async function getNominations(): Promise<Nomination[]> {
    try {
        const dbNominations = await getNominationsFromDB();
        return dbNominations.map(convertDBNominationToNomination);
    } catch (error) {
        console.error('Error fetching nominations:', error);
        throw new Error('Could not fetch nominations from database');
    }
}

// Add a new nomination
export async function submitNomination(nominationData: Omit<Nomination, 'id' | 'timestamp'>): Promise<Nomination> {
    try {
        // Convert frontend format to database format
        const dbNominationData: Omit<NominationDB, 'id' | 'created_at'> = {
            category: nominationData.category,
            nominee_name: nominationData.nomineeName,
            nominee_phone: nominationData.nomineePhone,
            nomination_reason: nominationData.nominationReason,
            nominator_name: nominationData.nominatorName,
            nominator_phone: nominationData.nominatorPhone
        };

        const result = await addNomination(dbNominationData);
        return convertDBNominationToNomination(result);
    } catch (error) {
        console.error('Error submitting nomination:', error);
        throw new Error('Could not submit nomination to database');
    }
}
