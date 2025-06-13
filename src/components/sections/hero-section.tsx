
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

// New static content for the hero section
const heroContent = {
  imageSrc: "/cover.png",
  altText: "Inspiring fitness montage",
  dataAiHint: "fitness motivation action",
  headline: "Unleash Your Potential",
  subtitle: "Strength, Wellness, Transformation. Your Journey Starts Here.",
};

export default function HeroSection() {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    // Trigger text animation shortly after component mounts
    const timer = setTimeout(() => {
      setTextVisible(true);
    }, 300); // Small delay to ensure styles are applied

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className={cn(
        "relative flex items-center justify-center text-center text-white overflow-hidden",
        "h-[70vh] min-h-[400px]", // Adjusted height slightly for a static image
        "sm:h-[80vh] sm:min-h-[500px]",
        "md:h-screen md:min-h-[600px]" // Kept screen height for larger devices
      )}
    >
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src={heroContent.imageSrc}
          alt={heroContent.altText}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0" // Simplified classes, no dynamic scaling needed for a single image
          data-ai-hint={heroContent.dataAiHint}
          priority // Prioritize loading the main hero image
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80 z-10"></div> {/* Slightly darker gradient for better contrast */}

      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1
          className={cn(
            "font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 sm:mb-6 leading-tight transition-all ease-out duration-1000 transform",
            textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: textVisible ? '0ms' : '0ms' }} // Text animation delay
        >
          {heroContent.headline}
        </h1>
        <p
          className={cn(
            "max-w-lg lg:max-w-2xl mx-auto text-md sm:text-lg md:text-xl text-slate-100 mb-8 sm:mb-10 transition-all ease-out duration-1000 transform",
            textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: textVisible ? '200ms' : '0ms' }} // Subtitle animation delay
        >
          {heroContent.subtitle}
        </p>
        <div
          className={cn(
            "flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5 transition-all ease-out duration-1000 transform",
            textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: textVisible ? '400ms' : '0ms' }} // Buttons animation delay
        >
          <Button asChild className="group font-headline text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-3.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <Link href="/#services">
              Explore Services <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="font-headline text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-3.5 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
            <Link href="/#contact">
              Join SR Fitness
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
