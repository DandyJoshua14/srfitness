
import type { Metadata } from 'next';
import UserProfileClient from '@/components/features/profile/user-profile-client';
import { UserCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'My Account - SR Fitness',
  description: 'Manage your SR Fitness account details, preferences, fitness goals, and activity.',
};

export default function ProfilePage() {
  // In a real app, user data would be fetched here or via a session
  // For now, MOCK_IS_LOGGED_IN in header.tsx controls conceptual access
  const mockUser = {
    name: 'Alex Rider',
    email: 'alex.rider@example.com',
    joinDate: '2023-01-15',
    profilePictureUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'profile person'
  };

  const mockPrivacySettings = {
    showActivityOnMap: true,
    shareWorkoutData: false,
    receiveNewsletter: true,
  };

  const mockFitnessData = {
    currentGoals: ['Lose 10kg by December', 'Run a 5K'],
    recentActivities: [
      { date: '2024-07-28', type: 'Strength Training', duration: '60 min', calories: '450 kcal (est.)' },
      { date: '2024-07-26', type: 'Burn Off Bootcamp', duration: '45 min', calories: '550 kcal (est.)' },
    ],
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <UserCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
          My Account Dashboard
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          Welcome back, {mockUser.name.split(' ')[0]}! Here's an overview of your SR Fitness journey.
        </p>
      </div>
      <UserProfileClient 
        user={mockUser} 
        privacySettings={mockPrivacySettings}
        fitnessData={mockFitnessData} 
      />
    </div>
  );
}

    