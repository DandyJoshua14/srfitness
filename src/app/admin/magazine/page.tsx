
"use client";

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SendHorizonal, Newspaper, Image as ImageIcon, Trash2, List, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { addArticle, getArticles, deleteArticle, Article } from '@/services/firestore';
import { Skeleton } from '@/components/ui/skeleton';

export default function AdminMagazineManagerPage() {
  const { toast } = useToast();
  
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [dataAiHint, setDataAiHint] = useState('');
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPublishing, setIsPublishing] = useState(false);

  const loadArticles = useCallback(async () => {
    setIsLoading(true);
    try {
      const fetchedArticles = await getArticles();
      setArticles(fetchedArticles);
    } catch (error) {
      console.error("Could not load articles from Firestore", error);
      toast({
        title: "Error Loading Articles",
        description: "Could not retrieve articles from the database.",
        variant: "destructive",
      });
    } finally {
        setIsLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    loadArticles();
  }, [loadArticles]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { // 2MB limit
        toast({ title: "Image Too Large", description: "Please select an image smaller than 2MB.", variant: "destructive" });
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => { setImageUrl(reader.result as string); };
      reader.readAsDataURL(file);
    }
  };


  const handlePublish = async () => {
    if (!title.trim() || !excerpt.trim() || !category.trim()) {
      toast({ title: "Cannot Publish", description: "Please provide a title, excerpt, and category.", variant: "destructive" });
      return;
    }
    setIsPublishing(true);

    try {
      const newArticle = {
        title,
        category,
        excerpt,
        image: imageUrl || `https://placehold.co/600x400.png`,
        dataAiHint: dataAiHint || 'fitness lifestyle',
      };
      
      await addArticle(newArticle);

      toast({ title: "Article Published!", description: "Your new article is now live on the magazine page." });

      setTitle('');
      setCategory('');
      setExcerpt('');
      setImageUrl('');
      setDataAiHint('');
      loadArticles();

    } catch (error) {
        console.error("Failed to publish article:", error);
        toast({ title: "Publishing Failed", description: "Could not save the article.", variant: "destructive" });
    } finally {
        setIsPublishing(false);
    }
  };
  
  const handleDeleteArticle = async (articleId: string) => {
    try {
      await deleteArticle(articleId);
      setArticles(articles.filter(a => a.id !== articleId));
      toast({ title: "Article Deleted", description: "The article has been successfully removed." });
    } catch (error) {
      console.error("Failed to delete article:", error);
      toast({ title: "Deletion Failed", description: "Could not delete the article.", variant: "destructive" });
    }
  };

  return (
    <div className="space-y-8">
      <Card className="shadow-lg border-primary/20">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-primary flex items-center">
            <Newspaper className="mr-3 h-8 w-8" />
            Magazine Manager
          </CardTitle>
          <CardDescription>
            Create and publish new articles for the SR Fitness Lifestyle Magazine.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid lg:grid-cols-5 gap-8 items-start">
        {/* Editor Column */}
        <div className="lg:col-span-3">
            <Card className="shadow-md sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center">Create New Article</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  <div>
                      <Label htmlFor="article-title" className="font-semibold">Article Title</Label>
                      <Input id="article-title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter a catchy title..." className="mt-1" />
                  </div>
                   <div>
                    <Label htmlFor="article-category" className="font-semibold">Category</Label>
                    <Select onValueChange={setCategory} value={category}>
                        <SelectTrigger id="article-category" className="mt-1">
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Nutrition">Nutrition</SelectItem>
                            <SelectItem value="Wellness">Wellness</SelectItem>
                            <SelectItem value="Fitness Tips">Fitness Tips</SelectItem>
                            <SelectItem value="Motivation">Motivation</SelectItem>
                        </SelectContent>
                    </Select>
                  </div>
                  <div>
                      <Label htmlFor="article-image" className="font-semibold flex items-center">
                        <ImageIcon className="mr-2 h-5 w-5" /> Cover Image
                      </Label>
                      <Input id="article-image" type="file" accept="image/*" onChange={handleImageUpload} className="mt-1 file:text-primary" />
                      {imageUrl && (
                        <div className="mt-4 relative aspect-video rounded-lg overflow-hidden border">
                          <Image src={imageUrl} alt="Selected preview" fill style={{objectFit:"cover"}} />
                        </div>
                      )}
                  </div>
                   <div>
                    <Label htmlFor="article-hint" className="font-semibold">Image Search Hint</Label>
                    <Input id="article-hint" value={dataAiHint} onChange={(e) => setDataAiHint(e.target.value)} placeholder="e.g., healthy food" className="mt-1" />
                  </div>
                  <div>
                      <Label htmlFor="article-excerpt" className="font-semibold">Excerpt</Label>
                      <Textarea id="article-excerpt" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} placeholder="Write a short summary of the article..." rows={5} className="mt-1" />
                  </div>
                </CardContent>
                <CardFooter>
                    <Button size="lg" className="w-full sm:w-auto ml-auto" onClick={handlePublish} disabled={isPublishing ||!title || !excerpt || !category}>
                      {isPublishing ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <SendHorizonal className="mr-2 h-5 w-5" /> }
                      {isPublishing ? 'Publishing...' : 'Publish Article'}
                    </Button>
                </CardFooter>
            </Card>
        </div>

        {/* Manage Articles Column */}
        <div className="lg:col-span-2">
            <Card className="shadow-md">
                <CardHeader>
                    <CardTitle className="flex items-center"><List className="mr-2 h-6 w-6" /> Manage Articles</CardTitle>
                    <CardDescription>View and delete existing articles.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="max-h-[80vh] overflow-y-auto pr-2 space-y-4">
                        {isLoading ? (
                            <div className="space-y-4">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="flex items-center space-x-4">
                                        <div className="space-y-2 flex-grow">
                                            <Skeleton className="h-4 w-4/5" />
                                            <Skeleton className="h-3 w-1/3" />
                                        </div>
                                        <Skeleton className="h-8 w-8 rounded-full" />
                                    </div>
                                ))}
                            </div>
                        ) : articles.length === 0 ? (
                            <p className="text-muted-foreground text-center py-8">No articles found.</p>
                        ) : (
                            articles.map((article, index) => (
                                <div key={article.id}>
                                    <div className="flex justify-between items-start gap-2">
                                        <div className="flex-grow overflow-hidden">
                                            <p className="font-semibold truncate text-foreground">{article.title}</p>
                                            <div className="text-xs text-muted-foreground">
                                                <Badge variant="secondary" className="mr-2">{article.category}</Badge>
                                                {article.timestamp.toString()}
                                            </div>
                                        </div>
                                        <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10 shrink-0" onClick={() => handleDeleteArticle(article.id!)} aria-label={`Delete article titled ${article.title}`}>
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    {index < articles.length - 1 && <Separator className="mt-4" />}
                                </div>
                            ))
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
