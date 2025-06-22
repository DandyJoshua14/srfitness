
'use server';
/**
 * @fileOverview A voice agent flow that responds to user queries.
 *
 * - generateVoiceResponse - A function that handles the voice agent's response generation.
 * - VoiceAgentInput - The input type for the voice agent.
 * - VoiceAgentOutput - The return type for the voice agent.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const VoiceAgentInputSchema = z.object({
  query: z.string().describe("The user's spoken query, transcribed to text."),
});
export type VoiceAgentInput = z.infer<typeof VoiceAgentInputSchema>;

const VoiceAgentOutputSchema = z.object({
  response: z.string().describe("The AI's text response to be spoken back to the user."),
});
export type VoiceAgentOutput = z.infer<typeof VoiceAgentOutputSchema>;

export async function generateVoiceResponse(input: VoiceAgentInput): Promise<VoiceAgentOutput> {
  return generateVoiceResponseFlow(input);
}

const prompt = ai.definePrompt({
  name: 'voiceAgentPrompt',
  input: { schema: VoiceAgentInputSchema },
  output: { schema: VoiceAgentOutputSchema },
  prompt: `You are SR-VOICE, a friendly and helpful voice assistant for the SR Fitness application.
  Your role is to answer user questions about fitness, nutrition, our services (Personal Training, Burn Off Bootcamp), or general inquiries.
  Be conversational, encouraging, and keep your answers concise and clear, as they will be spoken aloud.
  If you don't know an answer, say so politely.

  User query: {{{query}}}
  `,
});

const generateVoiceResponseFlow = ai.defineFlow(
  {
    name: 'generateVoiceResponseFlow',
    inputSchema: VoiceAgentInputSchema,
    outputSchema: VoiceAgentOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      return { response: "I'm sorry, I had a problem thinking of a response. Please try again." };
    }
    return output;
  }
);
