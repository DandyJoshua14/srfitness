
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ChevronDown, Dumbbell, Sparkles, Newspaper, Mic, Menu, X, NotebookText, ScanLine, Globe, Users as CommunityIcon, UserCircle2 } from 'lucide-react'; // Added new icons
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
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

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: "-100%", transition: { duration: 0.3, ease: "easeInOut" } },
    visible: { opacity: 1, y: "0%", transition: { duration: 0.4, ease: "easeInOut", staggerChildren: 0.05 } },
    exit: { opacity: 0, y: "-100%", transition: { duration: 0.3, ease: "easeInOut", staggerChildren: 0.05, staggerDirection: -1 } },
  };

  const mobileLinkItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
    exit: { opacity: 0, y: -20, transition: { type: "spring", stiffness: 100 } },
  };

  const allNavItemsForMobile = [
    ...topLevelNavItems,
    { label: 'Services', href: '#', isCategory: true, subItems: servicesDropdownItems },
    { label: 'Features', href: '#', isCategory: true, subItems: featuresDropdownItems },
    { label: 'Explore', href: '#', isCategory: true, subItems: exploreDropdownItems },
    profileNavItem,
    contactNavItem
  ];
  
  const mobileLinkClasses = (isActive: boolean) => cn(
    "font-headline text-3xl sm:text-4xl py-3 transition-colors duration-300 w-full text-center",
    isActive ? "text-primary" : "text-gray-100 hover:text-primary/80"
  );
  
  const mobileSubLinkClasses = (isActive: boolean) => cn(
    "font-body text-xl py-2 transition-colors duration-300 w-full text-center flex items-center justify-center",
    isActive ? "text-primary/90" : "text-gray-300 hover:text-primary/70"
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
              src="/SR.jpg" // Assuming SR.jpg is in public folder
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
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              className={mobileMenuTriggerButtonClasses}
            >
              <Menu className="h-7 w-7" />
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
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg p-6 flex flex-col items-center justify-center md:hidden overflow-y-auto"
            onClick={() => setIsMobileMenuOpen(false)} 
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => { e.stopPropagation(); setIsMobileMenuOpen(false); }} 
              aria-label="Close menu"
              className="absolute top-6 right-6 text-gray-100 hover:bg-gray-700/50 hover:text-primary rounded-full p-2"
            >
              <X className="h-8 w-8" />
            </Button>

            <motion.nav
              className="flex flex-col items-center space-y-2 text-center mt-8 w-full"
              variants={mobileMenuVariants} 
            >
              {allNavItemsForMobile.map((item) => (
                <motion.div key={item.label} variants={mobileLinkItemVariants} className="w-full">
                  {item.isCategory && item.subItems ? (
                    <>
                      <span className={mobileLinkClasses(item.subItems.some(sub => isLinkActive(sub.href)))}>{item.label}</span>
                      <motion.div className="flex flex-col items-center space-y-1 mt-1 mb-2">
                        {item.subItems.map(subItem => (
                           <motion.div key={subItem.label} variants={mobileLinkItemVariants} className="w-full">
                            <Link
                              href={subItem.href}
                              onClick={(e) => { e.stopPropagation(); handleLinkClick(subItem.href); }} 
                              className={mobileSubLinkClasses(isLinkActive(subItem.href))}
                            >
                              {subItem.icon && React.cloneElement(subItem.icon, { className: "mr-2 h-5 w-5" })}
                              {subItem.label}
                            </Link>
                           </motion.div>
                        ))}
                      </motion.div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={(e) => { e.stopPropagation(); handleLinkClick(item.href); }} 
                      className={mobileLinkClasses(isLinkActive(item.href))}
                    >
                       {item.icon && React.cloneElement(item.icon, { className: "inline-block mr-2 h-7 w-7 align-middle" })}
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </motion.nav>
            <motion.div
              variants={mobileLinkItemVariants}
              className="absolute bottom-10 flex items-center space-x-2"
            >
                 <Link href="/" className="flex items-center space-x-2" onClick={(e) => { e.stopPropagation(); handleLinkClick('/'); }}>
                    <Image
                        src="/logo.png"
                        alt="SR Fitness Logo"
                        width={40}
                        height={40}
                        className="h-8 w-8 rounded-full object-cover"
                        data-ai-hint="logo brand"
                    />
                    <span className="font-headline text-xl font-bold text-primary">SR Fitness</span>
                </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

