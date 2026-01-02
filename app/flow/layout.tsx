import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ご利用の流れ",
  description: "FieldBase-Kのキャンピングカーレンタルのご利用方法。お問い合わせ、予約確定、車両受取、ご利用、返却までの簡単5ステップ。初めての方でも安心してご利用いただけるよう、丁寧にサポートいたします。",
  keywords: ["キャンピングカー", "利用方法", "予約方法", "流れ", "手順", "初心者", "使い方"],
  openGraph: {
    title: "ご利用の流れ | FieldBase-K",
    description: "予約から返却まで、初めての方も安心の簡単5ステップ",
    type: "website",
    url: "https://fieldbase-k.jp/flow",
  },
  alternates: {
    canonical: "https://fieldbase-k.jp/flow",
  },
};

export default function FlowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
