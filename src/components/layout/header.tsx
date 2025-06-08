
"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Personal Training', href: '/personal-training' },
  { label: 'Bootcamp', href: '/burn-off-bootcamp' },
  { label: 'Awards', href: '/awards' },
  { label: 'Magazine', href: '/lifestyle-magazine' },
  { label: 'Public Speaking', href: '/public-speaking' },
  { label: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);

  useEffect(() => {
    let currentPath = pathname;
    if (typeof window !== 'undefined' && window.location.hash && pathname === '/') {
      currentPath = `/${window.location.hash}`;
    }
    setActiveLink(currentPath);
  }, [pathname]);

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('/#') && pathname === '/') {
      const elementId = href.substring(2);
      const element = document.getElementById(elementId);
      element?.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(href);
    } else {
      setActiveLink(href);
    }
  };
  
  const isLinkActive = (href: string) => {
    if (href === '/' && activeLink === '/') return true;
    if (href !== '/' && activeLink === href) return true;
    if (pathname === '/' && href.startsWith('/#') && activeLink === href) return true;
    if (href !== '/' && !href.startsWith('/#') && activeLink.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2" onClick={() => handleLinkClick('/')}>
          <Image 
            src="/logo.jpeg" 
            alt="SR Fitness Logo" 
            width={120} 
            height={40}
            className="h-8 w-auto sm:h-10"
            data-ai-hint="logo brand"
            priority
          />
          <span className="font-headline text-3xl font-bold text-primary hidden sm:inline">SR Fitness</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => handleLinkClick(item.href)}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-muted",
                isLinkActive(item.href) ? "text-primary bg-muted font-semibold" : "text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-foreground" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-6">
              <div className="mb-8 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2" onClick={() => handleLinkClick('/')}>
                   <Image 
                    src="/logo.png" 
                    alt="SR Fitness Logo" 
                    width={100} 
                    height={30}
                    className="h-7 w-auto"
                    data-ai-hint="logo brand"
                  />
                  <span className="font-headline text-2xl font-bold text-primary">SR Fitness</span>
                </Link>
                <SheetClose asChild>
                   <Button variant="ghost" size="icon">
                    <X className="h-6 w-6 text-foreground" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => handleLinkClick(item.href)}
                    className={cn(
                      "block px-3 py-2 rounded-md text-base font-medium transition-colors hover:text-primary hover:bg-muted",
                      isLinkActive(item.href) ? "text-primary bg-muted font-semibold" : "text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
