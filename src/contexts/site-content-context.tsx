"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CompanyInfo {
  name: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  instagram: string;
  instagramUrl: string;
  workingHours: string;
}

export interface HeroContent {
  badge: string;
  ratingText: string;
  headline: string;
  headlineAccent: string;
  subheadline: string;
  bgImage: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface AboutPillar {
  title: string;
  desc: string;
}

export interface AboutContent {
  badge: string;
  heading: string;
  subheading: string;
  image: string;
  statPill: string;
  founderQuote: string;
  founderName: string;
  founderRole: string;
  pillars: AboutPillar[];
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  badge: string;
  features: string[];
  link: string;
}

export interface ImpactStat {
  value: number;
  label: string;
  sublabel: string;
  suffix?: string;
  achievement: string;
}

export interface TransformationItem {
  name: string;
  profession: string;
  location: string;
  metric: string;
  timeframe: string;
  bodyFatChange?: string;
  image: string;
  program: string;
  quote: string;
  results: string[];
}

export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  badgeColor?: string;
  description: string;
  monthlyPrice: string;
  quarterlyPrice: string;
  popular?: boolean;
  vip?: boolean;
  features: string[];
  cta: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'floor' | 'bootcamp' | 'training';
  tag: string;
  title: string;
  objectPosition?: string;
}

export interface SiteContent {
  companyInfo: CompanyInfo;
  hero: HeroContent;
  about: AboutContent;
  services: ServiceItem[];
  impactStats: ImpactStat[];
  transformations: TransformationItem[];
  pricingTiers: PricingTier[];
  promos: {
    challengeTitle: string;
    challengeDesc: string;
    referralTitle: string;
    referralDesc: string;
  };
  galleryImages: GalleryImage[];
}

