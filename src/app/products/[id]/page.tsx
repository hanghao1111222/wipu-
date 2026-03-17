import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { products } from '@/data/products';
import { ProductGallery } from '@/components/ProductGallery';

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white">
              ホーム
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white">
              製品
            </Link>
            <span>/</span>
            <span className="text-white font-medium">{product.title}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <ProductGallery images={product.images} title={product.title} />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-4 bg-blue-600 text-white hover:bg-blue-700">
                {product.brand}
              </Badge>
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
              <p className="text-4xl font-bold text-blue-500 mb-4">
                ¥{product.price.toLocaleString()}
              </p>
            </div>

            <Separator className="bg-gray-700" />

            {/* Product Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">製品詳細</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-400 mb-1">UPC コード</p>
                  <p className="font-medium">{product.upc}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">モデル</p>
                  <p className="font-medium">{product.model}</p>
                </div>
              </div>
            </div>

            <Separator className="bg-gray-700" />

            {/* Features */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">製品特徴</h2>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator className="bg-gray-700" />

            {/* Links */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">関連リンク</h2>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Amazon リンク</p>
                  <a
                    href={product.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline break-all"
                  >
                    {product.amazonUrl}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">日本語リンク（価格確認）</p>
                  <a
                    href={product.jpUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline break-all"
                  >
                    {product.jpUrl}
                  </a>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="pt-6">
              <Button size="lg" className="w-full text-lg bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/cart">カートを見る</Link>
              </Button>
            </div>
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
