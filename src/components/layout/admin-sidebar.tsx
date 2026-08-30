/* eslint-disable */
// @ts-nocheck
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { 
  Newspaper, 
  Home, 
  LayoutDashboard, 
  Store, 
  BookOpen, 
  LogOut, 
  Vote, 
  Handshake, 
  Zap, 
  Layers, 
  Menu, 
  X,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useToast } from '@/hooks/use-toast';

export const adminNavItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { href: '/admin/content', label: 'Site Content & Media', icon: Layers, badge: 'CMS' },
  { href: '/admin/blog', label: 'Blog Manager', icon: Newspaper },
  { href: '/admin/store', label: 'Store Manager', icon: Store },
  { href: '/admin/magazine', label: 'Magazine Manager', icon: BookOpen },
  { href: '/admin/votes', label: 'Vote Tracker', icon: Vote },
  { href: '/admin/nominations', label: 'Nominations', icon: Handshake },
  { href: '/admin/integrations', label: 'Integrations', icon: Zap },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { toast } = useToast();
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const handleLogout = () => {
    try {
      localStorage.removeItem('sr-admin-auth');
      toast({ title: "Logged Out", description: "You have been successfully logged out." });
      router.push('/admin/login');
    } catch (error) {
      console.error("Could not access localStorage", error);
      toast({ title: "Logout Error", description: "Could not clear session.", variant: "destructive" });
    }
  };

  return (
    <>
      {/* Mobile Top App Bar for Phones (< md) */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-zinc-950/90 backdrop-blur-xl border-b border-border/80 px-4 py-3 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-2.5">
          <Image src="/SR.jpg" alt="SR Fitness" width={30} height={30} className="h-7 w-7 rounded-full object-cover" />
          <div>
            <span className="font-headline font-bold text-base text-primary block leading-none">SR Fitness</span>
            <span className="text-[10px] text-muted-foreground font-semibold">Admin Panel</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <Button asChild variant="ghost" size="sm" className="h-8 text-xs text-muted-foreground gap-1">
            <Link href="/" target="_blank">
              <ExternalLink className="w-3.5 h-3.5" /> Site
            </Link>
          </Button>

          <Sheet open={isMobileDrawerOpen} onOpenChange={setIsMobileDrawerOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="h-9 w-9 border-border bg-muted/40">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] p-0 flex flex-col bg-background text-foreground">
              <SheetHeader className="p-4 border-b border-border text-left">
                <SheetTitle className="flex items-center gap-2.5">
                  <Image src="/SR.jpg" alt="SR Fitness" width={32} height={32} className="h-8 w-8 rounded-full object-cover" />
                  <div>
                    <span className="font-headline font-bold text-lg text-primary block leading-tight">SR Fitness</span>
                    <span className="text-xs text-muted-foreground font-medium">Company Owner CMS</span>
                  </div>
                </SheetTitle>
              </SheetHeader>

              <nav className="flex-1 overflow-y-auto p-3 space-y-1">
                {adminNavItems.map((item) => {
                  const isActive = item.exact ? pathname === item.href : pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMobileDrawerOpen(false)}
                      className={cn(
                        "flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                        isActive 
                          ? "bg-primary text-primary-foreground font-semibold shadow-sm" 
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="h-4 w-4 shrink-0" />
                        <span>{item.label}</span>
                      </div>
                      {item.badge && (
                        <Badge className={cn("text-[9px] px-1.5 py-0.2", isActive ? "bg-white text-black" : "bg-primary/20 text-primary")}>
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  );
                })}
              </nav>

              <div className="p-3 border-t border-border bg-muted/20 space-y-2">
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-start text-xs font-semibold h-10 border-border gap-2"
                >
                  <Link href="/" target="_blank" onClick={() => setIsMobileDrawerOpen(false)}>
                    <Home className="w-4 h-4 text-primary" /> View Public Website
                  </Link>
                </Button>

                <Button
                  variant="ghost"
                  onClick={handleLogout}
                  className="w-full justify-start text-xs font-semibold text-destructive hover:bg-destructive/10 h-10 gap-2"
                >
                  <LogOut className="w-4 h-4" /> Log Out
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Desktop Persistent Sidebar (>= md) */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden md:flex w-64 flex-col border-r border-border/80 bg-zinc-950/90 backdrop-blur-2xl shadow-xl">
        <div className="p-5 border-b border-border/60 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image 
              src="/SR.jpg" 
              alt="SR Fitness Logo" 
              width={34} 
              height={34} 
              className="h-8 w-8 rounded-full object-cover transition-transform group-hover:scale-105" 
            />
            <div>
              <span className="font-headline font-bold text-lg text-white group-hover:text-primary transition-colors block leading-tight">
                SR Fitness
              </span>
              <span className="text-[10px] text-primary font-bold uppercase tracking-wider">
                Management Portal
              </span>
            </div>
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-1.5">
          {adminNavItems.map((item) => {
            const isActive = item.exact ? pathname === item.href : pathname.startsWith(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" 
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                )}
              >
                <div className="flex items-center gap-3">
                  <item.icon className={cn("h-4 w-4 shrink-0", isActive ? "text-primary-foreground" : "text-primary/80")} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <Badge className={cn("text-[9px] px-1.5 py-0.2", isActive ? "bg-white text-black font-bold" : "bg-primary/20 text-primary")}>
                    {item.badge}
                  </Badge>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border/60 bg-zinc-950/40 space-y-2">
          <Button
            asChild
            variant="ghost"
            className="w-full justify-start text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/5 gap-2 h-9"
          >
            <Link href="/" target="_blank">
              <Home className="w-4 h-4 text-primary" /> Back to Public Site
            </Link>
          </Button>

          <Button
            variant="ghost"
            onClick={handleLogout}
            className="w-full justify-start text-xs font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 gap-2 h-9"
          >
            <LogOut className="w-4 h-4" /> Log Out
          </Button>
        </div>
      </aside>
    </>
  );
}
