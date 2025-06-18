
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { LoadingProvider } from '@/contexts/loading-context';
import { AuthProvider } from '@/contexts/auth-context'; // Added AuthProvider
import LoadingOverlay from '@/components/common/loading-overlay';
import NavigationLoadingManager from '@/components/common/navigation-loading-manager';


export const metadata: Metadata = {
  title: 'SR Fitness',
  description: 'Your journey to strength and wellness starts here.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <LoadingProvider>
          <AuthProvider> {/* AuthProvider wraps content */}
            <NavigationLoadingManager />
            <LoadingOverlay />
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <Toaster />
          </AuthProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
