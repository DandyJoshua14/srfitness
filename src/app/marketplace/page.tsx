
"use client";

import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ShoppingCart, Star, Search, Filter, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

const mockProducts = [
  { id: 'prod1', name: 'SR Pro-Grip Dumbbell Set', category: 'Equipment', price: 129.99, image: 'https://placehold.co/600x600.png', dataAiHint: 'dumbbell set', rating: 5, isNew: true },
  { id: 'prod2', name: 'SR Hydro-Flow Water Bottle', category: 'Accessories', price: 24.99, image: 'https://placehold.co/600x600.png', dataAiHint: 'water bottle gym', rating: 4 },
  { id: 'prod3', name: 'Men\'s Performance Tee', category: 'Apparel', price: 45.00, image: 'https://placehold.co/600x600.png', dataAiHint: 'men fitness shirt', rating: 5 },
  { id: 'prod4', name: 'Women\'s Flex Leggings', category: 'Apparel', price: 65.00, image: 'https://placehold.co/600x600.png', dataAiHint: 'women leggings gym', rating: 5 },
  { id: 'prod5', name: 'SR Elite Yoga Mat', category: 'Equipment', price: 79.99, image: 'https://placehold.co/600x600.png', dataAiHint: 'yoga mat', rating: 4 },
  { id: 'prod6', name: 'SR-21 Pre-Workout Fuel', category: 'Supplements', price: 39.99, image: 'https://placehold.co/600x600.png', dataAiHint: 'supplement powder tub', rating: 4, isNew: true },
  { id: 'prod7', name: 'Gym-Ready Duffel Bag', category: 'Accessories', price: 55.00, image: 'https://placehold.co/600x600.png', dataAiHint: 'gym bag', rating: 5 },
  { id: 'prod8', name: 'Women\'s Aero-Tank', category: 'Apparel', price: 35.00, image: 'https://placehold.co/600x600.png', dataAiHint: 'women fitness tanktop', rating: 4 },
];

const categories = ['All', 'Equipment', 'Apparel', 'Accessories', 'Supplements'];
const sortOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
];

export default function MarketplacePage() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [sortOption, setSortOption] = React.useState('newest');
  const { toast } = useToast();

  const filteredAndSortedProducts = React.useMemo(() => {
    let products = mockProducts.filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'All' || p.category === selectedCategory)
    );

    switch (sortOption) {
      case 'price-asc':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        products.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
      default:
        products.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }
    return products;
  }, [searchTerm, selectedCategory, sortOption]);
  
  const handleAddToCart = (productName: string) => {
    toast({
      title: "Item Added (Conceptual)",
      description: `${productName} has been added to your cart.`,
    });
  };

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative bg-secondary text-secondary-foreground py-20 md:py-32 overflow-hidden text-center">
         <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1920x1080.png"
            alt="Stylish fitness gear"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
            data-ai-hint="fitness gear stylish"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-secondary"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ShoppingCart className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
            SR Fitness Marketplace
          </h1>
          <p className="text-lg sm:text-xl text-secondary-foreground/80 max-w-3xl mx-auto mb-8">
            Premium gear, apparel, and supplements to elevate your fitness journey.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filters and Sorting */}
        <Card className="mb-12 p-4 md:p-6 shadow-lg border-border bg-card">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full md:flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search products..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex w-full md:w-auto gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(cat => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}
                </SelectContent>
              </Select>
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map(opt => <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredAndSortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="h-full flex flex-col overflow-hidden group transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl hover:border-primary/50">
                <CardHeader className="p-0 relative">
                  <div className="aspect-square w-full relative overflow-hidden">
                    <Image 
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={product.dataAiHint}
                    />
                  </div>
                  {product.isNew && <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">NEW</Badge>}
                </CardHeader>
                <CardContent className="p-4 flex-grow">
                  <Badge variant="secondary" className="mb-2 text-xs bg-muted text-muted-foreground">{product.category}</Badge>
                  <CardTitle className="text-lg font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">{product.name}</CardTitle>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between items-center">
                  <div>
                    <p className="text-xl font-bold text-primary">${product.price.toFixed(2)}</p>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < product.rating ? 'text-amber-400 fill-amber-400' : 'text-muted-foreground/30'}`} />
                      ))}
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors"
                    onClick={() => handleAddToCart(product.name)}
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <Plus className="h-5 w-5" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-16 col-span-full">
            <h3 className="text-2xl font-semibold text-muted-foreground">No products found</h3>
            <p className="text-muted-foreground mt-2">Try adjusting your search or filter.</p>
          </div>
        )}
      </main>
    </div>
  );
}
