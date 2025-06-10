
import type { Metadata } from 'next';
import CommunityFeedClient from '@/components/features/community/community-feed-client';
import { Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Community Hub - SR Fitness',
  description: 'Connect with fellow members, share your progress, and find motivation in the SR Fitness community.',
};

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <Users className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
          SR Fitness Community Hub
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          Share your journey, celebrate achievements, and connect with a supportive fitness family.
        </p>
      </div>
      <CommunityFeedClient />
    </div>
  );
}
