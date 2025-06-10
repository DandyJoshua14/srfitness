
"use client";

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

// Use a versioned key in case the announcement content changes in the future,
// allowing new announcements to be shown even if old ones were dismissed.
const ANNOUNCEMENT_KEY = 'announcementDismissed_SRFitness_21DayEvent_v1';

export default function AnnouncementBar() {
  const [showBar, setShowBar] = useState(false); // Default to false, check storage in useEffect

  useEffect(() => {
    // This effect runs only on the client after hydration
    if (localStorage.getItem(ANNOUNCEMENT_KEY) !== 'true') {
      setShowBar(true);
    }
  }, []);

  const handleDismiss = () => {
    setShowBar(false);
    localStorage.setItem(ANNOUNCEMENT_KEY, 'true');
  };

  // To prevent SSR flash or rendering mismatches,
  // we only render the bar after client-side check.
  // AnimatePresence handles the mounting/unmounting animations.

  return (
    <AnimatePresence>
      {showBar && (
        <motion.div
          key="announcement-bar" // Unique key for AnimatePresence
          initial={{ height: 0, opacity: 0, y: -30 }}
          animate={{ height: 'auto', opacity: 1, y: 0 }}
          exit={{ height: 0, opacity: 0, y: -30, transition: { duration: 0.3, ease: "easeIn" } }}
          transition={{ duration: 0.4, ease: "circOut" }}
          className="bg-primary text-primary-foreground text-center text-sm font-medium relative overflow-hidden"
        >
          {/* Inner div for padding, allowing smooth height animation on parent */}
          <div className="container mx-auto flex items-center justify-center gap-x-3 py-2.5 px-4 sm:px-6 lg:px-8">
            <span className="inline-block leading-tight">
              🔥 New: <Link href="/burn-off-bootcamp" className="hover:underline font-semibold">21-Day Ultimate Fitness Event</Link> - Join the Challenge Today! 🔥
            </span>
            <Button
                variant="ghost"
                size="icon"
                onClick={handleDismiss}
                className="shrink-0 h-7 w-7 text-primary-foreground hover:bg-primary/80 rounded-full p-1"
                aria-label="Dismiss announcement"
            >
                <X className="h-full w-full" />
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
