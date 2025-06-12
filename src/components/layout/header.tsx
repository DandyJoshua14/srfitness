
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ChevronDown, Dumbbell, Sparkles, Newspaper, Mic, Menu, X, NotebookText, ScanLine, Globe, Users as CommunityIcon, UserCircle2, Wrench, ShieldAlert, LogIn, UserPlus } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

// MOCK: In a real app, this would come from an authentication context/state
const MOCK_IS_ADMIN = true; // Set to true to show admin links, false to hide
const MOCK_IS_LOGGED_IN = false; // Set to true to simulate a logged-in user

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

const exploreDropdownItemsBase = [
  { label: 'Lifestyle Magazine', href: '/lifestyle-magazine', icon: <Newspaper className="mr-2 h-4 w-4" /> },
  { label: 'Public Speaking', href: '/public-speaking', icon: <Mic className="mr-2 h-4 w-4" /> },
  { label: 'Equipment Solutions', href: '/equipment-services', icon: <Wrench className="mr-2 h-4 w-4" /> },
];

const adminStudioItem = { label: 'Admin Studio', href: '/admin/content-studio', icon: <ShieldAlert className="mr-2 h-4 w-4" />, isAdminOnly: true };

const profileNavItem = { label: 'Profile', href: '/profile', icon: <UserCircle2 className="mr-2 h-4 w-4" /> };
const loginNavItem = { label: 'Login', href: '#', icon: <LogIn className="mr-2 h-4 w-4" /> }; // Placeholder href
const signupNavItem = { label: 'Sign Up', href: '#', icon: <UserPlus className="mr-2 h-4 w-4" /> }; // Placeholder href
const contactNavItem = { label: 'Contact', href: '/#contact' };


