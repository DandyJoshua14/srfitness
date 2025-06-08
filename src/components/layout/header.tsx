
"use client";
import Link from 'next/link';
import { Dumbbell, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Personal Training', href: '/personal-training' },
  { label: 'Bootcamp', href: '/burn-off-bootcamp' },
  { label: 'Class Schedule', href: '/#schedule' },
  { label: 'Trainers', href: '/#trainers' },
  { label: 'Awards', href: '/awards' },
  { label: 'Magazine', href: '/lifestyle-magazine' },
  { label: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);

  useEffect(() => {
    // For homepage sections, highlight "Home" if on a section
    if (pathname === '/' && window.location.hash) {
      setActiveLink(`/${window.location.hash}`);
    } else {
      setActiveLink(pathname);
    }
  }, [pathname]);

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    // If it's an anchor link on the current page, let browser handle scroll
    if (href.startsWith('/#') && pathname === '/') {
      // No need to update activeLink here, scroll event will handle it for homepage sections
      const element = document.getElementById(href.substring(2));
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setActiveLink(href);
    }
  };
  
  // Function to determine if a link is active
  const isLinkActive = (href: string) => {
    if (href === '/') return activeLink === '/'; // Home is active only if path is exactly '/'
    if (href.startsWith('/#')) return activeLink === href && pathname === '/'; // Anchor links active only on homepage
    return activeLink.startsWith(href) && href !== '/'; // Other pages active if path starts with href
  };


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2" onClick={() => handleLinkClick('/')}>
          <Dumbbell className="h-8 w-8 text-primary" />
          <span className="font-headline text-3xl font-bold text-primary">SR Fitness</span>
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
                  <Dumbbell className="h-7 w-7 text-primary" />
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
