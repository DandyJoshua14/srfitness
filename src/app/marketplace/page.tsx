
"use client";

import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ShoppingCart, Star, Search, Filter, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '@/contexts/cart-context';
import { Skeleton } from '@/components/ui/skeleton';
import { placeholderProducts } from '@/lib/placeholder-data';
import type { Product } from '@/lib/types';


const categories = ['All', 'Equipment', 'Apparel', 'Accessories', 'Supplements'];
const sortOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
];

export default function MarketplacePage() {
  const [allProducts, setAllProducts] = React.useState<Product[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [sortOption, setSortOption] = React.useState('newest');
  const { addToCart } = useCart();

  React.useEffect(() => {
    // Simulate fetching data
    setIsLoading(true);
    setTimeout(() => {
      setAllProducts(placeholderProducts);
      setIsLoading(false);
    }, 500);
  }, []);

  const filteredAndSortedProducts = React.useMemo(() => {
    let products = allProducts.filter(p => 
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
        products.sort((a, b) => b.timestamp - a.timestamp);
        break;
    }
    return products;
  }, [searchTerm, selectedCategory, sortOption, allProducts]);
  
  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id!,
      name: product.name,
      price: product.price,
      image: product.image,
      dataAiHint: product.dataAiHint,
    });
  };

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative bg-secondary text-secondary-foreground py-20 md:py-32 overflow-hidden text-center">
         <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/m-hero/1920/1080"
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
        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
            {[...Array(8)].map((_, i) => (
              <Card key={i} className="h-full flex flex-col overflow-hidden">
                <Skeleton className="aspect-square w-full" />
                <CardContent className="p-4 flex-grow">
                  <Skeleton className="h-4 w-1/3 mb-2" />
                  <Skeleton className="h-5 w-4/5" />
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between items-center">
                  <Skeleton className="h-6 w-1/3" />
                  <Skeleton className="h-8 w-8 rounded-full" />
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : filteredAndSortedProducts.length === 0 ? (
           <div className="text-center py-16 col-span-full">
            <h3 className="text-2xl font-semibold text-muted-foreground">No products found</h3>
            <p className="text-muted-foreground mt-2">Try adjusting your search or filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
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
                    <CardTitle className="text-base sm:text-lg font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">{product.name}</CardTitle>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div className="mb-2 sm:mb-0">
                      <p className="text-lg sm:text-xl font-bold text-primary">${product.price.toFixed(2)}</p>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < product.rating ? 'text-amber-400 fill-amber-400' : 'text-muted-foreground/30'}`} />
                        ))}
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors self-end sm:self-center"
                      onClick={() => handleAddToCart(product)}
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <Plus className="h-5 w-5" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
