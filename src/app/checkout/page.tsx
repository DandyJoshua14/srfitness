

"use client";

import { Suspense, useTransition, useState } from 'react';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Loader2, CheckCircle, ShieldCheck, CreditCard, Banknote } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { createRemitaPayment, createPaystackPayment } from '@/app/actions';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';

const VOTE_COST_PER_VOTE = 100;

function CheckoutView() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { toast } = useToast();
    const [isPending, startTransition] = useTransition();

    const [view, setView] = useState<'confirm' | 'success'>('confirm');
    
    // Form state for Paystack and Remita
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');


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
    
    const handlePaystackPayment = () => {
        if (!contestantId || !customerEmail) {
            toast({ title: "Email is required", description: "Please enter your email address to pay with Paystack.", variant: "destructive"});
            return;
        }

        startTransition(async () => {
            const result = await createPaystackPayment({
                email: customerEmail,
                amount: totalVoteCost,
                metadata: {
                    contestantId,
                    contestantName,
                    contestantCategory,
                    numberOfVotes
                }
            });

            if (result.success && result.authorizationUrl) {
                // Redirect to Paystack's payment page
                router.push(result.authorizationUrl);
            } else {
                toast({
                    title: "Paystack Error",
                    description: result.error || "Could not initiate Paystack payment. Please try again.",
                    variant: "destructive",
                });
            }
        });
    };
    
    const handleRemitaPayment = () => {
        if (!contestantId || !customerName || !customerEmail || !customerPhone) {
            toast({ title: "Missing Information", description: "Please fill out all fields for the Remita payment.", variant: "destructive"});
            return;
        }

        startTransition(async () => {
            const transactionReference = `SRF-VOTE-REMITA-${contestantId}-${Date.now()}`;
            const result = await createRemitaPayment({
                amount: totalVoteCost,
                charge: 0, // Assuming no extra charge for now
                transactionReference,
                customerEmail: customerEmail,
                customerName: customerName,
                customerPhoneNumber: customerPhone,
                description: `Vote for ${contestantName}`,
                // Pass vote data through for recording
                contestantId,
                contestantName,
                contestantCategory,
                numberOfVotes,
            });

             if (result.success) {
                toast({
                    title: "Remita Payment Successful",
                    description: "Your payment has been processed and your vote recorded.",
                });
                // In a real scenario, you might redirect to a Remita page or handle their response.
                // For now, we'll go to the success view.
                setView('success');
            } else {
                toast({
                    title: "Remita Payment Failed",
                    description: result.error || "Could not process Remita payment. Please try again.",
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
    
    if (view === 'success') {
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
                <CardDescription className="text-zinc-400">Please review the details below and choose a payment method.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center space-x-4 mb-6">
                    <Image src={contestantImage} alt={contestantName} width={100} height={125} className="rounded-lg border-2 border-amber-400/50" />
                    <div>
                        <h3 className="text-2xl font-bold text-white">{contestantName}</h3>
                        <p className="text-amber-300">{contestantCategory}</p>
                        <p className="text-sm text-zinc-300 mt-1">Number of Votes: <span className="font-bold">{numberOfVotes}</span></p>
                    </div>
                </div>
                <div className="border-t border-zinc-700 pt-4 flex justify-between items-center text-xl">
                    <span className="text-zinc-300">Total Cost:</span>
                    <span className="font-bold text-amber-400">N{totalVoteCost.toFixed(2)}</span>
                </div>
                
                <Tabs defaultValue="paystack" className="w-full mt-8">
                    <TabsList className="grid w-full grid-cols-2 bg-zinc-800/50">
                        <TabsTrigger value="paystack" className="data-[state=active]:bg-amber-500/10 data-[state=active]:text-amber-300 text-zinc-400">
                             <Image src="https://files.paystack.co/assets/payment-channel/logo/card.png" width={20} height={20} alt="Paystack" className="mr-2"/> Paystack
                        </TabsTrigger>
                        <TabsTrigger value="remita" className="data-[state=active]:bg-amber-500/10 data-[state=active]:text-amber-300 text-zinc-400"><CreditCard className="mr-2 h-4 w-4"/> Remita</TabsTrigger>
                    </TabsList>

                    <TabsContent value="paystack" className="mt-4 space-y-4">
                        <p className="text-xs text-zinc-500 mb-2 text-center">
                            Securely pay with Card, Bank, USSD, etc. via Paystack.
                        </p>
                        <div className="space-y-2">
                             <Label htmlFor="customerEmail" className="text-zinc-400">Email Address</Label>
                            <Input id="customerEmail" type="email" placeholder="your.email@example.com" value={customerEmail} onChange={e => setCustomerEmail(e.target.value)} className="bg-zinc-800 border-zinc-700 focus:ring-amber-400"/>
                        </div>
                        <Button
                            size="lg"
                            className="w-full bg-amber-500 text-black font-bold text-lg hover:bg-amber-400 disabled:bg-zinc-600"
                            onClick={handlePaystackPayment}
                            disabled={isPending || !customerEmail}
                        >
                             {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                             {isPending ? 'Processing...' : 'Pay with Paystack'}
                        </Button>
                    </TabsContent>

                    <TabsContent value="remita" className="mt-4 space-y-4">
                        <p className="text-xs text-zinc-500 mb-2 text-center">
                            Pay using Remita. Please fill out your details below.
                        </p>
                         <div className="space-y-2">
                            <Label htmlFor="customerName" className="text-zinc-400">Full Name</Label>
                            <Input id="customerName" placeholder="Your Full Name" value={customerName} onChange={e => setCustomerName(e.target.value)} className="bg-zinc-800 border-zinc-700 focus:ring-amber-400"/>
                        </div>
                        <div className="space-y-2">
                             <Label htmlFor="customerEmailRemita" className="text-zinc-400">Email Address</Label>
                            <Input id="customerEmailRemita" type="email" placeholder="your.email@example.com" value={customerEmail} onChange={e => setCustomerEmail(e.target.value)} className="bg-zinc-800 border-zinc-700 focus:ring-amber-400"/>
                        </div>
                         <div className="space-y-2">
                             <Label htmlFor="customerPhone" className="text-zinc-400">Phone Number</Label>
                            <Input id="customerPhone" placeholder="Your Phone Number" value={customerPhone} onChange={e => setCustomerPhone(e.target.value)} className="bg-zinc-800 border-zinc-700 focus:ring-amber-400"/>
                        </div>
                        <Button
                            size="lg"
                            className="w-full bg-amber-500 text-black font-bold text-lg hover:bg-amber-400 disabled:bg-zinc-600"
                            onClick={handleRemitaPayment}
                            disabled={isPending}
                        >
                             {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                             {isPending ? 'Processing...' : 'Pay with Remita'}
                        </Button>
                        <p className="text-xs text-zinc-500 mt-2 text-center italic">
                            Note: The Remita payment flow is currently conceptual and has placeholder values.
                        </p>
                    </TabsContent>
                </Tabs>
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
