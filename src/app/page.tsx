
import HeroSection from '@/components/sections/hero-section';
import AboutSummarySection from '@/components/sections/about-summary-section';
import ServicesHighlightSection from '@/components/sections/services-highlight-section';
import KeyFeaturesSection from '@/components/sections/key-features-section';
import TestimonialSliderSection from '@/components/sections/testimonial-slider-section';
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
      <TestimonialSliderSection />
      <ContactLocationSection />
    </>
  );
}
