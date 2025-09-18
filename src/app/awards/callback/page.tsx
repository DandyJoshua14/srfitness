
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
    const [message, setMessage] = useState('Verifying your ticket purchase...');

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
                    router.push('/awards');
                }, 4000); 
            }
        };

        verify();
    }, [reference, router]);

    const statusIcons = {
        verifying: <Loader2 className="h-16 w-16 animate-spin text-amber-400" />,
        success: <CheckCircle className="h-16 w-16 text-green-400" />,
        failed: <XCircle className="h-16 w-16 text-red-400" />,
        error: <AlertTriangle className="h-16 w-16 text-destructive" />,
    };

    const statusTitles = {
        verifying: 'Verifying Payment',
        success: 'Purchase Successful!',
        failed: 'Payment Failed',
        error: 'An Error Occurred',
    };
    
    const statusDescriptions = {
        verifying: 'Please wait while we confirm your ticket purchase...',
        success: 'Thank you for your purchase! A confirmation has been sent to your email. Redirecting you shortly...',
        failed: 'There was an issue with your payment. Please try again.',
        error: 'An unexpected error occurred during verification.'
    }

    return (
        <Card className="bg-zinc-900/50 border-zinc-700 text-white shadow-2xl shadow-amber-500/10 text-center max-w-lg mx-auto">
            <CardHeader>
                <div className="mx-auto mb-4">{statusIcons[status]}</div>
                <CardTitle className="font-headline text-3xl text-amber-400">{statusTitles[status]}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <CardDescription className="text-zinc-300 text-lg">{message || statusDescriptions[status]}</CardDescription>
                 {status !== 'verifying' && (
                    <Button asChild size="lg" className="bg-amber-500 text-black hover:bg-amber-400">
                        <Link href="/awards">
                            {status === 'success' ? 'Back to Awards' : 'Try Again'}
                        </Link>
                    </Button>
                 )}
            </CardContent>
        </Card>
    );
}

export default function TicketCallbackPage() {
    return (
        <div className="bg-black text-white min-h-screen" style={{
            backgroundImage: `url('/black-bg.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
        }}>
            <div className="bg-black/80 backdrop-blur-sm min-h-screen flex items-center justify-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                     <main>
                      <Suspense fallback={<div className="text-center text-white">Loading payment details...</div>}>
                        <VerificationStatus />
                      </Suspense>
                    </main>
                </div>
            </div>
        </div>
    );
}
