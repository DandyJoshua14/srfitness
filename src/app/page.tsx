
import HeroSection from '@/components/sections/hero-section';
import TrainerProfilesSection from '@/components/sections/trainer-profiles-section';
import ContactLocationSection from '@/components/sections/contact-location-section';
import type { Metadata } from 'next';

// Metadata for the homepage can remain in layout.tsx or be specific here
export const metadata: Metadata = {
  title: 'SR Fitness - Unleash Your Potential',
  description: 'Join SR Fitness and transform your body and mind with our world-class trainers, state-of-the-art facilities, and diverse fitness programs. Your journey to strength and wellness starts here.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* TrainerProfilesSection and ContactLocationSection remain part of the homepage */}
      <TrainerProfilesSection />
      <ContactLocationSection />
    </>
  );
}
