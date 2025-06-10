
"use client";

import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Send, Paperclip, Smile, User, Users } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  sender: string;
  text: string;
  timestamp: string;
  avatar: string;
  isCurrentUser?: boolean;
}

interface ChatDetails {
  id: string;
  name: string;
  type: string; // 'dm' or 'group'
  participants: string[];
  messages: Message[];
}

interface ChatViewClientProps {
  chatDetails: ChatDetails;
}

export default function ChatViewClient({ chatDetails }: ChatViewClientProps) {
  const [messages, setMessages] = useState<Message[]>(chatDetails.messages);
  const [newMessage, setNewMessage] = useState('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom when new messages arrive
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (viewport) {
        viewport.scrollTop = viewport.scrollHeight;
      }
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    const msg: Message = {
      id: String(Date.now()),
      sender: 'Current User',
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      avatar: 'https://placehold.co/40x40.png?text=CU',
      isCurrentUser: true,
    };
    setMessages(prev => [...prev, msg]);
    setNewMessage('');
    // In a real app, this would send the message via API/websockets
  };

  return (
    <Card className="shadow-xl flex flex-col flex-grow overflow-hidden">
      <CardHeader className="border-b border-border">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10">
             <AvatarImage src={chatDetails.type === 'group' || chatDetails.name === 'SR Fitness Support' ? chatDetails.messages[0]?.avatar : (chatDetails.messages.find(m => !m.isCurrentUser)?.avatar || 'https://placehold.co/40x40.png?text=??') } alt={chatDetails.name} />
            <AvatarFallback>{chatDetails.name.substring(0,2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="font-headline text-xl text-foreground flex items-center">
                {chatDetails.type === 'dm' ? <User className="h-5 w-5 mr-2 text-primary/80"/> : <Users className="h-5 w-5 mr-2 text-primary/80"/>}
                {chatDetails.name}
            </CardTitle>
            <p className="text-xs text-muted-foreground">
              {chatDetails.type === 'dm' ? 'Direct Message' : `${chatDetails.participants.length} members`}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-0 overflow-hidden">
        <ScrollArea className="h-full p-4 md:p-6" ref={scrollAreaRef}> {/* Approx 500px for content */}
          <div className="space-y-4">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={cn(
                  "flex items-end space-x-2 max-w-[80%] sm:max-w-[70%]",
                  msg.isCurrentUser ? "ml-auto flex-row-reverse space-x-reverse" : ""
                )}
              >
                <Avatar className="h-8 w-8 self-start">
                  <AvatarImage src={msg.avatar} alt={msg.sender} />
                  <AvatarFallback>{msg.sender.substring(0,2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div
                  className={cn(
                    "p-3 rounded-lg shadow",
                    msg.isCurrentUser
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-muted text-foreground rounded-bl-none"
                  )}
                >
                  {!msg.isCurrentUser && <p className="text-xs font-semibold mb-0.5">{msg.sender}</p>}
                  <p className="text-sm whitespace-pre-line">{msg.text}</p>
                  <p className={cn(
                      "text-xs mt-1",
                       msg.isCurrentUser ? "text-primary-foreground/70 text-right" : "text-muted-foreground/70 text-left"
                    )}>{msg.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
      <div className="border-t border-border p-3 md:p-4">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
            <Paperclip className="h-5 w-5" />
            <span className="sr-only">Attach file</span>
          </Button>
          <Input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && (handleSendMessage(), e.preventDefault())}
            className="flex-grow bg-background focus-visible:ring-primary"
          />
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
            <Smile className="h-5 w-5" />
            <span className="sr-only">Add emoji</span>
          </Button>
          <Button onClick={handleSendMessage} className="bg-primary hover:bg-primary/90">
            <Send className="h-5 w-5" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
        <p className="text-center text-muted-foreground text-xs mt-3">
          Chat interface placeholder. Real-time messaging requires backend and WebSocket integration.
        </p>
      </div>
    </Card>
  );
}
