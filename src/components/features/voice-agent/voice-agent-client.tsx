"use client";

import { useState, useEffect, useRef } from 'react';
import { Bot, User, BrainCircuit } from 'lucide-react';
import { generateVoiceResponse, VoiceAgentOutput } from '@/ai/flows/generate-voice-response-flow';
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
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [conversation, setConversation] = useState<ConversationTurn[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const speakingCheckInterval = useRef<NodeJS.Timeout | null>(null);
  
  const isSupported = typeof window !== 'undefined' && !!(window.SpeechRecognition || window.webkitSpeechRecognition) && !!window.speechSynthesis;

  useEffect(() => {
    if (initialQuery) {
        setConversation([{ speaker: 'user', text: initialQuery }]);
        handleAiResponse(initialQuery);
    }
    
    // Cleanup function to cancel any speech on unmount
    return () => {
        if (speakingCheckInterval.current) {
            clearInterval(speakingCheckInterval.current);
        }
        if (window.speechSynthesis) {
            window.speechSynthesis.cancel();
        }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialQuery]);

  const handleAiResponse = async (query: string) => {
      if (!query.trim()) return;
      setIsThinking(true);
      setError(null);
      try {
        const result: VoiceAgentOutput = await generateVoiceResponse({ query });
        setConversation(prev => [...prev, { speaker: 'ai', text: result.response }]);
        speak(result.response, () => {
           if (result.navigationPath) {
             router.push(result.navigationPath);
           }
           onConversationEnd();
        });
      } catch (err) {
          console.error("AI response error:", err);
          const errorMessage = "I'm having trouble connecting right now. Please try again later.";
          setError(errorMessage);
          setConversation(prev => [...prev, { speaker: 'ai', text: errorMessage }]);
          speak(errorMessage, onConversationEnd);
      } finally {
          setIsThinking(false);
      }
  };
  
  const speak = (text: string, onEndCallback: () => void) => {
    if (!isSupported || !text || text.trim() === '') {
        if (onEndCallback) onEndCallback();
        return;
    };
    
    window.speechSynthesis.cancel();
    if (speakingCheckInterval.current) {
        clearInterval(speakingCheckInterval.current);
    }
    
    const utterance = new SpeechSynthesisUtterance(text);
    let hasEnded = false;

    const handleEnd = () => {
        if (hasEnded) return;
        hasEnded = true;

        setIsSpeaking(false);
        if (speakingCheckInterval.current) {
            clearInterval(speakingCheckInterval.current);
        }
        if (onEndCallback) onEndCallback();
    };

    utterance.onstart = () => {
        setIsSpeaking(true);
    };

    // The `onend` event is notoriously unreliable across browsers.
    // It can fire too early. We use it only as a fallback.
    utterance.onend = handleEnd;

    utterance.onerror = () => {
      setError("Sorry, I couldn't speak the response.");
      handleEnd(); 
    }
    
    window.speechSynthesis.speak(utterance);
    
    // Polling `speechSynthesis.speaking` is the most reliable cross-browser
    // method to determine when speech has truly finished.
    speakingCheckInterval.current = setInterval(() => {
        if (!window.speechSynthesis.speaking) {
            handleEnd();
        }
    }, 300); // Check every 300ms.
  };


  return (
    <div className="flex flex-col h-full p-4 gap-4">
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
