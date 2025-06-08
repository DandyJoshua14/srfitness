
import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Newspaper, Utensils, HeartPulse, Brain, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Lifestyle Magazine - SR Fitness',
  description: 'Explore articles on nutrition, wellness, training tips, and healthy recipes from SR Fitness to enhance your well-being.',
};

export default function LifestyleMagazinePage() {
  const articles = [
    { id: 1, title: "Top 5 Nutrition Myths Debunked for Peak Performance", category: "Nutrition", icon: <Utensils className="h-5 w-5 text-primary" />, image: "https://placehold.co/600x400.png", dataAiHint: "healthy food bowl", excerpt: "Cut through the confusion and learn the truth about common nutrition beliefs to optimize your diet and fuel your workouts effectively." },
    { id: 2, title: "Mindful Movement: The Key to Consistent & Joyful Workouts", category: "Wellness", icon: <Brain className="h-5 w-5 text-primary" />, image: "https://placehold.co/600x400.png", dataAiHint: "yoga meditation park", excerpt: "Discover how incorporating mindfulness into your exercise routine can enhance focus, reduce stress, and foster a sustainable love for fitness." },
    { id: 3, title: "Fuel Your Performance: Pre & Post Workout Meal Ideas", category: "Nutrition", icon: <Utensils className="h-5 w-5 text-primary" />, image: "https://placehold.co/600x400.png", dataAiHint: "protein shake fruit", excerpt: "Unlock optimal energy and recovery with these simple, delicious, and effective meal and snack ideas to eat before and after your training sessions." },
    { id: 4, title: "The Ultimate Guide to Active Recovery for Faster Gains", category: "Fitness Tips", icon: <HeartPulse className="h-5 w-5 text-primary" />, image: "https://placehold.co/600x400.png", dataAiHint: "stretching foam roller", excerpt: "Learn essential active recovery techniques that can help reduce muscle soreness, improve flexibility, and get you back to your workouts stronger." },
  ];

  return (
    <div className="bg-secondary text-secondary-foreground">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <Newspaper className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
            SR Fitness Lifestyle Magazine
          </h1>
          <p className="text-lg sm:text-xl text-secondary-foreground/80 max-w-3xl mx-auto">
            Your go-to resource for expert insights, practical tips, and inspiration to live a healthier, stronger, and more balanced life. Dive into our latest articles on fitness, nutrition, wellness, and more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {articles.map((article) => (
            <Card key={article.id} className="bg-background text-foreground border-border shadow-xl overflow-hidden flex flex-col group transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                  className="transform transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={article.dataAiHint}
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardHeader className="p-6">
                <div className="flex items-center text-sm text-primary mb-2">
                  {article.icon}
                  <span className="ml-2 font-semibold tracking-wider uppercase">{article.category}</span>
                </div>
                <CardTitle className="font-headline text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors">
                  <Link href="#" className="focus:outline-none focus:ring-2 focus:ring-primary rounded">
                    {article.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex-grow flex flex-col">
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {article.excerpt}
                </CardDescription>
                <Button asChild variant="link" className="text-primary font-semibold p-0 self-start group-hover:underline">
                  <Link href="#">
                    Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
