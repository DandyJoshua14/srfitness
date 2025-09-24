import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// Only initialize AI if API key is available
const hasApiKey = process.env.GOOGLE_GENAI_API_KEY && process.env.GOOGLE_GENAI_API_KEY !== 'your_google_ai_api_key_here';

export const ai = hasApiKey ? genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-2.0-flash',
}) : null;
