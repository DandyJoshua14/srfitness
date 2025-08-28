
"use client";

import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import AdminSidebar from '@/components/layout/admin-sidebar';
import LoadingOverlay from '@/components/common/loading-overlay';

export default function AdminLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // If we are already on the login page, don't perform any checks.
    if (pathname === '/admin/login') {
      setIsAuthenticated(true); // Allow login page to render
      setIsLoading(false);
      return;
    }

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
  }, [router, pathname]);

  if (isLoading) {
    return <LoadingOverlay />;
  }

  // If on the login page, just render the children (the login page itself)
  // without the admin sidebar.
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }
  
  if (!isAuthenticated) {
    // This will be shown briefly before the redirect in useEffect completes.
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
