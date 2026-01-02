import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "よくある質問（FAQ）",
  description: "FieldBase-Kのキャンピングカーレンタルに関するよくある質問。予約方法、料金、車両スペック、利用当日の流れ、キャンセルポリシーなど、初めての方の疑問にお答えします。",
  keywords: ["キャンピングカー", "FAQ", "よくある質問", "Q&A", "ヘルプ", "予約方法", "初心者"],
  openGraph: {
    title: "よくある質問（FAQ） | FieldBase-K",
    description: "予約、料金、車両、利用方法など、お客様からよくいただくご質問にお答えします",
    type: "website",
    url: "https://fieldbase-k.jp/faq",
    images: [
      {
        url: "/og-faq.jpg",
        width: 1200,
        height: 630,
        alt: "FieldBase-K FAQ",
      },
    ],
  },
  alternates: {
    canonical: "https://fieldbase-k.jp/faq",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
