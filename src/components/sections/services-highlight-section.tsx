"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dumbbell, Flame, Briefcase, Globe, ArrowRight, CheckCircle2, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useBooking } from '@/contexts/booking-context';
import { useSiteContent } from '@/contexts/site-content-context';

const serviceIcons: Record<string, React.ReactNode> = {
  "personal-training": <Dumbbell className="h-6 w-6 text-primary" />,
  "burn-off-bootcamp": <Flame className="h-6 w-6 text-amber-500" />,
  "corporate-wellness": <Briefcase className="h-6 w-6 text-blue-500" />,
  "online-coaching": <Globe className="h-6 w-6 text-purple-500" />,
};

export default function ServicesHighlightSection() {
  const { openBooking } = useBooking();
  const { content } = useSiteContent();
  const services = content?.services || [];

  return (
    <section id="services" className="py-16 md:py-24 bg-card/30 text-foreground relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/8 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-500/6 rounded-full blur-[60px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Tailored Fitness Solutions
          </span>
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our 4 Core{" "}
            <span className="text-primary">Fitness Pillars</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Whether you want private in-home coaching, high-energy group workouts, or corporate health programs, we have a proven path for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div 
              key={service.id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="bg-card text-card-foreground border-border/80 shadow-lg overflow-hidden h-full flex flex-col group transition-all duration-300 hover:shadow-2xl hover:border-primary/50">
                <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                  <Image
                    src={service.image || "/train.jpeg"}
                    alt={service.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transform transition-transform duration-700 group-hover:scale-105"
                    data-ai-hint="fitness training photo"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  
                  <div className="absolute top-4 right-4">
                    <span className="inline-block bg-background/90 text-foreground backdrop-blur-md border border-white/10 text-xs font-semibold shadow-md rounded-full px-2.5 py-1">
                      {service.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        {serviceIcons[service.id] || <Dumbbell className="h-6 w-6 text-primary" />}
                      </div>
                      <div>
                        <span className="text-[11px] font-bold tracking-wider text-primary uppercase block">
                          {service.category}
                        </span>
                        <CardTitle className="font-headline text-2xl sm:text-3xl text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </CardTitle>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 flex-grow flex flex-col justify-between space-y-5">
                  <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>

                  <div className="space-y-2 py-2 border-y border-border/50">
                    {service.features?.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-foreground/90 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                    <Button 
                      onClick={() => openBooking({ service: service.id })}
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs py-5 rounded-xl gap-1.5 shadow-md"
                    >
                      <Calendar className="w-4 h-4" /> Book Consultation
                    </Button>
                    <Button 
                      asChild 
                      variant="outline" 
                      className="border-border hover:bg-muted font-medium text-xs py-5 rounded-xl gap-1"
                    >
                      <Link href={service.link || "/personal-training"}>
                        Learn More <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
