
"use client";
import Link from 'next/link';
import Image from 'next/image';
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
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between gap-2 md:gap-4">
        <Link href="/" className="flex items-center space-x-2 shrink-0" onClick={() => handleLinkClick('/')}> {/* Added shrink-0 to prevent logo block from shrinking too much */}
          <Image 
            src="/logo.png" 
            alt="SR Fitness Logo" 
            width={120} 
            height={40}
            className="h-10 w-auto object-contain" // Ensures logo scales down correctly
            data-ai-hint="logo brand"
            priority
          />
          <span className="font-headline text-xl sm:text-2xl md:text-3xl font-bold text-primary">SR Fitness</span>
        </Link>

        <nav className="flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
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
      </div>
    </header>
  );
}
