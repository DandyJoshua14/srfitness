
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const heroImages = [
  { src: "/logo.png", alt: "SR Fitness logo branding", dataAiHint: "logo brand", title: "Transform Your Body", subtitle: "Achieve Peak Fitness with SR Fitness" },
  { src: "/suit.jpeg", alt: "Athlete in a suit, symbolizing transformation", dataAiHint: "fitness lifestyle", title: "Expert Personal Training", subtitle: "Personalized Plans for Maximum Results" },
  { src: "/Frame 1.png", alt: "Energetic group workout class", dataAiHint: "group exercise", title: "Dynamic Group Classes", subtitle: "Motivation, Energy, and Community" },
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
      setTextVisible(false);
      setImageLoaded(false); // Reset loaded state for the new image
      // Delay text animation slightly after image starts to transition
      setTimeout(() => setTextVisible(true), 500); // Start text fade-in after image starts changing
    }, 7000); // Change image every 7 seconds

    // Initial text visibility
    setTimeout(() => {
      setTextVisible(true);
    }, 300); // Initial delay for text

    return () => {
      clearInterval(imageTimer);
    };
  }, []);

  useEffect(() => {
    // Reset imageLoaded state whenever currentImageIndex changes,
    // to ensure the scale-up animation runs for the new image.
    setImageLoaded(false);
  }, [currentImageIndex]);

  const currentSlide = heroImages[currentImageIndex];

  return (
    <section
      id="hero"
      className={cn(
        "relative flex items-center justify-center text-center text-white overflow-hidden",
        "h-[40vh] min-h-[200px]", // Mobile height
        "sm:h-[50vh] sm:min-h-[250px]", // Small screen height
        "md:h-screen md:min-h-[650px]" // Desktop height
      )}
    >
      <div className="absolute inset-0 z-0 w-full h-full">
        {heroImages.map((image, index) => (
          <Image
            key={`${image.dataAiHint}-${index}-${image.src}`}
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0',
              imageLoaded && index === currentImageIndex ? 'scale-100' : 'scale-110' // Apply scale-up only if image is loaded and current
            )}
            data-ai-hint={image.dataAiHint}
            priority={index === 0}
            onLoad={() => { if (index === currentImageIndex) setImageLoaded(true); }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70 z-10"></div>

      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1
          className={cn(
            "font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3 sm:mb-4 leading-tight transition-all ease-out duration-1000 transform",
            textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: textVisible ? '0ms' : '0ms' }}
        >
          <span className="block text-primary">{currentSlide.title.split(' ')[0]}</span>
          <span className="block">{currentSlide.title.substring(currentSlide.title.indexOf(' ') + 1)}</span>
        </h1>
        <p
          className={cn(
            "max-w-xl lg:max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-100 mb-6 sm:mb-8 transition-all ease-out duration-1000 transform",
            textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: textVisible ? '300ms' : '0ms' }}
        >
          {currentSlide.subtitle}
        </p>
        <div
          className={cn(
            "flex flex-col sm:flex-row justify-center items-center gap-4 transition-all ease-out duration-1000 transform",
            textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: textVisible ? '600ms' : '0ms' }}
        >
          <Button asChild className="font-headline text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
            <Link href="/#services">
              Our Services <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="font-headline text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-2.5 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
            <Link href="/#contact">
              Join Today
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
