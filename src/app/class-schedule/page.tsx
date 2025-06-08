
import ClassScheduleSection from '@/components/sections/class-schedule-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Class Schedule - SR Fitness',
  description: 'Find and sign up for fitness classes at SR Fitness. Filter by day and type to discover your next workout.',
};

export default function ClassSchedulePage() {
  return (
    // You might want to wrap ClassScheduleSection with some padding or a container if needed
    // For example: <div className="py-16 md:py-24"><ClassScheduleSection /></div>
    // But ClassScheduleSection already has its own padding, so it might be fine as is.
    <ClassScheduleSection />
  );
}
