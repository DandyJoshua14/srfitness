
import HeroSection from '@/components/sections/hero-section';
import ContactLocationSection from '@/components/sections/contact-location-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SR Fitness - Unleash Your Potential',
  description: 'Join SR Fitness and transform your body and mind with our world-class trainers, state-of-the-art facilities, and diverse fitness programs. Your journey to strength and wellness starts here.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* TrainerProfilesSection has been removed from the homepage */}
      <ContactLocationSection />
    </>
  );
}
