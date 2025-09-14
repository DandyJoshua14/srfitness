
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Bot, ArrowRight, FileSpreadsheet, Send, Mail } from 'lucide-react';
import Link from 'next/link';

const integrationExamples = [
    {
        icon: <FileSpreadsheet className="h-6 w-6 text-green-500" />,
        title: "Nominations to Google Sheets",
        description: "When a new award nomination is submitted, automatically add a new row to a Google Sheet for easy tracking and analysis.",
    },
    {
        icon: <Send className="h-6 w-6 text-blue-500" />,
        title: "Blog Posts to Social Media",
        description: "When you publish a new blog post, automatically share it on your Facebook Page or X (Twitter) profile to drive traffic.",
    },
    {
        icon: <Mail className="h-6 w-6 text-orange-500" />,
        title: "New Voters to Email List",
        description: "When a user casts a vote, add their email address to your marketing list in a service like Mailchimp or ConvertKit.",
    },
    {
        icon: <Bot className="h-6 w-6 text-purple-500" />,
        title: "Admin Notifications in Slack",
        description: "Receive instant notifications in a dedicated Slack channel whenever a new product is sold or a significant vote is made.",
    },
];

export default function AdminIntegrationsPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg border-primary/20">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-primary flex items-center">
            <Zap className="mr-3 h-8 w-8" />
            App Integrations with Zapier
          </CardTitle>
          <CardDescription>
            Automate your workflows by connecting SR Fitness to thousands of other apps.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="prose prose-lg max-w-none text-foreground">
                <p>
                    Zapier is a powerful tool that acts as a bridge between SR Fitness and other web services you use. It allows you to create automated workflows called "Zaps" with a simple "when this happens, do that" logic, without writing any code.
                </p>
                <p>
                    For example, you could set up a Zap so that "When a new nomination is added to the database, then create a new row in a Google Sheet."
                </p>
                <Link href="https://zapier.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 not-prose font-semibold text-primary hover:underline">
                    Learn more about Zapier <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
            <CardTitle>Example Use Cases</CardTitle>
            <CardDescription>Here are a few ideas to get you started with automation.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
                {integrationExamples.map((example, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg border">
                        <div className="mt-1">
                            {example.icon}
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground">{example.title}</h3>
                            <p className="text-sm text-muted-foreground">{example.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
