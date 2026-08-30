"use client";

import HeroSection from '@/components/sections/hero-section';
import ServicesHighlightSection from '@/components/sections/services-highlight-section';
import TransformationsShowcaseSection from '@/components/sections/transformations-showcase-section';
import MembershipPricingSection from '@/components/sections/membership-pricing-section';
import AboutSummarySection from '@/components/sections/about-summary-section';
import KeyFeaturesSection from '@/components/sections/key-features-section';
import TestimonialSliderSection from '@/components/sections/testimonial-slider-section';
import LeadMagnetSection from '@/components/sections/lead-magnet-section';
import GallerySection from '@/components/sections/gallery-section';
import OurImpactSection from '@/components/sections/our-impact-section';
import BlogHighlightSection from '@/components/sections/blog-highlight-section';
import MarketplaceHighlightSection from '@/components/sections/marketplace-highlight-section';
import DailyTipSection from '@/components/sections/daily-tip-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesHighlightSection />
      <TransformationsShowcaseSection />
      <MembershipPricingSection />
      <AboutSummarySection />
      <KeyFeaturesSection />
      <TestimonialSliderSection />
      <LeadMagnetSection />
      <GallerySection />
      <OurImpactSection />
      <BlogHighlightSection />
      <MarketplaceHighlightSection />
      <DailyTipSection />
    </>
  );
}
