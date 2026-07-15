"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsapConfig";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import CountUp from "@/components/motion/CountUp";
import Marquee from "@/components/motion/Marquee";
import SectionHeading from "@/components/site/SectionHeading";
import {
  Truck,
  Wallet,
  Heart,
  Calendar,
  ArrowRight,
  Check,
} from "lucide-react";
import topHero from "@/assets/top_hero.jpg";
import exteriorSlide01 from "@/assets/exterior_box02_slide01.jpg";

const features = [
  {
    icon: Truck,
    title: "魅力的な貸出車両",
    description:
      "日本最大級のキャンピングカービルダー・ナッツRVのジョリビーをお貸しします。コンパクトで高機能な一台です。",
  },
  {
    icon: Wallet,
    title: "リーズナブルな価格",
    description:
      "平日1日16,500円〜。長期割引やショート料金など、お得なプランをご用意しています。",
  },
  {
    icon: Heart,
    title: "個人オーナーならではの親切な対応",
    description:
      "大手にはない、オーナー自らの丁寧な説明とアフターフォロー。初めての方でも安心です。",
  },
];

const stats = [
  { value: "1", label: "台の厳選車両", suffix: "" },
  { value: "100", label: "満足度", suffix: "%" },
  { value: "安心", label: "充実のサポート体制", suffix: "" },
];

const vehiclePoints = [
  "コンパクトな車体（全長4.79m × 全幅1.96m × 全高2.72m）",
  "一般的な駐車場サイズ（2m×5m）に収まるサイズ",
  "エボライト＆リチウムイオンバッテリー搭載",
  "家庭用エアコン＆FFヒーター完備",
];

