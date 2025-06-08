
"use client";

import { membershipPlans } from '@/lib/data';
import type { MembershipPlan } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Zap, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function MembershipPlansSection() {
  return (
    <section id="memberships" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <Zap className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
            Membership Plans
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan to kickstart your fitness journey with SR Fitness. All plans come with our commitment to your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {membershipPlans.map((plan) => (
            <Card
              key={plan.id}
              className={cn(
                "flex flex-col border-2 shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl group",
                plan.isPopular ? "border-primary bg-primary/5" : "border-border bg-card"
              )}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-primary text-primary-foreground shadow-md">
                    <Star className="h-4 w-4 mr-1.5" />
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="pt-10 pb-6 text-center">
                {plan.icon && <plan.icon className={cn("h-12 w-12 mx-auto mb-4", plan.isPopular ? "text-primary" : "text-muted-foreground group-hover:text-primary transition-colors")} />}
                <CardTitle className="font-headline text-3xl text-foreground">{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="font-headline text-4xl text-primary font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.priceFrequency.replace('per ', '')}</span>
                </div>
                <CardDescription className="text-muted-foreground mt-2 min-h-[40px]">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow px-6 pb-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  size="lg"
                  className={cn(
                    "w-full font-headline text-lg py-3 transition-all duration-300 ease-in-out",
                    plan.isPopular ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "bg-secondary hover:bg-secondary/80 text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground"
                  )}
                >
                  {plan.ctaText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
