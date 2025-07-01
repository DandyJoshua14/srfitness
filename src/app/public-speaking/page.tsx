
import Image from 'next/image';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Briefcase, HeartPulse, Presentation, Users, TrendingUp, BarChart, Smile, Target, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Corporate Wellness Programs - SR Fitness',
  description: 'Boost productivity, morale, and health with custom corporate wellness solutions from SR Fitness. We offer workshops, fitness classes, and team challenges.',
};

export default function CorporateWellnessPage() {
  const wellnessPrograms = [
    {
      title: "Fitness Classes (On-site & Virtual)",
      description: "Energize your team with a variety of classes like Yoga, HIIT, and Mindfulness, accessible to all fitness levels.",
      icon: <HeartPulse className="h-8 w-8 text-primary" />,
    },
    {
      title: "Wellness Workshops & Seminars",
      description: "Educational sessions on crucial topics like stress management, nutrition for productivity, and ergonomic best practices.",
      icon: <Presentation className="h-8 w-8 text-primary" />,
    },
    {
      title: "Company-Wide Fitness Challenges",
      description: "Foster teamwork and healthy competition with engaging challenges that boost morale and create lasting habits.",
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
    },
    {
      title: "Executive Health Coaching",
      description: "Confidential, one-on-one coaching for leadership to optimize health, resilience, and performance.",
      icon: <Target className="h-8 w-8 text-primary" />,
    },
  ];

  const companyBenefits = [
     {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Increased Productivity",
      description: "Healthy employees are more focused, energized, and efficient.",
    },
     {
      icon: <Smile className="h-10 w-10 text-primary" />,
      title: "Improved Morale",
      description: "Investing in wellness shows you care, boosting team spirit and loyalty.",
    },
     {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Enhanced Teamwork",
      description: "Group fitness activities and challenges build stronger bonds between colleagues.",
    },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative bg-secondary text-secondary-foreground py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
             <Image
                src="/public speak.jpg"
                alt="Corporate wellness session"
                layout="fill"
                objectFit="cover"
                className="opacity-20"
                data-ai-hint="corporate workshop office"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-secondary"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <Briefcase className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
              Elevate Your Workplace Wellness
            </h1>
            <p className="text-lg sm:text-xl text-secondary-foreground/80 max-w-3xl mx-auto mb-8">
              Partner with SR Fitness to create a thriving, healthy, and high-performing team. Our tailored corporate wellness programs are designed to boost employee well-being, productivity, and morale.
            </p>
            <Button asChild size="lg" className="font-headline text-xl px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              <Link href="/#contact">Get a Custom Quote</Link>
            </Button>
        </div>
      </section>
      
      {/* Our Programs Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-3">Our Corporate Wellness Programs</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Flexible solutions to fit your company's culture and goals.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {wellnessPrograms.map((program, index) => (
                <Card 
                key={index} 
                className="bg-card border-border shadow-lg text-center p-6 flex flex-col items-center group transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl hover:border-primary/50"
                >
                <div className="mb-4 text-primary transition-transform duration-300 group-hover:scale-110">
                    {program.icon}
                </div>
                <CardTitle className="font-headline text-2xl text-foreground mb-2">{program.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed flex-grow">
                    {program.description}
                </CardDescription>
                </Card>
            ))}
            </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-3">A Strong Return on Wellness</h2>
              <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">Investing in your team's health is investing in your company's success.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {companyBenefits.map((benefit, index) => (
                <div key={index} className="text-center p-6">
                   <div className="flex justify-center mb-4">
                        {benefit.icon}
                    </div>
                  <h3 className="font-headline text-2xl text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-secondary-foreground/80">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
      </section>

      {/* How it Works Section */}
       <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-3">Our Simple 3-Step Process</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl mb-4 border-4 border-primary/30">1</div>
                    <h3 className="font-headline text-2xl text-foreground mb-2">Consult</h3>
                    <p className="text-muted-foreground">We meet with you to understand your company's unique needs, culture, and wellness goals.</p>
                </div>
                 <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl mb-4 border-4 border-primary/30">2</div>
                    <h3 className="font-headline text-2xl text-foreground mb-2">Customize</h3>
                    <p className="text-muted-foreground">Our experts design a bespoke wellness program that aligns with your objectives and budget.</p>
                </div>
                 <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl mb-4 border-4 border-primary/30">3</div>
                    <h3 className="font-headline text-2xl text-foreground mb-2">Engage</h3>
                    <p className="text-muted-foreground">We launch and manage engaging workshops, classes, and challenges that your team will love.</p>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary/10 text-center p-8 md:p-12 rounded-lg my-10">
                <h2 className="font-headline text-3xl md:text-4xl text-primary font-semibold mb-6">
                    Ready to Build a Healthier Workplace?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                    Let's create a wellness program that makes a real difference. Contact us today for a free, no-obligation consultation.
                </p>
                <Button asChild size="lg" className="group font-headline text-xl px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transform hover:scale-105 transition-transform">
                    <Link href="/#contact">
                    Book a Free Consultation <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </Button>
            </div>
        </div>
      </section>

    </div>
  );
}
