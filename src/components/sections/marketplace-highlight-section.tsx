/* eslint-disable */
// @ts-nocheck
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star, ArrowRight, Sparkles, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';
import { placeholderProducts } from '@/lib/placeholder-data';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
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
  const featuredProducts = React.useMemo(() => placeholderProducts.slice(0, 3), []);
  
  return (
    <section className="py-20 md:py-32 bg-secondary/50 relative overflow-hidden text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-14 md:mb-18"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            <ShoppingCart className="h-3.5 w-3.5" />
            <span>Official SR Store</span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            Gear Up With <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-amber-500">Premium Fitness Essentials</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Engineered for high performance. Discover our curated collection of activewear, training gear, and clean nutritional supplements.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              className="h-full"
            >
              <Card className="h-full flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:border-primary/50 bg-card border-border/80 rounded-2xl">
                
                {/* Product Image */}
                <CardHeader className="p-0 relative">
                  <Link href="/marketplace" className="block aspect-[4/3] w-full relative overflow-hidden bg-muted">
                    <Image 
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>

                  {product.isNew && (
                    <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground font-bold shadow-md">
                      NEW
                    </Badge>
                  )}
                </CardHeader>

                {/* Info */}
                <CardContent className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <Badge variant="secondary" className="mb-2.5 text-[11px] font-semibold bg-muted text-muted-foreground">
                      {product.category}
                    </Badge>

                    <CardTitle className="text-lg font-headline font-bold text-foreground leading-snug group-hover:text-primary transition-colors mb-3">
                      <Link href="/marketplace">{product.name}</Link>
                    </CardTitle>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/60 mt-4">
                    <div>
                      <span className="text-xs text-muted-foreground block">Price</span>
                      <p className="text-xl font-extrabold text-primary font-headline">
                        ₦{product.price.toLocaleString()}
                      </p>
                    </div>

                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-3.5 w-3.5 ${i < product.rating ? 'text-amber-400 fill-amber-400' : 'text-muted-foreground/30'}`} 
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>

                {/* Footer Action */}
                <CardFooter className="p-6 pt-0">
                  <Button asChild className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground font-semibold rounded-xl transition-colors">
                    <Link href="/marketplace">
                      View Product Details
                    </Link>
                  </Button>
                </CardFooter>

              </Card>
            </motion.div>
          ))}
        </div>

        {/* Guarantees Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-14 pt-8 border-t border-border/70 text-center">
          <div className="flex items-center justify-center gap-3">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-foreground">100% Authentic Quality Gear</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Truck className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-foreground">Fast Nationwide Delivery</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <RotateCcw className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-foreground">Hassle-Free Exchanges</span>
          </div>
        </div>
        
        {/* Main CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button asChild size="lg" className="font-headline text-base bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg shadow-primary/20 px-8 py-6 rounded-xl group">
            <Link href="/marketplace">
              Explore All Gear & Supplements
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>

      </div>
    </section>
  );
}

