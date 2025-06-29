
import Image from 'next/image';
import { trainers } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Award, UserCheck } from 'lucide-react';

export default function TrainerProfilesSection() {
  return (
    <section id="judges" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Meet our expert award judges</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our esteemed panel of judges brings years of experience and expertise to recognize excellence in the fitness industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.slice(0, 3).map((judge, index) => ( // Displaying first 3 trainers as judges
            <div key={judge.id} className={`animate-in fade-in slide-in-from-bottom duration-700 delay-${100 + index * 150}`}>
              <Card
                className="bg-card border-border shadow-xl overflow-hidden transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl group h-full flex flex-col"
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={judge.imageUrl}
                    alt={`Judge: ${judge.name}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                    data-ai-hint="expert person portrait"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                </div>
                <CardHeader className="p-6">
                  <CardTitle className="font-headline text-2xl md:text-3xl text-primary mb-1 flex items-center group-hover:text-primary/90 transition-colors">
                    <UserCheck className="h-7 w-7 mr-2.5 text-primary/80 group-hover:text-primary transition-colors" />
                    {judge.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground italic text-sm leading-relaxed">
                    "{judge.bio.substring(0, 120)}..." 
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0 flex-grow flex flex-col">
                  <div className="mt-auto">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center text-md">
                      <Award className="h-5 w-5 mr-2 text-primary" />
                      Areas of Expertise:
                    </h4>
                    <ul className="space-y-1">
                      {judge.specializations.slice(0, 2).map((spec, i) => ( // Show first 2 specializations
                        <li key={i} className="text-sm text-muted-foreground list-disc list-inside ml-2">
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
