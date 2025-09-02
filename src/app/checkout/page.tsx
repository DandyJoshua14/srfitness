
"use client";

import { Suspense } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

const VOTE_COST_PER_VOTE = 100;

function CheckoutView() {
    const searchParams = useSearchParams();
    const { toast } = useToast();

    const contestantId = searchParams.get('id');
    const contestantName = searchParams.get('name') || 'the selected contestant';
    const contestantCategory = searchParams.get('category') || 'their category';
    const numberOfVotes = parseInt(searchParams.get('votes') || '1', 10);
    const totalVoteCost = VOTE_COST_PER_VOTE * numberOfVotes;

    const contestantImage = `https://placehold.co/400x500.png?text=${encodeURIComponent(contestantName.split(' ').map(n => n[0]).join(''))}`;

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

    if (!contestantId) {
        return (
            <div className="text-center text-white">
                <h2 className="text-2xl font-bold text-amber-400">Invalid Selection</h2>
                <p className="text-zinc-300 mt-2">No contestant was selected. Please go back and choose a nominee to vote for.</p>
                <Button asChild className="mt-6 bg-amber-500 text-black hover:bg-amber-400">
                    <Link href="/vote">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Go Back to Vote
                    </Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <Card className="bg-zinc-900/50 border-amber-400/30 text-white shadow-2xl shadow-amber-500/10">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl text-amber-400">Your Vote</CardTitle>
                    <CardDescription className="text-zinc-400">You are about to vote for:</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center space-x-4">
                        <Image src={contestantImage} alt={contestantName} width={100} height={125} className="rounded-lg border-2 border-amber-400/50" />
                        <div>
                            <h3 className="text-2xl font-bold text-white">{contestantName}</h3>
                            <p className="text-amber-300">{contestantCategory}</p>
                            <p className="text-sm text-zinc-300 mt-1">Number of Votes: <span className="font-bold">{numberOfVotes}</span></p>
                        </div>
                    </div>
                    <div className="mt-6 border-t border-zinc-700 pt-4 flex justify-between items-center text-xl">
                        <span className="text-zinc-300">Total Cost:</span>
                        <span className="font-bold text-amber-400">N{totalVoteCost.toFixed(2)}</span>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 border-amber-400/30 text-white shadow-2xl shadow-amber-500/10">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl text-amber-400">Final Steps: Payment</CardTitle>
                    <CardDescription className="text-zinc-400">Complete the payment and send the confirmation SMS to cast your vote.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-4 text-center">
                        <div>
                            <div className="font-bold text-amber-400 text-lg font-headline tracking-wider">STEP 1: PAY</div>
                            <p className="text-zinc-300">Pay or transfer <span className="font-bold text-amber-300">N{totalVoteCost.toFixed(2)}</span> to the account below:</p>
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
                            <p className="text-zinc-300">Send SMS with your name, amount paid, and contestant's name to:</p>
                            <div className="bg-zinc-800 p-3 rounded-lg mt-2 flex items-center justify-between">
                                <p className="font-mono text-xl">{smsNumber}</p>
                                <Button variant="ghost" size="icon" onClick={() => copyToClipboard(smsNumber, 'Phone Number')}>
                                    <Copy className="h-5 w-5 text-amber-400" />
                                </Button>
                            </div>
                            <p className="text-xs text-amber-300 mt-2 p-2 bg-amber-500/10 rounded-md">
                                Example SMS: <br /> <span className="font-medium">John Doe, N{totalVoteCost.toFixed(2)}, {contestantName}</span>
                            </p>
                        </div>
                        <div>
                            <div className="font-bold text-amber-400 text-lg font-headline tracking-wider">STEP 3: DONE</div>
                            <p className="text-zinc-300">You will receive a confirmatory text. You can vote multiple times by repeating these steps.</p>
                        </div>
                    </div>
                     <Button asChild className="w-full mt-6 bg-amber-500 text-black hover:bg-amber-400">
                        <Link href="/vote">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Go Back to Change Selection
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

export default function CheckoutPage() {
    return (
        <div className="bg-black text-white min-h-screen" style={{
            backgroundImage: `url('/black-bg.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
        }}>
            <div className="bg-black/80 backdrop-blur-sm min-h-screen flex items-center justify-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                     <header className="text-center mb-12">
                        <img src="/SR.jpg" alt="SR Fitness Awards Logo" className="h-24 w-auto mx-auto mb-4" data-ai-hint="awards logo" />
                        <h1 className="font-headline text-5xl text-amber-400">Vote Checkout</h1>
                    </header>
                    <main>
                      <Suspense fallback={<div className="text-center text-white">Loading...</div>}>
                        <CheckoutView />
                      </Suspense>
                    </main>
                </div>
            </div>
        </div>
    );
}
