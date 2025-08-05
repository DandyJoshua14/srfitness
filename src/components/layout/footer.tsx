
"use client";

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, MessageCircle as WhatsAppIcon } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const [logoClickCount, setLogoClickCount] = useState(0);
  const clickTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clean up the timer when the component unmounts
    return () => {
      if (clickTimer.current) {
        clearTimeout(clickTimer.current);
      }
    };
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent default link navigation
    const newClickCount = logoClickCount + 1;
    setLogoClickCount(newClickCount);

    if (clickTimer.current) {
      clearTimeout(clickTimer.current);
    }

    if (newClickCount === 4) {
      router.push('/admin');
      setLogoClickCount(0); // Reset after successful navigation
    } else {
      // Reset count if there's a pause between clicks (e.g., > 1 second)
      clickTimer.current = setTimeout(() => {
        setLogoClickCount(0);
      }, 1000);
    }
  };


  const footerNavItems = [
    { label: 'Home', href: '/' },
    { label: 'Awards', href: '/awards' },
    { label: 'Bootcamp', href: '/burn-off-bootcamp' },
    { label: 'Personal Training', href: '/personal-training' },
    { label: 'Blog', href: '/community' }, // Changed from Community Hub
    { label: 'Magazine', href: '/lifestyle-magazine' },
    { label: 'Public Speaking', href: '/public-speaking' },
    { label: 'Corporate Wellness', href: '/corporate-wellness' },
    { label: 'Equipment Solutions', href: '/equipment-services' },
    { label: 'Contact Us', href: '/#contact' },
    // New Feature Links
    // Legal Links
    { label: 'Privacy Policy', href: '/privacy-policy' }, 
    { label: 'Terms of Service', href: '/terms-of-service' }, 
  ];

  const mainLinks = footerNavItems.filter(item => 
    ['Home', 'Personal Training', 'Bootcamp', 'Awards', 'Meal Planner', 'Smart Scan'].includes(item.label)
  );
  const exploreLinks = footerNavItems.filter(item => 
    ['Magazine', 'Corporate Wellness', 'Public Speaking', 'Equipment Solutions', 'Global Connect', 'Blog', 'Profile'].includes(item.label)
  );

  const contactLinks = [
    { label: 'Contact Us', href: '/#contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
  ];

  return (
    <footer className="border-t border-border/40 bg-secondary text-secondary-foreground">
      <div className="container mx-auto py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
          {/* Column 1: Brand and Slogan */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
             <div onClick={handleLogoClick} className="cursor-pointer inline-flex items-center space-x-3 mb-4">
              <Image 
                src="/SR.jpg" // Assuming /SR.jpg is in public folder
                alt="SR Fitness Logo" 
                width={40} 
                height={40}
                className="h-10 w-10 rounded-full object-cover"
                data-ai-hint="logo brand"
              />
              <span className="font-headline text-3xl font-bold text-primary">SR Fitness</span>
            </div>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Your journey to strength, wellness, and peak performance starts here.
            </p>
             <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/16baXc34D3/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/sr.fitnesss/profilecard/?igsh=MXZzc3IyeGluOGFhcg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://whatsapp.com/channel/0029Vaxx5DO35fLwhWe2zs3H" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                <WhatsAppIcon className="h-6 w-6" />
              </a>
               <a href="https://youtube.com/@srfitnesslive?si=sZRk3pXarI6sBSWF" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Column 2: Main Links */}
          <div className="col-span-1">
            <h3 className="font-headline text-xl font-semibold text-primary mb-4">Navigate</h3>
            <ul className="space-y-2 text-sm">
              {mainLinks.map(item => (
                 <li key={item.label}><Link href={item.href} className="text-secondary-foreground/80 hover:text-primary hover:underline transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Column 3: Explore Links */}
          <div className="col-span-1">
            <h3 className="font-headline text-xl font-semibold text-primary mb-4">Discover</h3>
            <ul className="space-y-2 text-sm">
              {exploreLinks.map(item => ( 
                 <li key={item.label}><Link href={item.href} className="text-secondary-foreground/80 hover:text-primary hover:underline transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Partners */}
          <div className="col-span-1">
             <h3 className="font-headline text-xl font-semibold text-primary mb-4">Our Partners</h3>
             <div className="flex space-x-4">
                <a href="https://www.babyclothingstore.co.uk/" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                    <Image src="/baby.jpeg" alt="Baby Clothing Store Logo" width={32} height={32} className="rounded-full transition-transform duration-300 group-hover:scale-110" data-ai-hint="company logo" />
                </a>
                <a href="https://www.instagram.com/agqcube?igsh=Mnd0bDR6Mzh2eGl1" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                    <Image src="/allur.jpg" alt="Allur Logo" width={32} height={32} className="rounded-full transition-transform duration-300 group-hover:scale-110" data-ai-hint="company logo" />
                </a>
              </div>
          </div>

          {/* Column 5: Contact Info */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-headline text-xl font-semibold text-primary mb-4">Get In Touch</h3>
            <address className="not-italic text-sm space-y-2 text-secondary-foreground/80 mb-4">
              <p>Email: <a href="mailto:srfitness@gmail.com" className="hover:text-primary hover:underline">contact@srfitness.com</a></p>
              <p>Phone: <a href="tel:+2347056717597" className="hover:text-primary hover:underline">(234) 7056717597</a></p>
            </address>
             <ul className="space-y-2 text-sm">
              {contactLinks.map(item => ( 
                 <li key={item.label}><Link href={item.href} className="text-secondary-foreground/80 hover:text-primary hover:underline transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border/20 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/70">
            &copy; {currentYear} SR Fitness. All rights reserved. Designed with passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
