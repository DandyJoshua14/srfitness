
'use client';

import { useState, useTransition } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Loader2, Heart, Gift } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { createPaystackPayment } from '@/app/actions';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const donationPresets = [5000, 10000, 25000, 50000];

export default function DonatePage() {
    const router = useRouter();
    const { toast } = useToast();
    const [isPending, startTransition] = useTransition();

    const [donorName, setDonorName] = useState('');
    const [donorEmail, setDonorEmail] = useState('');
    const [donationAmount, setDonationAmount] = useState(0);
    const [customAmount, setCustomAmount] = useState('');

    const handleAmountSelect = (amount: number) => {
        setDonationAmount(amount);
        setCustomAmount(String(amount));
    };

    const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCustomAmount(value);
        setDonationAmount(Number(value));
    };

    const handlePayment = () => {
        if (donationAmount <= 0) {
            toast({ title: "Invalid Amount", description: "Please enter a valid donation amount.", variant: "destructive" });
            return;
        }
        if (!donorName || !donorEmail) {
            toast({ title: "Missing Information", description: "Please enter your name and email address.", variant: "destructive" });
            return;
        }
        
        startTransition(async () => {
            const callbackUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/donate/callback`;
            
            const result = await createPaystackPayment({
                email: donorEmail,
                amount: donationAmount,
                callback_url: callbackUrl,
                metadata: {
                    type: 'donation',
                    donorName: donorName,
                }
            });

            if (result.success && result.authorizationUrl) {
                window.location.href = result.authorizationUrl;
            } else {
                toast({
                    title: "Payment Error",
                    description: result.error || "Could not initiate payment. Please try again.",
                    variant: "destructive",
                });
            }
        });
    };

    return (
        <div className="bg-background text-foreground min-h-screen">
            <div className="min-h-screen flex items-center justify-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                     <header className="text-center mb-12">
                        <Image src="/SR.jpg" alt="SR Fitness Foundation Logo" width={96} height={96} className="h-24 w-24 mx-auto mb-4 rounded-full" data-ai-hint="charity logo" />
                        <h1 className="font-headline text-5xl text-primary">Support Our Cause</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-2">
                          Your generous donation helps us continue our community outreach and foundation activities.
                        </p>
                    </header>
                    <main>
                       <Card className="bg-card border-primary/30 text-foreground shadow-2xl shadow-primary/10 max-w-lg mx-auto">
                          <CardHeader>
                              <CardTitle className="font-headline text-3xl text-primary flex items-center gap-2">
                                <Gift className="h-7 w-7"/> Make a Donation
                              </CardTitle>
                              <CardDescription className="text-muted-foreground">Every contribution makes a difference. Thank you for your support!</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-6">
                              <div className="space-y-2">
                                  <Label className="font-semibold">Select an Amount (₦)</Label>
                                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                      {donationPresets.map(amount => (
                                          <Button 
                                            key={amount} 
                                            variant={donationAmount === amount ? 'default' : 'outline'}
                                            onClick={() => handleAmountSelect(amount)}
                                          >
                                            {amount.toLocaleString()}
                                          </Button>
                                      ))}
                                  </div>
                              </div>

                              <div className="space-y-2">
                                  <Label htmlFor="customAmount" className="font-semibold">Or Enter a Custom Amount (₦)</Label>
                                  <Input 
                                    id="customAmount" 
                                    type="number" 
                                    placeholder="e.g., 7500" 
                                    value={customAmount} 
                                    onChange={handleCustomAmountChange} 
                                  />
                              </div>
                              
                              <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-border">
                                  <div className="space-y-2">
                                      <Label htmlFor="donorName" className="font-semibold">Full Name</Label>
                                      <Input id="donorName" placeholder="Your full name" value={donorName} onChange={e => setDonorName(e.target.value)} />
                                  </div>
                                  <div className="space-y-2">
                                      <Label htmlFor="donorEmail" className="font-semibold">Email Address</Label>
                                      <Input id="donorEmail" type="email" placeholder="your.email@example.com" value={donorEmail} onChange={e => setDonorEmail(e.target.value)} />
                                  </div>
                              </div>

                              <Button
                                  size="lg"
                                  className="w-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 disabled:bg-muted"
                                  onClick={handlePayment}
                                  disabled={isPending || donationAmount <= 0 || !donorName || !donorEmail}
                              >
                                  {isPending ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Heart className="mr-2 h-5 w-5"/>}
                                  {isPending ? 'Processing...' : `Donate ₦${donationAmount.toLocaleString()}`}
                              </Button>
                          </CardContent>
                          <CardFooter>
                              <Button asChild variant="link" className="text-muted-foreground hover:text-primary" onClick={() => router.back()}>
                                  <Link href="/">
                                      <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
                                  </Link>
                              </Button>
                          </CardFooter>
                      </Card>
                    </main>
                </div>
            </div>
        </div>
    );
}
