
"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Bot, User, BrainCircuit, AlertTriangle } from 'lucide-react';
import { generateVoiceResponse } from '@/ai/flows/generate-voice-response-flow';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

// For server-side rendering, window is not available.
const SpeechRecognition =
  typeof window !== 'undefined' ? (window.SpeechRecognition || window.webkitSpeechRecognition) : undefined;

interface ConversationTurn {
  speaker: 'user' | 'ai';
  text: string;
}

export default function VoiceAgentClient() {
  const [isListening, setIsListening] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [conversation, setConversation] = useState<ConversationTurn[]>([]);
  const [error, setError] = useState<string | null>(null);

  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const isSupported = !!SpeechRecognition && typeof window !== 'undefined' && !!window.speechSynthesis;

  useEffect(() => {
    if (!isSupported) {
      setError("Voice agent is not supported by your browser. Please try Chrome or Safari.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      let interimTranscript = '';
      let finalTranscript = '';
      for (let i = 0; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }

      // Display interim results for better UX
      if (interimTranscript) {
        setConversation(prev => {
            const newConvo = [...prev];
            if (newConvo.length > 0 && newConvo[newConvo.length - 1].speaker === 'user') {
                newConvo[newConvo.length - 1].text = interimTranscript;
                return newConvo;
            }
            return [...prev, { speaker: 'user', text: interimTranscript }];
        });
      }
      
      if (finalTranscript) {
         setConversation(prev => {
            const newConvo = [...prev];
            if (newConvo.length > 0 && newConvo[newConvo.length - 1].speaker === 'user') {
                newConvo[newConvo.length - 1].text = finalTranscript;
            } else {
                newConvo.push({ speaker: 'user', text: finalTranscript });
            }
            return newConvo;
        });
        handleAiResponse(finalTranscript);
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      setError(`Recognition Error: ${event.error}. Please ensure microphone access is allowed.`);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
  }, [isSupported]);

  const handleAiResponse = async (query: string) => {
      if (!query.trim()) return;
      setIsThinking(true);
      try {
        const { response } = await generateVoiceResponse({ query });
        speak(response);
        setConversation(prev => [...prev, { speaker: 'ai', text: response }]);
      } catch (err) {
          console.error("AI response error:", err);
          const errorMessage = "I'm having trouble connecting right now. Please try again later.";
          setError(errorMessage);
          setConversation(prev => [...prev, { speaker: 'ai', text: errorMessage }]);
      } finally {
          setIsThinking(false);
      }
  };
  
  const speak = (text: string) => {
    if (!isSupported || !text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = (e) => {
      console.error("Speech synthesis error", e);
      setError("Sorry, I couldn't speak the response.");
      setIsSpeaking(false);
    }
    window.speechSynthesis.cancel(); // Cancel any ongoing speech
    window.speechSynthesis.speak(utterance);
  };


  const toggleListening = () => {
    if (!isSupported) return;
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      setConversation([]); // Start a new conversation
      setError(null);
      recognitionRef.current?.start();
      setIsListening(true);
    }
  };

  const getButtonState = () => {
      if (isListening) return { icon: <MicOff />, text: 'Stop Listening', bg: 'bg-red-500 hover:bg-red-600', ring: 'ring-red-500/50' };
      if (isThinking) return { icon: <BrainCircuit className="animate-pulse" />, text: 'Thinking...', bg: 'bg-purple-500 hover:bg-purple-600', ring: 'ring-purple-500/50' };
      if (isSpeaking) return { icon: <Bot />, text: 'Speaking...', bg: 'bg-blue-500 hover:bg-blue-600', ring: 'ring-blue-500/50' };
      return { icon: <Mic />, text: 'Ask SR-VOICE', bg: 'bg-primary hover:bg-primary/90', ring: 'ring-primary/50' };
  }

  const {icon, text, bg, ring} = getButtonState();

  if (!isSupported) {
       return (
         <div className="flex flex-col items-center justify-center h-full text-center p-4">
            <AlertTriangle className="w-12 h-12 text-destructive mb-4" />
            <h3 className="font-semibold text-lg text-destructive">Voice Not Supported</h3>
            <p className="text-muted-foreground">{error}</p>
         </div>
       );
  }

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
            {conversation.length === 0 && (
                <div className="text-center text-muted-foreground pt-16">
                    <p>Click the button below to start a conversation.</p>
                </div>
            )}
        </div>
        {error && <p className="text-destructive text-sm text-center">{error}</p>}
        <div className="flex-shrink-0 pt-4 border-t">
            <Button 
                onClick={toggleListening} 
                disabled={isThinking || isSpeaking}
                className={cn("w-full h-14 text-lg font-bold transition-all duration-300 transform hover:scale-105 focus:ring-4", bg, ring)}
            >
                {icon}
                {text}
            </Button>
        </div>
    </div>
  );
}
