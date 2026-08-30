/* eslint-disable */
// @ts-nocheck
"use client";

import React from 'react';
import { 
  Users, 
  Award, 
  ShieldCheck, 
  Zap, 
  HeartHandshake, 
  LineChart, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react'; 
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useBooking } from '@/contexts/booking-context';

const features = [
  {
    icon: Users,
    tag: "Personalized",
    title: "Elite Certified Coaches",
    description: "Passionate trainers with international credentials guiding every movement safely with precision biomechanics and customized workout plans.",
    highlight: "1-on-1 & Small Group"
  },
  {
    icon: Award,
    tag: "Science-Backed",
    title: "Tailored Transformation Protocols",
    description: "Personalized fitness routines and macro plans built specifically for your metabolic rate, lifestyle, and unique physique goals.",
    highlight: "Custom Roadmap"
  },
  {
    icon: LineChart,
    tag: "Data-Driven",
    title: "Trackable Progress & Body Metrics",
    description: "Regular body composition analysis, strength milestones, and nutritional tracking so you can visually verify your weekly progress.",
    highlight: "Measurable Results"
  },
  {
    icon: HeartHandshake,
    tag: "Community",
    title: "Uplifting Accountability & Culture",
    description: "Join an inspiring community of driven individuals, monthly fitness challenges, run clubs, and supportive peer networks.",
    highlight: "High Energy & Support"
  },
  {
    icon: Zap,
    tag: "Corporate",
    title: "Executive & Corporate Wellness",
    description: "Proven employee wellness programs, stress-reduction seminars, and team fitness bootcamps for modern organizations.",
    highlight: "Workplace Vitality"
  },
  {
    icon: ShieldCheck,
    tag: "Sustainable",
    title: "Holistic Lifestyle Longevity",
    description: "We equip you with the daily habits, posture correction, and nutrition mindset to maintain your dream physique for life.",
    highlight: "Long-Term Health"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function KeyFeaturesSection() {
  const { openBooking } = useBooking();

  return (
    <section className="py-20 md:py-32 bg-secondary/50 relative overflow-hidden text-foreground">
      {/* Background radial highlight */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>The SR Fitness Advantage</span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            Why High Performers Choose <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-amber-500">SR Fitness</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            We merge scientific training methodologies, nutrition mastery, and genuine human connection to deliver results that last a lifetime.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={cardVariants} className="h-full">
                <Card className="h-full group relative bg-card/80 backdrop-blur-sm border-border/80 hover:border-primary/50 shadow-md hover:shadow-2xl transition-all duration-300 rounded-2xl flex flex-col justify-between overflow-hidden">
                  {/* Subtle top card glow line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <CardHeader className="p-6 pb-3">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 shadow-sm">
                        <Icon className="h-6 w-6" />
                      </div>
                      <Badge variant="secondary" className="text-xs font-semibold bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        {feature.tag}
                      </Badge>
                    </div>

                    <CardTitle className="font-headline text-xl text-foreground font-bold group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-6 pt-0 flex-grow flex flex-col justify-between">
                    <CardDescription className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {feature.description}
                    </CardDescription>

                    <div className="flex items-center justify-between pt-4 border-t border-border/60 text-xs font-semibold">
                      <span className="text-primary flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        {feature.highlight}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Banner / Callout */}
        <motion.div
          className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-background to-primary/5 border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <h3 className="text-lg sm:text-xl font-bold font-headline text-foreground">
              Ready to experience world-class fitness coaching?
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Book a 1-on-1 assessment with an SR Fitness master coach today.
            </p>
          </div>
          <Button 
            onClick={() => openBooking('consultation')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-5 rounded-xl shadow-lg shadow-primary/20 group shrink-0"
          >
            Claim Free Consultation
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

      </div>
    </section>
  );
}

