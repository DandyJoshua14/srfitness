
import type { ReactNode } from 'react';
import AdminSidebar from '@/components/layout/admin-sidebar';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-muted/40">
      <AdminSidebar />
      <div className="flex-grow p-4 sm:p-6 lg:p-8 ml-14 md:ml-64">
        {children}
      </div>
    </div>
  );
}
