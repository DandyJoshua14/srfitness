
"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Trophy, Sunrise, Sunset, Award as AwardIcon, Camera, Ticket } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function AwardsPage() {
  const workoutPhotos = [
    { src: '/srward.jpeg', alt: 'Participants in a high-energy group session', dataAiHint: 'group workout high energy' },
    { src: '/groupp.jpeg', alt: 'Group workout session in progress', dataAiHint: 'group workout intense' },
    { src: '/group2.jpeg', alt: 'Trainer demonstrating an exercise', dataAiHint: 'fitness trainer demonstration' },
  ];
  
  const ceremonyPhotos = [
    { src: '/gl.jpeg', alt: 'Awards ceremony highlight 1', dataAiHint: 'award ceremony winner' },
    { src: '/gl2.jpeg', alt: 'Awards ceremony highlight 2', dataAiHint: 'award winner portrait' },
    { src: '/gl3.jpeg', alt: 'Audience applause conference', dataAiHint: 'audience applause conference' },
  ];

  const generalCategories = [
    { title: "Fitness Trainer/Coach of the Year", qualifier: "", description: "Honoring the trainer who has demonstrated exceptional skill, knowledge, and commitment to their clients' success and well-being." },
    { title: "Fitness Club Coach of the Year", qualifier: "", description: "Awarded to the coach who has shown outstanding leadership and delivered exceptional results within a fitness club setting." },
    { title: "Inspirational Weight-Loss Journey", qualifier: "Male & Female", description: "Celebrating individuals who have achieved remarkable weight-loss transformations through perseverance, dedication, and a healthy lifestyle.", noVote: true },
    { title: "Foundation Fitness Award", qualifier: "Schools", description: "Recognizing a school that has shown outstanding commitment to promoting physical education and healthy habits among its students." },
    { title: "Mental Health & Wellness Advocate", qualifier: "", description: "Honoring an individual who has championed the importance of mental well-being as an important component of overall fitness." },
    { title: "Art and Wellness Advocate", qualifier: "", description: "Honoring an individual who has championed the importance of art and creativity as an important component of overall fitness." },
    { title: "Life Champion Award - Overcomers series", qualifier: "", description: "A special recognition for individuals who have overcome significant personal challenges and used fitness as a tool for recovery and empowerment." },
    { title: "Foundation Fitness Hero Award", qualifier: "Male & Female", description: "Celebrating individual student who consistently embody the spirit and values of our fitness community and by doing so has inspired others to adopt a healthy lifestyle." },
    { title: "Educators Recognition series", qualifier: "", description: "A tribute to our unsung fitness heroes, educators who go above and beyond to promote wellness through positive learning, and motivating the students to stay active and engage in physical activity." },
    { title: "Fitness Event Of The Year (Coaches)", qualifier: "Coaches", description: "Awarded to the coach or team of coaches who organized and executed the most impactful and engaging fitness event of the year." },
    { title: "Fitness Event Of The Year (Clubs)", qualifier: "Clubs", description: "Recognizing the single best fitness event that brought the community together, promoted health, and created a memorable experience for all." },
  ];

  const professionalCategories = [
      { title: "Community Fitness Hero of the Year", qualifier: "Male & Female", description: "Recognizing individuals who have inspired and motivated others within the fitness community through their dedication and positive influence." },
      { title: "Care-Givers Advocate", qualifier: "Nurses", description: "Recognizing nurses who go above and beyond in providing care and promoting wellness." },
      { title: "Health Care Treatment Advocate", qualifier: "Doctors", description: "Celebrating doctors who are exemplary in patient care and health advocacy." },
      { title: "Pharmaceutical Service Champion", qualifier: "Pharmacist", description: "Honoring an individual pharmacist for their excellent service and patient care." },
      { title: "Pharmaceutical Service Champion", qualifier: "Pharmacy", description: "Awarded to a pharmacy for outstanding service and contribution to community health." },
      { title: "Physiotherapist of the Year", qualifier: "Physiotherapist", description: "Recognizing a physiotherapist for their exceptional contribution to patient rehabilitation and well-being." },
  ];

  const organizationsCategories = [
    { title: "Corporate Wellness Champion", qualifier: "", description: "Awarded to a company or brand that supports and promotes a culture of health and wellness in the workplace and in the community." },
    { title: "Corporate Social Responsibility Champion", qualifier: "Organizations", description: "Awarded to major brands and organisations that support, promote and inspire through the power of fitness.", noVote: true },
    { title: "Gym of the Year", qualifier: "", description: "Recognizing the gym that has provided outstanding facilities, services, and community support throughout the year." },
  ];

  const renderCategoryAccordion = (categories: any[], accordionId: string) => (
    <Accordion type="single" collapsible className="w-full">
      {categories.map((category, index) => (
        <AccordionItem value={`${accordionId}-${index}`} key={index} className="border-b-0">
          <AccordionTrigger className="font-headline text-lg text-left hover:text-primary hover:no-underline">
            <div className="flex flex-col items-start text-left">
                <span>{category.title}</span>
                {category.qualifier && <span className="text-sm text-muted-foreground font-body font-normal mt-1">({category.qualifier})</span>}
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pl-2 pr-2 pb-4">
            <div className="space-y-4">
                <p>{category.description}</p>
                {!category.noVote && (
                    <Button asChild>
                        <Link href="/vote">Vote Now</Link>
                    </Button>
                )}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );

  return (
    <div className="bg-background text-foreground">
      {/* Classic Hero Section */}
      <section className="relative py-24 md:py-32 text-center bg-secondary">
        <div className="absolute inset-0 z-0">
          <Image
            src="/srward.jpeg"
            alt="Elegant awards ceremony background"
            layout="fill"
            objectFit="cover"
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

          {/* Ticket Sales Section */}
          <section id="tickets" className="mb-20 md:mb-28">
            <div className="text-center mb-12">
              <h2 className="font-headline text-4xl text-foreground font-semibold flex items-center justify-center gap-3">
                <Ticket className="h-9 w-9 text-primary" />
                Get Your Tickets
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-2">
                Join us for an unforgettable evening celebrating the best in fitness.
              </p>
            </div>
            <Card className="max-w-3xl mx-auto bg-card border-border shadow-xl">
              <CardHeader>
                  <CardTitle className="text-center font-headline text-3xl text-primary">Event Tickets</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                  <div className="flex flex-col sm:flex-row justify-between items-center p-4 border rounded-lg">
                      <div>
                          <h4 className="font-bold text-lg text-foreground">Regular Ticket</h4>
                          <p className="text-muted-foreground text-sm">Access to the awards ceremony.</p>
                      </div>
                      <div className="text-right mt-2 sm:mt-0">
                          <p className="text-2xl font-bold text-primary">₦10,000</p>
                      </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-center p-4 border rounded-lg">
                      <div>
                          <h4 className="font-bold text-lg text-foreground">VIP Ticket</h4>
                          <p className="text-muted-foreground text-sm">Includes front-row seating and a complimentary drink.</p>
                      </div>
                      <div className="text-right mt-2 sm:mt-0">
                          <p className="text-2xl font-bold text-primary">₦25,000</p>
                      </div>
                  </div>
                   <div className="flex flex-col sm:flex-row justify-between items-center p-4 border rounded-lg">
                      <div>
                          <h4 className="font-bold text-lg text-foreground">Table for 8</h4>
                          <p className="text-muted-foreground text-sm">Reserve a full table for your group or company.</p>
                      </div>
                      <div className="text-right mt-2 sm:mt-0">
                          <p className="text-2xl font-bold text-primary">₦250,000</p>
                      </div>
                  </div>
                  <Button asChild size="lg" className="w-full mt-4 font-headline text-xl">
                      <Link href="/awards/checkout">Buy Tickets Now</Link>
                  </Button>
              </CardContent>
            </Card>
          </section>


          {/* Award Categories Section */}
          <section className="mb-20 md:mb-28">
            <div className="text-center mb-12">
              <h2 className="font-headline text-4xl text-foreground font-semibold flex items-center justify-center gap-3">
                <Trophy className="h-9 w-9 text-primary" />
                This Year's Award & Recognition Categories
              </h2>
            </div>
            <Card className="max-w-3xl mx-auto bg-card border-border shadow-xl">
              <CardContent className="p-6">
                 <h3 className="font-headline text-2xl text-primary mb-4 text-center">General Awards</h3>
                 {renderCategoryAccordion(generalCategories, 'general')}

                <Separator className="my-6" />
                <h3 className="font-headline text-2xl text-primary mb-4 text-center">Recognition Awards</h3>
                {renderCategoryAccordion(professionalCategories, 'professionals')}
                
                <Separator className="my-6" />
                <h3 className="font-headline text-2xl text-primary mb-4 text-center">Organizations</h3>
                 {renderCategoryAccordion(organizationsCategories, 'organizations')}
              </CardContent>
            </Card>
          </section>

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

        </div>
      </section>
    </div>
  );
}
