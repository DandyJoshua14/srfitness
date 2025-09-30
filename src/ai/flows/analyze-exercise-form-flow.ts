
'use server';
/**
 * @fileOverview Analyzes user's exercise form from an image and provides feedback.
 *
 * - analyzeExerciseForm - A function that calls the exercise form analysis flow.
 */

import { ai } from '@/ai/genkit';
import {
    AnalyzeExerciseFormInputSchema,
    AnalyzeExerciseFormOutputSchema,
    type AnalyzeExerciseFormInput,
    type AnalyzeExerciseFormOutput
} from '@/ai/schemas/exercise-form-schemas';


// This is the exported function React components will call.
export async function analyzeExerciseForm(input: AnalyzeExerciseFormInput): Promise<AnalyzeExerciseFormOutput> {
  console.log('analyzeExerciseForm called with input for exercise:', input.exerciseName);
  return analyzeExerciseFormFlow(input);
}

// Define the Genkit prompt
const exerciseFormPrompt = ai.definePrompt({
  name: 'exerciseFormPrompt',
  input: { schema: AnalyzeExerciseFormInputSchema },
  output: { schema: AnalyzeExerciseFormOutputSchema },
  prompt: `You are an expert fitness coach specializing in exercise form analysis.
Analyze the provided image of a user performing an exercise.
{{#if exerciseName}}
The user states they are performing: {{exerciseName}}. Focus your analysis on the correctness of this specific exercise.
{{else}}
The user has not specified the exercise. Attempt to identify the exercise if possible, or provide general postural feedback.
{{/if}}

Based on the image, provide:
1.  'feedbackItems': An array of specific, actionable suggestions to improve their form. Be concise and clear. If the form is good for a particular aspect, you can state that too (e.g., "Good spinal alignment.").
2.  'overallAssessment': A brief summary statement about the overall form.
3.  'isFormCorrect': A boolean indicating if the form is generally correct (true) or has notable issues needing correction (false).

Focus on common mistakes and critical safety aspects of the exercise form. If the image quality is too poor or the person is not visible enough to make a proper assessment, indicate this in the overallAssessment and provide an empty feedbackItems array.

User's Exercise Image:
{{media url=imageDataUri}}
`,
});

// Define the Genkit flow
const analyzeExerciseFormFlow = ai.defineFlow(
  {
    name: 'analyzeExerciseFormFlow',
    inputSchema: AnalyzeExerciseFormInputSchema,
    outputSchema: AnalyzeExerciseFormOutputSchema,
  },
  async (input) => {
    const { output } = await exerciseFormPrompt(input);
    if (!output) {
      // Consider returning a default error structure if the AI fails to respond
      return {
        feedbackItems: ["AI analysis failed to generate feedback. Please try again."],
        overallAssessment: "Error: No output from AI.",
        isFormCorrect: false,
      };
    }
    // If AI might return partial output, ensure all fields are present or defaulted
    return {
      feedbackItems: output.feedbackItems || [],
      overallAssessment: output.overallAssessment || "Assessment not provided.",
      isFormCorrect: typeof output.isFormCorrect === 'boolean' ? output.isFormCorrect : false,
    };
  }
);
