
import { Dumbbell, Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerNavItems = [
    { label: 'Home', href: '/' },
    { label: 'Personal Training', href: '/personal-training' },
    { label: 'Bootcamp', href: '/burn-off-bootcamp' },
    { label: 'Our Trainers', href: '/#trainers' },
    { label: 'Awards', href: '/awards' },
    { label: 'Magazine', href: '/lifestyle-magazine' },
    { label: 'Contact Us', href: '/#contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' }, 
    { label: 'Terms of Service', href: '/terms-of-service' }, 
  ];


  return (
    <footer className="border-t border-border/40 bg-secondary text-secondary-foreground">
      <div className="container mx-auto py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Brand and Slogan */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Dumbbell className="h-10 w-10 text-primary" />
              <span className="font-headline text-3xl font-bold text-primary">SR Fitness</span>
            </Link>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Your journey to strength, wellness, and peak performance starts here.
            </p>
             <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Instagram" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Twitter" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
               <Link href="#" aria-label="YouTube" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                <Youtube className="h-6 w-6" />
              </Link>
               <Link href="#" aria-label="LinkedIn" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-headline text-xl font-semibold text-primary mb-4">Navigate</h3>
            <ul className="space-y-2 text-sm">
              {footerNavItems.slice(0, 4).map(item => (
                 <li key={item.label}><Link href={item.href} className="text-secondary-foreground/80 hover:text-primary hover:underline transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Column 3: More Links */}
          <div>
            <h3 className="font-headline text-xl font-semibold text-primary mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              {footerNavItems.slice(4, 7).map(item => ( // Adjusted slice to account for removed items
                 <li key={item.label}><Link href={item.href} className="text-secondary-foreground/80 hover:text-primary hover:underline transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Contact Info */}
          <div>
            <h3 className="font-headline text-xl font-semibold text-primary mb-4">Get In Touch</h3>
            <address className="not-italic text-sm space-y-2 text-secondary-foreground/80">
              <p>123 Fitness Avenue, Workout City, ST 90210</p>
              <p>Email: <a href="mailto:contact@srfitness.com" className="hover:text-primary hover:underline">contact@srfitness.com</a></p>
              <p>Phone: <a href="tel:+1234567890" className="hover:text-primary hover:underline">(123) 456-7890</a></p>
            </address>
          </div>
        </div>

        <div className="mt-8 border-t border-border/20 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/70">
            &copy; {currentYear} SR Fitness. All rights reserved. Designed with passion.
          </p>
           <p className="text-xs text-secondary-foreground/60 mt-2">
             <Link href="/privacy-policy" className="hover:text-primary hover:underline">Privacy Policy</Link> | <Link href="/terms-of-service" className="hover:text-primary hover:underline">Terms of Service</Link>
           </p>
        </div>
      </div>
    </footer>
  );
}
