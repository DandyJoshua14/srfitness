
import Image from 'next/image';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Dumbbell, Zap, Users, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Personal Training - SR Fitness',
  description: 'Achieve your unique fitness goals with our expert one-on-one coaching and customized training plans at SR Fitness.',
};

export default function PersonalTrainingPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <Dumbbell className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
            Personalized Training Programs
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlock your full potential with our expert one-on-one coaching. We tailor every aspect of your training and nutrition to help you achieve remarkable results in the shortest, safest possible time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative aspect-[4/3] rounded-lg shadow-xl overflow-hidden group">
            <Image
              src="/personal.jpeg"
              alt="Personal Training Session"
              layout="fill"
              objectFit="cover"
              className="transform transition-transform duration-500 group-hover:scale-110"
              data-ai-hint="trainer client workout"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div className="space-y-6">
            <h2 className="font-headline text-3xl text-foreground font-semibold">Why Choose Personal Training at SR Fitness?</h2>
            <p className="text-muted-foreground">
              Our certified personal trainers are more than just instructors; they are your partners in wellness. They provide dedicated guidance, unwavering motivation, and the technical expertise needed for you to succeed. Whether you're taking your first step into fitness or are a seasoned athlete aiming for new heights, we customize every session to your unique abilities and aspirations.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Target className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Customized Workout Plans:</span> Designed specifically for your goals, be it weight loss, muscle gain, or performance enhancement.</span>
              </li>
              <li className="flex items-start">
                <Zap className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Expert Nutritional Guidance:</span> Comprehensive support to complement your training and accelerate results.</span>
              </li>
              <li className="flex items-start">
                <Users className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Accountability & Motivation:</span> Consistent support to keep you on track, pushing your limits safely.</span>
              </li>
            </ul>
            <Button asChild size="lg" className="font-headline text-xl px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-shadow">
              <Link href="/#contact">Start your Journey Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
