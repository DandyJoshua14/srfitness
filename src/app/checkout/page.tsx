

"use client";

import { Suspense, useTransition, useEffect, useState } from 'react';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Loader2, PartyPopper, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { createWemaAlatPayment } from '@/app/actions';

const VOTE_COST_PER_VOTE = 100;

function CheckoutView() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { toast } = useToast();
    const [isPending, startTransition] = useTransition();
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const contestantId = searchParams.get('id');
    const contestantName = searchParams.get('name') || 'the selected contestant';
    const contestantCategory = searchParams.get('category') || 'their category';
    const numberOfVotes = parseInt(searchParams.get('votes') || '1', 10);
    const totalVoteCost = VOTE_COST_PER_VOTE * (numberOfVotes - (
        numberOfVotes === 12 ? 2 :
        numberOfVotes === 53 ? 3 :
        numberOfVotes === 105 ? 5 :
        numberOfVotes === 510 ? 10 :
        numberOfVotes === 1020 ? 20 : 0
    ));

    const contestantImage = `https://placehold.co/400x500.png?text=${encodeURIComponent(contestantName.split(' ').map(n => n[0]).join(''))}`;
    
    const handleConfirmVote = () => {
        if (!contestantId) return;

        startTransition(async () => {
            const result = await createWemaAlatPayment({
                amount: totalVoteCost,
                contestantId,
                contestantName,
                contestantCategory,
                numberOfVotes,
            });

            if (result.success) {
                toast({
                    title: "Vote Successful!",
                    description: "Your payment has been processed and your vote has been recorded.",
                });
                setPaymentSuccess(true);
            } else {
                 toast({
                    title: "Payment Error",
                    description: result.error || "Could not process payment. Please try again.",
                    variant: "destructive",
                });
            }
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
    
    if (paymentSuccess) {
      return (
        <Card className="bg-zinc-900/50 border-green-400/30 text-white shadow-2xl shadow-green-500/10 text-center">
            <CardHeader>
                <div className="mx-auto bg-green-500 text-black rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <CheckCircle className="h-10 w-10" />
                </div>
                <CardTitle className="font-headline text-3xl text-green-400">Payment Successful!</CardTitle>
                <CardDescription className="text-zinc-300">Your vote for <span className="font-bold text-white">{contestantName}</span> has been confirmed.</CardDescription>
            </CardHeader>
            <CardContent>
                 <p className="text-zinc-400 mb-6">Thank you for participating in the SR Fitness Awards!</p>
                 <Button asChild className="bg-amber-500 text-black hover:bg-amber-400">
                    <Link href="/vote">
                        Vote Again
                    </Link>
                </Button>
            </CardContent>
        </Card>
      )
    }

    return (
        <Card className="bg-zinc-900/50 border-amber-400/30 text-white shadow-2xl shadow-amber-500/10">
            <CardHeader>
                <CardTitle className="font-headline text-3xl text-amber-400">Confirm Your Vote</CardTitle>
                <CardDescription className="text-zinc-400">Please review the details below before proceeding.</CardDescription>
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
                <div className="mt-8 text-center">
                    <Button
                        size="lg"
                        className="w-full mt-6 bg-amber-500 text-black font-bold text-lg hover:bg-amber-400 disabled:bg-zinc-600 disabled:text-zinc-400 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
                        onClick={handleConfirmVote}
                        disabled={isPending}
                    >
                         {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                         {isPending ? 'Processing Payment...' : 'Confirm & Pay'}
                    </Button>
                    <p className="text-xs text-zinc-500 mt-4 text-center">
                        Clicking "Confirm & Pay" will initiate the payment process.
                    </p>
                </div>
            </CardContent>
        </Card>
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
                        <Image src="/SR.jpg" alt="SR Fitness Awards Logo" width={96} height={96} className="h-24 w-24 mx-auto mb-4 rounded-full" data-ai-hint="awards logo" />
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
