
import Image from 'next/image';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase, HeartPulse, ShieldCheck, TrendingUp, Users, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Corporate Wellness Programs - SR Fitness',
  description: "Elevate your team's health and productivity with SR Fitness's comprehensive corporate wellness programs, including workshops, health assessments, and team challenges.",
};

export default function CorporateWellnessPage() {
  const wellnessServices = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Interactive Wellness Workshops",
      description: "Engaging sessions on nutrition, stress management, ergonomics, and mental resilience, customized for your team's needs.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "On-Site Health Screenings",
      description: "Confidential health assessments to give employees valuable insights into their well-being and identify potential risk factors.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Company-Wide Team Bonding Fitness Sessions",
      description: "Boost morale and team cohesion with fun, competitive challenges that encourage healthy habits and physical activity.",
    },
  ];

  const benefits = [
    "Boosted employee morale and job satisfaction",
    "Increased productivity and focus",
    "Reduced absenteeism and healthcare costs",
    "Attraction and retention of top talent",
    "A stronger, more resilient company culture",
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative bg-secondary text-secondary-foreground py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
             <Image
                src="/cop.jpeg"
                alt="A modern office with people collaborating"
                layout="fill"
                objectFit="cover"
                className="opacity-30"
                data-ai-hint="corporate office team"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-secondary"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <Briefcase className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
              Invest in Your Greatest Asset: Your Team.
            </h1>
            <p className="text-lg sm:text-xl text-secondary-foreground/80 max-w-3xl mx-auto mb-8">
              Discover our tailored corporate wellness solutions designed to build a healthier, happier, and more productive workforce.
            </p>
            <Button asChild size="lg" className="font-headline text-xl px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              <Link href="/#contact">Design Your Wellness Program</Link>
            </Button>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-3">Our Corporate Wellness Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">A holistic approach to employee well-being.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {wellnessServices.map((service) => (
                <Card 
                    key={service.title} 
                    className="bg-card border-border shadow-lg text-center p-6 flex flex-col items-center group transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl hover:border-primary/50"
                >
                    <div className="mb-4 text-primary transition-transform duration-300 group-hover:scale-110">
                        {service.icon}
                    </div>
                    <CardTitle className="font-headline text-2xl text-foreground mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed flex-grow">
                        {service.description}
                    </CardDescription>
                </Card>
              ))}
            </div>
          </div>
      </section>
      
       {/* Benefits Section */}
       <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="space-y-6">
                    <HeartPulse className="h-10 w-10 text-primary" />
                    <h2 className="font-headline text-3xl md:text-4xl text-primary font-bold">
                        A Direct Impact on Your Bottom Line
                    </h2>
                    <p className="text-lg text-secondary-foreground/80 leading-relaxed">
                        Our programs are not just a perk; they're a strategic investment in your company's success. Healthy employees are more engaged, resilient, and innovative.
                    </p>
                    <ul className="space-y-3">
                        {benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                                <TrendingUp className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                                <span className="text-secondary-foreground">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                 <div className="relative aspect-video rounded-lg shadow-xl overflow-hidden group">
                     <Image
                        src="https://placehold.co/600x400.png"
                        alt="Happy employees in a meeting"
                        layout="fill"
                        objectFit="cover"
                        className="transform transition-transform duration-500 group-hover:scale-110"
                        data-ai-hint="happy employees meeting"
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
                    Ready to Transform Your Workplace?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                    Let's discuss how we can build a wellness program that aligns with your company's culture and goals. Contact us for a complimentary consultation.
                </p>
                <Button asChild size="lg" className="group font-headline text-xl px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transform hover:scale-105 transition-transform">
                    <Link href="/#contact">
                    Get a Custom Quote <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </Button>
            </div>
        </div>
      </section>

    </div>
  );
}
