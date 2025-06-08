import HeroSection from '@/components/sections/hero-section';
import ClassScheduleSection from '@/components/sections/class-schedule-section';
import TrainerProfilesSection from '@/components/sections/trainer-profiles-section';
import ContactLocationSection from '@/components/sections/contact-location-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClassScheduleSection />
      <TrainerProfilesSection />
      <ContactLocationSection />
    </>
  );
}
