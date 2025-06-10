
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, MessageCircle, Share2, Send, ImagePlus, Video, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Mock Data
const mockUser = { name: "Current User", avatar: "https://placehold.co/40x40.png?text=CU" };
const mockPosts = [
  {
    id: '1',
    author: { name: 'Sarah K.', avatar: 'https://placehold.co/40x40.png?text=SK', dataAiHint: 'woman smiling' },
    timestamp: '2 hours ago',
    content: 'Just crushed my PB on squats! Feeling amazing. Thanks SR Fitness! 💪 #legday #gains',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'gym squat rack',
    likes: 25,
    comments: 5,
  },
  {
    id: '2',
    author: { name: 'Alex P.', avatar: 'https://placehold.co/40x40.png?text=AP', dataAiHint: 'man running' },
    timestamp: '5 hours ago',
    content: 'Morning run with a view. The new meal plan is really helping with my energy levels. Consistency is key!',
    image: null,
    dataAiHint: null,
    likes: 18,
    comments: 3,
  },
  {
    id: 'announcement-1',
    author: { name: 'SR Fitness Admin', avatar: '/logo.png', dataAiHint: 'brand logo' },
    timestamp: '1 day ago',
    content: '📢 Exciting News! Our new Spin Class schedule is out now. Book your spot via the app! 🔥🚴‍♀️',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'spin class bikes',
    likes: 102,
    comments: 15,
    isAnnouncement: true,
  }
];


export default function CommunityFeedClient() {
  const [newPostContent, setNewPostContent] = useState('');
  const [posts, setPosts] = useState(mockPosts);

  const handlePostSubmit = () => {
    if (!newPostContent.trim()) return;
    const newPost = {
      id: String(Date.now()),
      author: mockUser,
      timestamp: 'Just now',
      content: newPostContent,
      image: null,
      dataAiHint: null,
      likes: 0,
      comments: 0,
    };
    setPosts(prevPosts => [newPost, ...prevPosts]);
    setNewPostContent('');
    // In a real app, this would be an API call.
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Post Composer */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-xl text-foreground">Share Your Update</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start space-x-3">
            <Avatar>
              <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
              <AvatarFallback>{mockUser.name.substring(0,2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <Textarea
              placeholder={`What's on your mind, ${mockUser.name.split(' ')[0]}?`}
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              rows={3}
              className="flex-grow"
            />
          </div>
          <div className="mt-3 flex justify-between items-center">
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <ImagePlus className="h-5 w-5 mr-1" /> Photo
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Video className="h-5 w-5 mr-1" /> Video
              </Button>
            </div>
            <Button onClick={handlePostSubmit} disabled={!newPostContent.trim()} className="bg-primary hover:bg-primary/90">
              <Send className="h-4 w-4 mr-2" /> Post
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Activity Feed */}
      <div className="space-y-6">
        {posts.map(post => (
          <Card key={post.id} className={`shadow-lg ${post.isAnnouncement ? 'bg-primary/5 border-primary/30' : ''}`}>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={post.author.avatar} alt={post.author.name} data-ai-hint={post.author.dataAiHint || 'person avatar'}/>
                  <AvatarFallback>{post.author.name.substring(0,2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <p className={`font-semibold ${post.isAnnouncement ? 'text-primary' : 'text-foreground'}`}>{post.author.name} {post.isAnnouncement && <span className="text-xs font-normal bg-primary text-primary-foreground px-1.5 py-0.5 rounded-sm ml-1">Official</span>}</p>
                  <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground whitespace-pre-line mb-3">{post.content}</p>
              {post.image && (
                <div className="rounded-lg overflow-hidden aspect-video relative border border-border">
                  <Image src={post.image} alt="Post image" layout="fill" objectFit="cover" data-ai-hint={post.dataAiHint || 'social post image'} />
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between items-center pt-3 border-t border-border">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Heart className="h-5 w-5 mr-1" /> {post.likes} Likes
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <MessageCircle className="h-5 w-5 mr-1" /> {post.comments} Comments
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Share2 className="h-5 w-5 mr-1" /> Share
              </Button>
            </CardFooter>
             {post.isAnnouncement && (
                <Alert className="m-4 mt-0 border-primary/50 bg-primary/10">
                    <Info className="h-4 w-4 !text-primary" />
                    <AlertTitle className="text-primary">Official Announcement</AlertTitle>
                    <AlertDescription className="text-primary/80">
                        This is an important update from the SR Fitness team.
                    </AlertDescription>
                </Alert>
            )}
          </Card>
        ))}
      </div>
      <p className="text-center text-muted-foreground text-sm mt-8">
        This is a conceptual community feed. Full social features require backend integration.
      </p>
    </div>
  );
}
