"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';


export default function HeroSection() {
  const [textVisible, setTextVisible] = useState(false);

  const heroContent = {
    headline: 'Unleash Your Potential',
    imageSrc: 'https://placehold.co/420x580.png',
    altText: 'Female athlete in a powerful pose',
    dataAiHint: 'athlete fitness pose',
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 50, damping: 20, delay }
    }),
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 0.8, y: 50 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 50, damping: 20, delay: 0.2 }
    },
    float: {
      y: ["-8px", "8px"],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };


  return (
    <section
      id="hero"
      className={cn(
        "relative flex flex-col items-center justify-center text-center text-white overflow-hidden",
        "min-h-[80vh] md:min-h-screen py-16 md:py-24", // Ensure enough height
        "bg-gradient-to-br from-secondary via-background to-primary/30 animate-gradient-xy" // Animated gradient
      )}
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-around gap-8 md:gap-12 w-full">

        {/* Text Content Area */}
        <motion.div
          className="lg:w-1/2 lg:text-left text-center space-y-6"
          initial="hidden"
          animate={textVisible ? "visible" : "hidden"}
        >
          <motion.h1
            variants={textVariants}
            custom={0}
            className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
          >
            {heroContent.headline}
          </motion.h1>
          <motion.div
            variants={textVariants}
            custom={0.2}
            className="flex justify-center lg:justify-start items-baseline space-x-3 md:space-x-4 max-w-xl mx-auto lg:mx-0"
          >
            <span className="text-xl md:text-2xl font-semibold text-primary">Fitter</span>
            <span className="text-xl md:text-2xl font-semibold text-primary/70">·</span>
            <span className="text-xl md:text-2xl font-semibold text-primary">Stronger</span>
            <span className="text-xl md:text-2xl font-semibold text-primary/70">·</span>
            <span className="text-xl md:text-2xl font-semibold text-primary">Healthier</span>
          </motion.div>
        </motion.div>

        {/* Image Area */}
        <motion.div
          className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center items-center"
          variants={imageVariants}
          initial="initial"
          animate={textVisible ? ["animate", "float"] : "initial"}
        >
          <div className="relative w-[280px] h-[380px] sm:w-[320px] sm:h-[420px] md:w-[380px] md:h-[520px] lg:w-[420px] lg:h-[580px] group">
            <Image
              src={heroContent.imageSrc}
              alt={heroContent.altText}
              layout="fill"
              objectFit="contain" // Changed to contain to ensure full image visibility
              className="rounded-lg shadow-2xl"
              data-ai-hint={heroContent.dataAiHint}
              priority // Added priority prop
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
