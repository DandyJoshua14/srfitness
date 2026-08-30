/* eslint-disable */
// @ts-nocheck
"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import { Star, MessageSquareQuote, CheckCircle, Sparkles, TrendingUp, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useBooking } from "@/contexts/booking-context";

const testimonials = [
  {
    name: "Tracy S.",
    role: "Weight Loss & Conditioning Member",
    avatar: "/tracy after.jpg",
    metric: "Lost 30 lbs in 12 Weeks",
    program: "1-on-1 Personal Training",
    rating: 5,
    text: "I lost 30 pounds in 3 months! The customized workout plans and constant coach accountability kept me completely motivated. Truly life-changing energy and health.",
  },
  {
    name: "Vicky U.",
    role: "Strength & Toning Client",
    avatar: "/before.jpeg",
    metric: "+40% Strength Gain",
    program: "Strength & Conditioning",
    rating: 5,
    text: "SR Fitness helped me build real functional strength and muscle tone after years of inconsistent gym attempts. I feel stronger, more confident, and pain-free!",
  },
  {
    name: "Lizie M.",
    role: "Post-Pregnancy Recovery Client",
    avatar: "/afta.jpeg",
    metric: "Core & Posture Restored",
    program: "Post-Partum Wellness",
    rating: 5,
    text: "As a new mother, finding time and rebuilding core strength was intimidating. The coaches were so patient, knowledgeable, and guided my safe recovery every single step.",
  },
  {
    name: "Savanah Group",
    role: "HR & People Operations Director",
    avatar: "/savana.jpeg",
    metric: "150+ Employees Engaged",
    program: "Corporate Wellness Program",
    rating: 5,
    text: "SR Fitness's corporate wellness workshops and fitness bootcamps boosted our team's energy, workplace morale, and physical stamina tremendously. Highly recommended!",
  },
];

export default function TestimonialSliderSection() {
  const { openBooking } = useBooking();
  const plugin = React.useRef(
    Autoplay({ delay: 5500, stopOnInteraction: true })
  );

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden text-foreground">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-14 md:mb-18"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Real Members. Real Transformations.</span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            Loved by <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-amber-500">Hundreds</span> of Everyday Athletes
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Read inspiring stories from our members who chose to take charge of their health, strength, and longevity with SR Fitness.
          </p>

          {/* Social Proof Stats Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-8 pt-6 border-t border-border/60">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-foreground">4.9 / 5.0 Rating</span>
            </div>
            <div className="text-sm text-muted-foreground flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>500+ Verified Transformations</span>
            </div>
            <div className="text-sm text-muted-foreground flex items-center gap-1.5">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span>98% Goal Completion Rate</span>
            </div>
          </div>
        </motion.div>
        
        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
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
            <CarouselContent className="-ml-4 md:-ml-6">
              {testimonials.map((item, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/2">
                  <div className="h-full py-2">
                    <Card className="h-full bg-card/90 backdrop-blur-sm border-border/80 hover:border-primary/50 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl flex flex-col justify-between p-6 sm:p-8 relative overflow-hidden group">
                      
                      {/* Quote mark decoration */}
                      <MessageSquareQuote className="absolute top-6 right-6 h-12 w-12 text-primary/10 group-hover:text-primary/20 transition-colors pointer-events-none" />

                      <div className="space-y-4">
                        {/* Rating Stars & Metric Tag */}
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-1">
                            {[...Array(item.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                            ))}
                          </div>
                          <Badge variant="secondary" className="bg-primary/10 text-primary border border-primary/20 font-semibold text-xs py-0.5">
                            {item.metric}
                          </Badge>
                        </div>

                        {/* Quote Text */}
                        <p className="text-foreground/90 text-sm sm:text-base italic leading-relaxed pt-2">
                          "{item.text}"
                        </p>
                      </div>

                      {/* Client Bio Footer */}
                      <div className="flex items-center gap-4 pt-6 mt-6 border-t border-border/60">
                        <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-primary/50 shrink-0 shadow-md">
                          <Image 
                            src={item.avatar} 
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="56px"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5">
                            <h3 className="font-headline font-bold text-foreground text-base sm:text-lg truncate">
                              {item.name}
                            </h3>
                            <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                          </div>
                          <p className="text-xs text-muted-foreground truncate">{item.role}</p>
                          <p className="text-[11px] font-medium text-primary mt-0.5">{item.program}</p>
                        </div>
                      </div>

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

        {/* CTA Strip */}
        <div className="mt-14 text-center">
          <Button 
            onClick={() => openBooking('consultation')}
            variant="outline"
            className="border-primary/30 hover:border-primary hover:bg-primary/10 text-foreground font-semibold px-6 py-5 rounded-xl group"
          >
            Start Your Own Transformation Story
            <ArrowRight className="ml-2 h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

      </div>
    </section>
  );
}

