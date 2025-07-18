
import HeroSection from '@/components/sections/hero-section';
import AboutSummarySection from '@/components/sections/about-summary-section';
import ServicesHighlightSection from '@/components/sections/services-highlight-section';
import KeyFeaturesSection from '@/components/sections/key-features-section';
import BlogHighlightSection from '@/components/sections/blog-highlight-section';
import MarketplaceHighlightSection from '@/components/sections/marketplace-highlight-section';
import OurImpactSection from '@/components/sections/our-impact-section';
import DailyTipSection from '@/components/sections/daily-tip-section';
import ContactLocationSection from '@/components/sections/contact-location-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SR Fitness - Unleash Your Potential | Modern Gym & Training',
  description: 'Experience SR Fitness: state-of-the-art facilities, expert personal training, dynamic bootcamps, and a supportive community. Start your transformation today!',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSummarySection />
      <ServicesHighlightSection />
      <KeyFeaturesSection />
      <BlogHighlightSection />
      <MarketplaceHighlightSection />
      <OurImpactSection />
      <DailyTipSection />
      <ContactLocationSection />
    </>
  );
}
