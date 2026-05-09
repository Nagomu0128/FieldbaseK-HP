import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "車両詳細｜ナッツRV ジョリビー",
  description: "FieldBase-Kがレンタルするキャンピングカー「ナッツRV ジョリビー」の詳細。乗車定員6名・就寝定員5名。家庭用エアコン、FFヒーター、リチウムイオンバッテリー、エボライト走行充電など充実装備で滋賀・関西の旅を快適にサポート。",
  keywords: ["ナッツRV", "ジョリビー", "JolyBee", "キャブコン", "キャンピングカー 滋賀", "キャンピングカー 大津", "車両詳細", "スペック", "装備", "リチウムイオン", "FFヒーター"],
  openGraph: {
    title: "車両詳細｜ナッツRV ジョリビー | FieldBase-K",
    description: "乗車定員6名・就寝定員5名、コンパクトかつ充実装備のキャブコン「ナッツRV ジョリビー」",
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
