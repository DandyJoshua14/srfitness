
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Award, Ticket, ArrowRight, Vote, Heart } from 'lucide-react';
import { VisuallyHidden } from '@/components/ui/visually-hidden';

export default function EventAdModal() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2500); // Wait 2.5 seconds before showing the modal

    return () => clearTimeout(timer);
  }, []);

  const handleTicketClick = () => {
    setIsOpen(false);
    router.push('/awards#tickets');
  };

  const handleVoteClick = () => {
    setIsOpen(false);
    router.push('/vote');
  };

  const handleDonateClick = () => {
    setIsOpen(false);
    router.push('/donate');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md w-[90vw] p-0 bg-zinc-900 border-amber-400/50 text-white overflow-hidden shadow-2xl shadow-amber-500/20">
        <VisuallyHidden>
          <DialogTitle>SR Fitness Awards Invitation</DialogTitle>
        </VisuallyHidden>
        <div className="relative aspect-video w-full">
          <Image
            src="/gl.jpeg"
            alt="Awards Gala Night"
            width={400}
            height={225}
            className="w-full h-full object-cover"
            data-ai-hint="awards ceremony gala"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
        </div>
        <div className="p-6 text-center space-y-4 -mt-12 relative z-10">
          <div className="inline-block p-3 bg-amber-400 rounded-full mb-2">
            <Award className="h-8 w-8 text-black" />
          </div>
          <h2 className="font-headline text-4xl text-amber-400">
            You're Invited!
          </h2>
          <p className="text-zinc-300">
            Join us for a night of glamour, recognition, and celebration at the annual SR Fitness Awards.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <Button
              size="lg"
              className="w-full bg-amber-500 text-black font-bold text-base hover:bg-amber-400 group"
              onClick={handleTicketClick}
            >
              <Ticket className="mr-2 h-5 w-5" />
              Buy Tickets
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-green-400 text-green-400 hover:bg-green-400/10 hover:text-green-300 font-bold text-base group"
              onClick={handleDonateClick}
            >
              <Heart className="mr-2 h-5 w-5" />
              Donate
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-amber-400 text-amber-400 hover:bg-amber-400/10 hover:text-amber-300 font-bold text-base group"
              onClick={handleVoteClick}
            >
              <Vote className="mr-2 h-5 w-5" />
              Vote Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
