/* eslint-disable */
// @ts-nocheck

"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ChevronDown, Dumbbell, Sparkles, Newspaper, Mic, Menu, X, NotebookText, ScanLine, Globe, Users as CommunityIcon, Wrench, ShieldAlert, Lightbulb, Award, CalendarDays, Users, Briefcase, ShoppingCart, Vote, CreditCard } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useLoading } from '@/contexts/loading-context';
import { useCart } from '@/contexts/cart-context';
import VoiceAgentDialog from '@/components/features/voice-agent/voice-agent-dialog';


const topLevelNavItems = [
  { label: 'Home', href: '/' },
];

const servicesDropdownItems = [
  { label: 'Personal Training', href: '/personal-training', icon: <Dumbbell className="mr-2 h-4 w-4" /> },
  { label: 'Corporate Wellness', href: '/corporate-wellness', icon: <Briefcase className="mr-2 h-4 w-4" /> },
  { label: 'Public Speaking', href: '/public-speaking', icon: <Mic className="mr-2 h-4 w-4" /> },
  { label: 'Consultancy', href: '/equipment-services', icon: <Wrench className="mr-2 h-4 w-4" /> },
];

const eventsDropdownItems = [
  { label: 'SR Fitness Awards', href: '/awards', icon: <Award className="mr-2 h-4 w-4" /> },
  { label: 'Burn Off Bootcamp', href: '/burn-off-bootcamp', icon: <Sparkles className="mr-2 h-4 w-4" /> },
];

const productsDropdownItems = [
  { label: 'Lifestyle Magazine', href: '/lifestyle-magazine', icon: <Newspaper className="mr-2 h-4 w-4" /> },
  {label: 'Marketplace', href: '/marketplace', icon: <ShoppingCart className="mr-2 h-4 w-4" />},
];

const blogNavItem = { label: 'Blog', href: '/community' };
const voteNavItem = { label: 'Vote', href: '/vote' };
const contactNavItem = { label: 'Contact', href: '#contact' };
const checkoutNavItem = { label: 'Checkout', href: '/checkout' };