const pricingPoints = [
  "自動車保険料込み",
  "基本装備使用料込み",
  "3日以上のご利用で長期割引あり",
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      // エントランス
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".hero-media",
        { scale: 1.18 },
        { scale: 1, duration: 1.6, ease: "power2.out" }
      )
        .fromTo(
          ".hero-line",
          { yPercent: 112 },
          { yPercent: 0, duration: 1.0, stagger: 0.14 },
          "-=1.05"
        )
        .fromTo(
          ".hero-fade",
          { opacity: 0, y: 26 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
          "-=0.55"
        );

      // スクロールに追従するパララックス
      gsap.to(".hero-media", {
        yPercent: 13,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // スクロールキュー
      gsap.fromTo(
        ".hero-cue-line",
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          duration: 1.4,
          repeat: -1,
          repeatDelay: 0.4,
          ease: "power2.inOut",
        }
      );
    },
    { scope: heroRef }
  );

  return (
    <div className="overflow-hidden">
      {/* ================= Hero ================= */}
      <section
        ref={heroRef}
        className="relative flex min-h-svh items-end overflow-hidden bg-ink text-paper"
      >
        <div className="hero-media absolute inset-0 will-change-transform">
          <Image
            src={topHero}
            alt="滋賀・大津のレンタルキャンピングカー ナッツRV ジョリビー"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
            placeholder="blur"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/25 to-ink/90" />
        </div>

        <Container className="relative z-10 w-full pb-12 pt-44 md:pb-16">
          <p
            aria-hidden="true"
            className="hero-fade text-eyebrow mb-6 text-secondary"
          >
            Rental Camping Car — Shiga, Otsu
          </p>

          <h1 className="font-display text-[clamp(2.15rem,7.2vw,4.6rem)] font-black leading-[1.08] tracking-tight">
            <span className="hero-mask">
              <span className="hero-line">滋賀・大津の</span>
            </span>
            <span className="hero-mask">
              <span className="hero-line text-secondary">
                レンタルキャンピングカー
              </span>
            </span>
          </h1>

          <p className="hero-fade mt-7 max-w-2xl text-base leading-relaxed text-paper/80 md:text-lg">
            ナッツRV ジョリビーを1日16,500円〜でレンタル。
            <br className="hidden md:block" />
            初めての方も、個人オーナーが丁寧にサポートします。
          </p>

          <div className="hero-fade mt-9 flex flex-col gap-4 sm:flex-row">
            <Button asChild variant="secondary" size="lg">
              <Link href="/calendar">
                空き状況を確認 <Calendar className="!size-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-paper/40 text-paper hover:opacity-100 hover:border-secondary hover:text-secondary"
            >
              <Link href="/vehicle">
                車両を見る <ArrowRight className="!size-5" />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="hero-fade mt-16 grid max-w-3xl grid-cols-3 gap-6 border-t border-paper/20 pt-7">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="flex items-baseline gap-0.5">
                  {stat.value === "安心" ? (
                    <span className="font-display text-2xl font-black sm:text-4xl md:text-5xl">
                      {stat.value}
                    </span>
                  ) : (
                    <CountUp
                      value={stat.value}
                      className="font-en text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
                    />
                  )}
                  {stat.suffix && (
                    <span className="font-en text-xl font-semibold text-secondary md:text-2xl">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <div className="mt-2 text-xs text-paper/60 md:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>

        {/* Scroll cue */}
        <div
          aria-hidden="true"
          className="hero-fade absolute bottom-12 right-6 z-10 hidden flex-col items-center gap-3 md:flex lg:right-10"
        >
          <span className="font-en text-[10px] font-semibold uppercase tracking-[0.3em] [writing-mode:vertical-rl]">
            Scroll
          </span>
          <span className="hero-cue-line block h-14 w-px bg-paper/60" />
        </div>
      </section>

      {/* ================= Marquee ================= */}
      <Marquee
        text="FieldBase-K Rental Camping Car"
        className="border-b border-border bg-paper py-7 md:py-9"
        textClassName="text-outline text-[clamp(2.4rem,5.5vw,4.5rem)] leading-none tracking-tight"
      />

      {/* ================= Features ================= */}
      <section className="bg-paper py-24 md:py-36">
        <Container>
          <SectionHeading
            eyebrow="Why FieldBase-K"
            title="FieldBase-Kが選ばれる理由"
            lead="FieldBase-Kならではの、安心と快適をお届けします"
          />

          <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-3">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.12}>
                <div className="group h-full border-t-2 border-ink pt-7 transition-transform duration-500 hover:-translate-y-1.5">
                  <div className="flex items-center justify-between">
                    <span
                      aria-hidden="true"
                      className="font-en text-sm font-semibold text-text-sub transition-colors duration-300 group-hover:text-secondary"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white transition-colors duration-300 group-hover:border-secondary">
                      <feature.icon className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-secondary" />
                    </span>
                  </div>
                  <h3 className="mt-7 font-display text-xl font-black leading-snug md:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-text-sub">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= Vehicle Preview ================= */}
      <section className="overflow-hidden bg-ink py-24 text-paper md:py-36">
        <Container>
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal className="order-2 lg:order-1">
              <Parallax className="aspect-[4/3] rounded-2xl lg:aspect-[4/5]">
                <Image
                  src={exteriorSlide01}
                  alt="ナッツRV ジョリビー外観"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  placeholder="blur"
                />
              </Parallax>
            </Reveal>

            <div className="order-1 lg:order-2">
              <SectionHeading
                dark
                eyebrow="The Vehicle"
                title="ナッツRV ジョリビー"
                lead="日本最大級のキャンピングカービルダー・ナッツRVが手がけるジョリビー。コンパクトながら充実装備で、快適なキャンピングカーライフを実現します。"
                className="mb-8 md:mb-10"
              />

              <ul>
                {vehiclePoints.map((item, index) => (
                  <Reveal key={item} delay={index * 0.08}>
                    <li className="flex items-start gap-4 border-b border-line-dark py-4">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span className="text-sm leading-relaxed text-paper/85 md:text-base">
                        {item}
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>

              <Reveal delay={0.3} className="mt-10">
                <Button asChild variant="secondary" size="lg">
                  <Link href="/vehicle">
                    詳しく見る <ArrowRight className="!size-5" />
                  </Link>
                </Button>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= Pricing Preview ================= */}
      <section className="bg-paper py-24 md:py-36">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
            <SectionHeading
              eyebrow="Price"
              title="明確な料金体系"
              lead="隠れた費用は一切なし。安心してご利用いただけます"
              className="mb-0"
            />

            <Reveal delay={0.1}>
              <div className="border-t-2 border-ink pt-8">
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <span className="font-en text-[clamp(3.4rem,7vw,6rem)] font-semibold leading-none tracking-tight text-ink">
                    ¥16,500
                  </span>
                  <span className="text-xl font-bold text-text-sub">
                    〜/日
                  </span>
                </div>
                <p className="mt-3 text-text-sub">平日1日料金（税込）</p>

                <ul className="mt-8">
                  {pricingPoints.map((item, index) => (
                    <Reveal key={item} delay={index * 0.08}>
                      <li className="flex items-center gap-4 border-b border-border py-4">
                        <Check className="h-4 w-4 shrink-0 text-secondary" />
                        <span>{item}</span>
                      </li>
                    </Reveal>
                  ))}
                </ul>

                <Reveal delay={0.28} className="mt-10">
                  <Button asChild size="lg">
                    <Link href="/pricing">
                      料金詳細を見る <ArrowRight className="!size-5" />
                    </Link>
                  </Button>
                </Reveal>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden bg-primary py-28 text-paper md:py-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-[-0.2em] select-none text-center font-en text-[16vw] font-bold uppercase leading-none text-paper/[0.05]"
        >
          Adventure
        </div>

        <Container className="relative">
          <Reveal className="text-center">
            <p aria-hidden="true" className="text-eyebrow mb-6 text-secondary">
              Start Your Journey
            </p>
            <h2 className="mx-auto max-w-4xl font-display text-3xl font-black leading-[1.2] tracking-tight sm:text-4xl md:text-6xl">
              忘れられない思い出を作りませんか？
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base text-paper/70 md:text-lg">
              今すぐ空き状況を確認して、あなたの冒険を計画しましょう
            </p>

            <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
                <Link href="/faq">
                  よくある質問 <ArrowRight className="!size-5" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
