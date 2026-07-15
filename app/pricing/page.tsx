"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import Reveal from "@/components/motion/Reveal";
import PageIntro from "@/components/site/PageIntro";
import SectionHeading from "@/components/site/SectionHeading";
import {
  Check,
  X,
  Calendar,
  ArrowRight,
  AlertCircle,
  Clock,
} from "lucide-react";

const cancellationPolicy = [
  { period: "出発日の8日前まで", fee: "無料" },
  { period: "出発日の7日〜4日前", fee: "20%" },
  { period: "出発日の3日〜2日前", fee: "30%" },
  { period: "出発日当日", fee: "50%" },
  { period: "無連絡", fee: "100%" },
];

const included = [
  "自動車保険料",
  "基本装備使用料",
  "出発前説明",
  "清掃費",
];

const notIncluded = [
  "燃料代（満タン返し）",
  "高速道路料金",
  "駐車場料金",
  "キャンプ場利用料",
];

const discountTiers = [
  { days: "3日以上", discount: "5%" },
  { days: "5日以上", discount: "10%" },
  { days: "7日以上", discount: "15%" },
  { days: "10日以上", discount: "20%" },
];

const basicNotes = [
  "ショート料金は15時〜18時までの午後引き渡し、または9:00〜12:00までの翌朝返却の場合に適用されます。",
  "貸出料金には自動車保険料を含んでおります。",
  "ペットの同乗はお断りさせていただいています。",
];