export default function Header() {
  const pathname = usePathname();
  const { showLoading } = useLoading();
  const { cartCount } = useCart();

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

  const handleLinkClick = (href: string, isExternalOrSamePageHash: boolean = false) => {
    if (!isExternalOrSamePageHash && !href.startsWith('#category-toggle-') && !href.startsWith('#auth-action-') && !href.startsWith('#')) {
        showLoading();
    }
    if (href.startsWith('#') && pathname !== '/') {
        const elementId = href.substring(1);
        const element = document.getElementById(elementId);
        element?.scrollIntoView({ behavior: 'smooth' });
    } else if (href.startsWith('/#')) {
        const elementId = href.substring(2);
        const element = document.getElementById(elementId);
        element?.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveLink(href);

    if (!href.startsWith('#category-toggle-') && !href.startsWith('#auth-action-')) {
        setIsMobileMenuOpen(false);
        setExpandedMobileCategories({});
    }
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
    if (href !== '/' && !href.startsWith('#') && activeLink.startsWith(href)) return true;
    if (activeLink.includes(href)) return true;
    return false;
  };
  
  const isCategoryActiveForMobile = (subItems: any[]) => {
    return subItems.some(item => isLinkActive(item.href));
  };


  const isServicesActive = servicesDropdownItems.some(item => isLinkActive(item.href));
  const isEventsActive = eventsDropdownItems.some(item => isLinkActive(item.href));
  const isProductsActive = productsDropdownItems.some(item => isLinkActive(item.href));

  const navLinkBaseClasses = "px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 relative";

  const navLinkClasses = (isActive: boolean) => cn(
    navLinkBaseClasses,
    isScrolled
      ? isActive
        ? "text-primary font-semibold after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-4/5 after:h-[2px] after:bg-primary after:rounded-t-full"
        : "text-foreground/70 hover:text-primary"
      : isActive
        ? "text-primary font-semibold after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-4/5 after:h-[2px] after:bg-primary after:rounded-t-full"
        : "text-white hover:text-primary/80"
  );

  const dropdownTriggerClasses = (isDropdownActive: boolean) => cn(
    navLinkBaseClasses, "flex items-center gap-1",
    isScrolled
      ? isDropdownActive
        ? "text-primary font-semibold after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-4/5 after:h-[2px] after:bg-primary after:rounded-t-full"
        : "text-foreground/70 hover:text-primary"
      : isDropdownActive
        ? "text-primary font-semibold after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-4/5 after:h-[2px] after:bg-primary after:rounded-t-full"
        : "text-white hover:text-primary/80"
  );
  
  const mobileMenuTriggerButtonClasses = cn(
    "transition-colors rounded-full p-2 text-2xl",
    isScrolled ? "text-foreground/80 hover:bg-muted/50" : "text-white hover:bg-white/10",
    "hover:text-primary focus-visible:ring-primary/70"
  );

  const mobileCategorySubItemVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: { opacity: 1, y: 0, height: 'auto', transition: { type: "spring", stiffness: 120, damping: 15 } },
    exit: { opacity: 0, y: -10, height: 0, transition: { duration: 0.2 } },
  };

  const allNavItemsForMobile = [
    ...topLevelNavItems,
    { label: 'Services', href: '#category-toggle-services', isCategory: true, subItems: servicesDropdownItems, icon: <Dumbbell /> },
    { label: 'Events', href: '#category-toggle-events', isCategory: true, subItems: eventsDropdownItems, icon: <CalendarDays /> },
    { label: 'Products', href: '#category-toggle-products', isCategory: true, subItems: productsDropdownItems, icon: <ShoppingCart /> },
    { ...blogNavItem, icon: <CommunityIcon /> },
    { ...voteNavItem, icon: <Vote />},
    {...checkoutNavItem, icon: <CreditCard />},
    contactNavItem,
  ];
  
  const mobileCategoryClasses = (isActive: boolean, isExpanded: boolean) => cn(
    "font-headline text-lg py-3.5 px-4 w-full text-left flex justify-between items-center rounded-lg transition-colors duration-150",
    isActive && !isExpanded ? "text-primary bg-primary/10 font-semibold" : "text-foreground hover:bg-muted/60",
    isExpanded ? "bg-muted/80" : ""
  );
  
  const mobileLinkClasses = (isActive: boolean) => cn(
    "font-medium text-base py-3.5 px-4 w-full text-left flex items-center rounded-lg transition-colors duration-150 relative",
     isActive ? "text-primary bg-primary/10 font-semibold" : "text-foreground hover:bg-muted/60"
  );
  
  const mobileSubLinkClasses = (isActive: boolean, isAdminLink?: boolean) => cn(
    "font-normal text-base py-3 pl-12 pr-4 w-full text-left flex items-center rounded-lg transition-colors duration-150", 
    isActive ? "text-primary bg-primary/10 font-medium" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
    isAdminLink && "font-semibold text-primary/90"
  );

  const iconButtonClasses = (isActive?: boolean) => cn(
      "relative hidden md:inline-flex ml-2 h-auto p-2 text-2xl rounded-full transition-colors focus-visible:ring-primary/70",
      isScrolled ? "text-foreground/80 hover:bg-muted/50 hover:text-primary" : "text-white hover:bg-white/10 hover:text-primary",
      isActive && (isScrolled ? "text-primary" : "text-primary")
    );


  return (
    <>
      <header className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        isScrolled ? "border-border/10 bg-background/80 backdrop-blur-xl shadow-lg" : "border-transparent bg-black/30"
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

          <div className="flex items-center space-x-1 lg:space-x-2"> 
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {/* Regular Nav Items */}
              {topLevelNavItems.map((item) => (
                <Link key={item.label} href={item.href} onClick={() => handleLinkClick(item.href)} className={navLinkClasses(isLinkActive(item.href))}>
                  {item.label}
                </Link>
              ))}
              <DropdownMenu>
                <DropdownMenuTrigger className={dropdownTriggerClasses(isServicesActive)}>
                  Services <ChevronDown className="h-4 w-4 opacity-70" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-popover border-border shadow-xl mt-3 w-max rounded-lg">
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
                <DropdownMenuTrigger className={dropdownTriggerClasses(isEventsActive)}>
                  Events <ChevronDown className="h-4 w-4 opacity-70" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-popover border-border shadow-xl mt-3 w-max rounded-lg">
                  {eventsDropdownItems.map((item) => (
                    <DropdownMenuItem key={item.label} asChild className={cn("cursor-pointer text-sm py-2.5 px-3", isLinkActive(item.href) ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted focus:bg-muted text-popover-foreground")}>
                      <Link href={item.href} onClick={() => handleLinkClick(item.href)} className="flex items-center w-full">
                        {item.icon} {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
               <DropdownMenu>
                <DropdownMenuTrigger className={dropdownTriggerClasses(isProductsActive)}>
                  Products <ChevronDown className="h-4 w-4 opacity-70" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-popover border-border shadow-xl mt-3 w-max rounded-lg">
                  {productsDropdownItems.map((item) => (
                      <DropdownMenuItem key={item.label} asChild className={cn("cursor-pointer text-sm py-2.5 px-3", isLinkActive(item.href) ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted focus:bg-muted text-popover-foreground")}>
                        <Link href={item.href} onClick={() => handleLinkClick(item.href)} className="flex items-center w-full">
                          {item.icon} {item.label}
                        </Link>
                      </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href={blogNavItem.href} onClick={() => handleLinkClick(blogNavItem.href)} className={navLinkClasses(isLinkActive(blogNavItem.href))}>
                  {blogNavItem.label}
              </Link>
              <Link href={voteNavItem.href} onClick={() => handleLinkClick(voteNavItem.href)} className={navLinkClasses(isLinkActive(voteNavItem.href))}>
                {voteNavItem.label}
              </Link>
              <Link href={contactNavItem.href} onClick={() => handleLinkClick(contactNavItem.href, contactNavItem.href.startsWith('/#') || contactNavItem.href.startsWith('#'))} className={navLinkClasses(isLinkActive(contactNavItem.href))}>
                {contactNavItem.label}
              </Link>
            </nav>
            <VoiceAgentDialog className={iconButtonClasses()} />
            <Button asChild variant="ghost" size="icon" className={iconButtonClasses(isLinkActive('/cart'))}>
                <Link href="/cart" aria-label="Shopping Cart">
                    <ShoppingCart className="h-5 w-5" />
                    {cartCount > 0 && (
                      <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                        {cartCount}
                      </span>
                    )}
                </Link>
            </Button>
          </div>

          {/* Mobile Menu Area */}
          <div className="md:hidden flex items-center">
             <VoiceAgentDialog className={cn(
                "h-auto p-2 text-2xl",
                isScrolled ? "text-foreground/80 hover:bg-muted/50 hover:text-primary" : "text-white hover:bg-white/10 hover:text-primary"
             )} />
             <Button asChild variant="ghost" size="icon" className={cn("relative h-auto p-2 text-2xl", isScrolled ? "text-foreground/80 hover:bg-muted/50 hover:text-primary" : "text-white hover:bg-white/10 hover:text-primary")}>
                <Link href="/cart" aria-label="Shopping Cart">
                    <ShoppingCart className="h-7 w-7" />
                    {cartCount > 0 && (
                      <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-primary-foreground text-[10px] font-bold">
                        {cartCount}
                      </span>
                    )}
                </Link>
            </Button>
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
                <SheetHeader className="pl-6 pr-4 py-4 border-b border-border text-left">
                  <SheetTitle asChild>
                    <Link href="/" className="flex items-center space-x-2.5" onClick={() => handleLinkClick('/')}>
                        <Image src="/SR.jpg" alt="SR Fitness Logo" width={36} height={36} className="h-9 w-9 rounded-full object-cover" data-ai-hint="logo brand" />
                        <span className="font-headline text-2xl font-bold text-primary">SR Fitness</span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                
                <nav className="flex-grow overflow-y-auto p-4 space-y-1.5">
                  {allNavItemsForMobile.map((item) => (
                    <div key={item.label} className="w-full">
                      {item.isCategory && item.subItems ? ( /* Categories with SubItems */
                        <>
                          <button onClick={(e) => toggleMobileCategory(item.label, e)} className={mobileCategoryClasses(isCategoryActiveForMobile(item.subItems), !!expandedMobileCategories[item.label])} aria-expanded={!!expandedMobileCategories[item.label]}>
                            <span className="flex items-center">
                                {item.icon && React.cloneElement(item.icon as React.ReactElement, { className: "mr-3.5 h-5 w-5 shrink-0 opacity-90" })}
                                {item.label}
                            </span>
                            <ChevronDown className={cn("ml-2 h-5 w-5 shrink-0 transition-transform duration-300", expandedMobileCategories[item.label] ? "rotate-180 text-primary" : "text-muted-foreground")} />
                          </button>
                          <AnimatePresence>
                            {expandedMobileCategories[item.label] && (
                              <motion.div initial="hidden" animate="visible" exit="exit" variants={mobileCategorySubItemVariants} className="flex flex-col space-y-0.5 mt-1.5 overflow-hidden pl-4 border-l border-border ml-2">
                                {item.subItems.map(subItem => (
                                     <Link key={subItem.label} href={subItem.href} onClick={() => handleLinkClick(subItem.href)} className={mobileSubLinkClasses(isLinkActive(subItem.href))}>
                                        {subItem.icon && React.cloneElement(subItem.icon as React.ReactElement, { className: "mr-3.5 h-5 w-5 shrink-0 opacity-80" })}
                                        <span className="truncate">{subItem.label}</span>
                                      </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : ( /* Regular Links */
                        <Link href={item.href} onClick={() => handleLinkClick(item.href, item.href.startsWith('#'))} className={mobileLinkClasses(isLinkActive(item.href))}>
                           {item.icon && React.cloneElement(item.icon as React.ReactElement, { className: "mr-3.5 h-5 w-5 shrink-0 opacity-90" })}
                          {item.label}
                          {item.label === 'Cart' && cartCount > 0 && (
                            <span className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                                {cartCount}
                            </span>
                          )}
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
