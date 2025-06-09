
"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ChevronDown, Dumbbell, Sparkles, Newspaper, Mic } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

  useEffect(() => {
    let currentPath = pathname;
    // Preserve hash for homepage links
    if (typeof window !== 'undefined' && window.location.hash && pathname === '/') {
      currentPath = `/${window.location.hash}`;
    }
    setActiveLink(currentPath);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    // Initial check in case page loads scrolled
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleLinkClick = (href: string) => {
    if (href.startsWith('/#') && pathname === '/') {
      const elementId = href.substring(2);
      const element = document.getElementById(elementId);
      element?.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(href); // Set active link for hash links on the same page
    } else {
      // For other links, Next.js navigation will handle it, and useEffect will update activeLink
      // No need to manually set activeLink here for page navigations as pathname change triggers it
    }
  };
  
  const isLinkActive = (href: string) => {
    // Exact match for homepage
    if (href === '/' && activeLink === '/') return true;
    // For other top-level pages, check if activeLink starts with href (e.g., /awards matches /awards)
    if (href !== '/' && !href.startsWith('/#') && activeLink.startsWith(href)) return true;
    // For hash links on the homepage
    if (pathname === '/' && href.startsWith('/#') && activeLink === href) return true;
    return false;
  };

  const isServicesActive = servicesDropdownItems.some(item => isLinkActive(item.href));
  const isExploreActive = exploreDropdownItems.some(item => isLinkActive(item.href));

  const navLinkClasses = (isActive: boolean) => cn(
    "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    isScrolled
      ? isActive
        ? "text-primary bg-primary/10 font-semibold" // Active and Scrolled
        : "text-foreground/80 hover:text-primary hover:bg-muted/50" // Inactive and Scrolled
      : isActive
        ? "text-primary font-semibold" // Active and Not Scrolled (Transparent BG)
        : "text-white hover:text-primary hover:bg-white/10" // Inactive and Not Scrolled
  );

  const dropdownTriggerClasses = (isDropdownActive: boolean) => cn(
    "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-ring flex items-center gap-1",
    isScrolled
      ? isDropdownActive
        ? "text-primary bg-primary/10 font-semibold"
        : "text-foreground/80 hover:text-primary hover:bg-muted/50"
      : isDropdownActive
        ? "text-primary font-semibold"
        : "text-white hover:text-primary hover:bg-white/10"
  );

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b transition-all duration-300",
      isScrolled ? "border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-md" : "border-transparent bg-transparent"
    )}>
      <div className="container flex h-16 md:h-20 max-w-screen-xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2 shrink-0" onClick={() => handleLinkClick('/')}>
          <Image 
            src="/logo.png" 
            alt="SR Fitness Logo" 
            width={100} 
            height={35}
            className="h-8 md:h-10 w-auto object-contain"
            data-ai-hint="logo brand"
            priority
          />
          <span className={cn(
            "font-headline text-2xl sm:text-3xl font-bold hidden sm:inline-block transition-colors duration-200 ease-in-out",
            isScrolled ? "text-primary" : "text-primary" // Logo text color can be always primary or adapt
          )}>SR Fitness</span>
        </Link>

        <nav className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto whitespace-nowrap">
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
            <DropdownMenuContent align="start" className="bg-background border-border shadow-lg mt-1">
              {servicesDropdownItems.map((item) => (
                <DropdownMenuItem key={item.label} asChild className={cn("cursor-pointer", isLinkActive(item.href) ? "bg-muted text-primary" : "hover:bg-muted")}>
                  <Link href={item.href} onClick={() => handleLinkClick(item.href)} className="flex items-center w-full">
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
            <DropdownMenuContent align="start" className="bg-background border-border shadow-lg mt-1">
              {exploreDropdownItems.map((item) => (
                <DropdownMenuItem key={item.label} asChild className={cn("cursor-pointer", isLinkActive(item.href) ? "bg-muted text-primary" : "hover:bg-muted")}>
                  <Link href={item.href} onClick={() => handleLinkClick(item.href)} className="flex items-center w-full">
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
      </div>
    </header>
  );
}
