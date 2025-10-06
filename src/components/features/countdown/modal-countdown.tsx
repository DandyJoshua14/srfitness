"use client";

import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface ModalCountdownProps {
  targetDate: Date;
  className?: string;
}

export default function ModalCountdown({ 
  targetDate, 
  className = ""
}: ModalCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference <= 0) {
        setIsExpired(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());
    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  if (isExpired) {
    return (
      <div className={`text-center ${className}`}>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-green-400 font-semibold text-sm">Event Started!</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`text-center ${className}`}>
      {/* Event Title */}
      <div className="flex items-center justify-center gap-2 mb-2">
        <Calendar className="w-3 h-3 text-amber-400" />
        <span className="text-xs text-zinc-300 font-medium">SR Awards 2025</span>
      </div>

      {/* Countdown Grid */}
      <div className="grid grid-cols-4 gap-1 mb-2">
        <div className="bg-zinc-800/60 border border-amber-400/20 rounded p-1.5">
          <div className="text-sm font-bold text-amber-400 font-mono">
            {formatNumber(timeLeft.days)}
          </div>
          <div className="text-xs text-zinc-400 uppercase tracking-wide">Days</div>
        </div>
        <div className="bg-zinc-800/60 border border-amber-400/20 rounded p-1.5">
          <div className="text-sm font-bold text-amber-400 font-mono">
            {formatNumber(timeLeft.hours)}
          </div>
          <div className="text-xs text-zinc-400 uppercase tracking-wide">Hrs</div>
        </div>
        <div className="bg-zinc-800/60 border border-amber-400/20 rounded p-1.5">
          <div className="text-sm font-bold text-amber-400 font-mono">
            {formatNumber(timeLeft.minutes)}
          </div>
          <div className="text-xs text-zinc-400 uppercase tracking-wide">Min</div>
        </div>
        <div className="bg-zinc-800/60 border border-amber-400/20 rounded p-1.5">
          <div className="text-sm font-bold text-amber-400 font-mono">
            {formatNumber(timeLeft.seconds)}
          </div>
          <div className="text-xs text-zinc-400 uppercase tracking-wide">Sec</div>
        </div>
      </div>

      {/* Event Date */}
      <p className="text-xs text-zinc-400">Nov 1, 2025</p>
    </div>
  );
}
