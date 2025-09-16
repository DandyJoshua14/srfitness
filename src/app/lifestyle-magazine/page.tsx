
"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Newspaper, Utensils, HeartPulse, Brain, ArrowRight } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { getArticles, Article } from '@/services/firestore';

const categoryIcons: { [key: string]: React.ReactElement } = {
  "Nutrition": <Utensils className="h-5 w-5 text-primary" />,
  "Wellness": <Brain className="h-5 w-5 text-primary" />,
  "Fitness Tips": <HeartPulse className="h-5 w-5 text-primary" />,
  "Motivation": <HeartPulse className="h-5 w-5 text-primary" />, // Using same for now
  "Default": <Newspaper className="h-5 w-5 text-primary" />
};

export default function LifestyleMagazinePage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
        setLoading(true);
        try {
            const fetchedArticles = await getArticles();
            setArticles(fetchedArticles);
        } catch (e) {
            console.error("Failed to load magazine articles from Firestore.", e);
            // Optionally set an error state and show a toast
        } finally {
            setLoading(false);
        }
    };
    fetchArticles();
  }, []);

  return (
    <div className="bg-secondary text-secondary-foreground">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <Newspaper className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
            SR Fitness Lifestyle Magazine
          </h1>
          <p className="text-lg sm:text-xl text-secondary-foreground/80 max-w-3xl mx-auto">
            Your go-to resource for expert insights, practical tips, and inspiration to live a healthier, stronger, and more balanced life.
          </p>
        </div>

        {/* Magazine Cover Placeholder */}
        <div className="mb-16 md:mb-20">
          <Card className="max-w-2xl mx-auto bg-background shadow-2xl border-border overflow-hidden group">
            <div className="aspect-[2/4] relative">
               <Image
                  src="/magazine.jpg"
                  alt="SR Fitness Magazine Cover"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint="fitness magazine cover"
                  priority
                />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                  <h2 className="font-headline text-4xl md:text-6xl text-white font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                    THE WELLNESS ISSUE
                  </h2>
                  <p className="text-lg text-primary font-semibold">Transform Your Mind & Body</p>
              </div>
            </div>
          </Card>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {[...Array(2)].map((_, i) => (
              <Card key={i} className="bg-background border-border shadow-xl overflow-hidden">
                <Skeleton className="h-64 w-full" />
                <CardHeader className="p-6">
                  <Skeleton className="h-5 w-1/4 mb-2" />
                  <Skeleton className="h-8 w-3/4" />
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-5/6 mb-4" />
                  <Skeleton className="h-10 w-32 mt-auto" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : articles.length === 0 ? (
          <Card className="text-center py-16 max-w-lg mx-auto shadow-xl bg-background">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-semibold text-muted-foreground">Magazine is Empty</h2>
              <p className="text-muted-foreground">No articles have been published yet. Check back soon!</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {articles.map((article) => (
              <Card 
                key={article.id} 
                className="bg-background text-foreground border-border shadow-xl overflow-hidden flex flex-col group transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl"
              >
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
                    {categoryIcons[article.category] || categoryIcons["Default"]}
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
        )}
      </section>
    </div>
  );
}
