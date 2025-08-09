
"use client";

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SendHorizonal, Store, Image as ImageIcon, Trash2, List, BadgeDollarSign, PlusCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';

const mockProducts = [
  { id: 'prod1', name: 'SR Pro-Grip Dumbbell Set', category: 'Equipment', price: 129.99, image: 'https://placehold.co/600x600.png', dataAiHint: 'dumbbell set', rating: 5, isNew: true },
  { id: 'prod2', name: 'SR Hydro-Flow Water Bottle', category: 'Accessories', price: 24.99, image: 'https://placehold.co/600x600.png', dataAiHint: 'water bottle gym', rating: 4 },
  { id: 'prod3', name: 'Men\'s Performance Tee', category: 'Apparel', price: 45.00, image: 'https://placehold.co/600x600.png', dataAiHint: 'men fitness shirt', rating: 5 },
];

export default function AdminStoreManagerPage() {
  const { toast } = useToast();

  const [products, setProducts] = useState(mockProducts);
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    price: '',
    image: '',
    dataAiHint: '',
  });

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
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct(prev => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.category || !newProduct.price) {
      toast({ title: "Missing Information", description: "Please fill out all product fields.", variant: "destructive" });
      return;
    }
    const productToAdd = {
      id: `prod${Date.now()}`,
      ...newProduct,
      price: parseFloat(newProduct.price),
      rating: 5, // Default rating
      isNew: true,
    };
    setProducts(prev => [productToAdd, ...prev]);
    setNewProduct({ name: '', category: '', price: '', image: '', dataAiHint: '' });
    toast({ title: "Product Added", description: `${productToAdd.name} has been added to the store.` });
  };
  
  const handleDeleteProduct = (productId: string) => {
    setProducts(prev => prev.filter(p => p.id !== productId));
    toast({ title: "Product Deleted", description: "The product has been removed from the store.", variant: "destructive" });
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
              <Button className="w-full" onClick={handleAddProduct}>
                <SendHorizonal className="mr-2 h-4 w-4"/> Add Product
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
                            <Image src={product.image} alt={product.name} width={50} height={50} className="rounded-md object-cover" />
                            </TableCell>
                            <TableCell className="font-medium">{product.name}</TableCell>
                            <TableCell>{product.category}</TableCell>
                            <TableCell>${product.price.toFixed(2)}</TableCell>
                            <TableCell className="text-right">
                            <Button variant="ghost" size="icon" onClick={() => handleDeleteProduct(product.id)}>
                                <Trash2 className="h-4 w-4 text-destructive" />
                            </Button>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
                {products.length === 0 && <p className="text-center text-muted-foreground py-8">No products in the store yet.</p>}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
