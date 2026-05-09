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
    default: "キャンピングカーレンタル 滋賀・大津 | FieldBase-K",
    template: "%s | FieldBase-K",
  },
  description: "滋賀県大津市のキャンピングカーレンタル「FieldBase-K」。ナッツRV ジョリビーを1台貸し切りでご提供。1泊2日16,500円〜。琵琶湖周辺・関西エリアでのキャンプや家族旅行に最適。初めての方も親身にサポートいたします。",
  keywords: [
    "キャンピングカーレンタル",
    "キャンピングカー 滋賀",
    "キャンピングカー 大津",
    "キャンピングカー 関西",
    "ナッツRV ジョリビー",
    "レンタルキャンピングカー",
    "琵琶湖 キャンプ",
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
    title: "キャンピングカーレンタル 滋賀・大津 | FieldBase-K",
    description: "滋賀県大津市のキャンピングカーレンタル。ナッツRV ジョリビーで琵琶湖・関西エリアの旅へ。1泊2日16,500円〜、初めての方も親身にサポート。",
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
    title: "キャンピングカーレンタル 滋賀・大津 | FieldBase-K",
    description: "滋賀県大津市のキャンピングカーレンタル。ナッツRV ジョリビーで琵琶湖・関西エリアの旅へ。",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://fieldbase-k.jp",
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/seo/StructuredData";

const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "AutoRental",
  "@id": "https://fieldbase-k.jp/#business",
  name: "FieldBase-K",
  description:
    "滋賀県大津市のキャンピングカーレンタル。ナッツRV ジョリビーをご用意。家族旅行・キャンプに最適。",
  url: "https://fieldbase-k.jp",
  telephone: "+81-70-9188-3811",
  email: "fieldbasek@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "JP",
    addressRegion: "滋賀県",
    addressLocality: "大津市",
    streetAddress: "松山町6-31",
    postalCode: "520-0025",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "滋賀県" },
    { "@type": "AdministrativeArea", name: "京都府" },
    { "@type": "AdministrativeArea", name: "大阪府" },
    { "@type": "AdministrativeArea", name: "関西" },
  ],
  priceRange: "¥16,500〜",
  image: "https://fieldbase-k.jp/og-image.jpg",
  logo: "https://fieldbase-k.jp/og-image.jpg",
  hasMap: "https://maps.app.goo.gl/PVzS5o7RfNm7uu8F7",
  sameAs: [],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

const websiteData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://fieldbase-k.jp/#website",
  name: "FieldBase-K",
  alternateName: "フィールドベース・ケー",
  url: "https://fieldbase-k.jp",
  inLanguage: "ja",
  publisher: { "@id": "https://fieldbase-k.jp/#business" },
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
