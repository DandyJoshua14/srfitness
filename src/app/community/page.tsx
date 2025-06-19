
import type { Metadata } from 'next';
import CommunityFeedClient from '@/components/features/community/community-feed-client';
import { Newspaper } from 'lucide-react'; // Changed icon

export const metadata: Metadata = {
  title: 'Blog - SR Fitness',
  description: 'Dive into our latest articles, tips, and community stories on the SR Fitness Blog.',
};

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <Newspaper className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
          SR Fitness Blog
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          Latest articles, expert tips, and inspiring stories to fuel your fitness journey.
        </p>
      </div>
      <CommunityFeedClient />
    </div>
  );
}
