
"use client";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion'; 
import { ArrowRight } from 'lucide-react';

export default function AboutSummarySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  const blockquoteVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.4 } }
  };

  return (
    <motion.section 
      className="py-16 md:py-24 bg-background text-foreground"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <div className="relative aspect-video rounded-lg shadow-2xl overflow-hidden group">
              <Image
                src="/Frame 1.png"
                alt="SR Fitness facility interior"
                layout="fill"
                objectFit="cover"
                className="transform transition-transform duration-500 group-hover:scale-110"
                data-ai-hint="modern gym equipment"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </motion.div>
          <motion.div className="space-y-6" variants={itemVariants}>
            <h2 className="font-headline text-4xl md:text-5xl text-primary font-bold">
              Welcome to <span className="text-foreground">SR Fitness</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
            SR Fitness is a wellness consultancy brand that helps people achieve good health through personal training, community outreach, education, and advocacy. Its mission focuses on transformation and inclusivity, having positively impacted thousands via training, seminars and corporate Wellness programs.
            </p>

            <motion.blockquote 
              variants={blockquoteVariants}
              className="text-lg text-muted-foreground italic border-l-4 border-primary pl-4 py-2 my-4"
            >
              “We strongly believe that if we can inspire millions of people stay fit and
              preventable illness free, we have played our part in making the world a better
              place”
            </motion.blockquote>

          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