const simulations = [
  {
    title: "土日で1泊2日レンタル",
    items: [
      { label: "土曜日（9:00〜）", price: "¥22,000" },
      { label: "日曜日（〜18:00）", price: "¥22,000" },
    ],
    total: "¥44,000",
  },
  {
    title: "平日1泊2日＋ゆっくりプラン利用",
    items: [
      { label: "平日1日目（9:00〜）", price: "¥16,500" },
      { label: "平日2日目（9:00〜18:00）", price: "¥16,500" },
      { label: "ゆっくりプラン（22:00まで返却）", price: "¥4,400" },
    ],
    total: "¥37,400",
  },
  {
    title: "金曜15時〜日曜日18時までのレンタル",
    items: [
      { label: "金曜日ショート（15:00〜）", price: "¥11,000" },
      { label: "土曜日（1日レンタル）", price: "¥22,000" },
      { label: "日曜日（〜18:00）", price: "¥22,000" },
    ],
    total: "¥55,000",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageIntro
        eyebrow="Pricing"
        title="料金プラン"
        lead="明確でわかりやすい料金体系"
      />

      {/* Basic Pricing */}
      <section className="bg-paper py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Basic Rate"
            title="基本料金"
            lead="基本の貸出時間は9時〜18時となります（税込）"
          />

          <Reveal>
            <div className="mx-auto max-w-3xl overflow-x-auto">
              <table className="w-full min-w-[480px] text-center">
                <thead>
                  <tr className="border-b-2 border-ink">
                    <th className="py-4 pr-4 text-left text-sm font-medium text-text-sub"></th>
                    <th className="px-4 py-4 text-eyebrow text-primary">
                      一日料金
                    </th>
                    <th className="px-4 py-4 text-eyebrow text-primary">
                      ショート料金
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-7 pr-4 text-left font-display text-lg font-black">
                      平日
                    </td>
                    <td className="px-4 py-7">
                      <span className="font-en text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                        ¥16,500
                      </span>
                    </td>
                    <td className="px-4 py-7">
                      <span className="font-en text-3xl font-semibold tracking-tight text-text-sub md:text-4xl">
                        ¥11,000
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-7 pr-4 text-left font-display text-lg font-black">
                      土日祝
                    </td>
                    <td className="px-4 py-7">
                      <span className="font-en text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                        ¥22,000
                      </span>
                    </td>
                    <td className="px-4 py-7">
                      <span className="font-en text-3xl font-semibold tracking-tight text-text-sub md:text-4xl">
                        ¥11,000
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <ul className="mx-auto mt-8 max-w-3xl space-y-3 text-sm text-text-sub md:text-base">
              {basicNotes.map((note) => (
                <li key={note} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-secondary"
                  />
                  <span className="leading-relaxed">{note}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Extension Pricing */}
      <section className="border-y border-border bg-white py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Extension"
            title="延長料金"
            lead="ご返却時間の延長も柔軟に対応いたします（税込）"
          />

          <Reveal>
            <div className="mx-auto max-w-3xl overflow-x-auto">
              <table className="w-full min-w-[480px] text-center">
                <thead>
                  <tr className="border-b-2 border-ink">
                    <th className="py-4 pr-4 text-left text-sm font-medium text-text-sub"></th>
                    <th className="px-4 py-4 text-eyebrow text-primary">
                      1時間延長
                    </th>
                    <th className="px-4 py-4 text-eyebrow text-primary">
                      ゆっくりプラン
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-6 pr-4 text-left font-display text-lg font-black">
                      平日
                    </td>
                    <td className="px-4 py-6">
                      <span className="font-en text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                        ¥2,200
                      </span>
                    </td>
                    <td className="px-4 py-6">
                      <span className="font-en text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                        ¥4,400
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-6 pr-4 text-left font-display text-lg font-black">
                      土日祝
                    </td>
                    <td className="px-4 py-6">
                      <span className="font-en text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                        ¥2,200
                      </span>
                    </td>
                    <td className="px-4 py-6">
                      <span className="font-en text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                        ¥5,500
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mx-auto mt-8 max-w-3xl space-y-4 text-sm text-text-sub md:text-base">
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <span className="leading-relaxed">
                  ゆっくりプランは、本来18時までの返却時間を延長料金無しで22時までとさせていただきます。（事前にお申込みください）
                </span>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                <span className="leading-relaxed">
                  ご返却最終時刻は22時までとなっております。22時以降のご返却につきましては、翌日のショート料金（翌日12時迄の返却）料金を適用させていただきます。
                </span>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Long-term Discount */}
      <section className="bg-paper py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Discount"
            title="長期割引"
            lead="3日以上の長期ご利用時には、総額に対して割引を適用いたします"
          />

          <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
            {discountTiers.map((tier, index) => (
              <Reveal key={tier.days} delay={index * 0.08}>
                <div className="group border-t-2 border-ink pt-6 transition-transform duration-500 hover:-translate-y-1.5">
                  <div className="text-sm font-bold text-text-sub">
                    {tier.days}
                  </div>
                  <div className="mt-2 font-en text-5xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-primary md:text-6xl">
                    {tier.discount}
                  </div>
                  <div className="mt-2 text-sm text-text-sub">割引</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Price Simulation */}
      <section className="border-y border-border bg-white py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Simulation"
            title="料金シミュレーション例"
            lead="代表的な利用パターンの料金例をご紹介します"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {simulations.map((sim, index) => (
              <Reveal key={sim.title} delay={index * 0.1} className="h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-paper">
                  <div className="bg-ink p-6 text-paper">
                    <div className="text-xs font-bold tracking-[0.25em] text-secondary">
                      ケース{index + 1}
                    </div>
                    <p className="mt-2 font-bold leading-snug">{sim.title}</p>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex-1 space-y-1">
                      {sim.items.map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center justify-between gap-4 border-b border-border py-3 last:border-0"
                        >
                          <span className="text-sm text-text-sub">
                            {item.label}
                          </span>
                          <span className="font-en font-semibold tracking-tight">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 flex items-baseline justify-between border-t-2 border-ink pt-4">
                      <span className="font-display font-black">合計</span>
                      <span className="font-en text-2xl font-semibold tracking-tight text-primary md:text-3xl">
                        {sim.total}
                      </span>
                    </div>
                    <p className="mt-1 text-right text-xs text-text-sub">
                      （税込）
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Included / Not Included */}
      <section className="bg-paper py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="What's Included" title="料金に含まれるもの" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-primary/25 bg-primary/[0.05] p-8">
                <h3 className="flex items-center gap-3 font-display text-xl font-black">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
                    <Check className="h-4 w-4 text-paper" />
                  </span>
                  含まれるもの
                </h3>
                <ul className="mt-6 space-y-1">
                  {included.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 border-b border-primary/15 py-3 last:border-0"
                    >
                      <Check className="h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="h-full rounded-2xl border border-border bg-white p-8">
                <h3 className="flex items-center gap-3 font-display text-xl font-black">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/10">
                    <X className="h-4 w-4 text-text-sub" />
                  </span>
                  含まれないもの
                </h3>
                <ul className="mt-6 space-y-1">
                  {notIncluded.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 border-b border-border py-3 last:border-0"
                    >
                      <X className="h-4 w-4 shrink-0 text-text-sub" />
                      <span className="text-text-sub">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Cancellation Policy */}
      <section className="border-t border-border bg-white py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="Cancellation" title="キャンセル料金" />

          <Reveal>
            <dl className="mx-auto max-w-3xl">
              {cancellationPolicy.map((policy) => (
                <div
                  key={policy.period}
                  className="flex items-baseline justify-between gap-6 border-b border-border py-5"
                >
                  <dt className="font-medium">{policy.period}</dt>
                  <dd
                    className={
                      policy.fee === "無料"
                        ? "font-display text-lg font-black text-primary"
                        : "font-en text-lg font-semibold tracking-tight text-text-sub"
                    }
                  >
                    {policy.fee}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-ink py-24 text-paper md:py-32">
        <Container>
          <Reveal className="text-center">
            <p aria-hidden="true" className="text-eyebrow mb-6 text-secondary">
              Reservation
            </p>
            <h2 className="font-display text-3xl font-black tracking-tight md:text-5xl">
              ご予約・お問い合わせはこちら
            </h2>
            <p className="mt-5 text-paper/65 md:text-lg">
              空き状況の確認やご不明な点など、お気軽にお問い合わせください
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild variant="secondary" size="lg">
                <Link href="/contact">
                  お問い合わせ <ArrowRight className="!size-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-paper/40 text-paper hover:opacity-100 hover:border-secondary hover:text-secondary"
              >
                <Link href="/calendar">
                  空き状況を確認 <Calendar className="!size-5" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
