
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { LoadingProvider } from '@/contexts/loading-context';
import { AuthProvider } from '@/contexts/auth-context';
import { CartProvider } from '@/contexts/cart-context';
import LoadingOverlay from '@/components/common/loading-overlay';
import NavigationLoadingManager from '@/components/common/navigation-loading-manager';
import PageWrapper from '@/components/layout/page-wrapper';

export const metadata: Metadata = {
  title: 'SR Fitness',
  description: 'SR Fitness is a wellness consultancy brand that helps people achieve good health through personal training, community outreach, education, and advocacy. Its mission focuses on transformation and inclusivity, having positively impacted thousands via training, seminars and corporate Wellness programs.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen bg-background">
        <LoadingProvider>
          <AuthProvider>
            <CartProvider>
              <NavigationLoadingManager />
              <LoadingOverlay />
              <PageWrapper>
                {children}
              </PageWrapper>
              <Toaster />
            </CartProvider>
          </AuthProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
