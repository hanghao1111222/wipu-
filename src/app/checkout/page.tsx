'use client';

import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';

export default function CheckoutPage() {
  const { cart, getCartTotal, getCartCount, clearCart } = useCart();

  const handleCheckout = () => {
    alert('ご購入ありがとうございます！これはデモページです。実際の決済機能には決済ゲートウェイ（Stripe、PayPalなど）の統合が必要です。');
    clearCart();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold">レジ</h1>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Order Summary */}
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-6">注文概要</h2>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-0">
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-gray-400">数量: {item.quantity}</p>
                    </div>
                    <p className="font-semibold text-blue-400">
                      ¥{(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-700">
                  <div className="flex justify-between text-xl font-bold">
                    <span>合計</span>
                    <span className="text-blue-400">¥{getCartTotal().toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Notice */}
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">決済について</h2>
              <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-4">
                <p className="text-yellow-200">
                  <strong>注意：</strong>これはデモサイトです。実際の決済機能には決済ゲートウェイ（Stripe、PayPalなど）の統合が必要です。
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex gap-4">
            <Button
              size="lg"
              className="flex-1 bg-blue-600 hover:bg-blue-700"
              onClick={handleCheckout}
              disabled={cart.length === 0}
            >
              注文を確定 (¥{getCartTotal().toLocaleString()})
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 hover:bg-gray-700" asChild>
              <a href="/cart">カートに戻る</a>
            </Button>
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
