export interface Product {
  id: string;
  brand: string;
  title: string;
  upc: string;
  model: string;
  imageUrl: string; // 主图（用于产品列表）
  images: string[]; // 所有图片（用于详情页）
  features: string[];
  amazonUrl: string;
  jpUrl: string; // 日文链接，用于价格验证
  price: number;
  currency?: string;
}

export interface CartItem extends Product {
  quantity: number;
}
