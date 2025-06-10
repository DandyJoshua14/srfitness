
import type { Metadata } from 'next';
import SmartMirrorClient from '@/components/features/smart-mirror/smart-mirror-client';
import { ScanLine } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Smart Mirror Form Analysis - SR Fitness',
  description: 'Get real-time feedback on your exercise form using our AI-powered Smart Mirror.',
};

export default function SmartMirrorPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <ScanLine className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
          Smart Mirror Form Analysis
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          Perfect your technique with AI-driven real-time feedback. Allow camera access to begin.
        </p>
      </div>
      <SmartMirrorClient />
    </div>
  );
}
