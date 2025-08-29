
"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ContestantCard, { Contestant } from '@/components/features/vote/contestant-card';

const contestants: Contestant[] = [
    // Placeholder data - this would come from Firestore in a real app
    { id: '1', name: 'Alex Morgan', category: 'Fitness Trainer of the Year', image: 'https://placehold.co/400x500.png?text=Alex+M' },
    { id: '2', name: 'Samantha Kerr', category: 'Fitness Trainer of the Year', image: 'https://placehold.co/400x500.png?text=Sam+K' },
    { id: '3', name: 'Chris Bumstead', category: 'Fitness Trainer of the Year', image: 'https://placehold.co/400x500.png?text=Chris+B' },
    { id: '4', name: 'Victoria U', category: 'Inspirational Weight-Loss Journey', image: 'https://placehold.co/400x500.png?text=Vicky+U' },
    { id: '5', name: 'Tracy S', category: 'Inspirational Weight-Loss Journey', image: 'https://placehold.co/400x500.png?text=Tracy+S' },
    { id: '6', name: 'David L', category: 'Community Fitness Hero', image: 'https://placehold.co/400x500.png?text=David+L' },
];

export default function VotePage() {
    const { toast } = useToast();
    const [selectedContestant, setSelectedContestant] = useState<Contestant | null>(null);

    const accountNumber = "1228863712";
    const bankName = "Zenith Bank";
    const smsNumber = "07056717597";

    const copyToClipboard = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        toast({
            title: `${label} Copied!`,
            description: `${text} has been copied to your clipboard.`,
        });
    };

    return (
        <div className="bg-black text-white min-h-screen" style={{
            backgroundImage: `url('/black-bg.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
        }}>
            <div className="bg-black/80 backdrop-blur-sm min-h-screen">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <header className="text-center mb-12 md:mb-16">
                        <img src="/SR.jpg" alt="SR Fitness Awards Logo" className="h-24 w-auto mx-auto mb-4" data-ai-hint="awards logo" />
                        <p className="font-headline text-2xl text-amber-400 tracking-wider">
                            IDENTIFY, RECOGNIZE & CELEBRATE FITNESS INDUSTRY EXCELLENCE
                        </p>
                    </header>

                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
                        <Card className="bg-zinc-900/50 border-amber-400/30 text-white shadow-2xl shadow-amber-500/10">
                            <CardHeader>
                                <CardTitle className="font-headline text-4xl text-amber-400">Vote for a Contestant</CardTitle>
                                <CardDescription className="text-zinc-400">Select a contestant below to see voting instructions.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {contestants.map(c => (
                                        <ContestantCard 
                                            key={c.id} 
                                            contestant={c}
                                            isSelected={selectedContestant?.id === c.id}
                                            onSelect={() => setSelectedContestant(c)}
                                        />
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <div className="space-y-8 sticky top-24">
                             <Card className="bg-zinc-900/50 border-amber-400/30 text-white shadow-2xl shadow-amber-500/10">
                                <CardHeader>
                                    <CardTitle className="font-headline text-4xl text-amber-400">How to Vote</CardTitle>
                                     <div className="text-center py-2">
                                        <p className="font-headline text-5xl text-amber-400">N100</p>
                                        <p className="text-lg text-zinc-300">PER VOTE</p>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="space-y-4 text-center">
                                        <div>
                                            <div className="font-bold text-amber-400 text-lg font-headline tracking-wider">STEP 1: PAY</div>
                                            <p className="text-zinc-300">Pay or transfer to the account below:</p>
                                            <div className="bg-zinc-800 p-3 rounded-lg mt-2 flex items-center justify-between">
                                                <div className="text-left">
                                                    <p className="font-mono text-xl">{accountNumber}</p>
                                                    <p className="text-sm text-zinc-400">SR FITNESS - {bankName}</p>
                                                </div>
                                                <Button variant="ghost" size="icon" onClick={() => copyToClipboard(accountNumber, 'Account Number')}>
                                                    <Copy className="h-5 w-5 text-amber-400" />
                                                </Button>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-amber-400 text-lg font-headline tracking-wider">STEP 2: CONFIRM</div>
                                            <p className="text-zinc-300">Send SMS with your name, amount, and contestant's name to:</p>
                                             <div className="bg-zinc-800 p-3 rounded-lg mt-2 flex items-center justify-between">
                                                <p className="font-mono text-xl">{smsNumber}</p>
                                                <Button variant="ghost" size="icon" onClick={() => copyToClipboard(smsNumber, 'Phone Number')}>
                                                    <Copy className="h-5 w-5 text-amber-400" />
                                                </Button>
                                            </div>
                                             {selectedContestant && (
                                                <p className="text-xs text-amber-300 mt-2 p-2 bg-amber-500/10 rounded-md">
                                                    Example SMS: <br /> <span className="font-medium">John Doe, N500, {selectedContestant.name}</span>
                                                </p>
                                             )}
                                        </div>
                                        <div>
                                            <div className="font-bold text-amber-400 text-lg font-headline tracking-wider">STEP 3: DONE</div>
                                            <p className="text-zinc-300">You will receive a confirmatory text. You can vote as many times as possible.</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
