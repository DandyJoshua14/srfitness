
import type { Metadata } from 'next';
import CommunityFeedClient from '@/components/features/community/community-feed-client';
import { Users } from 'lucide-react'; // Note: Icon choice might change if it becomes a true blog

export const metadata: Metadata = {
  title: 'Blog - SR Fitness',
  description: 'Dive into our latest articles, tips, and community stories on the SR Fitness Blog.',
};

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <Users className="h-16 w-16 text-primary mx-auto mb-4" /> {/* Consider changing icon to Newspaper or similar if content changes */}
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
          SR Fitness Blog
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          Dive into our latest articles, tips, and community stories.
        </p>
      </div>
      <CommunityFeedClient /> {/* Current content is a community feed */}
    </div>
  );
}
