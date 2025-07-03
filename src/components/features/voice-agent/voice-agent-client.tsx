
"use client";

import { useState, useEffect, useRef } from 'react';
import { Bot, User, BrainCircuit } from 'lucide-react';
import { generateVoiceResponse } from '@/ai/flows/generate-voice-response-flow';
import { generateSpeechAudio } from '@/ai/flows/generate-speech-audio-flow';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface ConversationTurn {
  speaker: 'user' | 'ai';
  text: string;
}

interface VoiceAgentClientProps {
    initialQuery: string;
    onConversationEnd: () => void;
}

export default function VoiceAgentClient({ initialQuery, onConversationEnd }: VoiceAgentClientProps) {
  const [isThinking, setIsThinking] = useState(true);
  const [conversation, setConversation] = useState<ConversationTurn[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [audioDataUri, setAudioDataUri] = useState<string | null>(null);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const navigationPathRef = useRef<string | null | undefined>(null);
  const router = useRouter();

  useEffect(() => {
    if (audioDataUri && audioRef.current) {
      audioRef.current.play().catch(e => {
        console.error("Audio playback failed:", e);
        setError("Could not play the audio response.");
        onConversationEnd();
      });
    }
  }, [audioDataUri, onConversationEnd]);

  useEffect(() => {
    if (initialQuery) {
        setConversation([{ speaker: 'user', text: initialQuery }]);
        handleAiResponse(initialQuery);
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialQuery]);


  const handleAiResponse = async (query: string) => {
      if (!query.trim()) return;
      setIsThinking(true);
      setError(null);
      setAudioDataUri(null);
      navigationPathRef.current = null;

      try {
        const textResult = await generateVoiceResponse({ query });
        const responseText = textResult.response;
        navigationPathRef.current = textResult.navigationPath;

        setConversation(prev => [...prev, { speaker: 'ai', text: responseText }]);

        const audioUri = await generateSpeechAudio(responseText);
        setAudioDataUri(audioUri);

      } catch (err) {
          console.error("AI response or audio generation error:", err);
          const errorMessage = "I'm having trouble connecting right now. Please try again later.";
          setError(errorMessage);
          setConversation(prev => [...prev, { speaker: 'ai', text: errorMessage }]);
          
          try {
            // Attempt to speak the error message
            const audioUri = await generateSpeechAudio(errorMessage);
            setAudioDataUri(audioUri);
          } catch (audioErr) {
            console.error("Could not generate audio for error message:", audioErr);
            // If even the error audio fails, close the dialog after a short delay
            setTimeout(onConversationEnd, 2000);
          }

      } finally {
          setIsThinking(false);
      }
  };
  
  const handleAudioEnded = () => {
    if (navigationPathRef.current) {
        router.push(navigationPathRef.current);
    }
    onConversationEnd();
  };

  return (
    <div className="flex flex-col h-full p-4 gap-4">
        <audio ref={audioRef} src={audioDataUri || ''} onEnded={handleAudioEnded} className="hidden" />

        <div className="flex-grow space-y-4 overflow-y-auto pr-2">
            <AnimatePresence>
                {conversation.map((turn, index) => (
                    <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={cn("flex items-start gap-3", turn.speaker === 'user' ? 'justify-end' : 'justify-start')}
                    >
                        {turn.speaker === 'ai' && <Bot className="w-6 h-6 text-primary flex-shrink-0 mt-1"/>}
                         <div className={cn("p-3 rounded-lg max-w-sm", turn.speaker === 'user' ? 'bg-primary/10 text-right' : 'bg-muted')}>
                            <p className="text-sm text-foreground">{turn.text}</p>
                        </div>
                        {turn.speaker === 'user' && <User className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-1"/>}
                    </motion.div>
                ))}
            </AnimatePresence>
            {isThinking && (
                 <motion.div 
                    key="thinking"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 justify-start"
                >
                    <Bot className="w-6 h-6 text-primary flex-shrink-0 mt-1"/>
                    <div className="p-3 rounded-lg max-w-sm bg-muted flex items-center gap-2">
                        <BrainCircuit className="w-5 h-5 animate-pulse" />
                        <p className="text-sm text-muted-foreground italic">Thinking...</p>
                    </div>
                </motion.div>
            )}
        </div>
        {error && <p className="text-destructive text-sm text-center">{error}</p>}
    </div>
  );
}
