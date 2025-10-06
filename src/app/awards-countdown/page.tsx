"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AwardBanner from '@/components/features/ads/award-banner';
import CountdownTimer from '@/components/features/countdown/countdown-timer';
import CompactCountdown from '@/components/features/countdown/compact-countdown';
import CountdownWidget from '@/components/features/countdown/countdown-widget';

export default function AwardsCountdownPage() {
  const eventDate = new Date('2025-11-01T18:00:00'); // Saturday, November 1st, 2025 at 6 PM

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            SR Fitness Awards 2025
          </h1>
          <p className="text-xl text-gray-600">
            Countdown to the biggest fitness awards ceremony in Owerri
          </p>
        </div>

        {/* Full Banner */}
        <Card>
          <CardHeader>
            <CardTitle>Full Award Banner</CardTitle>
          </CardHeader>
          <CardContent>
            <AwardBanner variant="full" />
          </CardContent>
        </Card>

        {/* Compact Banner */}
        <Card>
          <CardHeader>
            <CardTitle>Compact Award Banner</CardTitle>
          </CardHeader>
          <CardContent>
            <AwardBanner variant="compact" />
          </CardContent>
        </Card>

        {/* Minimal Banner */}
        <Card>
          <CardHeader>
            <CardTitle>Minimal Award Banner</CardTitle>
          </CardHeader>
          <CardContent>
            <AwardBanner variant="minimal" />
          </CardContent>
        </Card>

        {/* Standalone Countdown */}
        <Card>
          <CardHeader>
            <CardTitle>Standalone Countdown Timer</CardTitle>
          </CardHeader>
          <CardContent>
            <CountdownTimer 
              targetDate={eventDate}
              eventTitle="SR Fitness Awards 2025"
            />
          </CardContent>
        </Card>

        {/* Compact Countdown */}
        <Card>
          <CardHeader>
            <CardTitle>Compact Countdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-gray-100 rounded-lg">
                <CompactCountdown targetDate={eventDate} />
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <CompactCountdown targetDate={eventDate} showLabel={false} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Countdown Widgets */}
        <Card>
          <CardHeader>
            <CardTitle>Countdown Widgets (Different Sizes)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Small Widget</h4>
                <CountdownWidget targetDate={eventDate} size="sm" />
              </div>
              <div>
                <h4 className="font-semibold mb-3">Medium Widget</h4>
                <CountdownWidget targetDate={eventDate} size="md" />
              </div>
              <div>
                <h4 className="font-semibold mb-3">Large Widget</h4>
                <CountdownWidget targetDate={eventDate} size="lg" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Event Details */}
        <Card>
          <CardHeader>
            <CardTitle>Event Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Award Categories</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Fitness Trainer/Coach of the Year</li>
                  <li>• Fitness Trainer/Coach of the Year (Owerri)</li>
                  <li>• Fitness Club Coach of the Year</li>
                  <li>• Gym of the Year</li>
                  <li>• Community Fitness Hero of the Year</li>
                  <li>• Inspirational Weight-Loss Journey</li>
                  <li>• And many more...</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Event Information</h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Date:</strong> Saturday, November 1st, 2025</p>
                  <p><strong>Time:</strong> 6:00 PM</p>
                  <p><strong>Theme:</strong> Celebrating Fitness Excellence</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
