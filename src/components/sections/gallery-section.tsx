/* eslint-disable */
// @ts-nocheck

"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import * as React from 'react';
import { motion } from 'framer-motion';

const galleryImages: GalleryImage[] = [
    { src: "/gal35.jpg", alt: "Modern gym layout", dataAiHint: "modern gym design" },
    { src: "/gal2.jpeg", alt: "Treadmills in a row", dataAiHint: "gym treadmills", objectPosition: "center top" },
    { src: "/gal1.jpeg", alt: "Weight rack with various dumbbells", dataAiHint: "gym weight rack" },
    { src: "/b1.jpeg", alt: "Bootcamp participants doing pushups", dataAiHint: "group fitness pushups" },
    { src: "/b2.jpeg", alt: "Fitness trainer motivating the class", dataAiHint: "fitness trainer motivation" },
    { src: "/gal32.jpg", alt: "Personal training session in progress", dataAiHint: "trainer client workout" },
    { src: "/gal34.jpg", alt: "Fitness class in session", dataAiHint: "fitness class" },
    { src: "/stad.jpg", alt: "Fitness class in session", dataAiHint: "fitness class" },
    { src: "/wak.jpg", alt: "Fitness class in session", dataAiHint: "fitness class" },
    { src: "/wak2.jpg", alt: "Fitness class in session", dataAiHint: "fitness class", objectPosition: "center 20%" },
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
                        Capturing the energy, dedication, and spirit of the SR Fitness family.
                    </p>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Carousel
                        plugins={[plugin.current]}
                        className="w-full max-w-6xl mx-auto"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                        opts={{
                        loop: true,
                        align: "start",
                        }}
                    >
                        <CarouselContent className="-ml-2 md:-ml-4">
                        {galleryImages.map((photo, index) => (
                            <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                                <div className="p-1">
                                    <Card className="overflow-hidden shadow-lg border-primary/20 group">
                                        <CardContent className="flex aspect-[3/4] items-center justify-center p-0 relative">
                                            <Image
                                                src={photo.src}
                                                alt={photo.alt}
                                                fill
                                                style={{objectFit:"cover", objectPosition: photo.objectPosition || 'center' }}
                                                className="transform transition-transform duration-500 group-hover:scale-110"
                                                data-ai-hint={photo.dataAiHint}
                                            />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-[-10px] top-1/2 -translate-y-1/2 hidden sm:flex" />
                        <CarouselNext className="absolute right-[-10px] top-1/2 -translate-y-1/2 hidden sm:flex" />
                    </Carousel>
                </motion.div>
            </div>
        </section>
    );
}
