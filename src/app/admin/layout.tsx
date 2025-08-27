
"use client";

import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '@/components/layout/admin-sidebar';
import LoadingOverlay from '@/components/common/loading-overlay';

export default function AdminLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const authStatus = localStorage.getItem('sr-admin-auth');
      if (authStatus === 'true') {
        setIsAuthenticated(true);
      } else {
        router.replace('/admin/login');
      }
    } catch (error) {
      console.error("Could not access localStorage", error);
      router.replace('/admin/login');
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return <LoadingOverlay />;
  }

  if (!isAuthenticated) {
    // This will be shown briefly before the redirect in useEffect completes.
    // A loading spinner is a good user experience here.
    return <LoadingOverlay />;
  }

  return (
    <div className="flex min-h-screen bg-muted/40">
      <AdminSidebar />
      <div className="flex-grow p-4 sm:p-6 lg:p-8 ml-14 md:ml-64">
        {children}
      </div>
    </div>
  );
}
