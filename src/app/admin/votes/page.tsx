
"use client";

import { useState, useEffect, useMemo, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Vote, getVotes } from '@/services/vote-service';
import { useToast } from '@/hooks/use-toast';
import { Vote as VoteIcon, TrendingUp, Users, Plus, Edit, Trash2 } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import dynamic from 'next/dynamic';

// Lazy load the chart component to reduce initial bundle size
const VoteChart = dynamic(() => import('@/components/features/admin/vote-chart'), {
  loading: () => <Skeleton className="w-full h-[300px]" />,
  ssr: false
});

interface AggregatedVote {
    contestantName: string;
    contestantCategory: string;
    totalVotes: number;
}

// Contestant data for manual vote addition
const contestants = [
    { id: '1', name: 'Coach NTB', category: 'Fitness Trainer/Coach of the Year' },
    { id: '2', name: 'Coach Tawani', category: 'Fitness Trainer/Coach of the Year' },
    { id: '3', name: 'Body Quest', category: 'Fitness Trainer/Coach of the Year' },
    { id: '22', name: 'Coach George', category: 'Fitness Trainer/Coach of the Year' },
    { id: '23', name: 'Coach Collins', category: 'Fitness Trainer/Coach of the Year' },
    { id: '4', name: 'Pharm. Mrs. Onwudiwe Blessing', category: 'Inspirational Weight-Loss Journey' },
    { id: '5', name: 'Mrs Virtue Michael Okoi', category: 'Inspirational Weight-Loss Journey' },
    { id: '48', name: 'Coach Ifiok', category: 'Fitness Club Coach of the Year' },
    { id: '49', name: 'Coach Ofonime', category: 'Fitness Club Coach of the Year' },
    { id: '50', name: 'Coach Bigname', category: 'Fitness Club Coach of the Year' },
    { id: '15', name: 'Victors Fitness', category: 'Gym of the Year' },
    { id: '16', name: 'Romaan Fitness', category: 'Gym of the Year' },
    { id: '17', name: 'Hogis Fitness', category: 'Gym of the Year' },
    { id: '18', name: '1480 AZ GYM (NAVY GYM)', category: 'Gym of the Year' },
    { id: '19', name: 'Oma Dance Vibes', category: 'Art and Wellness Advocate' },
    { id: '20', name: 'Lifeclinicng', category: 'Art and Wellness Advocate' },
];

export default function AdminVoteTrackerPage() {
    const { toast } = useToast();
    const [votes, setVotes] = useState<Vote[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showAddDialog, setShowAddDialog] = useState(false);
    const [manualVoteForm, setManualVoteForm] = useState({
        contestantId: '',
        numberOfVotes: ''
    });

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

    const handleManualVote = useCallback(async () => {
        if (!manualVoteForm.contestantId || !manualVoteForm.numberOfVotes) {
            toast({
                title: "Invalid Input",
                description: "Please select a contestant and enter the number of votes.",
                variant: "destructive"
            });
            return;
        }

        const contestant = contestants.find(c => c.id === manualVoteForm.contestantId);
        if (!contestant) return;

        try {
            // Add vote directly to database via API
            const response = await fetch('/api/vote/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contestantId: contestant.id,
                    contestantName: contestant.name,
                    contestantCategory: contestant.category,
                    numberOfVotes: parseInt(manualVoteForm.numberOfVotes)
                })
            });

            if (response.ok) {
                toast({
                    title: "Votes Added Successfully",
                    description: `Added ${manualVoteForm.numberOfVotes} votes for ${contestant.name}`,
                });
                
                // Reset form and reload votes
                setManualVoteForm({ contestantId: '', numberOfVotes: '' });
                setShowAddDialog(false);
                loadVotes();
            } else {
                throw new Error('Failed to add votes');
            }
        } catch (error) {
            console.error('Error adding manual votes:', error);
            toast({
                title: "Error Adding Votes",
                description: "Could not add votes to the database.",
                variant: "destructive"
            });
        }
    }, [manualVoteForm, toast, loadVotes]);

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
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle className="font-headline text-3xl text-primary flex items-center">
                                <VoteIcon className="mr-3 h-8 w-8" />
                                Vote Tracker
                            </CardTitle>
                            <CardDescription>
                                Monitor real-time voting results and manage votes for the SR Fitness Awards.
                            </CardDescription>
                        </div>
                        <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
                            <DialogTrigger asChild>
                                <Button className="bg-primary hover:bg-primary/90">
                                    <Plus className="mr-2 h-4 w-4" />
                                    Add Votes
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Add Manual Votes</DialogTitle>
                                    <DialogDescription>
                                        Add votes manually for any contestant.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="contestant" className="text-right">
                                            Contestant
                                        </Label>
                                        <Select 
                                            value={manualVoteForm.contestantId} 
                                            onValueChange={(value) => setManualVoteForm(prev => ({ ...prev, contestantId: value }))}
                                        >
                                            <SelectTrigger className="col-span-3">
                                                <SelectValue placeholder="Select contestant" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {contestants.map(contestant => (
                                                    <SelectItem key={contestant.id} value={contestant.id}>
                                                        {contestant.name} ({contestant.category})
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="votes" className="text-right">
                                            Votes
                                        </Label>
                                        <Input
                                            id="votes"
                                            type="number"
                                            min="1"
                                            placeholder="Enter number of votes"
                                            className="col-span-3"
                                            value={manualVoteForm.numberOfVotes}
                                            onChange={(e) => setManualVoteForm(prev => ({ ...prev, numberOfVotes: e.target.value }))}
                                        />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button 
                                        onClick={handleManualVote}
                                        disabled={!manualVoteForm.contestantId || !manualVoteForm.numberOfVotes}
                                    >
                                        Add Votes
                                    </Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
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
                     <VoteChart data={aggregatedVotes.slice(0, 10)} isLoading={isLoading} />
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
