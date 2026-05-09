import type { Metadata } from "next";
import Breadcrumb from "@/components/seo/Breadcrumb";
import StructuredData from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "ご利用の流れ｜予約から返却まで",
  description: "FieldBase-K（滋賀・大津のキャンピングカーレンタル）のご利用方法。お問い合わせ→予約確定→車両受取→ご利用→返却の簡単ステップ。初めての方でも安心してご利用いただけるよう、丁寧にサポートいたします。",
  keywords: ["キャンピングカー 予約方法", "利用方法", "流れ", "手順", "初心者", "使い方", "受取 返却", "キャンピングカーレンタル 滋賀"],
  openGraph: {
    title: "ご利用の流れ｜予約から返却まで | FieldBase-K",
    description: "予約から返却まで、初めての方も安心の簡単ステップ",
    type: "website",
    url: "https://fieldbase-k.jp/flow",
  },
  alternates: {
    canonical: "https://fieldbase-k.jp/flow",
  },
};

const howToData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "FieldBase-K キャンピングカーレンタルのご利用手順",
  description:
    "FieldBase-Kのキャンピングカーレンタルをご利用いただくための予約から返却までの手順です。",
  totalTime: "PT30M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "お問い合わせ・空き状況確認",
      text: "公式サイトの空き状況カレンダーで利用希望日の空きを確認し、お問い合わせフォームから連絡します。",
      url: "https://fieldbase-k.jp/contact",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "予約確定・お支払い",
      text: "詳細をご相談の上、予約を確定し、所定の方法でお支払いを完了します。",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "車両受取・操作説明",
      text: "受取場所で運転免許証の確認、車両の操作説明、装備の使い方をお伝えします。",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "ご利用・旅行",
      text: "安全運転でキャンピングカーの旅をお楽しみください。営業時間内のサポートで安心です。",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "返却",
      text: "満タン返却で指定場所にご返却ください。簡単な車内清掃のみお願いしています。",
    },
  ],
};

export default function FlowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Breadcrumb items={[{ name: "ご利用の流れ", href: "/flow" }]} />
      <StructuredData data={howToData} />
      {children}
    </>
  );
}
