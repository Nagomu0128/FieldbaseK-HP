"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/Container";
import { Check, X, Calendar, ArrowRight, AlertCircle } from "lucide-react";

const basePricing = [
  { days: "1泊2日", price: "XX,XXX", popular: false },
  { days: "2泊3日", price: "XX,XXX", popular: true },
  { days: "3泊4日", price: "XX,XXX", popular: false },
  { days: "4泊5日", price: "XX,XXX", popular: false },
];

const seasonalPricing = [
  {
    season: "通常期",
    period: "平日・閑散期",
    description: "お得にご利用いただけます",
    multiplier: "基本料金",
    color: "from-blue-500 to-blue-600",
  },
  {
    season: "繁忙期",
    period: "週末・祝日・春休み・夏休み・年末年始",
    description: "人気の時期です",
    multiplier: "+20%（要確認）",
    color: "from-secondary to-secondary-dark",
  },
  {
    season: "オフシーズン",
    period: "冬季（12月〜2月、年末年始を除く）",
    description: "特別価格でご提供",
    multiplier: "-10%（要確認）",
    color: "from-primary to-primary-dark",
  },
];

const options = [
  { name: "チャイルドシート", price: "1,000円/日（要確認）" },
  { name: "追加寝具セット", price: "2,000円/泊（要確認）" },
  { name: "BBQセット", price: "3,000円/回（要確認）" },
  { name: "キャンプチェア・テーブルセット", price: "1,500円/回（要確認）" },
  { name: "免責補償（NOC免除）", price: "2,000円/日（要確認）" },
];

const included = [
  "車両保険",
  "対人・対物保険",
  "基本装備使用料",
  "24時間サポート",
  "出発前説明",
  "清掃費",
];

const notIncluded = [
  "燃料代（満タン返し）",
  "高速道路料金",
  "駐車場料金",
  "オプション装備",
  "キャンプ場利用料",
];

const cancellationPolicy = [
  { period: "利用日の30日前まで", fee: "無料" },
  { period: "29日前〜14日前", fee: "料金の30%（要確認）" },
  { period: "13日前〜7日前", fee: "料金の50%（要確認）" },
  { period: "6日前〜前日", fee: "料金の80%（要確認）" },
  { period: "当日・無連絡", fee: "料金の100%" },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=1920&q=80"
          alt="料金プラン"
          fill
          className="object-cover brightness-50"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">料金プラン</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              明確でわかりやすい料金体系
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Basic Pricing Section */}
      <section className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">基本料金</h2>
            <p className="text-xl text-text-sub max-w-2xl mx-auto">
              ご利用日数に応じた基本料金です
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {basePricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className={`relative h-full ${
                    plan.popular
                      ? "border-4 border-secondary shadow-2xl scale-105"
                      : "border-2 hover:border-primary"
                  } transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-secondary to-secondary-dark text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                        人気
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl">{plan.days}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-4">
                      <span className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        ¥{plan.price}
                      </span>
                      <span className="text-text-sub">〜</span>
                    </div>
                    <p className="text-sm text-text-sub mb-6">
                      通常期の料金です
                    </p>
                    <Button
                      asChild
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-secondary to-secondary-dark"
                          : "bg-gradient-to-r from-primary to-primary-dark"
                      }`}
                    >
                      <Link href="/calendar">空き状況を確認</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <Card className="max-w-2xl mx-auto bg-blue-50 border-2 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div className="text-left">
                    <p className="font-semibold text-blue-900 mb-2">
                      5泊以上のご利用も承ります
                    </p>
                    <p className="text-blue-700">
                      長期ご利用の場合は特別料金をご用意しております。お気軽にお問い合わせください。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>

      {/* Seasonal Pricing */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">シーズン別料金</h2>
            <p className="text-xl text-text-sub max-w-2xl mx-auto">
              時期により料金が異なります
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {seasonalPricing.map((season, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className={`bg-gradient-to-r ${season.color} text-white rounded-t-lg`}>
                    <CardTitle className="text-center text-2xl">
                      {season.season}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-sm text-text-sub mb-2">{season.period}</p>
                    <p className="text-sm mb-4">{season.description}</p>
                    <div className="text-center py-4 bg-gray-50 rounded-lg">
                      <span className="text-2xl font-bold text-primary">
                        {season.multiplier}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Options Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">オプション装備</h2>
            <p className="text-xl text-text-sub max-w-2xl mx-auto">
              ご希望に応じて追加できます
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="max-w-3xl mx-auto shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {options.map((option, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex justify-between items-center py-4 border-b border-gray-200 last:border-0"
                    >
                      <span className="font-medium">{option.name}</span>
                      <span className="text-primary font-semibold">
                        {option.price}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>

      {/* Included/Not Included Section */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">料金に含まれるもの</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-2 border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Check className="w-6 h-6 text-primary mr-2" />
                    含まれるもの
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {included.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="flex items-center"
                      >
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-2 border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <X className="w-6 h-6 text-text-sub mr-2" />
                    含まれないもの
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {notIncluded.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="flex items-center"
                      >
                        <X className="w-5 h-5 text-text-sub mr-3 flex-shrink-0" />
                        <span className="text-text-sub">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Cancellation Policy */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">キャンセルポリシー</h2>
            <p className="text-xl text-text-sub max-w-2xl mx-auto">
              キャンセル時の手数料について
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="max-w-3xl mx-auto shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {cancellationPolicy.map((policy, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex justify-between items-center py-4 border-b border-gray-200 last:border-0"
                    >
                      <span className="font-medium">{policy.period}</span>
                      <span
                        className={`font-semibold ${
                          policy.fee === "無料"
                            ? "text-primary"
                            : "text-text-sub"
                        }`}
                      >
                        {policy.fee}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-secondary/10 rounded-lg">
                  <p className="text-sm text-text-sub">
                    ※ やむを得ない事情（天候不良、緊急事態等）の場合はご相談ください
                  </p>
                </div>
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
              ご予約・お問い合わせはこちら
            </h2>
            <p className="text-xl mb-8 opacity-90">
              空き状況の確認やご不明な点など、お気軽にお問い合わせください
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary-dark text-white hover:shadow-2xl transition-all duration-300"
              >
                <Link href="/contact">
                  お問い合わせ <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-md border-white/30 hover:bg-white/20 text-white"
              >
                <Link href="/calendar">
                  空き状況を確認 <Calendar className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
