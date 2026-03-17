'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-gray-800 border-gray-700">
      <Link href={`/products/${product.id}`}>
        <CardContent className="p-0">
          <div className="aspect-square relative bg-gray-100">
            <Image
              src={product.imageUrl}
              alt={product.title}
              fill
              className="object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4 space-y-2">
            <Badge variant="secondary" className="text-xs bg-blue-600 text-white hover:bg-blue-700">
              {product.brand}
            </Badge>
            <h3 className="font-semibold text-lg line-clamp-2 min-h-[3.5rem] text-white">
              {product.title}
            </h3>
            <div className="text-sm text-gray-400 space-y-1">
              <p>
                <span className="font-medium">UPC:</span> {product.upc}
              </p>
              <p>
                <span className="font-medium">モデル:</span> {product.model}
              </p>
            </div>
            <p className="text-2xl font-bold text-blue-400">
              ¥{product.price.toLocaleString()}
            </p>
          </div>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => addToCart(product)}
          className="w-full bg-blue-600 hover:bg-blue-700"
          size="lg"
        >
          <ShoppingBag className="mr-2 h-5 w-5" />
          カートに追加
        </Button>
      </CardFooter>
    </Card>
  );
}
