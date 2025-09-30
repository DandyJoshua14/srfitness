/* eslint-disable */
// @ts-nocheck

"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Newspaper } from 'lucide-react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import { getPosts } from '@/services/firestore';
import { Skeleton } from '@/components/ui/skeleton';

interface Post {
    id: string;
    title: string;
    content: string;
}

const SINGLE_IMAGE_PLACEHOLDER = 'https://placehold.co/1280x720.png';

export default function BlogHighlightSection() {
    const plugin = React.useRef(
      Autoplay({ delay: 5000, stopOnInteraction: true })
    );

    const [highlightedPosts, setHighlightedPosts] = React.useState<Post[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
      const fetchPosts = async () => {
        setIsLoading(true);
        try {
          const allPosts = await getPosts();
          setHighlightedPosts(allPosts.slice(0, 3));
        } catch (e) {
          console.error("Could not load blog posts from Firestore", e);
        } finally {
          setIsLoading(false);
        }
      };
      fetchPosts();
    }, []);
  
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
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(3)].map((_, i) => (
                <Card key={i} className="h-full flex flex-col overflow-hidden">
                  <Skeleton className="aspect-video w-full" />
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <Skeleton className="h-5 w-4/5 mb-2" />
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-5/6 mb-4" />
                    <Skeleton className="h-9 w-28 mt-auto" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-4xl mx-auto"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                opts={{
                  loop: highlightedPosts.length > 1,
                }}
              >
                <CarouselContent>
                  {highlightedPosts.map((post) => (
                     <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card className="h-full flex flex-col overflow-hidden group transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl hover:border-primary/50">
                                <CardHeader className="p-0 relative">
                                <Link href="/community" className="block aspect-video w-full relative overflow-hidden rounded-t-lg">
                                    <Image 
                                    src={SINGLE_IMAGE_PLACEHOLDER}
                                    alt={post.title}
                                    fill
                                    style={{objectFit:"cover"}}
                                    className="transition-transform duration-500 group-hover:scale-110"
                                    data-ai-hint="fitness blog"
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
          )}
        </motion.div>
      </div>
    </section>
  );
}
