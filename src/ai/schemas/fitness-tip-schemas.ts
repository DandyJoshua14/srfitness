
import { z } from 'genkit';

// Define input schema (currently no specific input needed for a general tip)
export const GenerateFitnessTipInputSchema = z.object({
  // Placeholder for potential future inputs like topic preference
  topic: z.string().optional().describe("Optional topic for the fitness tip (e.g., nutrition, cardio, mindset).")
});
export type GenerateFitnessTipInput = z.infer<typeof GenerateFitnessTipInputSchema>;

// Define output schema for the fitness tip
export const GenerateFitnessTipOutputSchema = z.object({
  tip: z.string().describe("A concise, practical, and inspiring fitness or wellness tip."),
  category: z.string().optional().describe("Suggested category for the tip (e.g., Nutrition, Exercise, Motivation, Wellness).")
});
export type GenerateFitnessTipOutput = z.infer<typeof GenerateFitnessTipOutputSchema>;
