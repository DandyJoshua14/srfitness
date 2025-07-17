
import type { Metadata } from 'next';
import ChatViewClient from '@/components/features/community/chat-view-client';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface ChatPageProps {
  params: { chatId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

// This approach for metadata is basic. In a real app, you'd fetch chat details.
export async function generateMetadata({ params, searchParams }: ChatPageProps): Promise<Metadata> {
  const chatName = searchParams.name || `Chat ${params.chatId}`;
  return {
    title: `${chatName} - SR Fitness Messages`,
    description: `Conversation with ${chatName}.`,
  };
}

export default function ChatPage({ params, searchParams }: ChatPageProps) {
  const { chatId } = params;
  const chatType = (searchParams.type as string) || 'dm'; // default to dm
  const chatName = (searchParams.name as string) || (chatType === 'dm' ? 'Direct Message' : 'Group Chat');

  // Mock data, in a real app, fetch based on chatId
  const mockChatDetails = {
    id: chatId,
    name: chatName, // Use from searchParams or a default
    type: chatType,
    participants: chatType === 'dm' ? ['Current User', 'Alex P.'] : ['Current User', 'Alex P.', 'Sarah K.', 'Mike D.'],
    messages: [
      { id: 'm1', sender: 'Alex P.', text: 'Hey, are you going to the bootcamp tomorrow?', timestamp: '10:25 AM', avatar: 'https://placehold.co/40x40.png?text=AP' },
      { id: 'm2', sender: 'Current User', text: 'Yeah, planning to! You?', timestamp: '10:26 AM', avatar: 'https://placehold.co/40x40.png?text=CU', isCurrentUser: true },
      { id: 'm3', sender: 'Alex P.', text: 'Definitely. Should be a good one.', timestamp: '10:27 AM', avatar: 'https://placehold.co/40x40.png?text=AP' },
    ],
  };
  
  if (chatType === 'group' && chatId === 'group-1') {
     mockChatDetails.messages = [
        { id: 'gm1', sender: 'Mike D.', text: 'Great session today everyone!', timestamp: 'Yesterday 2:00PM', avatar: 'https://placehold.co/40x40.png?text=MD'},
        { id: 'gm2', sender: 'Sarah K.', text: 'Totally agree! I am exhausted in a good way :)', timestamp: 'Yesterday 2:05PM', avatar: 'https://placehold.co/40x40.png?text=SK'},
        { id: 'gm3', sender: 'Current User', text: 'Loved it! See you all next week.', timestamp: 'Yesterday 2:06PM', avatar: 'https://placehold.co/40x40.png?text=CU', isCurrentUser: true},
     ];
  }


  return (
    <div className="h-[calc(100vh-var(--header-height,80px))] flex flex-col"> {/* Adjust for header height */}
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col py-6 md:py-8">
        <div className="mb-4">
          <Button variant="ghost" asChild size="sm">
            <Link href="/community/messages">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Messages
            </Link>
          </Button>
        </div>
        <ChatViewClient chatDetails={mockChatDetails} />
      </div>
    </div>
  );
}
