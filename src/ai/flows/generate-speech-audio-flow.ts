'use server';
/**
 * @fileOverview Converts text to speech audio.
 *
 * - generateSpeechAudio - Converts text into a WAV audio data URI.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import wav from 'wav';
import { googleAI } from '@genkit-ai/googleai';

// This is the exported function React components will call.
export async function generateSpeechAudio(text: string): Promise<string> {
  return generateSpeechAudioFlow(text);
}

const generateSpeechAudioFlow = ai.defineFlow(
  {
    name: 'generateSpeechAudioFlow',
    inputSchema: z.string(),
    outputSchema: z.string(), // data URI
  },
  async (text) => {
    if (!text.trim()) {
      return '';
    }

    const { media } = await ai.generate({
      model: googleAI.model('gemini-2.5-flash-preview-tts'),
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Algenib' },
          },
        },
      },
      prompt: text,
    });

    if (!media) {
      throw new Error('No audio media was returned from the TTS model.');
    }

    // The media URL is a data URI with raw PCM data
    // Format: 'data:audio/L16;rate=24000;channels=1;base64,....'
    const audioBuffer = Buffer.from(
      media.url.substring(media.url.indexOf(',') + 1),
      'base64'
    );
    
    const wavDataUri = await toWavDataUri(audioBuffer);
    return wavDataUri;
  }
);

// Helper function to convert raw PCM audio buffer to a WAV data URI
async function toWavDataUri(
  pcmData: Buffer,
  channels = 1,
  rate = 24000,
  sampleWidth = 2
): Promise<string> {
  return new Promise((resolve, reject) => {
    const writer = new wav.Writer({
      channels,
      sampleRate: rate,
      bitDepth: sampleWidth * 8,
    });

    const buffers: Buffer[] = [];
    writer.on('data', (chunk) => {
      buffers.push(chunk);
    });
    writer.on('end', () => {
      const wavBuffer = Buffer.concat(buffers);
      resolve(`data:audio/wav;base64,${wavBuffer.toString('base64')}`);
    });
    writer.on('error', reject);

    writer.write(pcmData);
    writer.end();
  });
}
