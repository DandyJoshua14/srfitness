
import { z } from 'genkit';

export const VoiceAgentInputSchema = z.object({
  query: z.string().describe("The user's spoken query, transcribed to text."),
});
export type VoiceAgentInput = z.infer<typeof VoiceAgentInputSchema>;

export const VoiceAgentOutputSchema = z.object({
  response: z.string().describe("The AI's text response to be spoken back to the user."),
  navigationPath: z
    .string()
    .nullable()
    .optional()
    .describe("Optional path to navigate on the website. Null if no navigation required."),
});
export type VoiceAgentOutput = z.infer<typeof VoiceAgentOutputSchema>;
