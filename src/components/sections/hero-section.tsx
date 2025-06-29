"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
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
      className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/use.png"
          alt="Fitness enthusiast"
          layout="fill"
          objectFit="cover"
          objectPosition="center top"
          priority
          data-ai-hint="fitness athlete portrait"
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 container px-4 sm:px-6 lg:px-8 space-y-6 pb-20"
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"}
      >
        <motion.h1
          variants={textVariants}
          custom={0}
          className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight"
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
        >
          Unleash Your Potential
        </motion.h1>
        <motion.div
          variants={textVariants}
          custom={0.2}
          className="flex justify-center items-baseline space-x2- md:space-x-4 max-w-xl mx-auto"
        >
          <span className="text-xl md:text-2xl font-semibold text-primary" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>Fitter</span>
          <span className="text-xl md:text-2xl font-semibold text-primary/70">·</span>
          <span className="text-xl md:text-2xl font-semibold text-primary" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>Stronger</span>
          <span className="text-xl md:text-2xl font-semibold text-primary/70">·</span>
          <span className="text-xl md:text-2xl font-semibold text-primary" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>Healthier</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
