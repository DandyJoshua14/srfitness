
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Newspaper, Home, LayoutDashboard, Store } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { href: '/admin/blog', label: 'Blog Manager', icon: Newspaper },
  { href: '/admin/store', label: 'Store Manager', icon: Store },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex md:w-64">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5 md:items-stretch">
        <Link
          href="/"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base mb-4 md:self-start md:px-4 md:w-auto"
        >
          <Image src="/SR.jpg" alt="SR Fitness Logo" width={24} height={24} className="h-6 w-6 transition-all group-hover:scale-110" />
          <span className="hidden md:inline">SR Fitness</span>
          <span className="sr-only">SR Fitness</span>
        </Link>
        <TooltipProvider>
          {navItems.map((item) => {
            const isActive = item.exact ? pathname === item.href : pathname.startsWith(item.href);
            return (
              <Tooltip key={item.label}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-auto md:justify-start md:px-3 md:py-2",
                      isActive && "bg-accent text-accent-foreground"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="sr-only md:not-sr-only md:ml-4">{item.label}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="md:hidden">{item.label}</TooltipContent>
              </Tooltip>
            );
          })}
        </TooltipProvider>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5 md:items-stretch">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-auto md:justify-start md:px-3 md:py-2"
              >
                <Home className="h-5 w-5" />
                <span className="sr-only md:not-sr-only md:ml-4">Back to Site</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" className="md:hidden">Back to Site</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  );
}

    