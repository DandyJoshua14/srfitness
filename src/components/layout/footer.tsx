import { Dumbbell, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Dumbbell className="h-8 w-8 text-primary" />
              <span className="font-headline text-2xl font-bold text-primary">SR Fitness</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your journey to strength and wellness starts here.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-foreground mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#hero" className="text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link href="#schedule" className="text-muted-foreground hover:text-primary">Class Schedule</Link></li>
              <li><Link href="#trainers" className="text-muted-foreground hover:text-primary">Our Trainers</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-foreground mb-3">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">123 Fitness Ave, Workout City, ST 90210</p>
            <p className="text-sm text-muted-foreground">contact@srfitness.com</p>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SR Fitness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
