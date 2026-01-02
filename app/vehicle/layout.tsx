import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "車両詳細 | FieldBase-K",
  description: "FieldBase-Kのキャンピングカーの詳細情報。充実の装備と快適な車内空間で、家族みんなでゆったりくつろげます。",
  keywords: "キャンピングカー,車両詳細,設備,スペック,レンタル",
  openGraph: {
    title: "車両詳細 | FieldBase-K",
    description: "充実の装備と快適な車内空間のキャンピングカー",
    type: "website",
  },
};

export default function VehicleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
