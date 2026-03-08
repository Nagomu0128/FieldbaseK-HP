"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/Container";
import StructuredData from "@/components/seo/StructuredData";
import {
  Snowflake,
  Battery,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Zap,
  Thermometer,
  ParkingSquare,
  Maximize,
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

export default function VehiclePage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "FieldBase-K キャンピングカーレンタル ナッツRV ジョリビー",
    description:
      "ナッツRV ジョリビー。コンパクトなキャブコンながら、エボライト＆リチウムイオンバッテリー、家庭用エアコン、FFヒーター搭載の充実装備。",
    brand: {
      "@type": "Brand",
      name: "FieldBase-K",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "JPY",
      lowPrice: "11000",
      highPrice: "22000",
      offerCount: "4",
      availability: "https://schema.org/InStock",
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
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <Image
            src={topSlide}
            alt="ナッツRV ジョリビー"
            fill
            className="object-cover brightness-75"
            priority
            placeholder="blur"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <Container className="relative h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                ナッツRV ジョリビー
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                日本最大級キャンピングカービルダーが手がける、コンパクト＆高機能キャブコン
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold mb-4 text-center">
                ジョリビーの特徴
              </h2>
              <p className="text-xl text-text-sub text-center max-w-2xl mx-auto">
                キャブコンながらもコンパクト。充実装備で快適なキャンピングカーライフを
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {vehicleFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300 group">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
                        <feature.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-text-sub">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Body Size Section */}
        <section className="py-20 bg-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold mb-4 text-center">
                ボディサイズ
              </h2>
              <p className="text-xl text-text-sub text-center max-w-2xl mx-auto">
                一般的な駐車場サイズに収まるコンパクトボディ
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={bodysize}
                  alt="ジョリビー ボディサイズ 全長4.79m 全幅1.96m 全高2.72m"
                  fill
                  className="object-contain bg-white"
                  placeholder="blur"
                />
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { label: "全長", value: "4.79m" },
                  { label: "全幅", value: "1.96m" },
                  { label: "全高", value: "2.72m" },
                ].map((dim, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="text-center p-4 bg-gray-50 rounded-xl"
                  >
                    <div className="text-sm text-text-sub mb-1">
                      {dim.label}
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {dim.value}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold mb-4 text-center">
                フォトギャラリー
              </h2>
              <p className="text-xl text-text-sub text-center max-w-2xl mx-auto">
                実際の車両の様子をご覧ください
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vehicleImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative h-64 rounded-xl overflow-hidden shadow-lg cursor-pointer group"
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    placeholder="blur"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </motion.div>
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
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-secondary transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>

              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-secondary transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(
                    (selectedImage - 1 + vehicleImages.length) %
                      vehicleImages.length
                  );
                }}
              >
                <ChevronLeft className="w-12 h-12" />
              </button>

              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative w-full max-w-5xl h-[80vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={vehicleImages[selectedImage].src}
                  alt={vehicleImages[selectedImage].alt}
                  fill
                  className="object-contain"
                  placeholder="blur"
                />
              </motion.div>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-secondary transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(
                    (selectedImage + 1) % vehicleImages.length
                  );
                }}
              >
                <ChevronRight className="w-12 h-12" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Specifications Section */}
        <section className="py-20 bg-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold mb-4 text-center">
                車両スペック
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="max-w-4xl mx-auto shadow-xl">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                    {specs.map((spec, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0"
                      >
                        <span className="font-medium text-text-sub">
                          {spec.label}
                        </span>
                        <span className="font-semibold text-lg">
                          {spec.value}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </Container>
        </section>

        {/* YouTube Video Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold mb-4 text-center">
                車両紹介ムービー
              </h2>
              <p className="text-xl text-text-sub text-center max-w-2xl mx-auto">
                ジョリビーの魅力を動画でご覧ください
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/liwRDszL5p8"
                  title="ジョリビー 車両紹介ムービー"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Notes Section */}
        <section className="py-20 bg-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="max-w-4xl mx-auto border-2 border-secondary/20 bg-secondary/5">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <div className="w-2 h-8 bg-secondary rounded-full mr-4" />
                    ご利用にあたっての注意事項
                  </h3>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start">
                      <span className="text-secondary mr-3">•</span>
                      <span>
                        運転には普通自動車免許が必要です
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-3">•</span>
                      <span>
                        高さ制限のある場所（立体駐車場等）はご利用いただけません（全高2.72m）
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-3">•</span>
                      <span>車内は禁煙です</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-3">•</span>
                      <span>
                        ペットの同乗はお断りさせていただいています
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-3">•</span>
                      <span>
                        出発前に丁寧な説明を行いますので、初めての方もご安心ください
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                この車両で旅を始めませんか？
              </h2>
              <p className="text-xl mb-8 opacity-90">
                料金プランや空き状況をご確認ください
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary hover:bg-secondary-dark text-white hover:shadow-2xl transition-all duration-300"
                >
                  <Link href="/pricing">
                    料金を見る <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-md border-white/30 hover:bg-white/20 text-white"
                >
                  <Link href="/calendar">
                    空き状況を確認 <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </Container>
        </section>
      </div>
    </>
  );
}
