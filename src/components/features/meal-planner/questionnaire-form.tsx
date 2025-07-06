
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
import { generateMealPlan, GenerateMealPlanInput } from '@/ai/flows/generate-meal-plan-flow'; 
import { Loader2 } from 'lucide-react';

const dietaryPreferences = ["Vegetarian", "Vegan", "Pescatarian", "Gluten-Free", "Dairy-Free", "Keto", "Paleo", "None"];
const activityLevels = ["Sedentary (little or no exercise)", "Lightly Active (light exercise/sports 1-3 days/week)", "Moderately Active (moderate exercise/sports 3-5 days/week)", "Very Active (hard exercise/sports 6-7 days a week)", "Extra Active (very hard exercise/sports & physical job)"];
const fitnessGoals = ["Weight Loss", "Muscle Gain", "Maintenance", "Improve Endurance", "General Health & Wellness"];

const formSchema = z.object({
  age: z.coerce.number().min(16, "Must be at least 16 years old").max(100, "Age seems high, please verify."),
  gender: z.enum(["Male", "Female", "Other"], { required_error: "Gender is required" }),
  height: z.coerce.number().min(100, "Height in cm (e.g., 175)").max(250, "Height seems unusual, please verify."),
  weight: z.coerce.number().min(30, "Weight in kg (e.g., 70)").max(300, "Weight seems unusual, please verify."),
  activityLevel: z.enum(activityLevels as [string, ...string[]], { required_error: "Activity level is required" }),
  fitnessGoal: z.enum(fitnessGoals as [string, ...string[]], { required_error: "Fitness goal is required" }),
  numberOfDays: z.coerce.number().min(1).max(7).default(3),
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
      activityLevel: activityLevels[2], // Default to Moderately Active
      fitnessGoal: fitnessGoals[0], // Default to Weight Loss
      numberOfDays: 3,
      dietaryPreferences: [],
      allergies: "",
      dislikedFoods: "",
    },
  });

  async function onSubmit(values: MealPlanQuestionnaireInput) {
    setIsLoading(true);
    console.log("Questionnaire submitted:", values);

    const aiInput: GenerateMealPlanInput = {
      age: values.age,
      gender: values.gender,
      height: values.height,
      weight: values.weight,
      activityLevel: values.activityLevel,
      fitnessGoal: values.fitnessGoal,
      numberOfDays: values.numberOfDays,
      preferences: values.dietaryPreferences?.includes("None") ? undefined : values.dietaryPreferences?.join(', ') || undefined,
      allergies: values.allergies || undefined,
      dislikedFoods: values.dislikedFoods || undefined,
    };

    try {
      const mealPlan = await generateMealPlan(aiInput); // Call Genkit flow
      console.log("Generated Meal Plan:", mealPlan);
      
      // Store the generated plan in localStorage to pass to the plan display page
      localStorage.setItem('srFitnessMealPlan', JSON.stringify(mealPlan));

      toast({
        title: "Meal Plan Generated!",
        description: "Your personalized meal plan is ready. Redirecting...",
        duration: 3000,
      });
      
      router.push('/meal-planner/plan');

    } catch (error) {
      console.error("Error generating meal plan:", error);
      let errorMessage = "Could not generate meal plan. Please try again.";
      if (error instanceof Error) {
        errorMessage = error.message.includes("blocked") ? "Content generation was blocked due to safety settings. Please adjust your input." : error.message;
      }
      toast({
        title: "Error Generating Plan",
        description: errorMessage,
        variant: "destructive",
        duration: 7000,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="max-w-2xl mx-auto shadow-xl border-primary/20">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary">Tell Us About Yourself</CardTitle>
        <CardDescription>
          This information will help our AI create a meal plan tailored to your needs.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-8">
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Age</FormLabel>
                    <FormControl><Input type="number" placeholder="Your Age (e.g., 30)" {...field} value={field.value ?? ""} /></FormControl>
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
                        <SelectItem value="Other">Prefer not to say / Other</SelectItem>
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
                    <FormControl><Input type="number" placeholder="e.g., 175" {...field} value={field.value ?? ""} /></FormControl>
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
                    <FormControl><Input type="number" placeholder="e.g., 70" {...field} value={field.value ?? ""} /></FormControl>
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
                name="numberOfDays"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meal Plan Duration (Days)</FormLabel>
                    <Select onValueChange={(value) => field.onChange(parseInt(value))} defaultValue={String(field.value)}>
                      <FormControl><SelectTrigger><SelectValue placeholder="Select number of days" /></SelectTrigger></FormControl>
                      <SelectContent>
                        {[1,2,3,4,5,6,7].map(day => <SelectItem key={day} value={String(day)}>{day} Day{day > 1 ? 's' : ''}</SelectItem>)}
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
                  <FormLabel>Dietary Preferences (select all that apply, or 'None')</FormLabel>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3">
                    {dietaryPreferences.map((item) => (
                      <FormField
                        key={item}
                        control={form.control}
                        name="dietaryPreferences"
                        render={({ field }) => {
                          return (
                            <FormItem className="flex flex-row items-center space-x-2.5 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item)}
                                  onCheckedChange={(checked) => {
                                    let newValue = field.value ? [...field.value] : [];
                                    if (checked) {
                                      if (item === "None") { // If "None" is checked, uncheck others and set only "None"
                                        newValue = ["None"];
                                      } else { // If other item is checked, uncheck "None" and add item
                                        newValue = newValue.filter(v => v !== "None");
                                        newValue.push(item);
                                      }
                                    } else { // Unchecking an item
                                      newValue = newValue.filter((value) => value !== item);
                                      if (newValue.length === 0) { // If unchecking last item, default to "None" or empty as preferred
                                        // newValue = ["None"]; // Option: default to None
                                      }
                                    }
                                    field.onChange(newValue);
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal text-sm">{item}</FormLabel>
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
                  <FormLabel>Food Allergies (comma-separated, e.g., Peanuts, Shellfish)</FormLabel>
                  <FormControl><Input placeholder="Leave blank if none" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dislikedFoods"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Disliked Foods (comma-separated, e.g., Mushrooms, Olives)</FormLabel>
                  <FormControl><Textarea placeholder="Leave blank if none" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" className="w-full font-headline text-lg py-3.5" disabled={isLoading}>
              {isLoading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Generating Your Plan...</> : 'Get My Meal Plan'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
