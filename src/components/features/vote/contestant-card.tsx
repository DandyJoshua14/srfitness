
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
}

interface ContestantCardProps {
    contestant: Contestant;
    isSelected: boolean;
    onSelect: () => void;
}

export default function ContestantCard({ contestant, isSelected, onSelect }: ContestantCardProps) {
    return (
        <Card
            onClick={onSelect}
            className={cn(
                "cursor-pointer overflow-hidden bg-zinc-800 border-2 transition-all duration-200 ease-in-out relative group",
                isSelected ? "border-amber-400 scale-105 shadow-lg shadow-amber-400/20" : "border-transparent hover:border-amber-400/50 hover:scale-105"
            )}
        >
            <CardContent className="p-0 aspect-[4/5] relative">
                <Image
                    src={contestant.image}
                    alt={contestant.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                    style={{ objectPosition: contestant.objectPosition || 'center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                {isSelected && (
                    <div className="absolute top-2 right-2 bg-amber-400 text-black rounded-full h-6 w-6 flex items-center justify-center">
                        <CheckCircle className="h-4 w-4" />
                    </div>
                )}
            </CardContent>
            <CardFooter className="p-2 bg-zinc-900/80 absolute bottom-0 w-full">
                <div className="text-center w-full">
                    <p className="font-bold text-sm text-white truncate">{contestant.name}</p>
                    <p className="text-xs text-amber-400 truncate">{contestant.category}</p>
                </div>
            </CardFooter>
        </Card>
    );
}
