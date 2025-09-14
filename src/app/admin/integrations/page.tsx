
"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Zap, Bot, ArrowRight, FileSpreadsheet, Send, Mail, TestTube2, Save } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';


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
  const [webhookUrl, setWebhookUrl] = useState('');
  const { toast } = useToast();

  const handleSave = () => {
    // In a real application, this would securely save the webhookUrl to your backend/environment variables.
    // For this demo, we'll just confirm it's been "saved".
    if (!webhookUrl.startsWith('https://hooks.zapier.com/')) {
        toast({
            title: "Invalid URL",
            description: "Please enter a valid Zapier Webhook URL.",
            variant: "destructive",
        });
        return;
    }
    
    toast({
      title: "Settings Saved (Conceptual)",
      description: "Your Zapier Webhook URL has been saved.",
    });
  };

  const handleTest = async () => {
    if (!webhookUrl.startsWith('https://hooks.zapier.com/')) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid Zapier Webhook URL before testing.",
        variant: "destructive",
      });
      return;
    }

    // This sends a sample payload to the webhook.
    // You should set up a Zap in Zapier to "Catch Hook" to receive this.
    try {
        const testData = {
            event: "test_connection",
            appName: "SR Fitness Admin",
            message: "This is a successful test from your website!",
            timestamp: new Date().toISOString(),
        };

        const response = await fetch(webhookUrl, {
            method: 'POST',
            body: JSON.stringify(testData),
        });

        if (response.ok) {
            toast({
              title: "Test Sent Successfully!",
              description: "Check your Zap in Zapier to see the test data.",
            });
        } else {
            const responseData = await response.json();
            toast({
              title: "Test Failed",
              description: `Zapier returned an error: ${responseData.status || 'unknown'}. Please check your webhook URL and Zap setup.`,
              variant: "destructive",
            });
        }
    } catch (error) {
        toast({
            title: "Connection Error",
            description: "Could not connect to the Zapier webhook. Please check the URL and your network connection.",
            variant: "destructive",
        });
    }
  };

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
                    Most integrations work by using a **"Webhook by Zapier"**. You create a new Zap, choose "Webhook" as the trigger, and Zapier will give you a unique URL. Paste that URL in the settings below to connect your app.
                </p>
                <Link href="https://zapier.com/apps/webhook/integrations" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 not-prose font-semibold text-primary hover:underline">
                    Learn more about Zapier Webhooks <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
        </CardContent>
      </Card>
      
       <Card>
        <CardHeader>
          <CardTitle>Zapier Connection</CardTitle>
          <CardDescription>
            Enter your Zapier Webhook URL here to enable integrations.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="zapier-webhook" className="font-semibold">Zapier Webhook URL</Label>
            <Input
              id="zapier-webhook"
              type="url"
              placeholder="https://hooks.zapier.com/hooks/catch/..."
              value={webhookUrl}
              onChange={(e) => setWebhookUrl(e.target.value)}
              className="mt-1"
            />
          </div>
           <Alert variant="default">
                <Zap className="h-4 w-4" />
                <AlertTitle>How it works</AlertTitle>
                <AlertDescription>
                    Pasting your webhook URL here allows your application to send data (like new nominations or votes) to Zapier, which can then forward it to other apps like Google Sheets or Slack.
                </AlertDescription>
            </Alert>
        </CardContent>
        <CardFooter className="justify-end space-x-2">
            <Button variant="outline" onClick={handleTest} disabled={!webhookUrl}>
                <TestTube2 className="mr-2 h-4 w-4" /> Test
            </Button>
            <Button onClick={handleSave} disabled={!webhookUrl}>
                <Save className="mr-2 h-4 w-4" /> Save
            </Button>
        </CardFooter>
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

    