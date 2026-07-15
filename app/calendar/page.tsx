"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import Reveal from "@/components/motion/Reveal";
import PageIntro from "@/components/site/PageIntro";
import SectionHeading from "@/components/site/SectionHeading";
import { Check, X, AlertCircle, ArrowRight } from "lucide-react";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";

const legend = [
  { status: "available", label: "空き", color: "bg-green-500", icon: Check },
  { status: "booked", label: "予約済み", color: "bg-red-500", icon: X },
];

const instructions = [
  {
    step: 1,
    title: "カレンダーで空き状況を確認",
    description: "ご希望の日程が空いているかカレンダーでご確認ください",
  },
  {
    step: 2,
    title: "お問い合わせフォームからご連絡",
    description: "空いている日程があれば、お問い合わせフォームからご連絡ください",
  },
  {
    step: 3,
    title: "予約確定",
    description: "詳細をご相談の上、予約を確定させていただきます",
  },
];

const notes = [
  "カレンダーは随時更新されますが、タイムラグが生じる場合があります",
  "最新の空き状況は、お問い合わせ時に確認させていただきます",
  "繁忙期（GW、夏休み、年末年始等）はお早めのご予約をおすすめします",
  "前後の日程も含めてご検討いただくと、ご予約いただきやすくなります",
];

export default function CalendarPage() {
  return (
    <>
      <PageIntro
        eyebrow="Availability"
        title="空き状況カレンダー"
        lead="リアルタイムの予約状況をご確認いただけます"
      >
        <div className="mt-8 flex flex-wrap gap-3">
          {legend.map((item) => (
            <div
              key={item.status}
              className="flex items-center gap-2.5 rounded-full border border-line-dark px-5 py-2.5"
            >
              <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
              <span className="text-sm font-medium text-paper/85">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </PageIntro>

      {/* Calendar */}
      <section className="bg-paper py-24 md:py-32">
        <Container>
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-border bg-white">
              <AvailabilityCalendar />
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-10 text-center">
            <Button asChild size="lg">
              <Link href="/contact">
                空き状況を問い合わせる <ArrowRight className="!size-5" />
              </Link>
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* How to Reserve */}
      <section className="border-y border-border bg-white py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="How to Reserve"
            title="ご予約の流れ"
            lead="3ステップで簡単予約"
          />

          <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-3">
            {instructions.map((instruction, index) => (
              <Reveal key={instruction.step} delay={index * 0.12}>
                <div className="group h-full border-t-2 border-ink pt-7 transition-transform duration-500 hover:-translate-y-1.5">
                  <span
                    aria-hidden="true"
                    className="font-en text-4xl font-semibold tracking-tight text-border transition-colors duration-300 group-hover:text-secondary md:text-5xl"
                  >
                    {String(instruction.step).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-black leading-snug">
                    {instruction.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-text-sub">
                    {instruction.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Notes */}
      <section className="bg-paper py-24 md:py-32">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl rounded-2xl border-l-4 border-secondary bg-white p-8 md:p-10">
              <h3 className="flex items-center gap-3 font-display text-xl font-black md:text-2xl">
                <AlertCircle className="h-6 w-6 shrink-0 text-secondary" />
                ご予約時の注意事項
              </h3>
              <ul className="mt-6 space-y-3">
                {notes.map((note) => (
                  <li key={note} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-secondary"
                    />
                    <span className="leading-relaxed text-text-sub">
                      {note}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-ink py-24 text-paper md:py-32">
        <Container>
          <Reveal className="text-center">
            <p aria-hidden="true" className="text-eyebrow mb-6 text-secondary">
              Contact
            </p>
            <h2 className="font-display text-3xl font-black tracking-tight md:text-5xl">
              ご希望の日程は見つかりましたか？
            </h2>
            <p className="mt-5 text-paper/65 md:text-lg">
              お問い合わせフォームから、お気軽にご連絡ください
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
                <Link href="/pricing">
                  料金を見る <ArrowRight className="!size-5" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
