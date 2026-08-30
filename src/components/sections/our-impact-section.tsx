"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Users, Award, Flame, Smile, TrendingUp, ShieldCheck, Star, Zap } from 'lucide-react';
import React from 'react';

import { useSiteContent } from '@/contexts/site-content-context';

const statConfig = [
  { icon: <Users className="h-7 w-7" />, accentColor: "text-primary", glowColor: "bg-primary/20", progressPct: 82 },
  { icon: <Flame className="h-7 w-7" />, accentColor: "text-amber-500", glowColor: "bg-amber-500/20", progressPct: 95 },
  { icon: <Award className="h-7 w-7" />, accentColor: "text-blue-400", glowColor: "bg-blue-500/20", progressPct: 100 },
  { icon: <Smile className="h-7 w-7" />, accentColor: "text-emerald-400", glowColor: "bg-emerald-500/20", progressPct: 98 },
];

const AnimatedNumber = ({ value, suffix }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(Math.floor(value * 0.4));

  useEffect(() => {
    if (isInView) {
      const controls = animate(Math.floor(value * 0.4), value, {
        duration: 1.8,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.round(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
};

const AnimatedBar = ({ pct, color }: { pct: number; color: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <div ref={ref} className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        className={`h-full rounded-full ${color}`}
        initial={{ width: 0 }}
        animate={isInView ? { width: `${pct}%` } : { width: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
      />
    </div>
  );
};

const trustItems = [
  { icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />, label: "NSCA-Certified Trainers" },
  { icon: <Star className="w-4 h-4 text-amber-400" />, label: "4.9/5 Average Rating" },
  { icon: <TrendingUp className="w-4 h-4 text-primary" />, label: "500+ Transformations" },
  { icon: <Zap className="w-4 h-4 text-blue-400" />, label: "No Lock-In Contracts" },
];

export default function OurImpactSection() {
  const { content } = useSiteContent();
  const impactStats = content?.impactStats || [];

  return (
    <section className="py-16 md:py-24 bg-background text-foreground relative overflow-hidden">
      {/* Radial ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-500/8 rounded-full blur-[70px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            Proven Track Record
          </span>
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Impact in{" "}
            <span className="text-primary">Real Numbers</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Real transformations, sustainable habits, and proven results across Lagos and beyond.
          </p>
        </motion.div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {impactStats.map((stat, index) => {
            const conf = statConfig[index % statConfig.length];
            return (
              <motion.div
                key={stat.label || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="group relative bg-card border border-border/60 rounded-2xl p-6 h-full flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-primary/30 overflow-hidden">
                  {/* Card glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-primary/5 via-transparent to-transparent" />

                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl ${conf.glowColor} ${conf.accentColor} self-start transition-transform duration-300 group-hover:scale-110`}>
                    {conf.icon}
                  </div>

                  {/* Animated Number */}
                  <div>
                    <p className={`font-headline text-4xl sm:text-5xl font-extrabold tracking-tight ${conf.accentColor}`}>
                      <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-base font-bold text-foreground mt-1">{stat.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{stat.sublabel}</p>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-1.5">
                    <AnimatedBar
                      pct={conf.progressPct}
                      color={`${conf.accentColor.replace('text-', 'bg-')}`}
                    />
                    <p className="text-[10px] text-muted-foreground font-medium">
                      {stat.achievement}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Strip */}
        <motion.div
          className="mt-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-card/60 border border-border/50 rounded-2xl px-6 py-4">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {trustItems.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  {item.icon}
                  <span className="text-xs font-semibold text-foreground/80">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
