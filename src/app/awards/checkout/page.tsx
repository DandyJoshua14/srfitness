
'use client';

import { Suspense, useState, useTransition } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Loader2, Minus, Plus, Ticket } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { createPaystackPayment } from '@/app/actions';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

const ticketOptions = [
  { name: 'Silver Table', price: 100000, image: '/gold.jpg', dataAiHint: 'silver ticket' },
  { name: 'Gold Table for 8', price: 200000, image: '/SILVER.jpg', dataAiHint: 'gold ticket' },
];

function TicketCheckoutView() {
    const router = useRouter();
    const { toast } = useToast();
    const [isPending, startTransition] = useTransition();

    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [quantities, setQuantities] = useState<Record<string, number>>({
        'Silver Table': 0,
        'Gold Table for 8': 0,
    });

    const handleQuantityChange = (ticketName: string, change: number) => {
        setQuantities(prev => ({
            ...prev,
            [ticketName]: Math.max(0, (prev[ticketName] || 0) + change),
        }));
    };

    const totalAmount = ticketOptions.reduce((total, ticket) => {
        return total + (quantities[ticket.name] || 0) * ticket.price;
    }, 0);

    const ticketsToPurchase = Object.entries(quantities)
      .filter(([, qty]) => qty > 0)
      .map(([name, qty]) => ({ name, qty }));

    const handlePayment = () => {
        if (totalAmount === 0) {
            toast({ title: "No tickets selected", description: "Please select the quantity for at least one ticket type.", variant: "destructive" });
            return;
        }
        if (!customerName || !customerEmail) {
            toast({ title: "Missing Information", description: "Please enter your name and email address.", variant: "destructive" });
            return;
        }
        
        startTransition(async () => {
            const callbackUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/awards/callback`;
            
            const ticketDescription = ticketsToPurchase.map(t => `${t.qty}x ${t.name}`).join(', ');

            const result = await createPaystackPayment({
                email: customerEmail,
                amount: totalAmount,
                callback_url: callbackUrl,
                metadata: {
                    type: 'ticket_purchase',
                    customerName: customerName,
                    ticketType: ticketDescription, 
                    quantity: ticketsToPurchase.reduce((acc, t) => acc + t.qty, 0),
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
        <Card className="bg-card border-primary/30 text-foreground shadow-2xl shadow-primary/10">
            <CardHeader>
                <CardTitle className="font-headline text-3xl text-primary">Purchase Your Tickets</CardTitle>
                <CardDescription className="text-muted-foreground">Select your tickets and proceed to our secure payment page.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-4">
                    {ticketOptions.map(ticket => (
                        <div key={ticket.name} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                            <div className="flex items-center gap-4">
                                <Image src={ticket.image} alt={ticket.name} width={64} height={64} className="rounded-md" data-ai-hint={ticket.dataAiHint} />
                                <div>
                                    <p className="font-semibold text-foreground">{ticket.name}</p>
                                    <p className="text-sm text-primary">₦{ticket.price.toLocaleString()}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button size="icon" variant="outline" className="h-8 w-8" onClick={() => handleQuantityChange(ticket.name, -1)}>
                                    <Minus className="h-4 w-4"/>
                                </Button>
                                <span className="font-bold text-lg w-10 text-center">{quantities[ticket.name] || 0}</span>
                                <Button size="icon" variant="outline" className="h-8 w-8" onClick={() => handleQuantityChange(ticket.name, 1)}>
                                    <Plus className="h-4 w-4"/>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <Separator className="bg-primary/20" />
                
                 <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                         <Label htmlFor="customerName" className="text-muted-foreground">Full Name</Label>
                        <Input id="customerName" placeholder="Your full name" value={customerName} onChange={e => setCustomerName(e.target.value)} />
                    </div>
                     <div className="space-y-2">
                         <Label htmlFor="customerEmail" className="text-muted-foreground">Email Address</Label>
                        <Input id="customerEmail" type="email" placeholder="your.email@example.com" value={customerEmail} onChange={e => setCustomerEmail(e.target.value)} />
                    </div>
                </div>

                 <Separator className="bg-primary/20" />

                <div className="pt-4 flex justify-between items-center text-xl">
                    <span className="text-muted-foreground font-headline">Total Cost:</span>
                    <span className="font-bold text-primary">₦{totalAmount.toLocaleString()}</span>
                </div>

                <Button
                    size="lg"
                    className="w-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 disabled:bg-muted"
                    onClick={handlePayment}
                    disabled={isPending || totalAmount === 0}
                >
                     {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Ticket className="mr-2 h-5 w-5"/>}
                     {isPending ? 'Processing...' : 'Proceed to Payment'}
                </Button>
            </CardContent>
            <CardFooter>
                 <Button asChild variant="link" className="text-muted-foreground hover:text-primary" onClick={() => router.back()}>
                    <Link href="/awards">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}

export default function TicketCheckoutPage() {
    return (
        <div className="bg-background text-foreground min-h-screen">
            <div className="min-h-screen flex items-center justify-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                     <header className="text-center mb-12">
                        <Image src="/SR.jpg" alt="SR Fitness Awards Logo" width={96} height={96} className="h-24 w-24 mx-auto mb-4 rounded-full" data-ai-hint="awards logo" />
                        <h1 className="font-headline text-5xl text-primary">Ticket Checkout</h1>
                    </header>
                    <main>
                      <Suspense fallback={
                          <div className="flex justify-center items-center h-64">
                              <Loader2 className="h-12 w-12 text-primary animate-spin" />
                          </div>
                      }>
                        <TicketCheckoutView />
                      </Suspense>
                    </main>
                </div>
            </div>
        </div>
    );
}
