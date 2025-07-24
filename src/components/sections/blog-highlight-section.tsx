
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Newspaper } from 'lucide-react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";


const highlightedPosts = [
  {
    id: 'announcement-1',
    author: { name: 'SR Fitness Admin', avatar: '/logo.png' },
    timestamp: '1 day ago',
    title: 'New Spin Class Schedule!',
    content: 'Our new Spin Class schedule is out now with more morning and evening slots. Get ready to sweat!',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'spin class bikes',
    category: "Announcements"
  },
  {
    id: '1',
    author: { name: 'Sarah K.', avatar: 'https://placehold.co/40x40.png?text=SK' },
    timestamp: '2 hours ago',
    title: 'Crushed My Squat PB Today!',
    content: 'Just hit a new personal best on squats! Feeling absolutely amazing and stronger than ever.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'gym squat rack',
    category: "Member Stories"
  },
  {
    id: '2',
    author: { name: 'Alex P.', avatar: 'https://placehold.co/40x40.png?text=AP' },
    timestamp: '5 hours ago',
    title: 'Morning Run Fuelled by the New Meal Plan',
    content: 'Early morning run with a stunning view. The new AI meal plan is making a difference.',
    image: "https://placehold.co/600x400.png",
    dataAiHint: "sunrise run park",
    category: "Fitness Tips"
  },
];


export default function BlogHighlightSection() {
    const plugin = React.useRef(
      Autoplay({ delay: 5000, stopOnInteraction: true })
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
          <Newspaper className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
            From the SR Fitness Blog
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get the latest news, tips, and inspiring stories from our vibrant community.
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
                  {highlightedPosts.map((post) => (
                     <CarouselItem key={post.id}>
                        <div className="p-1">
                            <Card className="h-full flex flex-col overflow-hidden group transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl hover:border-primary/50">
                                <CardHeader className="p-0 relative">
                                <Link href="/community" className="block aspect-video w-full relative overflow-hidden rounded-t-lg">
                                    <Image 
                                    src={post.image}
                                    alt={post.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-500 group-hover:scale-110"
                                    data-ai-hint={post.dataAiHint}
                                    />
                                </Link>
                                </CardHeader>
                                <CardContent className="p-6 flex-grow flex flex-col">
                                <CardTitle className="text-xl font-headline text-foreground leading-snug group-hover:text-primary transition-colors mb-2">
                                    <Link href="/community">{post.title}</Link>
                                </CardTitle>
                                <CardDescription className="text-muted-foreground line-clamp-2 mb-4 flex-grow">{post.content}</CardDescription>
                                <Button asChild variant="link" className="text-primary font-semibold p-0 self-start group-hover:underline">
                                    <Link href="/community">
                                        Read More <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </Link>
                                </Button>
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
