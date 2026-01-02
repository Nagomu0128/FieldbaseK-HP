import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "よくある質問 | FieldBase-K",
  description: "FieldBase-Kのキャンピングカーレンタルに関するよくある質問。予約、料金、車両、利用方法などについてお答えします。",
  keywords: "キャンピングカー,FAQ,よくある質問,Q&A,ヘルプ",
  openGraph: {
    title: "よくある質問 | FieldBase-K",
    description: "お客様からよくいただくご質問にお答えします",
    type: "website",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
