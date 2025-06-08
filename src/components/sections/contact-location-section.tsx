"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters.").max(50, "Name must be at most 50 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(500, "Message must be at most 500 characters."),
});

export default function ContactLocationSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted:", values);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or ready to start your fitness journey? Contact us or visit our gym.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <CardWithShadow>
            <h3 className="font-headline text-2xl text-foreground mb-6">Send Us a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="bg-input/30 focus:bg-background" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@example.com" {...field} className="bg-input/30 focus:bg-background" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message..." {...field} rows={5} className="bg-input/30 focus:bg-background" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-headline text-lg py-3">
                  Send Message
                </Button>
              </form>
            </Form>
          </CardWithShadow>

          <CardWithShadow>
            <h3 className="font-headline text-2xl text-foreground mb-6">Our Location &amp; Info</h3>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">SR Fitness Gym</p>
                  <p>123 Fitness Avenue, Workout City, ST 90210</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Email Us</p>
                  <a href="mailto:contact@srfitness.com" className="hover:text-primary">contact@srfitness.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Call Us</p>
                  <a href="tel:+1234567890" className="hover:text-primary">(123) 456-7890</a>
                </div>
              </div>
            </div>
            <div className="mt-6 rounded-lg overflow-hidden shadow-md aspect-video">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Map showing SR Fitness location"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                data-ai-hint="city map"
              />
            </div>
          </CardWithShadow>
        </div>
      </div>
    </section>
  );
}

// Helper component for consistent card styling
function CardWithShadow({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-card p-6 md:p-8 rounded-lg border border-border shadow-lg">
      {children}
    </div>
  );
}
