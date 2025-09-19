
'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { verifyPaystackPayment } from '@/app/actions';

function VerificationStatus() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const reference = searchParams.get('reference');
    
    const [status, setStatus] = useState<'verifying' | 'success' | 'failed' | 'error'>('verifying');
    const [message, setMessage] = useState('Verifying your payment...');

    useEffect(() => {
        if (!reference) {
            setStatus('error');
            setMessage('No payment reference found. Your transaction may not have been completed.');
            return;
        }

        const verify = async () => {
            const result = await verifyPaystackPayment(reference);
            setStatus(result.status as 'success' | 'failed' | 'error');
            setMessage(result.message || result.error || 'An unknown error occurred.');

            if (result.status === 'success') {
                setTimeout(() => {
                    router.push('/vote');
                }, 3000); 
            }
        };

        verify();
    }, [reference, router]);

    const statusIcons = {
        verifying: <Loader2 className="h-16 w-16 animate-spin text-primary" />,
        success: <CheckCircle className="h-16 w-16 text-green-500" />,
        failed: <XCircle className="h-16 w-16 text-red-500" />,
        error: <AlertTriangle className="h-16 w-16 text-destructive" />,
    };

    const statusTitles = {
        verifying: 'Verifying Payment',
        success: 'Vote Recorded!',
        failed: 'Payment Failed',
        error: 'An Error Occurred',
    };
    
    const statusDescriptions = {
        verifying: 'Please wait while we confirm your payment with Paystack...',
        success: 'Thank you! Your vote has been recorded. Redirecting you back to the vote page...',
        failed: 'There was an issue with your payment. Please try again.',
        error: 'An unexpected error occurred during verification.'
    }

    return (
        <Card className="bg-card text-foreground shadow-2xl shadow-primary/10 text-center max-w-lg mx-auto">
            <CardHeader>
                <div className="mx-auto mb-4">{statusIcons[status]}</div>
                <CardTitle className="font-headline text-3xl text-primary">{statusTitles[status]}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <CardDescription className="text-muted-foreground text-lg">{message || statusDescriptions[status]}</CardDescription>
                 {status !== 'verifying' && (
                    <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                        <Link href="/vote">
                            {status === 'success' ? 'Vote Again' : 'Go Back to Vote Page'}
                        </Link>
                    </Button>
                 )}
            </CardContent>
        </Card>
    );
}


export default function VoteCallbackPage() {
    return (
        <div className="bg-background text-foreground min-h-screen">
            <div className="min-h-screen flex items-center justify-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                     <main>
                      <Suspense fallback={<div className="text-center text-foreground">Loading payment details...</div>}>
                        <VerificationStatus />
                      </Suspense>
                    </main>
                </div>
            </div>
        </div>
    );
}
