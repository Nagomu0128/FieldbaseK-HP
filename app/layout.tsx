import type { Metadata } from "next";
import { Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fieldbase-k.jp'),
  title: {
    default: "FieldBase-K | キャンピングカーレンタル",
    template: "%s | FieldBase-K",
  },
  description: "FieldBase-Kは、家族での思い出づくりに最適なキャンピングカーレンタルサービスです。初めての方でも安心してご利用いただけるよう、丁寧なサポートを提供しています。清潔で快適な車内、充実の装備、24時間サポート体制で安心のキャンプ旅行をお楽しみいただけます。",
  keywords: [
    "キャンピングカー",
    "キャンピングカーレンタル",
    "レンタルキャンピングカー",
    "家族旅行",
    "アウトドア",
    "車中泊",
    "キャンプ",
    "RVレンタル",
    "FieldBase-K",
    "初心者歓迎",
    "子連れ旅行",
  ],
  authors: [{ name: "FieldBase-K" }],
  creator: "FieldBase-K",
  publisher: "FieldBase-K",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://fieldbase-k.jp",
    siteName: "FieldBase-K",
    title: "FieldBase-K | キャンピングカーレンタル",
    description: "家族での思い出づくりに最適なキャンピングカーレンタルサービス。初めての方でも安心、24時間サポート付き。",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FieldBase-K キャンピングカーレンタル",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FieldBase-K | キャンピングカーレンタル",
    description: "家族での思い出づくりに最適なキャンピングカーレンタルサービス",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://fieldbase-k.jp",
  },
  verification: {
    google: "google-site-verification-code", // 要設定
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/seo/StructuredData";

const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "AutoRental",
  name: "FieldBase-K",
  description: "家族での思い出づくりに最適なキャンピングカーレンタルサービス",
  url: "https://fieldbase-k.jp",
  telephone: "000-0000-0000", // 要設定
  email: "info@fieldbase-k.jp", // 要設定
  address: {
    "@type": "PostalAddress",
    addressCountry: "JP",
    addressRegion: "都道府県名", // 要設定
    addressLocality: "市区町村名", // 要設定
    streetAddress: "番地等", // 要設定
  },
  priceRange: "¥¥",
  image: "https://fieldbase-k.jp/og-image.jpg",
  sameAs: [
    // SNSのURLを追加
    // "https://www.facebook.com/fieldbasek",
    // "https://www.instagram.com/fieldbasek",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "10:00",
      closes: "18:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "1",
  },
};

const websiteData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "FieldBase-K",
  url: "https://fieldbase-k.jp",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://fieldbase-k.jp/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <StructuredData data={localBusinessData} />
        <StructuredData data={websiteData} />
      </head>
      <body
        className={`${notoSansJP.variable} ${inter.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
