
import type { ReactNode } from 'react';
import AdminSidebar from '@/components/layout/admin-sidebar';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ShieldAlert } from 'lucide-react';


export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-muted/40">
      <AdminSidebar />
      <div className="flex-grow p-4 sm:p-6 lg:p-8 ml-14 md:ml-64">
        <Alert variant="destructive" className="mb-6 border-red-500/50 text-red-700 bg-red-50">
            <ShieldAlert className="h-5 w-5 !text-red-600" />
            <AlertTitle className="text-red-700 font-semibold">Security Notice</AlertTitle>
            <AlertDescription className="text-red-600">
              This admin area is for demonstration purposes and lacks robust authentication. In a production environment, it would require secure access controls.
            </AlertDescription>
        </Alert>
        {children}
      </div>
    </div>
  );
}
