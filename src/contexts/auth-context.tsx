
"use client";

import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';

// NOTE: This is a mocked version to prevent Firebase SDK bundling issues.
// All authentication functionality is effectively disabled.

interface AuthContextType {
  currentUser: any | null; // Using 'any' as FirebaseUser is no longer imported
  isLoading: boolean;
  error: string | null;
  isAuthReady: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const value: AuthContextType = {
    currentUser: null,
    isLoading: false,
    isAuthReady: true, // No longer waiting for Firebase, so it's always ready.
    error: null,
  };

  return (
    <AuthContext.Provider value={value}>
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
