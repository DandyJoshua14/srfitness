
"use client";

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Image as ImageIcon, Trash2, Upload, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  dataAiHint: string;
}

const defaultImages: GalleryImage[] = [
    { id: 'default-1', src: 'https://placehold.co/1280x720.png', alt: 'SR Fitness gallery placeholder', dataAiHint: 'fitness community' },
    { id: 'default-2', src: 'https://placehold.co/1280x720.png', alt: 'SR Fitness gallery placeholder', dataAiHint: 'gym equipment' },
    { id: 'default-3', src: 'https://placehold.co/1280x720.png', alt: 'SR Fitness gallery placeholder', dataAiHint: 'group workout' },
    { id: 'default-4', src: 'https://placehold.co/1280x720.png', alt: 'SR Fitness gallery placeholder', dataAiHint: 'healthy lifestyle' },
    { id: 'default-5', src: 'https://placehold.co/1280x720.png', alt: 'SR Fitness gallery placeholder', dataAiHint: 'personal training' },
];


export default function AdminGalleryManagerPage() {
  const { toast } = useToast();
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [newImage, setNewImage] = useState<{ file: File | null, alt: string, dataAiHint: string }>({
    file: null,
    alt: '',
    dataAiHint: ''
  });
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const loadImages = useCallback(() => {
    try {
      const storedImages = localStorage.getItem('sr-fitness-gallery-images');
      if (storedImages) {
        setImages(JSON.parse(storedImages));
      } else {
        // If local storage is empty, initialize it with the default images
        setImages(defaultImages);
        localStorage.setItem('sr-fitness-gallery-images', JSON.stringify(defaultImages));
      }
    } catch (error) {
      console.error("Could not load images from localStorage", error);
      toast({
        title: "Error Loading Images",
        description: "Could not retrieve gallery images. Please refresh.",
        variant: "destructive",
      });
    }
  }, [toast]);

  useEffect(() => {
    loadImages();
  }, [loadImages]);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 4 * 1024 * 1024) { // 4MB limit
        toast({
          title: "Image Too Large",
          description: "Please select an image smaller than 4MB.",
          variant: "destructive",
        });
        return;
      }
      setNewImage(prev => ({...prev, file}));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setNewImage(prev => ({...prev, [id]: value }));
  };

  const handleAddImage = () => {
    if (!newImage.file || !newImage.alt) {
      toast({ title: "Missing Information", description: "Please select an image and provide an alt description.", variant: "destructive" });
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const dataUrl = reader.result as string;
      const imageToAdd: GalleryImage = {
        id: String(Date.now()),
        src: dataUrl,
        alt: newImage.alt,
        dataAiHint: newImage.dataAiHint || 'custom image'
      };
      
      const updatedImages = [imageToAdd, ...images];
      localStorage.setItem('sr-fitness-gallery-images', JSON.stringify(updatedImages));
      setImages(updatedImages);

      // Reset form
      setNewImage({ file: null, alt: '', dataAiHint: '' });
      setPreviewUrl(null);
      const fileInput = document.getElementById('image-upload') as HTMLInputElement;
      if(fileInput) fileInput.value = '';

      toast({ title: "Image Added", description: "The new image has been added to the gallery." });
    };
    reader.readAsDataURL(newImage.file);
  };

  const handleDeleteImage = (imageId: string) => {
    const updatedImages = images.filter(img => img.id !== imageId);
    localStorage.setItem('sr-fitness-gallery-images', JSON.stringify(updatedImages));
    setImages(updatedImages);
    toast({ title: "Image Deleted", description: "The image has been removed from the gallery.", variant: "destructive" });
  };

  return (
    <div className="space-y-8">
       <Card className="shadow-lg border-primary/20">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-primary flex items-center">
            <ImageIcon className="mr-3 h-8 w-8" />
            Gallery Manager
          </CardTitle>
          <CardDescription>
            Upload and delete images for use across the website.
            Note: The homepage gallery section is static and will not reflect these changes.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid lg:grid-cols-5 gap-8 items-start">
        <div className="lg:col-span-2">
            <Card className="shadow-md sticky top-24">
                <CardHeader>
                    <CardTitle className="flex items-center"><Upload className="mr-2"/> Upload New Image</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div>
                        <Label htmlFor="image-upload" className="font-semibold">Image File</Label>
                        <Input 
                            id="image-upload" 
                            type="file"
                            accept="image/png, image/jpeg, image/gif, image/webp"
                            onChange={handleFileChange}
                            className="mt-1 file:text-primary"
                        />
                         {previewUrl && (
                            <div className="mt-4 relative aspect-video rounded-lg overflow-hidden border">
                                <Image src={previewUrl} alt="Selected preview" layout="fill" objectFit="cover" />
                            </div>
                        )}
                    </div>
                     <div>
                        <Label htmlFor="alt" className="font-semibold">Alternative Text (for accessibility)</Label>
                        <Input id="alt" value={newImage.alt} onChange={handleInputChange} placeholder="e.g., A group of people in a yoga class" />
                    </div>
                     <div>
                        <Label htmlFor="dataAiHint" className="font-semibold">AI Image Hint (Optional)</Label>
                        <Input id="dataAiHint" value={newImage.dataAiHint} onChange={handleInputChange} placeholder="e.g., group yoga" />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" onClick={handleAddImage} disabled={!newImage.file || !newImage.alt}>
                        Add Image to Gallery
                    </Button>
                </CardFooter>
            </Card>
        </div>

        <div className="lg:col-span-3">
            <Card className="shadow-md">
                <CardHeader>
                    <CardTitle>Current Gallery Images</CardTitle>
                    <CardDescription>View and delete the images currently stored.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="max-h-[100vh] overflow-y-auto pr-2 space-y-4">
                        {images.length === 0 ? (
                            <div className="text-center py-8 text-muted-foreground">
                                <ImageIcon className="mx-auto h-12 w-12 mb-4" />
                                <p>No images in the gallery yet.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {images.map(image => (
                                    <div key={image.id} className="group relative">
                                        <Card className="overflow-hidden">
                                            <div className="aspect-square relative">
                                                <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" data-ai-hint={image.dataAiHint} />
                                            </div>
                                        </Card>
                                        <div className="absolute top-2 right-2">
                                            <Button
                                                variant="destructive"
                                                size="icon"
                                                className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                                                onClick={() => handleDeleteImage(image.id)}
                                                aria-label={`Delete image: ${image.alt}`}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
