import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "料金プラン",
  description: "FieldBase-Kのキャンピングカーレンタル料金。1泊2日から長期利用まで、明確でわかりやすい料金体系。シーズン料金、オプション装備、キャンセルポリシーも掲載。保険料込みで安心してご利用いただけます。",
  keywords: ["キャンピングカー", "料金", "レンタル料金", "価格", "プラン", "1泊2日", "格安", "保険込み"],
  openGraph: {
    title: "料金プラン | FieldBase-K",
    description: "1泊2日から長期利用まで、明確でわかりやすい料金体系",
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
  return <>{children}</>;
}
