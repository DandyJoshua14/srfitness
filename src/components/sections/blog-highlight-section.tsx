/* eslint-disable */
// @ts-nocheck
"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Newspaper, Sparkles, Clock, UserCheck, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { getPosts } from '@/services/firestore';
import { Skeleton } from '@/components/ui/skeleton';

interface Post {
  id: string;
  title: string;
  content: string;
  category?: string;
  readTime?: string;
  image?: string;
}

const fallbackPosts: Post[] = [
  {
    id: "post-1",
    title: "5 Biomechanical Principles to Maximize Hypertrophy Safely",
    content: "Discover how optimizing your joint angles, time under tension, and eccentric control accelerates muscle growth while reducing joint strain.",
    category: "Training Science",
    readTime: "4 min read",
    image: "/Frame 1.png"
  },
  {
    id: "post-2",
    title: "The Busy Executive's Guide to Sustainable Nutrition & Meal Prep",
    content: "Simple, high-protein nutrition blueprints designed for high-stress corporate schedules without giving up meals you love.",
    category: "Nutrition",
    readTime: "5 min read",
    image: "/tracy after.jpg"
  },
  {
    id: "post-3",
    title: "How Group Bootcamp Accountability Boosts Consistency by 300%",
    content: "Why training alongside a high-energy community triggers dopamine and builds ironclad workout habits that last years.",
    category: "Community",
    readTime: "3 min read",
    image: "/b1.jpeg"
  }
];

export default function BlogHighlightSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const [highlightedPosts, setHighlightedPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const allPosts = await getPosts();
        if (allPosts && allPosts.length > 0) {
          setHighlightedPosts(allPosts.slice(0, 3));
        } else {
          setHighlightedPosts(fallbackPosts);
        }
      } catch (e) {
        console.warn("Using fallback blog articles:", e);
        setHighlightedPosts(fallbackPosts);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-14 md:mb-18"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Knowledge & Insights</span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            From the <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-amber-500">SR Fitness Journal</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Evidence-based training strategies, nutritional science, and inspiring member transformation journeys.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-6xl mx-auto"
        >
          {isLoading ? (
            <div className="grid md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <Card key={i} className="h-full flex flex-col overflow-hidden rounded-2xl border-border">
                  <Skeleton className="aspect-video w-full" />
                  <CardContent className="p-6 flex-grow flex flex-col gap-3">
                    <Skeleton className="h-5 w-1/3" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-4/5" />
                    <Skeleton className="h-9 w-28 mt-auto" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {highlightedPosts.map((post, idx) => (
                <div key={post.id || idx} className="h-full">
                  <Card className="h-full flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:border-primary/50 bg-card border-border/80 rounded-2xl">
                    
                    {/* Cover image */}
                    <CardHeader className="p-0 relative">
                      <Link href="/community" className="block aspect-[16/10] w-full relative overflow-hidden bg-muted">
                        <Image 
                          src={post.image || "/Frame 1.png"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                        
                        {/* Top Category Badge */}
                        <div className="absolute top-3 left-3">
                          <Badge variant="secondary" className="bg-background/90 backdrop-blur-md text-foreground border-none text-[11px] font-semibold">
                            {post.category || "Fitness & Health"}
                          </Badge>
                        </div>
                      </Link>
                    </CardHeader>

                    {/* Body */}
                    <CardContent className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                          <Clock className="h-3.5 w-3.5 text-primary" />
                          <span>{post.readTime || "4 min read"}</span>
                        </div>

                        <CardTitle className="text-lg font-headline font-bold text-foreground leading-snug group-hover:text-primary transition-colors mb-3">
                          <Link href="/community">{post.title}</Link>
                        </CardTitle>

                        <CardDescription className="text-muted-foreground text-sm line-clamp-3 leading-relaxed mb-4">
                          {post.content}
                        </CardDescription>
                      </div>

                      <div className="pt-4 border-t border-border/60">
                        <Button asChild variant="link" className="text-primary font-semibold p-0 self-start group-hover:underline text-sm">
                          <Link href="/community">
                            Read Full Article 
                            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>

                  </Card>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Button asChild variant="outline" size="lg" className="border-border hover:border-primary/50 hover:bg-primary/5 rounded-xl font-semibold">
            <Link href="/community">
              Visit Community & Read All Articles
              <ArrowRight className="ml-2 h-4 w-4 text-primary" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}

