
"use client";

import React, { useState, useMemo, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowRight, ChevronDown, Award as AwardIcon, Loader2, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ContestantCard, { Contestant } from '@/components/features/vote/contestant-card';
import { cn } from '@/lib/utils';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { sendNominationEmail } from '@/app/actions';

const generalCategories = [
    { title: "Fitness Trainer/Coach of the Year" },
    { title: "Fitness Club Coach of the Year" },
    { title: "Foundation Fitness Award" },
    { title: "Mental Health & Wellness Advocate" },
    { title: "Life Champion Award - Overcomers series" },
    { title: "Foundation Fitness Hero Award" },
    { title: "Educators Recognition series" },
    { title: "Fitness Event Of The Year (Coaches)" },
    { title: "Fitness Event Of The Year (Clubs)" },
];

const recognitionCategories = [
      { title: "Inspirational Weight-Loss Journey" },
      { title: "Art and Wellness Advocate" },
      { title: "Community Fitness Hero of the Year" },
      { title: "Care-Givers Advocate" }, // Nurses
      { title: "Health Care Treatment Advocate" }, // Doctors
      { title: "Pharmaceutical Service Champion" }, // Pharmacy / Pharmacist
      { title: "Physiotherapist of the Year" },
];

const organizationsCategories = [
    { title: "Corporate Wellness Champion" },
    { title: "Corporate Social Responsibility Champion" },
    { title: "Gym of the Year" },
];

const allAwardCategories = [
    ...generalCategories,
    ...recognitionCategories,
    ...organizationsCategories
].map(c => c.title);

const contestants: Contestant[] = [
    { id: '1', name: 'Coach NTB', category: 'Fitness Trainer/Coach of the Year', image: '/ntb2.JPG' },
    { id: '2', name: 'Coach Tawani', category: 'Fitness Trainer/Coach of the Year', image: '/Tawani.jpg' },
    { id: '3', name: 'Body Quest', category: 'Fitness Trainer/Coach of the Year', image: '/bodyq.jpg' },
    { id: '22', name: 'Coach George', category: 'Fitness Trainer/Coach of the Year', image: '/george.jpg' },
    { id: '23', name: 'Coach Collins', category: 'Fitness Trainer/Coach of the Year', image: '/collins.jpg' },
    { id: '4', name: 'Pharm. Mrs. Onwudiwe Blessing', category: 'Inspirational Weight-Loss Journey', image: '/bles.JPG', objectPosition: 'center 25%' },
    { id: '5', name: 'Mrs Virtue Michael Okoi', category: 'Inspirational Weight-Loss Journey', image: '/okoi.JPG' },
    { id: '6', name: 'David L', category: 'Community Fitness Hero of the Year', image: 'https://placehold.co/400x400.png?text=David+L' },
    { id: '24', name: 'Jane F.', category: 'Community Fitness Hero of the Year', image: 'https://placehold.co/400x400.png?text=Jane+F' },
    { id: '25', name: 'Mike R.', category: 'Community Fitness Hero of the Year', image: 'https://placehold.co/400x400.png?text=Mike+R' },
    // Professionals
    { id: '7', name: 'Nurse Joy', category: 'Care-Givers Advocate', image: 'https://placehold.co/400x400.png?text=Nurse+J' },
    { id: '26', name: 'Nurse Michael', category: 'Care-Givers Advocate', image: 'https://placehold.co/400x400.png?text=Nurse+M' },
    { id: '27', name: 'Nurse Ada', category: 'Care-Givers Advocate', image: 'https://placehold.co/400x400.png?text=Nurse+A' },
    { id: '8', name: 'Dr. Mike', category: 'Health Care Treatment Advocate', image: 'https://placehold.co/400x400.png?text=Dr+M' },
    { id: '28', name: 'Dr. Chen', category: 'Health Care Treatment Advocate', image: 'https://placehold.co/400x400.png?text=Dr+C' },
    { id: '29', name: 'Dr. Okonjo', category: 'Health Care Treatment Advocate', image: 'https://placehold.co/400x400.png?text=Dr+O' },
    { id: '9', name: 'PharmaPlus', category: 'Pharmaceutical Service Champion', image: 'https://placehold.co/400x400.png?text=Rx+' },
    { id: '30', name: 'HealthFirst Pharmacy', category: 'Pharmaceutical Service Champion', image: 'https://placehold.co/400x400.png?text=HF+Rx' },
    { id: '31', name: 'Care Pharmacy', category: 'Pharmaceutical Service Champion', image: 'https://placehold.co/400x400.png?text=Care+Rx' },
    { id: '10', name: 'Sarah Lee, RPT', category: 'Physiotherapist of the Year', image: 'https://placehold.co/400x400.png?text=SL' },
    { id: '32', name: 'Femi Ade, RPT', category: 'Physiotherapist of the Year', image: 'https://placehold.co/400x400.png?text=FA' },
    { id: '33', name: 'Chioma Obi, RPT', category: 'Physiotherapist of the Year', image: 'https://placehold.co/400x400.png?text=CO' },
    // Organizations
    { id: '11', name: 'Wellness Inc.', category: 'Corporate Wellness Champion', image: 'https://placehold.co/400x400.png?text=W+Inc' },
    { id: '12', name: 'GoodWorks LLC', category: 'Corporate Social Responsibility Champion', image: 'https://placehold.co/400x400.png?text=GW+LLC' },
    // New contestants
    { id: '48', name: 'Coach Ifiok', category: 'Fitness Club Coach of the Year', image: '/ifiok.jpg' },
    { id: '49', name: 'Coach Ofonime', category: 'Fitness Club Coach of the Year', image: '/ofon.JPG' },
    { id: '50', name: 'Coach Bigname', category: 'Fitness Club Coach of the Year', image: '/Bigname.jpg' },
    { id: '15', name: 'Victor\'s Fitness', category: 'Gym of the Year', image: 'https://placehold.co/400x400.png?text=VF' },
    { id: '16', name: 'Romaan Fitness', category: 'Gym of the Year', image: 'https://placehold.co/400x400.png?text=RF' },
    { id: '17', name: 'Hogis Fitness', category: 'Gym of the Year', image: '/hogis.png' },
    { id: '18', name: '1480 AZ GYM (NAVY GYM)', category: 'Gym of the Year', image: '/az.jpg', objectPosition: 'center 20%' },
    { id: '19', name: 'Oma', category: 'Art and Wellness Advocate', image: 'https://placehold.co/400x400.png?text=OMA' },
    { id: '20', name: 'Lifeclinicng', category: 'Art and Wellness Advocate', image: '/dr ken.jpg' },
    { id: '21', name: 'Hannah Bassey-Duke', category: 'Art and Wellness Advocate', image: '/han.jpg' },
    { id: '42', name: '300 Tawani Fitness Day-Out', category: 'Fitness Event Of The Year (Coaches)', image: '/tawani.JPG' },
    { id: '43', name: 'The Exclusive Workout Exibition', category: 'Fitness Event Of The Year (Coaches)', image: '/dbb.png' },
    { id: '44', name: 'Event Coache C', category: 'Fitness Event Of The Year (Coaches)', image: 'https://placehold.co/400x400.png?text=EC-C' },
    { id: '45', name: 'Calabar Walkhathon', category: 'Fitness Event Of The Year (Clubs)', image: '/walk2.png', objectFit: 'contain' },
    { id: '46', name: 'Pro Fitness', category: 'Fitness Event Of The Year (Clubs)', image: '/pro fitness.jpg', objectFit: 'contain' },
    { id: '47', name: 'Micki Fitness', category: 'Fitness Event Of The Year (Clubs)', image: '/miki.jpeg' },
    
];

const nominationFormSchema = z.object({
  category: z.string().min(1, "Please select an award category."),
  nomineeName: z.string().min(2, "Nominee name must be at least 2 characters."),
  nomineePhone: z.string().min(10, "Please enter a valid phone number."),
  nominationReason: z.string().min(10, "Please provide a reason for the nomination."),
  nominatorName: z.string().min(2, "Please enter your name."),
  nominatorPhone: z.string().min(10, "Please enter your phone number."),
});

const voteOptions = [
    { base: 10, free: 2, label: "10 Votes + 2 Free" },
    { base: 50, free: 3, label: "50 Votes + 3 Free" },
    { base: 100, free: 5, label: "100 Votes + 5 Free" },
    { base: 500, free: 10, label: "500 Votes + 10 Free" },
    { base: 1000, free: 20, label: "1000 Votes + 20 Bonus" },
];


export default function VotePage() {
    const { toast } = useToast();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [selectedContestant, setSelectedContestant] = useState<Contestant | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");
    const [numberOfVotes, setNumberOfVotes] = useState<string>(String(voteOptions[0].base));

    const form = useForm<z.infer<typeof nominationFormSchema>>({
        resolver: zodResolver(nominationFormSchema),
        defaultValues: {
            category: "",
            nomineeName: "",
            nomineePhone: "",
            nominationReason: "",
            nominatorName: "",
            nominatorPhone: "",
        },
    });

    const handleNominationSubmit = (values: z.infer<typeof nominationFormSchema>) => {
        startTransition(async () => {
            const result = await sendNominationEmail(values);
            if (result.success) {
                toast({
                    title: "Nomination Submitted!",
                    description: "Thank you for nominating. We will review your submission.",
                });
                form.reset();
            } else {
                toast({
                    title: "Submission Failed",
                    description: result.error,
                    variant: "destructive"
                });
            }
        });
    };

    const handleProceedToVote = () => {
        if (!selectedContestant) {
            toast({
                title: "No Contestant Selected",
                description: "Please select a contestant before proceeding.",
                variant: "destructive"
            });
            return;
        }
        
        const selectedVoteOption = voteOptions.find(o => o.base === parseInt(numberOfVotes));
        if (!selectedVoteOption) {
            toast({
                title: "Invalid Vote Amount",
                description: "Please select a valid number of votes.",
                variant: "destructive"
            });
            return;
        }

        const totalVotes = selectedVoteOption.base + selectedVoteOption.free;
        const { id, name, category, image } = selectedContestant;
        const query = new URLSearchParams({ 
            id, 
            name, 
            category, 
            votes: String(totalVotes),
            image, // Pass the image URL
        }).toString();
        router.push(`/checkout?${query}`);
    };

    const recognitionCategoryTitles = useMemo(() => new Set(recognitionCategories.map(c => c.title)), []);
    
    const votableContestants = useMemo(() => {
        return contestants.filter(c => !recognitionCategoryTitles.has(c.category));
    }, [recognitionCategoryTitles]);

    const recognitionContestants = useMemo(() => {
        return contestants.filter(c => recognitionCategoryTitles.has(c.category));
    }, [recognitionCategoryTitles]);


    const filteredContestants = useMemo(() => {
        if (selectedCategory === "All Categories") {
            return votableContestants;
        }
        return votableContestants.filter(c => c.category === selectedCategory);
    }, [selectedCategory, votableContestants]);

    const isCategoryActive = (mainCategory: string, subCategories: {title: string}[]) => {
        if (selectedCategory === mainCategory) return true;
        return subCategories.some(sub => sub.title === selectedCategory);
    };
    
    const categoriesToDisplay = useMemo(() => {
        if (selectedCategory === "All Categories") {
            const categoriesWithContestants = new Set(votableContestants.map(c => c.category));
            return [...generalCategories, ...organizationsCategories]
                .map(c => c.title)
                .filter(cat => categoriesWithContestants.has(cat));
        }
        return [selectedCategory];
    }, [selectedCategory, votableContestants]);

    const renderDropdown = (mainTitle: string, subItems: {title: string}[]) => {
        const isActive = isCategoryActive(mainTitle, subItems);
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        className={cn(
                            "border-primary/30 text-primary hover:bg-primary/10 hover:text-primary",
                            isActive && "bg-primary/20 ring-2 ring-primary text-primary"
                        )}
                    >
                        {mainTitle} <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border-primary/30 text-primary">
                    {subItems.map(item => (
                         <DropdownMenuItem key={item.title} onSelect={() => setSelectedCategory(item.title)} className="cursor-pointer hover:!bg-primary/20 focus:!bg-primary/20">
                            {item.title}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        );
    };

    return (
        <div className="bg-background text-foreground min-h-screen">
            <div className="min-h-screen">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <header className="text-center mb-12 md:mb-16">
                        <Image
                            src="/SR.jpg"
                            alt="SR Fitness Awards Logo"
                            width={96}
                            height={96}
                            className="h-24 w-24 mx-auto mb-4 rounded-full"
                            data-ai-hint="awards logo"
                            priority
                        />
                        <p className="font-headline text-2xl text-primary tracking-wider">
                            IDENTIFY, RECOGNIZE & CELEBRATE FITNESS INDUSTRY EXCELLENCE
                        </p>
                    </header>

                    <div className="mb-12 md:mb-16 flex justify-center">
                        <Image
                            src="/VOTEG.png"
                            alt="SR Fitness Awards Voting Guide with pricing"
                            width={800}
                            height={800}
                            className="rounded-lg shadow-2xl shadow-primary/20 max-w-full sm:max-w-lg md:max-w-xl"
                            data-ai-hint="voting guide"
                            priority
                        />
                    </div>
                    
                    <main className="space-y-16">
                        {/* --- Voting Section --- */}
                        <section id="vote">
                            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
                                <Card className="bg-card border-border text-foreground shadow-2xl shadow-primary/10">
                                    <CardHeader>
                                        <CardTitle className="font-headline text-4xl text-primary">Vote for a Contestant</CardTitle>
                                        <CardDescription className="text-muted-foreground">1. Select a category, then choose a contestant below.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="mb-6">
                                            <p className="font-semibold text-muted-foreground mb-3">Filter by Category:</p>
                                            <div className="flex flex-wrap items-center gap-2">
                                                <Button
                                                    variant="outline"
                                                    onClick={() => setSelectedCategory("All Categories")}
                                                    className={cn(
                                                        "border-primary/30 text-primary hover:bg-primary/10 hover:text-primary",
                                                        selectedCategory === "All Categories" && "bg-primary/20 ring-2 ring-primary text-primary"
                                                    )}
                                                >
                                                    All Categories
                                                </Button>
                                                <div className="h-6 w-px bg-primary/30" />
                                                {renderDropdown("General", generalCategories)}
                                                <div className="h-6 w-px bg-primary/30" />
                                                {renderDropdown("Organizations", organizationsCategories)}
                                            </div>
                                        </div>
                                         <div className="space-y-8">
                                            {categoriesToDisplay.map((category) => {
                                                const contestantsForCategory = filteredContestants.filter(c => c.category === category);
                                                if (contestantsForCategory.length === 0) return null;

                                                return (
                                                    <div key={category}>
                                                        <h3 className="font-headline text-2xl text-primary mb-4 pb-2 border-b border-primary/20">{category}</h3>
                                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                                            {contestantsForCategory.map(c => (
                                                                <ContestantCard 
                                                                    key={c.id} 
                                                                    contestant={c}
                                                                    isVotable={true}
                                                                    isSelected={selectedContestant?.id === c.id}
                                                                    onSelect={() => {
                                                                        if (selectedContestant?.id === c.id) {
                                                                            setSelectedContestant(null);
                                                                        } else {
                                                                            setSelectedContestant(c);
                                                                        }
                                                                    }}
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </CardContent>
                                </Card>

                                <div className="space-y-8 sticky top-24">
                                    <Card className="bg-card border-border text-foreground shadow-2xl shadow-primary/10">
                                        <CardHeader>
                                            <CardTitle className="font-headline text-4xl text-primary">2. Complete Your Vote</CardTitle>
                                            <CardDescription className="text-muted-foreground">
                                                After selecting a contestant, confirm the number of votes and click below.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            {selectedContestant ? (
                                                <div className="bg-muted/50 p-4 rounded-lg space-y-4">
                                                    <div className="text-center">
                                                        <p className="text-muted-foreground mb-1">You have selected:</p>
                                                        <p className="font-bold text-primary text-xl">{selectedContestant.name}</p>
                                                        <p className="text-xs text-muted-foreground">{selectedContestant.category}</p>
                                                    </div>
                                                     <div>
                                                        <Label className="text-muted-foreground font-semibold mb-2 block text-center">Number of Votes:</Label>
                                                        <Select onValueChange={setNumberOfVotes} defaultValue={numberOfVotes}>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Select number of votes" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                {voteOptions.map(v => (
                                                                    <SelectItem key={v.base} value={String(v.base)}>{v.label}</SelectItem>
                                                                ))}
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="bg-muted/50 p-4 rounded-lg text-center h-24 flex items-center justify-center">
                                                    <p className="text-muted-foreground">Please select a contestant to vote for.</p>
                                                </div>
                                            )}
                                            <Button
                                                size="lg"
                                                className="w-full mt-6 bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
                                                onClick={handleProceedToVote}
                                                disabled={!selectedContestant}
                                            >
                                                Proceed to Vote <ArrowRight className="ml-2 h-5 w-5" />
                                            </Button>
                                            <p className="text-xs text-muted-foreground mt-4 text-center">
                                                You will be taken to a final confirmation page with payment details.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </section>

                         {/* --- Professional Recognition Section --- */}
                        <section id="recognition">
                            <Card className="bg-card border-border text-foreground shadow-2xl shadow-primary/10">
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <Star className="h-10 w-10 text-primary" />
                                        <div>
                                            <CardTitle className="font-headline text-4xl text-primary">Recognition Awards</CardTitle>
                                            <CardDescription className="text-muted-foreground">Honoring excellence in specialized fields. These categories are for recognition only and are not part of the public vote.</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-8">
                                        {recognitionCategories.map((category) => {
                                            const contestantsForCategory = recognitionContestants.filter(c => c.category === category.title);
                                            if (contestantsForCategory.length === 0) return null;

                                            return (
                                                <div key={category.title}>
                                                    <h3 className="font-headline text-2xl text-primary mb-4 pb-2 border-b border-primary/20">{category.title}</h3>
                                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                                        {contestantsForCategory.map(c => (
                                                            <ContestantCard 
                                                                key={c.id} 
                                                                contestant={c}
                                                                isVotable={false}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </CardContent>
                            </Card>
                        </section>
                        
                        {/* --- Nomination Section --- */}
                        <section id="nominate">
                             <Card className="bg-card border-border text-foreground shadow-2xl shadow-primary/10">
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <AwardIcon className="h-10 w-10 text-primary" />
                                        <div>
                                            <CardTitle className="font-headline text-4xl text-primary">Online Nomination Form</CardTitle>
                                            <CardDescription className="text-muted-foreground">Think someone deserves an award? Nominate them here!</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(handleNominationSubmit)} className="space-y-6">
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <FormField
                                                    control={form.control}
                                                    name="category"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-muted-foreground">Award Category</FormLabel>
                                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                <FormControl>
                                                                    <SelectTrigger>
                                                                        <SelectValue placeholder="Select an award to nominate for" />
                                                                    </SelectTrigger>
                                                                </FormControl>
                                                                <SelectContent>
                                                                    {allAwardCategories.map(cat => (
                                                                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                                                                    ))}
                                                                </SelectContent>
                                                            </Select>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                 <FormField
                                                    control={form.control}
                                                    name="nomineeName"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-muted-foreground">Nominee's Full Name</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="e.g., John Doe" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="nomineePhone"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-muted-foreground">Nominee's Phone Number</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="e.g., 08012345678" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="nominationReason"
                                                    render={({ field }) => (
                                                        <FormItem className="md:col-span-2">
                                                            <FormLabel className="text-muted-foreground">Reason for Nomination</FormLabel>
                                                            <FormControl>
                                                                <Textarea placeholder="Briefly explain why they deserve this award..." {...field} rows={4}/>
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                 <div className="md:col-span-2 border-t border-border pt-6 space-y-6">
                                                     <FormField
                                                        control={form.control}
                                                        name="nominatorName"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="text-muted-foreground">Your Name (Nominator)</FormLabel>
                                                                <FormControl>
                                                                    <Input placeholder="Your full name" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                     <FormField
                                                        control={form.control}
                                                        name="nominatorPhone"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="text-muted-foreground">Your Phone Number</FormLabel>
                                                                <FormControl>
                                                                    <Input placeholder="Your contact phone number" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                 </div>
                                            </div>
                                            <Button type="submit" size="lg" className="w-full md:w-auto bg-primary text-primary-foreground font-bold hover:bg-primary/90 disabled:opacity-75" disabled={isPending}>
                                                {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                                                {isPending ? 'Submitting...' : 'Submit Nomination'}
                                            </Button>
                                        </form>
                                    </Form>
                                </CardContent>
                            </Card>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
}
