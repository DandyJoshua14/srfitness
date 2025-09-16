
import type { Trainer } from './types';
import { Zap, ShieldCheck, Star, Dumbbell, Users, Activity } from 'lucide-react';

export const trainers: Trainer[] = [
  {
    id: '1',
    name: 'Alex Morgan',
    bio: 'Certified personal trainer with 10 years of experience in strength training and HIIT. Passionate about helping clients achieve their peak fitness.',
    specializations: ['Strength Training', 'HIIT', 'Functional Fitness'],
    imageUrl: 'https://placehold.co/300x300.png',
  },
  {
    id: '2',
    name: 'Sam Kerr',
    bio: 'Yoga Alliance certified instructor focusing on Vinyasa and restorative yoga. Believes in the mind-body connection for overall wellness.',
    specializations: ['Vinyasa Yoga', 'Restorative Yoga', 'Meditation'],
    imageUrl: 'https://placehold.co/300x300.png',
  },
  {
    id: '3',
    name: 'Chris Bumstead',
    bio: 'Former athlete turned Pilates and Cardio expert. Chris brings high energy and motivation to every class.',
    specializations: ['Pilates', 'Cardio Blast', 'Core Strength'],
    imageUrl: 'https://placehold.co/300x300.png',
  },
];