export const defaultSiteContent: SiteContent = {
  companyInfo: {
    name: "SR Fitness",
    tagline: "#1 Results-Based Personal Coaching & Bootcamps in Lagos",
    phone: "+234 705 671 7597",
    whatsapp: "2347056717597",
    email: "srfitness247@gmail.com",
    address: "Victoria Island & Lekki Phase 1, Lagos, Nigeria",
    instagram: "@srfitness",
    instagramUrl: "https://instagram.com/srfitness",
    workingHours: "Mon - Sat: 6:00 AM - 8:00 PM | Sun: 7:00 AM - 1:00 PM",
  },
  hero: {
    badge: "#1 Results-Based Coaching in Lagos",
    ratingText: "4.9/5 (1,200+ Transformed)",
    headline: "Transform Your Body.",
    headlineAccent: "Elevate Your Life.",
    subheadline: "Customized personal training, high-energy bootcamps, and Nigerian nutrition blueprints engineered for busy Lagos executives & professionals.",
    bgImage: "/use.png",
    ctaPrimary: "Claim Free Assessment",
    ctaSecondary: "Free 7-Day Nutrition Guide",
  },
  about: {
    badge: "Accredited Excellence in Lagos",
    heading: "Redefining Health & Vitality in West Africa",
    subheading: "At SR Fitness, we believe sustainable wellness is not about extreme deprivation—it is about high-performance habit design tailored to the Lagos lifestyle.",
    image: "/train.jpeg",
    statPill: "10,000+ Lives Transformed",
    founderQuote: "Physical fitness isn't just about how you look; it's the foundation of mental clarity, executive stamina, and lifelong longevity.",
    founderName: "Coach S. R.",
    founderRole: "Head Coach & Founder, SR Fitness",
    pillars: [
      {
        title: "Science-Backed Methodology",
        desc: "No fad diets. Structured progressive overload and bio-individual nutrition protocols."
      },
      {
        title: "Empathetic Lagos-Adaptive Coaching",
        desc: "Workouts tailored around Lagos traffic, demanding careers, and local food staples."
      },
      {
        title: "Guaranteed Accountability",
        desc: "Weekly body composition checks and direct WhatsApp trainer support."
      }
    ]
  },
  services: [
    {
      id: "personal-training",
      title: "1-on-1 Personal Training",
      category: "Private Coaching",
      description: "Personalized in-person coaching at your home or private gym in Lagos. Fast-track your strength, posture, and fat loss with customized workouts and weekly biometric tracking.",
      image: "/train.jpeg",
      badge: "Most Requested in Lagos",
      features: [
        "Custom workouts matching your schedule",
        "Tailored Nigerian nutrition & meal plans",
        "Weekly body composition tracking"
      ],
      link: "/personal-training"
    },
    {
      id: "burn-off-bootcamp",
      title: "Burn-Off Bootcamp",
      category: "Group & Weekend",
      description: "High-octane group fitness sessions combining HIIT, functional conditioning, and cardio. Build cardiovascular endurance and burn massive calories in a motivating community setting.",
      image: "/burn.png",
      badge: "High Energy",
      features: [
        "Dynamic full-body HIIT circuits",
        "Supportive fitness tribe & music",
        "Weekend sessions across Lagos"
      ],
      link: "/burn-off-bootcamp"
    },
    {
      id: "corporate-wellness",
      title: "Corporate Wellness",
      category: "Corporate & Teams",
      description: "Empower your workforce with executive fitness programs, ergonomic desk workshops, team bootcamps, and health seminars that reduce sick days and boost productivity.",
      image: "/savana.jpeg",
      badge: "For Organizations",
      features: [
        "On-site & virtual employee fitness",
        "Executive stress reduction & mobility",
        "Quarterly corporate fitness challenges"
      ],
      link: "/corporate-wellness"
    },
    {
      id: "online-coaching",
      title: "Online Coaching & Nutrition",
      category: "Virtual & Hybrid",
      description: "Get full access to SR Fitness coaching from anywhere in the world. Includes app-based training programs, video form audits, WhatsApp coach support, and Nigerian meal guides.",
      image: "/use.png",
      badge: "100% Flexible",
      features: [
        "Step-by-step video exercise guides",
        "Personalized daily macro targets",
        "24/7 direct coach access on WhatsApp"
      ],
      link: "/personal-training"
    }
  ],
  impactStats: [
    { value: 1200, label: "Happy Members", sublabel: "Active Lagos clients & alumni", suffix: "+", achievement: "Growing every week" },
    { value: 5400, label: "Kilograms Shed", sublabel: "Documented client weight loss", suffix: "kg+", achievement: "Documented & verified" },
    { value: 10, label: "Years of Expertise", sublabel: "Coaching Lagos professionals", suffix: "+", achievement: "Industry veteran" },
    { value: 98, label: "Client Satisfaction", sublabel: "Verified review score", suffix: "%", achievement: "Top-rated in Lagos" }
  ],
  transformations: [
    {
      name: "Tracy S.",
      profession: "Senior Marketing Manager",
      location: "Lekki Phase 1, Lagos",
      metric: "-14 kg Lost",
      timeframe: "12 Weeks",
      bodyFatChange: "-7% Body Fat",
      image: "/tracy after.jpg",
      program: "1-on-1 Personal Training & Nutrition",
      quote: "With my hectic work schedule and Lagos traffic, I thought consistency was impossible. The SR Fitness team built workouts that fit my routine perfectly and transformed my daily energy.",
      results: ["Dropped 3 dress sizes", "Eliminated lower back stiffness", "Maintained weight for 9+ months"]
    },
    {
      name: "Vicky U.",
      profession: "Finance Consultant",
      location: "Victoria Island, Lagos",
      metric: "+40% Core Strength",
      timeframe: "16 Weeks",
      bodyFatChange: "-5kg & Toned",
      image: "/before.jpeg",
      program: "Burn-Off Bootcamp & Strength Coaching",
      quote: "I wanted to look lean and athletic rather than just lose scale weight. The functional HIIT bootcamps pushed my limits in the most supportive environment.",
      results: ["Visible abdominal definition", "Completed first 10km run", "Increased daily focus at work"]
    },
    {
      name: "Lizie M.",
      profession: "Tech Founder & New Mom",
      location: "Ikoyi, Lagos",
      metric: "-11 kg Post-Baby",
      timeframe: "14 Weeks",
      bodyFatChange: "Diastasis Safe",
      image: "/afta.jpeg",
      program: "Post-Pregnancy Recovery Plan",
      quote: "Safety was my number one priority after giving birth. My trainer was extremely knowledgeable about core rehabilitation and safe postpartum progressive overload.",
      results: ["Safely healed core separation", "Regained pre-baby wardrobe", "Zero joint pain"]
    }
  ],
  pricingTiers: [
    {
      id: "bootcamp-pass",
      name: "Weekend Bootcamp Pass",
      description: "Ideal for high-energy group motivation and consistent weekend conditioning.",
      monthlyPrice: "₦35,000",
      quarterlyPrice: "₦90,000",
      features: [
        "Access to all Saturday & Sunday Bootcamps",
        "High-intensity HIIT & functional conditioning",
        "Community WhatsApp motivation group",
        "Monthly body composition weigh-in",
        "Access to community 5km running clubs"
      ],
      cta: "Join Bootcamp"
    },
    {
      id: "pro-transformation",
      name: "Pro 1-on-1 Transformation",
      badge: "Most Popular",
      popular: true,
      description: "Full personal coaching with customized Nigerian meal guides and 3x/week 1-on-1 sessions.",
      monthlyPrice: "₦120,000",
      quarterlyPrice: "₦320,000",
      features: [
        "3x Weekly 1-on-1 In-Person Coaching (Lagos)",
        "Customized Nigerian Macro & Meal Blueprint",
        "Weekly biometric & fat loss progression audit",
        "Complimentary Weekend Bootcamp Access",
        "24/7 direct WhatsApp trainer communication",
        "Guaranteed results tracking protocol"
      ],
      cta: "Start 1-on-1 Coaching"
    },
    {
      id: "executive-vip",
      name: "Executive VIP Coaching",
      badge: "VIP Concierge",
      vip: true,
      description: "White-glove private fitness at your home or executive estate with dedicated senior trainer.",
      monthlyPrice: "₦250,000",
      quarterlyPrice: "₦650,000",
      features: [
        "Up to 5x Weekly Private In-Home Training",
        "Dedicated Senior Master Trainer",
        "Chef & Kitchen Meal Prep Consultation",
        "Full Ergonomic Desk & Posture Assessment",
        "Priority schedule booking & rescheduling",
        "VIP Access to SR Fitness Annual Events"
      ],
      cta: "Apply for VIP Coaching"
    }
  ],
  promos: {
    challengeTitle: "The 30-Day Lagos Body Shred Challenge",
    challengeDesc: "Join our high-intensity 30-day cohort. Includes weekly meal prep blueprints, group weigh-ins, daily accountability, and cash prizes for best transformations!",
    referralTitle: "\"Bring a Friend\" Referral Program",
    referralDesc: "Working out is 3x more effective with a partner. Invite a colleague or friend: they get their first bootcamp class free, and you get 15% off your next renewal!"
  },
  galleryImages: [
    { 
      id: "gal-1",
      src: "/gal35.jpg", 
      alt: "Modern gym layout and strength equipment", 
      category: "floor", 
      tag: "Facility", 
      title: "State-of-the-Art Training Zone" 
    },
    { 
      id: "gal-2",
      src: "/gal2.jpeg", 
      alt: "Cardio suite and precision treadmills", 
      category: "floor", 
      tag: "Cardio", 
      title: "High-End Cardio Floor", 
      objectPosition: "center top" 
    },
    { 
      id: "gal-3",
      src: "/gal1.jpeg", 
      alt: "Heavy dumbbell rack and free weights", 
      category: "floor", 
      tag: "Weights", 
      title: "Olympic Free Weights Rack" 
    },
    { 
      id: "gal-4",
      src: "/b1.jpeg", 
      alt: "Bootcamp participants doing pushups", 
      category: "bootcamp", 
      tag: "Bootcamp", 
      title: "High-Energy Group Bootcamps" 
    },
    { 
      id: "gal-5",
      src: "/b2.jpeg", 
      alt: "Coach motivating the class", 
      category: "bootcamp", 
      tag: "Coaching", 
      title: "Unstoppable Team Motivation" 
    },
    { 
      id: "gal-6",
      src: "/m8.jpg", 
      alt: "1-on-1 private training session", 
      category: "training", 
      tag: "1-on-1", 
      title: "Personalized Technique Coaching" 
    },
    { 
      id: "gal-7",
      src: "/gal34.jpg", 
      alt: "Group strength circuit class", 
      category: "bootcamp", 
      tag: "Circuit", 
      title: "Functional Strength Circuits" 
    },
    { 
      id: "gal-8",
      src: "/m3.jpg", 
      alt: "Targeted resistance training session", 
      category: "training", 
      tag: "Hypertrophy", 
      title: "Targeted Strength & Conditioning" 
    },
    { 
      id: "gal-9",
      src: "/wak.jpg", 
      alt: "Outdoor running and community fitness event", 
      category: "bootcamp", 
      tag: "Community", 
      title: "Community Fitness Outreaches" 
    },
    { 
      id: "gal-10",
      src: "/m1.jpg", 
      alt: "Athlete lifting heavy weights", 
      category: "training", 
      tag: "Athletics", 
      title: "Peak Performance Mastery", 
      objectPosition: "center 20%" 
    },
  ]
};

