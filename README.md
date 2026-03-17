# Wipuku JP 株式会社官网

Wipuku 品牌日本官网，展示电动剃须刀产品，全站日文界面，深色主题。

## 技术栈

- **框架**: Next.js 16 (App Router)
- **UI**: React 19 + shadcn/ui
- **样式**: Tailwind CSS 4
- **语言**: TypeScript 5
- **包管理器**: pnpm

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 启动生产服务器
pnpm start
```

## 部署到 Vercel

### 方法一：通过 Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录 Vercel
vercel login

# 部署
vercel
```

### 方法二：通过 GitHub 集成

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入 GitHub 仓库
3. Vercel 会自动检测 Next.js 项目并部署

## 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   ├── products/          # 产品页面
│   ├── cart/              # 购物车页面
│   └── checkout/          # 结账页面
├── components/            # React 组件
│   ├── ui/               # shadcn/ui 组件
│   ├── Header.tsx        # 导航栏
│   ├── ProductCard.tsx   # 产品卡片
│   └── ProductGallery.tsx # 图片画廊
├── data/
│   └── products.ts       # 产品数据
├── contexts/
│   └── CartContext.tsx   # 购物车状态
└── types/
    └── product.ts        # 类型定义

public/
└── images/               # 产品图片
```

## 产品列表

| 型号 | UPC | 价格 |
|------|-----|------|
| 1211-006 | 607602427930 | ¥30,980 |
| 801-NN | 607602427985 | ¥30,980 |
| BS-9012 | 607602426797 | ¥36,999 |
| RX-900 | 607602427978 | ¥45,980 |

## 自定义域名

在 Vercel 项目设置中添加自定义域名 `wipuku.store`，然后在阿里云域名解析中添加 CNAME 记录指向 Vercel 提供的地址。

## License

All rights reserved. Wipuku JP株式会社
