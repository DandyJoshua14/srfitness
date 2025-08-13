
"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, MessageCircle, Share2, Rss, Trash2, BadgeCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

const initialPosts = [
  {
    id: 'announcement-1',
    author: { name: 'SR Fitness Admin', avatar: '/logo.png', dataAiHint: 'brand logo' },
    timestamp: '1 day ago',
    title: '📢 Exciting News: New Spin Class Schedule!',
    content: 'Our new Spin Class schedule is out now with more morning and evening slots. Get ready to sweat! Book your spot via the app or at the front desk. Let\'s ride! 🔥🚴‍♀️',
    image: 'https://placehold.co/1280x720.png',
    dataAiHint: 'spin class bikes',
    likes: 102,
    comments: 15,
    isAnnouncement: true,
    category: "Announcements"
  },
  {
    id: '1',
    author: { name: 'SR Fitness Admin', avatar: '/logo.png', dataAiHint: 'brand logo' },
    timestamp: '2 hours ago',
    title: 'Crushed My Squat PB Today!',
    content: 'Just hit a new personal best on squats! Feeling absolutely amazing and stronger than ever. Huge thanks to the SR Fitness trainers for their guidance and the supportive community here. #legday #gains #SRFitnessJourney',
    image: 'https://placehold.co/1280x720.png',
    dataAiHint: 'gym squat rack',
    likes: 25,
    comments: 5,
    isAnnouncement: true,
    category: "Member Stories"
  },
  {
    id: '2',
    author: { name: 'SR Fitness Admin', avatar: '/logo.png', dataAiHint: 'brand logo' },
    timestamp: '5 hours ago',
    title: 'Morning Run Fuelled by the New Meal Plan',
    content: 'Early morning run with a stunning view. The new AI meal plan is definitely making a difference in my energy levels. Consistency is key to progress!',
    image: "https://placehold.co/1280x720.png",
    dataAiHint: "sunrise run park",
    likes: 18,
    comments: 3,
    isAnnouncement: true,
    category: "Fitness Tips"
  },
];


export default function CommunityFeedClient() {
  const [posts, setPosts] = useState(initialPosts);
  const { toast } = useToast();

  const loadPosts = useCallback(() => {
    try {
      const storedPosts = localStorage.getItem('sr-fitness-blog-posts');
      if (storedPosts) {
        // Ensure all posts are marked as announcements from admin
        const parsed = JSON.parse(storedPosts).map((p: any) => ({
             ...p, 
             isAnnouncement: true,
             author: { name: 'SR Fitness Admin', avatar: '/logo.png', dataAiHint: 'brand logo' }
        }));
        setPosts(parsed);
      } else {
        localStorage.setItem('sr-fitness-blog-posts', JSON.stringify(initialPosts));
      }
    } catch (error) {
      console.error("Could not load posts from localStorage", error);
    }
  }, []);

  useEffect(() => {
    loadPosts();
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'sr-fitness-blog-posts') {
        loadPosts();
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [loadPosts]);

  const handleDeletePost = (postId: string) => {
    try {
      const updatedPosts = posts.filter(p => p.id !== postId);
      setPosts(updatedPosts);
      localStorage.setItem('sr-fitness-blog-posts', JSON.stringify(updatedPosts));
      toast({
        title: "Post Deleted",
        description: "The blog post has been successfully removed.",
        variant: "destructive"
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
    <main className="max-w-2xl mx-auto w-full space-y-6">
        {posts.length === 0 && (
            <Card className="text-center py-16 shadow-lg">
                <CardHeader>
                    <Rss className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <CardTitle className="text-2xl text-muted-foreground">The Feed is Empty</CardTitle>
                    <CardDescription>No posts have been published yet. Check back soon!</CardDescription>
                </CardHeader>
            </Card>
        )}
        {posts.map(post => {
          const authorName = post.author?.name || 'SR Fitness Admin';
          const authorAvatar = post.author?.avatar || '/logo.png';

          return (
            <Card 
              key={post.id} 
              className="shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl bg-card border-border"
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                    <Avatar className="h-11 w-11">
                        <AvatarImage src={authorAvatar} alt={authorName} />
                        <AvatarFallback>SR</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold text-sm text-foreground flex items-center">
                            {authorName}
                            <BadgeCheck className="h-4 w-4 ml-1.5 text-primary" />
                        </p>
                        <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                    </div>
                    {post.category && <Badge variant="secondary" className="ml-auto text-xs bg-muted text-muted-foreground">{post.category}</Badge>}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="font-headline text-xl lg:text-2xl text-foreground mb-3">{post.title}</CardTitle>
                <p className="text-sm text-muted-foreground whitespace-pre-line mb-4">{post.content}</p>
                  {post.image && (
                    <div className="aspect-video relative overflow-hidden rounded-lg border border-border mt-4">
                    <Image src={post.image} alt={post.title || "Blog post image"} layout="fill" objectFit="cover" data-ai-hint={post.dataAiHint || 'blog image'} />
                    </div>
                )}
              </CardContent>
              <Separator className="my-0"/>
              <CardFooter className="flex justify-start items-center p-2 gap-1">
                <Button variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-primary/10 flex-1 justify-center">
                  <Heart className="h-4 w-4 mr-2" /> {post.likes}
                </Button>
                <Separator orientation="vertical" className="h-6" />
                <Button variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-primary/10 flex-1 justify-center">
                  <MessageCircle className="h-4 w-4 mr-2" /> {post.comments}
                </Button>
                  <Separator orientation="vertical" className="h-6" />
                <Button variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-primary/10 flex-1 justify-center">
                  <Share2 className="h-4 w-4 mr-2" /> Share
                </Button>
              </CardFooter>
            </Card>
          )})}
        
        <p className="text-center text-muted-foreground text-xs mt-8">
            This is a read-only blog. All posts are from the SR Fitness team.
        </p>
    </main>
  );
}
