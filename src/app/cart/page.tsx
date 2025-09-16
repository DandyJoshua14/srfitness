
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/contexts/cart-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ShoppingCart, Trash2, ArrowRight, Info } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, cartCount, cartTotal } = useCart();
  const { toast } = useToast();

  const handleCheckout = () => {
    toast({
      title: 'Checkout Initiated (Conceptual)',
      description: 'In a real app, this would take you to the payment page.',
    });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <ShoppingCart className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
          Your Shopping Cart
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          Review your items and proceed to checkout.
        </p>
      </div>

      {cartItems.length === 0 ? (
        <Card className="text-center py-16 max-w-lg mx-auto shadow-xl">
            <CardContent className="space-y-4">
                 <h2 className="text-2xl font-semibold text-muted-foreground">Your cart is empty</h2>
                 <p className="text-muted-foreground">Looks like you haven't added any items yet.</p>
                 <Button asChild className="mt-4 font-headline text-lg">
                    <Link href="/marketplace">Start Shopping</Link>
                 </Button>
            </CardContent>
        </Card>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>Your Items ({cartCount})</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px] hidden md:table-cell">Image</TableHead>
                      <TableHead>Product</TableHead>
                      <TableHead className="text-center">Quantity</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                      <TableHead className="w-[50px]">Remove</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cartItems.map(item => (
                      <TableRow key={item.id}>
                        <TableCell className="hidden md:table-cell">
                          <Image src={item.image} alt={item.name} width={64} height={64} className="rounded-md object-cover" data-ai-hint={item.dataAiHint} />
                        </TableCell>
                        <TableCell className="font-medium">
                          <p className="text-foreground">{item.name}</p>
                          <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                        </TableCell>
                        <TableCell>
                          <Input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                            className="w-16 mx-auto text-center"
                          />
                        </TableCell>
                        <TableCell className="text-right font-medium text-foreground">${(item.price * item.quantity).toFixed(2)}</TableCell>
                        <TableCell className="text-center">
                          <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="shadow-xl sticky top-28">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping (est.)</span>
                  <span>$5.00</span>
                </div>
                 <div className="flex justify-between text-muted-foreground">
                  <span>Taxes (est.)</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between font-bold text-lg text-foreground pt-2 border-t border-border">
                  <span>Total</span>
                  <span>${(cartTotal + 5.00).toFixed(2)}</span>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                 <Button size="lg" className="w-full font-headline text-xl" onClick={handleCheckout}>
                  Proceed to Checkout <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                 <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription className="text-xs">
                        This is a conceptual cart. Checkout functionality is not implemented.
                    </AlertDescription>
                 </Alert>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
