
import Image from 'next/image';
import { trainers } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Award, UserCheck } from 'lucide-react';

export default function TrainerProfilesSection() {
  return (
    <section id="trainers" className="py-16 md:py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Meet Our Expert Trainers</h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
            Our certified trainers are dedicated to helping you achieve your fitness goals with personalized guidance and motivation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <Card
              key={trainer.id}
              className="bg-background text-foreground border-border shadow-lg overflow-hidden transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl group"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={trainer.imageUrl}
                  alt={trainer.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                  data-ai-hint="fitness trainer portrait"
                />
              </div>
              <CardHeader className="p-6">
                <CardTitle className="font-headline text-2xl text-primary mb-1 flex items-center">
                  <UserCheck className="h-6 w-6 mr-2 text-primary" />
                  {trainer.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground italic">
                  "{trainer.bio.substring(0, 100)}..."
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <h4 className="font-semibold text-foreground mb-2 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  Specializations:
                </h4>
                <ul className="space-y-1">
                  {trainer.specializations.map((spec, index) => (
                    <li key={index} className="text-sm text-muted-foreground list-disc list-inside ml-2">
                      {spec}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
