
import Image from 'next/image';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Trophy, Sunrise, Sunset, Camera, Award as AwardIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SR Fitness Awards - A Celebration of Excellence',
  description: 'Explore the highlights from the SR Fitness Awards, celebrating the dedication and achievements of our community.',
};

export default function AwardsPage() {
  const workoutPhotos = [
    { src: '/groupp.jpeg', alt: 'Group workout session in progress', dataAiHint: 'group workout intense' },
    { src: '/group2.jpeg', alt: 'Trainer demonstrating an exercise', dataAiHint: 'fitness trainer demonstration' },
  ];

  const ceremonyPhotos = [
    { src: 'https://placehold.co/600x400.png', alt: 'Winner receiving an award on stage', dataAiHint: 'award ceremony winner' },
    { src: 'https://placehold.co/600x400.png', alt: 'Trainer of the year posing with their award', dataAiHint: 'award winner portrait' },
    { src: 'https://placehold.co/600x400.png', alt: 'Audience applauding at the awards ceremony', dataAiHint: 'audience applauding' },
    { src: 'https://placehold.co/600x400.png', alt: 'Group photo of all award winners', dataAiHint: 'award winners group' },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Classic Hero Section */}
      <section className="relative py-24 md:py-32 text-center bg-secondary">
        <div className="absolute inset-0 z-0">
          <Image
            src="/srward.jpeg"
            alt="Elegant awards ceremony background"
            layout="fill"
            objectFit="cover"
            className="opacity-10"
            data-ai-hint="awards ceremony background"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-secondary"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Trophy className="h-20 w-20 text-primary mx-auto mb-6" />
          <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl font-bold text-primary mb-4" style={{ textShadow: '1px 1px 2px hsl(var(--background))' }}>
            A Celebration of Excellence
          </h1>
          <p className="text-xl sm:text-2xl text-secondary-foreground/80 max-w-4xl mx-auto">
            Honoring resilience, professionalism, and celebrating fitness industry execelence.
          </p>
        </div>
      </section>
      
      {/* Main Content Area */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Event Flow */}
          <div className="max-w-3xl mx-auto mb-16 md:mb-24">
              <Card className="bg-card border-border shadow-xl">
                  <CardHeader className="text-center">
                      <CardTitle className="font-headline text-3xl text-primary">A Day to Remember</CardTitle>
                      <CardDescription>From morning energy to evening elegance.</CardDescription>
                  </CardHeader>
                  <CardContent>
                      <div className="relative pl-6">
                          <div className="absolute left-6 top-0 h-full w-0.5 bg-border/70"></div>
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
                          <div className="relative">
                              <div className="absolute -left-3 top-1.5 h-6 w-6 rounded-full bg-primary ring-4 ring-background flex items-center justify-center">
                                  <Sunset className="h-4 w-4 text-primary-foreground"/>
                              </div>
                               <div className="pl-8">
                                  <h3 className="font-headline text-2xl text-foreground mb-1">Evening Session</h3>
                                  <p className="font-semibold text-primary">Awards Ceremony & Gala</p>
                                  <p className="text-muted-foreground text-sm mt-1">Recognizing the outstanding achievements of our members and trainers.</p>
                              </div>
                          </div>
                      </div>
                  </CardContent>
              </Card>
          </div>

          {/* Morning Workout Gallery */}
          <section id="morning-session" className="mb-20 md:mb-28">
              <div className="text-center mb-10">
                  <h2 className="font-headline text-4xl text-foreground font-semibold flex items-center justify-center gap-3">
                      <Camera className="h-9 w-9 text-primary" />
                      Workout Exhibition Gallery
                  </h2>
                   <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-2">
                      The energy and determination from our morning session.
                  </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative aspect-[16/9] sm:col-span-2 rounded-lg shadow-lg overflow-hidden group border-2 border-transparent hover:border-primary transition-all duration-300">
                       <Image
                          src="/srward.jpeg"
                          alt="Participants in a high-energy group session"
                          layout="fill"
                          objectFit="cover"
                          className="transform transition-transform duration-500 group-hover:scale-110"
                          data-ai-hint="group workout high energy"
                      />
                       <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors"></div>
                  </div>

                  {workoutPhotos.map((photo, index) => (
                      <div key={index} className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden group border-2 border-transparent hover:border-primary transition-all duration-300">
                           <Image
                              src={photo.src}
                              alt={photo.alt}
                              layout="fill"
                              objectFit="cover"
                              className="transform transition-transform duration-500 group-hover:scale-110"
                              data-ai-hint={photo.dataAiHint}
                          />
                           <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors"></div>
                      </div>
                  ))}
              </div>
          </section>

          {/* Evening Ceremony Highlights */}
          <section id="evening-session">
               <div className="text-center mb-12">
                  <h2 className="font-headline text-4xl text-foreground font-semibold flex items-center justify-center gap-3">
                      <AwardIcon className="h-9 w-9 text-primary" />
                      Awards Gala Highlights
                  </h2>
                   <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-2">
                      Celebrating the moments that defined the evening.
                  </p>
              </div>
              
              <div className="space-y-16">
                  {/* Highlight 1: Member of the Year */}
                  <div className="grid md:grid-cols-2 gap-10 items-center">
                      <div className="relative aspect-[4/3] rounded-lg shadow-xl overflow-hidden group">
                          <Image
                              src={ceremonyPhotos[0].src}
                              alt={ceremonyPhotos[0].alt}
                              layout="fill"
                              objectFit="cover"
                              className="transform transition-transform duration-500 group-hover:scale-110"
                              data-ai-hint={ceremonyPhotos[0].dataAiHint}
                          />
                      </div>
                      <div className="space-y-4">
                          <h3 className="font-headline text-3xl text-primary">Member of the Year: Jessica L.</h3>
                          <p className="text-muted-foreground leading-relaxed text-base">
                              Jessica was crowned Member of the Year for her incredible dedication, losing 20lbs and becoming an inspiration to everyone at the gym. Her consistent hard work, positive attitude, and support for fellow members truly embody the spirit of SR Fitness.
                          </p>
                      </div>
                  </div>

                  {/* Highlight 2: Trainer of the Year */}
                   <div className="grid md:grid-cols-2 gap-10 items-center">
                       <div className="space-y-4 md:order-2">
                          <h3 className="font-headline text-3xl text-primary">Trainer of the Year: Alex M.</h3>
                          <p className="text-muted-foreground leading-relaxed text-base">
                              For his exceptional coaching, innovative training programs, and unwavering dedication to his clients' success, Alex was named Trainer of the Year. His commitment to fitness education has elevated the entire SR Fitness community.
                          </p>
                      </div>
                      <div className="relative aspect-[4/3] rounded-lg shadow-xl overflow-hidden group md:order-1">
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

                  {/* Photo Highlights Section */}
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       <div className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden group border-2 border-transparent hover:border-primary transition-all duration-300">
                           <Image
                                src={ceremonyPhotos[2].src}
                                alt={ceremonyPhotos[2].alt}
                                layout="fill"
                                objectFit="cover"
                                className="transform transition-transform duration-500 group-hover:scale-110"
                                data-ai-hint={ceremonyPhotos[2].dataAiHint}
                           />
                           <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-end p-4">
                               <p className="text-white font-semibold text-sm" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>The crowd's applause filled the room.</p>
                           </div>
                       </div>
                       <div className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden group border-2 border-transparent hover:border-primary transition-all duration-300">
                           <Image
                                src={ceremonyPhotos[3].src}
                                alt={ceremonyPhotos[3].alt}
                                layout="fill"
                                objectFit="cover"
                                className="transform transition-transform duration-500 group-hover:scale-110"
                                data-ai-hint={ceremonyPhotos[3].dataAiHint}
                           />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-end p-4">
                               <p className="text-white font-semibold text-sm" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>All our winners, celebrating together.</p>
                           </div>
                       </div>
                   </div>
              </div>
          </section>

        </div>
      </section>
    </div>
  );
}
