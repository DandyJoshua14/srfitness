"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Trophy } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
  eventTitle?: string;
  className?: string;
}

export default function CountdownTimer({ 
  targetDate, 
  eventTitle = "SR Fitness Awards 2025",
  className = ""
}: CountdownTimerProps) {
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

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  if (isExpired) {
    return (
      <Card className={`bg-gradient-to-r from-red-600 to-red-800 text-white ${className}`}>
        <CardContent className="p-6 text-center">
          <Trophy className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Event Has Started!</h3>
          <p className="text-red-100">The SR Fitness Awards 2025 is now live!</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`bg-gradient-to-r from-blue-600 to-purple-700 text-white ${className}`}>
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Trophy className="w-6 h-6" />
            <h3 className="text-xl font-bold">{eventTitle}</h3>
          </div>
          <div className="flex items-center justify-center gap-4 text-sm text-blue-100">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>Saturday, Nov 1, 2025</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="text-center">
            <div className="bg-white/20 rounded-lg p-3 mb-2">
              <div className="text-2xl font-bold">{formatNumber(timeLeft.days)}</div>
              <div className="text-xs text-blue-100">DAYS</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/20 rounded-lg p-3 mb-2">
              <div className="text-2xl font-bold">{formatNumber(timeLeft.hours)}</div>
              <div className="text-xs text-blue-100">HOURS</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/20 rounded-lg p-3 mb-2">
              <div className="text-2xl font-bold">{formatNumber(timeLeft.minutes)}</div>
              <div className="text-xs text-blue-100">MINUTES</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/20 rounded-lg p-3 mb-2">
              <div className="text-2xl font-bold">{formatNumber(timeLeft.seconds)}</div>
              <div className="text-xs text-blue-100">SECONDS</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
            <Clock className="w-3 h-3 mr-1" />
            Time Until Event
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
