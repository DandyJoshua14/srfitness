
'use server';
/**
 * @fileOverview Generates a personalized meal plan based on user inputs.
 *
 * - generateMealPlan - A function that calls the meal plan generation flow.
 * - GenerateMealPlanInput - The input type for the meal plan generation.
 * - GenerateMealPlanOutput - The return type (the meal plan).
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

// Define input schema based on QuestionnaireForm
const GenerateMealPlanInputSchema = z.object({
  age: z.coerce.number().describe("User's age in years."),
  gender: z.string().describe("User's gender (e.g., Male, Female, Other)."),
  height: z.coerce.number().describe("User's height in centimeters."),
  weight: z.coerce.number().describe("User's weight in kilograms."),
  activityLevel: z.string().describe("User's general activity level (e.g., Sedentary, Lightly Active, Moderately Active, Very Active, Extra Active)."),
  fitnessGoal: z.string().describe("User's primary fitness goal (e.g., Weight Loss, Muscle Gain, Maintenance)."),
  preferences: z.string().optional().describe("User's dietary preferences, comma-separated (e.g., Vegetarian, Gluten-Free)."),
  allergies: z.string().optional().describe("User's food allergies, comma-separated (e.g., Peanuts, Shellfish)."),
  dislikedFoods: z.string().optional().describe("Foods the user dislikes, comma-separated (e.g., Mushrooms, Olives)."),
  numberOfDays: z.coerce.number().min(1).max(7).default(7).describe("Number of days for the meal plan (1-7).")
});
export type GenerateMealPlanInput = z.infer<typeof GenerateMealPlanInputSchema>;

// Define output schema for the meal plan
const MealSchema = z.object({
  name: z.string().describe("Name of the meal (e.g., Breakfast, Lunch, Dinner, Snack)."),
  recipe: z.string().describe("Creative and appealing name of the recipe or dish."),
  calories: z.coerce.number().describe("Estimated calories for the meal."),
  protein: z.coerce.number().describe("Estimated protein in grams."),
  carbs: z.coerce.number().describe("Estimated carbohydrates in grams."),
  fat: z.coerce.number().describe("Estimated fat in grams."),
  ingredients: z.array(z.string()).describe("List of main ingredients for the recipe."),
  instructions: z.string().describe("Simple, step-by-step cooking instructions for the recipe."),
});

const DailyPlanSchema = z.object({
  day: z.string().describe("Day of the week (e.g., Monday, Tuesday)."),
  meals: z.array(MealSchema).describe("List of meals for the day."),
  dailyTotals: z.object({
    calories: z.coerce.number().describe("Total estimated calories for the day."),
    protein: z.coerce.number().describe("Total estimated protein for the day."),
    carbs: z.coerce.number().describe("Total estimated carbohydrates for the day."),
    fat: z.coerce.number().describe("Total estimated fat for the day."),
  }).describe("Aggregated nutritional information for the day.")
});

const GenerateMealPlanOutputSchema = z.object({
  dailyPlans: z.array(DailyPlanSchema).describe("An array of daily meal plans, typically for a week."),
  summary: z.string().optional().describe("A brief summary or any important notes about the meal plan.")
});
export type GenerateMealPlanOutput = z.infer<typeof GenerateMealPlanOutputSchema>;


// This is the exported function React components will call.
export async function generateMealPlan(input: GenerateMealPlanInput): Promise<GenerateMealPlanOutput> {
  console.log('generateMealPlan called with input:', input);
  return generateMealPlanFlow(input);
}

// Define the Genkit prompt
const mealPlanPrompt = ai.definePrompt({
  name: 'mealPlanPrompt',
  input: { schema: GenerateMealPlanInputSchema },
  output: { schema: GenerateMealPlanOutputSchema },
  prompt: `You are an expert nutritionist and world-class chef, powered by Google's Gemini model. Your mission is to generate an exciting, delicious, and effective personalized meal plan for {{numberOfDays}} days based on the following user profile:
Age: {{age}}
Gender: {{gender}}
Height: {{height}} cm
Weight: {{weight}} kg
Activity Level: {{activityLevel}}
Primary Fitness Goal: {{fitnessGoal}}
Dietary Preferences: {{preferences}}
Allergies: {{allergies}}
Disliked Foods: {{dislikedFoods}}

For each day, provide a list of meals (Breakfast, Lunch, Dinner, and optionally 1-2 Snacks).
For each meal, include:
- A creative and appealing recipe name.
- Estimated calories, protein (grams), carbohydrates (grams), and fat (grams).
- A list of main ingredients.
- Simple, step-by-step cooking instructions.

Also, calculate and provide daily total calories, protein, carbs, and fat for each day.
Ensure the meal plan is balanced, varied, and aligned with the user's fitness goal and preferences. Be creative and avoid repetitive meals.
If dietary preferences like Vegetarian or Vegan are specified, ensure all meals comply.
Strictly avoid any listed allergies and disliked foods.
Provide a brief summary or any important notes about the meal plan if necessary.
Output the plan in the specified JSON format, ensuring every meal object includes the 'instructions' field.
`,
});

// Define the Genkit flow
const generateMealPlanFlow = ai.defineFlow(
  {
    name: 'generateMealPlanFlow',
    inputSchema: GenerateMealPlanInputSchema,
    outputSchema: GenerateMealPlanOutputSchema,
  },
  async (input) => {
    const {output} = await mealPlanPrompt(input);
    if (!output) {
      throw new Error("Failed to generate meal plan from AI.");
    }
    return output;
  }
);
