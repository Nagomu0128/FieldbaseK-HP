import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "車両詳細",
  description: "FieldBase-Kのキャンピングカーの詳細情報。乗車定員6名、就寝定員4名。フルキッチン、冷暖房完備、充実の装備で快適な旅をサポートします。初心者の方も安心してご利用いただけます。",
  keywords: ["キャンピングカー", "車両詳細", "設備", "スペック", "レンタル", "装備", "キッチン", "冷暖房"],
  openGraph: {
    title: "車両詳細 | FieldBase-K",
    description: "乗車定員6名、充実の装備と快適な車内空間のキャンピングカー",
    type: "website",
    url: "https://fieldbase-k.jp/vehicle",
    images: [
      {
        url: "/og-vehicle.jpg",
        width: 1200,
        height: 630,
        alt: "FieldBase-K キャンピングカー",
      },
    ],
  },
  alternates: {
    canonical: "https://fieldbase-k.jp/vehicle",
  },
};

export default function VehicleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