const STORAGE_KEY = "sr_fitness_site_content_v2";

interface SiteContentContextType {
  content: SiteContent;
  updateCompanyInfo: (info: Partial<CompanyInfo>) => void;
  updateHero: (hero: Partial<HeroContent>) => void;
  updateAbout: (about: Partial<AboutContent>) => void;
  updateServices: (services: ServiceItem[]) => void;
  updateSingleService: (id: string, service: Partial<ServiceItem>) => void;
  updateImpactStats: (stats: ImpactStat[]) => void;
  updateTransformations: (transformations: TransformationItem[]) => void;
  updateSingleTransformation: (index: number, transformation: Partial<TransformationItem>) => void;
  updatePricingTiers: (tiers: PricingTier[]) => void;
  updateSinglePricingTier: (id: string, tier: Partial<PricingTier>) => void;
  updatePromos: (promos: Partial<SiteContent['promos']>) => void;
  addGalleryImage: (image: Omit<GalleryImage, 'id'>) => void;
  updateGalleryImage: (id: string, image: Partial<GalleryImage>) => void;
  deleteGalleryImage: (id: string) => void;
  resetToDefaults: () => void;
  saveAllContent: (newContent: SiteContent) => void;
}

const SiteContentContext = createContext<SiteContentContextType | undefined>(undefined);

