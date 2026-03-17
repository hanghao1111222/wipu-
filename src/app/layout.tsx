import type { Metadata } from 'next';
import { CartProvider } from '@/contexts/CartContext';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Wipuku JP株式会社',
    template: '%s | Wipuku JP株式会社',
  },
  description: 'Wipuku 公方网站 - 高品质电动剃须刀',
  keywords: ['Wipuku', '电动剃须刀', 'シェーバー', 'メンズシェーバー', 'ひげそり'],
  authors: [{ name: 'Wipuku' }],
  generator: 'Next.js',
  openGraph: {
    title: 'Wipuku JP株式会社',
    description: 'Wipuku 官方网站 - 高品质电动剃须刀',
    url: '/',
    siteName: 'Wipuku JP株式会社',
    locale: 'ja_JP',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`antialiased`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
