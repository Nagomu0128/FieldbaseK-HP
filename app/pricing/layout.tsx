import type { Metadata } from "next";
import Breadcrumb from "@/components/seo/Breadcrumb";

export const metadata: Metadata = {
  title: "料金プラン｜1泊2日16,500円〜",
  description: "FieldBase-Kのキャンピングカーレンタル料金（滋賀・大津）。1泊2日16,500円〜、長期割引・ショートプランあり。保険料・基本装備込みで明朗会計。シーズン料金やキャンセルポリシーもこちらで確認できます。",
  keywords: ["キャンピングカー 料金", "キャンピングカーレンタル 滋賀 料金", "1泊2日", "16500円", "長期割引", "格安", "保険込み", "プラン"],
  openGraph: {
    title: "料金プラン｜1泊2日16,500円〜 | FieldBase-K",
    description: "1泊2日16,500円〜。保険料・基本装備込みの明朗会計。",
    type: "website",
    url: "https://fieldbase-k.jp/pricing",
    images: [
      {
        url: "/og-pricing.jpg",
        width: 1200,
        height: 630,
        alt: "FieldBase-K 料金プラン",
      },
    ],
  },
  alternates: {
    canonical: "https://fieldbase-k.jp/pricing",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Breadcrumb items={[{ name: "料金プラン", href: "/pricing" }]} />
      {children}
    </>
  );
}
