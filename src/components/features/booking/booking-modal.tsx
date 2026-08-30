"use client";

import React, { useState, useEffect } from 'react';
import { useBooking } from '@/contexts/booking-context';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Dumbbell, 
  Sparkles, 
  Briefcase, 
  Globe, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  MessageSquare, 
  PhoneCall, 
  MapPin, 
  Flame,
  ArrowRight,
  ChevronLeft
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const servicesList = [
  {
    id: "personal-training",
    name: "1-on-1 Personal Training",
    desc: "Custom workout & nutrition tailored to your body and schedule in Lagos.",
    icon: <Dumbbell className="h-5 w-5 text-primary" />,
    tag: "Most Popular"
  },
  {
    id: "burn-off-bootcamp",
    name: "Burn-Off Bootcamp",
    desc: "High-intensity group weekend training for rapid fat burn and stamina.",
    icon: <Flame className="h-5 w-5 text-amber-500" />,
    tag: "High Energy"
  },
  {
    id: "30-day-challenge",
    name: "30-Day Transformation Challenge",
    desc: "Structured full-body shred with accountability, meal plans & prizes.",
    icon: <Sparkles className="h-5 w-5 text-emerald-500" />,
    tag: "Results Driven"
  },
  {
    id: "corporate-wellness",
    name: "Corporate Wellness Package",
    desc: "Executive fitness sessions & team health seminars for Lagos companies.",
    icon: <Briefcase className="h-5 w-5 text-blue-500" />,
    tag: "For Teams"
  },
  {
    id: "online-coaching",
    name: "Online Coaching & Meal Plans",
    desc: "Virtual coaching, custom Nigerian meal plans, and weekly check-ins.",
    icon: <Globe className="h-5 w-5 text-purple-500" />,
    tag: "Flexible"
  }
];

const timeSlots = [
  "Early Morning (6:00 AM - 8:30 AM)",
  "Morning (9:00 AM - 12:00 PM)",
  "Evening (4:00 PM - 7:30 PM)",
  "Weekend Intensive (Saturdays 7:00 AM)"
];

const locationOptions = [
  { id: "lagos-home", label: "Home / Private Gym (Lagos Island / Mainland)" },
  { id: "sr-center", label: "SR Fitness Partner Facility (Lagos)" },
  { id: "online-virtual", label: "Online / Virtual Coaching (Global)" }
];

