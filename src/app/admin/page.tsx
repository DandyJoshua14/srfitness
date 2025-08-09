
"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Newspaper, SendHorizonal, Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Define a type for a blog post
interface BlogPost {
  id: string;
  author: { name: string; avatar: string; dataAiHint: string; };
  timestamp: string;
  title: string;
  content: string;
  image: string;
  dataAiHint: string;
  likes: number;
  comments: number;
  isAnnouncement: boolean;
  category: string;
}

export default function AdminContentStudioPage() {
  // UI State
  const [isPublishing, setIsPublishing] = useState(false);
  const { toast } = useToast();
  
  // Input State
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handlePublishToBlog = () => {
    if (!title || !content) {
      toast({
        title: "Cannot Publish",
        description: "Please provide a title and content before publishing.",
        variant: "destructive",
      });
      return;
    }
    
    setIsPublishing(true);

    try {
      const storedPostsString = localStorage.getItem('sr-fitness-blog-posts');
      const storedPosts: BlogPost[] = storedPostsString ? JSON.parse(storedPostsString) : [];
      
      const newPost: BlogPost = {
        id: String(Date.now()),
        author: { name: 'SR Fitness Admin', avatar: '/logo.png', dataAiHint: 'brand logo' },
        timestamp: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        title: title,
        content: content,
        image: 'https://placehold.co/600x400.png',
        dataAiHint: 'fitness blog article',
        likes: 0,
        comments: 0,
        isAnnouncement: true, // All admin posts are announcements
        category: "Announcements"
      };
      
      const updatedPosts = [newPost, ...storedPosts];
      localStorage.setItem('sr-fitness-blog-posts', JSON.stringify(updatedPosts));

      toast({
        title: "Post Published!",
        description: "Your new post is now live on the blog.",
      });

      // Clear fields after publishing
      setTitle('');
      setContent('');

    } catch (error) {
        console.error("Failed to publish post to localStorage:", error);
        toast({
            title: "Publishing Failed",
            description: "Could not save the post. Please check console for errors.",
            variant: "destructive"
        });
    } finally {
        setIsPublishing(false);
    }
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <Card className="shadow-lg border-primary/20">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-primary flex items-center">
            <Newspaper className="mr-3 h-8 w-8" />
            Blog Post Editor
          </CardTitle>
          <CardDescription>
            Create and publish a new post directly to the SR Fitness Blog.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center"><Sparkles className="mr-2 h-5 w-5 text-primary" />New Post</CardTitle>
          <CardDescription>Enter the details for your new blog post below.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div>
            <Label htmlFor="post-title" className="font-semibold text-lg">Post Title</Label>
            <Input 
                id="post-title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Enter a catchy title..." 
                className="mt-1 text-lg font-bold" 
            />
          </div>
          <div>
            <Label htmlFor="post-content" className="font-semibold text-lg">Post Content</Label>
            <Textarea 
                id="post-content" 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
                placeholder="Write your blog post content here. You can use Markdown for formatting." 
                rows={18} 
                className="mt-1 border-primary/30 focus:border-primary text-base" 
            />
          </div>
        </CardContent>
        <CardFooter className="border-t pt-6">
            <Button 
              className="w-full sm:w-auto ml-auto bg-green-600 hover:bg-green-700 text-white font-semibold"
              onClick={handlePublishToBlog}
              disabled={isPublishing || !title || !content}
            >
              {isPublishing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Publishing...
                </>
              ) : (
                <>
                 <SendHorizonal className="mr-2 h-4 w-4" />
                  Publish Post
                </>
              )}
            </Button>
        </CardFooter>
      </Card>
      <p className="text-center text-muted-foreground text-xs mt-4">
        This editor uses your browser's LocalStorage to simulate a real-time blog.
      </p>
    </div>
  );
}
