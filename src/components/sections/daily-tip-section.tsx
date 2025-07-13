
"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Lightbulb, AlertTriangle, Loader2 } from 'lucide-react';
import { generateFitnessTip, GenerateFitnessTipOutput } from '@/ai/flows/generate-fitness-tip-flow';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export default function DailyTipSection() {
  const [tipData, setTipData] = useState<GenerateFitnessTipOutput | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTip = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await generateFitnessTip(); // No input needed for a general tip
        setTipData(data);
      } catch (err) {
        console.error("Failed to fetch fitness tip:", err);
        setError("Could not load a fresh tip right now. Sparkle on your own!");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTip();
  }, []);

  return (
    <motion.section
      className="py-16 md:py-24 bg-muted text-muted-foreground"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <Card className="shadow-xl border-primary/20 bg-background text-foreground overflow-hidden">
          <CardHeader className="text-center bg-primary/5 p-6">
            <div className="flex justify-center mb-3">
              <Lightbulb className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="font-headline text-3xl md:text-4xl text-primary">
              Daily Fitness Spark
            </CardTitle>
            <CardDescription className="text-muted-foreground text-base">
              A little inspiration for your wellness journey!
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 md:p-8 min-h-[120px] flex items-center justify-center">
            {isLoading && (
              <div className="flex flex-col items-center text-muted-foreground">
                <Loader2 className="h-8 w-8 animate-spin text-primary mb-2" />
                <p>Fetching your daily spark...</p>
              </div>
            )}
            {error && !isLoading && (
              <div className="flex flex-col items-center text-destructive text-center">
                <AlertTriangle className="h-8 w-8 mb-2" />
                <p className="font-semibold">Oops! Something went wrong.</p>
                <p className="text-sm">{error}</p>
              </div>
            )}
            {tipData && !isLoading && !error && (
              <div className="text-center">
                <p className="text-lg md:text-xl leading-relaxed text-foreground mb-4">
                  "{tipData.tip}"
                </p>
                {tipData.category && (
                  <Badge variant="secondary" className="font-medium bg-primary/10 text-primary border-primary/30">
                    SR Fitness
                  </Badge>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}

    