export default function BookingModal() {
  const { isOpen, options, closeBooking } = useBooking();
  const { toast } = useToast();

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedService, setSelectedService] = useState<string>("personal-training");
  const [selectedLocation, setSelectedLocation] = useState<string>("lagos-home");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>(timeSlots[0]);
  const [goal, setGoal] = useState<string>("");
  
  // Contact details
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (options.service) {
      const matched = servicesList.find(
        s => s.id === options.service || s.name.toLowerCase().includes(options.service!.toLowerCase())
      );
      if (matched) setSelectedService(matched.id);
    }
  }, [options]);

  const handleNextStep = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      if (!fullName.trim() || !phone.trim()) {
        toast({
          title: "Required Fields Missing",
          description: "Please provide your full name and phone number to schedule your session.",
          variant: "destructive"
        });
        return;
      }
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Simulate booking API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Session Requested Successfully!",
        description: `Thank you ${fullName}. Our Lagos coaching team will reach out on WhatsApp within 2 hours.`,
      });
    }, 800);
  };

  const handleResetAndClose = () => {
    closeBooking();
    setTimeout(() => {
      setStep(1);
      setIsSubmitted(false);
      setFullName("");
      setPhone("");
      setEmail("");
      setGoal("");
    }, 300);
  };

  const serviceObj = servicesList.find(s => s.id === selectedService) || servicesList[0];

  const getWhatsAppBookingLink = () => {
    const message = encodeURIComponent(
      `Hello SR Fitness Team! I just requested a booking on your website:\n\n` +
      `👤 Name: ${fullName || "Client"}\n` +
      `🏋️ Service: ${serviceObj.name}\n` +
      `📍 Location: ${selectedLocation}\n` +
      `⏰ Preferred Time: ${selectedTimeSlot}\n` +
      `🎯 Goal: ${goal || "General Transformation"}\n\n` +
      `Looking forward to starting my transformation!`
    );
    return `https://wa.me/2348000000000?text=${message}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleResetAndClose()}>
      <DialogContent className="max-w-xl bg-card border-border shadow-2xl p-0 overflow-hidden rounded-2xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary/20 via-background to-background p-6 border-b border-border/50">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10">
                Lagos, Nigeria
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Instant Confirmation
              </Badge>
            </div>
            <DialogTitle className="font-headline text-2xl md:text-3xl font-bold text-foreground">
              {isSubmitted ? "You're All Set!" : "Book Your Fitness Session"}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm">
              {isSubmitted 
                ? "Your consultation request has been submitted to the SR Fitness team." 
                : "Choose your program and preferred time to start your transformation journey."}
            </DialogDescription>
          </DialogHeader>

          {/* Stepper indicator */}
          {!isSubmitted && (
            <div className="flex items-center gap-2 mt-4">
              <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? 'bg-primary' : 'bg-muted'}`} />
              <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-muted'}`} />
            </div>
          )}
        </div>

        {/* Content body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30 animate-in zoom-in-50 duration-300">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-foreground font-headline">
                  Consultation Request Received!
                </h3>
                <p className="text-muted-foreground text-sm mt-1 max-w-md mx-auto">
                  We have logged your preference for <span className="text-foreground font-semibold">{serviceObj.name}</span>. A coach will contact you at <span className="text-primary font-medium">{phone}</span> to confirm your schedule.
                </p>
              </div>

              <div className="p-4 bg-muted/40 rounded-xl border border-border text-left text-sm space-y-2 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service:</span>
                  <span className="font-medium text-foreground">{serviceObj.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Time Preference:</span>
                  <span className="font-medium text-foreground">{selectedTimeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span className="font-medium text-foreground">{selectedLocation}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <Button 
                  asChild
                  className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2 font-semibold shadow-lg"
                >
                  <a href={getWhatsAppBookingLink()} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="w-4 h-4" /> Fast-Track on WhatsApp
                  </a>
                </Button>
                <Button variant="outline" onClick={handleResetAndClose}>
                  Done
                </Button>
              </div>
            </div>
          ) : step === 1 ? (
            /* STEP 1: SERVICE & PREFERENCES */
            <div className="space-y-5">
              <div>
                <Label className="text-sm font-semibold text-foreground mb-3 block">
                  1. Select Program or Service
                </Label>
                <div className="grid gap-2.5">
                  {servicesList.map((srv) => {
                    const isSelected = selectedService === srv.id;
                    return (
                      <div
                        key={srv.id}
                        onClick={() => setSelectedService(srv.id)}
                        className={`cursor-pointer p-3.5 rounded-xl border transition-all flex items-start justify-between gap-3 ${
                          isSelected
                            ? "border-primary bg-primary/10 shadow-sm"
                            : "border-border hover:border-border/80 hover:bg-muted/40"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-background border border-border/80 shrink-0 mt-0.5">
                            {srv.icon}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold text-sm text-foreground">{srv.name}</h4>
                              <Badge variant="outline" className="text-[10px] px-1.5 py-0 border-primary/30 text-primary">
                                {srv.tag}
                              </Badge>
                            </div>
                            <p className="text-xs text-muted-foreground mt-0.5">{srv.desc}</p>
                          </div>
                        </div>
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-1 ${
                          isSelected ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/40"
                        }`}>
                          {isSelected && <div className="w-2 h-2 rounded-full bg-background" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Location Preference */}
              <div>
                <Label className="text-sm font-semibold text-foreground mb-2 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-primary" /> Training Location / Format
                </Label>
                <RadioGroup value={selectedLocation} onValueChange={setSelectedLocation} className="grid sm:grid-cols-3 gap-2">
                  {locationOptions.map(opt => (
                    <label
                      key={opt.id}
                      className={`flex flex-col p-3 rounded-lg border cursor-pointer text-xs transition-all ${
                        selectedLocation === opt.id
                          ? "border-primary bg-primary/10 font-semibold text-primary"
                          : "border-border text-muted-foreground hover:bg-muted/30"
                      }`}
                    >
                      <RadioGroupItem value={opt.id} className="sr-only" />
                      <span>{opt.label}</span>
                    </label>
                  ))}
                </RadioGroup>
              </div>

              {/* Time slot preference */}
              <div>
                <Label className="text-sm font-semibold text-foreground mb-2 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-primary" /> Preferred Time Slot
                </Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {timeSlots.map(time => (
                    <button
                      type="button"
                      key={time}
                      onClick={() => setSelectedTimeSlot(time)}
                      className={`text-left p-2.5 rounded-lg border text-xs transition-all ${
                        selectedTimeSlot === time
                          ? "border-primary bg-primary/10 font-medium text-foreground"
                          : "border-border text-muted-foreground hover:bg-muted/30"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* STEP 2: CONTACT DETAILS & GOALS */
            <div className="space-y-4">
              <div className="p-3 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-between text-xs">
                <div>
                  <span className="text-muted-foreground">Selected Program: </span>
                  <span className="font-semibold text-foreground">{serviceObj.name}</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setStep(1)}
                  className="h-7 text-xs text-primary hover:text-primary"
                >
                  Change
                </Button>
              </div>

              <div className="space-y-3">
                <div>
                  <Label htmlFor="fullname" className="text-xs font-semibold text-foreground">
                    Full Name *
                  </Label>
                  <Input
                    id="fullname"
                    placeholder="e.g. Tunde Adeyemi"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="mt-1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-xs font-semibold text-foreground">
                    WhatsApp Phone Number (for schedule confirmation) *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="e.g. +234 801 234 5678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-xs font-semibold text-foreground">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="e.g. tunde@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="goal" className="text-xs font-semibold text-foreground">
                    Your Primary Fitness Goal or Any Health Notes
                  </Label>
                  <Textarea
                    id="goal"
                    placeholder="e.g. Lose 10kg, build core strength, busy work hours so I need 6:30am sessions."
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    rows={2}
                    className="mt-1 resize-none text-xs"
                  />
                </div>
              </div>

              <p className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                No immediate payment required. We will confirm your trainer availability first.
              </p>
            </div>
          )}
        </div>

        {/* Footer controls */}
        {!isSubmitted && (
          <div className="p-4 bg-muted/20 border-t border-border flex items-center justify-between">
            {step === 2 ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setStep(1)}
                className="gap-1 text-xs"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleResetAndClose}
                className="text-xs text-muted-foreground"
              >
                Cancel
              </Button>
            )}

            <Button
              onClick={handleNextStep}
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 gap-2"
            >
              {isSubmitting ? (
                "Processing..."
              ) : step === 1 ? (
                <>Next: Details <ArrowRight className="w-4 h-4" /></>
              ) : (
                "Confirm Consultation"
              )}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
