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
  title: "FieldBase-K | キャンピングカーレンタル",
  description: "FieldBase-Kは、家族での思い出づくりに最適なキャンピングカーレンタルサービスです。初めての方でも安心してご利用いただけるよう、丁寧なサポートを提供しています。",
  keywords: "キャンピングカー,レンタル,家族旅行,アウトドア,FieldBase-K",
  openGraph: {
    title: "FieldBase-K | キャンピングカーレンタル",
    description: "家族での思い出づくりに最適なキャンピングカーレンタルサービス",
    type: "website",
    locale: "ja_JP",
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
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
