
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
  const keepAliveInterval = useRef<NodeJS.Timeout | null>(null);
  
  const isSupported = typeof window !== 'undefined' && !!(window.SpeechRecognition || window.webkitSpeechRecognition) && !!window.speechSynthesis;

  useEffect(() => {
    if (initialQuery) {
        setConversation([{ speaker: 'user', text: initialQuery }]);
        handleAiResponse(initialQuery);
    }
    
    // Cleanup function
    return () => {
      // Clear any running keep-alive interval when the component unmounts.
      if (keepAliveInterval.current) {
        clearInterval(keepAliveInterval.current);
      }
      // Do not cancel speech here. If the user is being navigated, we want the
      // speech to finish. The `cancel()` at the start of `speak()` handles
      // cleanup between utterances within the component's lifecycle.
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
    if (!isSupported || !text.trim()) {
      if (onEndCallback) onEndCallback();
      return;
    }
    
    // Start fresh: cancel any previous speech and clear any running intervals.
    window.speechSynthesis.cancel();
    if (keepAliveInterval.current) {
      clearInterval(keepAliveInterval.current);
    }

    const utterance = new SpeechSynthesisUtterance(text);
    let hasEnded = false;

    const handleEnd = () => {
      if (hasEnded) return; // Prevent multiple calls
      hasEnded = true;

      // Clean up the keep-alive interval.
      if (keepAliveInterval.current) {
        clearInterval(keepAliveInterval.current);
        keepAliveInterval.current = null;
      }
      
      setIsSpeaking(false);
      if (onEndCallback) onEndCallback();
    };

    utterance.onstart = () => {
      setIsSpeaking(true);
    };

    // onend is the primary trigger for cleanup.
    utterance.onend = handleEnd;

    utterance.onerror = () => {
      setError("Sorry, I couldn't speak the response.");
      handleEnd(); // Ensure cleanup and callback happen on error too.
    };

    window.speechSynthesis.speak(utterance);

    // WORKAROUND for browser bug: Keep the speech synthesis engine "warm"
    // by periodically calling resume(). This prevents it from going idle and
    // firing the 'onend' event prematurely on some browsers (especially mobile).
    keepAliveInterval.current = setInterval(() => {
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.resume();
      } else {
        // If it's no longer speaking, the `onend` event should have fired.
        // We call handleEnd() here as a final fallback to prevent the interval
        // from running forever if the `onend` event fails to trigger.
        handleEnd();
      }
    }, 500);
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
