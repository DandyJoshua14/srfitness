
"use client";

import { useState, useEffect, useMemo, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Vote, getVotes } from '@/services/vote-service';
import { useToast } from '@/hooks/use-toast';
import { Vote as VoteIcon, TrendingUp, Users, Award } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

interface AggregatedVote {
    contestantName: string;
    contestantCategory: string;
    totalVotes: number;
}

export default function AdminVoteTrackerPage() {
    const { toast } = useToast();
    const [votes, setVotes] = useState<Vote[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const loadVotes = useCallback(async () => {
        setIsLoading(true);
        try {
            const fetchedVotes = await getVotes();
            setVotes(fetchedVotes);
        } catch (error) {
            console.error("Could not load votes from Firestore", error);
            toast({
                title: "Error Loading Votes",
                description: "Could not retrieve voting data from the database.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    }, [toast]);

    useEffect(() => {
        loadVotes();
    }, [loadVotes]);

    const aggregatedVotes = useMemo(() => {
        const voteMap = new Map<string, AggregatedVote>();
        votes.forEach(vote => {
            const existing = voteMap.get(vote.contestantName);
            if (existing) {
                existing.totalVotes += vote.numberOfVotes;
            } else {
                voteMap.set(vote.contestantName, {
                    contestantName: vote.contestantName,
                    contestantCategory: vote.contestantCategory,
                    totalVotes: vote.numberOfVotes,
                });
            }
        });
        return Array.from(voteMap.values()).sort((a, b) => b.totalVotes - a.totalVotes);
    }, [votes]);
    
    const totalVotesCasted = useMemo(() => votes.reduce((sum, v) => sum + v.numberOfVotes, 0), [votes]);
    const totalContestants = aggregatedVotes.length;
    const topContestant = aggregatedVotes[0] ? `${aggregatedVotes[0].contestantName} (${aggregatedVotes[0].totalVotes} votes)` : 'N/A';

    return (
        <div className="space-y-8">
            <Card className="shadow-lg border-primary/20">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl text-primary flex items-center">
                        <VoteIcon className="mr-3 h-8 w-8" />
                        Vote Tracker
                    </CardTitle>
                    <CardDescription>
                        Monitor real-time voting results for the SR Fitness Awards.
                    </CardDescription>
                </CardHeader>
            </Card>

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Votes Cast</CardTitle>
                        <VoteIcon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        {isLoading ? <Skeleton className="h-8 w-1/2" /> : <div className="text-2xl font-bold">{totalVotesCasted.toLocaleString()}</div>}
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Unique Contestants</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                         {isLoading ? <Skeleton className="h-8 w-1/4" /> : <div className="text-2xl font-bold">{totalContestants}</div>}
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Current Leader</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                         {isLoading ? <Skeleton className="h-8 w-3/4" /> : <div className="text-xl font-bold truncate">{topContestant}</div>}
                    </CardContent>
                </Card>
            </div>
            
            {/* Vote Chart */}
             <Card>
                <CardHeader>
                    <CardTitle>Top 10 Contestants</CardTitle>
                     <CardDescription>A visual overview of the leading contestants.</CardDescription>
                </CardHeader>
                <CardContent>
                     {isLoading ? (
                         <Skeleton className="w-full h-[300px]" />
                     ) : (
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={aggregatedVotes.slice(0, 10)}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="contestantName" angle={-45} textAnchor="end" height={80} interval={0} tick={{ fontSize: 12 }} />
                                <YAxis />
                                <Tooltip
                                    contentStyle={{
                                        background: "hsl(var(--background))",
                                        borderColor: "hsl(var(--border))"
                                    }}
                                />
                                <Bar dataKey="totalVotes" fill="hsl(var(--primary))" name="Total Votes" />
                            </BarChart>
                        </ResponsiveContainer>
                     )}
                </CardContent>
            </Card>


            {/* Vote Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Vote Leaderboard</CardTitle>
                    <CardDescription>Aggregated vote counts for each contestant.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[50px]">Rank</TableHead>
                                <TableHead>Contestant Name</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead className="text-right">Total Votes</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                             {isLoading ? (
                                [...Array(5)].map((_, i) => (
                                    <TableRow key={i}>
                                        <TableCell><Skeleton className="h-5 w-5 rounded-full" /></TableCell>
                                        <TableCell><Skeleton className="h-5 w-3/4" /></TableCell>
                                        <TableCell><Skeleton className="h-5 w-1/2" /></TableCell>
                                        <TableCell className="text-right"><Skeleton className="h-5 w-1/4 ml-auto" /></TableCell>
                                    </TableRow>
                                ))
                            ) : aggregatedVotes.length > 0 ? (
                                aggregatedVotes.map((vote, index) => (
                                    <TableRow key={vote.contestantName}>
                                        <TableCell className="font-bold">{index + 1}</TableCell>
                                        <TableCell className="font-medium text-foreground">{vote.contestantName}</TableCell>
                                        <TableCell className="text-muted-foreground">{vote.contestantCategory}</TableCell>
                                        <TableCell className="text-right font-bold text-primary">{vote.totalVotes.toLocaleString()}</TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={4} className="text-center h-24">No votes have been cast yet.</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
