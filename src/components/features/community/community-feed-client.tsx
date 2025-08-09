
"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, MessageCircle, Share2, Info, ArrowRight, Rss, Trash2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
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
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'spin class bikes',
    likes: 102,
    comments: 15,
    isAnnouncement: true,
    category: "Announcements"
  },
  {
    id: '1',
    author: { name: 'Sarah K.', avatar: 'https://placehold.co/40x40.png?text=SK', dataAiHint: 'woman smiling' },
    timestamp: '2 hours ago',
    title: 'Crushed My Squat PB Today!',
    content: 'Just hit a new personal best on squats! Feeling absolutely amazing and stronger than ever. Huge thanks to the SR Fitness trainers for their guidance and the supportive community here. #legday #gains #SRFitnessJourney',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'gym squat rack',
    likes: 25,
    comments: 5,
    isAnnouncement: false,
    category: "Member Stories"
  },
  {
    id: '2',
    author: { name: 'Alex P.', avatar: 'https://placehold.co/40x40.png?text=AP', dataAiHint: 'man running' },
    timestamp: '5 hours ago',
    title: 'Morning Run Fuelled by the New Meal Plan',
    content: 'Early morning run with a stunning view. The new AI meal plan is definitely making a difference in my energy levels. Consistency is key to progress!',
    image: "https://placehold.co/600x400.png",
    dataAiHint: "sunrise run park",
    likes: 18,
    comments: 3,
    isAnnouncement: false,
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
        setPosts(JSON.parse(storedPosts));
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
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="space-y-6">
        {posts.length === 0 && (
            <Card className="text-center py-16 shadow-lg">
                <CardHeader>
                    <Rss className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <CardTitle className="text-2xl text-muted-foreground">The Blog is Quiet...</CardTitle>
                    <CardDescription>No posts have been published yet. Check back soon!</CardDescription>
                </CardHeader>
            </Card>
        )}
        {posts.map(post => (
          <Card 
            key={post.id} 
            className={`shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl ${post.isAnnouncement ? 'bg-primary/5 border-primary/30' : 'bg-card border-border'}`}
          >
            {post.image && (
              <div className="aspect-video relative overflow-hidden rounded-t-lg border-b border-border">
                <Image src={post.image} alt={post.title || "Blog post image"} layout="fill" objectFit="cover" data-ai-hint={post.dataAiHint || 'blog image'} />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            )}
            <CardHeader className={post.image ? "pt-4" : ""}>
              <div className="flex items-center space-x-3 mb-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} data-ai-hint={post.author.dataAiHint || 'person avatar'}/>
                  <AvatarFallback>{post.author.name.substring(0,2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <p className={`font-semibold text-sm ${post.isAnnouncement ? 'text-primary' : 'text-foreground'}`}>{post.author.name}</p>
                  <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                </div>
                 {post.isAnnouncement && <Badge variant="default" className="ml-auto text-xs">Official</Badge>}
                 {post.category && !post.isAnnouncement && <Badge variant="secondary" className="ml-auto text-xs bg-muted text-muted-foreground">{post.category}</Badge>}
              </div>
              <CardTitle className="font-headline text-2xl lg:text-3xl text-foreground hover:text-primary transition-colors">
                <Link href="#" className="focus:outline-none focus:ring-1 focus:ring-primary/50 rounded-sm">
                  {post.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground line-clamp-3 leading-relaxed mb-4">{post.content}</CardDescription>
              <Button asChild variant="link" className="text-primary p-0 font-semibold group">
                <Link href="#">
                  Read More <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
            <Separator className="my-0"/>
            <CardFooter className="flex justify-start items-center pt-4 gap-1">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
                <Heart className="h-4 w-4 mr-1.5" /> {post.likes}
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
                <MessageCircle className="h-4 w-4 mr-1.5" /> {post.comments}
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
                <Share2 className="h-4 w-4 mr-1.5" /> Share
              </Button>
              {post.isAnnouncement && (
                 <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 ml-auto"
                    onClick={() => handleDeletePost(post.id)}
                 >
                    <Trash2 className="h-4 w-4 mr-1.5" /> Delete
                </Button>
              )}
            </CardFooter>
             {post.isAnnouncement && (
                <Alert className="m-4 mt-0 border-primary/50 bg-primary/10 rounded-b-lg text-primary">
                    <Info className="h-4 w-4 !text-primary" />
                    <AlertTitle className="text-sm font-semibold">Official Announcement</AlertTitle>
                </Alert>
            )}
          </Card>
        ))}
      </div>
      <p className="text-center text-muted-foreground text-xs mt-8">
        This is a conceptual blog feed. Full article display and interaction require backend integration.
      </p>
    </div>
  );
}
