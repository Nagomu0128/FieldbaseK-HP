# FieldBase-K

キャンピングカーレンタル事業のウェブサイト

## 開発環境

```bash
npm install
npm run dev
```

http://localhost:3000 で起動

## 本番ビルド

```bash
npm run build
npm start
```

## 技術スタック

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Framer Motion

## デプロイ

```bash
vercel
```

## ディレクトリ構成

```
app/
├── page.tsx           # ホーム
├── vehicle/           # 車両詳細
├── pricing/           # 料金
├── flow/              # ご利用の流れ
├── calendar/          # 空き状況
├── contact/           # お問い合わせ
└── faq/               # FAQ

components/
├── Header.tsx
├── Footer.tsx
├── Container.tsx
├── seo/
│   └── StructuredData.tsx
└── ui/                # shadcn/ui components
```
