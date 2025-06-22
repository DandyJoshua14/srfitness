
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";
import VoiceAgentClient from "./voice-agent-client";
import { cn } from "@/lib/utils";

export default function VoiceAgentDialog({ className }: { className?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn("animate-pulse-microphone focus-visible:ring-primary/70", className)}
          aria-label="Voice Search"
        >
          <Mic className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] h-[70vh] flex flex-col p-0">
        <DialogHeader className="p-6 pb-2 border-b">
          <DialogTitle className="font-headline text-2xl text-primary flex items-center gap-2">
            <Mic /> SR-VOICE Assistant
          </DialogTitle>
          <DialogDescription>
            Ask me anything about fitness, our services, or your account.
          </DialogDescription>
        </DialogHeader>
        <VoiceAgentClient />
      </DialogContent>
    </Dialog>
  );
}
