
"use client";

import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Contestant {
    id: string;
    name: string;
    category: string;
    image: string;
    objectPosition?: string;
    objectFit?: 'cover' | 'contain';
}

interface ContestantCardProps {
    contestant: Contestant;
    isVotable: boolean;
    isSelected?: boolean;
    onSelect?: () => void;
}

export default function ContestantCard({ contestant, isVotable, isSelected, onSelect }: ContestantCardProps) {
    const cardProps = {
        onClick: isVotable ? onSelect : undefined,
        className: cn(
            "overflow-hidden bg-muted/30 border-2 transition-all duration-200 ease-in-out relative group",
            isVotable && "cursor-pointer hover:border-primary/50 hover:scale-105",
            isSelected ? "border-primary scale-105 shadow-lg shadow-primary/20" : "border-transparent",
            !isVotable && "border-border"
        ),
    };

    return (
        <Card {...cardProps}>
            <CardContent className="p-0 aspect-square relative">
                <Image
                    src={contestant.image}
                    alt={contestant.name}
                    layout="fill"
                    objectFit={contestant.objectFit || 'cover'}
                    className={cn("transition-transform duration-300", isVotable && "group-hover:scale-110")}
                    style={{ objectPosition: contestant.objectPosition || 'center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                {isSelected && (
                    <div className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-full h-6 w-6 flex items-center justify-center">
                        <CheckCircle className="h-4 w-4" />
                    </div>
                )}
            </CardContent>
            <CardFooter className="p-2 bg-background/80 absolute bottom-0 w-full">
                <div className="text-center w-full">
                    <p className="font-bold text-sm text-foreground truncate">{contestant.name}</p>
                    <p className="text-xs text-primary truncate">{contestant.category}</p>
                </div>
            </CardFooter>
        </Card>
    );
}
