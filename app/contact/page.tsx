"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Container from "@/components/Container";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Clock,
  MessageCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "メール",
    content: "info@fieldbase-k.jp（要設定）",
    link: "mailto:info@fieldbase-k.jp",
  },
  {
    icon: Phone,
    title: "電話",
    content: "000-0000-0000（要設定）",
    link: "tel:0000000000",
  },
  {
    icon: MapPin,
    title: "所在地",
    content: "所在地情報（要設定）",
    link: "#",
  },
];

const faqTopics = [
  "ご利用について",
  "料金について",
  "予約・キャンセルについて",
  "車両について",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    days: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Formspree または他のフォームサービスのエンドポイントに送信
    // 実装例（Formspreeを使用する場合）:
    /*
    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    */

    // デモ用の遅延
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="max-w-2xl mx-auto text-center shadow-2xl">
              <CardContent className="p-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="w-12 h-12 text-white" />
                </motion.div>
                <h2 className="text-3xl font-bold mb-4">送信完了</h2>
                <p className="text-xl text-text-sub mb-8">
                  お問い合わせありがとうございます。
                  <br />
                  内容を確認次第、担当者よりご連絡させていただきます。
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-gradient-to-r from-primary to-primary-dark"
                >
                  もう一度送信する
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&q=80"
          alt="お問い合わせ"
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
              お問い合わせ
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              ご質問・ご予約など、お気軽にお問い合わせください
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="shadow-2xl">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-6">
                      お問い合わせフォーム
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name */}
                      <div>
                        <Label htmlFor="name" className="text-base">
                          お名前 <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-2"
                          placeholder="山田 太郎"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <Label htmlFor="email" className="text-base">
                          メールアドレス <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-2"
                          placeholder="example@email.com"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <Label htmlFor="phone" className="text-base">
                          電話番号
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-2"
                          placeholder="090-1234-5678"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Date */}
                        <div>
                          <Label htmlFor="date" className="text-base">
                            利用希望日
                          </Label>
                          <Input
                            id="date"
                            name="date"
                            type="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="mt-2"
                          />
                        </div>

                        {/* Days */}
                        <div>
                          <Label htmlFor="days" className="text-base">
                            利用日数
                          </Label>
                          <select
                            id="days"
                            name="days"
                            value={formData.days}
                            onChange={handleChange}
                            className="mt-2 w-full h-10 px-3 rounded-md border border-input bg-background"
                          >
                            <option value="">選択してください</option>
                            <option value="1泊2日">1泊2日</option>
                            <option value="2泊3日">2泊3日</option>
                            <option value="3泊4日">3泊4日</option>
                            <option value="4泊5日">4泊5日</option>
                            <option value="5泊以上">5泊以上</option>
                            <option value="未定">未定</option>
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <Label htmlFor="message" className="text-base">
                          お問い合わせ内容 <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="mt-2 min-h-[150px]"
                          placeholder="ご質問やご要望など、お気軽にお書きください"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        size="lg"
                        className="w-full bg-gradient-to-r from-primary to-primary-dark hover:shadow-xl transition-all duration-300 text-lg"
                      >
                        {isSubmitting ? (
                          <>送信中...</>
                        ) : (
                          <>
                            送信する <Send className="ml-2 w-5 h-5" />
                          </>
                        )}
                      </Button>

                      <p className="text-sm text-text-sub text-center">
                        ※ 必須項目は必ずご入力ください
                        <br />※ 通常1〜2営業日以内にご返信いたします
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Contact Details */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="shadow-xl">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-6">直接ご連絡</h3>
                    <div className="space-y-4">
                      {contactInfo.map((info, index) => (
                        <motion.a
                          key={index}
                          href={info.link}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors"
                        >
                          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                            <info.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-sm text-text-sub mb-1">
                              {info.title}
                            </div>
                            <div className="text-sm">{info.content}</div>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="shadow-xl bg-gradient-to-br from-primary/5 to-secondary/5">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <Clock className="w-5 h-5 text-primary mr-2" />
                      営業時間
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-text-sub">平日</span>
                        <span className="font-semibold">10:00 - 18:00（要確認）</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-sub">土日祝</span>
                        <span className="font-semibold">10:00 - 18:00（要確認）</span>
                      </div>
                      <div className="pt-3 border-t border-gray-200">
                        <span className="text-text-sub">定休日：要設定</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* FAQ Link */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="shadow-xl">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <MessageCircle className="w-5 h-5 text-primary mr-2" />
                      よくあるご質問
                    </h3>
                    <p className="text-sm text-text-sub mb-4">
                      こちらで解決するかもしれません
                    </p>
                    <ul className="space-y-2 mb-4">
                      {faqTopics.map((topic, index) => (
                        <li key={index} className="text-sm">
                          <span className="text-primary mr-2">→</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-2 border-primary hover:bg-primary hover:text-white"
                    >
                      <a href="/faq">FAQを見る</a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
