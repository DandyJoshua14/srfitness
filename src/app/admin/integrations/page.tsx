
"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Zap, Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Link from 'next/link';

export default function AdminIntegrationsPage() {
  const { toast } = useToast();
  const [copied, setCopied] = useState<Record<string, boolean>>({});

  const voteWebhookUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/webhook/zapier/vote`;
  const ticketWebhookUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/webhook/zapier/ticket`;
  const donationWebhookUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/webhook/zapier/donation`;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({ title: "Copied!", description: "Webhook URL copied to clipboard." });
      setCopied({ [id]: true });
      setTimeout(() => setCopied(prev => ({ ...prev, [id]: false })), 2000);
    });
  };

  const zapierInstructions = [
    "Create a new Zap in your Zapier dashboard.",
    "For the trigger, select the 'Webhooks by Zapier' app.",
    "Choose the 'Catch Hook' event.",
    "Copy one of the webhook URLs below and paste it into the 'Webhook URL' field in Zapier.",
    "For the action step, choose the 'Google Sheets' app.",
    "Select the 'Create Spreadsheet Row' event and connect your Google account.",
    "Map the data fields from the webhook (e.g., contestantName, numberOfVotes) to the columns in your sheet.",
    "Test your Zap and turn it on!",
  ];

  return (
    <div className="space-y-8">
      <Card className="shadow-lg border-primary/20">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-primary flex items-center">
            <Zap className="mr-3 h-8 w-8" />
            Integrations
          </CardTitle>
          <CardDescription>
            Connect your app to external services like Google Sheets using Zapier webhooks.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <Card>
          <CardHeader>
            <CardTitle>Zapier Webhook URLs</CardTitle>
            <CardDescription>
              Use these URLs in Zapier to receive data from your app.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="vote-webhook" className="font-semibold">Votes Webhook URL</Label>
              <div className="flex gap-2">
                <Input id="vote-webhook" readOnly value={process.env.ZAPIER_VOTE_WEBHOOK_URL || "Set ZAPIER_VOTE_WEBHOOK_URL in .env"} />
                <Button size="icon" variant="outline" onClick={() => copyToClipboard(process.env.ZAPIER_VOTE_WEBHOOK_URL || '', 'vote')} aria-label="Copy vote webhook URL">
                  {copied['vote'] ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>
             <div className="space-y-2">
              <Label htmlFor="ticket-webhook" className="font-semibold">Ticket Sales Webhook URL</Label>
              <div className="flex gap-2">
                <Input id="ticket-webhook" readOnly value={process.env.ZAPIER_TICKET_WEBHOOK_URL || "Set ZAPIER_TICKET_WEBHOOK_URL in .env"} />
                <Button size="icon" variant="outline" onClick={() => copyToClipboard(process.env.ZAPIER_TICKET_WEBHOOK_URL || '', 'ticket')} aria-label="Copy ticket webhook URL">
                  {copied['ticket'] ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>
             <div className="space-y-2">
              <Label htmlFor="donation-webhook" className="font-semibold">Donations Webhook URL</Label>
              <div className="flex gap-2">
                <Input id="donation-webhook" readOnly value={process.env.ZAPIER_DONATION_WEBHOOK_URL || "Set ZAPIER_DONATION_WEBHOOK_URL in .env"} />
                <Button size="icon" variant="outline" onClick={() => copyToClipboard(process.env.ZAPIER_DONATION_WEBHOOK_URL || '', 'donation')} aria-label="Copy donation webhook URL">
                  {copied['donation'] ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            <Alert>
                <Zap className="h-4 w-4" />
                <AlertTitle>Environment Variables</AlertTitle>
                <AlertDescription>
                    These URLs must be configured in your project's environment variables (`.env` file) to function correctly.
                </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>How to Connect to Google Sheets</CardTitle>
                <CardDescription>
                    Follow these steps to send your vote data to a Google Sheet.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                    {zapierInstructions.map((step, index) => (
                        <li key={index} className="flex items-start">
                            <span className="font-semibold mr-2 text-primary">{index + 1}.</span>
                            <span>{step}</span>
                        </li>
                    ))}
                </ol>
                 <Button asChild variant="link" className="px-0 mt-4">
                    <Link href="https://zapier.com/apps/google-sheets/integrations" target="_blank" rel="noopener noreferrer">
                        Go to Zapier <Zap className="ml-2 h-4 w-4"/>
                    </Link>
                </Button>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
