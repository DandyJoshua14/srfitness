"use client";

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Trophy, Calendar } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CompactCountdownProps {
  targetDate: Date;
  className?: string;
  showLabel?: boolean;
}

export default function CompactCountdown({ 
  targetDate, 
  className = "",
  showLabel = true
}: CompactCountdownProps) {
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
      <div className={`flex items-center gap-2 ${className}`}>
        <Trophy className="w-4 h-4 text-yellow-500" />
        <span className="text-sm font-semibold text-green-600">LIVE NOW!</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {showLabel && (
        <>
          <Trophy className="w-4 h-4 text-yellow-500" />
          <span className="text-sm font-medium">SR Awards:</span>
        </>
      )}
      <div className="flex items-center gap-1 text-sm font-mono">
        <Badge variant="outline" className="px-2 py-1 text-xs">
          {timeLeft.days}d
        </Badge>
        <span className="text-gray-500">:</span>
        <Badge variant="outline" className="px-2 py-1 text-xs">
          {formatNumber(timeLeft.hours)}h
        </Badge>
        <span className="text-gray-500">:</span>
        <Badge variant="outline" className="px-2 py-1 text-xs">
          {formatNumber(timeLeft.minutes)}m
        </Badge>
        <span className="text-gray-500">:</span>
        <Badge variant="outline" className="px-2 py-1 text-xs">
          {formatNumber(timeLeft.seconds)}s
        </Badge>
      </div>
      <Calendar className="w-3 h-3 text-gray-400" />
    </div>
  );
}
