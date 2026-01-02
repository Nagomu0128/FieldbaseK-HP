import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | FieldBase-K",
  description: "FieldBase-Kへのお問い合わせフォーム。ご質問・ご予約など、お気軽にお問い合わせください。",
  keywords: "キャンピングカー,お問い合わせ,予約,質問,連絡",
  openGraph: {
    title: "お問い合わせ | FieldBase-K",
    description: "ご質問・ご予約など、お気軽にお問い合わせください",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
