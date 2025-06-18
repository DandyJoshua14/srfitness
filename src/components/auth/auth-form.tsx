
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { signInWithEmailPassword, signUpWithEmailPassword } from "@/lib/firebase/authService";
import type { AuthError } from "firebase/auth";

export const AuthFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long." }),
});

interface AuthFormProps {
  mode: 'login' | 'signup';
  onSuccess?: () => void; // Callback for successful auth
}

export default function AuthForm({ mode, onSuccess }: AuthFormProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof AuthFormSchema>>({
    resolver: zodResolver(AuthFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof AuthFormSchema>) {
    setIsLoading(true);
    setError(null);

    let result;
    if (mode === 'signup') {
      result = await signUpWithEmailPassword(values);
    } else {
      result = await signInWithEmailPassword(values);
    }

    setIsLoading(false);

    if (result.error) {
      const authError = result.error as AuthError;
      let friendlyMessage = "An unexpected error occurred. Please try again.";
      switch (authError.code) {
        case 'auth/email-already-in-use':
          friendlyMessage = "This email is already in use. Please try logging in or use a different email.";
          break;
        case 'auth/user-not-found':
        case 'auth/wrong-password':
        case 'auth/invalid-credential':
          friendlyMessage = "Invalid email or password. Please check your credentials and try again.";
          break;
        case 'auth/weak-password':
          friendlyMessage = "The password is too weak. Please choose a stronger password.";
          break;
        default:
          console.error(`${mode} error:`, authError);
      }
      setError(friendlyMessage);
      toast({
        title: `${mode === 'signup' ? 'Sign Up' : 'Login'} Failed`,
        description: friendlyMessage,
        variant: "destructive",
      });
    } else {
      toast({
        title: mode === 'signup' ? 'Sign Up Successful!' : 'Login Successful!',
        description: mode === 'signup' ? 'Welcome! Your account has been created.' : 'Welcome back!',
      });
      form.reset();
      if (onSuccess) {
        onSuccess(); // Call the callback to close modal, etc.
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {error && (
          <p className="text-sm font-medium text-destructive">{error}</p>
        )}
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            mode === 'signup' ? 'Create Account' : 'Log In'
          )}
        </Button>
      </form>
    </Form>
  );
}
