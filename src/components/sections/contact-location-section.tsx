
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Send, MapPin } from "lucide-react";

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
      variant: "default",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Connect With Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your fitness revolution or have a question? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="bg-card p-6 sm:p-8 md:p-10 rounded-xl border border-border shadow-xl animate-in fade-in slide-in-from-left duration-700 delay-100">
            <h3 className="font-headline text-3xl text-foreground mb-8">Send Us a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-semibold">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="bg-muted/30 border-border focus:bg-background focus:border-primary text-base py-3 px-4" />
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
                      <FormLabel className="text-foreground font-semibold">Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} className="bg-muted/30 border-border focus:bg-background focus:border-primary text-base py-3 px-4" />
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
                      <FormLabel className="text-foreground font-semibold">Your Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us how we can help..." {...field} rows={5} className="bg-muted/30 border-border focus:bg-background focus:border-primary text-base py-3 px-4" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-headline text-lg py-3.5 rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 group"
                >
                  Send Message <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </form>
            </Form>
          </div>

          <div className="space-y-8 animate-in fade-in slide-in-from-right duration-700 delay-200">
            <div className="bg-card p-6 sm:p-8 rounded-xl border border-border shadow-xl">
              <h3 className="font-headline text-3xl text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4 text-muted-foreground">
                 <div className="flex items-start gap-4 p-3 rounded-md transition-colors hover:bg-muted/30">
                  <Mail className="h-8 w-8 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-lg">Email Us</p>
                    <a href="mailto:contact@srfitness.com" className="hover:text-primary transition-colors text-base">srfitness@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-3 rounded-md transition-colors hover:bg-muted/30">
                  <Phone className="h-8 w-8 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-lg">Call Us</p>
                    <a href="tel:+1234567890" className="hover:text-primary transition-colors text-base">(+234) 705 671 7597</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
