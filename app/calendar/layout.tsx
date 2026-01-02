import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "空き状況カレンダー | FieldBase-K",
  description: "FieldBase-Kのキャンピングカーレンタルの空き状況をリアルタイムで確認。ご希望の日程をチェックしてください。",
  keywords: "キャンピングカー,空き状況,予約状況,カレンダー,予約",
  openGraph: {
    title: "空き状況カレンダー | FieldBase-K",
    description: "リアルタイムの予約状況をご確認いただけます",
    type: "website",
  },
};

export default function CalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
