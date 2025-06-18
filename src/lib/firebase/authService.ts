
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  type AuthError,
} from 'firebase/auth';
import { auth } from './config'; // Ensure this path is correct
import type { z } from 'zod';
import type { AuthFormSchema } from '@/components/auth/auth-form'; // Create this type based on your form schema

export async function signUpWithEmailPassword(values: z.infer<typeof AuthFormSchema>) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
    return { user: userCredential.user, error: null };
  } catch (error) {
    return { user: null, error: error as AuthError };
  }
}

export async function signInWithEmailPassword(values: z.infer<typeof AuthFormSchema>) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
    return { user: userCredential.user, error: null };
  } catch (error) {
    return { user: null, error: error as AuthError };
  }
}

export async function logoutUser() {
  try {
    await signOut(auth);
    return { error: null };
  } catch (error) {
    return { error: error as AuthError };
  }
}
