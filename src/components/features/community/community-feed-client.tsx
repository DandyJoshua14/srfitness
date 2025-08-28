
"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, MessageCircle, Share2, Rss, BadgeCheck, Send, Link as LinkIcon, Facebook } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { getPosts } from '@/services/firestore';
import { Skeleton } from '@/components/ui/skeleton';

// Helper for X/Twitter Icon
const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6904H306.615L611.412 515.685L658.88 583.579L1055.08 1150.31H892.476L569.165 687.854V687.828Z" fill="currentColor"/></svg>
);


interface Comment {
    id: string;
    author: { name: string; avatar: string; };
    text: string;
}

interface Post {
    id: string;
    author: { name: string; avatar: string; dataAiHint: string; };
    timestamp: string;
    title: string;
    content: string;
    image: string;
    dataAiHint: string;
    likes: number;
    comments: Comment[]; // Changed from number to array of Comment
    isAnnouncement: boolean;
    category: string;
    isLiked?: boolean;
    showComments?: boolean; // To toggle comment section
}

export default function CommunityFeedClient() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newCommentText, setNewCommentText] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const loadPosts = useCallback(async () => {
    setIsLoading(true);
    try {
      const fetchedPosts = await getPosts();
      const processedPosts = fetchedPosts.map((p: any) => ({
         ...p,
         comments: p.comments || [],
         isLiked: p.isLiked || false,
         showComments: p.showComments || false,
      }));
      setPosts(processedPosts);
    } catch (error) {
      console.error("Could not load posts from Firestore", error);
      toast({
        title: "Error Loading Feed",
        description: "Could not retrieve the latest posts.",
        variant: "destructive",
      });
    } finally {
        setIsLoading(false);
    }
  }, [toast]);
  
  useEffect(() => {
    loadPosts();
  }, [loadPosts]);


  const handleLike = (postId: string) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };
  
  const handleToggleComments = (postId: string) => {
    setPosts(prevPosts =>
        prevPosts.map(post =>
            post.id === postId ? { ...post, showComments: !post.showComments } : post
        )
    );
  };

  const handleAddComment = (postId: string) => {
    const text = newCommentText[postId]?.trim();
    if (!text) return;

    const newComment: Comment = {
      id: String(Date.now()),
      author: { name: 'You', avatar: 'https://placehold.co/40x40.png?text=U' },
      text,
    };

    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? { ...post, comments: [...post.comments, newComment] }
          : post
      )
    );
    setNewCommentText(prev => ({ ...prev, [postId]: '' }));
  };
  
  const handleShare = (type: 'copy' | 'twitter' | 'facebook', postTitle: string) => {
    const url = window.location.href;
    const text = `Check out this post from the SR Fitness Blog: "${postTitle}"`;

    if (type === 'copy') {
      navigator.clipboard.writeText(url).then(() => {
        toast({ title: 'Link Copied!', description: 'The link to the page has been copied to your clipboard.' });
      });
    } else if (type === 'twitter') {
      const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
      window.open(twitterUrl, '_blank');
    } else if (type === 'facebook') {
       const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
      window.open(facebookUrl, '_blank');
    }
  };

  if (isLoading) {
    return (
      <main className="max-w-2xl mx-auto w-full space-y-6">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="shadow-lg bg-card border-border">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Skeleton className="h-11 w-11 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[150px]" />
                  <Skeleton className="h-3 w-[100px]" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Skeleton className="h-5 w-3/4 mb-3" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-5/6 mb-4" />
              <Skeleton className="aspect-video w-full rounded-lg" />
            </CardContent>
            <CardFooter className="p-2">
              <Skeleton className="h-8 w-full" />
            </CardFooter>
          </Card>
        ))}
      </main>
    );
  }

  return (
    <main className="max-w-2xl mx-auto w-full space-y-6">
        {posts.length === 0 && !isLoading && (
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
                    <Image src={post.image} alt={post.title || "Blog post image"} fill objectFit="cover" data-ai-hint={post.dataAiHint || 'blog image'} />
                    </div>
                )}
              </CardContent>
              <Separator className="my-0"/>
              <CardFooter className="flex justify-start items-center p-2 gap-1">
                <Button 
                  variant="ghost" 
                  className={cn(
                    "text-muted-foreground hover:text-primary hover:bg-primary/10 flex-1 justify-center",
                    post.isLiked && "text-primary"
                  )}
                  onClick={() => handleLike(post.id)}
                >
                  <Heart className={cn("h-4 w-4 mr-2", post.isLiked && "fill-current")} /> {post.likes}
                </Button>
                <Separator orientation="vertical" className="h-6" />
                <Button 
                  variant="ghost" 
                  className="text-muted-foreground hover:text-primary hover:bg-primary/10 flex-1 justify-center"
                  onClick={() => handleToggleComments(post.id)}
                >
                  <MessageCircle className="h-4 w-4 mr-2" /> {post.comments.length}
                </Button>
                  <Separator orientation="vertical" className="h-6" />
                
                 <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                       <Button 
                        variant="ghost" 
                        className="text-muted-foreground hover:text-primary hover:bg-primary/10 flex-1 justify-center"
                       >
                        <Share2 className="h-4 w-4 mr-2" /> Share
                       </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 bg-popover border-border">
                        <DropdownMenuItem onClick={() => handleShare('copy', post.title)} className="cursor-pointer">
                            <LinkIcon className="mr-2 h-4 w-4" />
                            <span>Copy Link</span>
                        </DropdownMenuItem>
                         <DropdownMenuItem onClick={() => handleShare('twitter', post.title)} className="cursor-pointer">
                            <TwitterIcon className="mr-2 h-4 w-4" />
                            <span>Share on X</span>
                        </DropdownMenuItem>
                         <DropdownMenuItem onClick={() => handleShare('facebook', post.title)} className="cursor-pointer">
                            <Facebook className="mr-2 h-4 w-4" />
                            <span>Share on Facebook</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

              </CardFooter>

              <AnimatePresence>
                {post.showComments && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <Separator />
                        <div className="p-4 space-y-4">
                            {post.comments.map(comment => (
                                <div key={comment.id} className="flex items-start space-x-3">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
                                        <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 bg-muted rounded-lg p-2.5">
                                        <p className="font-semibold text-xs text-foreground">{comment.author.name}</p>
                                        <p className="text-sm text-muted-foreground">{comment.text}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="flex items-center space-x-2 pt-2">
                                <Input 
                                    placeholder="Add a comment..."
                                    className="bg-background focus-visible:ring-primary"
                                    value={newCommentText[post.id] || ''}
                                    onChange={(e) => setNewCommentText(prev => ({ ...prev, [post.id]: e.target.value }))}
                                    onKeyPress={e => e.key === 'Enter' && handleAddComment(post.id)}
                                />
                                <Button size="icon" onClick={() => handleAddComment(post.id)} disabled={!newCommentText[post.id]?.trim()}>
                                    <Send className="h-4 w-4" />
                                </Button>
                            </div>
                            <p className="text-center text-muted-foreground text-xs mt-2">Comments are temporary and for demonstration only.</p>
                        </div>
                    </motion.div>
                )}
              </AnimatePresence>
            </Card>
          )})}
    </main>
  );
}
