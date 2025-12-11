
"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Trophy, Sunrise, Sunset, Camera } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

export default function AwardsPage() {
  const workoutPhotos = [
    { src: '/m1.jpg', alt: 'Workout exhibition highlight 1', dataAiHint: 'workout exhibition moment' },
    { src: '/m2.jpg', alt: 'Workout exhibition highlight 2', dataAiHint: 'workout exhibition energy' },
    { src: '/m3.jpg', alt: 'Workout exhibition highlight 3', dataAiHint: 'workout exhibition intensity' },
    { src: '/m4.jpg', alt: 'Workout exhibition highlight 4', dataAiHint: 'workout exhibition strength' },
    { src: '/m5.jpg', alt: 'Workout exhibition highlight 5', dataAiHint: 'workout exhibition dedication' },
    { src: '/m6.jpg', alt: 'Workout exhibition highlight 6', dataAiHint: 'workout exhibition community' },
    { src: '/m7.jpg', alt: 'Workout exhibition highlight 7', dataAiHint: 'workout exhibition training' },
    { src: '/m8.jpg', alt: 'Workout exhibition highlight 8', dataAiHint: 'workout exhibition fitness' },
    { src: '/m9.jpg', alt: 'Workout exhibition highlight 9', dataAiHint: 'workout exhibition achievement' },
  ];
  
  const ceremonyPhotos = [
    { src: '/e1.jpg', alt: 'Awards ceremony highlight 1', dataAiHint: 'award ceremony winner' },
    { src: '/e2.jpg', alt: 'Awards ceremony highlight 2', dataAiHint: 'award ceremony celebration' },
    { src: '/e5.jpg', alt: 'Awards ceremony highlight 5', dataAiHint: 'award ceremony gala' },
    { src: '/e6.jpg', alt: 'Awards ceremony highlight 6', dataAiHint: 'award ceremony highlights' },
    { src: '/e7.jpg', alt: 'Awards ceremony highlight 7', dataAiHint: 'award ceremony moment' },
    { src: '/e8.jpg', alt: 'Awards ceremony highlight 8', dataAiHint: 'award ceremony celebration' },
    { src: '/e9.jpg', alt: 'Awards ceremony highlight 9', dataAiHint: 'award ceremony evening' },
    { src: '/e10.jpg', alt: 'Awards ceremony highlight 10', dataAiHint: 'award ceremony finale' },
    { src: '/e11.jpg', alt: 'Awards ceremony highlight 11', dataAiHint: 'award ceremony celebration' },
    { src: '/e12.jpg', alt: 'Awards ceremony highlight 12', dataAiHint: 'award ceremony moment', objectPosition: 'center 30%' },
    { src: '/e13.jpg', alt: 'Awards ceremony highlight 13', dataAiHint: 'award ceremony winner' },
    { src: '/e14.jpg', alt: 'Awards ceremony highlight 14', dataAiHint: 'award ceremony gala' },
    { src: '/e15.jpg', alt: 'Awards ceremony highlight 15', dataAiHint: 'award ceremony event' },
    { src: '/e16.jpg', alt: 'Awards ceremony highlight 16', dataAiHint: 'award ceremony highlights' },
    { src: '/e17.jpg', alt: 'Awards ceremony highlight 17', dataAiHint: 'award ceremony celebration' },
    { src: '/e18.jpg', alt: 'Awards ceremony highlight 18', dataAiHint: 'award ceremony evening' },
    { src: '/e19.jpg', alt: 'Awards ceremony highlight 19', dataAiHint: 'award ceremony finale', objectPosition: 'center 30%' },
    { src: '/e20.jpg', alt: 'Awards ceremony highlight 20', dataAiHint: 'award ceremony celebration' },
  ];

  const oldAwardsPhotos = [
    { src: '/aw2.jpeg', alt: 'Previous awards ceremony 3', dataAiHint: 'past awards winner' },
    { src: '/aw3.jpeg', alt: 'Previous awards ceremony 4', dataAiHint: 'past awards event' },
    { src: '/aw4.jpeg', alt: 'Previous awards ceremony 5', dataAiHint: 'past awards gala' },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Classic Hero Section */}
      <section className="relative py-24 md:py-32 text-center bg-secondary">
        <div className="absolute inset-0 z-0">
          <Image
            src="/srward.jpeg"
            alt="Elegant awards ceremony background"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-10"
            data-ai-hint="awards ceremony background"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-secondary"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Trophy className="h-20 w-20 text-primary mx-auto mb-6" />
          <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl font-bold text-primary mb-4" style={{ textShadow: '1px 1px 2px hsl(var(--background))' }}>
            A Celebration of Excellence
          </h1>
          <p className="text-xl sm:text-2xl text-secondary-foreground/80 max-w-4xl mx-auto">
            Honoring resilience, professionalism, and celebrating fitness industry excellence.
          </p>
        </div>
      </section>
      
      {/* Main Content Area */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Event Flow */}
          <div className="max-w-3xl mx-auto mb-16 md:mb-24">
              <Card className="bg-card border-border shadow-xl">
                  <CardHeader className="text-center">
                      <CardTitle className="font-headline text-3xl text-primary">A Day to Remember</CardTitle>
                      <CardDescription>From morning energy to evening elegance.</CardDescription>
                  </CardHeader>
                  <CardContent>
                      <div className="relative pl-6">
                          <div className="absolute left-6 top-0 h-full w-0.5 bg-border/70"></div>
                          <div className="relative mb-12">
                              <div className="absolute -left-3 top-1.5 h-6 w-6 rounded-full bg-primary ring-4 ring-background flex items-center justify-center">
                                  <Sunrise className="h-4 w-4 text-primary-foreground"/>
                              </div>
                              <div className="pl-8">
                                  <h3 className="font-headline text-2xl text-foreground mb-1">Morning Session</h3>
                                  <p className="font-semibold text-primary">Workout Exhibition</p>
                                  <p className="text-muted-foreground text-sm mt-1">A showcase of strength, endurance, and community spirit.</p>
                              </div>
                          </div>
                          <div className="relative">
                              <div className="absolute -left-3 top-1.5 h-6 w-6 rounded-full bg-primary ring-4 ring-background flex items-center justify-center">
                                  <Sunset className="h-4 w-4 text-primary-foreground"/>
                              </div>
                               <div className="pl-8">
                                  <h3 className="font-headline text-2xl text-foreground mb-1">Evening Session</h3>
                                  <p className="font-semibold text-primary">Awards Ceremony & Gala</p>
                                  <p className="text-muted-foreground text-sm mt-1">Recognizing the outstanding achievements of our members and trainers.</p>
                              </div>
                          </div>
                      </div>
                  </CardContent>
              </Card>
          </div>

          {/* Workout Exhibition Gallery */}
          <section id="morning-gallery" className="mb-20 md:mb-28">
              <div className="text-center mb-12">
                  <h2 className="font-headline text-4xl text-foreground font-semibold flex items-center justify-center gap-3">
                      <Camera className="h-9 w-9 text-primary" />
                      Workout Exhibition Gallery
                  </h2>
                   <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-2">
                      Capturing the energy and determination of our morning session.
                  </p>
              </div>
              <Carousel
                plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
                className="w-full max-w-4xl mx-auto"
                opts={{
                  loop: true,
                }}
              >
                <CarouselContent>
                  {workoutPhotos.map((photo, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card className="overflow-hidden shadow-lg border-primary/20">
                          <CardContent className="flex aspect-[16/9] items-center justify-center p-0 relative group">
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                style={{ objectFit: 'cover' }}
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

          {/* Awards Gala Gallery */}
          <section id="evening-gallery">
               <div className="text-center mb-12">
                  <h2 className="font-headline text-4xl text-foreground font-semibold flex items-center justify-center gap-3">
                      <Trophy className="h-9 w-9 text-primary" />
                      Awards Gala Gallery
                  </h2>
                   <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-2">
                      Celebrating the achievements of our incredible community.
                  </p>
              </div>
              
                <Carousel
                    plugins={[Autoplay({ delay: 4500, stopOnInteraction: true })]}
                    className="w-full max-w-4xl mx-auto"
                    opts={{
                    loop: true,
                    }}
                >
                    <CarouselContent>
                    {ceremonyPhotos.map((photo, index) => (
                        <CarouselItem key={index}>
                        <div className="p-1">
                            <Card className="overflow-hidden shadow-lg border-primary/20">
                            <CardContent className="flex aspect-[16/9] items-center justify-center p-0 relative group">
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    fill
                                    style={{ objectFit: 'cover', objectPosition: (photo as any).objectPosition || 'center' }}
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

          {/* Old Awards Gallery */}
          <section id="old-awards-gallery" className="mb-20 md:mb-28 mt-20 md:mt-28">
               <div className="text-center mb-12">
                  <h2 className="font-headline text-4xl text-foreground font-semibold flex items-center justify-center gap-3">
                      <Trophy className="h-9 w-9 text-primary" />
                      Previous Awards Ceremonies
                  </h2>
                   <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-2">
                      A look back at our past celebrations and memorable moments.
                  </p>
              </div>
              
                <Carousel
                    plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
                    className="w-full max-w-4xl mx-auto"
                    opts={{
                    loop: true,
                    }}
                >
                    <CarouselContent>
                    {oldAwardsPhotos.map((photo, index) => (
                        <CarouselItem key={index}>
                        <div className="p-1">
                            <Card className="overflow-hidden shadow-lg border-primary/20">
                            <CardContent className="flex aspect-[16/9] items-center justify-center p-0 relative group">
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    fill
                                    style={{ objectFit: 'cover' }}
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

        </div>
      </section>
    </div>
  );
}
