
"use client";

import HeroSection from '@/components/sections/hero-section';
import AboutSummarySection from '@/components/sections/about-summary-section';
import KeyFeaturesSection from '@/components/sections/key-features-section';
import ServicesHighlightSection from '@/components/sections/services-highlight-section';
import TestimonialSliderSection from '@/components/sections/testimonial-slider-section';
import BlogHighlightSection from '@/components/sections/blog-highlight-section';
import MarketplaceHighlightSection from '@/components/sections/marketplace-highlight-section';
import OurImpactSection from '@/components/sections/our-impact-section';
import DailyTipSection from '@/components/sections/daily-tip-section';
import GallerySection from '@/components/sections/gallery-section';
import EventAdModal from '@/components/features/event-ad-modal';

// Metadata needs to be defined in a Server Component or a metadata export.
// For this client component, we'd handle titles/meta via a different mechanism
// or hoist this component. For now, we assume metadata is handled at a higher level.

export default function HomePage() {
  return (
    <>
      <EventAdModal />
      <HeroSection />
      <AboutSummarySection />
      <KeyFeaturesSection />
      <ServicesHighlightSection />
      <GallerySection />
      <TestimonialSliderSection />
      <BlogHighlightSection />
      <MarketplaceHighlightSection />
      <OurImpactSection />
      <DailyTipSection />
    </>
  );
}
