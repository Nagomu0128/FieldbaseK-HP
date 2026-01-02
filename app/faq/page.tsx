"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/Container";
import {
  HelpCircle,
  Calendar,
  CreditCard,
  Car,
  Users,
  XCircle,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const faqCategories = [
  {
    id: "reservation",
    title: "予約について",
    icon: Calendar,
    color: "from-blue-500 to-blue-600",
    faqs: [
      {
        q: "予約はいつから可能ですか？",
        a: "ご利用予定日の3ヶ月前から予約を受け付けております。繁忙期（GW、夏休み、年末年始等）はお早めのご予約をおすすめします。",
      },
      {
        q: "予約の変更はできますか？",
        a: "ご利用日の7日前までであれば、空きがある場合に限り変更可能です。お早めにご連絡ください。",
      },
      {
        q: "当日の予約は可能ですか？",
        a: "空きがあれば可能ですが、車両の準備や説明のため、できる限り前日までにご予約いただくことをおすすめします。",
      },
    ],
  },
  {
    id: "pricing",
    title: "料金について",
    icon: CreditCard,
    color: "from-green-500 to-green-600",
    faqs: [
      {
        q: "料金にはどこまで含まれていますか？",
        a: "基本料金には車両レンタル料、保険料、基本装備使用料、24時間サポート料が含まれます。燃料代、高速道路料金、駐車場料金、キャンプ場利用料は別途お客様負担となります。",
      },
      {
        q: "支払い方法は何がありますか？",
        a: "現金、銀行振込、クレジットカード（Visa、MasterCard、JCB等）でのお支払いが可能です（要確認）。",
      },
      {
        q: "延長料金はどうなりますか？",
        a: "事前にご連絡いただければ、空きがある場合に限り延長可能です。延長料金は通常料金に準じますが、詳細はお問い合わせください。",
      },
      {
        q: "学割や団体割引はありますか？",
        a: "申し訳ございませんが、現在は割引制度はございません。長期レンタルの場合は特別料金をご用意できる場合がありますので、ご相談ください。",
      },
    ],
  },
  {
    id: "vehicle",
    title: "車両について",
    icon: Car,
    color: "from-primary to-primary-dark",
    faqs: [
      {
        q: "運転に必要な免許は？",
        a: "普通自動車免許（AT限定可）で運転可能です（要確認）。ただし、高さ制限等にご注意いただく必要があります。",
      },
      {
        q: "何人まで乗車できますか？",
        a: "乗車定員は6名、就寝定員は4名です（要確認）。詳しくは車両詳細ページをご覧ください。",
      },
      {
        q: "ペットは同乗可能ですか？",
        a: "ペット同乗については個別にご相談ください。ケージ使用等の条件がございます。",
      },
      {
        q: "車内で喫煙はできますか？",
        a: "車内は全面禁煙です。喫煙された場合、クリーニング費用として追加料金が発生します。",
      },
      {
        q: "初めてでも運転できますか？",
        a: "はい、出発前に丁寧に操作説明を行いますのでご安心ください。走行中も24時間サポート体制でフォローいたします。",
      },
    ],
  },
  {
    id: "usage",
    title: "利用当日について",
    icon: Users,
    color: "from-secondary to-secondary-dark",
    faqs: [
      {
        q: "受取・返却の時間は？",
        a: "基本的に10:00〜18:00の間で調整させていただきます（要確認）。ご希望の時間があればご相談ください。",
      },
      {
        q: "受取・返却場所は？",
        a: "弊社指定の場所での受取・返却となります。詳細はご予約時にご案内いたします。",
      },
      {
        q: "当日の持ち物は？",
        a: "運転免許証（必須）、お支払い（未済の場合）が必要です。その他、個人的な荷物や寝具等はお客様でご準備ください。",
      },
      {
        q: "返却時の清掃はどこまで必要ですか？",
        a: "簡単な清掃で結構です。ゴミはお持ち帰りいただき、明らかな汚れは拭き取っていただければ大丈夫です。",
      },
      {
        q: "燃料はどうすればよいですか？",
        a: "満タン返しでお願いしております。返却前に給油をお願いいたします。",
      },
    ],
  },
  {
    id: "cancellation",
    title: "キャンセルについて",
    icon: XCircle,
    color: "from-purple-500 to-purple-600",
    faqs: [
      {
        q: "キャンセル料はいつから発生しますか？",
        a: "利用日の30日前まで無料、29日前から所定のキャンセル料が発生します。詳しくは料金ページをご確認ください。",
      },
      {
        q: "天候不良の場合のキャンセルは？",
        a: "台風等の重大な気象警報が発令されている場合は、個別にご相談させていただきます。お客様都合によるキャンセルは通常のキャンセル料が適用されます。",
      },
      {
        q: "予約者以外の運転は可能ですか？",
        a: "事前にお申し出いただき、運転者全員の免許証を確認させていただければ可能です。",
      },
    ],
  },
];

const quickLinks = [
  { title: "車両詳細を見る", href: "/vehicle", icon: Car },
  { title: "料金を確認する", href: "/pricing", icon: CreditCard },
  { title: "ご利用の流れ", href: "/flow", icon: Users },
  { title: "お問い合わせ", href: "/contact", icon: MessageCircle },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80"
          alt="よくある質問"
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
            <HelpCircle className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              よくある質問
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              お客様からよくいただくご質問にお答えします
            </p>
          </motion.div>
        </Container>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">カテゴリー別FAQ</h2>
            <p className="text-xl text-text-sub max-w-2xl mx-auto">
              知りたい情報のカテゴリーからお探しください
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className={`h-2 bg-gradient-to-r ${category.color}`} />
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}
                      >
                        <category.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">{category.title}</h3>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                      {category.faqs.map((faq, faqIndex) => (
                        <AccordionItem
                          key={faqIndex}
                          value={`item-${categoryIndex}-${faqIndex}`}
                        >
                          <AccordionTrigger className="text-left hover:text-primary transition-colors">
                            {faq.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-text-sub leading-relaxed">
                            {faq.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">関連ページ</h2>
            <p className="text-xl text-text-sub max-w-2xl mx-auto">
              さらに詳しい情報はこちらから
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg"
                    >
                      <link.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="font-semibold mb-4">{link.title}</h3>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
                    >
                      <Link href={link.href}>
                        詳しく見る <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-dark to-primary">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <MessageCircle className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              まだ疑問が解決しませんか？
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              お気軽にお問い合わせください。
              <br />
              専任スタッフが丁寧にお答えいたします。
            </p>
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary-dark text-white hover:shadow-2xl transition-all duration-300 text-lg px-8 py-6"
            >
              <Link href="/contact">
                お問い合わせ <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
