/* eslint-disable */
// @ts-nocheck

"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLoading } from '@/contexts/loading-context';

export default function NavigationLoadingManager() {
  const { hideLoading } = useLoading();
  const pathname = usePathname();

  useEffect(() => {
    // Hide loading when path changes (navigation completes)
    // or on initial component mount (first page load)
    hideLoading();
  }, [pathname, hideLoading]);

  return null; // This component does not render anything itself
}
