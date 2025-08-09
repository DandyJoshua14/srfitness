
"use client";

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Image as ImageIcon, Upload, Trash2, GalleryVertical } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  dataAiHint: string;
}

const STORAGE_KEY = 'sr-fitness-gallery-images';

const defaultImages = [
  { id: 'def1', src: '/aw1.jpeg', alt: 'Group workout session', dataAiHint: 'group workout energy' },
  { id: 'def2', src: '/aw2.jpeg', alt: 'Client lifting weights with trainer', dataAiHint: 'personal training weights' },
  { id: 'def3', src: '/aw3.jpeg', alt: 'Yoga class in progress', dataAiHint: 'yoga class zen' },
  { id: 'def4', src: '/aw4.jpeg', alt: 'Bootcamp outdoor drill', dataAiHint: 'bootcamp outdoor fitness' },
  { id: 'def5', src: '/gal.jpeg', alt: 'Modern gym interior', dataAiHint: 'modern gym empty' },
];

export default function AdminGalleryManagerPage() {
  const { toast } = useToast();
  
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [newImage, setNewImage] = useState({ src: '', alt: '', dataAiHint: '' });

  const loadImages = useCallback(() => {
    try {
      const storedImages = localStorage.getItem(STORAGE_KEY);
      if (storedImages) {
        setImages(JSON.parse(storedImages));
      } else {
        // If no images in storage, initialize with defaults
        setImages(defaultImages);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultImages));
      }
    } catch (error) {
      console.error("Could not load images from localStorage", error);
      toast({ title: "Error Loading Images", description: "Falling back to default images.", variant: "destructive" });
      setImages(defaultImages);
    }
  }, [toast]);


  useEffect(() => {
    loadImages();
  }, [loadImages]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { // 2MB limit
        toast({ title: "Image Too Large", description: "Please select an image smaller than 2MB.", variant: "destructive" });
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage(prev => ({...prev, src: reader.result as string}));
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setNewImage(prev => ({ ...prev, [id]: value }));
  };

  const handleAddImage = () => {
    if (!newImage.src || !newImage.alt) {
      toast({ title: "Cannot Add Image", description: "Please upload an image and provide an alt description.", variant: "destructive" });
      return;
    }
    
    try {
      const imageToAdd: GalleryImage = {
        id: String(Date.now()),
        ...newImage
      };
      const updatedImages = [imageToAdd, ...images];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedImages));
      setImages(updatedImages);
      setNewImage({ src: '', alt: '', dataAiHint: '' });
      toast({ title: "Image Added", description: "The new image has been added to the gallery." });
    } catch(error) {
      console.error("Failed to add image:", error);
      toast({ title: "Save Failed", description: "Could not add the image.", variant: "destructive" });
    }
  };
  
  const handleDeleteImage = (imageId: string) => {
    try {
      const updatedImages = images.filter(img => img.id !== imageId);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedImages));
      setImages(updatedImages);
      toast({ title: "Image Deleted", description: "The image has been removed from the gallery." });
    } catch (error) {
      console.error("Failed to delete image:", error);
      toast({ title: "Deletion Failed", variant: "destructive" });
    }
  };

  return (
    <div className="space-y-8">
      <Card className="shadow-lg border-primary/20">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-primary flex items-center">
            <GalleryVertical className="mr-3 h-8 w-8" />
            Gallery Manager
          </CardTitle>
          <CardDescription>
            Upload new photos or delete existing ones from the homepage gallery.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center"><Upload className="mr-2 h-5 w-5" /> Upload New Image</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6 items-start">
            <div className="space-y-4">
              <div>
                <Label htmlFor="alt">Image Description (Alt Text)</Label>
                <Input id="alt" value={newImage.alt} onChange={handleInputChange} placeholder="E.g., Group workout session" />
              </div>
              <div>
                <Label htmlFor="dataAiHint">Image Search Hint (for AI)</Label>
                <Input id="dataAiHint" value={newImage.dataAiHint} onChange={handleInputChange} placeholder="E.g., group workout energy" />
              </div>
              <div>
                <Label htmlFor="image-upload" className="flex items-center"><ImageIcon className="mr-2 h-4 w-4"/> Image File</Label>
                <Input 
                    id="image-upload" 
                    type="file"
                    accept="image/png, image/jpeg, image/gif, image/webp"
                    onChange={handleImageUpload}
                    className="mt-1 file:text-primary"
                />
              </div>
            </div>
            {newImage.src && (
                <div className="flex flex-col items-center">
                    <Label className="mb-2">Image Preview</Label>
                    <div className="relative aspect-video w-full max-w-sm rounded-lg overflow-hidden border">
                         <Image src={newImage.src} alt="Preview" layout="fill" objectFit="cover" />
                    </div>
                </div>
            )}
        </CardContent>
        <CardFooter>
            <Button onClick={handleAddImage} disabled={!newImage.src || !newImage.alt}>
                Add Image to Gallery
            </Button>
        </CardFooter>
      </Card>
      
      <Separator />

      <Card>
          <CardHeader>
            <CardTitle>Current Gallery Images ({images.length})</CardTitle>
            <CardDescription>Images are displayed on the homepage. Delete images here to remove them from the public site.</CardDescription>
          </CardHeader>
          <CardContent>
            {images.length === 0 ? (
                 <p className="text-muted-foreground text-center py-8">The gallery is empty. Upload an image to get started.</p>
            ): (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map(img => (
                        <div key={img.id} className="relative group">
                             <div className="relative aspect-video rounded-md overflow-hidden border">
                                <Image src={img.src} alt={img.alt} layout="fill" objectFit="cover" data-ai-hint={img.dataAiHint} />
                            </div>
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Button variant="destructive" size="icon" onClick={() => handleDeleteImage(img.id)}>
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                             <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-xs rounded-b-md">
                                <p className="truncate" title={img.alt}>
                                    {img.alt}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
          </CardContent>
      </Card>

    </div>
  );
}

    