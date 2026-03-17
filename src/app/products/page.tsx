import { Header } from '@/components/Header';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-4">すべての製品</h1>
          <p className="text-gray-400 text-lg">当社の製品ラインナップをご覧ください</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
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
