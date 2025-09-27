
'use server';
/**
 * @fileOverview Generates a daily fitness tip.
 *
 * - generateFitnessTip - A function that calls the fitness tip generation flow.
 * - GenerateFitnessTipInput - The input type (currently empty).
 * - GenerateFitnessTipOutput - The return type (the tip and category).
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

// Define input schema (currently no specific input needed for a general tip)
const GenerateFitnessTipInputSchema = z.object({
  // Placeholder for potential future inputs like topic preference
  topic: z.string().optional().describe("Optional topic for the fitness tip (e.g., nutrition, cardio, mindset).")
});
export type GenerateFitnessTipInput = z.infer<typeof GenerateFitnessTipInputSchema>;

// Define output schema for the fitness tip
const GenerateFitnessTipOutputSchema = z.object({
  tip: z.string().describe("A concise, practical, and inspiring fitness or wellness tip."),
  category: z.string().optional().describe("Suggested category for the tip (e.g., Nutrition, Exercise, Motivation, Wellness).")
});
export type GenerateFitnessTipOutput = z.infer<typeof GenerateFitnessTipOutputSchema>;

const FALLBACK_TIP = {
    tip: "Stay hydrated! Drinking enough water throughout the day is key to a great workout and overall health.",
    category: "Hydration",
};


// This is the exported function React components will call.
export async function generateFitnessTip(input?: GenerateFitnessTipInput): Promise<GenerateFitnessTipOutput> {
  console.log('generateFitnessTip called with input:', input);
  
  if (!ai || !generateFitnessTipFlow) {
    return FALLBACK_TIP;
  }
  
  return generateFitnessTipFlow(input || {});
}

// Define the Genkit prompt (only if AI is available)
const fitnessTipPrompt = ai ? ai.definePrompt({
  name: 'fitnessTipPrompt',
  input: { schema: GenerateFitnessTipInputSchema },
  output: { schema: GenerateFitnessTipOutputSchema },
  prompt: `You are a friendly and motivating fitness assistant.
  Provide one concise, practical, and inspiring fitness or wellness tip.
  The tip should be easy to understand and actionable.
  {{#if topic}}
  Focus the tip around the topic of: {{topic}}.
  {{/if}}
  Optionally, suggest a category for this tip from: Nutrition, Exercise, Motivation, Wellness, Hydration, Recovery, Mindset.
  Keep the tip itself to 1-2 sentences.
`,
}) : null;

// Define the Genkit flow (only if AI is available)
const generateFitnessTipFlow = ai ? ai.defineFlow(
  {
    name: 'generateFitnessTipFlow',
    inputSchema: GenerateFitnessTipInputSchema,
    outputSchema: GenerateFitnessTipOutputSchema,
  },
  async (input) => {
    try {
        if (!fitnessTipPrompt) {
          throw new Error("AI service not available");
        }
        const { output } = await fitnessTipPrompt(input);
        if (!output) {
          throw new Error("Failed to generate fitness tip from AI.");
        }
        return output;
    } catch (error) {
        console.error("Error in generateFitnessTipFlow:", error);
        // Return a friendly fallback tip if the AI service fails.
        return FALLBACK_TIP;
    }
  }
) : null;

    
