
"use client";

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SendHorizonal, Store, Image as ImageIcon, Trash2, List, PlusCircle, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import { addProduct, getProducts, deleteProduct, Product } from '@/services/firestore';
import { Skeleton } from '@/components/ui/skeleton';

export default function AdminStoreManagerPage() {
  const { toast } = useToast();

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPublishing, setIsPublishing] = useState(false);

  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    price: '',
    image: '',
    dataAiHint: '',
  });

  const loadProducts = useCallback(async () => {
    setIsLoading(true);
    try {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    } catch (error) {
      console.error("Could not load products from Firestore", error);
      toast({
        title: "Error Loading Products",
        description: "Could not retrieve products from the database.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setNewProduct(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value: string) => {
    setNewProduct(prev => ({ ...prev, category: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
       if (file.size > 2 * 1024 * 1024) { // 2MB limit
        toast({ title: "Image Too Large", description: "Please select an image smaller than 2MB.", variant: "destructive" });
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct(prev => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddProduct = async () => {
    if (!newProduct.name || !newProduct.category || !newProduct.price) {
      toast({ title: "Missing Information", description: "Please fill out all product fields.", variant: "destructive" });
      return;
    }
    setIsPublishing(true);

    try {
      const productToAdd: Omit<Product, 'id' | 'timestamp'> = {
        ...newProduct,
        price: parseFloat(newProduct.price),
        image: newProduct.image || 'https://placehold.co/600x600.png',
        dataAiHint: newProduct.dataAiHint || 'product image',
        rating: 5, // Default rating
        isNew: true,
      };

      await addProduct(productToAdd);

      toast({ title: "Product Added", description: `${newProduct.name} has been added to the store.` });

      // Clear the form and reload the products from Firestore
      setNewProduct({ name: '', category: '', price: '', image: '', dataAiHint: '' });
      loadProducts();

    } catch (error) {
        console.error("Failed to add product:", error);
        toast({ title: "Failed to Add", description: "Could not save the product. Please try again.", variant: "destructive" });
    } finally {
        setIsPublishing(false);
    }
  };
  
  const handleDeleteProduct = async (productId: string) => {
    // Keep original products in case of failure
    const originalProducts = [...products];
    // Optimistic UI update
    setProducts(prev => prev.filter(p => p.id !== productId));
    
    try {
        await deleteProduct(productId);
        toast({ title: "Product Deleted", description: "The product has been removed from the store." });
    } catch(error) {
        console.error("Failed to delete product:", error);
        toast({ title: "Deletion Failed", description: "Could not delete the product.", variant: "destructive" });
        // Revert UI on failure
        setProducts(originalProducts);
    }
  };

  return (
    <div className="space-y-8">
      <Card className="shadow-lg border-primary/20">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-primary flex items-center">
            <Store className="mr-3 h-8 w-8" />
            Store Manager
          </CardTitle>
          <CardDescription>
            Add, view, and manage products for the SR Fitness Marketplace.
          </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="grid lg:grid-cols-5 gap-8 items-start">
        {/* Add Product Form */}
        <div className="lg:col-span-2">
          <Card className="shadow-md sticky top-24">
            <CardHeader>
              <CardTitle className="flex items-center">
                <PlusCircle className="mr-2 h-6 w-6"/> Add New Product
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Product Name</Label>
                <Input id="name" value={newProduct.name} onChange={handleInputChange} placeholder="e.g., Performance Tee" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select onValueChange={handleSelectChange} value={newProduct.category}>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Apparel">Apparel</SelectItem>
                      <SelectItem value="Equipment">Equipment</SelectItem>
                      <SelectItem value="Accessories">Accessories</SelectItem>
                      <SelectItem value="Supplements">Supplements</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="price">Price ($)</Label>
                  <Input id="price" type="number" value={newProduct.price} onChange={handleInputChange} placeholder="e.g., 45.00" />
                </div>
              </div>
               <div>
                  <Label htmlFor="dataAiHint">Image Search Hint</Label>
                  <Input id="dataAiHint" value={newProduct.dataAiHint} onChange={handleInputChange} placeholder="e.g., men fitness shirt" />
                </div>
              <div>
                <Label htmlFor="image" className="flex items-center"><ImageIcon className="mr-2 h-4 w-4"/> Product Image</Label>
                <Input id="image" type="file" accept="image/*" onChange={handleImageUpload} className="mt-1 file:text-primary" />
                 {newProduct.image && <Image src={newProduct.image} alt="Preview" width={100} height={100} className="mt-2 rounded-md object-cover" />}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={handleAddProduct} disabled={isPublishing || !newProduct.name}>
                {isPublishing ? <Loader2 className="mr-2 h-4 w-4 animate-spin"/> : <SendHorizonal className="mr-2 h-4 w-4"/>}
                {isPublishing ? 'Adding...' : 'Add Product'}
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Product List */}
        <div className="lg:col-span-3">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center"><List className="mr-2 h-6 w-6" /> Current Products</CardTitle>
            </CardHeader>
            <CardContent>
                {isLoading ? (
                    <div className="space-y-4">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="flex items-center space-x-4">
                              <Skeleton className="h-12 w-12 rounded-md" />
                              <div className="space-y-2 flex-grow">
                                  <Skeleton className="h-4 w-4/5" />
                                  <Skeleton className="h-3 w-1/3" />
                              </div>
                              <Skeleton className="h-8 w-8 rounded-full" />
                          </div>
                        ))}
                    </div>
                ) : products.length === 0 ? (
                    <p className="text-center text-muted-foreground py-8">No products in the store yet.</p>
                ) : (
                    <Table>
                        <TableHeader>
                            <TableRow>
                            <TableHead className="w-[80px]">Image</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {products.map(product => (
                            <TableRow key={product.id}>
                                <TableCell>
                                <Image src={product.image} alt={product.name} width={50} height={50} className="rounded-md object-cover" data-ai-hint={product.dataAiHint} />
                                </TableCell>
                                <TableCell className="font-medium">{product.name}</TableCell>
                                <TableCell>{product.category}</TableCell>
                                <TableCell>${product.price.toFixed(2)}</TableCell>
                                <TableCell className="text-right">
                                <Button variant="ghost" size="icon" onClick={() => handleDeleteProduct(product.id!)}>
                                    <Trash2 className="h-4 w-4 text-destructive" />
                                </Button>
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

    
    