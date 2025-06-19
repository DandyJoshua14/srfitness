
"use client";

import Image from 'next/image';
import { Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLoading } from '@/contexts/loading-context';

const logoVariants = {
  animate: {
    scale: [1, 1.1, 1],
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 0.5,
    },
  },
};

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
          <div className="flex flex-col items-center">
            <motion.div
              variants={logoVariants}
              animate="animate"
              className="mb-6" // Added margin bottom here for spacing
            >
              <Image
                src="/SR.jpg" // Ensure SR.jpg is in your /public folder
                alt="SR Fitness Logo"
                width={80}
                height={80}
                className="rounded-full object-cover shadow-lg"
                data-ai-hint="logo brand"
              />
            </motion.div>
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
            <p id="loading-message" className="mt-4 text-lg font-medium text-foreground">
              Loading...
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
