"use client"; // Required for useEffect and localStorage

import { useEffect, useState } from 'react';
import MealPlanDisplay from '@/components/features/meal-planner/meal-plan-display';
import { UtensilsCrossed, Info, Loader2 } from 'lucide-react';
import { GenerateMealPlanOutput } from '@/ai/flows/generate-meal-plan-flow';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Placeholder data for when no plan is found or for initial render
const placeholderPlan: GenerateMealPlanOutput = {
  dailyPlans: [
    {
      day: "Sample Day",
      meals: [
        { name: "Breakfast", recipe: "Balanced Oatmeal", calories: 350, protein: 15, carbs: 50, fat: 10, ingredients: ["Rolled Oats", "Berries", "Nuts", "Milk"], instructions: "1. Combine oats and milk in a pot. \n2. Cook on medium heat until thick. \n3. Top with berries and nuts." },
        { name: "Lunch", recipe: "Grilled Chicken Salad", calories: 500, protein: 40, carbs: 30, fat: 25, ingredients: ["Chicken Breast", "Mixed Greens", "Vegetables", "Olive Oil Dressing"], instructions: "1. Grill chicken breast until cooked through. \n2. Chop vegetables and combine with mixed greens. \n3. Slice chicken and add to the salad. \n4. Drizzle with olive oil dressing." },
        { name: "Dinner", recipe: "Baked Salmon with Quinoa", calories: 600, protein: 45, carbs: 50, fat: 28, ingredients: ["Salmon Fillet", "Quinoa", "Steamed Asparagus"], instructions: "1. Preheat oven to 400°F (200°C). Season salmon with herbs, salt, and pepper. \n2. Bake salmon for 12-15 minutes. \n3. Cook quinoa according to package directions. \n4. Steam asparagus until tender-crisp." },
      ],
      dailyTotals: { calories: 1450, protein: 100, carbs: 130, fat: 63 }
    }
  ],
  summary: "This is a sample meal plan. Generate your own for a personalized experience!"
};


export default function MealPlanPage() {
  const [mealPlan, setMealPlan] = useState<GenerateMealPlanOutput | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem('srFitnessMealPlan');
      if (storedPlan) {
        const parsedPlan = JSON.parse(storedPlan);
        // Basic validation of the parsed plan structure
        if (parsedPlan && parsedPlan.dailyPlans && Array.isArray(parsedPlan.dailyPlans)) {
           setMealPlan(parsedPlan);
        } else {
          console.warn("Stored meal plan has invalid structure.");
          setError("The stored meal plan data appears to be corrupted. Please try generating a new one.");
          setMealPlan(placeholderPlan); // Fallback to placeholder
        }
      } else {
        setError("No meal plan found. Please generate one first.");
        setMealPlan(placeholderPlan); // Fallback to placeholder
      }
    } catch (e) {
      console.error("Error loading meal plan from localStorage:", e);
      setError("Could not load your meal plan. Please try generating a new one.");
      setMealPlan(placeholderPlan); // Fallback to placeholder in case of any error
    } finally {
      setIsLoading(false);
    }
  }, []);


  if (isLoading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col items-center justify-center min-h-[60vh]">
        <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
        <p className="text-lg text-muted-foreground">Loading your meal plan...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <UtensilsCrossed className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
          Your Personalized Meal Plan
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          {mealPlan && mealPlan !== placeholderPlan 
            ? "Here is your tailored meal plan. Remember to adjust portions and consult a professional if needed." 
            : "View your sample plan below, or generate a new one."}
        </p>
      </div>

      {error && mealPlan === placeholderPlan && (
         <Alert variant="destructive" className="mb-8 max-w-2xl mx-auto">
          <Info className="h-4 w-4" />
          <AlertTitle>Plan Not Available</AlertTitle>
          <AlertDescription>
            {error}
            <Button asChild variant="link" className="p-0 h-auto ml-1 text-destructive hover:underline">
              <Link href="/meal-planner">Generate a New Plan</Link>
            </Button>
          </AlertDescription>
        </Alert>
      )}
      
      {/* Render MealPlanDisplay with either the fetched plan or the placeholder */}
      <MealPlanDisplay plan={mealPlan || placeholderPlan} />

      <div className="mt-12 text-center">
        <Button asChild size="lg" className="font-headline">
          <Link href="/meal-planner">
            {mealPlan && mealPlan !== placeholderPlan ? "Generate a New Plan" : "Create Your Personalized Plan"}
          </Link>
        </Button>
      </div>
    </div>
  );
}
