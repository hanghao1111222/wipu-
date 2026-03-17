'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/contexts/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        
        <div className="container mx-auto px-4 py-20">
          <Card className="max-w-md mx-auto bg-gray-800 border-gray-700">
            <CardContent className="p-12 text-center">
              <ShoppingBag className="w-16 h-16 mx-auto text-gray-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2">カートは空です</h2>
              <p className="text-gray-400 mb-6">まだ商品が追加されていません</p>
              <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/">ショッピングを始める</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold">カート ({getCartCount()} 件の商品)</h1>
        </div>
      </section>

      {/* Cart Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <Card key={item.id} className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    {/* Product Image */}
                    <div className="w-32 h-32 flex-shrink-0 relative bg-white rounded-lg overflow-hidden">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <Link
                          href={`/products/${item.id}`}
                          className="font-semibold text-lg hover:text-blue-400 transition-colors"
                        >
                          {item.title}
                        </Link>
                        <p className="text-sm text-gray-400 mt-1">
                          {item.brand} | {item.model}
                        </p>
                        <p className="text-sm text-gray-400">UPC: {item.upc}</p>
                      </div>

                      <div className="flex items-center justify-between">
                        {/* Quantity Control */}
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-gray-400">数量:</span>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 border-gray-600 hover:bg-gray-700"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 border-gray-600 hover:bg-gray-700"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        {/* Price and Remove */}
                        <div className="flex items-center gap-6">
                          <p className="text-2xl font-bold text-blue-400">
                            ¥{(item.price * item.quantity).toLocaleString()}
                          </p>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-400 hover:bg-red-950"
                          >
                            <Trash2 className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 bg-gray-800 border-gray-700">
              <CardContent className="p-6 space-y-6">
                <h2 className="text-xl font-bold">注文概要</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">商品総数</span>
                    <span>{getCartCount()} 件</span>
                  </div>
                  <Separator className="bg-gray-700" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>合計</span>
                    <span className="text-blue-400">¥{getCartTotal().toLocaleString()}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg" asChild>
                    <Link href="/checkout">レジに進む</Link>
                  </Button>
                  <Button variant="outline" className="w-full border-gray-600 hover:bg-gray-700" asChild>
                    <Link href="/">ショッピングを続ける</Link>
                  </Button>
                </div>

                <div className="text-xs text-gray-400 text-center space-y-1">
                  <p>すべての価格には税金が含まれています</p>
                  <p>安全な決済保証</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Wipuku JP株式会社. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
