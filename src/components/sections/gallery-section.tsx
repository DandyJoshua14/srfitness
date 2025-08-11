
"use client";

import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { Camera } from 'lucide-react';
import { motion } from 'framer-motion';

const galleryImages = [
    { src: "/gg1.jpeg", alt: "Modern gym layout", dataAiHint: "modern gym design" },
    { src: "/gg2.jpeg", alt: "Treadmills in a row", dataAiHint: "gym treadmills" },
    { src: "/gg3.jpeg", alt: "Weight rack with various dumbbells", dataAiHint: "gym weight rack" },
    { src: "/b1.jpeg", alt: "Bootcamp participants doing pushups", dataAiHint: "group fitness pushups" },
    { src: "/b2.jpeg", alt: "Fitness trainer motivating the class", dataAiHint: "fitness trainer motivation" },
    { src: "/personal.jpeg", alt: "Personal training session in progress", dataAiHint: "trainer client workout" },
];


export default function GallerySection() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <Camera className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
            Glimpses of Our Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the energy, dedication, and success that defines the SR Fitness experience.
          </p>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-5xl mx-auto"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                opts={{
                  loop: true,
                  align: "start",
                }}
            >
                <CarouselContent className="-ml-4">
                    {galleryImages.map((image, index) => (
                      <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                          <div className="p-1">
                              <Card className="overflow-hidden shadow-lg border-primary/20">
                                  <CardContent className="flex aspect-video items-center justify-center p-0 relative group bg-black">
                                      <Image
                                          src={image.src}
                                          alt={image.alt}
                                          layout="fill"
                                          objectFit="cover"
                                          className="transform transition-transform duration-500 group-hover:scale-105"
                                          data-ai-hint={image.dataAiHint}
                                      />
                                  </CardContent>
                              </Card>
                          </div>
                      </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-[-20px] sm:left-[-50px] top-1/2 -translate-y-1/2 hidden sm:flex" />
                <CarouselNext className="absolute right-[-20px] sm:right-[-50px] top-1/2 -translate-y-1/2 hidden sm:flex" />
            </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
