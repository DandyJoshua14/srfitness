
"use client";

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, NotebookText, ScanLine, Globe, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const innovativeFeatures = [
  {
    icon: <NotebookText className="h-10 w-10 text-primary" />,
    title: "AI Meal Planner",
    description: "Get custom nutrition strategies powered by AI, perfectly tailored to your fitness goals and dietary needs.",
    link: "/meal-planner",
    cta: "Plan Your Meals",
    dataAiHint: "nutrition app interface"
  },
  {
    icon: <ScanLine className="h-10 w-10 text-primary" />,
    title: "Smart Mirror Form Analysis",
    description: "Perfect your technique with real-time AI feedback on your exercise form, enhancing safety and effectiveness.",
    link: "/smart-mirror",
    cta: "Analyze Your Form",
    dataAiHint: "fitness mirror workout"
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Global Gym Connect",
    description: "Join our worldwide fitness community. See live activity and get motivated by members across the globe.",
    link: "/global-connect",
    cta: "Connect Globally",
    dataAiHint: "world map connections"
  }
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

export default function InnovationsSection() {
  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
            Explore Our Innovations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Step into the future of fitness with our cutting-edge tools and features designed to elevate your journey.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {innovativeFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <Card className="group bg-card border-border shadow-xl h-full flex flex-col transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl hover:border-primary">
                <CardHeader className="items-center text-center pb-4">
                  <motion.div
                    className="p-4 bg-primary/10 rounded-full mb-4 inline-block transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <CardTitle className="font-headline text-2xl text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-grow flex flex-col">
                  <CardDescription className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    {feature.description}
                  </CardDescription>
                  <Button asChild variant="default" size="lg" className="mt-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transform group-hover:scale-105 transition-transform duration-200 w-full sm:w-auto self-center">
                    <Link href={feature.link}>
                      {feature.cta} <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
