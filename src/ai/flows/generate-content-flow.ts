
'use server';
/**
 * @fileOverview Generates various types of marketing and blog content using AI.
 *
 * - generateStudioContent - A function that calls the content generation flow.
 * - GenerateStudioContentInput - The input type for content generation.
 * - GenerateStudioContentOutput - The return type for the generated content.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

// Input schema for the content studio
const GenerateStudioContentInputSchema = z.object({
  inputText: z.string().optional().describe("The base text, notes, or keywords to generate content from."),
  contentType: z.string().describe("The type of content to generate (e.g., Blog Post, Social Media Post)."),
  tone: z.string().describe("The desired tone of the content (e.g., Informative, Casual, Witty)."),
  length: z.string().describe("The desired length of the content (e.g., Short, Medium, Long)."),
  audience: z.string().optional().describe("The target audience for the content (e.g., Fitness Beginners, Advanced Athletes)."),
  keywords: z.string().optional().describe("Comma-separated keywords to include in the content."),
});
export type GenerateStudioContentInput = z.infer<typeof GenerateStudioContentInputSchema>;

// Output schema for the generated content
const GenerateStudioContentOutputSchema = z.object({
  title: z.string().describe("The generated title or headline for the content."),
  content: z.string().describe("The main body of the generated content (e.g., the blog post text, the script)."),
  socialMediaPost: z.string().optional().describe("A short, engaging social media post to promote the main content."),
});
export type GenerateStudioContentOutput = z.infer<typeof GenerateStudioContentOutputSchema>;


// Exported function for React components to call
export async function generateStudioContent(input: GenerateStudioContentInput): Promise<GenerateStudioContentOutput> {
  return generateStudioContentFlow(input);
}


// Define the Genkit prompt for content generation
const contentStudioPrompt = ai.definePrompt({
  name: 'contentStudioPrompt',
  input: { schema: GenerateStudioContentInputSchema },
  output: { schema: GenerateStudioContentOutputSchema },
  prompt: `You are an expert content creator and copywriter for SR Fitness, a premium fitness brand.
Your task is to generate a compelling "{{contentType}}" based on the user's request.

**Content Request Details:**
- **Base Topic/Keywords:** {{{inputText}}}
- **Desired Tone:** {{tone}}
- **Desired Length:** {{length}}
{{#if audience}}
- **Target Audience:** {{audience}}
{{/if}}
{{#if keywords}}
- **SEO Keywords to include:** {{keywords}}
{{/if}}

**Your Tasks:**
1.  **Generate a 'title':** Create a catchy, engaging title for the content.
2.  **Generate 'content':** Write the main body of the content. It should be well-structured, informative, and perfectly match the requested tone, length, and audience.
3.  **Generate 'socialMediaPost':** Write a short, exciting social media post (e.g., for Instagram or Facebook) to promote this new content. Include relevant hashtags based on the keywords.

Ensure the output is in the specified JSON format.
`,
});

// Define the Genkit flow for content generation
const generateStudioContentFlow = ai.defineFlow(
  {
    name: 'generateStudioContentFlow',
    inputSchema: GenerateStudioContentInputSchema,
    outputSchema: GenerateStudioContentOutputSchema,
  },
  async (input) => {
    const { output } = await contentStudioPrompt(input);
    if (!output) {
      throw new Error("The AI failed to generate content. Please try again with a clearer prompt.");
    }
    return output;
  }
);
