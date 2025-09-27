
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Store, ShoppingCart, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function AdminStoreManagerPage() {

  return (
    <div className="space-y-8">
      <Card className="shadow-lg border-primary/20">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-primary flex items-center">
            <Store className="mr-3 h-8 w-8" />
            Store Manager
          </CardTitle>
          <CardDescription>
            Add, view, and manage products for the SR Fitness Marketplace.
          </CardDescription>
        </CardHeader>
      </Card>
      
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center text-destructive">
            <AlertTriangle className="mr-2 h-6 w-6"/> Database Disconnected
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">
                The store manager is temporarily disabled because the marketplace is currently using static placeholder data.
            </p>
            <p className="text-muted-foreground mb-6">
                To re-enable database functionality, the app code needs to be updated to connect to Firestore.
            </p>
            <Button asChild>
                <Link href="/marketplace">
                    <ShoppingCart className="mr-2 h-4 w-4" /> View Marketplace
                </Link>
            </Button>
        </CardContent>
      </Card>
    </div>
  );
}
