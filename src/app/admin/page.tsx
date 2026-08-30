/* eslint-disable */
// @ts-nocheck
"use client";

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Layers, 
  Newspaper, 
  Store, 
  BookOpen, 
  Vote, 
  Handshake, 
  Zap, 
  ExternalLink,
  Camera,
  Flame,
  Phone,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const features = [
  {
    title: "Site Content & Media Manager",
    description: "Update company details, phone/WhatsApp, headlines, pricing, before/after stories, and upload photos to any section of the website.",
    href: "/admin/content",
    icon: <Layers className="h-8 w-8 text-primary" />,
    badge: "Company Owner CMS",
    featured: true,
  },
  {
    title: "Facility Gallery Manager",
    description: "Upload and organize gym floor, bootcamp, and coaching photography.",
    href: "/admin/content?tab=gallery",
    icon: <Camera className="h-8 w-8 text-amber-500" />,
    badge: "Media Library",
  },
  {
    title: "Blog Manager",
    description: "Create, view, and publish wellness & fitness articles.",
    href: "/admin/blog",
    icon: <Newspaper className="h-8 w-8 text-primary" />,
  },
  {
    title: "Store & Merchandise Manager",
    description: "Add, edit, and manage products on the SR Fitness marketplace.",
    href: "/admin/store",
    icon: <Store className="h-8 w-8 text-emerald-500" />,
  },
  {
    title: "Lifestyle Magazine",
    description: "Manage digital edition articles for the SR Fitness Magazine.",
    href: "/admin/magazine",
    icon: <BookOpen className="h-8 w-8 text-blue-500" />,
  },
  {
    title: "Award Nominations",
    description: "View and review nominations for annual SR Fitness Awards.",
    href: "/admin/nominations",
    icon: <Handshake className="h-8 w-8 text-purple-500" />,
  },
  {
    title: "Vote Tracker",
    description: "View real-time award voting results and tally records.",
    href: "/admin/votes",
    icon: <Vote className="h-8 w-8 text-rose-500" />,
  },
  {
    title: "Integrations & Webhooks",
    description: "Connect your app to Zapier, CRM, and automated notification channels.",
    href: "/admin/integrations",
    icon: <Zap className="h-8 w-8 text-yellow-500" />,
  }
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8 pb-12">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-primary/30 p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <Badge className="bg-primary text-primary-foreground font-bold px-3 py-0.5 text-xs">
              Management Portal
            </Badge>
            <span className="text-xs text-zinc-400">SR Fitness Lagos</span>
          </div>
          <h1 className="font-headline text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Welcome to the <span className="text-primary">Admin Control Center</span>
          </h1>
          <p className="text-sm text-zinc-300">
            Easily update company details, change photos across all homepage sections, adjust membership prices, and manage products and content.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold gap-2 text-xs shadow-lg shadow-primary/20">
            <Link href="/admin/content">
              <Layers className="w-4 h-4" /> Open Site CMS
            </Link>
          </Button>

          <Button asChild variant="outline" className="border-border text-foreground hover:bg-muted text-xs gap-1.5">
            <Link href="/" target="_blank">
              <ExternalLink className="w-3.5 h-3.5" /> View Public Site
            </Link>
          </Button>
        </div>
      </div>

      {/* Grid of Management Modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((feature) => (
          <Link key={feature.title} href={feature.href} className="block group">
            <Card className={`h-full border transition-all duration-300 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 ${
              feature.featured
                ? 'border-primary/50 bg-gradient-to-b from-primary/10 via-card to-card ring-1 ring-primary/30 md:col-span-2'
                : 'border-border/80 bg-card hover:border-primary/40'
            }`}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors shrink-0">
                    {feature.icon}
                  </div>
                  {feature.badge && (
                    <Badge className="bg-primary text-primary-foreground font-semibold text-[10px] px-2.5 py-0.5">
                      {feature.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="font-headline text-xl sm:text-2xl text-foreground group-hover:text-primary transition-colors mt-3">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>

                <div className="pt-2 flex items-center text-xs font-semibold text-primary group-hover:underline gap-1">
                  <span>Open Module</span> <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
