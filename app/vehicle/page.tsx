"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/Container";
import {
  Users,
  Bed,
  Utensils,
  Snowflake,
  Droplets,
  Tv,
  Wifi,
  Battery,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { Metadata } from "next";

// 車両画像（Unsplashから）
const vehicleImages = [
  {
    src: "https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=1200&q=80",
    alt: "キャンピングカー外観",
  },
  {
    src: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=1200&q=80",
    alt: "キャンピングカー内装",
  },
  {
    src: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=1200&q=80",
    alt: "キッチンエリア",
  },
  {
    src: "https://images.unsplash.com/photo-1519642083166-8aa0b6b71096?w=1200&q=80",
    alt: "寝室エリア",
  },
  {
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80",
    alt: "運転席",
  },
  {
    src: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1200&q=80",
    alt: "自然の中のキャンピングカー",
  },
];

const equipment = [
  { icon: Utensils, name: "キッチン設備", items: ["ガスコンロ", "シンク", "調理器具一式", "食器セット"] },
  { icon: Snowflake, name: "空調設備", items: ["エアコン", "FFヒーター", "換気扇"] },
  { icon: Droplets, name: "水回り", items: ["給排水タンク", "温水器", "シャワー（外部）"] },
  { icon: Tv, name: "エンターテイメント", items: ["テレビ", "DVDプレーヤー", "Bluetooth対応"] },
  { icon: Wifi, name: "電源・通信", items: ["サブバッテリー", "USB充電ポート", "インバーター"] },
  { icon: Bed, name: "就寝設備", items: ["マットレス", "寝具一式", "カーテン"] },
];

const specs = [
  { label: "車種", value: "（要入力）" },
  { label: "乗車定員", value: "6名（要確認）" },
  { label: "就寝定員", value: "4名（要確認）" },
  { label: "全長", value: "約5.4m（要確認）" },
  { label: "全幅", value: "約2.1m（要確認）" },
  { label: "全高", value: "約2.8m（要確認）" },
  { label: "排気量", value: "2.8L（要確認）" },
  { label: "燃料", value: "ディーゼル（要確認）" },
  { label: "駆動方式", value: "2WD（要確認）" },
  { label: "燃費", value: "約8-10km/L（要確認）" },
];

export default function VehiclePage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src={vehicleImages[0].src}
          alt={vehicleImages[0].alt}
          fill
          className="object-cover brightness-75"
          priority
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
              車両詳細
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              家族みんなで快適に過ごせる、充実装備のキャンピングカー
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-center">フォトギャラリー</h2>
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
                setSelectedImage((selectedImage - 1 + vehicleImages.length) % vehicleImages.length);
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
              />
            </motion.div>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-secondary transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((selectedImage + 1) % vehicleImages.length);
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
            <h2 className="text-4xl font-bold mb-4 text-center">車両スペック</h2>
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
                      <span className="font-medium text-text-sub">{spec.label}</span>
                      <span className="font-semibold text-lg">{spec.value}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-center">充実の装備</h2>
            <p className="text-xl text-text-sub text-center max-w-2xl mx-auto">
              快適な旅をサポートする、豊富な設備をご用意
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mr-4">
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold">{category.name}</h3>
                    </div>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-text-sub">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
                    <span>運転には普通自動車免許が必要です（要確認）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3">•</span>
                    <span>高さ制限のある場所（立体駐車場等）はご利用いただけません</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3">•</span>
                    <span>車内は禁煙です。ペット同伴はご相談ください</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3">•</span>
                    <span>出発前に丁寧な説明を行いますので、初めての方もご安心ください</span>
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
  );
}
