"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import Reveal from "@/components/motion/Reveal";
import PageIntro from "@/components/site/PageIntro";
import SectionHeading from "@/components/site/SectionHeading";
import StructuredData from "@/components/seo/StructuredData";
import {
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Zap,
  Thermometer,
  ParkingSquare,
} from "lucide-react";

import topSlide from "@/assets/top_slide01.jpg";
import exteriorSlide01 from "@/assets/exterior_box02_slide01.jpg";
import exteriorSlide02 from "@/assets/exterior_box02_slide02.jpg";
import xExteriorSlide02 from "@/assets/x_exterior_slide02.jpg";
import xExteriorSlide04 from "@/assets/x_exterior_slide04.jpg";
import layoutDay from "@/assets/layout_day.png";
import bodysize from "@/assets/bodysize.jpg";

import type { StaticImageData } from "next/image";

const vehicleImages: { src: StaticImageData; alt: string }[] = [
  { src: topSlide, alt: "ジョリビー外観" },
  { src: exteriorSlide01, alt: "ジョリビー外観 正面" },
  { src: exteriorSlide02, alt: "ジョリビー外観 サイド" },
  { src: xExteriorSlide02, alt: "ジョリビー 走行イメージ" },
  { src: xExteriorSlide04, alt: "ジョリビー アウトドア" },
  { src: layoutDay, alt: "車内レイアウト" },
];

const vehicleFeatures = [
  {
    icon: ParkingSquare,
    title: "コンパクトな車体",
    description:
      "一般的な駐車場サイズ（2m×5m）に収まるコンパクトな車体。取り回し、後部確認も容易で高い操作性を実現しています。",
  },
  {
    icon: Zap,
    title: "エボライト＆リチウムイオンバッテリー搭載",
    description:
      "走行充電が可能なエボライトシステムを搭載。サブバッテリーには大容量のリチウムイオンバッテリーを搭載しています。",
  },
  {
    icon: Thermometer,
    title: "家庭用エアコン＆FFヒーター搭載",
    description:
      "家庭用エアコンを搭載しており、夏場でも快適な睡眠が可能。冬場はエンジン停止中でも使用可能な燃焼式暖房を搭載しています。",
  },
];

const specs = [
  { label: "車種", value: "ナッツRV ジョリビー（JolyBee）" },
  { label: "タイプ", value: "キャブコン" },
  { label: "全長", value: "4.79m" },
  { label: "全幅", value: "1.96m" },
  { label: "全高", value: "2.72m" },
  { label: "サブバッテリー", value: "リチウムイオンバッテリー" },
  { label: "充電システム", value: "エボライト（走行充電）" },
  { label: "冷房", value: "家庭用エアコン" },
  { label: "暖房", value: "FFヒーター（燃焼式）" },
];

const dimensions = [
  { label: "全長", value: "4.79m" },
  { label: "全幅", value: "1.96m" },
  { label: "全高", value: "2.72m" },
];

const notes = [
  "運転には普通自動車免許が必要です",
  "高さ制限のある場所（立体駐車場等）はご利用いただけません（全高2.72m）",
  "車内は禁煙です",
  "ペットの同乗はお断りさせていただいています",
  "出発前に丁寧な説明を行いますので、初めての方もご安心ください",
];

