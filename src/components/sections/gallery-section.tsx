"use client";

import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { Camera } from 'lucide-react';
import { motion } from 'framer-motion';

const galleryImages = [
  { src: '/aw1.jpeg', alt: 'Group workout session', dataAiHint: 'group workout energy' },
  { src: '/aw2.jpeg', alt: 'Client lifting weights with trainer', dataAiHint: 'personal training weights' },
  { src: '/aw3.jpeg', alt: 'Yoga class in progress', dataAiHint: 'yoga class zen' },
  { src: '/aw4.jpeg', alt: 'Bootcamp outdoor drill', dataAiHint: 'bootcamp outdoor fitness' },
  { src: '/gal.jpeg', alt: 'Modern gym interior', dataAiHint: 'modern gym empty' },
  { src: '/gal1.jpeg', alt: 'Happy members after a class', dataAiHint: 'fitness group smiling' },
  { src: '/gal2.jpeg', alt: 'Happy members after a class', dataAiHint: 'fitness group smiling' },
  { src: '/gal31.jpeg', alt: 'Client lifting weights with trainer', dataAiHint: 'personal training weights' },
  { src: '/gal32.jpeg', alt: 'Yoga class in progress', dataAiHint: 'yoga class zen' },
  { src: '/gal33.jpeg', alt: 'Bootcamp outdoor drill', dataAiHint: 'bootcamp outdoor fitness' },
  { src: '/gal34.jpeg', alt: 'Modern gym interior', dataAiHint: 'modern gym empty' },
  { src: '/gal35.jpeg', alt: 'Happy members after a class', dataAiHint: 'fitness group smiling' },
  { src: '/gal36.jpeg', alt: 'Happy members after a class', dataAiHint: 'fitness group smiling' },
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
                    {galleryImages.map((photo, index) => (
                        <CarouselItem key={index} className="pl-4">
                            <div className="p-1">
                                <Card className="overflow-hidden shadow-lg border-primary/20">
                                    <CardContent className="flex aspect-video items-center justify-center p-0 relative group">
                                        <Image
                                            src={photo.src}
                                            alt={photo.alt}
                                            layout="fill"
                                            objectFit="cover"
                                            className="transform transition-transform duration-500 group-hover:scale-105"
                                            data-ai-hint={photo.dataAiHint}
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-[-20px] sm:left-[-50px] top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-[-20px] sm:right-[-50px] top-1/2 -translate-y-1/2" />
            </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
