
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dumbbell, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Personal Training",
    icon: <Dumbbell className="h-10 w-10 text-primary mb-4" />,
    description: "Unlock your full potential with tailored one-on-one coaching. Our expert trainers create personalized workout and nutrition plans to fast-track your results safely and effectively.",
    image: "/train.jpeg",
    dataAiHint: "personal trainer client",
    link: "/personal-training",
    cta: "Learn More"
  },
  {
    title: "Burn Off Bootcamp",
    icon: <Zap className="h-10 w-10 text-primary mb-4" />,
    description: "Ignite your metabolism in our high-energy group sessions! Burn Off Bootcamp combines HIIT, strength, and cardio for a fun, challenging, and results-driven full-body workout.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "group fitness energetic",
    link: "/burn-off-bootcamp",
    cta: "Explore Bootcamps"
  }
];

export default function ServicesHighlightSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Premier Fitness Services
          </h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
            Choose the path that's right for you. We offer specialized programs designed for impactful results and sustainable fitness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => (
            <div key={service.title} className={`animate-in fade-in slide-in-from-bottom duration-700 delay-${index * 200}`}>
              <Card className="bg-background text-foreground border-border shadow-xl overflow-hidden h-full flex flex-col group transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="transform transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={service.dataAiHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <motion.div 
                      className="p-3 bg-primary/80 backdrop-blur-sm rounded-full mb-2 inline-block group-hover:bg-primary transition-all duration-300 group-hover:scale-110"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                       {service.icon}
                    </motion.div>
                    <CardTitle className="font-headline text-3xl md:text-4xl text-white group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <CardDescription className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </CardDescription>
                  <Button asChild variant="default" className="mt-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transform group-hover:scale-105 transition-transform duration-200">
                    <Link href={service.link}>
                      {service.cta} <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
