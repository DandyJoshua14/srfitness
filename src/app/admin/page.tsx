
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoadingOverlay from '@/components/common/loading-overlay';

// This page acts as a redirect to the primary admin tool.
export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/admin/content-studio');
  }, [router]);

  // Render a loading state while redirecting
  return <LoadingOverlay />;
}
