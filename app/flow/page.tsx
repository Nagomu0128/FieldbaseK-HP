"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import Reveal from "@/components/motion/Reveal";
import PageIntro from "@/components/site/PageIntro";
import SectionHeading from "@/components/site/SectionHeading";
import {
  MessageCircle,
  CheckCircle,
  Key,
  Map,
  RotateCcw,
  Clock,
  FileText,
  CreditCard,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: 1,
    icon: MessageCircle,
    title: "お問い合わせ",
    description: "空き状況の確認とご予約のご相談",
    duration: "即日〜1営業日",
    details: [
      "お問い合わせフォームまたはお電話でご連絡ください",
      "ご希望の日程、人数、ご質問をお知らせください",
      "空き状況を確認し、料金をご案内します",
      "初めての方には丁寧にご説明いたします",
    ],
    needed: ["ご希望日程", "利用人数", "ご連絡先"],
  },
  {
    number: 2,
    icon: CheckCircle,
    title: "予約確定",
    description: "ご予約の確定とお支払い",
    duration: "お問い合わせから3日以内推奨",
    details: [
      "予約確定のご連絡をいたします",
      "予約確認書をメールでお送りします",
      "お支払い方法をご案内します（要確認）",
      "オプション装備のご希望も承ります",
    ],
    needed: ["本人確認書類", "運転免許証のコピー（要確認）"],
  },
  {
    number: 3,
    icon: Key,
    title: "車両受取",
    description: "当日の車両お渡しと説明",
    duration: "約60〜90分",
    details: [
      "予約当日、指定場所にお越しください",
      "車両の操作方法を丁寧にご説明します",
      "装備品の使い方をレクチャーします",
      "不明点は何でもご質問ください",
      "車両の状態を一緒に確認します",
    ],
    needed: ["運転免許証（原本）", "お支払い（未払いの場合）"],
  },
  {
    number: 4,
    icon: Map,
    title: "ご利用・旅行",
    description: "思い出に残る素敵な旅を",
    duration: "ご予約期間",
    details: [
      "安全運転でお楽しみください",
      "営業時間内のサポートで安心",
      "困ったことがあればすぐにご連絡ください",
      "写真をたくさん撮って思い出を残しましょう",
    ],
    needed: ["緊急連絡先（お渡しします）", "車両マニュアル"],
  },
  {
    number: 5,
    icon: RotateCcw,
    title: "車両返却",
    description: "返却と精算",
    duration: "約30分",
    details: [
      "指定場所・時間に車両をご返却ください",
      "燃料を満タンにしてご返却ください",
      "車内を簡単に清掃してください",
      "装備品の確認を行います",
      "お疲れ様でした！旅の感想をお聞かせください",
    ],
    needed: ["満タンのガソリン", "借りた装備品すべて"],
  },
];

const importantNotes = [
  {
    icon: Clock,
    title: "受取・返却時間",
    content: "基本は10:00〜18:00ですが、ご相談可能です（要確認）",
  },
  {
    icon: FileText,
    title: "必要書類",
    content: "運転免許証は必須です。有効期限をご確認ください",
  },
  {
    icon: CreditCard,
    title: "お支払い方法",
    content: "現金・銀行振込・クレジットカード（要確認）",
  },
  {
    icon: AlertCircle,
    title: "キャンセル",
    content: "キャンセル料金が発生する場合があります",
  },
];

export default function FlowPage() {
  return (
    <>
      <PageIntro
        eyebrow="How It Works"
        title="ご利用の流れ"
        lead="初めての方も安心！簡単5ステップ"
      />

      {/* Steps */}
      <section className="bg-paper py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="5 Steps"
            title="予約から返却まで"
            lead="スムーズなご利用のために、流れをご確認ください"
          />

          <div className="mx-auto max-w-4xl">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={0.05}>
                <div className="relative grid grid-cols-[3.5rem_1fr] gap-5 pb-14 last:pb-0 sm:grid-cols-[5rem_1fr] sm:gap-8 md:pb-16">
                  {/* Rail */}
                  {index < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-[1.75rem] top-16 h-[calc(100%-4.5rem)] w-px -translate-x-1/2 bg-border sm:left-10"
                    />
                  )}

                  {/* Number */}
                  <div className="flex flex-col items-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-ink bg-paper font-en text-lg font-semibold sm:h-20 sm:w-20 sm:text-2xl">
                      {String(step.number).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="rounded-2xl border border-border bg-white p-6 transition-shadow duration-500 hover:shadow-[0_24px_60px_-32px_rgba(16,23,19,0.35)] sm:p-8">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/[0.08]">
                        <step.icon className="h-5 w-5 text-primary" />
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-black sm:text-2xl">
                          {step.title}
                        </h3>
                        <p className="text-sm text-text-sub sm:text-base">
                          {step.description}
                        </p>
                      </div>
                      <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-text-sub">
                        <Clock className="h-3.5 w-3.5 text-secondary" />
                        所要時間: {step.duration}
                      </span>
                    </div>

                    <div className="mt-7 grid gap-8 md:grid-cols-2">
                      {/* Details */}
                      <div>
                        <h4 className="text-eyebrow mb-4 text-primary">
                          詳細
                        </h4>
                        <ul className="space-y-2.5">
                          {step.details.map((detail) => (
                            <li
                              key={detail}
                              className="flex items-start gap-3 text-sm"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-[0.5em] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50"
                              />
                              <span className="leading-relaxed text-text-sub">
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Needed Items */}
                      <div>
                        <h4 className="text-eyebrow mb-4 text-secondary-dark">
                          必要なもの
                        </h4>
                        <ul className="space-y-2">
                          {step.needed.map((item) => (
                            <li
                              key={item}
                              className="flex items-center gap-2.5 rounded-lg bg-secondary/[0.12] px-3.5 py-2.5 text-sm"
                            >
                              <CheckCircle className="h-4 w-4 shrink-0 text-secondary-dark" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Important Notes */}
      <section className="border-y border-border bg-white py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Important"
            title="重要事項"
            lead="ご利用前に必ずご確認ください"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {importantNotes.map((note, index) => (
              <Reveal key={note.title} delay={(index % 2) * 0.1}>
                <div className="flex h-full items-start gap-5 rounded-2xl border border-border bg-paper p-7 transition-transform duration-500 hover:-translate-y-1">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-white">
                    <note.icon className="h-5 w-5 text-primary" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-black">
                      {note.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-text-sub">
                      {note.content}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Link */}
      <section className="bg-paper py-24 md:py-32">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-2xl border-l-4 border-primary bg-white p-8 text-center md:p-12">
              <h3 className="font-display text-2xl font-black">
                よくあるご質問
              </h3>
              <p className="mt-4 leading-relaxed text-text-sub">
                さらに詳しい情報は、FAQページをご覧ください。
                <br />
                疑問や不安な点があれば、お気軽にお問い合わせください。
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/faq">
                    FAQを見る <ArrowRight className="!size-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-ink/20 hover:opacity-100 hover:border-primary hover:text-primary"
                >
                  <Link href="/contact">
                    お問い合わせ <ArrowRight className="!size-5" />
                  </Link>
                </Button>
              </div>
            </div>
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
              準備ができましたら、ご予約ください
            </h2>
            <p className="mt-5 text-paper/65 md:text-lg">
              空き状況を確認して、素敵な旅の計画を始めましょう
            </p>
            <div className="mt-10 flex justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link href="/calendar">
                  空き状況を確認 <ArrowRight className="!size-5" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
