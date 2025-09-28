/* eslint-disable */
// @ts-nocheck

"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Star, MessageCircle } from "lucide-react";
import Image from "next/image";
import { motion } from 'framer-motion';
import * as React from "react";

const testimonials = [
  {
    name: "Vicky U.",
    role: "Transformation Client",
    avatar: "/before.jpeg",
    avatarHint: "woman happy portrait",
    text: "SR Fitness helped me build strength and tone up after years of inconsistent workouts. I feel stronger and more energetic than ever!",
    rating: 5,
  },
  {
    name: "Tracy S.",
    role: "Weight Loss Client",
    avatar: "/tracy after.jpg",
    avatarHint: "man fit portrait",
    text: "I lost 30 pounds in 3 months! The personal training program kept me accountable and motivated. Completely life-changing.",
    rating: 5,
  },
  {
    name: "Lizie",
    role: "Post-Pregnancy Client",
    avatar: "/afta.jpeg",
    avatarHint: "happy woman portrait",
    text: "As a new mom, finding time was hard. The trainers were so flexible and helped me regain my pre-pregnancy fitness safely.",
    rating: 5,
  },
  {
    name: "Corporate Client",
    role: "HR Manager, Savanah",
    avatar: "/savana.jpeg",
    avatarHint: "professional person portrait",
    text: "SR Fitness's corporate wellness program has been a game-changer for our team's morale and productivity. Highly recommended!",
    rating: 5,
  },
];

export default function TestimonialSliderSection() {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    );

    return (
        <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                >
                    <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
                        Voices of Our Community
                    </h2>
                    <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
                        Don't just take our word for it. Hear what our members have to say about their journey with us.
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
                        className="w-full max-w-4xl mx-auto"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                        opts={{
                        loop: true,
                        }}
                    >
                        <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="md:basis-1/2">
                            <div className="p-4">
                                <Card className="bg-background text-foreground border-border shadow-xl h-full flex flex-col">
                                <CardContent className="p-6 flex-grow flex flex-col items-center text-center">
                                    <Image 
                                        src={testimonial.avatar} 
                                        alt={testimonial.name}
                                        width={80} 
                                        height={80} 
                                        className="rounded-full mb-4 border-4 border-primary/50 shadow-lg"
                                        data-ai-hint={testimonial.avatarHint}
                                    />
                                    <p className="text-muted-foreground italic flex-grow">"{testimonial.text}"</p>
                                    <div className="mt-4">
                                    <h3 className="font-semibold text-foreground text-lg">{testimonial.name}</h3>
                                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                    <div className="flex justify-center mt-2">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                                        ))}
                                    </div>
                                    </div>
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
