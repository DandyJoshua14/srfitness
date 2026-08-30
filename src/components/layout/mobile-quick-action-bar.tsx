"use client";

import React from 'react';
import { MessageSquare, Calendar, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBooking } from '@/contexts/booking-context';
import { useSiteContent } from '@/contexts/site-content-context';
import { motion } from 'framer-motion';

export default function MobileQuickActionBar() {
  const { openBooking } = useBooking();
  const { content } = useSiteContent();
  const phone = content?.companyInfo?.whatsapp || "2347056717597";

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Hello SR Fitness! I am browsing your website and would like to inquire about personal training and bootcamp packages."
  )}`;

  return (
    <motion.aside
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      aria-label="Quick Actions"
      className="md:hidden fixed bottom-4 left-3 right-3 z-40 max-w-md mx-auto"
    >
      {/* Floating Spatial Liquid Glass Capsule */}
      <div className="relative p-2 rounded-2xl bg-zinc-950/80 backdrop-blur-2xl border border-white/15 shadow-[0_12px_40px_-5px_rgba(0,0,0,0.8),inset_0_1px_1px_0_rgba(255,255,255,0.25)] flex items-center gap-2">
        {/* Specular Top-Light Refraction Line */}
        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent pointer-events-none" />

        <Button
          asChild
          variant="ghost"
          className="flex-1 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-400 border border-emerald-500/30 font-semibold gap-1.5 h-12 text-xs shadow-sm transition-all active:scale-[0.98]"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
            <MessageSquare className="w-4 h-4 fill-emerald-500/20 text-emerald-400" />
            <span>WhatsApp</span>
          </a>
        </Button>

        <Button
          onClick={() => openBooking()}
          className="flex-1 rounded-xl bg-gradient-to-r from-primary via-amber-500 to-primary hover:opacity-95 text-primary-foreground font-bold gap-1.5 h-12 text-xs shadow-[0_0_25px_rgba(255,140,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.3)] transition-all active:scale-[0.98] border border-primary/40"
          aria-label="Book Fitness Session"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Session</span>
        </Button>
      </div>
    </motion.aside>
  );
}
