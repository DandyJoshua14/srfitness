
"use client";

import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Loader2 } from "lucide-react";
import VoiceAgentClient from "./voice-agent-client";
import { cn } from "@/lib/utils";
import { useToast } from '@/hooks/use-toast';

const SpeechRecognition =
  typeof window !== 'undefined' ? (window.SpeechRecognition || window.webkitSpeechRecognition) : undefined;

const WAKE_WORDS = ["hey sr", "hey essar", "hey esar"];

export default function VoiceAgentDialog({ className }: { className?: string }) {
  const [isListening, setIsListening] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentQuery, setCurrentQuery] = useState("");
  const [permissionStatus, setPermissionStatus] = useState<'prompt' | 'granted' | 'denied'>('prompt');
  
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const { toast } = useToast();

  const isSupported = !!SpeechRecognition;

  useEffect(() => {
    if (!isSupported) {
      console.error("Voice agent not supported by this browser.");
      return;
    }
    
    const recognition = new SpeechRecognition();
    recognition.continuous = true; // Keep listening
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          const transcript = event.results[i][0].transcript.trim().toLowerCase();
          console.log("Heard:", transcript); // For debugging
          const wakeWord = WAKE_WORDS.find(w => transcript.startsWith(w));

          if (wakeWord) {
            const query = transcript.substring(wakeWord.length).trim();
            if (query) {
              console.log("Wake word detected! Query:", query);
              toast({ title: "Wake Word Detected!", description: `Processing: "${query}"`});
              setCurrentQuery(query);
              setDialogOpen(true);
              stopListening(); // Stop listening while dialog is open
            }
          }
        }
      }
    };
    
    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
        setPermissionStatus('denied');
        toast({ variant: 'destructive', title: "Microphone Access Denied", description: "Please enable microphone permissions in your browser settings." });
      }
      setIsListening(false);
    };

    recognition.onstart = () => {
        setIsListening(true);
        setPermissionStatus('granted');
        toast({ title: "Wake Word Listening Active", description: `Say "Hey SR" to start.` });
    };

    recognition.onend = () => {
      setIsListening(false);
      console.log("Speech recognition ended.");
    };

    recognitionRef.current = recognition;

    return () => {
      recognitionRef.current?.abort();
    };
  }, [isSupported, toast]);

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
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

  const handleToggleListening = () => {
    if (isListening) {
      stopListening();
      toast({ title: "Wake Word Listening Disabled" });
    } else {
      startListening();
    }
  };

  const handleConversationEnd = () => {
    setDialogOpen(false);
    // Restart listening for wake word after conversation ends
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

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={handleToggleListening}
        className={cn("focus-visible:ring-primary/70", className)}
        aria-label={isListening ? "Stop wake word listening" : "Start wake word listening"}
      >
        {isListening ? (
           <Mic className="h-5 w-5 text-primary animate-pulse-microphone" />
        ) : (
           <MicOff className="h-5 w-5" />
        )}
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
              <Mic /> SR-VOICE Assistant
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
