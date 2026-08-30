/* eslint-disable */
// @ts-nocheck
"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSiteContent, SiteContent, GalleryImage } from '@/contexts/site-content-context';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { 
  Building2, 
  Sparkles, 
  UserCheck, 
  Dumbbell, 
  TrendingUp, 
  Trophy, 
  CreditCard, 
  Camera, 
  Upload, 
  Save, 
  RotateCcw, 
  ExternalLink, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  Image as ImageIcon,
  Flame,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Clock
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const presetImages = [
  { label: "Hero Athlete", value: "/use.png" },
  { label: "1-on-1 Personal Training", value: "/train.jpeg" },
  { label: "Burn-Off Bootcamp", value: "/burn.png" },
  { label: "Corporate Wellness Team", value: "/savana.jpeg" },
  { label: "Transformation (Tracy)", value: "/tracy after.jpg" },
  { label: "Transformation (Vicky)", value: "/before.jpeg" },
  { label: "Transformation (Lizie)", value: "/afta.jpeg" },
  { label: "Gym Floor (Zone)", value: "/gal35.jpg" },
  { label: "Gym Floor (Cardio)", value: "/gal2.jpeg" },
  { label: "Gym Floor (Weights)", value: "/gal1.jpeg" },
  { label: "Bootcamp Group 1", value: "/b1.jpeg" },
  { label: "Bootcamp Group 2", value: "/b2.jpeg" },
  { label: "Strength Circuit", value: "/gal34.jpg" },
  { label: "Community Walk/Run", value: "/wak.jpg" },
  { label: "Master Trainer 1", value: "/m1.jpg" },
  { label: "Master Trainer 2", value: "/m3.jpg" },
  { label: "Master Trainer 3", value: "/m8.jpg" },
  { label: "SR Fitness Logo", value: "/SR.jpg" },
];

