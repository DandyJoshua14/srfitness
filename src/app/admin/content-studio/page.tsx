
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ShieldAlert, Settings, Edit, UploadCloud, SendHorizonal, CalendarClock, Save, ServerCrash } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Admin - AI Content Studio',
  robots: 'noindex, nofollow', // Discourage search engine indexing
};

export default function AdminContentStudioPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 bg-muted/20 min-h-screen">
      <Card className="mb-8 shadow-lg border-primary/20">
        <CardHeader className="bg-background rounded-t-lg">
          <CardTitle className="font-headline text-3xl text-primary flex items-center">
            <Settings className="mr-3 h-8 w-8" />
            Admin: AI Content Studio (Conceptual)
          </CardTitle>
          <CardDescription>
            This is a conceptual placeholder for an admin-only AI Content Studio.
            It demonstrates a possible layout for content generation and management.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 bg-background rounded-b-lg">
          <Alert variant="destructive" className="mb-6 border-red-500/50 text-red-700 bg-red-50">
            <ShieldAlert className="h-5 w-5 !text-red-600" />
            <AlertTitle className="text-red-700 font-semibold">Critical Security & Functionality Notice</AlertTitle>
            <AlertDescription className="text-red-600 space-y-1">
              <p>
                This page is currently a **visual placeholder** and is publicly accessible via its URL.
                It **DOES NOT** have any real functionality, security, authentication, or authorization implemented.
              </p>
              <p>
                In a real-world application, this admin area would require robust backend integration for:
                <ul className="list-disc list-inside pl-4 mt-1 text-xs">
                    <li>Secure user authentication and role-based access control (RBAC).</li>
                    <li>Frontend and backend routing guards to prevent unauthorized access.</li>
                    <li>Secure file handling and storage for uploads.</li>
                    <li>Integration with AI services via secure API calls.</li>
                    <li>Database interactions for saving drafts, scheduling, and publishing.</li>
                </ul>
              </p>
               <p className="font-semibold mt-2">
                Attempting to use this page as-is in a production environment would be a severe security risk.
              </p>
            </AlertDescription>
          </Alert>
           <Alert variant="default" className="mb-6 border-blue-500/50 text-blue-700 bg-blue-50">
            <ServerCrash className="h-5 w-5 !text-blue-600" />
            <AlertTitle className="text-blue-700 font-semibold">Backend Integration Required</AlertTitle>
            <AlertDescription className="text-blue-600">
              All interactive elements (buttons, inputs, selects) are non-functional placeholders.
              A complete backend system is necessary to enable features like content generation, saving, publishing, and user management.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center"><UploadCloud className="mr-2 h-5 w-5 text-primary" />Content Input</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="content-text" className="font-semibold">Paste Text</Label>
                <Textarea id="content-text" placeholder="Paste your article text, script, or notes here..." rows={10} className="mt-1" disabled />
              </div>
              <div>
                <Label htmlFor="content-upload" className="font-semibold">Upload Document (Word, PDF)</Label>
                <Input id="content-upload" type="file" className="mt-1" disabled />
                <p className="text-xs text-muted-foreground mt-1">Placeholder: File upload is not functional.</p>
              </div>
              <div>
                <Label htmlFor="media-upload" className="font-semibold">Upload Audio/Video (for transcription/podcast)</Label>
                <Input id="media-upload" type="file" accept="audio/*,video/*" className="mt-1" disabled />
                <p className="text-xs text-muted-foreground mt-1">Placeholder: File upload is not functional.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center"><Settings className="mr-2 h-5 w-5 text-primary" />AI Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="ai-tone" className="font-semibold">Tone</Label>
                <Select disabled>
                  <SelectTrigger id="ai-tone" className="mt-1"><SelectValue placeholder="Select Tone" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="formal">Formal</SelectItem>
                    <SelectItem value="casual">Casual</SelectItem>
                    <SelectItem value="witty">Witty</SelectItem>
                    <SelectItem value="informative">Informative</SelectItem>
                    <SelectItem value="persuasive">Persuasive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="ai-length" className="font-semibold">Desired Length</Label>
                 <Select disabled>
                  <SelectTrigger id="ai-length" className="mt-1"><SelectValue placeholder="Select Length" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="short">Short (e.g., summary, social media post)</SelectItem>
                    <SelectItem value="medium">Medium (e.g., blog post, short script)</SelectItem>
                    <SelectItem value="long">Long (e.g., detailed article, podcast episode)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
               <div>
                <Label htmlFor="ai-audience" className="font-semibold">Target Audience</Label>
                <Input id="ai-audience" placeholder="e.g., Fitness Beginners, Pro Athletes" className="mt-1" disabled />
              </div>
              <div>
                <Label htmlFor="ai-keywords" className="font-semibold">Keywords (comma-separated)</Label>
                <Input id="ai-keywords" placeholder="e.g., HIIT, nutrition, wellness, marathon training" className="mt-1" disabled />
              </div>
              <div>
                <Label htmlFor="ai-voice" className="font-semibold">Podcast Voice (Placeholder)</Label>
                <Select disabled>
                  <SelectTrigger id="ai-voice" className="mt-1"><SelectValue placeholder="Select Voice Profile" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male_energetic">Energetic Male</SelectItem>
                    <SelectItem value="female_calm">Calm Female</SelectItem>
                    <SelectItem value="neutral_expert">Expert Neutral</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="ai-music" className="font-semibold">Podcast Background Music (Placeholder)</Label>
                <Select disabled>
                  <SelectTrigger id="ai-music" className="mt-1"><SelectValue placeholder="Select Music Style" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="upbeat_electronic">Upbeat Electronic</SelectItem>
                    <SelectItem value="chill_lofi">Chill Lo-fi</SelectItem>
                    <SelectItem value="corporate_motivational">Motivational Corporate</SelectItem>
                    <SelectItem value="none">No Music</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" disabled>
                  Generate Content (Placeholder)
                </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card className="shadow-md min-h-[400px]">
            <CardHeader>
              <CardTitle className="flex items-center"><Edit className="mr-2 h-5 w-5 text-primary" />Preview & Edit Interface</CardTitle>
              <CardDescription>AI-generated content would appear below for review and manual adjustments.</CardDescription>
            </CardHeader>
            <CardContent className="h-full">
              <div className="grid md:grid-cols-2 gap-6 h-full">
                <div className="flex flex-col">
                  <h3 className="text-sm font-semibold mb-1 text-muted-foreground">YOUR INPUT (HIGHLIGHTS)</h3>
                  <div className="p-4 border rounded-md bg-muted/50 min-h-[150px] text-sm text-foreground flex-grow overflow-auto">
                    <p className="italic">Content from your input (e.g., pasted text, document summary, or transcription) would be summarized or displayed here. This area is non-functional.</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm font-semibold mb-1 text-muted-foreground">AI GENERATED DRAFT</h3>
                   <Textarea placeholder="The AI-generated blog post or podcast script will appear here. You would be able to edit this text directly. This area is non-functional." rows={15} className="border-primary/30 focus:border-primary flex-grow" disabled />
                </div>
              </div>
            </CardContent>
             <CardFooter>
                <p className="text-xs text-muted-foreground">Placeholder: Editing and AI generation are not functional without backend integration.</p>
            </CardFooter>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center"><SendHorizonal className="mr-2 h-5 w-5 text-primary" />Publishing & Scheduling</CardTitle>
              <CardDescription>Controls to manage the content's release. (Non-functional)</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row flex-wrap gap-3 items-center">
              <Button variant="default" className="bg-green-600 hover:bg-green-700 text-white" disabled>
                <SendHorizonal className="mr-2 h-4 w-4" /> Publish Now
              </Button>
              <Button variant="outline" disabled>
                <CalendarClock className="mr-2 h-4 w-4" /> Schedule Post
              </Button>
              <Button variant="secondary" disabled>
                <Save className="mr-2 h-4 w-4" /> Save as Draft
              </Button>
            </CardContent>
             <CardFooter>
                <p className="text-xs text-muted-foreground">Placeholder: Publishing and scheduling controls are not functional without backend integration.</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
