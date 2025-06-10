
"use client";

import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
// import { generateMealPlan, GenerateMealPlanInput } from '@/ai/flows/generate-meal-plan-flow'; // Placeholder

const dietaryPreferences = ["Vegetarian", "Vegan", "Pescatarian", "Gluten-Free", "Dairy-Free", "Keto", "Paleo"];
const activityLevels = ["Sedentary", "Lightly Active", "Moderately Active", "Very Active", "Extra Active"];
const fitnessGoals = ["Weight Loss", "Muscle Gain", "Maintenance", "Improve Endurance", "General Health"];

const formSchema = z.object({
  age: z.coerce.number().min(1, "Age is required").max(120),
  gender: z.enum(["Male", "Female", "Other"], { required_error: "Gender is required" }),
  height: z.coerce.number().min(50, "Height in cm").max(300),
  weight: z.coerce.number().min(20, "Weight in kg").max(500),
  activityLevel: z.enum(activityLevels as [string, ...string[]], { required_error: "Activity level is required" }),
  fitnessGoal: z.enum(fitnessGoals as [string, ...string[]], { required_error: "Fitness goal is required" }),
  dietaryPreferences: z.array(z.string()).optional(),
  allergies: z.string().optional(),
  dislikedFoods: z.string().optional(),
});

export type MealPlanQuestionnaireInput = z.infer<typeof formSchema>;

export default function QuestionnaireForm() {
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<MealPlanQuestionnaireInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: undefined,
      gender: undefined,
      height: undefined,
      weight: undefined,
      activityLevel: undefined,
      fitnessGoal: undefined,
      dietaryPreferences: [],
      allergies: "",
      dislikedFoods: "",
    },
  });

  async function onSubmit(values: MealPlanQuestionnaireInput) {
    setIsLoading(true);
    console.log("Questionnaire submitted:", values);

    // Placeholder for AI call
    // const aiInput: GenerateMealPlanInput = {
    //   age: values.age,
    //   gender: values.gender,
    //   height: values.height,
    //   weight: values.weight,
    //   activityLevel: values.activityLevel,
    //   fitnessGoal: values.fitnessGoal,
    //   preferences: values.dietaryPreferences?.join(', ') || 'None',
    //   allergies: values.allergies || 'None',
    //   dislikedFoods: values.dislikedFoods || 'None',
    // };

    try {
      // const mealPlan = await generateMealPlan(aiInput); // Call Genkit flow
      // console.log("Generated Meal Plan:", mealPlan);
      // For now, simulate success and redirect
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call

      toast({
        title: "Preferences Saved!",
        description: "Generating your personalized meal plan...",
      });
      // Store preferences or pass to plan page (e.g. via state management or query params for simple demo)
      // For demo, we'll just redirect. The plan page will show placeholder data.
      router.push('/meal-planner/plan');
    } catch (error) {
      console.error("Error generating meal plan:", error);
      toast({
        title: "Error",
        description: "Could not generate meal plan. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-foreground">Tell Us About Yourself</CardTitle>
        <CardDescription>
          This information will help us create a meal plan tailored to your needs.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Age</FormLabel>
                    <FormControl><Input type="number" placeholder="Your Age" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl><SelectTrigger><SelectValue placeholder="Select Gender" /></SelectTrigger></FormControl>
                      <SelectContent>
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="height"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Height (cm)</FormLabel>
                    <FormControl><Input type="number" placeholder="e.g., 175" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Weight (kg)</FormLabel>
                    <FormControl><Input type="number" placeholder="e.g., 70" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="activityLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Activity Level</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl><SelectTrigger><SelectValue placeholder="Select Activity Level" /></SelectTrigger></FormControl>
                    <SelectContent>
                      {activityLevels.map(level => <SelectItem key={level} value={level}>{level}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fitnessGoal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Primary Fitness Goal</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl><SelectTrigger><SelectValue placeholder="Select Fitness Goal" /></SelectTrigger></FormControl>
                    <SelectContent>
                      {fitnessGoals.map(goal => <SelectItem key={goal} value={goal}>{goal}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dietaryPreferences"
              render={() => (
                <FormItem>
                  <FormLabel>Dietary Preferences (select all that apply)</FormLabel>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {dietaryPreferences.map((item) => (
                      <FormField
                        key={item}
                        control={form.control}
                        name="dietaryPreferences"
                        render={({ field }) => {
                          return (
                            <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...(field.value || []), item])
                                      : field.onChange(
                                          (field.value || []).filter(
                                            (value) => value !== item
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">{item}</FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="allergies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Allergies (comma-separated)</FormLabel>
                  <FormControl><Input placeholder="e.g., Peanuts, Shellfish" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dislikedFoods"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Disliked Foods (comma-separated)</FormLabel>
                  <FormControl><Textarea placeholder="e.g., Mushrooms, Olives" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" className="w-full font-headline" disabled={isLoading}>
              {isLoading ? 'Generating Plan...' : 'Get My Meal Plan'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
