
import type { Metadata } from 'next';
import CommunityFeedClient from '@/components/features/community/community-feed-client';
import { Rss } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SR Fitness Blog - News & Announcements',
  description: 'Stay up-to-date with the latest news, announcements, and articles from the SR Fitness team.',
};

export default function CommunityPage() {
  return (
    <div className="bg-muted/40 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center mb-12 md:mb-16">
                <Rss className="h-16 w-16 text-primary mx-auto mb-4" />
                <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
                News & Announcements
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                The official blog for SR Fitness. All posts are from our admin team.
                </p>
            </div>
            <CommunityFeedClient />
        </div>
    </div>
  );
}
