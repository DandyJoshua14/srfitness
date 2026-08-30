"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Flame, Gift, ArrowRight, Calendar, Zap, Crown, Shield } from 'lucide-react';
import { useBooking } from '@/contexts/booking-context';
import { useSiteContent } from '@/contexts/site-content-context';

const tierIcons: Record<string, React.ReactNode> = {
  "bootcamp-pass": <Flame className="w-5 h-5 text-amber-500" />,
  "pro-transformation": <Zap className="w-5 h-5 text-primary" />,
  "executive-vip": <Crown className="w-5 h-5 text-amber-500" />,
};

export default function MembershipPricingSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');
  const { openBooking } = useBooking();
  const { content } = useSiteContent();
  const pricingTiers = content?.pricingTiers || [];
  const promos = content?.promos || {
    challengeTitle: "The 30-Day Lagos Body Shred Challenge",
    challengeDesc: "Join our high-intensity 30-day cohort. Includes weekly meal prep blueprints, group weigh-ins, daily accountability, and cash prizes for best transformations!",
    referralTitle: "\"Bring a Friend\" Referral Program",
    referralDesc: "Working out is 3x more effective with a partner. Invite a colleague or friend: they get their first bootcamp class free, and you get 15% off your next renewal!"
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-background text-foreground relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-primary/6 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-500/6 rounded-full blur-[60px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <Shield className="w-3.5 h-3.5" />
            Predictable & Transparent Pricing
          </span>
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-foreground mb-4">
            Memberships Built for{" "}
            <span className="text-primary">Consistent Results</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Choose a plan that matches your goals and lifestyle in Lagos. No hidden fees, flexible pauses, and full accountability.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 flex justify-center">
            <div className="bg-muted p-1 rounded-full border border-border inline-flex items-center gap-1">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  billingCycle === 'monthly'
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Monthly Plan
              </button>
              <button
                onClick={() => setBillingCycle('quarterly')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                  billingCycle === 'quarterly'
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Quarterly Plan
                <span className="bg-emerald-500/20 text-emerald-400 text-[10px] px-2 py-0.5 rounded-full border border-emerald-500/30">
                  Save 15%
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {pricingTiers.map((tier, idx) => {
            const price = billingCycle === 'monthly' ? tier.monthlyPrice : tier.quarterlyPrice;
            const period = billingCycle === 'monthly' ? '/ month' : '/ quarter';

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex"
              >
                <div
                  className={`relative w-full rounded-2xl flex flex-col border transition-all duration-300 overflow-hidden ${
                    tier.popular
                      ? 'border-primary shadow-2xl shadow-primary/20 lg:-translate-y-3 bg-gradient-to-b from-primary/8 via-card to-card'
                      : tier.vip
                      ? 'border-amber-500/40 shadow-xl shadow-amber-500/10 bg-gradient-to-b from-amber-500/5 via-card to-card hover:border-amber-500/60'
                      : 'border-border shadow-lg bg-card hover:border-primary/30 hover:shadow-xl'
                  }`}
                >
                  {/* Popular glow ring */}
                  {tier.popular && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
                  )}

                  {/* Badge */}
                  {tier.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                      <span className={`${tier.badgeColor} font-bold px-4 py-1 rounded-full shadow-md text-xs inline-block`}>
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  {/* Header */}
                  <div className="p-6 pb-4 pt-8 relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-xl ${tier.popular ? 'bg-primary/20' : tier.vip ? 'bg-amber-500/20' : 'bg-muted'}`}>
                        {tierIcons[tier.id] || <Flame className="w-5 h-5 text-amber-500" />}
                      </div>
                      <div>
                        <CardTitle className="font-headline text-xl text-foreground font-bold leading-tight">
                          {tier.name}
                        </CardTitle>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground min-h-[32px] leading-relaxed">
                      {tier.description}
                    </p>

                    {/* Price */}
                    <div className="mt-5 pt-4 border-t border-border/50">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={billingCycle}
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-baseline gap-1"
                        >
                          <span className={`font-headline text-4xl sm:text-5xl font-extrabold tracking-tight ${
                            tier.popular ? 'text-primary' : tier.vip ? 'text-amber-500' : 'text-foreground'
                          }`}>
                            {price}
                          </span>
                          <span className="text-xs text-muted-foreground font-medium">{period}</span>
                        </motion.div>
                      </AnimatePresence>
                      {billingCycle === 'quarterly' && (
                        <p className="text-[10px] text-emerald-400 font-semibold mt-1">
                          ✓ You save 15% vs monthly billing
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex-1 px-6 pb-4 relative z-10">
                    <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">What's included:</p>
                    <div className="space-y-2.5">
                      {tier.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-foreground/90">
                          <div className={`p-0.5 rounded-full shrink-0 mt-0.5 ${
                            tier.popular ? 'bg-primary/20 text-primary' : tier.vip ? 'bg-amber-500/20 text-amber-500' : 'bg-muted text-muted-foreground'
                          }`}>
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="p-6 pt-4 relative z-10">
                    <Button
                      onClick={() => openBooking({ plan: tier.name })}
                      className={`w-full py-5 rounded-xl font-bold text-sm gap-2 shadow-md transition-all duration-200 ${
                        tier.popular
                          ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                          : tier.vip
                          ? 'bg-amber-500 hover:bg-amber-400 text-black'
                          : 'bg-muted hover:bg-muted/80 text-foreground border border-border hover:border-primary/40'
                      }`}
                    >
                      <Calendar className="w-4 h-4" /> {tier.cta}
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Promo Banners */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* 30-Day Transformation Challenge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-amber-500/15 via-background to-card border border-amber-500/30 p-6 rounded-2xl flex flex-col justify-between gap-4"
          >
            <div className="flex items-start gap-3">
              <div className="p-3 bg-amber-500/20 text-amber-500 rounded-xl shrink-0">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <Badge className="bg-amber-500/20 text-amber-500 border border-amber-500/40 text-[10px] px-2 py-0.5 mb-2">
                  Upcoming Cohort
                </Badge>
                <h4 className="font-headline text-xl font-bold text-foreground">
                  {promos.challengeTitle}
                </h4>
                <p className="text-muted-foreground text-xs mt-1 leading-relaxed">
                  {promos.challengeDesc}
                </p>
              </div>
            </div>
            <Button
              onClick={() => openBooking({ service: "30-day-challenge" })}
              variant="outline"
              className="border-amber-500/50 text-amber-500 hover:bg-amber-500/10 font-bold text-xs self-start gap-1.5"
            >
              Reserve Challenge Spot <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </motion.div>

          {/* Bring a Friend Referral Program */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-emerald-500/15 via-background to-card border border-emerald-500/30 p-6 rounded-2xl flex flex-col justify-between gap-4"
          >
            <div className="flex items-start gap-3">
              <div className="p-3 bg-emerald-500/20 text-emerald-500 rounded-xl shrink-0">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <Badge className="bg-emerald-500/20 text-emerald-500 border border-emerald-500/40 text-[10px] px-2 py-0.5 mb-2">
                  Member Referral Reward
                </Badge>
                <h4 className="font-headline text-xl font-bold text-foreground">
                  {promos.referralTitle}
                </h4>
                <p className="text-muted-foreground text-xs mt-1 leading-relaxed">
                  {promos.referralDesc}
                </p>
              </div>
            </div>
            <Button
              onClick={() => openBooking({ notes: "Referral Program inquiry" })}
              variant="outline"
              className="border-emerald-500/50 text-emerald-500 hover:bg-emerald-500/10 font-bold text-xs self-start gap-1.5"
            >
              Claim Referral Pass <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
