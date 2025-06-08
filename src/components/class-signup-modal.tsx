"use client";

import type { FitnessClass } from '@/lib/types';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { CalendarDays, Clock, User, Tag } from 'lucide-react';

interface ClassSignupModalProps {
  classInfo: FitnessClass | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ClassSignupModal({ classInfo, isOpen, onClose }: ClassSignupModalProps) {
  const { toast } = useToast();

  if (!classInfo) return null;

  const handleSignup = () => {
    // Simulate signup
    console.log(`Signed up for class: ${classInfo.name}`);
    toast({
      title: "Signup Successful!",
      description: `You've successfully signed up for ${classInfo.name}.`,
      variant: "default",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-card border-border shadow-lg rounded-lg">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl text-primary">Sign Up for {classInfo.name}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Confirm your spot in {classInfo.name}. Get ready to sweat!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 text-sm">
          <div className="flex items-center gap-2">
            <Tag className="h-5 w-5 text-primary" />
            <p><span className="font-semibold">Class:</span> {classInfo.name} ({classInfo.type})</p>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-primary" />
            <p><span className="font-semibold">Trainer:</span> {classInfo.trainerName}</p>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-primary" />
            <p><span className="font-semibold">Day:</span> {classInfo.day}</p>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <p><span className="font-semibold">Time:</span> {classInfo.time} ({classInfo.duration})</p>
          </div>
           <div className="flex items-center gap-2">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            <p><span className="font-semibold">Spots Available:</span> {classInfo.spotsAvailable}</p>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <Button type="button" onClick={handleSignup} className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Confirm Signup
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