export default function Header() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileCategories, setExpandedMobileCategories] = useState<Record<string, boolean>>({});

  const exploreDropdownItems = MOCK_IS_ADMIN ? [...exploreDropdownItemsBase, adminStudioItem] : exploreDropdownItemsBase;

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
    } else if (href === '#') {
      // Placeholder action for Login/Sign Up
      console.log(`${href === loginNavItem.href ? "Login" : "Sign Up"} button clicked (placeholder)`);
    }
    setIsMobileMenuOpen(false);
    setExpandedMobileCategories({});
  };

  const toggleMobileCategory = (categoryLabel: string, event?: React.MouseEvent) => {
    event?.stopPropagation();
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

  const authNavItemsForMobile = MOCK_IS_LOGGED_IN 
    ? [profileNavItem] 
    : [loginNavItem, signupNavItem];

  const allNavItemsForMobile = [
    ...topLevelNavItems,
    { label: 'Services', href: '#', isCategory: true, subItems: servicesDropdownItems, icon: <Dumbbell /> },
    { label: 'Features', href: '#', isCategory: true, subItems: featuresDropdownItems, icon: <Sparkles /> },
    { label: 'Explore', href: '#', isCategory: true, subItems: exploreDropdownItems.filter(item => MOCK_IS_ADMIN || !item.isAdminOnly), icon: <Newspaper /> },
    ...authNavItemsForMobile,
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
  
  const mobileSubLinkClasses = (isActive: boolean, isAdminLink?: boolean) => cn(
    "font-normal text-base py-2.5 pl-10 pr-4 w-full text-left flex items-center rounded-md", 
    isActive ? "text-primary bg-primary/10" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
    isAdminLink && "font-semibold text-primary/90"
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
              <DropdownMenuContent align="start" className="bg-popover border-border shadow-xl mt-3 w-max rounded-lg">
                {exploreDropdownItems.map((item) => {
                  if (item.isAdminOnly && !MOCK_IS_ADMIN) return null;
                  return (
                    <DropdownMenuItem key={item.label} asChild className={cn("cursor-pointer text-sm py-2.5 px-3", isLinkActive(item.href) ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted focus:bg-muted text-popover-foreground", item.isAdminOnly && "font-semibold text-primary/90")}>
                      <Link href={item.href} onClick={() => handleLinkClick(item.href)} className="flex items-center w-full">
                        {item.icon} {item.label}
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
            
            {MOCK_IS_LOGGED_IN ? (
              <Link
                key={profileNavItem.label}
                href={profileNavItem.href}
                onClick={() => handleLinkClick(profileNavItem.href)}
                className={navLinkClasses(isLinkActive(profileNavItem.href))}
              >
                {profileNavItem.label}
              </Link>
            ) : (
              <>
                <Button 
                  variant={isScrolled ? "outline" : "ghost"} 
                  size="sm" 
                  onClick={() => handleLinkClick(loginNavItem.href)} 
                  className={cn(
                    "font-medium",
                    isScrolled ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground" : "text-white hover:bg-white/10 hover:text-primary"
                  )}
                >
                  <LogIn className="mr-2 h-4 w-4" /> {loginNavItem.label}
                </Button>
                <Button 
                  size="sm" 
                  onClick={() => handleLinkClick(signupNavItem.href)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                >
                   <UserPlus className="mr-2 h-4 w-4" /> {signupNavItem.label}
                </Button>
              </>
            )}

            <Link
              href={contactNavItem.href}
              onClick={() => handleLinkClick(contactNavItem.href)}
              className={navLinkClasses(isLinkActive(contactNavItem.href))}
            >
              {contactNavItem.label}
            </Link>
          </nav>

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
                <SheetHeader className="pl-4 pr-12 py-3 border-b border-border text-left">
                  <SheetTitle asChild>
                    <Link href="/" className="flex items-center space-x-2" onClick={() => handleLinkClick('/')}>
                        <Image
                            src="/SR.jpg" 
                            alt="SR Fitness Logo"
                            width={32}
                            height={32}
                            className="h-8 w-8 rounded-full object-cover"
                            data-ai-hint="logo brand"
                        />
                        <span className="font-headline text-xl font-bold text-primary">SR Fitness</span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                
                <nav className="flex-grow overflow-y-auto p-4 space-y-1">
                  {allNavItemsForMobile.map((item) => (
                    <div key={item.label} className="w-full">
                      {item.isCategory && item.subItems ? (
                        <>
                          <button
                            onClick={(e) => toggleMobileCategory(item.label, e)}
                            className={mobileCategoryClasses(item.subItems.some(sub => isLinkActive(sub.href) && (MOCK_IS_ADMIN || !sub.isAdminOnly)))}
                            aria-expanded={!!expandedMobileCategories[item.label]}
                          >
                            <span className="flex items-center">
                                {item.icon && React.cloneElement(item.icon as React.ReactElement, { className: "mr-3 h-5 w-5 shrink-0" })}
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
                                {item.subItems.map(subItem => {
                                   if (subItem.isAdminOnly && !MOCK_IS_ADMIN) return null;
                                   return (
                                     <Link
                                        key={subItem.label}
                                        href={subItem.href}
                                        onClick={() => handleLinkClick(subItem.href)} 
                                        className={mobileSubLinkClasses(isLinkActive(subItem.href), subItem.isAdminOnly)}
                                      >
                                        {subItem.icon && React.cloneElement(subItem.icon, { className: "mr-3 h-5 w-5 shrink-0 opacity-80" })}
                                        <span className="truncate">{subItem.label}</span>
                                      </Link>
                                   );
                                })}
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
                           {item.icon && React.cloneElement(item.icon as React.ReactElement, { className: "mr-3 h-5 w-5 shrink-0" })}
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
                 {/* Mobile Footer with Login/Signup or Profile */}
                <div className="border-t border-border p-4">
                  {MOCK_IS_LOGGED_IN ? (
                     <Link
                      href={profileNavItem.href}
                      onClick={() => handleLinkClick(profileNavItem.href)} 
                      className={mobileLinkClasses(isLinkActive(profileNavItem.href))}
                    >
                       {profileNavItem.icon && React.cloneElement(profileNavItem.icon as React.ReactElement, { className: "mr-3 h-5 w-5 shrink-0" })}
                      {profileNavItem.label}
                    </Link>
                  ) : (
                    <div className="space-y-2">
                       <Button 
                        variant="outline" 
                        className="w-full justify-start" 
                        onClick={() => handleLinkClick(loginNavItem.href)}
                      >
                        <LogIn className="mr-2 h-4 w-4" /> {loginNavItem.label}
                      </Button>
                      <Button 
                        className="w-full justify-start bg-primary hover:bg-primary/90 text-primary-foreground" 
                        onClick={() => handleLinkClick(signupNavItem.href)}
                      >
                        <UserPlus className="mr-2 h-4 w-4" /> {signupNavItem.label}
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}

    