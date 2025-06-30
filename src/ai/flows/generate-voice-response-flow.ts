
'use server';
/**
 * @fileOverview A voice agent flow that responds to user queries and can navigate the site.
 *
 * - generateVoiceResponse - A function that handles the voice agent's response generation.
 * - VoiceAgentInput - The input type for the voice agent.
 * - VoiceAgentOutput - The return type for the voice agent, now including an optional navigation path.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const VoiceAgentInputSchema = z.object({
  query: z.string().describe("The user's spoken query, transcribed to text."),
});
export type VoiceAgentInput = z.infer<typeof VoiceAgentInputSchema>;

const VoiceAgentOutputSchema = z.object({
  response: z.string().describe("The AI's text response to be spoken back to the user."),
  navigationPath: z.string().nullable().optional().describe("An optional path to navigate to on the website (e.g., '/awards', '/meal-planner'). Should be null or omitted if no navigation is required."),
});
export type VoiceAgentOutput = z.infer<typeof VoiceAgentOutputSchema>;

// Define valid navigation paths
const validPaths = [
    '/', '/personal-training', '/burn-off-bootcamp', '/awards', 
    '/lifestyle-magazine', '/public-speaking', '/equipment-services', '/#contact',
    '/meal-planner', '/smart-mirror', '/global-connect', '/community', '/profile', 
    '/privacy-policy', '/terms-of-service'
] as const;

// Define the navigation tool
const navigateToPage = ai.defineTool(
    {
      name: 'navigateToPage',
      description: 'Use this tool to navigate the user to a specific page on the SR Fitness website when they ask to go somewhere. Use it for requests like "go to", "take me to", "open", "show me", etc.',
      inputSchema: z.object({
        path: z.enum(validPaths).describe("The page path to navigate to."),
        pageName: z.string().describe("The friendly name of the page for confirmation message, e.g., 'the awards page', 'your profile'.")
      }),
      outputSchema: z.string(),
    },
    async ({ path }) => `Navigating to ${path}`
);


export async function generateVoiceResponse(input: VoiceAgentInput): Promise<VoiceAgentOutput> {
  return generateVoiceResponseFlow(input);
}

const prompt = ai.definePrompt({
  name: 'voiceAgentPrompt',
  input: { schema: VoiceAgentInputSchema },
  output: { schema: VoiceAgentOutputSchema },
  tools: [navigateToPage],
  prompt: `You are Ninna, a friendly and helpful voice assistant for the SR Fitness application.
  Your role is to answer user questions about fitness, nutrition, our services, or general inquiries.
  If the user asks to navigate to a page, you MUST use the navigateToPage tool.
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
    const response = await prompt(input);

    const toolCalls = response.toolCalls;
    if (toolCalls && toolCalls.length > 0) {
        const navigateCall = toolCalls.find(call => call.tool === 'navigateToPage');
        if (navigateCall) {
            const { path, pageName } = navigateCall.input as { path: string; pageName: string };
            return {
                response: `Of course, taking you to ${pageName} now.`,
                navigationPath: path,
            };
        }
    }
    
    // If no navigation tool was called, the LLM should have generated a structured response.
    const output = response.output;
    if (!output) {
      return { response: "I'm sorry, I had a problem thinking of a response. Please try again.", navigationPath: null };
    }
    
    // The `output` is already a valid `VoiceAgentOutput` object due to the prompt's schema validation.
    return output;
  }
);
