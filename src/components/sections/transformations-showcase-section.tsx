"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, TrendingDown, Clock, Flame, ArrowRight, Quote, CheckCircle2, MapPin } from 'lucide-react';
import { useBooking } from '@/contexts/booking-context';
import { useSiteContent } from '@/contexts/site-content-context';

export default function TransformationsShowcaseSection() {
  const { openBooking } = useBooking();
  const { content } = useSiteContent();
  const caseStudies = content?.transformations || [];

  return (
    <section id="transformations" className="py-16 md:py-24 bg-card/30 text-foreground relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/8 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Verified Transformations
          </span>
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-foreground mb-4">
            Real People.{" "}
            <span className="text-primary">Real Lagos</span> Transformations.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            We measure our success by the tangible, sustainable transformations of our clients. Here is what consistent coaching looks like.
          </p>
        </motion.div>

        {/* Case studies grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.name || idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex"
            >
              <Card className="group bg-card border-border/80 shadow-xl rounded-2xl overflow-hidden flex flex-col justify-between hover:border-primary/40 hover:shadow-2xl transition-all duration-300 w-full">
                <div>
                  {/* Photo & Result Header */}
                  <div className="relative h-64 w-full bg-muted overflow-hidden">
                    <Image
                      src={study.image}
                      alt={`${study.name} Fitness Transformation`}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                    {/* Floating Metric Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                      <Badge className="bg-emerald-500 text-white font-bold text-xs px-2.5 py-1 shadow-lg gap-1">
                        <TrendingDown className="w-3.5 h-3.5" />
                        {study.metric}
                      </Badge>
                      {study.bodyFatChange && (
                        <Badge variant="secondary" className="bg-black/60 backdrop-blur-md text-zinc-100 text-[10px] px-2 py-0.5 border border-white/10">
                          {study.bodyFatChange}
                        </Badge>
                      )}
                    </div>

                    <div className="absolute top-3 right-3">
                      <Badge variant="outline" className="bg-black/60 text-zinc-200 border-white/20 text-xs backdrop-blur-sm gap-1">
                        <Clock className="w-3 h-3 text-primary" /> {study.timeframe}
                      </Badge>
                    </div>

                    {/* Name & location */}
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <h3 className="font-bold text-lg font-headline tracking-wide">{study.name}</h3>
                      <p className="text-xs text-zinc-300 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3" />
                        {study.profession} · {study.location}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <CardContent className="p-6 space-y-4">
                    {/* Stars */}
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                      <span className="text-xs font-semibold text-muted-foreground ml-1.5">Verified Result</span>
                    </div>

                    {/* Quote — correctly rendered */}
                    <div className="relative bg-muted/40 rounded-xl p-4 border border-border/50">
                      <Quote className="absolute top-2.5 left-3 w-5 h-5 text-primary/30" />
                      <p className="italic text-xs sm:text-sm text-muted-foreground leading-relaxed pl-6">
                        {study.quote}
                      </p>
                    </div>

                    {/* Key milestones */}
                    <div className="space-y-1.5 pt-1">
                      <p className="text-xs font-bold text-foreground uppercase tracking-wider">Key Milestones:</p>
                      {study.results.map((r, rIdx) => (
                        <div key={rIdx} className="flex items-center gap-2 text-xs text-foreground/80">
                          <Flame className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span>{r}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>

                {/* CTA footer */}
                <div className="p-6 pt-0 space-y-3">
                  <div className="text-[11px] text-muted-foreground font-medium bg-muted/40 rounded-lg px-3 py-2 border border-border/40">
                    Enrolled in: <span className="text-foreground font-semibold">{study.program}</span>
                  </div>
                  <Button
                    onClick={() => openBooking({ service: "personal-training" })}
                    variant="outline"
                    className="w-full border-primary/40 text-primary hover:bg-primary/10 hover:text-primary font-semibold text-xs py-4 rounded-xl gap-1.5"
                  >
                    Start Similar Transformation <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Community CTA Banner */}
        <motion.div
          className="mt-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-primary/15 via-muted/40 to-primary/15 border border-primary/30 p-6 md:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                <span className="text-xs text-muted-foreground font-medium">1,200+ transformations</span>
              </div>
              <h4 className="font-headline text-xl md:text-2xl font-bold text-foreground">
                Ready to write your own transformation story?
              </h4>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Join over 1,200 busy Lagosians getting leaner, stronger, and healthier.
              </p>
            </div>
            <Button
              onClick={() => openBooking()}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-5 rounded-full shadow-lg shrink-0 gap-2 text-sm whitespace-nowrap"
            >
              Claim Free Consultation <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
