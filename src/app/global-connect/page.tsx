
import type { Metadata } from 'next';
import GlobalConnectClient from '@/components/features/global-connect/global-connect-client';
import { Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Global Gym Connect - SR Fitness',
  description: 'Connect with SR Fitness members worldwide, see live activity, and get motivated.',
};

export default function GlobalConnectPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <Globe className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
          Global Gym Connect
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          See where SR Fitness members are active around the world and join the global fitness movement.
        </p>
      </div>
      <GlobalConnectClient />
    </div>
  );
}
