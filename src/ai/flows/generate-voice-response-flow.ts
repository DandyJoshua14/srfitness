'use server';
/**
 * @fileOverview A voice agent flow that responds to user queries and can navigate the site.
 */

import { ai } from '@/ai/genkit'; // Ensure this exists in your project
import { z } from 'genkit';

// ====================
// SCHEMAS
// ====================

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

// ====================
// VALID PATHS & TOOLS
// ====================

const validPaths = [
  '/', '/personal-training', '/burn-off-bootcamp', '/awards',
  '/lifestyle-magazine', '/public-speaking', '/equipment-services', '/#contact',
  '/meal-planner', '/Smart Scan', '/global-connect', '/community', '/profile',
  '/privacy-policy', '/terms-of-service', '/corporate-wellness', '/marketplace'
] as const;

const navigateToPage = ai.defineTool(
  {
    name: 'navigateToPage',
    description: 'Navigates the user to a specific SR Fitness page.',
    inputSchema: z.object({
      path: z.enum(validPaths),
      pageName: z.string().describe("Friendly name of the page for confirmation."),
    }),
    outputSchema: z.string(),
  },
  async ({ path }) => `Navigating to ${path}`
);

// ====================
// PROMPT
// ====================

const prompt = ai.definePrompt({
  name: 'voiceAgentPrompt',
  input: { schema: VoiceAgentInputSchema },
  output: { schema: VoiceAgentOutputSchema },
  tools: [navigateToPage],
  prompt: `You are Ninna, a friendly and helpful voice assistant for SR Fitness.
Answer questions about fitness, nutrition, services, or general inquiries.
If the user wants navigation (e.g., "go to", "open"), use the navigateToPage tool.
If no navigation, respond normally with text. Keep answers short and clear.

User query: {{{query}}}`,
});

// ====================
// FLOW LOGIC
// ====================

export async function generateVoiceResponse(input: VoiceAgentInput): Promise<VoiceAgentOutput> {
  return generateVoiceResponseFlow(input);
}

const generateVoiceResponseFlow = ai.defineFlow(
  {
    name: 'generateVoiceResponseFlow',
    inputSchema: VoiceAgentInputSchema,
    outputSchema: VoiceAgentOutputSchema,
  },
  async (input: VoiceAgentInput): Promise<VoiceAgentOutput> => {
    const response = await prompt(input);

    // Safe type checks
    const toolCalls = (response as any)?.toolCalls ?? [];
    const navigateCall = toolCalls.find((call: { name: string }) => call.name === 'navigateToPage');

    if (navigateCall) {
      const { path, pageName } = navigateCall.input as { path: string; pageName: string };
      return { response: `Of course, taking you to ${pageName} now.`, navigationPath: path };
    }

    if ((response as any)?.response) {
      return {
        response: (response as any).response,
        navigationPath: (response as any).navigationPath || null,
      };
    }

    if (typeof response === 'string') {
      return { response, navigationPath: null };
    }

    return { response: "I'm sorry, I had a problem thinking of a response.", navigationPath: null };
  }
);
