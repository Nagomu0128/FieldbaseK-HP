import type { Metadata } from "next";
import Breadcrumb from "@/components/seo/Breadcrumb";
import StructuredData from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "お問い合わせ・ご予約",
  description: "滋賀・大津のキャンピングカーレンタル「FieldBase-K」へのお問い合わせフォーム。ご予約、ご質問、空き状況の確認など、お気軽にお問い合わせください。電話（070-9188-3811）・メール（fieldbasek@gmail.com）でもご連絡いただけます。",
  keywords: ["キャンピングカー お問い合わせ", "キャンピングカー 予約", "FieldBase-K", "滋賀 大津", "メール", "電話"],
  openGraph: {
    title: "お問い合わせ | FieldBase-K",
    description: "ご予約、ご質問など、お気軽にお問い合わせください",
    type: "website",
    url: "https://fieldbase-k.jp/contact",
  },
  alternates: {
    canonical: "https://fieldbase-k.jp/contact",
  },
};

const contactPageData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "FieldBase-K お問い合わせ",
  url: "https://fieldbase-k.jp/contact",
  mainEntity: {
    "@type": "Organization",
    name: "FieldBase-K",
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
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+81-70-9188-3811",
      contactType: "customer support",
      areaServed: "JP",
      availableLanguage: "ja",
    },
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Breadcrumb items={[{ name: "お問い合わせ", href: "/contact" }]} />
      <StructuredData data={contactPageData} />
      {children}
    </>
  );
}
