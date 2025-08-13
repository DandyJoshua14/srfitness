
"use client"; // Required to use the usePathname hook

import type { ReactNode } from 'react';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { LoadingProvider } from '@/contexts/loading-context';
import { AuthProvider } from '@/contexts/auth-context';
import { CartProvider } from '@/contexts/cart-context';
import LoadingOverlay from '@/components/common/loading-overlay';
import NavigationLoadingManager from '@/components/common/navigation-loading-manager';
import ContactLocationSection from '@/components/sections/contact-location-section';
import { usePathname } from 'next/navigation';

// Metadata needs to be exported from a server component, so we can't define it here anymore.
// We'll rely on the default metadata in a new page.tsx or keep it in the original if this were a larger refactor.
// For now, we'll remove it to allow this component to be a client component.

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith('/admin');
  const isCommunityPage = pathname.startsWith('/community');


  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>SR Fitness</title>
        <meta name="description" content="SR Fitness is a wellness consultancy brand that helps people achieve good health through personal training, community outreach, education, and advocacy. Its mission focuses on transformation and inclusivity, having positively impacted thousands via training, seminars and corporate Wellness programs." />
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
              {!isAdminPage && <Header />}
              <main className="flex-grow">
                {children}
              </main>
              {!isAdminPage && !isCommunityPage && <ContactLocationSection />}
              {!isAdminPage && <Footer />}
              <Toaster />
            </CartProvider>
          </AuthProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