export function SiteContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on client mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setContent(prev => ({
          ...defaultSiteContent,
          ...parsed,
          companyInfo: { ...defaultSiteContent.companyInfo, ...(parsed.companyInfo || {}) },
          hero: { ...defaultSiteContent.hero, ...(parsed.hero || {}) },
          about: { ...defaultSiteContent.about, ...(parsed.about || {}) },
          services: parsed.services?.length ? parsed.services : defaultSiteContent.services,
          impactStats: parsed.impactStats?.length ? parsed.impactStats : defaultSiteContent.impactStats,
          transformations: parsed.transformations?.length ? parsed.transformations : defaultSiteContent.transformations,
          pricingTiers: parsed.pricingTiers?.length ? parsed.pricingTiers : defaultSiteContent.pricingTiers,
          promos: { ...defaultSiteContent.promos, ...(parsed.promos || {}) },
          galleryImages: parsed.galleryImages?.length ? parsed.galleryImages : defaultSiteContent.galleryImages,
        }));
      }
    } catch (e) {
      console.warn("Could not load custom site content from localStorage", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const persist = (updated: SiteContent) => {
    setContent(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn("Failed to persist site content to localStorage", e);
    }
  };

  const updateCompanyInfo = (info: Partial<CompanyInfo>) => {
    const updated: SiteContent = {
      ...content,
      companyInfo: { ...content.companyInfo, ...info }
    };
    persist(updated);
  };

  const updateHero = (hero: Partial<HeroContent>) => {
    const updated: SiteContent = {
      ...content,
      hero: { ...content.hero, ...hero }
    };
    persist(updated);
  };

  const updateAbout = (about: Partial<AboutContent>) => {
    const updated: SiteContent = {
      ...content,
      about: { ...content.about, ...about }
    };
    persist(updated);
  };

  const updateServices = (services: ServiceItem[]) => {
    const updated: SiteContent = {
      ...content,
      services
    };
    persist(updated);
  };

  const updateSingleService = (id: string, serviceUpdate: Partial<ServiceItem>) => {
    const updatedServices = content.services.map(s => 
      s.id === id ? { ...s, ...serviceUpdate } : s
    );
    updateServices(updatedServices);
  };

  const updateImpactStats = (impactStats: ImpactStat[]) => {
    const updated: SiteContent = {
      ...content,
      impactStats
    };
    persist(updated);
  };

  const updateTransformations = (transformations: TransformationItem[]) => {
    const updated: SiteContent = {
      ...content,
      transformations
    };
    persist(updated);
  };

  const updateSingleTransformation = (index: number, transformationUpdate: Partial<TransformationItem>) => {
    const updatedList = [...content.transformations];
    if (updatedList[index]) {
      updatedList[index] = { ...updatedList[index], ...transformationUpdate };
      updateTransformations(updatedList);
    }
  };

  const updatePricingTiers = (pricingTiers: PricingTier[]) => {
    const updated: SiteContent = {
      ...content,
      pricingTiers
    };
    persist(updated);
  };

  const updateSinglePricingTier = (id: string, tierUpdate: Partial<PricingTier>) => {
    const updatedTiers = content.pricingTiers.map(t => 
      t.id === id ? { ...t, ...tierUpdate } : t
    );
    updatePricingTiers(updatedTiers);
  };

  const updatePromos = (promoUpdates: Partial<SiteContent['promos']>) => {
    const updated: SiteContent = {
      ...content,
      promos: { ...content.promos, ...promoUpdates }
    };
    persist(updated);
  };

  const addGalleryImage = (image: Omit<GalleryImage, 'id'>) => {
    const newImage: GalleryImage = {
      ...image,
      id: `gal-${Date.now()}`
    };
    const updatedGallery = [newImage, ...content.galleryImages];
    const updated: SiteContent = {
      ...content,
      galleryImages: updatedGallery
    };
    persist(updated);
  };

  const updateGalleryImage = (id: string, imageUpdate: Partial<GalleryImage>) => {
    const updatedGallery = content.galleryImages.map(img => 
      img.id === id ? { ...img, ...imageUpdate } : img
    );
    const updated: SiteContent = {
      ...content,
      galleryImages: updatedGallery
    };
    persist(updated);
  };

  const deleteGalleryImage = (id: string) => {
    const updatedGallery = content.galleryImages.filter(img => img.id !== id);
    const updated: SiteContent = {
      ...content,
      galleryImages: updatedGallery
    };
    persist(updated);
  };

  const resetToDefaults = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn("Could not remove item from localStorage", e);
    }
    setContent(defaultSiteContent);
  };

  const saveAllContent = (newContent: SiteContent) => {
    persist(newContent);
  };

  return (
    <SiteContentContext.Provider
      value={{
        content,
        updateCompanyInfo,
        updateHero,
        updateAbout,
        updateServices,
        updateSingleService,
        updateImpactStats,
        updateTransformations,
        updateSingleTransformation,
        updatePricingTiers,
        updateSinglePricingTier,
        updatePromos,
        addGalleryImage,
        updateGalleryImage,
        deleteGalleryImage,
        resetToDefaults,
        saveAllContent,
      }}
    >
      {children}
    </SiteContentContext.Provider>
  );
}

export function useSiteContent() {
  const context = useContext(SiteContentContext);
  if (!context) {
    throw new Error("useSiteContent must be used within a SiteContentProvider");
  }
  return context;
}
