
"use client";

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { getNominations, Nomination } from '@/services/nomination-service';
import { useToast } from '@/hooks/use-toast';
import { Handshake } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export default function AdminNominationsPage() {
    const { toast } = useToast();
    const [nominations, setNominations] = useState<Nomination[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const loadNominations = useCallback(async () => {
        setIsLoading(true);
        try {
            const fetchedNominations = await getNominations();
            setNominations(fetchedNominations);
        } catch (error) {
            console.error("Could not load nominations from database", error);
            toast({
                title: "Error Loading Nominations",
                description: "Could not retrieve nomination data from the database.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    }, [toast]);

    useEffect(() => {
        loadNominations();
    }, [loadNominations]);

    return (
        <div className="space-y-8">
            <Card className="shadow-lg border-primary/20">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl text-primary flex items-center">
                        <Handshake className="mr-3 h-8 w-8" />
                        Award Nominations
                    </CardTitle>
                    <CardDescription>
                        Review all nominations submitted by users.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Submitted Nominations</CardTitle>
                    <CardDescription>
                        A complete list of all received award nominations.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Nominee</TableHead>
                                <TableHead>Nominator</TableHead>
                                <TableHead className="text-right">Details</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                             {isLoading ? (
                                [...Array(5)].map((_, i) => (
                                    <TableRow key={i}>
                                        <TableCell><Skeleton className="h-5 w-24" /></TableCell>
                                        <TableCell><Skeleton className="h-5 w-32" /></TableCell>
                                        <TableCell><Skeleton className="h-5 w-28" /></TableCell>
                                        <TableCell><Skeleton className="h-5 w-28" /></TableCell>
                                        <TableCell className="text-right"><Skeleton className="h-8 w-8 rounded-full ml-auto" /></TableCell>
                                    </TableRow>
                                ))
                            ) : nominations.length > 0 ? (
                                <Accordion type="single" collapsible className="w-full" asChild>
                                    <>
                                        {nominations.map((nom) => (
                                            <AccordionItem value={nom.id!} key={nom.id} asChild>
                                                <TableRow>
                                                    <TableCell className="font-medium text-sm w-[180px]">{nom.timestamp}</TableCell>
                                                    <TableCell className="text-muted-foreground">{nom.category}</TableCell>
                                                    <TableCell>
                                                        <div className="font-medium text-foreground">{nom.nomineeName}</div>
                                                        <div className="text-xs text-muted-foreground">{nom.nomineePhone}</div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="font-medium text-foreground">{nom.nominatorName}</div>
                                                        <div className="text-xs text-muted-foreground">{nom.nominatorPhone}</div>
                                                    </TableCell>
                                                    <TableCell className="text-right">
                                                        <AccordionTrigger className="py-0 px-2 rounded-md hover:bg-muted" />
                                                    </TableCell>
                                                    <AccordionContent asChild>
                                                        <tr className="bg-muted/50 hover:bg-muted/50">
                                                            <TableCell colSpan={5} className="p-4">
                                                                <div className="font-semibold text-foreground mb-2">Reason for Nomination:</div>
                                                                <p className="text-sm text-muted-foreground whitespace-pre-wrap">{nom.nominationReason}</p>
                                                            </TableCell>
                                                        </tr>
                                                    </AccordionContent>
                                                </TableRow>
                                            </AccordionItem>
                                        ))}
                                    </>
                                </Accordion>
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center h-24">No nominations have been submitted yet.</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
