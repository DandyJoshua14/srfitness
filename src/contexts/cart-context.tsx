
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import type { Product } from '@/lib/types';

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Product) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
  updateItemSize: (itemId: string, size: string) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    try {
      const storedCart = localStorage.getItem('srFitnessCart');
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error("Failed to parse cart from localStorage", error);
      setCartItems([]);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('srFitnessCart', JSON.stringify(cartItems));
    } catch (error) {
      console.error("Failed to save cart to localStorage", error);
    }
  }, [cartItems]);

  const addToCart = useCallback((item: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        toast({ title: "Item Updated", description: `${item.name} quantity increased in your cart.` });
        return prevItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        toast({ title: "Item Added", description: `${item.name} has been added to your cart.` });
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  }, [toast]);

  const updateQuantity = useCallback((itemId: string, quantity: number) => {
    setCartItems(prevItems => {
      if (quantity <= 0) {
        return prevItems.filter(i => i.id !== itemId);
      }
      return prevItems.map(i =>
        i.id === itemId ? { ...i, quantity } : i
      );
    });
  }, []);

  const removeFromCart = useCallback((itemId: string) => {
    const itemToRemove = cartItems.find(i => i.id === itemId);
    if (itemToRemove) {
      setCartItems(prevItems => prevItems.filter(i => i.id !== itemId));
      toast({ title: "Item Removed", description: `${itemToRemove.name} has been removed from your cart.`, variant: 'destructive' });
    }
  }, [cartItems, toast]);

  const updateItemSize = useCallback((itemId: string, size: string) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, selectedSize: size } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);
  
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);


  const value = {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    updateItemSize,
    clearCart,
    cartCount,
    cartTotal
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
