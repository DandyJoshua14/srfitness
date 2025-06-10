
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, Activity } from 'lucide-react';
import Image from 'next/image';

// Mock data - in a real app, this would come from a backend
const mockActiveUsers = [
  { id: '1', city: 'Lagos', country: 'Nigeria', activity: 'Cardio Session', avatarInitial: 'LA' },
  { id: '2', city: 'London', country: 'UK', activity: 'Weightlifting', avatarInitial: 'LO' },
  { id: '3', city: 'New York', country: 'USA', activity: 'Yoga Class', avatarInitial: 'NY' },
  { id: '4', city: 'Tokyo', country: 'Japan', activity: 'Bootcamp', avatarInitial: 'TK' },
  { id: '5', city: 'Abuja', country: 'Nigeria', activity: 'Strength Training', avatarInitial: 'AB' },
];

export default function GlobalConnectClient() {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <Card className="lg:col-span-2 shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-2xl text-foreground flex items-center">
            <MapPin className="mr-2 h-6 w-6 text-primary" />
            Interactive World Map (Placeholder)
          </CardTitle>
          <CardDescription>
            Visualizing active SR Fitness members globally. This is a placeholder for a real interactive map.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-muted rounded-md flex items-center justify-center text-muted-foreground overflow-hidden">
            {/* Replace with an actual map component (e.g., Leaflet, Google Maps) in a real app */}
            <Image 
              src="https://placehold.co/800x450.png?text=World+Map+Placeholder" 
              alt="World Map Placeholder" 
              width={800} 
              height={450}
              className="object-cover w-full h-full"
              data-ai-hint="world map illustration"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-2 text-center">
            Imagine pulsating dots representing live user activity here.
          </p>
        </CardContent>
      </Card>

      <Card className="lg:col-span-1 shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-2xl text-foreground flex items-center">
            <Activity className="mr-2 h-6 w-6 text-primary" />
            Live Activity Feed
          </CardTitle>
          <CardDescription>Recent workouts from our global community.</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px] pr-4">
            <ul className="space-y-4">
              {mockActiveUsers.map(user => (
                <li key={user.id} className="flex items-center space-x-3 p-3 bg-secondary/20 rounded-lg">
                  <Avatar>
                    <AvatarImage src={`https://placehold.co/40x40.png?text=${user.avatarInitial}`} alt={user.city} />
                    <AvatarFallback>{user.avatarInitial}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Someone in {user.city}, {user.country}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Just started: {user.activity}
                    </p>
                  </div>
                </li>
              ))}
               <li className="flex items-center space-x-3 p-3 bg-secondary/20 rounded-lg">
                  <Avatar>
                    <AvatarImage src="https://placehold.co/40x40.png?text=SP" alt="Sao Paulo" />
                    <AvatarFallback>SP</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Someone in Sao Paulo, Brazil
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Just finished: HIIT Challenge
                    </p>
                  </div>
                </li>
            </ul>
          </ScrollArea>
           <p className="text-xs text-muted-foreground mt-2 text-center">
            This is a conceptual feed. Real-time updates would require backend integration.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

