
"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Printer, Apple, Beef, Carrot, Drumstick, Salad } from 'lucide-react'; // Added more icons

interface Meal {
  name: string;
  recipe: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  ingredients: string[];
}

interface DailyPlan {
  day: string;
  meals: Meal[];
  dailyTotals: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

interface MealPlan {
  dailyPlans: DailyPlan[];
}

interface MealPlanDisplayProps {
  plan: MealPlan;
}

const mealTypeIcons: { [key: string]: React.ReactNode } = {
  Breakfast: <Apple className="h-5 w-5 text-primary mr-2" />,
  Lunch: <Salad className="h-5 w-5 text-primary mr-2" />,
  Dinner: <Drumstick className="h-5 w-5 text-primary mr-2" />,
  Snack: <Carrot className="h-5 w-5 text-primary mr-2" />,
};

export default function MealPlanDisplay({ plan }: MealPlanDisplayProps) {
  const [activeTab, setActiveTab] = useState(plan.dailyPlans[0]?.day || "Monday");

  const generateShoppingList = () => {
    const allIngredients = new Set<string>();
    plan.dailyPlans.forEach(dailyPlan => {
      dailyPlan.meals.forEach(meal => {
        meal.ingredients.forEach(ingredient => allIngredients.add(ingredient));
      });
    });
    return Array.from(allIngredients);
  };

  const shoppingList = generateShoppingList();

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    let content = "SR Fitness - Shopping List\n\n";
    shoppingList.forEach(item => content += `- ${item}\n`);
    content += "\n\nMeal Plan Details:\n";
    plan.dailyPlans.forEach(dayPlan => {
      content += `\n--- ${dayPlan.day.toUpperCase()} ---\n`;
      dayPlan.meals.forEach(meal => {
        content += `${meal.name}: ${meal.recipe} (Cals: ${meal.calories}, P: ${meal.protein}g, C: ${meal.carbs}g, F: ${meal.fat}g)\n`;
        content += `  Ingredients: ${meal.ingredients.join(', ')}\n`;
      });
      content += `Daily Totals: Cals: ${dayPlan.dailyTotals.calories}, P: ${dayPlan.dailyTotals.protein}g, C: ${dayPlan.dailyTotals.carbs}g, F: ${dayPlan.dailyTotals.fat}g\n`;
    });

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sr_fitness_meal_plan.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };


  return (
    <div className="space-y-8">
      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
        <ScrollArea className="pb-2">
          <TabsList className="mb-4">
            {plan.dailyPlans.map((dailyPlan) => (
              <TabsTrigger key={dailyPlan.day} value={dailyPlan.day} className="font-headline">
                {dailyPlan.day}
              </TabsTrigger>
            ))}
             <TabsTrigger value="shoppingList" className="font-headline">Shopping List</TabsTrigger>
          </TabsList>
        </ScrollArea>

        {plan.dailyPlans.map((dailyPlan) => (
          <TabsContent key={dailyPlan.day} value={dailyPlan.day}>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-3xl text-primary">{dailyPlan.day}'s Meals</CardTitle>
                <CardDescription>
                  Totals - Calories: {dailyPlan.dailyTotals.calories}, Protein: {dailyPlan.dailyTotals.protein}g, Carbs: {dailyPlan.dailyTotals.carbs}g, Fat: {dailyPlan.dailyTotals.fat}g
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {dailyPlan.meals.map((meal) => (
                  <Card key={meal.name} className="bg-muted/30">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl font-semibold text-foreground flex items-center">
                        {mealTypeIcons[meal.name] || <Beef className="h-5 w-5 text-primary mr-2" />}
                        {meal.name}: {meal.recipe}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        Calories: {meal.calories} | Protein: {meal.protein}g | Carbs: {meal.carbs}g | Fat: {meal.fat}g
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-medium text-foreground mb-1">Ingredients:</h4>
                      <ul className="list-disc list-inside text-muted-foreground text-sm space-y-0.5">
                        {meal.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
        
        <TabsContent value="shoppingList">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-3xl text-primary">Shopping List</CardTitle>
              <CardDescription>All ingredients needed for your meal plan this week.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {shoppingList.map((item, index) => (
                  <div key={index} className="p-2 bg-muted/30 rounded text-sm text-foreground">{item}</div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Button onClick={handlePrint} variant="outline" className="w-full sm:w-auto">
                  <Printer className="mr-2 h-4 w-4" /> Print List
                </Button>
                <Button onClick={handleDownload} className="w-full sm:w-auto">
                  <Download className="mr-2 h-4 w-4" /> Download List
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
