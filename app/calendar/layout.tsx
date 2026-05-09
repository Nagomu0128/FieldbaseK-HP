import type { Metadata } from "next";
import Breadcrumb from "@/components/seo/Breadcrumb";

export const metadata: Metadata = {
  title: "空き状況カレンダー",
  description: "FieldBase-K（滋賀・大津のキャンピングカーレンタル）の空き状況をリアルタイムで確認できます。ご希望の日程をチェックして、お問い合わせください。GW、夏休み、年末年始などの繁忙期はお早めのご予約をおすすめします。",
  keywords: ["キャンピングカー 空き状況", "予約状況", "カレンダー", "リアルタイム", "キャンピングカーレンタル 滋賀"],
  openGraph: {
    title: "空き状況カレンダー | FieldBase-K",
    description: "リアルタイムの予約状況をご確認いただけます",
    type: "website",
    url: "https://fieldbase-k.jp/calendar",
  },
  alternates: {
    canonical: "https://fieldbase-k.jp/calendar",
  },
};

export default function CalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Breadcrumb items={[{ name: "空き状況カレンダー", href: "/calendar" }]} />
      {children}
    </>
  );
}
