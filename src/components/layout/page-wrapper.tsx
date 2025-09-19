
"use client";

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ContactLocationSection from '@/components/sections/contact-location-section';

export default function PageWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith('/admin');
  const isVoteCheckout = pathname.startsWith('/checkout') || pathname.startsWith('/vote/callback') || pathname.startsWith('/awards/checkout') || pathname.startsWith('/awards/callback');

  if (isVoteCheckout) {
    return <main className="flex-grow">{children}</main>;
  }

  return (
    <div className={isAdminPage ? 'admin-layout-wrapper' : ''}>
      {!isAdminPage && <Header />}
      <main className="flex-grow">
        {children}
      </main>
      {!isAdminPage && <ContactLocationSection />}
      {!isAdminPage && <Footer />}
    </div>
  );
}
