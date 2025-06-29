"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Import Image
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';


export default function HeroSection() {
  const [textVisible, setTextVisible] = useState(false);

  const heroContent = {
    headline: 'Unleash Your Potential',
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

  return (
    <section
      id="hero"
      className={cn(
        "relative flex flex-col items-center justify-center text-center text-white overflow-hidden",
        "min-h-[80vh] md:min-h-screen py-16 md:py-24",
        "bg-gradient-to-br from-secondary via-background to-primary/30 animate-gradient-xy"
      )}
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-8 md:gap-12 w-full">

        {/* Text Content Area */}
        <motion.div
          className="w-full text-center space-y-6"
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
            className="flex justify-center items-baseline space-x-3 md:space-x-4 max-w-xl mx-auto"
          >
            <span className="text-xl md:text-2xl font-semibold text-primary">Fitter</span>
            <span className="text-xl md:text-2xl font-semibold text-primary/70">·</span>
            <span className="text-xl md:text-2xl font-semibold text-primary">Stronger</span>
            <span className="text-xl md:text-2xl font-semibold text-primary/70">·</span>
            <span className="text-xl md:text-2xl font-semibold text-primary">Healthier</span>
          </motion.div>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-3xl"
        >
            <div className="relative aspect-[3/2] rounded-lg shadow-2xl overflow-hidden border-2 border-primary/20 bg-black/20">
                <Image
                    src="https://placehold.co/600x400.png"
                    alt="SR Fitness - Unleash your potential"
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="fitness athlete"
                    priority
                />
            </div>
        </motion.div>
      </div>
    </section>
  );
}
