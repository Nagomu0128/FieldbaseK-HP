import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "料金プラン | FieldBase-K",
  description: "FieldBase-Kのキャンピングカーレンタル料金。明確でわかりやすい料金体系で、安心してご利用いただけます。",
  keywords: "キャンピングカー,料金,レンタル料金,価格,プラン",
  openGraph: {
    title: "料金プラン | FieldBase-K",
    description: "明確でわかりやすい料金体系",
    type: "website",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
