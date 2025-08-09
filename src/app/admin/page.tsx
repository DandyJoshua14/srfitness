
"use client";

import { Newspaper, Store, ArrowRight, ImageIcon } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function AdminDashboardPage() {
  const managementSections = [
    {
      title: 'Blog Manager',
      description: 'Create, view, and delete blog posts.',
      icon: <Newspaper className="h-8 w-8" />,
      href: '/admin/blog',
      cta: 'Go to Blog Manager',
    },
    {
      title: 'Store Manager',
      description: 'Add, view, and delete store products.',
      icon: <Store className="h-8 w-8" />,
      href: '/admin/store',
      cta: 'Go to Store Manager',
    },
    {
      title: 'Gallery Manager',
      description: 'Upload and delete homepage gallery images.',
      icon: <ImageIcon className="h-8 w-8" />,
      href: '/admin/gallery',
      cta: 'Go to Gallery Manager',
    },
  ];

  return (
    <div className="space-y-8">
      <Card className="shadow-lg border-primary/20">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-primary">
            Admin Dashboard
          </CardTitle>
          <CardDescription>
            Welcome! Select a section below to manage your site content.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {managementSections.map((section) => (
           <Card key={section.title} className="shadow-md hover:shadow-lg transition-shadow hover:border-primary/30 flex flex-col">
              <CardHeader className="flex-row items-center gap-4 space-y-0">
                  <div className="p-3 bg-primary/10 rounded-md text-primary">
                    {section.icon}
                  </div>
                  <div>
                    <CardTitle className="font-headline text-2xl">{section.title}</CardTitle>
                    <CardDescription>{section.description}</CardDescription>
                  </div>
              </CardHeader>
              <CardContent className="flex-grow flex items-end">
                <Button asChild className="w-full mt-4">
                  <Link href={section.href}>
                    {section.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
           </Card>
        ))}
      </div>
    </div>
  );
}
