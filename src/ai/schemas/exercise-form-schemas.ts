
import { z } from 'genkit';

// Define input schema for the exercise form analysis
export const AnalyzeExerciseFormInputSchema = z.object({
  imageDataUri: z
    .string()
    .describe(
      "A still image of the user performing an exercise, as a data URI. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  exerciseName: z.string().optional().describe('The name of the exercise being performed (e.g., Squat, Push-up, Lunge).'),
});
export type AnalyzeExerciseFormInput = z.infer<typeof AnalyzeExerciseFormInputSchema>;

// Define output schema for the form analysis feedback
export const AnalyzeExerciseFormOutputSchema = z.object({
  feedbackItems: z.array(z.string()).describe("Specific, actionable feedback points to correct the user's form. Each item should be a concise suggestion."),
  overallAssessment: z.string().optional().describe("A brief overall assessment of the user's form (e.g., Good, Needs Improvement, Pay attention to...)."),
  isFormCorrect: z.boolean().optional().describe("A boolean indicating if the overall form is considered correct or if there are significant issues."),
});
export type AnalyzeExerciseFormOutput = z.infer<typeof AnalyzeExerciseFormOutputSchema>;
