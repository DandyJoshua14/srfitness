
"use client";
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react'; 
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "SR Fitness transformed my approach to health. The trainers are incredibly knowledgeable and the atmosphere is so motivating. I've never felt stronger!",
    name: "Alex P.",
    role: "Bootcamp Enthusiast",
    image: "https://placehold.co/100x100.png",
    dataAiHint: "happy fitness person"
  },
  {
    quote: "The personal training program here is second to none. My trainer pushed me to achieve goals I never thought possible. Highly recommend!",
    name: "Sarah K.",
    role: "Personal Training Client",
    image: "https://placehold.co/100x100.png",
    dataAiHint: "smiling athlete"
  },
  {
    quote: "I love the variety of classes and the supportive community at SR Fitness. It's more than a gym, it's a lifestyle.",
    name: "Mike D.",
    role: "Long-term Member",
    image: "https://placehold.co/100x100.png",
    dataAiHint: "confident person gym"
  },
];

export default function TestimonialSliderSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
            Hear from our members who've experienced real results and transformations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`animate-in fade-in slide-in-from-bottom duration-700 delay-${200 + index * 150}`}>
              <Card className="bg-background text-foreground border-border shadow-xl h-full flex flex-col overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                <CardContent className="p-6 md:p-8 flex flex-col flex-grow items-center text-center">
                  <motion.div 
                    className="relative w-24 h-24 rounded-full overflow-hidden mb-6 shadow-lg border-2 border-primary transition-all duration-300 group-hover:shadow-primary/50 group-hover:scale-110"
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint={testimonial.dataAiHint}
                    />
                  </motion.div>
                  <p className="text-muted-foreground italic text-lg leading-relaxed mb-6 flex-grow">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-auto">
                    <h3 className="font-headline text-xl text-primary">{testimonial.name}</h3>
                    <p className="text-sm text-foreground/80">{testimonial.role}</p>
                    <motion.div
                      className="flex justify-center mt-2"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1, transition: { delay: 0.2 + (index * 0.1), duration: 0.4 } }}
                      viewport={{ once: true, amount: 0.6 }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ y:10, opacity:0 }}
                          animate={{ y:0, opacity:1, transition: {delay: (i*0.05) + 0.3 + (index * 0.1), type: "spring", stiffness:200} }}
                        >
                           <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        </motion.div>
                      ))}
                    </motion.div>
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
