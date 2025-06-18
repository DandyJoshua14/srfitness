
"use client";

import type { ReactNode } from 'react';
import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { User as FirebaseUser } from 'firebase/auth';
import { auth } from '@/lib/firebase/config'; // Ensure this path is correct
import { onAuthStateChanged } from 'firebase/auth';
import { useLoading } from './loading-context'; // To manage global loading during auth state changes

interface AuthContextType {
  currentUser: FirebaseUser | null;
  isLoading: boolean;
  error: string | null;
  isAuthReady: boolean; // To know when initial auth check is done
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [isLoading, setIsLoading] = useState(true); // True initially until first auth check
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    // showLoading(); // Show global loader while checking auth state initially
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsLoading(false);
      setIsAuthReady(true); // Auth state is now determined
      // hideLoading(); // Hide global loader
      console.log("Auth state changed, user: ", user ? user.uid : null);
    }, (authStateError) => {
      console.error("Auth state error:", authStateError);
      setError(authStateError.message);
      setIsLoading(false);
      setIsAuthReady(true);
      // hideLoading();
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, [showLoading, hideLoading]);

  return (
    <AuthContext.Provider value={{ currentUser, isLoading, error, isAuthReady }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
