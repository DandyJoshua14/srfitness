
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ChevronDown, Dumbbell, Sparkles, Newspaper, Mic, Menu, X, NotebookText, ScanLine, Globe, Users as CommunityIcon, UserCircle2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"; // Added Sheet components

const topLevelNavItems = [
  { label: 'Home', href: '/' },
  { label: 'Awards', href: '/awards' },
];

const servicesDropdownItems = [
  { label: 'Personal Training', href: '/personal-training', icon: <Dumbbell className="mr-2 h-4 w-4" /> },
  { label: 'Burn Off Bootcamp', href: '/burn-off-bootcamp', icon: <Sparkles className="mr-2 h-4 w-4" /> },
];

const featuresDropdownItems = [
  { label: 'Meal Planner', href: '/meal-planner', icon: <NotebookText className="mr-2 h-4 w-4" /> },
  { label: 'Smart Mirror', href: '/smart-mirror', icon: <ScanLine className="mr-2 h-4 w-4" /> },
  { label: 'Global Connect', href: '/global-connect', icon: <Globe className="mr-2 h-4 w-4" /> },
  { label: 'Community Hub', href: '/community', icon: <CommunityIcon className="mr-2 h-4 w-4" /> },
];

const exploreDropdownItems = [
  { label: 'Lifestyle Magazine', href: '/lifestyle-magazine', icon: <Newspaper className="mr-2 h-4 w-4" /> },
  { label: 'Public Speaking', href: '/public-speaking', icon: <Mic className="mr-2 h-4 w-4" /> },
];

const profileNavItem = { label: 'Profile', href: '/profile', icon: <UserCircle2 className="mr-2 h-4 w-4" /> };
const contactNavItem = { label: 'Contact', href: '/#contact' };


