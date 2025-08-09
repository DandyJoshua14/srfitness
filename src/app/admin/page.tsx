
"use client";

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SendHorizonal, Newspaper, Image as ImageIcon, Trash2, List } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

interface Post {
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

export default function AdminBlogManagerPage() {
  const { toast } = useToast();
  
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);

  const loadPosts = useCallback(() => {
    try {
      const storedPosts = localStorage.getItem('sr-fitness-blog-posts');
      if (storedPosts) {
        setPosts(JSON.parse(storedPosts));
      }
    } catch (error) {
      console.error("Could not load posts from localStorage", error);
      toast({
        title: "Error Loading Posts",
        description: "Could not retrieve existing posts from storage.",
        variant: "destructive",
      });
    }
  }, [toast]);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { // 2MB limit
        toast({
          title: "Image Too Large",
          description: "Please select an image smaller than 2MB.",
          variant: "destructive",
        });
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };


  const handlePublish = () => {
    if (!title.trim() || !content.trim()) {
      toast({
        title: "Cannot Publish",
        description: "Please provide a title and content for your post.",
        variant: "destructive",
      });
      return;
    }

    try {
      const storedPosts = JSON.parse(localStorage.getItem('sr-fitness-blog-posts') || '[]');
      const newPost: Post = {
        id: String(Date.now()),
        author: { name: 'SR Fitness Admin', avatar: '/logo.png', dataAiHint: 'brand logo' },
        timestamp: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        title: title,
        content: content,
        image: imageUrl || 'https://placehold.co/1280x720.png',
        dataAiHint: 'fitness blog article',
        likes: 0,
        comments: 0,
        isAnnouncement: true, 
        category: "Announcements"
      };
      
      const updatedPosts = [newPost, ...storedPosts];
      localStorage.setItem('sr-fitness-blog-posts', JSON.stringify(updatedPosts));

      toast({
        title: "Post Published Successfully!",
        description: "Your new post is now live on the blog.",
      });

      // Clear the form and reload posts
      setTitle('');
      setImageUrl('');
      setContent('');
      loadPosts();

    } catch (error) {
        console.error("Failed to publish post to localStorage:", error);
        toast({
            title: "Publishing Failed",
            description: "Could not save the post. Please check the browser console for errors.",
            variant: "destructive"
        });
    }
  };
  
  const handleDeletePost = (postId: string) => {
    try {
      const updatedPosts = posts.filter(p => p.id !== postId);
      localStorage.setItem('sr-fitness-blog-posts', JSON.stringify(updatedPosts));
      setPosts(updatedPosts);
      toast({
        title: "Post Deleted",
        description: "The blog post has been successfully removed.",
      });
    } catch (error) {
      console.error("Failed to delete post:", error);
      toast({
        title: "Deletion Failed",
        description: "Could not delete the post. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="space-y-8">
      <Card className="shadow-lg border-primary/20">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-primary flex items-center">
            <Newspaper className="mr-3 h-8 w-8" />
            Blog Manager
          </CardTitle>
          <CardDescription>
            Create and publish new articles directly to the SR Fitness Blog.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid lg:grid-cols-5 gap-8 items-start">
        {/* Editor Column */}
        <div className="lg:col-span-3">
            <Card className="shadow-md sticky top-24">
                <CardHeader>
                <CardTitle className="flex items-center">Create New Post</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                <div>
                    <Label htmlFor="post-title" className="font-semibold text-lg">Post Title</Label>
                    <Input 
                    id="post-title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    placeholder="Enter a catchy title..." 
                    className="mt-2 text-lg font-bold h-12" 
                    />
                </div>
                <div>
                    <Label htmlFor="post-image" className="font-semibold text-lg flex items-center mb-2">
                    <ImageIcon className="mr-2 h-5 w-5" /> Cover Image
                    </Label>
                    <Input 
                    id="post-image" 
                    type="file"
                    accept="image/png, image/jpeg, image/gif"
                    onChange={handleImageUpload}
                    className="mt-2 text-base h-11 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                    />
                    {imageUrl && (
                    <div className="mt-4 relative aspect-video rounded-lg overflow-hidden border">
                        <Image src={imageUrl} alt="Selected preview" layout="fill" objectFit="cover" />
                    </div>
                    )}
                </div>
                <div>
                    <Label htmlFor="post-content" className="font-semibold text-lg">Content</Label>
                    <Textarea 
                    id="post-content" 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)} 
                    placeholder="Write your blog post content here. The content supports Markdown..." 
                    rows={15} 
                    className="mt-2 border-primary/30 focus:border-primary text-base" 
                    />
                </div>
                </CardContent>
                <CardFooter>
                    <Button 
                        size="lg" 
                        className="w-full sm:w-auto ml-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg" 
                        onClick={handlePublish}
                        disabled={!title || !content}
                    >
                    <SendHorizonal className="mr-2 h-5 w-5" />
                    Publish Post
                    </Button>
                </CardFooter>
            </Card>
        </div>

        {/* Manage Posts Column */}
        <div className="lg:col-span-2">
            <Card className="shadow-md">
                <CardHeader>
                    <CardTitle className="flex items-center">
                        <List className="mr-2 h-6 w-6" /> Manage Posts
                    </CardTitle>
                    <CardDescription>View and delete existing posts.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="max-h-[80vh] overflow-y-auto pr-2 space-y-4">
                        {posts.length === 0 ? (
                            <p className="text-muted-foreground text-center py-8">No posts found.</p>
                        ) : (
                            posts.map((post, index) => (
                                <div key={post.id}>
                                    <div className="flex justify-between items-center">
                                        <div className="flex-grow overflow-hidden">
                                            <p className="font-semibold truncate text-foreground">{post.title}</p>
                                            <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-destructive hover:bg-destructive/10 shrink-0 ml-2"
                                            onClick={() => handleDeletePost(post.id)}
                                            aria-label={`Delete post titled ${post.title}`}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    {index < posts.length - 1 && <Separator className="mt-4" />}
                                </div>
                            ))
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
