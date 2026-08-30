/* eslint-disable */
// @ts-nocheck
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Camera, Sparkles, Instagram, Dumbbell, Users2, Flame } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { motion } from 'framer-motion';

import { useSiteContent } from '@/contexts/site-content-context';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'floor' | 'bootcamp' | 'training'>('all');
  const { content } = useSiteContent();
  const galleryData = content?.galleryImages || [];

  const plugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: true })
  );

  const filteredImages = activeFilter === 'all' 
    ? galleryData 
    : galleryData.filter(img => img.category === activeFilter);

  return (
    <section className="py-20 md:py-32 bg-secondary/40 relative overflow-hidden text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            <Camera className="h-3.5 w-3.5" />
            <span>Facility & Community Life</span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            Inside <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-amber-500">SR Fitness</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Experience the electric atmosphere, high-grade equipment, and supportive community that drives our daily transformations.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <Button
              variant={activeFilter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter('all')}
              className={`rounded-full text-xs font-semibold px-4 ${
                activeFilter === 'all' 
                  ? 'bg-primary text-primary-foreground shadow-md' 
                  : 'border-border/80 hover:border-primary/50'
              }`}
            >
              All Moments
            </Button>
            <Button
              variant={activeFilter === 'floor' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter('floor')}
              className={`rounded-full text-xs font-semibold px-4 flex items-center gap-1.5 ${
                activeFilter === 'floor' 
                  ? 'bg-primary text-primary-foreground shadow-md' 
                  : 'border-border/80 hover:border-primary/50'
              }`}
            >
              <Dumbbell className="h-3.5 w-3.5" />
              Gym Floor & Gear
            </Button>
            <Button
              variant={activeFilter === 'bootcamp' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter('bootcamp')}
              className={`rounded-full text-xs font-semibold px-4 flex items-center gap-1.5 ${
                activeFilter === 'bootcamp' 
                  ? 'bg-primary text-primary-foreground shadow-md' 
                  : 'border-border/80 hover:border-primary/50'
              }`}
            >
              <Flame className="h-3.5 w-3.5" />
              Group Bootcamps
            </Button>
            <Button
              variant={activeFilter === 'training' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter('training')}
              className={`rounded-full text-xs font-semibold px-4 flex items-center gap-1.5 ${
                activeFilter === 'training' 
                  ? 'bg-primary text-primary-foreground shadow-md' 
                  : 'border-border/80 hover:border-primary/50'
              }`}
            >
              <Users2 className="h-3.5 w-3.5" />
              Personal Training
            </Button>
          </div>
        </motion.div>
        
        {/* Photo Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-7xl mx-auto"
        >
          <Carousel
            plugins={[plugin.current]}
            className="w-full relative"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              loop: true,
              align: "start",
            }}
          >
            <CarouselContent className="-ml-3 md:-ml-4">
              {filteredImages.map((photo, index) => (
                <CarouselItem key={`${photo.src}-${index}`} className="pl-3 md:pl-4 basis-4/5 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="py-2 h-full">
                    <Card className="h-full overflow-hidden rounded-2xl border-border/80 hover:border-primary/50 shadow-md hover:shadow-2xl transition-all duration-500 group bg-card">
                      <CardContent className="p-0 relative aspect-[4/5] overflow-hidden">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                          style={{ objectPosition: photo.objectPosition || 'center' }}
                          sizes="(max-width: 768px) 80vw, (max-width: 1200px) 33vw, 25vw"
                        />
                        
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
                        
                        {/* Top Category Badge */}
                        <div className="absolute top-3 left-3">
                          <Badge variant="secondary" className="bg-background/80 backdrop-blur-md text-foreground border-none text-[11px] font-semibold py-0.5">
                            {photo.tag}
                          </Badge>
                        </div>

                        {/* Bottom Title Info */}
                        <div className="absolute bottom-3 left-3 right-3 text-left">
                          <p className="text-white font-headline text-base font-bold leading-tight group-hover:text-primary transition-colors">
                            {photo.title}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-center items-center gap-4 mt-8">
              <CarouselPrevious className="static transform-none border-border hover:border-primary/50 hover:bg-primary/10" />
              <CarouselNext className="static transform-none border-border hover:border-primary/50 hover:bg-primary/10" />
            </div>
          </Carousel>
        </motion.div>

        {/* Instagram/Community Callout */}
        <div className="mt-12 text-center flex items-center justify-center gap-3 text-sm text-muted-foreground">
          <Instagram className="h-4 w-4 text-primary" />
          <span>Follow our daily workouts & stories on Instagram <strong className="text-foreground">@srfitness</strong></span>
        </div>

      </div>
    </section>
  );
}

