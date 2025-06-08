
export interface Trainer {
  id: string;
  name: string;
  bio: string;
  specializations: string[];
  imageUrl: string;
}

export interface FitnessClass {
  id: string;
  name: string;
  trainerId: string;
  trainerName?: string; // Optional: denormalized for easier display
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  time: string; // e.g., "09:00 AM"
  duration: string; // e.g., "60 minutes"
  spotsAvailable: number;
  type: 'Yoga' | 'HIIT' | 'Strength' | 'Cardio' | 'Pilates';
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: string; // e.g., "$29/mo"
  priceFrequency: string; // e.g., "per month"
  description: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
  icon?: React.ElementType; // Lucide icon component
}
