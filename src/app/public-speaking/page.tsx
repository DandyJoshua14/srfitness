
import Image from 'next/image';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mic, ArrowRight, Brain, ShieldCheck, TrendingUp, Sparkles, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Public Speaking & Corporate Wellness - SR Fitness',
  description: "Book Samson, an expert in health and wellness, for inspiring keynotes and corporate workshops. Elevate your team's well-being and productivity.",
};

export default function PublicSpeakingPage() {
  const speakingTopics = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "The Future of Corporate Wellness",
      description: "How to create a sustainable culture of health that boosts productivity and attracts top talent.",
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Resilience: The Ultimate Performance Enhancer",
      description: "Strategies to build mental and physical resilience to thrive under pressure and prevent burnout.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "Nutrition for the Modern Professional",
      description: "Practical, science-backed nutritional advice to optimize energy, focus, and cognitive function.",
    },
  ];
  
  const benefits = [
    "Increased employee engagement & morale",
    "Reduced stress & burnout rates",
    "Improved team cohesion & productivity",
    "Enhanced leadership & resilience skills"
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative bg-secondary text-secondary-foreground py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
             <Image
                src="/public speak.jpg"
                alt="Samson speaking at a corporate event"
                layout="fill"
                objectFit="cover"
                className="opacity-20"
                data-ai-hint="public speaker stage"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-secondary"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <Mic className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
              Inspire Your Team. Elevate Your Workplace.
            </h1>
            <p className="text-lg sm:text-xl text-secondary-foreground/80 max-w-3xl mx-auto mb-8">
              Book Samson for dynamic keynotes and interactive workshops that transform company culture and empower your employees to thrive.
            </p>
            <Button asChild size="lg" className="font-headline text-xl px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              <Link href="/#contact">Book a Speaking Engagement</Link>
            </Button>
        </div>
      </section>

      {/* About the Speaker Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-square md:aspect-[4/5] rounded-lg shadow-xl overflow-hidden group">
                     <Image
                        src="/SR.jpg" // Using SR.jpg as placeholder for Samson
                        alt="Samson, Corporate Wellness Speaker"
                        layout="fill"
                        objectFit="cover"
                        className="transform transition-transform duration-500 group-hover:scale-110"
                        data-ai-hint="professional speaker portrait"
                      />
                </div>
                <div className="space-y-6">
                    <Sparkles className="h-10 w-10 text-primary" />
                    <h2 className="font-headline text-3xl md:text-4xl text-primary font-bold">
                        Meet Your Speaker: Samson
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Samson is a renowned wellness expert and captivating speaker with a passion for helping organizations build healthier, more resilient teams. With a background in elite personal training and corporate wellness consultancy, he translates complex health concepts into actionable strategies that drive real-world results.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        His energetic and evidence-based approach makes him a favorite for leadership summits, company-wide meetings, and team-building events.
                    </p>
                </div>
            </div>
        </div>
      </section>


      {/* Speaking Topics Section */}
      <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-3">Signature Speaking Topics</h2>
              <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">Engaging talks designed to inspire action and create lasting change.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {speakingTopics.map((topic) => (
                <Card 
                    key={topic.title} 
                    className="bg-card border-border shadow-lg text-center p-6 flex flex-col items-center group transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl hover:border-primary/50"
                >
                    <div className="mb-4 text-primary transition-transform duration-300 group-hover:scale-110">
                        {topic.icon}
                    </div>
                    <CardTitle className="font-headline text-2xl text-foreground mb-2">{topic.title}</CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed flex-grow">
                        {topic.description}
                    </CardDescription>
                </Card>
              ))}
            </div>
          </div>
      </section>
      
       {/* What To Expect Section */}
       <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="space-y-6">
                    <h2 className="font-headline text-3xl md:text-4xl text-primary font-bold">
                        What to Expect for Your Organization
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Our sessions are more than just talks; they are interactive experiences designed to provide tangible value and inspire immediate action. We work with you to customize content that directly addresses your company's challenges and goals.
                    </p>
                    <ul className="space-y-3">
                        {benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                                <Check className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                                <span className="text-foreground">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                 <div className="relative aspect-video rounded-lg shadow-xl overflow-hidden group">
                     <Image
                        src="https://placehold.co/600x400.png"
                        alt="Engaged audience at a corporate event"
                        layout="fill"
                        objectFit="cover"
                        className="transform transition-transform duration-500 group-hover:scale-110"
                        data-ai-hint="corporate audience event"
                      />
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary/10 text-center p-8 md:p-12 rounded-lg my-10">
                <h2 className="font-headline text-3xl md:text-4xl text-primary font-semibold mb-6">
                    Ready to Energize Your Team?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                    Let's discuss how we can tailor a speaking engagement or workshop for your organization. Contact us today for availability and a custom proposal.
                </p>
                <Button asChild size="lg" className="group font-headline text-xl px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transform hover:scale-105 transition-transform">
                    <Link href="/#contact">
                    Request Booking Info <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </Button>
            </div>
        </div>
      </section>

    </div>
  );
}
