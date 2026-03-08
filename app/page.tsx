"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/Container";
import {
  Truck,
  Wallet,
  Heart,
  Calendar,
  ArrowRight,
  Star,
} from "lucide-react";
import topSlide from "@/assets/top_slide01.jpg";
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
  { value: "24", label: "サポート体制", suffix: "時間" },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={topSlide}
            alt="キャンピングカーで家族旅行"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-50"
            priority
            placeholder="blur"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        </div>

        {/* Hero Content */}
        <Container className="relative z-10 py-16 sm:py-24 md:py-32">
          <div className="text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                家族の思い出を
                <br />
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  特別な旅へ
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-200 max-w-3xl mx-auto px-2"
            >
              FieldBase-Kのキャンピングカーで、
              <br className="hidden md:block" />
              いつもと違う冒険を始めましょう
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-secondary to-secondary-dark hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
              >
                <Link href="/calendar">
                  空き状況を確認 <Calendar className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-md border-white/30 hover:bg-white/20 text-white text-lg px-8 py-6"
              >
                <Link href="/vehicle">
                  車両を見る <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="text-sm md:text-base text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full p-2"
          >
            <div className="w-1.5 h-1.5 bg-white rounded-full mx-auto" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              FieldBase-Kが選ばれる理由
            </h2>
            <p className="text-xl text-text-sub max-w-2xl mx-auto">
              FieldBase-Kならではの、安心と快適をお届けします
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg"
                    >
                      <feature.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">
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

      {/* Vehicle Preview Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ナッツRV ジョリビー
              </h2>
              <p className="text-xl text-text-sub mb-6">
                日本最大級のキャンピングカービルダー・ナッツRVが手がけるジョリビー。
                コンパクトながら充実装備で、快適なキャンピングカーライフを実現します。
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "コンパクトな車体（全長4.79m × 全幅1.96m × 全高2.72m）",
                  "一般的な駐車場サイズ（2m×5m）に収まるサイズ",
                  "エボライト＆リチウムイオンバッテリー搭載",
                  "家庭用エアコン＆FFヒーター完備",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center text-lg"
                  >
                    <Star className="w-5 h-5 text-secondary mr-3 fill-secondary" />
                    {item}
                  </motion.li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-primary-dark hover:shadow-xl transition-all duration-300"
              >
                <Link href="/vehicle">
                  詳しく見る <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={exteriorSlide01}
                alt="ナッツRV ジョリビー外観"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                placeholder="blur"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              明確な料金体系
            </h2>
            <p className="text-xl text-text-sub max-w-2xl mx-auto">
              隠れた費用は一切なし。安心してご利用いただけます
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="max-w-2xl mx-auto border-2 hover:border-primary transition-all duration-300 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    ¥16,500
                    <span className="text-2xl text-text-sub">〜/日</span>
                  </div>
                  <p className="text-text-sub">平日1日料金（税込）</p>
                </div>

                <div className="space-y-2 mb-8 text-left max-w-md mx-auto">
                  {[
                    "自動車保険料込み",
                    "基本装備使用料込み",
                    "3日以上のご利用で長期割引あり",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <Star className="w-4 h-4 text-secondary mr-2 fill-secondary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-primary-dark hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/pricing">
                    料金詳細を見る <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary via-primary-dark to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src={topSlide}
            alt="Background"
            fill
            className="object-cover"
            placeholder="blur"
          />
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              忘れられない思い出を作りませんか？
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
              今すぐ空き状況を確認して、あなたの冒険を計画しましょう
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary-dark text-white hover:shadow-2xl transition-all duration-300 text-lg px-8 py-6"
              >
                <Link href="/contact">
                  お問い合わせ <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-md border-white/30 hover:bg-white/20 text-white text-lg px-8 py-6"
              >
                <Link href="/faq">
                  よくある質問 <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
