"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/Container";
import { Check, X, Calendar, ArrowRight, AlertCircle, Clock, Percent } from "lucide-react";

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
              基本の貸出時間は9時〜18時となります（税込）
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
                <div className="overflow-x-auto">
                  <table className="w-full text-center">
                    <thead>
                      <tr className="border-b-2 border-primary/20">
                        <th className="py-4 px-4 text-left font-semibold text-text-sub"></th>
                        <th className="py-4 px-4 font-semibold text-lg">一日料金</th>
                        <th className="py-4 px-4 font-semibold text-lg">ショート料金</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-5 px-4 text-left font-semibold text-lg">平日</td>
                        <td className="py-5 px-4">
                          <span className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            ¥16,500
                          </span>
                        </td>
                        <td className="py-5 px-4">
                          <span className="text-3xl font-bold text-primary">
                            ¥11,000
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-5 px-4 text-left font-semibold text-lg">土日祝</td>
                        <td className="py-5 px-4">
                          <span className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            ¥22,000
                          </span>
                        </td>
                        <td className="py-5 px-4">
                          <span className="text-3xl font-bold text-primary">
                            ¥11,000
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 space-y-3 text-text-sub">
                  <div className="flex items-start">
                    <span className="text-primary mr-2 mt-0.5">•</span>
                    <span>ショート料金は15時〜18時までの午後引き渡し、または9:00〜12:00までの翌朝返却の場合に適用されます。</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-2 mt-0.5">•</span>
                    <span>貸出料金には自動車保険料を含んでおります。</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-2 mt-0.5">•</span>
                    <span>ペットの同乗はお断りさせていただいています。</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>

      {/* Extension Pricing */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">延長料金</h2>
            <p className="text-xl text-text-sub max-w-2xl mx-auto">
              ご返却時間の延長も柔軟に対応いたします（税込）
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
                <div className="overflow-x-auto">
                  <table className="w-full text-center">
                    <thead>
                      <tr className="border-b-2 border-primary/20">
                        <th className="py-4 px-4 text-left font-semibold text-text-sub"></th>
                        <th className="py-4 px-4 font-semibold text-lg">1時間延長</th>
                        <th className="py-4 px-4 font-semibold text-lg">ゆっくりプラン</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-5 px-4 text-left font-semibold text-lg">平日</td>
                        <td className="py-5 px-4">
                          <span className="text-2xl font-bold text-primary">¥2,200</span>
                        </td>
                        <td className="py-5 px-4">
                          <span className="text-2xl font-bold text-primary">¥4,400</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-5 px-4 text-left font-semibold text-lg">土日祝</td>
                        <td className="py-5 px-4">
                          <span className="text-2xl font-bold text-primary">¥2,200</span>
                        </td>
                        <td className="py-5 px-4">
                          <span className="text-2xl font-bold text-primary">¥5,500</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 space-y-3 text-text-sub">
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>ゆっくりプランは、本来18時までの返却時間を延長料金無しで22時までとさせていただきます。（事前にお申込みください）</span>
                  </div>
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                    <span>ご返却最終時刻は22時までとなっております。22時以降のご返却につきましては、翌日のショート料金（翌日12時迄の返却）料金を適用させていただきます。</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>

      {/* Long-term Discount */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">長期割引</h2>
            <p className="text-xl text-text-sub max-w-2xl mx-auto">
              3日以上の長期ご利用時には、総額に対して割引を適用いたします
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { days: "3日以上", discount: "5%", color: "from-blue-400 to-blue-500" },
              { days: "5日以上", discount: "10%", color: "from-primary to-primary-dark" },
              { days: "7日以上", discount: "15%", color: "from-secondary to-secondary-dark" },
              { days: "10日以上", discount: "20%", color: "from-orange-500 to-red-500" },
            ].map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 text-center">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${tier.color} rounded-full flex items-center justify-center mb-4`}>
                      <Percent className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-lg font-semibold mb-2">{tier.days}</div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {tier.discount}
                    </div>
                    <div className="text-sm text-text-sub mt-1">割引</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Price Simulation */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">料金シミュレーション例</h2>
            <p className="text-xl text-text-sub max-w-2xl mx-auto">
              代表的な利用パターンの料金例をご紹介します
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {simulations.map((sim, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-t-lg">
                    <CardTitle className="text-center text-lg">
                      ケース{index + 1}
                    </CardTitle>
                    <p className="text-center text-sm opacity-90">{sim.title}</p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-3 mb-6">
                      {sim.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                        >
                          <span className="text-sm text-text-sub">{item.label}</span>
                          <span className="font-semibold">{item.price}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t-2 border-primary/20">
                      <span className="font-bold text-lg">合計</span>
                      <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {sim.total}
                      </span>
                    </div>
                    <p className="text-xs text-text-sub mt-2 text-right">（税込）</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Included/Not Included Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">キャンセル料金</h2>
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
                        className={`font-semibold text-lg ${
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
