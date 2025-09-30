
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { KeyRound, LogIn, Mail } from 'lucide-react';
import Image from 'next/image';

// IMPORTANT: This is a conceptual, insecure login for demonstration purposes.
// In a real application, use a proper authentication provider.
const ADMIN_EMAIL = "srfitness247@gmail.com";
const ADMIN_PASSWORD = "iamfit247";

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      toast({
        title: "Login Successful",
        description: "Welcome to the Admin Dashboard.",
      });
      try {
        localStorage.setItem('sr-admin-auth', 'true');
        router.push('/admin');
      } catch (error) {
         toast({
            title: "Login Failed",
            description: "Could not save session. Please enable cookies/storage.",
            variant: "destructive",
         });
         setIsLoading(false);
      }
    } else {
      toast({
        title: "Login Failed",
        description: "The email or password you entered is incorrect.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md shadow-2xl border-primary/20">
        <CardHeader className="text-center">
            <Image src="/SR.jpg" alt="SR Fitness Logo" width={80} height={80} className="mx-auto rounded-full mb-4" />
          <CardTitle className="font-headline text-3xl text-primary">Admin Access</CardTitle>
          <CardDescription>Please enter your credentials to manage the site.</CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin} method="POST">
            <CardContent className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                 <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="pl-10"
                        placeholder="admin@example.com"
                    />
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                    <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="pl-10"
                        placeholder="••••••••"
                    />
                </div>
            </div>
            </CardContent>
            <CardFooter>
            <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Log In'}
                {!isLoading && <LogIn className="ml-2 h-4 w-4" />}
            </Button>
            </CardFooter>
        </form>
      </Card>
    </div>
  );
}
