
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const featuredProducts = [
  { id: 'prod3', name: 'Men\'s Performance Tee', category: 'Apparel', price: 45.00, image: 'https://placehold.co/600x600.png', dataAiHint: 'men fitness shirt', rating: 5 },
  { id: 'prod4', name: 'Women\'s Flex Leggings', category: 'Apparel', price: 65.00, image: 'https://placehold.co/600x600.png', dataAiHint: 'women leggings gym', rating: 5, isNew: true },
  { id: 'prod6', name: 'SR-21 Pre-Workout Fuel', category: 'Supplements', price: 39.99, image: 'https://placehold.co/600x600.png', dataAiHint: 'supplement powder tub', rating: 4 },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export default function MarketplaceHighlightSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <ShoppingCart className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
            Shop Our Featured Gear
          </h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
            Elevate your workout with our curated selection of premium apparel and supplements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
            >
              <Card className="h-full flex flex-col overflow-hidden group transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl hover:border-primary/50 bg-card text-card-foreground">
                <CardHeader className="p-0 relative">
                    <Link href="/marketplace" className="block aspect-square w-full relative overflow-hidden">
                        <Image 
                        src={product.image}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-500 group-hover:scale-110"
                        data-ai-hint={product.dataAiHint}
                        />
                    </Link>
                  {product.isNew && <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">NEW</Badge>}
                </CardHeader>
                <CardContent className="p-4 flex-grow">
                  <Badge variant="secondary" className="mb-2 text-xs">{product.category}</Badge>
                  <CardTitle className="text-lg font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                     <Link href="/marketplace">{product.name}</Link>
                  </CardTitle>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between items-center">
                    <p className="text-xl font-bold text-primary">${product.price.toFixed(2)}</p>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < product.rating ? 'text-amber-400 fill-amber-400' : 'text-muted-foreground/30'}`} />
                      ))}
                    </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            <Button asChild size="lg" className="group font-headline text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                <Link href="/marketplace">
                    Explore the Marketplace <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </Button>
        </motion.div>

      </div>
    </section>
  );
}
