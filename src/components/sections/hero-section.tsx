
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const heroImages = [
  { src: "https://placehold.co/800x600.png", alt: "Fitness class in action", dataAiHint: "gym workout" }, // Using placeholder for first image
  { src: "/suit.jpeg", alt: "Focused athlete training", dataAiHint: "focused athlete" },
  { src: "/join.jpeg", alt: "Group workout session", dataAiHint: "group fitness" },
  { src: "https://placehold.co/800x450.png", alt: "Healthy lifestyle SR Fitness", dataAiHint: "healthy lifestyle" },
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 300); // Delay for text animation start

    return () => {
      clearInterval(imageTimer); // Cleanup interval on component unmount
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <section
      id="hero"
      className={cn(
        "relative flex items-center justify-center text-center text-white overflow-hidden",
        "h-[80vh] min-h-[400px]", // Mobile (xs) - Further Increased height
        "sm:h-[90vh] sm:min-h-[500px]", // Small screens - Further Increased height
        "md:h-[calc(100vh-4rem)] md:min-h-[500px]", // Medium screens
        "lg:min-h-[600px]" // Large screens
      )}
    >
      {/* Image container */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {heroImages.map((image, index) => (
          <Image
            key={`${image.dataAiHint}-${index}`}
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="contain" // Changed from cover to contain
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            data-ai-hint={image.dataAiHint}
            priority={index === 0} // Prioritize the first image for LCP
          />
        ))}
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className={cn(
            "font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-tight transition-all ease-out duration-1000 transform",
            textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          )}
          style={{ transitionDelay: textVisible ? '0ms' : '0ms' }}
        >
          <span className="block text-primary">Unleash</span>
          <span className="block">Your Potential</span>
        </h1>
        <p
          className={cn(
            "max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-slate-200 mb-10 transition-all ease-out duration-1000 transform",
            textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          )}
          style={{ transitionDelay: textVisible ? '200ms' : '0ms' }}
        >
          Join SR Fitness and transform your body and mind with our world-class trainers and state-of-the-art facilities.
        </p>
        <div
          className={cn(
            "flex flex-col sm:flex-row justify-center items-center gap-4 transition-all ease-out duration-1000 transform",
            textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          )}
          style={{ transitionDelay: textVisible ? '400ms' : '0ms' }}
        >
          <Button asChild size="lg" className="font-headline text-xl px-10 py-6 bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/burn-off-bootcamp">Explore Bootcamps</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-headline text-xl px-10 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link href="/personal-training">Explore Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
