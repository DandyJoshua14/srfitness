"use client";

import React, { useState } from 'react';
import { X, Trophy, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CompactCountdown from '../countdown/compact-countdown';

interface FloatingCountdownProps {
  className?: string;
}

export default function FloatingCountdown({ className = '' }: FloatingCountdownProps) {
  const [isVisible, setIsVisible] = useState(true);
  const eventDate = new Date('2025-11-01T18:00:00'); // Saturday, November 1st, 2025 at 6 PM

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-4 rounded-lg shadow-lg border border-white/20 max-w-sm">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <div>
              <h4 className="font-semibold text-sm">SR Awards 2025</h4>
              <p className="text-xs text-blue-100">Nov 1, 2025</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsVisible(false)}
            className="h-6 w-6 p-0 text-white hover:bg-white/20"
          >
            <X className="w-3 h-3" />
          </Button>
        </div>
        
        <div className="mb-3">
          <CompactCountdown targetDate={eventDate} showLabel={false} />
        </div>
        
        <Button 
          size="sm" 
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-xs"
        >
          Vote Now
        </Button>
      </div>
    </div>
  );
}
