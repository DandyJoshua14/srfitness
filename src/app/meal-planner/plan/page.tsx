
import type { Metadata } from 'next';
import MealPlanDisplay from '@/components/features/meal-planner/meal-plan-display';
import { UtensilsCrossed } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Your Meal Plan - SR Fitness',
  description: 'View your personalized meal plan, recipes, and shopping list.',
};

export default function MealPlanPage() {
  // In a real app, you'd fetch or pass the user's specific plan data here
  const placeholderPlan = {
    dailyPlans: [
      {
        day: "Monday",
        meals: [
          { name: "Breakfast", recipe: "Oatmeal with Berries", calories: 350, protein: 15, carbs: 50, fat: 10, ingredients: ["Oats", "Mixed Berries", "Almond Milk", "Chia Seeds"] },
          { name: "Lunch", recipe: "Chicken Salad Sandwich", calories: 500, protein: 30, carbs: 40, fat: 25, ingredients: ["Chicken Breast", "Whole Wheat Bread", "Lettuce", "Tomato", "Light Mayo"] },
          { name: "Dinner", recipe: "Salmon with Roasted Vegetables", calories: 600, protein: 40, carbs: 45, fat: 30, ingredients: ["Salmon Fillet", "Broccoli", "Carrots", "Olive Oil", "Herbs"] },
          { name: "Snack", recipe: "Greek Yogurt with Nuts", calories: 200, protein: 20, carbs: 15, fat: 8, ingredients: ["Greek Yogurt", "Almonds", "Walnuts"] },
        ],
        dailyTotals: { calories: 1650, protein: 105, carbs: 150, fat: 73 }
      },
      {
        day: "Tuesday",
        meals: [
          { name: "Breakfast", recipe: "Scrambled Eggs with Spinach", calories: 300, protein: 25, carbs: 10, fat: 20, ingredients: ["Eggs", "Spinach", "Whole Wheat Toast"] },
          { name: "Lunch", recipe: "Quinoa Salad with Chickpeas", calories: 450, protein: 20, carbs: 60, fat: 15, ingredients: ["Quinoa", "Chickpeas", "Cucumber", "Bell Peppers", "Lemon Vinaigrette"] },
          { name: "Dinner", recipe: "Lean Beef Stir-fry", calories: 550, protein: 35, carbs: 50, fat: 20, ingredients: ["Lean Beef Strips", "Mixed Vegetables", "Brown Rice", "Soy Sauce"] },
          { name: "Snack", recipe: "Apple with Peanut Butter", calories: 220, protein: 8, carbs: 30, fat: 10, ingredients: ["Apple", "Peanut Butter"] },
        ],
        dailyTotals: { calories: 1520, protein: 88, carbs: 150, fat: 65 }
      },
      // Add more days as needed for a full week
    ]
  };


  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <UtensilsCrossed className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
          Your Personalized Meal Plan
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          Here is your tailored meal plan. Remember to adjust portions based on your specific needs and consult with a nutritionist if needed.
        </p>
      </div>
      <MealPlanDisplay plan={placeholderPlan} />
    </div>
  );
}
