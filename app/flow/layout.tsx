import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ご利用の流れ | FieldBase-K",
  description: "FieldBase-Kのキャンピングカーレンタルのご利用方法。予約から返却まで、初めての方も安心の簡単5ステップ。",
  keywords: "キャンピングカー,利用方法,予約方法,流れ,手順",
  openGraph: {
    title: "ご利用の流れ | FieldBase-K",
    description: "予約から返却まで、初めての方も安心の簡単5ステップ",
    type: "website",
  },
};

export default function FlowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
