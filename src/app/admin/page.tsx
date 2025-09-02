
"use client";

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Newspaper, Store, BookOpen, Vote } from 'lucide-react';

const features = [
    {
        title: "Blog Manager",
        description: "Create, view, and delete blog posts.",
        href: "/admin/blog",
        icon: <Newspaper className="h-8 w-8 text-primary" />,
    },
    {
        title: "Store Manager",
        description: "Add and remove products from the marketplace.",
        href: "/admin/store",
        icon: <Store className="h-8 w-8 text-primary" />,
    },
    {
        title: "Magazine Manager",
        description: "Manage articles for the Lifestyle Magazine.",
        href: "/admin/magazine",
        icon: <BookOpen className="h-8 w-8 text-primary" />,
    },
    {
        title: "Vote Tracker",
        description: "View and monitor real-time voting results.",
        href: "/admin/votes",
        icon: <Vote className="h-8 w-8 text-primary" />,
    }
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
        <Card className="shadow-lg border-primary/20">
            <CardHeader>
                <CardTitle className="font-headline text-3xl text-primary">Admin Dashboard</CardTitle>
                <CardDescription>
                    Welcome to the SR Fitness management area. Choose a section below to get started.
                </CardDescription>
            </CardHeader>
        </Card>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
                <Link key={feature.title} href={feature.href} className="block">
                    <Card className="h-full hover:border-primary hover:shadow-xl transition-all duration-200 group transform hover:-translate-y-1">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                                    {feature.icon}
                                </div>
                                <div>
                                    <CardTitle className="font-headline text-2xl text-foreground group-hover:text-primary transition-colors">
                                        {feature.title}
                                    </CardTitle>
                                </div>
                            </div>
                        </CardHeader>
                         <CardContent>
                            <CardDescription>{feature.description}</CardDescription>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>
    </div>
  );
}