export default function VehiclePage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const productData = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: "ナッツRV ジョリビー（FieldBase-Kレンタル）",
    description:
      "ナッツRV ジョリビー。コンパクトなキャブコンながら、エボライト＆リチウムイオンバッテリー、家庭用エアコン、FFヒーター搭載の充実装備。乗車定員6名、就寝定員5名。",
    brand: { "@type": "Brand", name: "ナッツRV" },
    model: "ジョリビー（JolyBee）",
    vehicleConfiguration: "キャブコン",
    numberOfDoors: 4,
    seatingCapacity: 6,
    image: "https://fieldbase-k.jp/og-image.png",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "JPY",
      lowPrice: "11000",
      highPrice: "22000",
      offerCount: "4",
      availability: "https://schema.org/InStock",
      url: "https://fieldbase-k.jp/pricing",
    },
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: "https://fieldbase-k.jp",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "車両詳細",
        item: "https://fieldbase-k.jp/vehicle",
      },
    ],
  };

  return (
    <>
      <StructuredData data={productData} />
      <StructuredData data={breadcrumbData} />

      <PageIntro
        eyebrow="The Vehicle"
        title="ナッツRV ジョリビー"
        lead="日本最大級キャンピングカービルダーが手がける、コンパクト＆高機能キャブコン"
      />

      {/* Features */}
      <section className="bg-paper py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Features"
            title="ジョリビーの特徴"
            lead="キャブコンながらもコンパクト。充実装備で快適なキャンピングカーライフを"
          />

          <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-3">
            {vehicleFeatures.map((feature, index) => (
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
                  <h3 className="mt-7 font-display text-xl font-black leading-snug">
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

      {/* Body Size */}
      <section className="border-y border-border bg-white py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Body Size"
            title="ボディサイズ"
            lead="一般的な駐車場サイズに収まるコンパクトボディ"
          />

          <Reveal>
            <div className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-white">
              <Image
                src={bodysize}
                alt="ジョリビー ボディサイズ 全長4.79m 全幅1.96m 全高2.72m"
                fill
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-contain"
                placeholder="blur"
              />
            </div>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-3 gap-6">
            {dimensions.map((dim, index) => (
              <Reveal key={dim.label} delay={index * 0.08}>
                <div className="border-t-2 border-ink pt-5 text-center md:text-left">
                  <div className="text-sm text-text-sub">{dim.label}</div>
                  <div className="mt-1 font-en text-3xl font-semibold tracking-tight text-ink md:text-5xl">
                    {dim.value}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="bg-paper py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Gallery"
            title="フォトギャラリー"
            lead="実際の車両の様子をご覧ください"
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {vehicleImages.map((image, index) => (
              <Reveal key={image.alt} delay={(index % 3) * 0.08}>
                <motion.button
                  type="button"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative block h-64 w-full cursor-pointer overflow-hidden rounded-2xl"
                  onClick={() => setSelectedImage(index)}
                  aria-label={`${image.alt}を拡大表示`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    placeholder="blur"
                  />
                  <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/25" />
                  <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-paper/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ArrowRight className="h-4 w-4 -rotate-45 text-ink" />
                  </span>
                </motion.button>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute right-4 top-4 text-paper transition-colors hover:text-secondary"
              onClick={() => setSelectedImage(null)}
              aria-label="閉じる"
            >
              <X className="h-8 w-8" />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-paper transition-colors hover:text-secondary"
              aria-label="前の画像"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(
                  (selectedImage - 1 + vehicleImages.length) %
                    vehicleImages.length
                );
              }}
            >
              <ChevronLeft className="h-12 w-12" />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[80vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={vehicleImages[selectedImage].src}
                alt={vehicleImages[selectedImage].alt}
                fill
                sizes="100vw"
                className="object-contain"
                placeholder="blur"
              />
            </motion.div>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-paper transition-colors hover:text-secondary"
              aria-label="次の画像"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((selectedImage + 1) % vehicleImages.length);
              }}
            >
              <ChevronRight className="h-12 w-12" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Specifications */}
      <section className="border-y border-border bg-white py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="Specifications" title="車両スペック" />

          <Reveal>
            <dl className="mx-auto grid max-w-4xl grid-cols-1 gap-x-14 md:grid-cols-2">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-baseline justify-between gap-6 border-b border-border py-4"
                >
                  <dt className="shrink-0 text-sm font-medium text-text-sub">
                    {spec.label}
                  </dt>
                  <dd className="text-right font-bold">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      {/* YouTube Video */}
      <section className="bg-paper py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Movie"
            title="車両紹介ムービー"
            lead="ジョリビーの魅力を動画でご覧ください"
          />

          <Reveal>
            <div className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-border">
              <iframe
                src="https://www.youtube.com/embed/liwRDszL5p8"
                title="ジョリビー 車両紹介ムービー"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Notes */}
      <section className="border-t border-border bg-white py-24 md:py-32">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl rounded-2xl border-l-4 border-secondary bg-paper p-8 md:p-10">
              <h3 className="font-display text-xl font-black md:text-2xl">
                ご利用にあたっての注意事項
              </h3>
              <ul className="mt-6 space-y-3">
                {notes.map((note) => (
                  <li key={note} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-secondary"
                    />
                    <span className="leading-relaxed text-ink/85">{note}</span>
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
              Reservation
            </p>
            <h2 className="font-display text-3xl font-black tracking-tight md:text-5xl">
              この車両で旅を始めませんか？
            </h2>
            <p className="mt-5 text-paper/65 md:text-lg">
              料金プランや空き状況をご確認ください
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild variant="secondary" size="lg">
                <Link href="/pricing">
                  料金を見る <ArrowRight className="!size-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-paper/40 text-paper hover:opacity-100 hover:border-secondary hover:text-secondary"
              >
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
