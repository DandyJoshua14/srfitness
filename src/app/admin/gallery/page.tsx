
"use client";

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Image as ImageIcon, Trash2, Upload, List } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  dataAiHint: string;
}

const defaultImages: GalleryImage[] = [
    { id: 'gal1', src: '/gg1.jpeg', alt: 'Modern gym layout', dataAiHint: 'modern gym design' },
    { id: 'gal2', src: '/gg2.jpeg', alt: 'Treadmills in a row', dataAiHint: 'gym treadmills' },
    { id: 'gal3', src: '/gg3.jpeg', alt: 'Weight rack with various dumbbells', dataAiHint: 'gym weight rack' },
    { id: 'gal4', src: '/gg4.jpeg', alt: 'Person using a leg press machine', dataAiHint: 'gym leg press' },
    { id: 'gal5', src: '/cc5.jpeg', alt: 'Team celebrating a fitness challenge', dataAiHint: 'team celebration office' },
];


export default function AdminGalleryManagerPage() {
  const { toast } = useToast();
  
  const [newImage, setNewImage] = useState<{ file: File | null; alt: string; dataAiHint: string; src: string }>({
    file: null,
    alt: '',
    dataAiHint: '',
    src: ''
  });
  const [images, setImages] = useState<GalleryImage[]>([]);

  const loadImages = useCallback(() => {
    try {
      const storedImages = localStorage.getItem('sr-fitness-gallery-images');
      if (storedImages) {
        setImages(JSON.parse(storedImages));
      } else {
        // If no images in storage, initialize with defaults
        setImages(defaultImages);
        localStorage.setItem('sr-fitness-gallery-images', JSON.stringify(defaultImages));
      }
    } catch (error) {
      console.error("Could not load images from localStorage", error);
      toast({
        title: "Error Loading Images",
        description: "Could not retrieve gallery images.",
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
      if (file.size > 2 * 1024 * 1024) { // 2MB limit
        toast({
          title: "Image Too Large",
          description: "Please select an image smaller than 2MB.",
          variant: "destructive",
        });
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage(prev => ({ ...prev, file, src: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddImage = () => {
    if (!newImage.file || !newImage.alt.trim()) {
      toast({
        title: "Cannot Add Image",
        description: "Please select an image and provide an alternative text description.",
        variant: "destructive",
      });
      return;
    }

    try {
      const newImageEntry: GalleryImage = {
        id: String(Date.now()),
        src: newImage.src,
        alt: newImage.alt,
        dataAiHint: newImage.dataAiHint,
      };
      
      const updatedImages = [...images, newImageEntry];
      localStorage.setItem('sr-fitness-gallery-images', JSON.stringify(updatedImages));

      toast({
        title: "Image Added Successfully!",
        description: "Your new image is now live in the gallery.",
      });

      setNewImage({ file: null, alt: '', dataAiHint: '', src: '' });
      loadImages();

    } catch (error) {
        console.error("Failed to add image to localStorage:", error);
        toast({
            title: "Upload Failed",
            description: "Could not save the image.",
            variant: "destructive"
        });
    }
  };
  
  const handleDeleteImage = (imageId: string) => {
    try {
      const updatedImages = images.filter(img => img.id !== imageId);
      localStorage.setItem('sr-fitness-gallery-images', JSON.stringify(updatedImages));
      setImages(updatedImages);
      toast({
        title: "Image Deleted",
        description: "The image has been removed from the gallery.",
      });
    } catch (error) {
      console.error("Failed to delete image:", error);
      toast({
        title: "Deletion Failed",
        description: "Could not delete the image.",
        variant: "destructive"
      });
    }
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
            Upload and delete images for the homepage gallery carousel.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid lg:grid-cols-5 gap-8 items-start">
        {/* Editor Column */}
        <div className="lg:col-span-2">
            <Card className="shadow-md sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center">Upload New Image</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  <div>
                    <Label htmlFor="image-file" className="font-semibold text-lg">Image File</Label>
                    <Input 
                      id="image-file" 
                      type="file"
                      accept="image/png, image/jpeg, image/gif"
                      onChange={handleFileChange}
                      className="mt-2 text-base h-11 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                    />
                    {newImage.src && (
                      <div className="mt-4 relative aspect-video rounded-lg overflow-hidden border">
                          <Image src={newImage.src} alt="Selected preview" layout="fill" objectFit="cover" />
                      </div>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="image-alt" className="font-semibold text-lg">Alt Text</Label>
                    <Input 
                      id="image-alt" 
                      value={newImage.alt} 
                      onChange={(e) => setNewImage(prev => ({...prev, alt: e.target.value}))}
                      placeholder="e.g., Team working out" 
                      className="mt-2 text-base h-11"
                    />
                  </div>
                   <div>
                    <Label htmlFor="image-hint" className="font-semibold text-lg">AI Hint (Optional)</Label>
                    <Input 
                      id="image-hint" 
                      value={newImage.dataAiHint} 
                      onChange={(e) => setNewImage(prev => ({...prev, dataAiHint: e.target.value}))}
                      placeholder="e.g., group fitness" 
                      className="mt-2 text-base h-11"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                    <Button 
                        size="lg" 
                        className="w-full" 
                        onClick={handleAddImage}
                        disabled={!newImage.file || !newImage.alt}
                    >
                    <Upload className="mr-2 h-5 w-5" />
                    Add to Gallery
                    </Button>
                </CardFooter>
            </Card>
        </div>

        {/* Manage Posts Column */}
        <div className="lg:col-span-3">
            <Card className="shadow-md">
                <CardHeader>
                    <CardTitle className="flex items-center">
                        <List className="mr-2 h-6 w-6" /> Current Gallery
                    </CardTitle>
                    <CardDescription>View and delete existing images.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="max-h-[80vh] overflow-y-auto pr-2 space-y-4">
                        {images.length === 0 ? (
                            <p className="text-muted-foreground text-center py-8">No images found.</p>
                        ) : (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {images.map(img => (
                                    <div key={img.id} className="relative group">
                                        <div className="aspect-square rounded-md overflow-hidden border">
                                           <Image src={img.src} alt={img.alt} layout="fill" objectFit="cover" data-ai-hint={img.dataAiHint} />
                                        </div>
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <Button
                                                variant="destructive"
                                                size="icon"
                                                onClick={() => handleDeleteImage(img.id)}
                                                aria-label={`Delete image titled ${img.alt}`}
                                            >
                                                <Trash2 className="h-5 w-5" />
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

    