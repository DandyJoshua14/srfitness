
"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Settings, Edit, UploadCloud, SendHorizonal, CalendarClock, Save, Loader2, Sparkles, Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { generateStudioContent, type GenerateStudioContentInput } from '@/ai/flows/generate-content-flow';

export default function AdminContentStudioPage() {
  // UI State
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();
  
  // Input State
  const [inputText, setInputText] = useState('');
  const [contentType, setContentType] = useState('Blog Post');
  const [tone, setTone] = useState('Informative');
  const [length, setLength] = useState('Medium');
  const [audience, setAudience] = useState('Fitness Beginners');
  const [keywords, setKeywords] = useState('HIIT, nutrition, wellness');

  // Output State
  const [generatedTitle, setGeneratedTitle] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [generatedSocialPost, setGeneratedSocialPost] = useState('');


  const handleGenerateContent = async () => {
    setIsGenerating(true);
    setGeneratedTitle('');
    setGeneratedContent('');
    setGeneratedSocialPost('');
    
    const aiInput: GenerateStudioContentInput = {
      inputText,
      contentType,
      tone,
      length,
      audience,
      keywords,
    };

    try {
      const result = await generateStudioContent(aiInput);
      setGeneratedTitle(result.title);
      setGeneratedContent(result.content);
      setGeneratedSocialPost(result.socialMediaPost || '');
      toast({ title: "Content Generated Successfully!", description: "Review the draft in the preview section." });
    } catch (error) {
      console.error("Content generation failed:", error);
      toast({ 
        title: "Generation Failed", 
        description: error instanceof Error ? error.message : "An unknown error occurred.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };
  
  const handlePublishToBlog = () => {
    if (!generatedTitle || !generatedContent) {
      toast({
        title: "Cannot Publish",
        description: "Please generate a title and content before publishing.",
        variant: "destructive",
      });
      return;
    }

    try {
      const storedPosts = JSON.parse(localStorage.getItem('sr-fitness-blog-posts') || '[]');
      const newPost = {
        id: String(Date.now()),
        author: { name: 'SR Fitness Admin', avatar: '/logo.png', dataAiHint: 'brand logo' },
        timestamp: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        title: generatedTitle,
        content: generatedContent,
        image: 'https://placehold.co/600x400.png',
        dataAiHint: 'fitness blog article',
        likes: 0,
        comments: 0,
        isAnnouncement: true,
        category: "Announcements"
      };
      
      const updatedPosts = [newPost, ...storedPosts];
      localStorage.setItem('sr-fitness-blog-posts', JSON.stringify(updatedPosts));

      toast({
        title: "Post Published!",
        description: "Your new post is now live on the blog.",
      });

    } catch (error) {
        console.error("Failed to publish post to localStorage:", error);
        toast({
            title: "Publishing Failed",
            description: "Could not save the post. Please check console for errors.",
            variant: "destructive"
        });
    }
  };

  return (
    <div className="space-y-8">
      <Card className="shadow-lg border-primary/20">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-primary flex items-center">
            <Sparkles className="mr-3 h-8 w-8" />
            Content Studio
          </CardTitle>
          <CardDescription>
            Use our powerful AI to generate various types of content and publish it directly to the blog.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column: Inputs & Config */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center"><UploadCloud className="mr-2 h-5 w-5 text-primary" />Content Input</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div>
                <Label htmlFor="content-text" className="font-semibold">Base Text or Notes</Label>
                <Textarea id="content-text" placeholder="Paste your article text, script, or just a few keywords and ideas..." rows={10} className="mt-1" value={inputText} onChange={(e) => setInputText(e.target.value)} />
              </div>
              <div>
                <Label htmlFor="content-upload" className="font-semibold">Upload Document (Conceptual)</Label>
                <Input id="content-upload" type="file" className="mt-1" disabled />
                <p className="text-xs text-muted-foreground mt-1">File upload is conceptual.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center"><Settings className="mr-2 h-5 w-5 text-primary" />AI Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div>
                <Label htmlFor="ai-content-type" className="font-semibold">Content Type</Label>
                <Select value={contentType} onValueChange={setContentType}>
                  <SelectTrigger id="ai-content-type" className="mt-1"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Blog Post">Blog Post</SelectItem>
                    <SelectItem value="Social Media Post">Social Media Post</SelectItem>
                    <SelectItem value="Podcast Script">Podcast Script</SelectItem>
                    <SelectItem value="Email Newsletter">Email Newsletter</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="ai-tone" className="font-semibold">Tone</Label>
                <Select value={tone} onValueChange={setTone}>
                  <SelectTrigger id="ai-tone" className="mt-1"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Informative">Informative</SelectItem>
                    <SelectItem value="Casual">Casual</SelectItem>
                    <SelectItem value="Witty">Witty</SelectItem>
                    <SelectItem value="Persuasive">Persuasive</SelectItem>
                    <SelectItem value="Formal">Formal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="ai-length" className="font-semibold">Desired Length</Label>
                 <Select value={length} onValueChange={setLength}>
                  <SelectTrigger id="ai-length" className="mt-1"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Short">Short (e.g., summary, social post)</SelectItem>
                    <SelectItem value="Medium">Medium (e.g., blog post)</SelectItem>
                    <SelectItem value="Long">Long (e.g., detailed article)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
               <div>
                <Label htmlFor="ai-audience" className="font-semibold">Target Audience</Label>
                <Input id="ai-audience" placeholder="e.g., Fitness Beginners" className="mt-1" value={audience} onChange={(e) => setAudience(e.target.value)} />
              </div>
              <div>
                <Label htmlFor="ai-keywords" className="font-semibold">Keywords (comma-separated)</Label>
                <Input id="ai-keywords" placeholder="e.g., HIIT, nutrition" className="mt-1" value={keywords} onChange={(e) => setKeywords(e.target.value)} />
              </div>
            </CardContent>
            <CardFooter>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  onClick={handleGenerateContent}
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                     <Sparkles className="mr-2 h-4 w-4" />
                      Generate Content
                    </>
                  )}
                </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Right Column: Outputs */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center"><Edit className="mr-2 h-5 w-5 text-primary" />Generated Draft</CardTitle>
              <CardDescription>AI-generated content appears below. You can edit it directly before publishing.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div>
                <Label htmlFor="generated-title" className="font-semibold text-muted-foreground">Generated Title</Label>
                <Input id="generated-title" value={generatedTitle} onChange={(e) => setGeneratedTitle(e.target.value)} placeholder="Generated title will appear here..." className="mt-1 text-lg font-bold" />
              </div>
              <div>
                <Label htmlFor="generated-content" className="font-semibold text-muted-foreground">Generated Content</Label>
                <Textarea id="generated-content" value={generatedContent} onChange={(e) => setGeneratedContent(e.target.value)} placeholder="The AI-generated blog post or podcast script will appear here." rows={15} className="mt-1 border-primary/30 focus:border-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center"><Share2 className="mr-2 h-5 w-5 text-primary" />Suggested Social Media Post</CardTitle>
              <CardDescription>A post to promote your new content.</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Textarea value={generatedSocialPost} onChange={(e) => setGeneratedSocialPost(e.target.value)} placeholder="Suggested social media text will appear here..." rows={5} />
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center"><SendHorizonal className="mr-2 h-5 w-5 text-primary" />Publishing Controls</CardTitle>
              <CardDescription>Publish the generated content directly to the public blog.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row flex-wrap gap-3 items-center pt-6">
              <Button variant="default" className="bg-green-600 hover:bg-green-700 text-white" onClick={handlePublishToBlog} disabled={!generatedTitle || !generatedContent}>
                <SendHorizonal className="mr-2 h-4 w-4" /> Publish to Blog
              </Button>
               <Button variant="outline" onClick={() => toast({title: "Conceptual Action", description: "Scheduling requires backend integration."})}>
                <CalendarClock className="mr-2 h-4 w-4" /> Schedule Post
              </Button>
              <Button variant="secondary" onClick={() => toast({title: "Conceptual Action", description: "Saving drafts requires backend integration."})}>
                <Save className="mr-2 h-4 w-4" /> Save as Draft
              </Button>
            </CardContent>
             <CardFooter className="pt-4">
                <p className="text-xs text-muted-foreground">Publishing to blog uses LocalStorage for this demo. Scheduling and drafts are conceptual.</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