export default function AdminContentManagerPage() {
  const { 
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
    resetToDefaults
  } = useSiteContent();

  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("company");

  // Local draft state for quick form binding
  const [companyForm, setCompanyForm] = useState(content.companyInfo);
  const [heroForm, setHeroForm] = useState(content.hero);
  const [aboutForm, setAboutForm] = useState(content.about);
  const [servicesForm, setServicesForm] = useState(content.services);
  const [impactForm, setImpactForm] = useState(content.impactStats);
  const [transformationsForm, setTransformationsForm] = useState(content.transformations);
  const [pricingForm, setPricingForm] = useState(content.pricingTiers);
  const [promosForm, setPromosForm] = useState(content.promos);

  // Synchronize when content changes
  React.useEffect(() => {
    setCompanyForm(content.companyInfo);
    setHeroForm(content.hero);
    setAboutForm(content.about);
    setServicesForm(content.services);
    setImpactForm(content.impactStats);
    setTransformationsForm(content.transformations);
    setPricingForm(content.pricingTiers);
    setPromosForm(content.promos);
  }, [content]);

  // Image Upload Helper (Converts file to base64 Data URL)
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, onImageReady: (url: string) => void) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 5MB.",
        variant: "destructive"
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (loadEvent) => {
      const result = loadEvent.target?.result as string;
      if (result) {
        onImageReady(result);
        toast({
          title: "Image Uploaded Successfully",
          description: "New image is loaded and ready to be saved.",
        });
      }
    };
    reader.readAsDataURL(file);
  };

  // Add new gallery photo dialog state
  const [isAddGalleryOpen, setIsAddGalleryOpen] = useState(false);
  const [newGalleryPhoto, setNewGalleryPhoto] = useState({
    src: "/gal35.jpg",
    alt: "Gym training moment",
    category: "floor" as 'floor' | 'bootcamp' | 'training',
    tag: "Facility",
    title: "New Training Facility Feature"
  });

  // Save All Changes Handlers
  const handleSaveCompany = () => {
    updateCompanyInfo(companyForm);
    toast({ title: "Company Profile Updated", description: "Changes are live on the public site." });
  };

  const handleSaveHero = () => {
    updateHero(heroForm);
    toast({ title: "Hero Section Updated", description: "Headline, sub-headline, and background image updated." });
  };

  const handleSaveAbout = () => {
    updateAbout(aboutForm);
    toast({ title: "About Section Updated", description: "Founder bio, quote, and pillars updated." });
  };

  const handleSaveServices = () => {
    updateServices(servicesForm);
    toast({ title: "Services Updated", description: "All service pillars and images are live." });
  };

  const handleSaveImpact = () => {
    updateImpactStats(impactForm);
    toast({ title: "Impact Statistics Updated", description: "Key stats and numbers are live." });
  };

  const handleSaveTransformations = () => {
    updateTransformations(transformationsForm);
    toast({ title: "Transformations Updated", description: "Case studies and client milestones updated." });
  };

  const handleSavePricing = () => {
    updatePricingTiers(pricingForm);
    updatePromos(promosForm);
    toast({ title: "Pricing & Promos Updated", description: "Membership pricing and promotional banners are live." });
  };

  const handleCreateGalleryItem = () => {
    if (!newGalleryPhoto.title || !newGalleryPhoto.src) {
      toast({ title: "Missing fields", description: "Please provide a title and image.", variant: "destructive" });
      return;
    }
    addGalleryImage(newGalleryPhoto);
    setIsAddGalleryOpen(false);
    setNewGalleryPhoto({
      src: "/gal35.jpg",
      alt: "Gym training moment",
      category: "floor",
      tag: "Facility",
      title: "New Training Facility Feature"
    });
    toast({ title: "Gallery Photo Added", description: "New image added to the facility gallery." });
  };

  const handleResetConfirm = () => {
    if (confirm("Are you sure you want to reset all content and photos to factory defaults? Any custom edits will be restored.")) {
      resetToDefaults();
      toast({ title: "Restored Factory Defaults", description: "Original site presets have been restored." });
    }
  };

  return (
    <div className="space-y-8 pb-16">
      
      {/* Top Header Card */}
      <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 p-6 rounded-2xl border border-primary/30 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge className="bg-primary text-primary-foreground font-bold px-3 py-0.5 text-xs">
              Company Owner CMS
            </Badge>
            <span className="text-xs text-muted-foreground">Live Reactive Sync</span>
          </div>
          <h1 className="font-headline text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Site Content & <span className="text-primary">Media Manager</span>
          </h1>
          <p className="text-sm text-zinc-300 mt-1 max-w-2xl">
            Update company details, phone numbers, headlines, pricing, before/after stories, and upload photos to any section of the website.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 self-stretch sm:self-auto">
          <Button
            asChild
            variant="outline"
            className="border-primary/40 text-primary hover:bg-primary/10 gap-1.5 text-xs font-semibold"
          >
            <Link href="/" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-3.5 h-3.5" /> View Public Site
            </Link>
          </Button>

          <Button
            variant="ghost"
            onClick={handleResetConfirm}
            className="text-xs text-muted-foreground hover:text-destructive hover:bg-destructive/10 gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset Defaults
          </Button>
        </div>
      </div>

      {/* Main Tabs Layout */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <div className="overflow-x-auto pb-2">
          <TabsList className="bg-muted/60 p-1.5 rounded-xl border border-border inline-flex gap-1 h-auto flex-wrap sm:flex-nowrap">
            <TabsTrigger value="company" className="gap-2 text-xs py-2 px-3.5 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Building2 className="w-4 h-4" /> Company & Contact
            </TabsTrigger>
            <TabsTrigger value="hero" className="gap-2 text-xs py-2 px-3.5 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Sparkles className="w-4 h-4" /> Hero & Intro
            </TabsTrigger>
            <TabsTrigger value="about" className="gap-2 text-xs py-2 px-3.5 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <UserCheck className="w-4 h-4" /> About & Leadership
            </TabsTrigger>
            <TabsTrigger value="services" className="gap-2 text-xs py-2 px-3.5 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Dumbbell className="w-4 h-4" /> Core Services
            </TabsTrigger>
            <TabsTrigger value="transformations" className="gap-2 text-xs py-2 px-3.5 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Trophy className="w-4 h-4" /> Transformations
            </TabsTrigger>
            <TabsTrigger value="pricing" className="gap-2 text-xs py-2 px-3.5 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <CreditCard className="w-4 h-4" /> Pricing & Promos
            </TabsTrigger>
            <TabsTrigger value="gallery" className="gap-2 text-xs py-2 px-3.5 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Camera className="w-4 h-4" /> Gallery & Media
            </TabsTrigger>
            <TabsTrigger value="impact" className="gap-2 text-xs py-2 px-3.5 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <TrendingUp className="w-4 h-4" /> Impact Numbers
            </TabsTrigger>
          </TabsList>
        </div>

        {/* 1. COMPANY INFO TAB */}
        <TabsContent value="company" className="space-y-6">
          <Card className="border-border shadow-md">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" /> Company Identity & Official Contact Info
              </CardTitle>
              <CardDescription>
                These details appear in the header, footer, WhatsApp quick action bar, booking confirmations, and contact section.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="comp-name">Company Name</Label>
                <Input
                  id="comp-name"
                  value={companyForm.name}
                  onChange={(e) => setCompanyForm({ ...companyForm, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="comp-tagline">Company Tagline / Bio</Label>
                <Input
                  id="comp-tagline"
                  value={companyForm.tagline}
                  onChange={(e) => setCompanyForm({ ...companyForm, tagline: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="comp-phone" className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-primary" /> Display Phone Number
                </Label>
                <Input
                  id="comp-phone"
                  value={companyForm.phone}
                  onChange={(e) => setCompanyForm({ ...companyForm, phone: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="comp-wa" className="flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-emerald-500" /> WhatsApp Number (International format without +)
                </Label>
                <Input
                  id="comp-wa"
                  value={companyForm.whatsapp}
                  onChange={(e) => setCompanyForm({ ...companyForm, whatsapp: e.target.value })}
                  placeholder="2347056717597"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="comp-email" className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-400" /> Official Email Address
                </Label>
                <Input
                  id="comp-email"
                  type="email"
                  value={companyForm.email}
                  onChange={(e) => setCompanyForm({ ...companyForm, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="comp-insta" className="flex items-center gap-1.5">
                  <Instagram className="w-3.5 h-3.5 text-pink-500" /> Instagram Handle
                </Label>
                <Input
                  id="comp-insta"
                  value={companyForm.instagram}
                  onChange={(e) => setCompanyForm({ ...companyForm, instagram: e.target.value })}
                  placeholder="@srfitness"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="comp-address" className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-primary" /> Location & Training Zones in Lagos
                </Label>
                <Input
                  id="comp-address"
                  value={companyForm.address}
                  onChange={(e) => setCompanyForm({ ...companyForm, address: e.target.value })}
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="comp-hours" className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" /> Operating & Coaching Hours
                </Label>
                <Input
                  id="comp-hours"
                  value={companyForm.workingHours}
                  onChange={(e) => setCompanyForm({ ...companyForm, workingHours: e.target.value })}
                />
              </div>
            </CardContent>
            <CardFooter className="bg-muted/30 border-t border-border flex justify-end">
              <Button onClick={handleSaveCompany} className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold gap-2">
                <Save className="w-4 h-4" /> Save Company Profile
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* 2. HERO & INTRO TAB */}
        <TabsContent value="hero" className="space-y-6">
          <Card className="border-border shadow-md">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" /> Hero Section Headlines & Background Photo
              </CardTitle>
              <CardDescription>
                The first visual element visitors see when opening the website.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Photo Selector & Uploader */}
              <div className="p-4 rounded-xl bg-muted/40 border border-border/80 space-y-4">
                <Label className="text-sm font-bold flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-primary" /> Hero Background Photo
                </Label>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="relative w-32 h-20 sm:w-48 sm:h-28 rounded-lg overflow-hidden border border-white/20 shadow-md bg-zinc-950 shrink-0">
                    <Image
                      src={heroForm.bgImage || "/use.png"}
                      alt="Hero Background Preview"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>

                  <div className="space-y-3 flex-1 w-full">
                    <div className="flex flex-wrap items-center gap-2">
                      <Label
                        htmlFor="hero-upload"
                        className="cursor-pointer inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-bold shadow-sm transition-all"
                      >
                        <Upload className="w-3.5 h-3.5" /> Upload Custom Photo
                      </Label>
                      <input
                        id="hero-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, (url) => setHeroForm({ ...heroForm, bgImage: url }))}
                      />

                      <Select
                        value={presetImages.some(p => p.value === heroForm.bgImage) ? heroForm.bgImage : "custom"}
                        onValueChange={(val) => {
                          if (val !== "custom") setHeroForm({ ...heroForm, bgImage: val });
                        }}
                      >
                        <SelectTrigger className="w-[200px] text-xs h-9">
                          <SelectValue placeholder="Select preset photo" />
                        </SelectTrigger>
                        <SelectContent>
                          {presetImages.map(p => (
                            <SelectItem key={p.value} value={p.value} className="text-xs">
                              {p.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="hero-img-url" className="text-xs text-muted-foreground">Or Paste Direct Image URL / Path:</Label>
                      <Input
                        id="hero-img-url"
                        value={heroForm.bgImage}
                        onChange={(e) => setHeroForm({ ...heroForm, bgImage: e.target.value })}
                        placeholder="/use.png"
                        className="text-xs"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="hero-badge">Top Badge Text</Label>
                  <Input
                    id="hero-badge"
                    value={heroForm.badge}
                    onChange={(e) => setHeroForm({ ...heroForm, badge: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hero-rating">Social Proof Rating</Label>
                  <Input
                    id="hero-rating"
                    value={heroForm.ratingText}
                    onChange={(e) => setHeroForm({ ...heroForm, ratingText: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hero-h1">Main Headline Line 1</Label>
                  <Input
                    id="hero-h1"
                    value={heroForm.headline}
                    onChange={(e) => setHeroForm({ ...heroForm, headline: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hero-h1-acc">Main Headline Accent Line 2</Label>
                  <Input
                    id="hero-h1-acc"
                    value={heroForm.headlineAccent}
                    onChange={(e) => setHeroForm({ ...heroForm, headlineAccent: e.target.value })}
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="hero-sub">Sub-Headline (Lagos Value Proposition)</Label>
                  <Textarea
                    id="hero-sub"
                    rows={3}
                    value={heroForm.subheadline}
                    onChange={(e) => setHeroForm({ ...heroForm, subheadline: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hero-cta-1">Primary CTA Button Label</Label>
                  <Input
                    id="hero-cta-1"
                    value={heroForm.ctaPrimary}
                    onChange={(e) => setHeroForm({ ...heroForm, ctaPrimary: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hero-cta-2">Secondary CTA Button Label</Label>
                  <Input
                    id="hero-cta-2"
                    value={heroForm.ctaSecondary}
                    onChange={(e) => setHeroForm({ ...heroForm, ctaSecondary: e.target.value })}
                  />
                </div>
              </div>

            </CardContent>
            <CardFooter className="bg-muted/30 border-t border-border flex justify-end">
              <Button onClick={handleSaveHero} className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold gap-2">
                <Save className="w-4 h-4" /> Save Hero Section
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* 3. ABOUT & LEADERSHIP TAB */}
        <TabsContent value="about" className="space-y-6">
          <Card className="border-border shadow-md">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-primary" /> About Section, Founder Photo & Brand Pillars
              </CardTitle>
              <CardDescription>
                Showcases your coaching philosophy, founder credentials, and core mission.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Photo Selector & Uploader */}
              <div className="p-4 rounded-xl bg-muted/40 border border-border/80 space-y-4">
                <Label className="text-sm font-bold flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-primary" /> Leadership / Training Image
                </Label>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="relative w-32 h-24 sm:w-44 sm:h-32 rounded-lg overflow-hidden border border-white/20 shadow-md bg-zinc-950 shrink-0">
                    <Image
                      src={aboutForm.image || "/train.jpeg"}
                      alt="About Section Preview"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>

                  <div className="space-y-3 flex-1 w-full">
                    <div className="flex flex-wrap items-center gap-2">
                      <Label
                        htmlFor="about-upload"
                        className="cursor-pointer inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-bold shadow-sm transition-all"
                      >
                        <Upload className="w-3.5 h-3.5" /> Upload Leadership Photo
                      </Label>
                      <input
                        id="about-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, (url) => setAboutForm({ ...aboutForm, image: url }))}
                      />

                      <Select
                        value={presetImages.some(p => p.value === aboutForm.image) ? aboutForm.image : "custom"}
                        onValueChange={(val) => {
                          if (val !== "custom") setAboutForm({ ...aboutForm, image: val });
                        }}
                      >
                        <SelectTrigger className="w-[200px] text-xs h-9">
                          <SelectValue placeholder="Select preset photo" />
                        </SelectTrigger>
                        <SelectContent>
                          {presetImages.map(p => (
                            <SelectItem key={p.value} value={p.value} className="text-xs">
                              {p.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="about-img-url" className="text-xs text-muted-foreground">Direct Image Path / URL:</Label>
                      <Input
                        id="about-img-url"
                        value={aboutForm.image}
                        onChange={(e) => setAboutForm({ ...aboutForm, image: e.target.value })}
                        className="text-xs"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="about-badge">Section Badge</Label>
                  <Input
                    id="about-badge"
                    value={aboutForm.badge}
                    onChange={(e) => setAboutForm({ ...aboutForm, badge: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="about-stat">Floating Metric Pill</Label>
                  <Input
                    id="about-stat"
                    value={aboutForm.statPill}
                    onChange={(e) => setAboutForm({ ...aboutForm, statPill: e.target.value })}
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="about-heading">Main Heading</Label>
                  <Input
                    id="about-heading"
                    value={aboutForm.heading}
                    onChange={(e) => setAboutForm({ ...aboutForm, heading: e.target.value })}
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="about-subheading">Philosophy / Mission Statement</Label>
                  <Textarea
                    id="about-subheading"
                    rows={3}
                    value={aboutForm.subheading}
                    onChange={(e) => setAboutForm({ ...aboutForm, subheading: e.target.value })}
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="about-quote">Founder Quote</Label>
                  <Textarea
                    id="about-quote"
                    rows={2}
                    value={aboutForm.founderQuote}
                    onChange={(e) => setAboutForm({ ...aboutForm, founderQuote: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="about-fname">Founder Name</Label>
                  <Input
                    id="about-fname"
                    value={aboutForm.founderName}
                    onChange={(e) => setAboutForm({ ...aboutForm, founderName: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="about-frole">Founder Title / Role</Label>
                  <Input
                    id="about-frole"
                    value={aboutForm.founderRole}
                    onChange={(e) => setAboutForm({ ...aboutForm, founderRole: e.target.value })}
                  />
                </div>
              </div>

            </CardContent>
            <CardFooter className="bg-muted/30 border-t border-border flex justify-end">
              <Button onClick={handleSaveAbout} className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold gap-2">
                <Save className="w-4 h-4" /> Save About Section
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* 4. CORE SERVICES TAB */}
        <TabsContent value="services" className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-foreground">4 Core Fitness Pillars & Services</h2>
              <p className="text-xs text-muted-foreground">Manage service titles, card photos, descriptions, and highlights.</p>
            </div>
            <Button onClick={handleSaveServices} className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold gap-2 text-xs">
              <Save className="w-4 h-4" /> Save All Services
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicesForm.map((service, index) => (
              <Card key={service.id} className="border-border shadow-md flex flex-col justify-between">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-primary border-primary/40 text-[10px]">
                      {service.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground font-mono">#{index + 1}</span>
                  </div>
                  <CardTitle className="text-lg mt-1">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  
                  {/* Photo Preview & Upload */}
                  <div className="flex items-center gap-3 bg-muted/40 p-2.5 rounded-lg border border-border">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden bg-black shrink-0">
                      <Image
                        src={service.image || "/train.jpeg"}
                        alt={service.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="flex-1 space-y-1.5">
                      <div className="flex items-center gap-2">
                        <Label
                          htmlFor={`service-upload-${service.id}`}
                          className="cursor-pointer inline-flex items-center gap-1 px-2.5 py-1 rounded bg-primary text-primary-foreground text-[11px] font-semibold"
                        >
                          <Upload className="w-3 h-3" /> Change Photo
                        </Label>
                        <input
                          id={`service-upload-${service.id}`}
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleFileUpload(e, (url) => {
                            const updated = [...servicesForm];
                            updated[index].image = url;
                            setServicesForm(updated);
                          })}
                        />
                      </div>
                      <Input
                        value={service.image}
                        onChange={(e) => {
                          const updated = [...servicesForm];
                          updated[index].image = e.target.value;
                          setServicesForm(updated);
                        }}
                        className="text-[11px] h-7"
                        placeholder="Image URL"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs">Service Title</Label>
                    <Input
                      value={service.title}
                      onChange={(e) => {
                        const updated = [...servicesForm];
                        updated[index].title = e.target.value;
                        setServicesForm(updated);
                      }}
                      className="text-xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs">Badge Tag</Label>
                    <Input
                      value={service.badge}
                      onChange={(e) => {
                        const updated = [...servicesForm];
                        updated[index].badge = e.target.value;
                        setServicesForm(updated);
                      }}
                      className="text-xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs">Description</Label>
                    <Textarea
                      rows={3}
                      value={service.description}
                      onChange={(e) => {
                        const updated = [...servicesForm];
                        updated[index].description = e.target.value;
                        setServicesForm(updated);
                      }}
                      className="text-xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs">Key Feature Bullet Points (Comma separated)</Label>
                    <Input
                      value={service.features.join(", ")}
                      onChange={(e) => {
                        const updated = [...servicesForm];
                        updated[index].features = e.target.value.split(",").map(f => f.trim());
                        setServicesForm(updated);
                      }}
                      className="text-xs"
                    />
                  </div>

                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* 5. TRANSFORMATIONS TAB */}
        <TabsContent value="transformations" className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-foreground">Verified Client Transformations & Case Studies</h2>
              <p className="text-xs text-muted-foreground">Upload transformation photos and update documented client weight loss stories.</p>
            </div>
            <Button onClick={handleSaveTransformations} className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold gap-2 text-xs">
              <Save className="w-4 h-4" /> Save Transformations
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {transformationsForm.map((study, index) => (
              <Card key={index} className="border-border shadow-md flex flex-col justify-between">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-emerald-500 text-white text-[10px]">
                      {study.metric}
                    </Badge>
                    <span className="text-xs text-muted-foreground font-semibold">{study.timeframe}</span>
                  </div>
                  <CardTitle className="text-lg mt-1">{study.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  
                  {/* Photo Preview & Upload */}
                  <div className="space-y-2 bg-muted/40 p-3 rounded-lg border border-border">
                    <div className="relative w-full h-40 rounded-md overflow-hidden bg-black">
                      <Image
                        src={study.image || "/tracy after.jpg"}
                        alt={study.name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      <Label
                        htmlFor={`trans-upload-${index}`}
                        className="cursor-pointer flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded bg-primary text-primary-foreground text-xs font-semibold"
                      >
                        <Upload className="w-3.5 h-3.5" /> Upload Transformation Photo
                      </Label>
                      <input
                        id={`trans-upload-${index}`}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, (url) => {
                          const updated = [...transformationsForm];
                          updated[index].image = url;
                          setTransformationsForm(updated);
                        })}
                      />
                    </div>
                    <Input
                      value={study.image}
                      onChange={(e) => {
                        const updated = [...transformationsForm];
                        updated[index].image = e.target.value;
                        setTransformationsForm(updated);
                      }}
                      className="text-[11px] h-7"
                      placeholder="Photo URL"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <Label className="text-xs">Client Name</Label>
                      <Input
                        value={study.name}
                        onChange={(e) => {
                          const updated = [...transformationsForm];
                          updated[index].name = e.target.value;
                          setTransformationsForm(updated);
                        }}
                        className="text-xs"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs">Location</Label>
                      <Input
                        value={study.location}
                        onChange={(e) => {
                          const updated = [...transformationsForm];
                          updated[index].location = e.target.value;
                          setTransformationsForm(updated);
                        }}
                        className="text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <Label className="text-xs">Metric (e.g. -14 kg)</Label>
                      <Input
                        value={study.metric}
                        onChange={(e) => {
                          const updated = [...transformationsForm];
                          updated[index].metric = e.target.value;
                          setTransformationsForm(updated);
                        }}
                        className="text-xs"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs">Timeframe (e.g. 12 Weeks)</Label>
                      <Input
                        value={study.timeframe}
                        onChange={(e) => {
                          const updated = [...transformationsForm];
                          updated[index].timeframe = e.target.value;
                          setTransformationsForm(updated);
                        }}
                        className="text-xs"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <Label className="text-xs">Client Testimonial Quote</Label>
                    <Textarea
                      rows={3}
                      value={study.quote}
                      onChange={(e) => {
                        const updated = [...transformationsForm];
                        updated[index].quote = e.target.value;
                        setTransformationsForm(updated);
                      }}
                      className="text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label className="text-xs">Key Milestones (Comma separated)</Label>
                    <Input
                      value={study.results.join(", ")}
                      onChange={(e) => {
                        const updated = [...transformationsForm];
                        updated[index].results = e.target.value.split(",").map(r => r.trim());
                        setTransformationsForm(updated);
                      }}
                      className="text-xs"
                    />
                  </div>

                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* 6. PRICING & PROMOS TAB */}
        <TabsContent value="pricing" className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-foreground">Membership Plans & Cohort Promos</h2>
              <p className="text-xs text-muted-foreground">Manage prices in Nigerian Naira (₦), feature checklists, and challenge cohort details.</p>
            </div>
            <Button onClick={handleSavePricing} className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold gap-2 text-xs">
              <Save className="w-4 h-4" /> Save Pricing & Promos
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingForm.map((tier, index) => (
              <Card key={tier.id} className="border-border shadow-md">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge variant={tier.popular ? "default" : "secondary"} className="text-[10px]">
                      {tier.badge || "Standard Plan"}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mt-1">{tier.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <Label className="text-xs">Monthly Price</Label>
                      <Input
                        value={tier.monthlyPrice}
                        onChange={(e) => {
                          const updated = [...pricingForm];
                          updated[index].monthlyPrice = e.target.value;
                          setPricingForm(updated);
                        }}
                        className="text-xs font-bold text-primary"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs">Quarterly Price</Label>
                      <Input
                        value={tier.quarterlyPrice}
                        onChange={(e) => {
                          const updated = [...pricingForm];
                          updated[index].quarterlyPrice = e.target.value;
                          setPricingForm(updated);
                        }}
                        className="text-xs font-bold text-foreground"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <Label className="text-xs">Description</Label>
                    <Textarea
                      rows={2}
                      value={tier.description}
                      onChange={(e) => {
                        const updated = [...pricingForm];
                        updated[index].description = e.target.value;
                        setPricingForm(updated);
                      }}
                      className="text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label className="text-xs">Included Features (1 per line)</Label>
                    <Textarea
                      rows={5}
                      value={tier.features.join("\n")}
                      onChange={(e) => {
                        const updated = [...pricingForm];
                        updated[index].features = e.target.value.split("\n").filter(f => f.trim().length > 0);
                        setPricingForm(updated);
                      }}
                      className="text-xs leading-relaxed"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Promo Banners Management */}
          <Card className="border-border shadow-md mt-6">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-500" /> 30-Day Challenge & Referral Program Promos
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <Badge className="bg-amber-500 text-black text-[10px]">30-Day Challenge Cohort</Badge>
                <div className="space-y-1.5">
                  <Label className="text-xs">Challenge Title</Label>
                  <Input
                    value={promosForm.challengeTitle}
                    onChange={(e) => setPromosForm({ ...promosForm, challengeTitle: e.target.value })}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Challenge Description</Label>
                  <Textarea
                    rows={3}
                    value={promosForm.challengeDesc}
                    onChange={(e) => setPromosForm({ ...promosForm, challengeDesc: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <Badge className="bg-emerald-500 text-white text-[10px]">Referral Program</Badge>
                <div className="space-y-1.5">
                  <Label className="text-xs">Referral Title</Label>
                  <Input
                    value={promosForm.referralTitle}
                    onChange={(e) => setPromosForm({ ...promosForm, referralTitle: e.target.value })}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Referral Terms & Reward</Label>
                  <Textarea
                    rows={3}
                    value={promosForm.referralDesc}
                    onChange={(e) => setPromosForm({ ...promosForm, referralDesc: e.target.value })}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 7. GALLERY & MEDIA MANAGER TAB */}
        <TabsContent value="gallery" className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold text-foreground">Facility & Community Gallery Media</h2>
              <p className="text-xs text-muted-foreground">Add new photos, update titles and categories, or remove outdated pictures.</p>
            </div>

            <Dialog open={isAddGalleryOpen} onOpenChange={setIsAddGalleryOpen}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold gap-2 text-xs">
                  <Plus className="w-4 h-4" /> Add New Gallery Photo
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Add Photo to Facility Gallery</DialogTitle>
                  <DialogDescription>
                    Upload a high-resolution gym floor, bootcamp, or training photo.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-3">
                  
                  {/* Photo Preview & Upload */}
                  <div className="space-y-2">
                    <div className="relative w-full h-44 rounded-xl overflow-hidden bg-black border border-border">
                      <Image
                        src={newGalleryPhoto.src || "/gal35.jpg"}
                        alt="Preview"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      <Label
                        htmlFor="new-gal-upload"
                        className="cursor-pointer flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-bold"
                      >
                        <Upload className="w-3.5 h-3.5" /> Upload File From Phone/PC
                      </Label>
                      <input
                        id="new-gal-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, (url) => setNewGalleryPhoto({ ...newGalleryPhoto, src: url }))}
                      />
                    </div>
                    <Input
                      value={newGalleryPhoto.src}
                      onChange={(e) => setNewGalleryPhoto({ ...newGalleryPhoto, src: e.target.value })}
                      placeholder="/gal35.jpg or https://..."
                      className="text-xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs">Photo Title / Caption</Label>
                    <Input
                      value={newGalleryPhoto.title}
                      onChange={(e) => setNewGalleryPhoto({ ...newGalleryPhoto, title: e.target.value })}
                      placeholder="e.g. Strength Training Session"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <Label className="text-xs">Category</Label>
                      <Select
                        value={newGalleryPhoto.category}
                        onValueChange={(val: any) => setNewGalleryPhoto({ ...newGalleryPhoto, category: val })}
                      >
                        <SelectTrigger className="text-xs">
                          <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="floor">Gym Floor & Gear</SelectItem>
                          <SelectItem value="bootcamp">Group Bootcamp</SelectItem>
                          <SelectItem value="training">Personal Training</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-xs">Tag Badge</Label>
                      <Input
                        value={newGalleryPhoto.tag}
                        onChange={(e) => setNewGalleryPhoto({ ...newGalleryPhoto, tag: e.target.value })}
                        placeholder="e.g. Facility / Cardio"
                      />
                    </div>
                  </div>

                </div>
                <DialogFooter>
                  <Button onClick={handleCreateGalleryItem} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                    Add Photo to Gallery
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {content.galleryImages.map((photo) => (
              <Card key={photo.id} className="overflow-hidden border-border/80 group flex flex-col justify-between">
                <div className="relative aspect-[4/5] bg-black">
                  <Image
                    src={photo.src}
                    alt={photo.alt || photo.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="text-[9px] px-1.5 py-0.5 bg-black/70 text-white backdrop-blur-sm">
                      {photo.tag}
                    </Badge>
                  </div>

                  <button
                    onClick={() => {
                      if (confirm(`Delete "${photo.title}" from gallery?`)) {
                        deleteGalleryImage(photo.id);
                        toast({ title: "Photo Deleted", description: "Removed from gallery." });
                      }
                    }}
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-black/70 text-red-400 hover:bg-red-500 hover:text-white transition-all shadow-md"
                    title="Delete photo"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>

                  <div className="absolute bottom-2 left-2 right-2 text-white">
                    <p className="text-xs font-bold truncate">{photo.title}</p>
                    <p className="text-[10px] text-zinc-300 capitalize">{photo.category}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* 8. IMPACT NUMBERS TAB */}
        <TabsContent value="impact" className="space-y-6">
          <Card className="border-border shadow-md">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" /> Key Impact Statistics & Numerical Counters
              </CardTitle>
              <CardDescription>
                Live animated counters on the homepage displaying client transformation milestones.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {impactForm.map((stat, index) => (
                <div key={index} className="p-4 rounded-xl bg-muted/40 border border-border space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-primary uppercase">Counter #{index + 1}</span>
                    <Badge variant="outline" className="text-[10px]">{stat.suffix || "+"}</Badge>
                  </div>

                  <div className="space-y-1">
                    <Label className="text-xs">Target Number</Label>
                    <Input
                      type="number"
                      value={stat.value}
                      onChange={(e) => {
                        const updated = [...impactForm];
                        updated[index].value = Number(e.target.value);
                        setImpactForm(updated);
                      }}
                      className="text-lg font-bold text-primary"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label className="text-xs">Suffix (e.g. +, kg+, %)</Label>
                    <Input
                      value={stat.suffix || ""}
                      onChange={(e) => {
                        const updated = [...impactForm];
                        updated[index].suffix = e.target.value;
                        setImpactForm(updated);
                      }}
                      className="text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label className="text-xs">Primary Label</Label>
                    <Input
                      value={stat.label}
                      onChange={(e) => {
                        const updated = [...impactForm];
                        updated[index].label = e.target.value;
                        setImpactForm(updated);
                      }}
                      className="text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label className="text-xs">Sub-label</Label>
                    <Input
                      value={stat.sublabel}
                      onChange={(e) => {
                        const updated = [...impactForm];
                        updated[index].sublabel = e.target.value;
                        setImpactForm(updated);
                      }}
                      className="text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label className="text-xs">Achievement Pill</Label>
                    <Input
                      value={stat.achievement}
                      onChange={(e) => {
                        const updated = [...impactForm];
                        updated[index].achievement = e.target.value;
                        setImpactForm(updated);
                      }}
                      className="text-xs"
                    />
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter className="bg-muted/30 border-t border-border flex justify-end">
              <Button onClick={handleSaveImpact} className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold gap-2">
                <Save className="w-4 h-4" /> Save Impact Numbers
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

      </Tabs>
    </div>
  );
}
