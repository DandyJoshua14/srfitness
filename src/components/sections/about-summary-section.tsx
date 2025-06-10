
"use client";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Assuming framer-motion will be added or this is conceptual for "cutting-edge"

export default function AboutSummarySection() {
  // Animation variants for Framer Motion (conceptual)
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Use motion.div for animations if framer-motion is integrated */}
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <div className="relative aspect-video rounded-lg shadow-2xl overflow-hidden group">
              <Image
                src="/team1.jpeg"
                alt="SR Fitness facility interior"
                layout="fill"
                objectFit="cover"
                className="transform transition-transform duration-500 group-hover:scale-110"
                data-ai-hint="modern gym equipment"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
          <div className="space-y-6 animate-in fade-in slide-in-from-right duration-700 delay-200">
            <h2 className="font-headline text-4xl md:text-5xl text-primary font-bold">
              Welcome to <span className="text-foreground">SR Fitness</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At SR Fitness, we're more than just a gym; we're a community dedicated to empowering you on your fitness journey. Our state-of-the-art facility, expert trainers, and diverse programs are designed to help you achieve your goals, no matter your starting point.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in a holistic approach to wellness, combining effective workouts with nutritional guidance and unwavering support to foster lasting change.
            </p>

            <div className="mt-10">
              <h3 className="font-headline text-2xl md:text-3xl text-primary font-semibold mb-3">
                Our compelling reason Why we do what we do!
              </h3>
              <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary pl-4 py-2 my-4">
                “We strongly believe that if we can inspire millions of people stay fit and
                preventable illness free, we have played our part in making the world a better
                place”
              </blockquote>
            </div>

            <Button asChild size="lg" className="font-headline text-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transform hover:scale-105 transition-transform !mt-8">
              <Link href="/awards">Discover Our Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
