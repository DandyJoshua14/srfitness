
import Image from 'next/image';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Mic, Presentation, Users, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Public Speaking & Workshops - SR Fitness',
  description: 'Engage SR Fitness experts for inspiring talks, wellness workshops, and motivational seminars. Elevate your event or organization with our fitness knowledge.',
};

export default function PublicSpeakingPage() {
  const speakingTopics = [
    {
      title: "Motivational Fitness Kickstarts",
      description: "Inspiring talks to ignite passion for a healthier lifestyle and sustained workout habits.",
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      image: "https://placehold.co/600x400.png",
      dataAiHint: "motivational speaker stage"
    },
    {
      title: "Nutrition for Peak Performance",
      description: "Evidence-based insights into fueling your body for optimal results, whether for sports or daily life.",
      icon: <Users className="h-8 w-8 text-primary" />,
      image: "https://placehold.co/600x400.png",
      dataAiHint: "nutrition presentation chart"
    },
    {
      title: "Corporate Wellness Workshops",
      description: "Tailored programs to boost employee well-being, productivity, and create a healthier workplace culture.",
      icon: <Presentation className="h-8 w-8 text-primary" />,
      image: "https://placehold.co/600x400.png",
      dataAiHint: "corporate workshop office"
    },
    {
      title: "Mindset & Goal Achievement",
      description: "Strategies to cultivate a resilient mindset, overcome obstacles, and achieve ambitious fitness goals.",
      icon: <Mic className="h-8 w-8 text-primary" />,
      image: "https://placehold.co/600x400.png",
      dataAiHint: "person speaking microphone"
    },
  ];

  return (
    <div className="bg-background text-foreground">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <Mic className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
            Inspiring Talks & Wellness Workshops
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            SR Fitness is passionate about sharing knowledge and motivating individuals and groups. Our experts deliver engaging presentations on a variety of health, fitness, and wellness topics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-16">
          {speakingTopics.map((topic, index) => (
            <Card 
              key={index} 
              className="bg-card border-border shadow-xl overflow-hidden flex flex-col group transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={topic.image}
                  alt={topic.title}
                  layout="fill"
                  objectFit="cover"
                  className="transform transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={topic.dataAiHint}
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardHeader className="p-6">
                <div className="flex items-center text-primary mb-2">
                  {topic.icon}
                  <CardTitle className="font-headline text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors ml-3">
                    {topic.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex-grow flex flex-col">
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {topic.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16 bg-secondary text-secondary-foreground p-8 md:p-12 rounded-lg shadow-xl">
          <h2 className="font-headline text-3xl md:text-4xl text-primary font-semibold mb-6">
            Book an SR Fitness Expert for Your Next Event
          </h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
            Whether it's a corporate event, a community gathering, or an educational seminar, our speakers can provide valuable insights and inspiration. Let us help you make your event a memorable success.
          </p>
          <Button asChild size="lg" className="font-headline text-xl px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-shadow">
            <Link href="/#contact">Inquire About Speaking Engagements</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
