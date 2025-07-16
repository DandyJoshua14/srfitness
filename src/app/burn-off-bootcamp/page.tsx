
"use client";

import * as React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Flame, Users, Zap, TrendingUp, CheckCircle, Info, Target as TargetIcon, Star, Camera } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

// Metadata can't be used directly in a Client Component for dynamic values,
// but we can leave it for static SEO purposes.
// export const metadata: Metadata = {
//   title: 'Burn Off Bootcamp - 21 Day Challenge - SR Fitness',
//   description: 'Join the 21 Days Ultimate Fitness Event by SR Fitness. A complete body transformation for men & women. All fitness levels welcome.',
// };

export default function BurnOffBootcampPage() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
    
  const bootcampPhotos = [
    { src: '/b1.jpeg', alt: 'Bootcamp', dataAiHint: 'group fitness pushups' },
    { src: '/b2.jpeg', alt: 'Bootcamp', dataAiHint: 'fitness trainer motivation' },
    { src: '/b3.jpeg', alt: 'Bootcamp', dataAiHint: 'bootcamp fitness drill' },
    { src: '/b4.jpeg', alt: 'Bootcamp', dataAiHint: 'fitness teamwork support' },
    { src: '/b5.jpeg', alt: 'Bootcamp', dataAiHint: 'fitness teamwork support' },
  ];

  const resultsPhotos = [
    { src: 'https://placehold.co/600x400.png', alt: 'Bootcamp result after photo', dataAiHint: 'fitness transformation after' },
    { src: 'https://placehold.co/600x400.png', alt: 'Client happy with results', dataAiHint: 'happy fit person' },
    { src: 'https://placehold.co/600x400.png', alt: 'Client showing improved strength', dataAiHint: 'person lifting weight' },
    { src: 'https://placehold.co/600x400.png', alt: 'Group celebrating success', dataAiHint: 'fitness group celebration' },
  ];
  
  return (
    <div className="bg-secondary text-secondary-foreground">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 text-center">
         <div className="absolute inset-0 z-0">
          <Image
            src="/burn.png"
            alt="Energetic bootcamp session"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
            data-ai-hint="bootcamp energetic session"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-secondary/50"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Flame className="h-20 w-20 text-primary mx-auto mb-6" />
          <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl font-bold text-primary mb-4" style={{ textShadow: '1px 1px 2px hsl(var(--secondary))' }}>
            Burn-Off Bootcamp
          </h1>
          <p className="text-xl sm:text-2xl text-secondary-foreground/80 max-w-4xl mx-auto">
            Ignite your metabolism with our signature high-intensity sessions, engineered to maximize calorie burn, build lean muscle, and skyrocket your endurance.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Event Specific Intro */}
            <div className="text-center mb-16 md:mb-20 p-6 md:p-8 bg-background text-foreground rounded-lg shadow-xl border border-primary/50 max-w-4xl mx-auto">
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

            {/* Information Section */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start mb-20 md:mb-28">
                <div className="lg:col-span-1 space-y-6">
                     <h3 className="font-headline text-3xl text-primary font-semibold flex items-center">
                        <Info className="h-7 w-7 mr-2" /> What Is It?
                    </h3>
                    <p className="text-secondary-foreground/80 leading-relaxed">
                        A complete body transformation event that challenges you, redefines your limits, and helps you achieve remarkable fitness milestones in a structured, supportive environment.
                    </p>
                </div>
                 <div className="lg:col-span-1 space-y-6">
                    <h3 className="font-headline text-3xl text-primary font-semibold flex items-center">
                        <Users className="h-7 w-7 mr-2" /> Who Can Take Part?
                    </h3>
                    <p className="text-secondary-foreground/80 leading-relaxed">
                        We accommodate all levels of fitness, from beginners to seasoned athletes. Our expert trainers provide modifications to ensure everyone can participate safely.
                    </p>
                </div>
                <div className="lg:col-span-1 space-y-6">
                    <h3 className="font-headline text-3xl text-primary font-semibold flex items-center">
                        <TargetIcon className="h-7 w-7 mr-2" /> Keys to Success
                    </h3>
                    <p className="text-secondary-foreground/80 leading-relaxed">
                        Our challenging after-burn workouts, continuous support from our TEAM, and an easy-to-follow nutrition PLAN help you look and feel your best in just 21 Days.
                    </p>
                </div>

                <div className="lg:col-span-3 bg-primary/10 p-4 rounded-md border border-primary/30 mt-4">
                    <h4 className="font-semibold text-primary-foreground mb-2 text-lg flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary" /> Special Attention Groups
                    </h4>
                    <p className="text-secondary-foreground/80 text-sm leading-relaxed">
                    We also accommodate special attention groups such as those with hypertension or diabetes.
                    </p>
                    <p className="text-primary font-bold text-sm mt-2 leading-relaxed">
                    A COMPULSORY MEDICAL CLEARANCE FROM A DOCTOR WITH HEALTH ASSESSMENT (PAR-Q FORM COMPLETED) IS REQUIRED FOR THESE GROUPS.
                    </p>
                </div>
            </div>

            {/* Photo Gallery Section */}
            <section id="bootcamp-gallery" className="mb-20 md:mb-28">
              <div className="text-center mb-12">
                  <h2 className="font-headline text-4xl text-foreground font-semibold flex items-center justify-center gap-3">
                      <Camera className="h-9 w-9 text-primary" />
                      Bootcamp in Action
                  </h2>
                   <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-2">
                      Feel the energy and see the determination.
                  </p>
              </div>
              <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-4xl mx-auto"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                opts={{
                  loop: true,
                }}
              >
                <CarouselContent>
                  {bootcampPhotos.map((photo, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card className="overflow-hidden shadow-lg border-primary/20">
                          <CardContent className="flex aspect-[16/9] items-center justify-center p-0 relative">
                             <Image
                                src={photo.src}
                                alt={photo.alt}
                                layout="fill"
                                objectFit="cover"
                                className="transform transition-transform duration-500 group-hover:scale-110"
                                data-ai-hint={photo.dataAiHint}
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden sm:flex" />
                <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden sm:flex" />
              </Carousel>
            </section>

            {/* Bootcamp Results Section */}
            <section id="bootcamp-results" className="mb-20 md:mb-28">
              <div className="text-center mb-12">
                  <h2 className="font-headline text-4xl text-foreground font-semibold flex items-center justify-center gap-3">
                      <Star className="h-9 w-9 text-primary" />
                      Bootcamp Results
                  </h2>
                   <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-2">
                      See the incredible transformations from our members.
                  </p>
              </div>
              <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-4xl mx-auto"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                opts={{
                  loop: true,
                }}
              >
                <CarouselContent>
                  {resultsPhotos.map((photo, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card className="overflow-hidden shadow-lg border-primary/20">
                          <CardContent className="flex aspect-[16/9] items-center justify-center p-0 relative">
                             <Image
                                src={photo.src}
                                alt={photo.alt}
                                layout="fill"
                                objectFit="cover"
                                className="transform transition-transform duration-500 group-hover:scale-110"
                                data-ai-hint={photo.dataAiHint}
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden sm:flex" />
                <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden sm:flex" />
              </Carousel>
            </section>

             <div className="mt-8 pt-6 border-t border-border/20 text-center">
                <Button asChild size="lg" className="font-headline text-xl px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-shadow">
                    <Link href="/#contact">Inquire About the Next Bootcamp</Link>
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
    