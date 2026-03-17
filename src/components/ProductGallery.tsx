'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

interface ProductGalleryProps {
  images: string[];
  title: string;
}

export function ProductGallery({ images, title }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // 如果没有图片，显示占位符
  if (!images || images.length === 0) {
    return (
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-0">
          <div className="aspect-square relative bg-gray-700 flex items-center justify-center">
            <p className="text-gray-500">画像がありません</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <Card className="bg-gray-800 border-gray-700 overflow-hidden">
        <CardContent className="p-0">
          <div className="aspect-square relative bg-white">
            <Image
              src={images[selectedIndex]}
              alt={`${title} - 画像 ${selectedIndex + 1}`}
              fill
              className="object-contain transition-opacity duration-300"
              priority
            />
          </div>
        </CardContent>
      </Card>

      {/* Thumbnail Images */}
      {images.length > 1 && (
        <div className="grid grid-cols-7 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`aspect-square relative rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                index === selectedIndex
                  ? 'border-blue-500 ring-2 ring-blue-500/50'
                  : 'border-gray-600 hover:border-gray-400'
              }`}
            >
              <Image
                src={image}
                alt={`${title} - サムネイル ${index + 1}`}
                fill
                className="object-contain"
              />
            </button>
          ))}
        </div>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="text-center text-sm text-gray-400">
          {selectedIndex + 1} / {images.length} 枚
        </div>
      )}
    </div>
  );
}
