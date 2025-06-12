
"use client";

import { useEffect, useState } from 'react';
import { motion, useAnimation, useInView, animate } from 'framer-motion'; // Added 'animate' to imports
import { Users, Award, Zap, Smile } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react'; // Ensure React is imported for JSX

interface Stat {
  icon: React.ReactElement;
  value: number;
  label: string;
  suffix?: string;
}

const statsData: Stat[] = [
  { icon: <Users className="h-10 w-10 text-primary" />, value: 1200, label: "Happy Members", suffix: "+" },
  { icon: <Award className="h-10 w-10 text-primary" />, value: 10, label: "Years of Expertise", suffix: "+" },
  { icon: <Zap className="h-10 w-10 text-primary" />, value: 50, label: "Weekly Classes", suffix: "+" },
  { icon: <Smile className="h-10 w-10 text-primary" />, value: 98, label: "Client Satisfaction", suffix: "%" },
];

const AnimatedNumber = ({ value, suffix }: { value: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        transition: { duration: 0.5 }
      });
      const animation = animate(0, value, { // Changed from motion.animate to animate
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          setCount(Math.round(latest));
        },
      });
      return () => animation.stop();
    }
  }, [isInView, value, controls]);

  return (
    <motion.span ref={ref} initial={{ opacity: 0 }} animate={controls}>
      {count}{suffix}
    </motion.span>
  );
};

export default function OurImpactSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
            We're proud of the community we've built and the results we've helped achieve.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="group text-center bg-background text-foreground border-border shadow-xl h-full transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl hover:border-primary">
                <CardHeader className="pb-4 items-center">
                  <motion.div
                    className="p-4 bg-primary/10 rounded-full mb-4 inline-block transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110"
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    {React.cloneElement(stat.icon, { className: "h-10 w-10 text-primary transition-transform duration-300 group-hover:scale-110"})}
                  </motion.div>
                  <CardTitle className="font-headline text-4xl md:text-5xl text-primary">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
