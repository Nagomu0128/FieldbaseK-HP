import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "FieldBase-Kへのお問い合わせフォーム。ご予約、ご質問、空き状況の確認など、お気軽にお問い合わせください。24時間以内にご返信いたします。電話・メールでもお問い合わせいただけます。",
  keywords: ["キャンピングカー", "お問い合わせ", "予約", "質問", "連絡", "メール", "電話"],
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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
