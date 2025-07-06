
import Image from 'next/image';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Trophy, Sunrise, Sunset, Camera, Award as AwardIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SR Fitness Awards - A Celebration of Excellence',
  description: 'Explore the highlights from the SR Fitness Awards, from the morning workout exhibition to the evening awards ceremony.',
};

export default function AwardsPage() {
  const workoutPhotos = [
    { src: 'https://placehold.co/600x400.png', alt: 'Group workout session in progress', dataAiHint: 'group workout intense' },
    { src: 'https://placehold.co/600x400.png', alt: 'Trainer demonstrating an exercise', dataAiHint: 'fitness trainer demonstration' },
    { src: 'https://placehold.co/600x400.png', alt: 'Participants doing push-ups', dataAiHint: 'people pushups' },
    { src: 'https://placehold.co/600x400.png', alt: 'Cool-down stretching session', dataAiHint: 'group stretching' },
  ];

  const ceremonyPhotos = [
    { src: 'https://placehold.co/600x400.png', alt: 'Winner receiving an award on stage', dataAiHint: 'award ceremony winner' },
    { src: 'https://placehold.co/600x400.png', alt: 'Sampson giving a speech', dataAiHint: 'ceo speech stage' },
    { src: 'https://placehold.co/600x400.png', alt: 'Audience applauding at the awards ceremony', dataAiHint: 'audience applauding' },
  ];

  return (
    <div className="bg-background text-foreground">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Main Header */}
        <div className="text-center mb-12 md:mb-16">
          <Trophy className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
            The SR Fitness Awards
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            A day dedicated to celebrating the hard work, dedication, and incredible achievements within our community.
          </p>
        </div>

        {/* Event Flow Section */}
        <div className="max-w-3xl mx-auto">
            <Card className="bg-card border-border shadow-xl mb-16">
                <CardHeader className="text-center">
                    <CardTitle className="font-headline text-3xl text-primary">Event Flow</CardTitle>
                    <CardDescription>A day of fitness and celebration.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="relative pl-6">
                        {/* The vertical line */}
                        <div className="absolute left-6 top-0 h-full w-0.5 bg-border/70"></div>

                        {/* Morning Session Node */}
                        <div className="relative mb-12">
                            <div className="absolute -left-3 top-1.5 h-6 w-6 rounded-full bg-primary ring-4 ring-background flex items-center justify-center">
                                <Sunrise className="h-4 w-4 text-primary-foreground"/>
                            </div>
                            <div className="pl-8">
                                <h3 className="font-headline text-2xl text-foreground mb-1">Morning Session</h3>
                                <p className="font-semibold text-primary">Workout Exhibition</p>
                                <p className="text-muted-foreground text-sm mt-1">A showcase of strength, endurance, and community spirit.</p>
                            </div>
                        </div>

                        {/* Evening Session Node */}
                        <div className="relative">
                            <div className="absolute -left-3 top-1.5 h-6 w-6 rounded-full bg-primary ring-4 ring-background flex items-center justify-center">
                                <Sunset className="h-4 w-4 text-primary-foreground"/>
                            </div>
                             <div className="pl-8">
                                <h3 className="font-headline text-2xl text-foreground mb-1">Evening Session</h3>
                                <p className="font-semibold text-primary">Awards Ceremony</p>
                                <p className="text-muted-foreground text-sm mt-1">Recognizing the outstanding achievements of our members and trainers.</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>


        {/* Morning Session Content */}
        <section id="morning-session" className="mb-16 md:mb-24">
            <div className="text-center mb-10">
                <h2 className="font-headline text-3xl md:text-4xl text-foreground font-semibold flex items-center justify-center gap-3">
                    <Camera className="h-8 w-8 text-primary" />
                    Morning: Workout Exhibition
                </h2>
                 <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-2">
                    Photos from our invigorating morning session.
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {workoutPhotos.map((photo, index) => (
                    <div key={index} className="relative aspect-square rounded-lg shadow-lg overflow-hidden group">
                         <Image
                            src={photo.src}
                            alt={photo.alt}
                            layout="fill"
                            objectFit="cover"
                            className="transform transition-transform duration-500 group-hover:scale-110"
                            data-ai-hint={photo.dataAiHint}
                        />
                         <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                    </div>
                ))}
            </div>
        </section>


        {/* Evening Session Content */}
        <section id="evening-session">
             <div className="text-center mb-10">
                <h2 className="font-headline text-3xl md:text-4xl text-foreground font-semibold flex items-center justify-center gap-3">
                    <AwardIcon className="h-8 w-8 text-primary" />
                    Evening: Awards Ceremony Highlights
                </h2>
                 <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-2">
                    A look at the memorable moments and celebrated winners.
                </p>
            </div>
            <div className="space-y-12">
                 {/* Highlight 1 */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative aspect-video rounded-lg shadow-lg overflow-hidden group">
                        <Image
                            src={ceremonyPhotos[0].src}
                            alt={ceremonyPhotos[0].alt}
                            layout="fill"
                            objectFit="cover"
                            className="transform transition-transform duration-500 group-hover:scale-110"
                            data-ai-hint={ceremonyPhotos[0].dataAiHint}
                        />
                    </div>
                    <div className="space-y-3">
                        <h3 className="font-headline text-2xl text-primary">Member of the Year</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Jessica L. was crowned Member of the Year for her incredible dedication, losing 20lbs and becoming an inspiration to everyone at the gym. Her journey embodies the spirit of SR Fitness.
                        </p>
                    </div>
                </div>

                {/* Highlight 2 */}
                 <div className="grid md:grid-cols-2 gap-8 items-center">
                     <div className="space-y-3 md:order-2">
                        <h3 className="font-headline text-2xl text-primary">A Word from our Founder</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Sampson delivered a powerful and motivating speech, reflecting on the year's successes and outlining the exciting future ahead for the SR Fitness family. He emphasized the importance of community and perseverance.
                        </p>
                    </div>
                    <div className="relative aspect-video rounded-lg shadow-lg overflow-hidden group md:order-1">
                        <Image
                            src={ceremonyPhotos[1].src}
                            alt={ceremonyPhotos[1].alt}
                            layout="fill"
                            objectFit="cover"
                            className="transform transition-transform duration-500 group-hover:scale-110"
                            data-ai-hint={ceremonyPhotos[1].dataAiHint}
                        />
                    </div>
                </div>

                 {/* Photo Highlight */}
                 <div className="text-center">
                      <div className="relative aspect-video max-w-3xl mx-auto rounded-lg shadow-lg overflow-hidden group">
                        <Image
                            src={ceremonyPhotos[2].src}
                            alt={ceremonyPhotos[2].alt}
                            layout="fill"
                            objectFit="cover"
                            className="transform transition-transform duration-500 group-hover:scale-110"
                            data-ai-hint={ceremonyPhotos[2].dataAiHint}
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end justify-center p-6">
                            <p className="text-white font-semibold text-lg" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
                                A night to remember, celebrating every victory, big and small.
                            </p>
                        </div>
                    </div>
                 </div>
            </div>
        </section>

      </section>
    </div>
  );
}
