
import Image from 'next/image';
import { Facebook, Instagram, Youtube, MessageCircle as WhatsAppIcon } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerNavItems = [
    { label: 'Home', href: '/' },
    { label: 'Personal Training', href: '/personal-training' },
    { label: 'Bootcamp', href: '/burn-off-bootcamp' },
    { label: 'Awards', href: '/awards' },
    { label: 'Magazine', href: '/lifestyle-magazine' },
    { label: 'Public Speaking', href: '/public-speaking' },
    { label: 'Equipment Solutions', href: '/equipment-services' },
    { label: 'Contact Us', href: '/#contact' },
    // New Feature Links
    { label: 'Meal Planner', href: '/meal-planner' },
    { label: 'Smart Mirror', href: '/smart-mirror' },
    { label: 'Global Connect', href: '/global-connect' },
    { label: 'Blog', href: '/community' }, // Changed from Community Hub
    { label: 'Profile', href: '/profile' },
    // Legal Links
    { label: 'Privacy Policy', href: '/privacy-policy' }, 
    { label: 'Terms of Service', href: '/terms-of-service' }, 
  ];

  const mainLinks = footerNavItems.filter(item => 
    ['Home', 'Personal Training', 'Bootcamp', 'Awards', 'Meal Planner', 'Smart Mirror'].includes(item.label)
  );
  const exploreLinks = footerNavItems.filter(item => 
    ['Magazine', 'Public Speaking', 'Equipment Solutions', 'Global Connect', 'Blog', 'Profile', 'Contact Us'].includes(item.label) // Changed from Community Hub
  );


  return (
    <footer className="border-t border-border/40 bg-secondary text-secondary-foreground">
      <div className="container mx-auto py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Brand and Slogan */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image 
                src="/SR.jpg" // Assuming /SR.jpg is in public folder
                alt="SR Fitness Logo" 
                width={40} 
                height={40}
                className="h-10 w-10 rounded-full object-cover"
                data-ai-hint="logo brand"
              />
              <span className="font-headline text-3xl font-bold text-primary">SR Fitness</span>
            </Link>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Your journey to strength, wellness, and peak performance starts here.
            </p>
             <div className="flex space-x-4">
              <Link href="https://www.facebook.com/share/16baXc34D3/" aria-label="Facebook" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://www.instagram.com/sr.fitnesss/profilecard/?igsh=MXZzc3IyeGluOGFhcg==" aria-label="Instagram" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://whatsapp.com/channel/0029Vaxx5DO35fLwhWe2zs3H" aria-label="WhatsApp" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                <WhatsAppIcon className="h-6 w-6" />
              </Link>
               <Link href="https://youtube.com/@srfitnesslive?si=sZRk3pXarI6sBSWF" aria-label="YouTube" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Column 2: Main Links */}
          <div>
            <h3 className="font-headline text-xl font-semibold text-primary mb-4">Navigate</h3>
            <ul className="space-y-2 text-sm">
              {mainLinks.map(item => (
                 <li key={item.label}><Link href={item.href} className="text-secondary-foreground/80 hover:text-primary hover:underline transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Column 3: Explore Links */}
          <div>
            <h3 className="font-headline text-xl font-semibold text-primary mb-4">Discover</h3>
            <ul className="space-y-2 text-sm">
              {exploreLinks.map(item => ( 
                 <li key={item.label}><Link href={item.href} className="text-secondary-foreground/80 hover:text-primary hover:underline transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Contact Info */}
          <div>
            <h3 className="font-headline text-xl font-semibold text-primary mb-4">Get In Touch</h3>
            <address className="not-italic text-sm space-y-2 text-secondary-foreground/80">
              <p>Email: <a href="mailto:srfitness@gmail.com" className="hover:text-primary hover:underline">contact@srfitness.com</a></p>
              <p>Phone: <a href="tel:+2347056717597" className="hover:text-primary hover:underline">(234) 7056717597</a></p>
            </address>
          </div>
        </div>

        <div className="mt-8 border-t border-border/20 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/70">
            &copy; {currentYear} SR Fitness. All rights reserved. Designed with passion.
          </p>
           <p className="text-xs text-secondary-foreground/60 mt-2">
             <Link href="/privacy-policy" className="hover:text-primary hover:underline">Privacy Policy</Link>
           </p>
        </div>
      </div>
    </footer>
  );
}
