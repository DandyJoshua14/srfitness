"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Calendar, MapPin } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownWidgetProps {
  targetDate: Date;
  size?: 'sm' | 'md' | 'lg';
  showEventInfo?: boolean;
  className?: string;
}

export default function CountdownWidget({ 
  targetDate, 
  size = 'md',
  showEventInfo = true,
  className = ""
}: CountdownWidgetProps) {
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

  const sizeClasses = {
    sm: {
      card: 'p-3',
      title: 'text-sm',
      time: 'text-lg',
      label: 'text-xs',
      icon: 'w-4 h-4'
    },
    md: {
      card: 'p-4',
      title: 'text-base',
      time: 'text-xl',
      label: 'text-sm',
      icon: 'w-5 h-5'
    },
    lg: {
      card: 'p-6',
      title: 'text-lg',
      time: 'text-2xl',
      label: 'text-sm',
      icon: 'w-6 h-6'
    }
  };

  const classes = sizeClasses[size];

  if (isExpired) {
    return (
      <Card className={`bg-gradient-to-r from-green-600 to-green-800 text-white ${className}`}>
        <CardContent className={classes.card}>
          <div className="text-center">
            <Trophy className={`${classes.icon} mx-auto mb-2`} />
            <h3 className={`${classes.title} font-bold mb-1`}>Event Started!</h3>
            <p className="text-green-100 text-sm">SR Fitness Awards 2025 is now live!</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`bg-gradient-to-r from-blue-600 to-purple-700 text-white ${className}`}>
      <CardContent className={classes.card}>
        {showEventInfo && (
          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Trophy className={classes.icon} />
              <h3 className={`${classes.title} font-bold`}>SR Awards 2025</h3>
            </div>
            <div className="flex items-center justify-center gap-3 text-xs text-blue-100">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>Nov 1, 2025</span>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-4 gap-2 mb-3">
          <div className="text-center">
            <div className="bg-white/20 rounded p-2 mb-1">
              <div className={`${classes.time} font-bold`}>{formatNumber(timeLeft.days)}</div>
              <div className={`${classes.label} text-blue-100`}>DAYS</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/20 rounded p-2 mb-1">
              <div className={`${classes.time} font-bold`}>{formatNumber(timeLeft.hours)}</div>
              <div className={`${classes.label} text-blue-100`}>HRS</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/20 rounded p-2 mb-1">
              <div className={`${classes.time} font-bold`}>{formatNumber(timeLeft.minutes)}</div>
              <div className={`${classes.label} text-blue-100`}>MIN</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/20 rounded p-2 mb-1">
              <div className={`${classes.time} font-bold`}>{formatNumber(timeLeft.seconds)}</div>
              <div className={`${classes.label} text-blue-100`}>SEC</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
            Time Until Event
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