export default function Header() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileCategories, setExpandedMobileCategories] = useState<Record<string, boolean>>({});

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
    // Close mobile menu when a link is clicked
    setIsMobileMenuOpen(false);
    setExpandedMobileCategories({}); // Reset expanded categories on menu close
  };

  const toggleMobileCategory = (categoryLabel: string, event?: React.MouseEvent) => {
    event?.stopPropagation(); // Prevent sheet from closing if clicked on category header
    setExpandedMobileCategories(prev => ({
      ...prev,
      [categoryLabel]: !prev[categoryLabel]
    }));
  };

  const isLinkActive = (href: string) => {
    if (href === '/' && activeLink === '/') return true;
    if (href !== '/' && !href.startsWith('/#') && activeLink.startsWith(href)) return true;
    if (pathname === '/' && href.startsWith('/#') && activeLink === href) return true;
    return false;
  };

  const isServicesActive = servicesDropdownItems.some(item => isLinkActive(item.href));
  const isExploreActive = exploreDropdownItems.some(item => isLinkActive(item.href));
  const isFeaturesActive = featuresDropdownItems.some(item => isLinkActive(item.href));

  const navLinkBaseClasses = "px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 relative";

  const navLinkClasses = (isActive: boolean) => cn(
    navLinkBaseClasses,
    isScrolled
      ? isActive
        ? "text-primary font-semibold after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-4/5 after:h-[2px] after:bg-primary after:rounded-t-full"
        : "text-gray-200 hover:text-primary"
      : isActive
        ? "text-primary font-semibold after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-4/5 after:h-[2px] after:bg-primary after:rounded-t-full"
        : "text-white hover:text-primary/80"
  );

  const dropdownTriggerClasses = (isDropdownActive: boolean) => cn(
    navLinkBaseClasses, "flex items-center gap-1",
    isScrolled
      ? isDropdownActive
        ? "text-primary font-semibold after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-4/5 after:h-[2px] after:bg-primary after:rounded-t-full"
        : "text-gray-200 hover:text-primary"
      : isDropdownActive
        ? "text-primary font-semibold after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-4/5 after:h-[2px] after:bg-primary after:rounded-t-full"
        : "text-white hover:text-primary/80"
  );
  
  const mobileMenuTriggerButtonClasses = cn(
    "transition-colors rounded-full p-2 text-2xl",
    isScrolled ? "text-gray-200 hover:bg-gray-700/50" : "text-white hover:bg-white/10",
    "hover:text-primary focus-visible:ring-primary/70"
  );

  const mobileCategorySubItemVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: { opacity: 1, y: 0, height: 'auto', transition: { type: "spring", stiffness: 120, damping: 15 } },
    exit: { opacity: 0, y: -10, height: 0, transition: { duration: 0.2 } },
  };

  const allNavItemsForMobile = [
    ...topLevelNavItems,
    { label: 'Services', href: '#', isCategory: true, subItems: servicesDropdownItems },
    { label: 'Features', href: '#', isCategory: true, subItems: featuresDropdownItems },
    { label: 'Explore', href: '#', isCategory: true, subItems: exploreDropdownItems },
    profileNavItem,
    contactNavItem
  ];
  
  const mobileCategoryClasses = (isActive: boolean) => cn(
    "font-headline text-lg py-3 px-4 w-full text-left flex justify-between items-center rounded-md",
    isActive ? "text-primary bg-primary/10" : "text-foreground hover:bg-muted/50"
  );
  
  const mobileLinkClasses = (isActive: boolean) => cn(
    "font-medium text-base py-3 px-4 w-full text-left flex items-center rounded-md",
     isActive ? "text-primary bg-primary/10" : "text-foreground hover:bg-muted/50"
  );
  
  const mobileSubLinkClasses = (isActive: boolean) => cn(
    "font-normal text-base py-2.5 pl-10 pr-4 w-full text-left flex items-center rounded-md", // Indented
    isActive ? "text-primary bg-primary/10" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
  );


  return (
    <>
      <header className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        isScrolled ? "border-white/10 bg-black/80 backdrop-blur-xl shadow-lg" : "border-transparent bg-black/30"
      )}>
        <div className="container flex h-16 md:h-20 max-w-screen-xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8" style={{'--header-height': '80px'} as React.CSSProperties}>
          <Link href="/" className="flex items-center space-x-3 shrink-0" onClick={() => handleLinkClick('/')}>
            <Image
              src="/SR.jpg"
              alt="SR Fitness Logo"
              width={40}
              height={40}
              className="h-8 w-8 md:h-10 md:w-10 rounded-full object-cover"
              data-ai-hint="logo brand"
              priority
            />
            <span className={cn(
              "font-headline text-2xl sm:text-3xl font-bold transition-colors duration-200 ease-in-out",
              isScrolled ? "text-primary" : "text-white"
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
              <DropdownMenuContent align="start" className="bg-popover border-border shadow-xl mt-3 w-56 rounded-lg">
                {servicesDropdownItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild className={cn("cursor-pointer text-sm py-2.5 px-3", isLinkActive(item.href) ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted focus:bg-muted text-popover-foreground")}>
                    <Link href={item.href} onClick={() => handleLinkClick(item.href)} className="flex items-center w-full">
                      {item.icon} {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger
                className={dropdownTriggerClasses(isFeaturesActive)}
              >
                Features <ChevronDown className="h-4 w-4 opacity-70" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-popover border-border shadow-xl mt-3 w-56 rounded-lg">
                {featuresDropdownItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild className={cn("cursor-pointer text-sm py-2.5 px-3", isLinkActive(item.href) ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted focus:bg-muted text-popover-foreground")}>
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
              <DropdownMenuContent align="start" className="bg-popover border-border shadow-xl mt-3 w-56 rounded-lg">
                {exploreDropdownItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild className={cn("cursor-pointer text-sm py-2.5 px-3", isLinkActive(item.href) ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted focus:bg-muted text-popover-foreground")}>
                    <Link href={item.href} onClick={() => handleLinkClick(item.href)} className="flex items-center w-full">
                      {item.icon} {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link
                key={profileNavItem.label}
                href={profileNavItem.href}
                onClick={() => handleLinkClick(profileNavItem.href)}
                className={navLinkClasses(isLinkActive(profileNavItem.href))}
              >
                {profileNavItem.label}
            </Link>

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
                  aria-label="Open menu"
                  className={mobileMenuTriggerButtonClasses}
                >
                  <Menu className="h-7 w-7" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[340px] p-0 flex flex-col bg-background text-foreground">
                <SheetHeader className="p-4 border-b border-border">
                  <SheetTitle className="flex items-center space-x-2">
                     <Link href="/" className="flex items-center space-x-2" onClick={() => handleLinkClick('/')}>
                        <Image
                            src="/logo.png" // Make sure this logo is visible on sheet background
                            alt="SR Fitness Logo"
                            width={32}
                            height={32}
                            className="h-8 w-8 rounded-full object-cover"
                            data-ai-hint="logo brand"
                        />
                        <span className="font-headline text-2xl font-bold text-primary">SR Fitness</span>
                    </Link>
                  </SheetTitle>
                  <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 data-[state=open]:bg-secondary">
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </SheetClose>
                </SheetHeader>
                
                <nav className="flex-grow overflow-y-auto p-4 space-y-1">
                  {allNavItemsForMobile.map((item) => (
                    <div key={item.label} className="w-full">
                      {item.isCategory && item.subItems ? (
                        <>
                          <button
                            onClick={(e) => toggleMobileCategory(item.label, e)}
                            className={mobileCategoryClasses(item.subItems.some(sub => isLinkActive(sub.href)))}
                            aria-expanded={!!expandedMobileCategories[item.label]}
                          >
                            <span className="flex items-center">
                                {item.icon && React.cloneElement(item.icon, { className: "mr-3 h-5 w-5 shrink-0" })}
                                {item.label}
                            </span>
                            <ChevronDown
                              className={cn("ml-2 h-5 w-5 shrink-0 transition-transform duration-300", expandedMobileCategories[item.label] ? "rotate-180" : "")}
                            />
                          </button>
                          <AnimatePresence>
                            {expandedMobileCategories[item.label] && (
                              <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={mobileCategorySubItemVariants}
                                className="flex flex-col space-y-0.5 mt-1 overflow-hidden"
                              >
                                {item.subItems.map(subItem => (
                                   <Link
                                      key={subItem.label}
                                      href={subItem.href}
                                      onClick={() => handleLinkClick(subItem.href)} 
                                      className={mobileSubLinkClasses(isLinkActive(subItem.href))}
                                    >
                                      {subItem.icon && React.cloneElement(subItem.icon, { className: "mr-3 h-5 w-5 shrink-0 opacity-80" })}
                                      <span className="truncate">{subItem.label}</span>
                                    </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => handleLinkClick(item.href)} 
                          className={mobileLinkClasses(isLinkActive(item.href))}
                        >
                           {item.icon && React.cloneElement(item.icon, { className: "mr-3 h-5 w-5 shrink-0" })}
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}

    