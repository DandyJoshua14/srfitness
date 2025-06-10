
import Image from 'next/image';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Ruler, Wrench, ShieldCheck, Users, ArrowRight, Settings } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gym Equipment Solutions - SR Fitness',
  description: 'Expert gym equipment sourcing, installation, space design, management solutions, and safety training by SR Fitness.',
};

export default function EquipmentServicesPage() {
  const services = [
    {
      title: "Home or Commercial Gym Space Design",
      description: "We conceptualize and design functional and inspiring gym spaces tailored to your specific needs, whether for private home use or a commercial facility.",
      icon: <Ruler className="h-8 w-8 text-primary" />,
      image: "/gym.jpeg", // Corrected from 'src' to 'image'
      dataAiHint: "gym layout blueprint"
    },
    {
      title: "Equipment Sourcing, Installation & Maintenance",
      description: "Leverage our industry connections to source high-quality gym equipment. We handle professional installation and offer ongoing maintenance plans.",
      icon: <Wrench className="h-8 w-8 text-primary" />,
      image: "https://placehold.co/600x400.png",
      dataAiHint: "gym equipment installation"
    },
    {
      title: "Gym Management Solutions",
      description: "Optimize your gym operations with our expert consultancy, covering everything from membership systems to staff training and retention strategies.",
      icon: <Settings className="h-8 w-8 text-primary" />,
      image: "https://placehold.co/600x400.png",
      dataAiHint: "gym management software"
    },
    {
      title: "Commercial Gym Safety Staff Training",
      description: "Ensure a safe environment for your members and staff with our comprehensive safety training programs, covering equipment usage and emergency protocols.",
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      image: "https://placehold.co/600x400.png",
      dataAiHint: "safety training class"
    },
  ];

  return (
    <div className="bg-background text-foreground">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <Wrench className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
            Gym Equipment & Facility Solutions
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            With over a decade of experience in the fitness business, we specialize in providing comprehensive, value-driven solutions for all your gym-related needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-16">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className="bg-card border-border shadow-xl overflow-hidden flex flex-col group transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="transform transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={service.dataAiHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardHeader className="p-6">
                <div className="flex items-center text-primary mb-2">
                  {service.icon}
                  <CardTitle className="font-headline text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors ml-3">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex-grow flex flex-col">
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16 bg-secondary text-secondary-foreground p-8 md:p-12 rounded-lg shadow-xl">
          <h2 className="font-headline text-3xl md:text-4xl text-primary font-semibold mb-6">
            Partner with SR Fitness for Your Gym Project
          </h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
            Whether you're setting up a new gym, upgrading an existing one, or need expert management advice, our team is ready to assist.
          </p>
          <Button asChild size="lg" className="group font-headline text-xl px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transform hover:scale-105 transition-transform">
            <Link href="/#contact">
              Inquire About Our Solutions <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
