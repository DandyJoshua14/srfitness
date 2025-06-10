
"use client";
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ChevronDown, Dumbbell, Sparkles, Newspaper, Mic, Menu, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';

const topLevelNavItems = [
  { label: 'Home', href: '/' },
  { label: 'Awards', href: '/awards' },
];

const servicesDropdownItems = [
  { label: 'Personal Training', href: '/personal-training', icon: <Dumbbell className="mr-2 h-4 w-4" /> },
  { label: 'Burn Off Bootcamp', href: '/burn-off-bootcamp', icon: <Sparkles className="mr-2 h-4 w-4" /> },
];

const exploreDropdownItems = [
  { label: 'Lifestyle Magazine', href: '/lifestyle-magazine', icon: <Newspaper className="mr-2 h-4 w-4" /> },
  { label: 'Public Speaking', href: '/public-speaking', icon: <Mic className="mr-2 h-4 w-4" /> },
];

const contactNavItem = { label: 'Contact', href: '/#contact' };

export default function Header() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let currentPath = pathname;
    if (typeof window !== 'undefined' && window.location.hash && pathname === '/') {
      currentPath = `/${window.location.hash}`;
    }
    setActiveLink(currentPath);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Increased scroll threshold
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleLinkClick = (href: string) => {
    if (href.startsWith('/#') && pathname === '/') {
      const elementId = href.substring(2);
      const element = document.getElementById(elementId);
      element?.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(href);
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };
  
  const isLinkActive = (href: string) => {
    if (href === '/' && activeLink === '/') return true;
    if (href !== '/' && !href.startsWith('/#') && activeLink.startsWith(href)) return true;
    if (pathname === '/' && href.startsWith('/#') && activeLink === href) return true;
    return false;
  };

  const isServicesActive = servicesDropdownItems.some(item => isLinkActive(item.href));
  const isExploreActive = exploreDropdownItems.some(item => isLinkActive(item.href));

  const navLinkBaseClasses = "px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70";
  
  const navLinkClasses = (isActive: boolean) => cn(
    navLinkBaseClasses,
    isScrolled
      ? isActive
        ? "text-primary font-semibold" // Scrolled & Active
        : "text-foreground/80 hover:text-primary" // Scrolled & Inactive
      : isActive
        ? "text-primary font-semibold" // Transparent & Active
        : "text-white hover:text-primary/80" // Transparent & Inactive
  );

  const dropdownTriggerClasses = (isDropdownActive: boolean) => cn(
    navLinkBaseClasses, "flex items-center gap-1",
     isScrolled
      ? isDropdownActive
        ? "text-primary font-semibold" 
        : "text-foreground/80 hover:text-primary"
      : isDropdownActive
        ? "text-primary font-semibold" 
        : "text-white hover:text-primary/80"
  );

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { opacity: 1, y: "0%", transition: { duration: 0.4, ease: "easeInOut" } },
    exit: { opacity: 0, y: "-100%", transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const mobileLinkClasses = (isActive: boolean) => cn(
    "font-headline text-3xl py-3 transition-colors duration-300",
    isActive ? "text-primary" : "text-foreground hover:text-primary/80"
  );

  return (
    <>
      <header className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        isScrolled ? "border-border/40 bg-background/90 backdrop-blur-lg shadow-lg" : "border-transparent bg-transparent"
      )}>
        <div className="container flex h-20 max-w-screen-xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center space-x-2 shrink-0" onClick={() => handleLinkClick('/')}>
            <Image 
              src="/logo.png" 
              alt="SR Fitness Logo" 
              width={120} 
              height={40}
              className="h-10 md:h-12 w-auto object-contain"
              data-ai-hint="logo brand"
              priority
            />
            <span className={cn(
              "font-headline text-2xl sm:text-3xl font-bold hidden sm:inline-block transition-colors duration-200 ease-in-out",
              "text-primary"
            )}>SR Fitness</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {topLevelNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => handleLinkClick(item.href)}
                className={navLinkClasses(isLinkActive(item.href))}
              >
                {item.label}
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger 
                className={dropdownTriggerClasses(isServicesActive)}
              >
                Services <ChevronDown className="h-4 w-4 opacity-70" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-background border-border shadow-lg mt-2 w-56">
                {servicesDropdownItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild className={cn("cursor-pointer text-sm", isLinkActive(item.href) ? "bg-muted text-primary" : "hover:bg-muted focus:bg-muted")}>
                    <Link href={item.href} onClick={() => handleLinkClick(item.href)} className="flex items-center w-full px-3 py-2.5">
                      {item.icon} {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger 
                className={dropdownTriggerClasses(isExploreActive)}
              >
                Explore <ChevronDown className="h-4 w-4 opacity-70" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-background border-border shadow-lg mt-2 w-56">
                {exploreDropdownItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild className={cn("cursor-pointer text-sm", isLinkActive(item.href) ? "bg-muted text-primary" : "hover:bg-muted focus:bg-muted")}>
                    <Link href={item.href} onClick={() => handleLinkClick(item.href)} className="flex items-center w-full px-3 py-2.5">
                      {item.icon} {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href={contactNavItem.href}
              onClick={() => handleLinkClick(contactNavItem.href)}
              className={navLinkClasses(isLinkActive(contactNavItem.href))}
            >
              {contactNavItem.label}
            </Link>
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              className={cn(
                "transition-colors rounded-full p-2",
                isScrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10",
                "hover:text-primary focus-visible:ring-primary/70"
              )}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[100] bg-background p-6 flex flex-col items-center justify-center md:hidden"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
              className="absolute top-6 right-6 text-foreground hover:bg-muted hover:text-primary rounded-full p-2"
            >
              <X className="h-7 w-7" />
            </Button>
            
            <nav className="flex flex-col items-center space-y-6 text-center mt-8">
              {[...topLevelNavItems, 
               { label: 'Services', href: '/personal-training' }, // Link to main service page or first service
               { label: 'Explore', href: '/lifestyle-magazine' }, // Link to main explore page or first explore item
               contactNavItem
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => handleLinkClick(item.href)}
                  className={mobileLinkClasses(isLinkActive(item.href))}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
             <Link href="/" className="absolute bottom-8 flex items-center space-x-2" onClick={() => handleLinkClick('/')}>
                <Image src="/logo.png" alt="SR Fitness Logo" width={100} height={33} className="h-8 w-auto object-contain" data-ai-hint="logo brand" />
                <span className="font-headline text-xl font-bold text-primary">SR Fitness</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
