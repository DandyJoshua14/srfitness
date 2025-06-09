
"use client";
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react'; // Added React import
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ChevronDown, Dumbbell, Sparkles, Newspaper, Mic, Menu, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleLinkClick = (href: string) => {
    if (href.startsWith('/#') && pathname === '/') {
      const elementId = href.substring(2);
      const element = document.getElementById(elementId);
      element?.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(href); // Set active link for hash links on the same page
    }
    // For page navigations, the pathname useEffect will handle setting activeLink
  };
  
  const isLinkActive = (href: string) => {
    // Exact match for homepage
    if (href === '/' && activeLink === '/') return true;
    // For other pages, check if activeLink starts with the href (accounts for sub-routes)
    // Exclude hash links from this logic if not on homepage
    if (href !== '/' && !href.startsWith('/#') && activeLink.startsWith(href)) return true;
    // For hash links on the homepage
    if (pathname === '/' && href.startsWith('/#') && activeLink === href) return true;
    return false;
  };

  const isServicesActive = servicesDropdownItems.some(item => isLinkActive(item.href));
  const isExploreActive = exploreDropdownItems.some(item => isLinkActive(item.href));

  // Common classes for navigation links
  const navLinkClasses = (isActive: boolean) => cn(
    "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70",
    isScrolled
      ? isActive
        ? "text-primary bg-primary/10 font-semibold" // Scrolled & Active
        : "text-foreground/80 hover:text-primary hover:bg-muted/50" // Scrolled & Inactive
      : isActive
        ? "text-primary font-semibold" // Transparent & Active
        : "text-white hover:text-primary" // Transparent & Inactive
  );

  const dropdownTriggerClasses = (isDropdownActive: boolean) => cn(
    "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 flex items-center gap-1",
     isScrolled
      ? isDropdownActive
        ? "text-primary bg-primary/10 font-semibold" // Scrolled & Active
        : "text-foreground/80 hover:text-primary hover:bg-muted/50" // Scrolled & Inactive
      : isDropdownActive
        ? "text-primary font-semibold" // Transparent & Active
        : "text-white hover:text-primary" // Transparent & Inactive
  );
  
  // Mobile navigation link classes
  const mobileNavLinkClasses = (isActive: boolean) => cn(
    "block px-3 py-3 rounded-md text-base font-medium transition-colors",
    isActive ? "text-primary bg-primary/10" : "text-foreground hover:bg-muted hover:text-primary"
  );

  const mobileAccordionTriggerClasses = (isSectionActive: boolean) => cn(
    "px-3 py-3 text-base font-medium hover:no-underline flex justify-between w-full items-center rounded-md transition-colors",
    isSectionActive ? "text-primary bg-primary/10" : "text-foreground hover:bg-muted hover:text-primary"
  );


  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b transition-all duration-300",
      isScrolled ? "border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-md" : "border-transparent bg-transparent"
    )}>
      <div className="container flex h-16 md:h-20 max-w-screen-xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center space-x-2 shrink-0" onClick={() => { handleLinkClick('/'); if (isMobileMenuOpen) setIsMobileMenuOpen(false); }}>
          <Image 
            src="/logo.png" 
            alt="SR Fitness Logo" 
            width={100} 
            height={35}
            className="h-8 md:h-10 w-auto object-contain" // Responsive height
            data-ai-hint="logo brand"
            priority // Prioritize loading for LCP
          />
          <span className={cn(
            "font-headline text-2xl sm:text-3xl font-bold hidden sm:inline-block transition-colors duration-200 ease-in-out",
            "text-primary" // Always orange for better visibility
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
            <DropdownMenuContent align="start" className="bg-background border-border shadow-lg mt-1 w-56">
              {servicesDropdownItems.map((item) => (
                <DropdownMenuItem key={item.label} asChild className={cn("cursor-pointer", isLinkActive(item.href) ? "bg-muted text-primary" : "hover:bg-muted")}>
                  <Link href={item.href} onClick={() => handleLinkClick(item.href)} className="flex items-center w-full px-3 py-2">
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
            <DropdownMenuContent align="start" className="bg-background border-border shadow-lg mt-1 w-56">
              {exploreDropdownItems.map((item) => (
                <DropdownMenuItem key={item.label} asChild className={cn("cursor-pointer", isLinkActive(item.href) ? "bg-muted text-primary" : "hover:bg-muted")}>
                  <Link href={item.href} onClick={() => handleLinkClick(item.href)} className="flex items-center w-full px-3 py-2">
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
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className={cn(
                  "transition-colors",
                  isScrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10",
                  "hover:text-primary focus-visible:ring-primary/70" // Ensure focus state is prominent
                )}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[320px] bg-background p-0 flex flex-col">
              <SheetHeader className="p-4 border-b border-border flex flex-row justify-between items-center">
                <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <Image src="/logo.png" alt="SR Fitness Logo" width={80} height={28} className="h-7 w-auto object-contain" data-ai-hint="logo brand" />
                  <span className="font-headline text-xl font-bold text-primary">SR Fitness</span>
                </Link>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="text-foreground hover:bg-muted">
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </Button>
                </SheetClose>
              </SheetHeader>
              <div className="p-4 space-y-1 overflow-y-auto flex-grow">
                {topLevelNavItems.map((item) => (
                  <Link key={item.label} href={item.href} onClick={() => { handleLinkClick(item.href); setIsMobileMenuOpen(false); }}
                    className={mobileNavLinkClasses(isLinkActive(item.href))}>
                    {item.label}
                  </Link>
                ))}

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="services" className="border-none">
                    <AccordionTrigger className={mobileAccordionTriggerClasses(isServicesActive)}>
                      Services
                    </AccordionTrigger>
                    <AccordionContent className="pt-1 pl-4 space-y-1">
                      {servicesDropdownItems.map((item) => (
                        <Link key={item.label} href={item.href} onClick={() => { handleLinkClick(item.href); setIsMobileMenuOpen(false); }}
                          className={cn(mobileNavLinkClasses(isLinkActive(item.href)), "flex items-center gap-2")}>
                          {/* Ensure React is in scope for cloneElement */}
                          {React.cloneElement(item.icon, { className: "h-5 w-5" })} {item.label}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="explore" className="border-none">
                    <AccordionTrigger className={mobileAccordionTriggerClasses(isExploreActive)}>
                      Explore
                    </AccordionTrigger>
                    <AccordionContent className="pt-1 pl-4 space-y-1">
                      {exploreDropdownItems.map((item) => (
                        <Link key={item.label} href={item.href} onClick={() => { handleLinkClick(item.href); setIsMobileMenuOpen(false); }}
                          className={cn(mobileNavLinkClasses(isLinkActive(item.href)), "flex items-center gap-2")}>
                           {/* Ensure React is in scope for cloneElement */}
                           {React.cloneElement(item.icon, { className: "h-5 w-5" })} {item.label}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Link href={contactNavItem.href} onClick={() => { handleLinkClick(contactNavItem.href); setIsMobileMenuOpen(false); }}
                  className={mobileNavLinkClasses(isLinkActive(contactNavItem.href))}>
                  {contactNavItem.label}
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

