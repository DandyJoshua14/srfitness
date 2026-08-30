"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useBooking } from '@/contexts/booking-context';
import { useSiteContent } from '@/contexts/site-content-context';
import { Calendar, Download, Star, ShieldCheck, MapPin, ArrowRight, Flame, Sparkles, Trophy } from 'lucide-react';

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const { openBooking } = useBooking();
  const { content } = useSiteContent();
  const hero = content?.hero || {};

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 50, damping: 20, delay }
    }),
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-[94vh] flex items-center justify-center text-center text-white overflow-hidden py-24 md:py-32"
    >
      {/* Ambient Spatial Lighting Orbs (Liquid Depth Background) */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-liquid-pulse" />
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-amber-500/15 rounded-full blur-[100px] animate-liquid-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 -left-20 w-[350px] h-[350px] bg-rose-500/10 rounded-full blur-[90px]" />
      </div>

      {/* Hero Background Image with Refraction Grid */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero.bgImage || "/use.png"}
          alt="SR Fitness Training in Lagos"
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
          priority
          data-ai-hint="fitness athlete portrait"
        />
        {/* Spatial Liquid Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-black/65 z-10 backdrop-blur-[1px]" />
      </div>

      {/* Main Spatial Content Container */}
      <motion.div
        className="relative z-20 container px-4 sm:px-6 lg:px-8 space-y-6 max-w-5xl mx-auto flex flex-col items-center"
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"}
      >
        <AnimatePresence>
          {isMounted && (
            <>
              {/* Floating Spatial Liquid Glass Badge */}
              <motion.div
                variants={textVariants}
                custom={0.1}
                className="flex flex-wrap items-center justify-center gap-2.5"
              >
                <div className="liquid-pill px-4 py-1.5 flex items-center gap-2 border border-primary/40 bg-zinc-950/60 shadow-[0_0_20px_rgba(255,140,0,0.25)]">
                  <Flame className="w-4 h-4 text-primary animate-pulse" />
                  <span className="text-xs sm:text-sm font-bold tracking-wide text-primary">
                    {hero.badge || "#1 Results-Based Coaching in Lagos"}
                  </span>
                </div>
                
                <div className="hidden sm:flex items-center gap-1.5 text-xs text-amber-400 font-medium liquid-pill px-4 py-1.5 border border-white/15 bg-zinc-950/50">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-white ml-1 font-semibold">{hero.ratingText || "4.9/5 (1,200+ Transformed)"}</span>
                </div>
              </motion.div>

              {/* Main Spatial Headline with Liquid Text Gradient */}
              <motion.h1
                variants={textVariants}
                custom={0.2}
                className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.08] max-w-4xl"
                style={{ textShadow: '0 8px 30px rgba(0,0,0,0.9)' }}
              >
                {hero.headline || "Transform Your Body."} <br />
                <span className="bg-gradient-to-r from-white via-amber-300 to-primary bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,140,0,0.4)]">
                  {hero.headlineAccent || "Elevate Your Life."}
                </span>
              </motion.h1>

              {/* Sub-headline with Enhanced Readability */}
              <motion.p
                variants={textVariants}
                custom={0.3}
                className="text-base sm:text-lg md:text-xl text-zinc-200/90 font-normal max-w-2xl leading-relaxed"
                style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9)' }}
              >
                {hero.subheadline || "Customized personal training, high-energy bootcamps, and Nigerian nutrition blueprints engineered for busy Lagos executives & professionals."}
              </motion.p>

              {/* Spatial Action Buttons with Specular Highlights */}
              <motion.div
                variants={textVariants}
                custom={0.4}
                className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full pt-2"
              >
                <Button
                  size="lg"
                  onClick={() => openBooking()}
                  className="w-full sm:w-auto relative group overflow-hidden bg-gradient-to-r from-primary via-amber-500 to-primary hover:opacity-95 text-primary-foreground font-bold px-8 py-6 text-base rounded-full shadow-[0_10px_35px_rgba(255,140,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)] transition-all duration-300 transform hover:-translate-y-1 active:scale-95 border border-primary/50 gap-2"
                >
                  {/* Subtle specular sweep animation */}
                  <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
                  
                  <Calendar className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">{hero.ctaPrimary || "Claim Free Assessment"}</span>
                  <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('lead-magnet')}
                  className="w-full sm:w-auto border-white/20 bg-zinc-950/50 hover:bg-white/10 text-white font-semibold px-6 py-6 text-base rounded-full backdrop-blur-2xl transition-all duration-300 hover:border-primary/50 gap-2 shadow-lg shadow-black/40 hover:-translate-y-0.5 active:scale-95"
                >
                  <Download className="w-5 h-5 text-primary" />
                  {hero.ctaSecondary || "Free 7-Day Nutrition Guide"}
                </Button>
              </motion.div>

              {/* Spatial Floating Feature Cards */}
              <motion.div
                variants={textVariants}
                custom={0.5}
                className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto w-full"
              >
                <div className="spatial-card p-3 rounded-xl flex items-center justify-center gap-2 border border-white/10 bg-zinc-950/60 backdrop-blur-xl">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-semibold text-white">100% Tailored Plans</span>
                </div>
                <div className="spatial-card p-3 rounded-xl flex items-center justify-center gap-2 border border-white/10 bg-zinc-950/60 backdrop-blur-xl">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-semibold text-white">Lagos & Virtual</span>
                </div>
                <div className="col-span-2 sm:col-span-1 spatial-card p-3 rounded-xl flex items-center justify-center gap-2 border border-white/10 bg-zinc-950/60 backdrop-blur-xl">
                  <Trophy className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-semibold text-white">10+ Yrs Expertise</span>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
