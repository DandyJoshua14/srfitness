
'use server';
/**
 * @fileOverview A content generation AI flow for the Admin Content Studio.
 *
 * - generateStudioContent - Generates content based on various inputs.
 * - GenerateStudioContentInput - The input type for the content generation.
 * - GenerateStudioContentOutput - The return type for the content generation.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateStudioContentInputSchema = z.object({
  inputText: z.string().optional().describe('The base text, notes, or script to use for generation.'),
  contentType: z.string().describe("The type of content to generate (e.g., 'Blog Post', 'Social Media Post', 'Podcast Script')."),
  tone: z.string().optional().describe('The desired tone of the content.'),
  length: z.string().optional().describe('The desired length of the content.'),
  audience: z.string().optional().describe('The target audience for the content.'),
  keywords: z.string().optional().describe('Comma-separated keywords to include.'),
});
export type GenerateStudioContentInput = z.infer<typeof GenerateStudioContentInputSchema>;

const GenerateStudioContentOutputSchema = z.object({
  title: z.string().describe('The generated title for the content.'),
  content: z.string().describe('The main body of the generated content.'),
  socialMediaPost: z.string().optional().describe('A suggested social media post to promote the content.'),
});
export type GenerateStudioContentOutput = z.infer<typeof GenerateStudioContentOutputSchema>;

export async function generateStudioContent(input: GenerateStudioContentInput): Promise<GenerateStudioContentOutput> {
  const prompt = ai.definePrompt({
    name: 'generateStudioContentPrompt',
    input: {schema: GenerateStudioContentInputSchema},
    output: {schema: GenerateStudioContentOutputSchema},
    prompt: `You are an expert content creator and marketing assistant for SR Fitness.
Your task is to generate a compelling "{{contentType}}" based on the user's input and configuration.

**Content Generation Request:**
- **Content Type:** {{contentType}}
{{#if tone}}- **Tone:** {{tone}}{{/if}}
{{#if length}}- **Length:** {{length}}{{/if}}
{{#if audience}}- **Target Audience:** {{audience}}{{/if}}
{{#if keywords}}- **Keywords to include:** {{keywords}}{{/if}}

{{#if inputText}}
**Base Input Text/Notes:**
---
{{{inputText}}}
---
{{/if}}

**Instructions:**
1.  **Analyze the request:** Understand the type of content, tone, length, audience, and keywords.
2.  **Use the Base Input:** If inputText is provided, use it as the primary source material. Expand on it, rewrite it, or summarize it as appropriate for the requested content type. If it's empty, generate content from scratch based on the other parameters.
3.  **Generate the Title:** Create a catchy and relevant title for the content.
4.  **Generate the Content:** Write the main body of the content. For a blog post, this should be well-structured with paragraphs. For a podcast script, it should be conversational. For a social media post, it should be concise and engaging.
5.  **Generate a Social Media Post:** Create a short, engaging social media post (e.g., for Instagram or Facebook) to promote this new piece of content. Include relevant hashtags based on the keywords and topic.
6.  **Adhere to all parameters:** Ensure the final output matches the requested tone, length, audience, and includes the specified keywords naturally.
`,
  });

  const generateStudioContentFlow = ai.defineFlow(
    {
      name: 'generateStudioContentFlow',
      inputSchema: GenerateStudioContentInputSchema,
      outputSchema: GenerateStudioContentOutputSchema,
    },
    async (input) => {
      const {output} = await prompt(input);
      if (!output) {
        throw new Error('The AI model failed to generate content. Please try again.');
      }
      return output;
    }
  );

  return generateStudioContentFlow(input);
}
