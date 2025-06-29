
import Image from 'next/image';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Award as AwardIcon, Star, Users, Trophy } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Awards - SR Fitness',
  description: 'Discover the accolades and achievements of SR Fitness. We are committed to excellence in fitness and member satisfaction.',
};

export default function AwardsPage() {
  const awardsList = [
    { title: "Best Gym in Workout City 2023", source: "City Fitness Magazine", icon: <AwardIcon className="h-10 w-10 text-primary" />, description: "Recognized for outstanding facilities and member services." },
    { title: "Top Rated Trainers Award", source: "FitnessReview.com Annual", icon: <Users className="h-10 w-10 text-primary" />, description: "Our trainers consistently receive top marks for expertise and dedication." },
    { title: "Community Choice Gold Medal", source: "Local Community Board Awards", icon: <Star className="h-10 w-10 text-primary" />, description: "Voted by the community as a leading fitness center." },
    { title: "Excellence in Group Fitness", source: "National Fitness Association", icon: <Trophy className="h-10 w-10 text-primary" />, description: "Awarded for innovative and effective group class programming." },
  ];

  const testimonials = [
    { name: "Jessica L.", achievement: "Lost 20lbs in 3 Months", quote: "SR Fitness changed my life! The trainers are amazing and the community is so supportive. I've never felt stronger or healthier.", image: "https://placehold.co/100x100.png", dataAiHint: "happy person" },
    { name: "Michael B.", achievement: "Gained 10lbs of Muscle", quote: "The personal training program here is top-notch. My trainer helped me surpass my strength goals and taught me so much about proper technique.", image: "https://placehold.co/100x100.png", dataAiHint: "smiling person" },
  ];

  return (
    <div className="bg-background text-foreground">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <Trophy className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
            Our Accolades & Recognition
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            We are deeply honored by the recognition SR Fitness has received. These awards reflect our unwavering commitment to providing an exceptional fitness experience and fostering a supportive community.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {awardsList.map((award, index) => (
            <Card 
              key={index} 
              className="text-center bg-card border-border shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl flex flex-col"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-3">
                  {award.icon}
                </div>
                <CardTitle className="font-headline text-xl md:text-2xl text-foreground">{award.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <CardDescription className="text-muted-foreground mb-2 text-sm">{award.description}</CardDescription>
                <p className="text-xs text-primary font-semibold">{award.source}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <h2 className="font-headline text-3xl md:text-4xl text-foreground font-semibold mb-10">Client Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card border-border p-6 shadow-lg text-left flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
            >
                <Image src={testimonial.image} alt={testimonial.name} width={100} height={100} className="rounded-full shadow-md shrink-0" data-ai-hint={testimonial.dataAiHint} />
                <div className="flex-grow">
                  <h3 className="font-headline text-xl text-primary">{testimonial.name}</h3>
                  <p className="text-sm font-semibold text-foreground mb-2">{testimonial.achievement}</p>
                  <p className="text-muted-foreground italic leading-relaxed">"{testimonial.quote}"</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
