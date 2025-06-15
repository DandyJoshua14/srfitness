
import Image from 'next/image';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Flame, Users, Zap, TrendingUp, CheckCircle, Info, TargetIcon, Star } from 'lucide-react'; // Added new icons

export const metadata: Metadata = {
  title: 'Burn Off Bootcamp - 21 Day Challenge - SR Fitness',
  description: 'Join the 21 Days Ultimate Fitness Event by SR Fitness. A complete body transformation for men & women. All fitness levels welcome.',
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

        {/* Event Specific Intro */}
        <div className="text-center mb-12 md:mb-16 p-6 md:p-8 bg-background text-foreground rounded-lg shadow-xl border border-primary/50">
          <h2 className="font-headline text-3xl sm:text-4xl text-primary font-semibold mb-3">
            The 21-Day Ultimate Fitness Event
          </h2>
          <p className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
            Nigeria’s Longest Single Duration Fitness Event
          </p>
          <p className="text-md text-muted-foreground max-w-2xl mx-auto">
            Prepare for a complete body transformation experience designed for both men and women, spanning an intensive 21-day period.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
           <div className="space-y-8 md:order-1"> {/* Increased space-y */}
            <div>
              <h3 className="font-headline text-3xl text-primary font-semibold mb-3 flex items-center">
                <Info className="h-7 w-7 mr-2" /> What Is It?
              </h3>
              <p className="text-secondary-foreground/80 leading-relaxed">
                A complete body transformation event for Men & Women that spans over a 21-day period. It’s designed to challenge you, redefine your limits, and help you achieve remarkable fitness milestones in a structured and supportive environment.
              </p>
            </div>

            <div>
              <h3 className="font-headline text-3xl text-primary font-semibold mb-3 flex items-center">
                <Users className="h-7 w-7 mr-2" /> Who Can Take Part?
              </h3>
              <p className="text-secondary-foreground/80 leading-relaxed mb-4">
                We accommodate all levels of fitness, from beginners to seasoned athletes. Our expert trainers provide modifications and support to ensure everyone can participate effectively and safely.
              </p>
              <div className="bg-primary/10 p-4 rounded-md border border-primary/30">
                <h4 className="font-semibold text-primary-foreground mb-2 text-lg flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary" /> Special Attention Groups
                </h4>
                <p className="text-secondary-foreground/80 text-sm leading-relaxed">
                  We also accommodate special attention groups such as those with hypertension or diabetes.
                </p>
                <p className="text-primary font-bold text-sm mt-2 leading-relaxed">
                  COMPULSORY MEDICAL CLEARANCE FROM A DOCTOR WITH HEALTH ASSESSMENT (PAR-Q FORM COMPLETED) IS REQUIRED FOR THESE GROUPS.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-headline text-3xl text-primary font-semibold mb-3 flex items-center">
                <TargetIcon className="h-7 w-7 mr-2" /> Keys to Success
              </h3>
              <p className="text-secondary-foreground/80 leading-relaxed">
                Our challenging after-burn workouts, continuous support and motivation from our world-class TEAM, combined with an easy-to-follow nutrition PLAN, are designed to help you look and feel in the best shape for you in just 21 Days.
              </p>
            </div>

            <div>
              <h3 className="font-headline text-3xl text-primary font-semibold mb-3 flex items-center">
                <Star className="h-7 w-7 mr-2" /> Our Track Record
              </h3>
              <p className="text-secondary-foreground/80 leading-relaxed">
                Our track record of social proof speaks for us. We have successfully guided hundreds of our clients to get in shape and kickstart their healthy lifestyle journey in just 21 days.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-border/20">
              <h2 className="font-headline text-3xl text-primary font-semibold mb-4">General Bootcamp Benefits</h2>
              <p className="text-secondary-foreground/80 mb-4">
                Our Burn Off Bootcamp isn't just a class; it's an experience. We blend challenging functional movements, cardio blasts, and strength circuits into a cohesive program that is as fun as it is effective.
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
            </div>

            <Button asChild size="lg" className="font-headline text-xl px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-shadow !mt-10">
              <Link href="/#contact">Inquire About the 21-Day Bootcamp</Link>
            </Button>
          </div>
          <div className="relative aspect-[4/3] rounded-lg shadow-xl overflow-hidden group md:order-2 md:sticky md:top-24"> {/* Made image sticky */}
            <Image
              src="/burn.png"
              alt="Bootcamp Class in action"
              layout="fill"
              objectFit="cover"
              className="transform transition-transform duration-500 group-hover:scale-110"
              data-ai-hint="group fitness class intense"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
