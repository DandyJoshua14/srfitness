/* eslint-disable */
// @ts-nocheck
"use client";
import { Award, Users, Zap, MapPin, Smile, ShieldCheck } from 'lucide-react'; 
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import React from 'react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Expert Certified Trainers",
    description: "Our passionate and experienced trainers provide personalized guidance to help you achieve your goals safely and effectively.",
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Diverse Fitness Programs",
    description: "Our services are crafted leveraging global best practices to meet world-class standards, offering a fitness experience that caters to an international clientele.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Results-Driven Approach",
    description: "We focus on sustainable results, providing you with the tools and knowledge for long-term health and fitness success.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export default function KeyFeaturesSection() {
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
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
            Why SR Fitness Stands Out
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with our commitment to excellence and your success.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={index}
            >
              <Card className="group text-center bg-card border-border shadow-lg h-full transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl hover:border-primary/50">
                <CardHeader className="pb-4">
                  <div className="flex justify-center items-center mb-4 bg-primary/10 rounded-full h-20 w-20 mx-auto transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-105">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                       {React.cloneElement(feature.icon, { 
                        className: cn(
                          (feature.icon.props as any).className, 
                          "transition-transform duration-300 group-hover:scale-110"
                        ) 
                      })}
                    </motion.div>
                  </div>
                  <CardTitle className="font-headline text-2xl text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-base leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
