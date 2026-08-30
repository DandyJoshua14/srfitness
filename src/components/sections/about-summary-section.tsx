/* eslint-disable */
// @ts-nocheck
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion'; 
import { ArrowRight, Award, HeartPulse, Sparkles, Target, Users2, CheckCircle2 } from 'lucide-react';
import { useBooking } from '@/contexts/booking-context';
import { useSiteContent } from '@/contexts/site-content-context';

export default function AboutSummarySection() {
  const { openBooking } = useBooking();
  const { content } = useSiteContent();
  const about = content?.about || {};

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const pillars = about.pillars || [
    {
      title: "Evidence-Based Training",
      desc: "Custom workout splits designed around biomechanics & sustainable progression."
    },
    {
      title: "Holistic Wellness & Nutrition",
      desc: "Comprehensive lifestyle coaching that fuels energy, recovery, and long-term health."
    },
    {
      title: "Corporate & Community Impact",
      desc: "Empowering organizations and thousands of individuals through wellness seminars & challenges."
    }
  ];

  return (
    <motion.section 
      id="about"
      className="py-20 md:py-32 bg-background relative overflow-hidden text-foreground"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column (Left) */}
          <motion.div variants={itemVariants} className="lg:col-span-6 relative">
            <div className="relative group">
              {/* Outer decorative gradient frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-primary/30 via-primary/10 to-transparent rounded-3xl blur-md opacity-70 group-hover:opacity-100 transition duration-500" />
              
              {/* Main Image Container */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl border border-border/60 bg-card">
                <Image
                  src={about.image || "/train.jpeg"}
                  alt="SR Fitness high-performance wellness facility and training floor"
                  fill
                  className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Floating Bottom Info Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-xl backdrop-blur-md bg-background/85 border border-border/80 shadow-lg">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/15 flex items-center justify-center text-primary">
                        <Award className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary">{about.badge || "Accredited Excellence"}</p>
                        <p className="text-sm font-bold text-foreground">Global Standard Training & Coaching</p>
                      </div>
                    </div>
                    <div className="hidden sm:block text-right border-l border-border/80 pl-4">
                      <p className="text-xs text-muted-foreground">Client Success</p>
                      <p className="text-sm font-bold text-primary">98% Retention</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Floating Stat Card (Top Right) */}
              <div className="absolute -top-4 -right-2 sm:-top-6 sm:-right-4 bg-background/90 backdrop-blur-md border border-primary/30 p-3 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-pulse-slow">
                <div className="h-10 w-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-md">
                  <HeartPulse className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold font-headline text-foreground leading-none">{about.statPill || "10,000+"}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Lives Transformed</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Column (Right) */}
          <motion.div variants={itemVariants} className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{about.badge || "Who We Are & Our Philosophy"}</span>
            </div>

            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
              {about.heading || "Redefining Fitness Through"} <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-amber-500">Holistic Wellness</span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {about.subheading || "SR Fitness is a premier wellness consultancy and high-performance training brand. We believe true transformation isn't just about intense sweat sessions—it's about empowering people with sustainable habits, science-backed guidance, and an uplifting community."}
            </p>

            {/* Core Pillars */}
            <div className="space-y-3 pt-2">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border/50">
                  <div className="mt-0.5 h-6 w-6 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-foreground">{pillar.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote Block */}
            <blockquote className="relative p-5 rounded-xl bg-muted/40 border-l-4 border-primary text-foreground/90 font-medium italic text-sm sm:text-base shadow-sm">
              "{about.founderQuote || "We strongly believe that if we can inspire millions of people to stay fit, active, and preventable-illness free, we have played our part in making the world a healthier, happier place."}"
              <div className="mt-2 text-xs font-semibold text-primary not-italic uppercase tracking-wider">
                — {about.founderName || "Coach S. R."} ({about.founderRole || "Head Coach & Founder, SR Fitness"})
              </div>
            </blockquote>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button 
                onClick={() => openBooking('consultation')}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20 rounded-xl group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-border hover:border-primary/50 hover:bg-primary/5 rounded-xl text-foreground font-medium"
              >
                <Link href="/about">
                  Read Full Brand Story
                </Link>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}

