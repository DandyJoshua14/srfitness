
"use client";

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ContestantCard, { Contestant } from '@/components/features/vote/contestant-card';
import { cn } from '@/lib/utils';

const awardCategories = [
    { title: "All Categories" },
    { title: "Community Fitness Hero of the Year" },
    { title: "Fitness Trainer/Coach of the Year" },
    { title: "Inspirational Weight-Loss Journey" },
    { title: "Corporate Wellness Champion" },
    { title: "Foundation Fitness Award" },
    { title: "Mental Health & Wellness Advocate" },
    { title: "Care-Givers Advocate" },
    { title: "Health Care Treatment Advocate" },
    { title: "Pharmaceutical Service Champion" },
    { title: "Physiotherapist of the Year" },
    { title: "Life Champion Award - Overcomers series" },
    { title: "Foundation Fitness Hero Award" },
    { title: "Educators Recognition series" },
    { title: "Fitness Event Of The Year" },
    { title: "Corperate Social Responsibility Champion" },
];

const contestants: Contestant[] = [
    { id: '1', name: 'Alex Morgan', category: 'Fitness Trainer/Coach of the Year', image: 'https://placehold.co/400x500.png?text=Alex+M' },
    { id: '2', name: 'Samantha Kerr', category: 'Fitness Trainer/Coach of the Year', image: 'https://placehold.co/400x500.png?text=Sam+K' },
    { id: '3', name: 'Chris Bumstead', category: 'Fitness Trainer/Coach of the Year', image: 'https://placehold.co/400x500.png?text=Chris+B' },
    { id: '4', name: 'Victoria U', category: 'Inspirational Weight-Loss Journey', image: 'https://placehold.co/400x500.png?text=Vicky+U' },
    { id: '5', name: 'Tracy S', category: 'Inspirational Weight-Loss Journey', image: 'https://placehold.co/400x500.png?text=Tracy+S' },
    { id: '6', name: 'David L', category: 'Community Fitness Hero of the Year', image: 'https://placehold.co/400x500.png?text=David+L' },
];

export default function VotePage() {
    const { toast } = useToast();
    const router = useRouter();
    const [selectedContestant, setSelectedContestant] = useState<Contestant | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");

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

    const handleProceedToVote = () => {
        if (!selectedContestant) {
            toast({
                title: "No Contestant Selected",
                description: "Please select a contestant before proceeding.",
                variant: "destructive"
            });
            return;
        }
        const { id, name, category } = selectedContestant;
        const query = new URLSearchParams({ id, name, category }).toString();
        router.push(`/checkout?${query}`);
    };

    const filteredContestants = useMemo(() => {
        if (selectedCategory === "All Categories") {
            return contestants;
        }
        return contestants.filter(c => c.category === selectedCategory);
    }, [selectedCategory]);

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

                    <div className="mb-12 md:mb-16 flex justify-center">
                        <Image
                            src="/vote-guide.png"
                            alt="SR Fitness Awards Voting Guide with pricing"
                            width={800}
                            height={800}
                            className="rounded-lg shadow-2xl shadow-amber-500/20 max-w-full sm:max-w-lg md:max-w-xl"
                            data-ai-hint="voting guide"
                            priority
                        />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
                        <Card className="bg-zinc-900/50 border-amber-400/30 text-white shadow-2xl shadow-amber-500/10">
                            <CardHeader>
                                <CardTitle className="font-headline text-4xl text-amber-400">Vote for a Contestant</CardTitle>
                                <CardDescription className="text-zinc-400">1. Select a category, then choose a contestant below.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="mb-6">
                                    <p className="font-semibold text-zinc-300 mb-3">Filter by Category:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {awardCategories.map(cat => (
                                            <Button
                                                key={cat.title}
                                                variant="outline"
                                                onClick={() => setSelectedCategory(cat.title)}
                                                className={cn(
                                                    "border-amber-400/30 text-amber-300 hover:bg-amber-400/10 hover:text-amber-200",
                                                    selectedCategory === cat.title && "bg-amber-400/20 ring-2 ring-amber-400 text-amber-200"
                                                )}
                                            >
                                                {cat.title}
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {filteredContestants.length > 0 ? (
                                        filteredContestants.map(c => (
                                            <ContestantCard 
                                                key={c.id} 
                                                contestant={c}
                                                isSelected={selectedContestant?.id === c.id}
                                                onSelect={() => setSelectedContestant(c)}
                                            />
                                        ))
                                    ) : (
                                        <div className="col-span-full text-center py-8">
                                            <p className="text-zinc-400">No contestants found for this category.</p>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>

                        <div className="space-y-8 sticky top-24">
                             <Card className="bg-zinc-900/50 border-amber-400/30 text-white shadow-2xl shadow-amber-500/10">
                                <CardHeader>
                                    <CardTitle className="font-headline text-4xl text-amber-400">2. Complete Your Vote</CardTitle>
                                     <CardDescription className="text-zinc-400">
                                        After selecting a contestant, click the button below to proceed.
                                     </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    {selectedContestant ? (
                                        <div className="bg-zinc-800/70 p-4 rounded-lg text-center">
                                            <p className="text-zinc-300 mb-1">You have selected:</p>
                                            <p className="font-bold text-amber-300 text-xl">{selectedContestant.name}</p>
                                            <p className="text-xs text-zinc-400">{selectedContestant.category}</p>
                                        </div>
                                    ) : (
                                        <div className="bg-zinc-800/50 p-4 rounded-lg text-center h-24 flex items-center justify-center">
                                            <p className="text-zinc-400">Please select a contestant to vote for.</p>
                                        </div>
                                    )}
                                     <Button
                                        size="lg"
                                        className="w-full mt-6 bg-amber-500 text-black font-bold text-lg hover:bg-amber-400 disabled:bg-zinc-600 disabled:text-zinc-400 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
                                        onClick={handleProceedToVote}
                                        disabled={!selectedContestant}
                                    >
                                        Proceed to Vote <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                    <p className="text-xs text-zinc-500 mt-4 text-center">
                                        You will be taken to a final confirmation page with payment details.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
