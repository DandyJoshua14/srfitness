/* eslint-disable */
// @ts-nocheck

"use client";

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { PlusCircle, Users, User } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

// Mock Data
const mockConversations = [
  {
    id: 'dm-1',
    type: 'dm',
    name: 'Alex P.',
    avatar: 'https://placehold.co/40x40.png?text=AP',
    lastMessage: 'Sure, see you at the gym then!',
    timestamp: '10:30 AM',
    unreadCount: 2,
  },
  {
    id: 'group-1',
    type: 'group',
    name: 'Weekend Warriors Bootcamp',
    avatar: 'https://placehold.co/40x40.png?text=WB',
    lastMessage: 'Mike: Great session today everyone!',
    timestamp: 'Yesterday',
    unreadCount: 0,
  },
  {
    id: 'dm-2',
    type: 'dm',
    name: 'SR Fitness Support',
    avatar: '/logo.png',
    lastMessage: 'Your membership query has been resolved.',
    timestamp: '2 days ago',
    unreadCount: 0,
  },
];

export default function MessageListClient() {
  return (
    <Card className="max-w-2xl mx-auto shadow-xl">
      <CardHeader className="flex flex-row justify-between items-center">
        <div>
          <CardTitle className="font-headline text-2xl text-foreground">Conversations</CardTitle>
          <CardDescription>Your recent chats and groups.</CardDescription>
        </div>
        <Button variant="outline">
            <PlusCircle className="h-4 w-4 mr-2" /> New Message
        </Button>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-3">
          {mockConversations.length === 0 && (
            <p className="text-muted-foreground text-center py-8">No conversations yet. Start a new message!</p>
          )}
          <ul className="space-y-1">
            {mockConversations.map(convo => (
              <li key={convo.id}>
                <Link href={`/community/messages/${convo.id}?type=${convo.type}&name=${encodeURIComponent(convo.name)}`} legacyBehavior>
                  <a className="block p-3 hover:bg-muted/50 rounded-lg transition-colors">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={convo.avatar} alt={convo.name} />
                        <AvatarFallback>{convo.name.substring(0,2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div className="flex-grow overflow-hidden">
                        <div className="flex justify-between items-center">
                           <h3 className="text-sm font-semibold text-foreground truncate flex items-center">
                             {convo.type === 'dm' ? <User className="h-4 w-4 mr-1.5 text-primary/70" /> : <Users className="h-4 w-4 mr-1.5 text-primary/70" />}
                             {convo.name}
                           </h3>
                           <span className="text-xs text-muted-foreground shrink-0">{convo.timestamp}</span>
                        </div>
                        <p className="text-xs text-muted-foreground truncate">{convo.lastMessage}</p>
                      </div>
                      {convo.unreadCount > 0 && (
                        <span className="ml-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                          {convo.unreadCount}
                        </span>
                      )}
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </ScrollArea>
        <p className="text-center text-muted-foreground text-xs mt-4">
          This is a conceptual message list. Full chat functionality requires backend development.
        </p>
      </CardContent>
    </Card>
  );
}
