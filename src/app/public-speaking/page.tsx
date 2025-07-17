
"use client";

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"
import { Mic, ArrowRight, Brain, TrendingUp, Sparkles, Check } from 'lucide-react';

export default function PublicSpeakingPage() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const slides = [
    {
      src: "/suit.jpeg",
      alt: "Sampson speaking at a corporate event",
      dataAiHint: "public speaker stage",
      title: "Captivate. Inspire. Transform.",
      description: "Book SR fitness for dynamic keynotes and motivational talks that empower your audience to take action and unlock their potential.",
    },
    {
      src: "/suit.jpeg",
      alt: "A motivational speaker on stage in front of a large audience",
      dataAiHint: "motivational speaker conference",
      title: "Elevate Your Corporate Event",
      description: "Bring energy and actionable insights to your next corporate meeting, summit, or team-building event.",
    },
    {
      src: "/suit.jpeg",
      alt: "Engaged audience listening to a talk",
      dataAiHint: "audience listening conference",
      title: "Connect with Your Audience",
      description: "Sampson's engaging style and evidence-based content leave a lasting impact on every attendee.",
    }
  ];

  const speakingTopics = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Peak Performance Mindset",
      description: "Unlock the mental frameworks used by elite athletes to drive success in any field.",
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Resilience: The Ultimate Human Strength",
      description: "Strategies to build unshakable mental and physical resilience to thrive under pressure.",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "Finding Your 'Why' in Wellness",
      description: "An inspiring journey to connect personal values with health goals for lasting motivation.",
    },
  ];
  
  const audienceBenefits = [
    "Actionable, evidence-based strategies",
    "A captivating and energetic delivery style",
    "Customized content for your event's theme",
    "A memorable and inspirational experience"
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-screen w-full overflow-hidden">
        <Carousel
          plugins={[plugin.current]}
          className="w-full h-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{ loop: true }}
        >
          <CarouselContent className="-ml-0 h-full">
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="pl-0 relative h-full">
                <div className="absolute inset-0 z-0">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    layout="fill"
                    objectFit="cover"
                    className="opacity-30"
                    data-ai-hint={slide.dataAiHint}
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                </div>
                <div className="container h-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center text-center">
                  <Mic className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                    {slide.title}
                  </h1>
                  <p className="text-lg sm:text-xl text-foreground/90 max-w-3xl mx-auto mb-8" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                    {slide.description}
                  </p>
                  <Button asChild size="lg" className="font-headline text-xl px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                    <Link href="/#contact">Book Now</Link>
                  </Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 border-white/20 text-white" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 border-white/20 text-white" />
        </Carousel>
      </section>

      {/* About the Speaker Section */}
      <section className="py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-square md:aspect-[4/5] rounded-lg shadow-xl overflow-hidden group">
                     <Image
                        src="/Sampson.jpeg" // Using SR.jpg as placeholder for Samson
                        alt="Samson, Corporate Wellness Speaker"
                        layout="fill"
                        objectFit="contain"
                        className="transform transition-transform duration-500 group-hover:scale-110"
                        data-ai-hint="professional speaker portrait"
                      />
                </div>
                <div className="space-y-6">
                    <Sparkles className="h-10 w-10 text-primary" />
                    <h2 className="font-headline text-3xl md:text-4xl text-primary font-bold">
                        An Unforgettable Voice
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Sampson is a renowned wellness expert, A UK certified wellness consultant with a decade of active industry experience.
                    </p>
                </div>
            </div>
        </div>
      </section>


      {/* Speaking Topics Section */}
      <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-3">Signature Speaking Topics</h2>
              <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">Engaging talks designed to inspire action and create lasting change.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {speakingTopics.map((topic) => (
                <Card 
                    key={topic.title} 
                    className="bg-card border-border shadow-lg text-center p-6 flex flex-col items-center group transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl hover:border-primary/50"
                >
                    <div className="mb-4 text-primary transition-transform duration-300 group-hover:scale-110">
                        {topic.icon}
                    </div>
                    <CardTitle className="font-headline text-2xl text-foreground mb-2">{topic.title}</CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed flex-grow">
                        {topic.description}
                    </CardDescription>
                </Card>
              ))}
            </div>
          </div>
      </section>
      
       {/* What To Expect Section */}
       <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="space-y-6">
                    <h2 className="font-headline text-3xl md:text-4xl text-primary font-bold">
                        What to Expect for Your Audience
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Every session is more than just a talk; it's an interactive experience designed to provide tangible value and inspire immediate action.
                    </p>
                    <ul className="space-y-3">
                        {audienceBenefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                                <Check className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                                <span className="text-foreground">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                 <div className="relative aspect-video rounded-lg shadow-xl overflow-hidden group">
                     <Image
                        src="/aud.jpeg"
                        alt="Engaged audience at a corporate event"
                        layout="fill"
                        objectFit="cover"
                        className="transform transition-transform duration-500 group-hover:scale-110"
                        data-ai-hint="corporate audience event"
                      />
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary/10 text-center p-8 md:p-12 rounded-lg my-10">
                <h2 className="font-headline text-3xl md:text-4xl text-primary font-semibold mb-6">
                    Ready to Energize Your Event?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                    Let's discuss how we can tailor a speaking engagement for your organization. Contact us Today.
                </p>
                <Button asChild size="lg" className="group font-headline text-xl px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transform hover:scale-105 transition-transform">
                    <Link href="/#contact">
                    Book Now <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </Button>
            </div>
        </div>
      </section>

    </div>
  );
}
