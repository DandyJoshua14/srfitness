import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { LoadingProvider } from '@/contexts/loading-context';
import { AuthProvider } from '@/contexts/auth-context';
import { CartProvider } from '@/contexts/cart-context';
import { BookingProvider } from '@/contexts/booking-context';
import { SiteContentProvider } from '@/contexts/site-content-context';
import LoadingOverlay from '@/components/common/loading-overlay';
import NavigationLoadingManager from '@/components/common/navigation-loading-manager';
import PageWrapper from '@/components/layout/page-wrapper';
import BookingModal from '@/components/features/booking/booking-modal';
import MobileQuickActionBar from '@/components/layout/mobile-quick-action-bar';

export const metadata: Metadata = {
  title: {
    default: 'SR Fitness | Premier Personal Training, Bootcamps & Corporate Wellness in Lagos',
    template: '%s | SR Fitness Lagos'
  },
  description: 'Top-rated personal trainer in Lagos, Nigeria. Results-based 1-on-1 coaching, high-energy Burn-Off bootcamps, and corporate wellness programs tailored for busy professionals.',
  keywords: [
    'fitness trainer in Lagos',
    'personal trainer Lagos',
    'bootcamp near me Lagos',
    'personal trainer Lekki',
    'fitness coach Ikeja Victoria Island',
    'Burn Off Bootcamp Lagos',
    'corporate wellness Nigeria',
    'weight loss Lagos',
    'Nigerian diet meal plans'
  ],
  authors: [{ name: 'SR Fitness Coaching Team' }],
  creator: 'SR Fitness',
  metadataBase: new URL('https://srfitness.com.ng'),
  alternates: {
    canonical: 'https://srfitness.com.ng',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://srfitness.com.ng',
    title: 'SR Fitness | Results-Based Coaching & Bootcamps in Lagos',
    description: 'Transform your body with customized 1-on-1 personal training, weekend bootcamps, and executive nutrition plans in Lagos.',
    siteName: 'SR Fitness',
    images: [
      {
        url: '/use.png',
        width: 1200,
        height: 630,
        alt: 'SR Fitness Coaching & Community Lagos'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SR Fitness | #1 Fitness Coaching in Lagos',
    description: 'Transform your body with customized personal training and bootcamps for Lagos professionals.',
    images: ['/use.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: 'SR Fitness',
  image: 'https://srfitness.com.ng/SR.jpg',
  '@id': 'https://srfitness.com.ng',
  url: 'https://srfitness.com.ng',
  telephone: '+2348000000000',
  priceRange: '₦₦ - ₦₦₦',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Victoria Island / Lekki / Ikeja',
    addressLocality: 'Lagos',
    addressRegion: 'Lagos State',
    postalCode: '100001',
    addressCountry: 'NG',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 6.5244,
    longitude: 3.3792,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '06:00',
      closes: '20:30',
    }
  ],
  sameAs: [
    'https://www.instagram.com/srfitnessng',
    'https://twitter.com/srfitnessng'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'SR Fitness Programs',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '1-on-1 Personal Training in Lagos'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Burn-Off Weekend Bootcamp'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Corporate Wellness & Team Ergonomics'
        }
      }
    ]
  }
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
        {/* Google AdSense script - async load */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8362821240895573"
          crossOrigin="anonymous"></script>
        {/* Structured Data (Schema.org JSON-LD) for Local Lagos SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen bg-background pb-16 md:pb-0">
        <LoadingProvider>
          <AuthProvider>
            <CartProvider>
              <BookingProvider>
                <SiteContentProvider>
                  <NavigationLoadingManager />
                  <LoadingOverlay />
                  <PageWrapper>
                    {children}
                  </PageWrapper>
                  <BookingModal />
                  <MobileQuickActionBar />
                  <Toaster />
                </SiteContentProvider>
              </BookingProvider>
            </CartProvider>
          </AuthProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
