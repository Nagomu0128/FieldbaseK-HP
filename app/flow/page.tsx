"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/Container";
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
    color: "from-blue-500 to-blue-600",
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
    color: "from-green-500 to-green-600",
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
    color: "from-primary to-primary-dark",
  },
  {
    number: 4,
    icon: Map,
    title: "ご利用・旅行",
    description: "思い出に残る素敵な旅を",
    duration: "ご予約期間",
    details: [
      "安全運転でお楽しみください",
      "24時間サポート体制で安心",
      "困ったことがあればすぐにご連絡ください",
      "写真をたくさん撮って思い出を残しましょう",
    ],
    needed: ["緊急連絡先（お渡しします）", "車両マニュアル"],
    color: "from-secondary to-secondary-dark",
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
    color: "from-purple-500 to-purple-600",
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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=1920&q=80"
          alt="ご利用の流れ"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              ご利用の流れ
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              初めての方も安心！簡単5ステップ
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              予約から返却まで
            </h2>
            <p className="text-xl text-text-sub max-w-2xl mx-auto">
              スムーズなご利用のために、流れをご確認ください
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-12 top-32 w-0.5 h-32 bg-gradient-to-b from-gray-300 to-transparent z-0" />
                )}

                <Card className="mb-8 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <div className={`h-2 bg-gradient-to-r ${step.color}`} />
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Icon and Number */}
                      <div className="flex-shrink-0">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg relative`}
                        >
                          <step.icon className="w-12 h-12 text-white" />
                          <div className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                              {step.number}
                            </span>
                          </div>
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold mb-2">{step.title}</h3>
                        <p className="text-xl text-text-sub mb-4">
                          {step.description}
                        </p>

                        <div className="flex items-center gap-2 mb-6 text-sm">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="text-text-sub">所要時間: {step.duration}</span>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Details */}
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center">
                              <div className="w-1 h-4 bg-primary rounded-full mr-2" />
                              詳細
                            </h4>
                            <ul className="space-y-2">
                              {step.details.map((detail, i) => (
                                <li key={i} className="flex items-start text-sm">
                                  <span className="text-primary mr-2 mt-1">•</span>
                                  <span className="text-text-sub">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Needed Items */}
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center">
                              <div className="w-1 h-4 bg-secondary rounded-full mr-2" />
                              必要なもの
                            </h4>
                            <ul className="space-y-2">
                              {step.needed.map((item, i) => (
                                <li
                                  key={i}
                                  className="flex items-center text-sm bg-secondary/10 px-3 py-2 rounded-lg"
                                >
                                  <CheckCircle className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Important Notes Section */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">重要事項</h2>
            <p className="text-xl text-text-sub max-w-2xl mx-auto">
              ご利用前に必ずご確認ください
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {importantNotes.map((note, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <note.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          {note.title}
                        </h3>
                        <p className="text-text-sub">{note.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Link Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="max-w-3xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  よくあるご質問
                </h3>
                <p className="text-text-sub mb-6">
                  さらに詳しい情報は、FAQページをご覧ください。
                  <br />
                  疑問や不安な点があれば、お気軽にお問い合わせください。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-primary to-primary-dark"
                  >
                    <Link href="/faq">
                      FAQを見る <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary hover:bg-primary hover:text-white"
                  >
                    <Link href="/contact">
                      お問い合わせ <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-dark to-primary">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              準備ができましたら、ご予約ください
            </h2>
            <p className="text-xl mb-8 opacity-90">
              空き状況を確認して、素敵な旅の計画を始めましょう
            </p>
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary-dark text-white hover:shadow-2xl transition-all duration-300 text-lg px-8 py-6"
            >
              <Link href="/calendar">
                空き状況を確認 <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
