"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trophy, Calendar, MapPin, Users, Star } from 'lucide-react';
import CountdownTimer from '../countdown/countdown-timer';
import CompactCountdown from '../countdown/compact-countdown';

interface AwardBannerProps {
  variant?: 'full' | 'compact' | 'minimal';
  className?: string;
}

export default function AwardBanner({ variant = 'full', className = '' }: AwardBannerProps) {
  const eventDate = new Date('2025-11-01T18:00:00'); // Saturday, November 1st, 2025 at 6 PM

  if (variant === 'minimal') {
    return (
      <div className={`bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-3 rounded-lg ${className}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5" />
            <span className="font-semibold">SR Awards 2025</span>
          </div>
          <CompactCountdown targetDate={eventDate} showLabel={false} />
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <Card className={`bg-gradient-to-r from-blue-600 to-purple-700 text-white ${className}`}>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">SR Fitness Awards 2025</h3>
                <div className="flex items-center gap-2 text-sm text-blue-100">
                  <Calendar className="w-3 h-3" />
                  <span>Nov 1, 2025</span>
                </div>
              </div>
            </div>
            <CompactCountdown targetDate={eventDate} />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden ${className}`}>
      <CardContent className="p-0">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left side - Event info */}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-8 h-8 text-yellow-400" />
              <h2 className="text-2xl font-bold">SR Fitness Awards 2025</h2>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-200" />
                <span className="font-medium">Saturday, November 1st, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-200" />
                <span className="font-medium">Celebrating Fitness Excellence</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Star className="w-3 h-3 mr-1" />
                Fitness Excellence
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Trophy className="w-3 h-3 mr-1" />
                Awards Ceremony
              </Badge>
            </div>

            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              Vote Now
            </Button>
          </div>

          {/* Right side - Countdown */}
          <div className="bg-white/10 p-6 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Time Until Event</h3>
              <CountdownTimer 
                targetDate={eventDate}
                eventTitle=""
                className="bg-transparent border-0 shadow-none"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
