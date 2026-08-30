/* eslint-disable */
// @ts-nocheck
"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, AlertTriangle, Loader2, Sparkles, RefreshCw, Copy, Check, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateFitnessTip, GenerateFitnessTipOutput } from '@/ai/flows/generate-fitness-tip-flow';

const curatedTips: GenerateFitnessTipOutput[] = [
  {
    tip: "Consistency always beats intensity. Three 45-minute focused workouts per week will transform you faster than sporadic extreme sessions.",
    category: "Consistency"
  },
  {
    tip: "Prioritize protein with every meal and drink at least 3 liters of water daily. Hydration is the unsung hero of muscle recovery and fat loss.",
    category: "Nutrition"
  },
  {
    tip: "Quality sleep is when your muscles rebuild and your hormonal balance resets. Aim for 7-8 hours of restful sleep every night.",
    category: "Recovery"
  },
  {
    tip: "Track your progressive overload. If you lifted 10kg for 8 reps last week, aim for 10kg for 9 reps or 11kg today.",
    category: "Strength"
  },
  {
    tip: "Never skip your dynamic warm-up. Increasing core temperature and joint mobility prevents injuries and increases peak power output.",
    category: "Performance"
  }
];

export default function DailyTipSection() {
  const [tipData, setTipData] = useState<GenerateFitnessTipOutput | null>(curatedTips[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const fetchNewTip = async () => {
    setIsLoading(true);
    try {
      // Pick a random curated tip or generate via AI flow
      const randomFallback = curatedTips[Math.floor(Math.random() * curatedTips.length)];
      try {
        const aiTip = await generateFitnessTip();
        setTipData(aiTip || randomFallback);
      } catch {
        setTipData(randomFallback);
      }
    } catch (e) {
      console.error("Failed to fetch daily tip:", e);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (!tipData) return;
    navigator.clipboard.writeText(`"${tipData.tip}" — SR Fitness Spark`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary/40 relative overflow-hidden text-foreground">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <Card className="shadow-2xl border border-primary/30 bg-card/95 backdrop-blur-md rounded-3xl overflow-hidden relative">
          
          {/* Header */}
          <CardHeader className="text-center bg-gradient-to-b from-primary/10 to-transparent p-8 pb-4">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-12 w-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/30">
                <Lightbulb className="h-6 w-6" />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-bold uppercase tracking-wider mx-auto mb-2">
              <Sparkles className="h-3 w-3" />
              <span>Daily Wellness Spark</span>
            </div>

            <CardTitle className="font-headline text-2xl sm:text-3xl md:text-4xl text-foreground font-extrabold">
              Your Daily Dose of <span className="text-primary">Fitness Inspiration</span>
            </CardTitle>
            <CardDescription className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto mt-1">
              Actionable, bite-sized wellness wisdom to fuel your mindset and training today.
            </CardDescription>
          </CardHeader>

          {/* Content Body */}
          <CardContent className="p-6 sm:p-10 flex flex-col items-center text-center">
            
            <div className="min-h-[110px] sm:min-h-[130px] flex items-center justify-center w-full my-2">
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center text-muted-foreground"
                  >
                    <Loader2 className="h-8 w-8 animate-spin text-primary mb-2" />
                    <p className="text-sm font-medium">Generating your spark...</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key={tipData?.tip || "tip"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 max-w-2xl"
                  >
                    <p className="text-lg sm:text-2xl font-medium leading-relaxed text-foreground font-headline italic">
                      “{tipData?.tip}”
                    </p>
                    
                    {tipData?.category && (
                      <div>
                        <Badge variant="secondary" className="font-semibold bg-primary/15 text-primary border border-primary/30 px-3 py-1 text-xs">
                          {tipData.category}
                        </Badge>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-6 mt-4 border-t border-border/70 w-full">
              <Button
                variant="outline"
                size="sm"
                onClick={fetchNewTip}
                disabled={isLoading}
                className="rounded-xl border-border hover:border-primary/50 hover:bg-primary/10 text-xs sm:text-sm font-semibold"
              >
                <RefreshCw className={`mr-2 h-4 w-4 text-primary ${isLoading ? 'animate-spin' : ''}`} />
                Get New Spark
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={copyToClipboard}
                className="rounded-xl border-border hover:border-primary/50 hover:bg-primary/10 text-xs sm:text-sm font-semibold"
              >
                {copied ? (
                  <>
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4 text-primary" />
                    Copy Quote
                  </>
                )}
              </Button>
            </div>

          </CardContent>
        </Card>
      </div>
    </section>
  );
}

