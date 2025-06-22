
"use client";

import { useState, useEffect } from 'react';
import { Bot, User, BrainCircuit } from 'lucide-react';
import { generateVoiceResponse } from '@/ai/flows/generate-voice-response-flow';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const SpeechRecognition =
  typeof window !== 'undefined' ? (window.SpeechRecognition || window.webkitSpeechRecognition) : undefined;

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
  
  const isSupported = !!SpeechRecognition && typeof window !== 'undefined' && !!window.speechSynthesis;

  useEffect(() => {
    // This effect runs once when the component mounts with the initial query
    if (initialQuery) {
        setConversation([{ speaker: 'user', text: initialQuery }]);
        handleAiResponse(initialQuery);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialQuery]);

  const handleAiResponse = async (query: string) => {
      if (!query.trim()) return;
      setIsThinking(true);
      setError(null);
      try {
        const { response } = await generateVoiceResponse({ query });
        setConversation(prev => [...prev, { speaker: 'ai', text: response }]);
        speak(response);
      } catch (err) {
          console.error("AI response error:", err);
          const errorMessage = "I'm having trouble connecting right now. Please try again later.";
          setError(errorMessage);
          setConversation(prev => [...prev, { speaker: 'ai', text: errorMessage }]);
          onConversationEnd();
      } finally {
          setIsThinking(false);
      }
  };
  
  const speak = (text: string) => {
    if (!isSupported || !text) {
        onConversationEnd();
        return;
    };
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => {
        setIsSpeaking(false);
        onConversationEnd(); // Signal that the conversation turn is complete
    };
    utterance.onerror = (e) => {
      console.error("Speech synthesis error", e);
      setError("Sorry, I couldn't speak the response.");
      setIsSpeaking(false);
      onConversationEnd();
    }
    window.speechSynthesis.cancel(); // Cancel any ongoing speech
    window.speechSynthesis.speak(utterance);
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
