
"use client";

import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, BrainCircuit } from "lucide-react";
import VoiceAgentClient from "./voice-agent-client";
import { cn } from "@/lib/utils";
import { useToast } from '@/hooks/use-toast';

const SpeechRecognition =
  typeof window !== 'undefined' ? (window.SpeechRecognition || window.webkitSpeechRecognition) : undefined;

const WAKE_WORDS = ["hey ninna", "hey nina"];

export default function VoiceAgentDialog({ className }: { className?: string }) {
  const [isListening, setIsListening] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentQuery, setCurrentQuery] = useState("");
  const [permissionStatus, setPermissionStatus] = useState<'prompt' | 'granted' | 'denied'>('prompt');
  
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const { toast } = useToast();

  const isSupported = !!SpeechRecognition;

  const startListening = () => {
    if (isListening) return;

    if (permissionStatus === 'denied') {
        toast({ variant: 'destructive', title: "Microphone Access Required", description: "Please enable microphone permissions in your browser's site settings." });
        return;
    }
    if (recognitionRef.current) {
      try {
        recognitionRef.current.start();
      } catch (e) {
        console.error("Could not start recognition:", e);
      }
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
    }
  };
  
  useEffect(() => {
    if (!isSupported) {
      console.error("Voice agent not supported by this browser.");
      return;
    }
    
    if(!recognitionRef.current) {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = false;
        recognition.lang = 'en-US';
        
        recognition.onresult = (event) => {
          const transcript = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
          console.log("Heard:", transcript);
          const wakeWord = WAKE_WORDS.find(w => transcript.startsWith(w));

          if (wakeWord) {
            const query = transcript.substring(wakeWord.length).trim();
            if (query) {
              console.log("Wake word detected! Query:", query);
              toast({ title: "Wake Word Detected!", description: `Processing: "${query}"`});
              setCurrentQuery(query);
              setDialogOpen(true);
              stopListening();
            }
          }
        };

        recognition.onerror = (event) => {
          console.error("Speech recognition error:", event.error);
          if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
            setPermissionStatus('denied');
            if(isListening) { // Only toast if it was actively listening
                 toast({ variant: 'destructive', title: "Microphone Access Denied", description: "Please enable microphone permissions in your browser settings." });
            }
          }
          setIsListening(false);
        };

        recognition.onstart = () => {
            setIsListening(true);
            setPermissionStatus('granted');
            toast({ title: "Wake Word Listening Active", description: `Say "Hey Ninna" to start.` });
        };

        recognition.onend = () => {
          setIsListening(false);
          console.log("Speech recognition ended.");
        };

        recognitionRef.current = recognition;
    }

    startListening();

    return () => {
      recognitionRef.current?.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSupported, toast]);


  const handleConversationEnd = () => {
    setDialogOpen(false);
    if (permissionStatus === 'granted') {
       setTimeout(startListening, 500);
    }
  };

  if (!isSupported) {
    return (
      <Button variant="ghost" size="icon" className={cn(className)} disabled aria-label="Voice Search Not Supported">
        <MicOff className="h-5 w-5 text-destructive" />
      </Button>
    );
  }

  const getButtonContent = () => {
    if (isListening) {
      return <Mic className="h-5 w-5 text-primary animate-pulse-microphone" />;
    }
    if (permissionStatus === 'denied') {
      return <MicOff className="h-5 w-5 text-destructive" />;
    }
    return <MicOff className="h-5 w-5" />;
  };

  const getButtonLabel = () => {
    if (isListening) return "Wake word listening is active. Say 'Hey Ninna'.";
    if (permissionStatus === 'denied') return "Microphone access denied. Click to try again or check browser settings.";
    return "Click to enable wake word listening.";
  };


  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={startListening}
        className={cn("focus-visible:ring-primary/70", className)}
        aria-label={getButtonLabel()}
      >
        {getButtonContent()}
      </Button>

      <Dialog open={dialogOpen} onOpenChange={(isOpen) => {
          if (!isOpen) {
              handleConversationEnd();
          }
          setDialogOpen(isOpen);
      }}>
        <DialogContent className="sm:max-w-[425px] h-[70vh] flex flex-col p-0">
          <DialogHeader className="p-6 pb-2 border-b">
            <DialogTitle className="font-headline text-2xl text-primary flex items-center gap-2">
              <BrainCircuit /> SR-NINNA Assistant
            </DialogTitle>
            <DialogDescription>
              Answering your question...
            </DialogDescription>
          </DialogHeader>
          {currentQuery && (
             <VoiceAgentClient initialQuery={currentQuery} onConversationEnd={handleConversationEnd}/>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
