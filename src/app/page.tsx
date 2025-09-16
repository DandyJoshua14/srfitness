
import HeroSection from '@/components/sections/hero-section';
import AboutSummarySection from '@/components/sections/about-summary-section';
import KeyFeaturesSection from '@/components/sections/key-features-section';
import ServicesHighlightSection from '@/components/sections/services-highlight-section';
import BlogHighlightSection from '@/components/sections/blog-highlight-section';
import MarketplaceHighlightSection from '@/components/sections/marketplace-highlight-section';
import OurImpactSection from '@/components/sections/our-impact-section';
import DailyTipSection from '@/components/sections/daily-tip-section';
import GallerySection from '@/components/sections/gallery-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SR Fitness - Unleash Your Potential',
  description: 'SR Fitness is a wellness consultancy brand that helps people achieve good health through personal training, community outreach, education, and advocacy. Its mission focuses on transformation and inclusivity, having positively impacted thousands via training, seminars and corporate Wellness programs.',
  verification: {
    google: 'aXKYc51I-jKg23iI2dIdJxJ6XjU984_An5WrJe7Cl0g',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSummarySection />
      <KeyFeaturesSection />
      <ServicesHighlightSection />
      <GallerySection />
      <BlogHighlightSection />
      <MarketplaceHighlightSection />
      <OurImpactSection />
      <DailyTipSection />
    </>
  );
}
