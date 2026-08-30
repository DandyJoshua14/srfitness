"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Download, CheckCircle2, ShieldCheck, Sparkles, Mail, Phone, Flame } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function LeadMagnetSection() {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      toast({
        title: "Required Information Missing",
        description: "Please enter your name and email to receive the free guide.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDownloaded(true);
      toast({
        title: "Guide Sent Successfully!",
        description: `We've emailed your blueprint to ${email}. You can also download it directly below.`,
      });
    }, 600);
  };

  return (
    <section id="lead-magnet" className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/30 to-background text-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
        <div className="bg-card border border-primary/40 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Value Pitch */}
            <div className="lg:col-span-7 space-y-4">
              <Badge className="bg-primary text-primary-foreground font-bold px-3 py-1 text-xs gap-1.5 shadow-md">
                <Sparkles className="w-3.5 h-3.5" /> 100% Free Downloadable Blueprint
              </Badge>

              <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                The Lagos Busy Professional's <br />
                <span className="text-primary">15-Min Workout & Nigerian Meal Blueprint</span>
              </h2>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Struggling to balance 12-hour workdays, Lagos traffic, and healthy eating? Get our proven, doctor-reviewed roadmap engineered specifically for busy Nigerians.
              </p>

              <div className="space-y-2.5 pt-2">
                {[
                  "7 Quick No-Equipment 15-Minute Hotel & Home Workouts",
                  "Nigerian Macro Cheat-Sheet (Jollof, Egusi, Plantain & Protein balance)",
                  "How to eat clean at Lagos business lunches and social outings",
                  "Weekly Energy & Hydration Habit Tracker"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground/90 font-medium">
                    <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Opt-In Form / Download Box */}
            <div className="lg:col-span-5">
              <Card className="bg-background/80 backdrop-blur-md border border-border shadow-xl rounded-2xl p-6">
                <CardContent className="p-0 space-y-4">
                  {isDownloaded ? (
                    <div className="text-center py-4 space-y-4">
                      <div className="w-14 h-14 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="font-headline text-2xl font-bold text-foreground">
                          Your Guide is Ready!
                        </h4>
                        <p className="text-muted-foreground text-xs mt-1">
                          We sent a copy to <span className="font-semibold text-foreground">{email}</span>. Click below to start reading instantly:
                        </p>
                      </div>

                      <Button
                        asChild
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-5 rounded-xl gap-2 shadow-lg"
                      >
                        <a href="/SR_Fitness_Lifestyle_Magazine.pdf" download="SR_Fitness_Nutrition_Guide.pdf">
                          <Download className="w-4 h-4" /> Download PDF Now
                        </a>
                      </Button>
                      
                      <p className="text-[10px] text-muted-foreground">
                        Check your spam/promotions folder if email doesn't appear in 5 mins.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleDownload} className="space-y-3.5">
                      <div className="space-y-1">
                        <h3 className="font-headline text-xl font-bold text-foreground">
                          Instant Access (PDF)
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          Enter your details below to download immediately.
                        </p>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="lead-name" className="text-xs font-semibold text-foreground">
                          First Name *
                        </Label>
                        <Input
                          id="lead-name"
                          placeholder="e.g. Femi"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="h-10 text-xs"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="lead-email" className="text-xs font-semibold text-foreground">
                          Email Address (for download link) *
                        </Label>
                        <Input
                          id="lead-email"
                          type="email"
                          placeholder="femi@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="h-10 text-xs"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="lead-phone" className="text-xs font-semibold text-foreground">
                          WhatsApp Phone (Optional for weekly fitness tips)
                        </Label>
                        <Input
                          id="lead-phone"
                          type="tel"
                          placeholder="+234 800 000 0000"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="h-10 text-xs"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-5 rounded-xl gap-2 shadow-lg text-xs"
                      >
                        {isSubmitting ? "Generating Blueprint..." : (
                          <>
                            <Download className="w-4 h-4" /> Get Free Instant Access
                          </>
                        )}
                      </Button>

                      <p className="text-[10px] text-muted-foreground text-center flex items-center justify-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                        We respect your privacy. Zero spam. Unsubscribe anytime.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
