
import type { Metadata } from 'next';
import CommunityFeedClient from '@/components/features/community/community-feed-client';
import { Newspaper } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The SR Fitness Wellness Hub - Blog & News',
  description: 'Your source for inspiration, expert advice, and success stories that fuel a healthier you.',
};

export default function CommunityPage() {
  return (
    <div className="bg-muted/40 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center mb-12 md:mb-16">
                <Newspaper className="h-16 w-16 text-primary mx-auto mb-4" />
                <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
                The SR Fitness Wellness Hub
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Your source for inspiration, expert advice, and success stories that fuel a healthier you.
                </p>
            </div>
            <CommunityFeedClient />
        </div>
    </div>
  );
}
