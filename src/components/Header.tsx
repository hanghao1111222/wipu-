'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';

export function Header() {
  const { getCartCount } = useCart();

  return (
    <header className="border-b bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            Wipuku
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              ホーム
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              製品
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative text-white hover:text-gray-200">
                <ShoppingCart className="h-5 w-5" />
                {getCartCount() > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {getCartCount()}
                  </Badge>
                )}
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
