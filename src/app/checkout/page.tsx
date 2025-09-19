

"use client";

import { Suspense, useTransition, useState } from 'react';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Loader2, ShieldCheck, CreditCard } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { createPaystackPayment } from '@/app/actions';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';

const VOTE_COST_PER_VOTE = 100;

function CheckoutView() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { toast } = useToast();
    const [isPending, startTransition] = useTransition();

    const [customerEmail, setCustomerEmail] = useState('');

    const contestantId = searchParams.get('id');
    const contestantName = searchParams.get('name') || 'the selected contestant';
    const contestantCategory = searchParams.get('category') || 'their category';
    const numberOfVotes = parseInt(searchParams.get('votes') || '1', 10);
    const contestantImage = searchParams.get('image') || '/SR.jpg';
    
    const totalVoteCost = VOTE_COST_PER_VOTE * (numberOfVotes - (
        numberOfVotes === 12 ? 2 :
        numberOfVotes === 53 ? 3 :
        numberOfVotes === 105 ? 5 :
        numberOfVotes === 510 ? 10 :
        numberOfVotes === 1020 ? 20 : 0
    ));

    
    const handlePaystackPayment = () => {
        if (!contestantId || !customerEmail) {
            toast({ title: "Email is required", description: "Please enter your email address to pay with Paystack.", variant: "destructive"});
            return;
        }

        startTransition(async () => {
            const callbackUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/vote/callback`;

            const result = await createPaystackPayment({
                email: customerEmail,
                amount: totalVoteCost,
                callback_url: callbackUrl,
                metadata: {
                    type: 'vote',
                    contestantId,
                    contestantName,
                    contestantCategory,
                    numberOfVotes
                }
            });

            if (result.success && result.authorizationUrl) {
                window.location.href = result.authorizationUrl;
            } else {
                toast({
                    title: "Paystack Error",
                    description: result.error || "Could not initiate Paystack payment. Please try again.",
                    variant: "destructive",
                });
            }
        });
    };
    
    if (!contestantId || !contestantName || !contestantCategory) {
        return (
            <Card className="bg-zinc-900/50 border-destructive/50 text-white shadow-2xl shadow-destructive/10 text-center">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl text-destructive">Invalid Vote Details</CardTitle>
                    <CardDescription className="text-zinc-300">
                        The contestant information is missing or incomplete.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-zinc-400 mb-6">Please go back to the voting page and select a contestant again.</p>
                     <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                        <Link href="/vote">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Go Back to Vote
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        );
    }
    
    return (
        <Card className="bg-card border-border text-foreground shadow-2xl shadow-primary/10">
            <CardHeader>
                <CardTitle className="font-headline text-3xl text-primary">Confirm Your Vote</CardTitle>
                <CardDescription className="text-muted-foreground">Please review the details below and choose a payment method.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center space-x-4 mb-6">
                    <Image src={contestantImage} alt={contestantName} width={100} height={125} className="rounded-lg border-2 border-primary/50 object-cover" />
                    <div>
                        <h3 className="text-2xl font-bold text-foreground">{contestantName}</h3>
                        <p className="text-primary">{contestantCategory}</p>
                        <p className="text-sm text-muted-foreground mt-1">Number of Votes: <span className="font-bold">{numberOfVotes}</span></p>
                    </div>
                </div>
                <div className="border-t border-border pt-4 flex justify-between items-center text-xl">
                    <span className="text-muted-foreground">Total Cost:</span>
                    <span className="font-bold text-primary">N{totalVoteCost.toFixed(2)}</span>
                </div>
                
                <Tabs defaultValue="paystack" className="w-full mt-8">
                    <TabsList className="grid w-full grid-cols-1 bg-muted">
                        <TabsTrigger value="paystack">
                             <Image src="/paystack.png" width={24} height={24} alt="Paystack" className="mr-2"/> Pay with Paystack
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="paystack" className="mt-4 space-y-4">
                        <p className="text-xs text-muted-foreground mb-2 text-center">
                            Securely pay with Card, Bank, USSD, etc. via Paystack.
                        </p>
                        <div className="space-y-2">
                             <Label htmlFor="customerEmail" className="text-muted-foreground">Email Address</Label>
                            <Input id="customerEmail" type="email" placeholder="your.email@example.com" value={customerEmail} onChange={e => setCustomerEmail(e.target.value)} />
                        </div>
                        <Button
                            size="lg"
                            className="w-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 disabled:bg-muted"
                            onClick={handlePaystackPayment}
                            disabled={isPending || !customerEmail}
                        >
                             {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                             {isPending ? 'Processing...' : 'Pay with Paystack'}
                        </Button>
                    </TabsContent>
                </Tabs>
            </CardContent>
            <CardFooter>
                 <Button asChild variant="link" className="text-muted-foreground hover:text-primary" onClick={() => router.back()}>
                    <Link href="/vote">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}

export default function CheckoutPage() {
    return (
        <div className="bg-background text-foreground min-h-screen">
            <div className="min-h-screen flex items-center justify-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                     <header className="text-center mb-12">
                        <Image src="/SR.jpg" alt="SR Fitness Awards Logo" width={96} height={96} className="h-24 w-24 mx-auto mb-4 rounded-full" data-ai-hint="awards logo" />
                        <h1 className="font-headline text-5xl text-primary">Vote Checkout</h1>
                    </header>
                    <main>
                      <Suspense fallback={
                          <div className="flex justify-center items-center h-64">
                              <Loader2 className="h-12 w-12 text-primary animate-spin" />
                          </div>
                      }>
                        <CheckoutView />
                      </Suspense>
                    </main>
                </div>
            </div>
        </div>
    );
}
