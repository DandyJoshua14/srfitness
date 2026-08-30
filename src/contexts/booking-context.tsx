"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface BookingOptions {
  service?: string;
  plan?: string;
  notes?: string;
}

interface BookingContextType {
  isOpen: boolean;
  options: BookingOptions;
  openBooking: (options?: BookingOptions) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<BookingOptions>({});

  const openBooking = (newOptions?: BookingOptions) => {
    if (newOptions) {
      setOptions(newOptions);
    } else {
      setOptions({});
    }
    setIsOpen(true);
  };

  const closeBooking = () => {
    setIsOpen(false);
  };

  return (
    <BookingContext.Provider value={{ isOpen, options, openBooking, closeBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
