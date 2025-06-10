
import type { Metadata } from 'next';
import QuestionnaireForm from '@/components/features/meal-planner/questionnaire-form';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { NotebookText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Personalized Meal Planner - SR Fitness',
  description: 'Get a custom meal plan tailored to your dietary needs and fitness goals.',
};

export default function MealPlannerPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <NotebookText className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
          Personalized Meal Planner
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          Answer a few questions to generate a personalized meal plan designed to help you achieve your fitness and dietary goals.
        </p>
      </div>

      <QuestionnaireForm />

      <Separator className="my-12 md:my-16" />

      <div className="text-center">
        <h2 className="font-headline text-3xl text-foreground font-semibold mb-6">
          Already have a plan?
        </h2>
        <Button asChild size="lg" className="font-headline text-xl">
          <Link href="/meal-planner/plan">View Your Meal Plan</Link>
        </Button>
      </div>
    </div>
  );
}
