"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/Container";
import Reveal from "@/components/motion/Reveal";
import PageIntro from "@/components/site/PageIntro";
import SectionHeading from "@/components/site/SectionHeading";
import StructuredData from "@/components/seo/StructuredData";
import {
  Calendar,
  CreditCard,
  Car,
  Users,
  XCircle,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const faqCategories = [
  {
    id: "reservation",
    title: "予約について",
    icon: Calendar,
    faqs: [
      {
        q: "予約はいつから可能ですか？",
        a: "ご利用予定日の3ヶ月前から予約を受け付けております。繁忙期（GW、夏休み、年末年始等）はお早めのご予約をおすすめします。",
      },
      {
        q: "予約の変更はできますか？",
        a: "ご利用日の7日前までであれば、空きがある場合に限り変更可能です。お早めにご連絡ください。",
      },
      {
        q: "当日の予約は可能ですか？",
        a: "空きがあれば可能ですが、車両の準備や説明のため、できる限り前日までにご予約いただくことをおすすめします。",
      },
    ],
  },
  {
    id: "pricing",
    title: "料金について",
    icon: CreditCard,
    faqs: [
      {
        q: "料金にはどこまで含まれていますか？",
        a: "基本料金には車両レンタル料、保険料、基本装備使用料、サポート料が含まれます。燃料代、高速道路料金、駐車場料金、キャンプ場利用料は別途お客様負担となります。",
      },
      {
        q: "支払い方法は何がありますか？",
        a: "現状、現金、銀行振込のみとなります。",
      },
      {
        q: "延長料金はどうなりますか？",
        a: "事前にご連絡いただければ、空きがある場合に限り延長可能です。延長料金は通常料金に準じますが、詳細はお問い合わせください。",
      },
      {
        q: "学割や団体割引はありますか？",
        a: "申し訳ございませんが、現在は割引制度はございません。長期レンタルの場合は特別料金をご用意できる場合がありますので、ご相談ください。",
      },
    ],
  },
  {
    id: "vehicle",
    title: "車両について",
    icon: Car,
    faqs: [
      {
        q: "運転に必要な免許は？",
        a: "普通自動車免許（AT限定可）で運転可能です。ただし、高さ制限等にご注意いただく必要があります。",
      },
      {
        q: "何人まで乗車できますか？",
        a: "乗車定員は6名、就寝定員は5名です。詳しくは車両詳細ページをご覧ください。",
      },
      {
        q: "ペットは同乗可能ですか？",
        a: "申し訳ございませんが, ペット同乗はお断りさせていただいております。",
      },
      {
        q: "車内で喫煙はできますか？",
        a: "車内は全面禁煙です。喫煙された場合、クリーニング費用として追加料金が発生します。",
      },
      {
        q: "初めてでも運転できますか？",
        a: "はい、出発前に丁寧に操作説明を行いますのでご安心ください。走行中も営業時間内はサポート体制でフォローいたします。",
      },
    ],
  },
  {
    id: "usage",
    title: "利用当日について",
    icon: Users,
    faqs: [
      {
        q: "受取・返却の時間は？",
        a: "基本的に9:00〜18:00の間で調整させていただきます。ご希望の時間があればご相談ください。",
      },
      {
        q: "受取・返却場所は？",
        a: "弊社指定の場所での受取・返却となります。詳細はご予約時にご案内いたします。",
      },
      {
        q: "当日の持ち物は？",
        a: "運転免許証（必須）、お支払い（未済の場合）が必要です。その他、個人的な荷物や寝具等はお客様でご準備ください。",
      },
      {
        q: "返却時の清掃はどこまで必要ですか？",
        a: "簡単な清掃で結構です。ゴミはお持ち帰りいただき、明らかな汚れは拭き取っていただければ大丈夫です。",
      },
      {
        q: "燃料はどうすればよいですか？",
        a: "満タン返しでお願いしております。返却前に給油をお願いいたします。",
      },
    ],
  },
  {
    id: "cancellation",
    title: "キャンセルについて",
    icon: XCircle,
    faqs: [
      {
        q: "キャンセル料はいつから発生しますか？",
        a: "利用日の8日前まで無料、7日前から所定のキャンセル料が発生します。詳しくは料金ページをご確認ください。",
      },
      {
        q: "天候不良の場合のキャンセルは？",
        a: "台風等の重大な気象警報が発令されている場合は、個別にご相談させていただきます。お客様都合によるキャンセルは通常のキャンセル料が適用されます。",
      },
      {
        q: "予約者以外の運転は可能ですか？",
        a: "事前にお申込みいただければ、運転者全員の免許証を確認させていただければ可能です。",
      },
    ],
  },
];

const quickLinks = [
  { title: "車両詳細を見る", href: "/vehicle", icon: Car },
  { title: "料金を確認する", href: "/pricing", icon: CreditCard },
  { title: "ご利用の流れ", href: "/flow", icon: Users },
  { title: "お問い合わせ", href: "/contact", icon: MessageCircle },
];

export default function FAQPage() {
  // FAQPage構造化データを生成
  const allFaqs = faqCategories.flatMap(category =>
    category.faqs.map(faq => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    }))
  );

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs,
  };

  return (
    <>
      <StructuredData data={faqStructuredData} />

      <PageIntro
        eyebrow="FAQ"
        title="よくある質問"
        lead="お客様からよくいただくご質問にお答えします"
      />

      {/* FAQ Categories */}
      <section className="bg-paper py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Categories"
            title="カテゴリー別FAQ"
            lead="知りたい情報のカテゴリーからお探しください"
          />

          <div className="mx-auto max-w-4xl space-y-16">
            {faqCategories.map((category, categoryIndex) => (
              <Reveal key={category.id} delay={0.05}>
                <div>
                  <div className="flex items-center gap-4 border-b-2 border-ink pb-5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white">
                      <category.icon className="h-5 w-5 text-primary" />
                    </span>
                    <h3 className="font-display text-xl font-black md:text-2xl">
                      {category.title}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="ml-auto font-en text-sm font-semibold text-text-sub"
                    >
                      {String(categoryIndex + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`item-${categoryIndex}-${faqIndex}`}
                      >
                        <AccordionTrigger>{faq.q}</AccordionTrigger>
                        <AccordionContent className="leading-relaxed text-text-sub">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Quick Links */}
      <section className="border-y border-border bg-white py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Related"
            title="関連ページ"
            lead="さらに詳しい情報はこちらから"
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((link, index) => (
              <Reveal key={link.href} delay={index * 0.08}>
                <Link
                  href={link.href}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-paper p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white transition-colors duration-300 group-hover:border-secondary">
                    <link.icon className="h-5 w-5 text-primary" />
                  </span>
                  <span className="mt-6 font-display text-lg font-black">
                    {link.title}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                    詳しく見る
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Still Have Questions */}
      <section className="bg-ink py-24 text-paper md:py-32">
        <Container>
          <Reveal className="text-center">
            <p aria-hidden="true" className="text-eyebrow mb-6 text-secondary">
              Contact
            </p>
            <h2 className="font-display text-3xl font-black tracking-tight md:text-5xl">
              まだ疑問が解決しませんか？
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-paper/65 md:text-lg">
              お気軽にお問い合わせください。
              <br />
              専任スタッフが丁寧にお答えいたします。
            </p>
            <div className="mt-10 flex justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link href="/contact">
                  お問い合わせ <ArrowRight className="!size-5" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
