/* eslint-disable */
// @ts-nocheck

"use client";

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLoading } from '@/contexts/loading-context';

export default function LoadingOverlay() {
  const { isLoading } = useLoading();

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm"
          aria-modal="true"
          role="dialog"
          aria-labelledby="loading-message"
        >
          <div className="relative flex h-32 w-32 items-center justify-center">
            {/* The spinner track */}
            <div className="absolute h-full w-full rounded-full border-4 border-primary/20"></div>
            {/* The spinning part */}
            <div className="absolute h-full w-full animate-spin rounded-full border-t-4 border-b-4 border-primary"></div>
            
            {/* The logo in the center */}
            <Image
              src="/SR.jpg"
              alt="SR Fitness Logo"
              width={100}
              height={100}
              className="rounded-full object-cover shadow-lg"
              data-ai-hint="logo brand"
            />
          </div>
          <p id="loading-message" className="mt-6 text-lg font-medium text-foreground">
            Loading...
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
