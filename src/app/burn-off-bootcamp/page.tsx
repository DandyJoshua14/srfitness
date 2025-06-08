
import Image from 'next/image';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Flame, Users, Zap, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Burn Off Bootcamp - SR Fitness',
  description: 'Experience high-energy group workouts designed to torch calories, build strength, and boost your metabolism at SR Fitness.',
};

export default function BurnOffBootcampPage() {
  return (
    <div className="bg-secondary text-secondary-foreground">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <Flame className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
            Burn Off Bootcamp
          </h1>
          <p className="text-lg sm:text-xl text-secondary-foreground/80 max-w-3xl mx-auto">
            Ignite your metabolism with our signature Burn Off Bootcamp! These high-intensity, dynamic group sessions are engineered to maximize calorie burn, build lean muscle, and skyrocket your endurance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
           <div className="space-y-6 md:order-1">
            <h2 className="font-headline text-3xl text-primary font-semibold">Unleash Your Inner Athlete!</h2>
            <p className="text-secondary-foreground/80">
              Our Burn Off Bootcamp isn't just a class; it's an experience. We blend challenging functional movements, cardio blasts, and strength circuits into a cohesive program that is as fun as it is effective. Suitable for all fitness levels, our expert instructors provide modifications and motivation every step of the way.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Zap className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                <span><span className="font-semibold text-primary-foreground">Dynamic Full-Body Workouts:</span> Engaging and varied routines that keep you challenged and prevent plateaus.</span>
              </li>
              <li className="flex items-start">
                <Users className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                <span><span className="font-semibold text-primary-foreground">Motivating Group Atmosphere:</span> Train alongside a supportive community that cheers you on.</span>
              </li>
              <li className="flex items-start">
                <TrendingUp className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                <span><span className="font-semibold text-primary-foreground">Rapid Results:</span> Proven to improve cardiovascular health, build strength, and shed fat.</span>
              </li>
            </ul>
            <Button asChild size="lg" className="font-headline text-xl px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-shadow">
              <Link href="/#contact">Inquire About Bootcamps</Link>
            </Button>
          </div>
          <div className="relative aspect-[4/3] rounded-lg shadow-xl overflow-hidden group md:order-2">
            <Image
              src="https://placehold.co/600x450.png"
              alt="Bootcamp Class in action"
              layout="fill"
              objectFit="cover"
              className="transform transition-transform duration-500 group-hover:scale-110"
              data-ai-hint="group fitness class"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
