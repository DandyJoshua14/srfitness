"use client";

import * as React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Dumbbell, Zap, Users, Target, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";


// Metadata can't be used directly in a Client Component for dynamic values,
// but we can leave it for static SEO purposes.
// export const metadata: Metadata = {
//   title: 'Personal Training - Real Transformations - SR Fitness',
//   description: 'Achieve your unique fitness goals with our expert one-on-one coaching and customized training plans at SR Fitness. See real client transformations.',
// };

const transformations = [
    {
        name: 'David L.',
        story: '"I lost 30lbs and gained a new level of confidence I never thought possible. The personalized plan was key."',
        beforeImg: 'https://placehold.co/400x600.png',
        afterImg: 'https://placehold.co/400x600.png',
        beforeHint: 'overweight man portrait',
        afterHint: 'fit man portrait'
    },
    {
        name: 'Maria S.',
        story: '"SR Fitness helped me build strength and tone up after years of inconsistent workouts. I feel stronger and more energetic than ever!"',
        beforeImg: 'https://placehold.co/400x600.png',
        afterImg: 'https://placehold.co/400x600.png',
        beforeHint: 'woman workout beginner',
        afterHint: 'woman workout fit'
    }
];

export default function PersonalTrainingPage() {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    );

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
          </div>
        </div>
      </section>

      {/* Before and After Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
                 <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
                    Real Transformations, Real Results
                </h2>
                <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
                    Be inspired by the incredible journeys of our members.
                </p>
            </div>
            
            <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                opts={{
                  loop: true,
                }}
              >
                <CarouselContent>
                  {transformations.map((item, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card className="bg-card border-border shadow-xl text-center overflow-hidden group">
                            <CardHeader className="p-0">
                                <div className="grid grid-cols-2">
                                    <div className="relative aspect-[3/4]">
                                        <Image src={item.beforeImg} alt={`Before photo of ${item.name}`} layout="fill" objectFit="cover" data-ai-hint={item.beforeHint} />
                                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                            <span className="font-headline text-white text-2xl tracking-widest opacity-80" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>BEFORE</span>
                                        </div>
                                    </div>
                                    <div className="relative aspect-[3/4]">
                                        <Image src={item.afterImg} alt={`After photo of ${item.name}`} layout="fill" objectFit="cover" data-ai-hint={item.afterHint} />
                                        <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                                             <span className="font-headline text-white text-2xl tracking-widest" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>AFTER</span>
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6">
                                <CardTitle className="font-headline text-2xl text-primary mb-2">{item.name}</CardTitle>
                                <p className="text-muted-foreground text-sm italic">"{item.story}"</p>
                            </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-[-10px] sm:left-[-50px] top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-[-10px] sm:right-[-50px] top-1/2 -translate-y-1/2" />
            </Carousel>

             <div className="text-center mt-12 md:mt-16">
                <Button asChild size="lg" className="group font-headline text-xl px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transform hover:scale-105 transition-transform">
                    <Link href="/#contact">
                        Start Your Transformation <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
