"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Container from "@/components/Container";
import Reveal from "@/components/motion/Reveal";
import PageIntro from "@/components/site/PageIntro";
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
    content: "fieldbasek@gmail.com",
  },
  {
    icon: Phone,
    title: "電話",
    content: "070-9188-3811",
    link: "tel:070-9188-3811",
  },
  {
    icon: MapPin,
    title: "所在地",
    content: "滋賀県大津市松山町 6-31",
    link: "https://maps.app.goo.gl/PVzS5o7RfNm7uu8F7"
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
  const [submitError, setSubmitError] = useState<string | null>(null);

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
    setSubmitError(null);

    try {
      const response = await fetch("https://formspree.io/f/xykonapw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          お名前: formData.name,
          メールアドレス: formData.email,
          電話番号: formData.phone,
          利用希望日: formData.date,
          利用日数: formData.days,
          お問い合わせ内容: formData.message,
          _replyto: formData.email,
          _subject: `【FieldBase-K】お問い合わせ：${formData.name}様`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          days: "",
          message: "",
        });
      } else {
        const data = await response.json().catch(() => null);
        const message =
          data?.errors?.map((err: { message: string }) => err.message).join(", ") ??
          "送信に失敗しました。お手数ですが時間をおいて再度お試しください。";
        setSubmitError(message);
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      setSubmitError(
        "送信中にエラーが発生しました。ネットワーク接続をご確認の上、再度お試しください。"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-paper px-4 py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-white p-8 text-center sm:p-12 md:p-16">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary"
              >
                <CheckCircle className="h-9 w-9 text-paper" />
              </motion.div>
              <p
                aria-hidden="true"
                className="text-eyebrow mt-8 text-primary"
              >
                Thank You
              </p>
              <h2 className="mt-3 font-display text-3xl font-black">
                送信完了
              </h2>
              <p className="mt-5 leading-relaxed text-text-sub md:text-lg">
                お問い合わせありがとうございます。
                <br />
                内容を確認次第、担当者よりご連絡させていただきます。
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                size="lg"
                className="mt-9"
              >
                もう一度送信する
              </Button>
            </div>
          </motion.div>
        </Container>
      </div>
    );
  }

  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="お問い合わせ"
        lead="ご質問・ご予約など、お気軽にお問い合わせください"
      />

      {/* Main Content */}
      <section className="bg-paper py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-14">
            {/* Contact Form */}
            <Reveal className="lg:col-span-2">
              <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 md:p-10">
                <p aria-hidden="true" className="text-eyebrow text-primary">
                  Form
                </p>
                <h2 className="mt-3 font-display text-2xl font-black sm:text-3xl">
                  お問い合わせフォーム
                </h2>

                <form onSubmit={handleSubmit} className="mt-9 space-y-7">
                  {/* Name */}
                  <div>
                    <Label htmlFor="name" className="text-sm font-bold">
                      お名前 <span className="text-secondary-dark">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2.5"
                      placeholder="山田 太郎"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="text-sm font-bold">
                      メールアドレス{" "}
                      <span className="text-secondary-dark">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2.5"
                      placeholder="example@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="phone" className="text-sm font-bold">
                      電話番号
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2.5"
                      placeholder="090-1234-5678"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                    {/* Date */}
                    <div>
                      <Label htmlFor="date" className="text-sm font-bold">
                        利用希望日
                      </Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="mt-2.5"
                      />
                    </div>

                    {/* Days */}
                    <div>
                      <Label htmlFor="days" className="text-sm font-bold">
                        利用日数
                      </Label>
                      <select
                        id="days"
                        name="days"
                        value={formData.days}
                        onChange={handleChange}
                        className="mt-2.5 flex h-12 w-full rounded-lg border border-border bg-white px-4 text-base transition-colors hover:border-ink/30 focus-visible:border-secondary focus-visible:outline-none"
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
                    <Label htmlFor="message" className="text-sm font-bold">
                      お問い合わせ内容{" "}
                      <span className="text-secondary-dark">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2.5 min-h-[150px]"
                      placeholder="ご質問やご要望など、お気軽にお書きください"
                    />
                  </div>

                  {submitError && (
                    <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                      {submitError}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <>送信中...</>
                    ) : (
                      <>
                        送信する <Send className="!size-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-sm leading-relaxed text-text-sub">
                    ※ 必須項目は必ずご入力ください
                    <br />※ 通常1〜2営業日以内にご返信いたします
                  </p>
                </form>
              </div>
            </Reveal>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-border bg-white p-7">
                  <p aria-hidden="true" className="text-eyebrow text-primary">
                    Direct
                  </p>
                  <h3 className="mt-3 font-display text-xl font-black">
                    直接ご連絡
                  </h3>
                  <div className="mt-5 space-y-1">
                    {contactInfo.map((info) => (
                      <a
                        key={info.title}
                        href={info.link}
                        target={
                          info.link?.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          info.link?.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="group flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-paper"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border transition-colors duration-300 group-hover:border-secondary">
                          <info.icon className="h-4 w-4 text-primary" />
                        </span>
                        <span>
                          <span className="block text-xs font-bold text-text-sub">
                            {info.title}
                          </span>
                          <span className="mt-0.5 block text-sm">
                            {info.content}
                          </span>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Business Hours */}
              <Reveal delay={0.2}>
                <div className="rounded-2xl bg-ink p-7 text-paper">
                  <h3 className="flex items-center gap-2.5 font-display text-xl font-black">
                    <Clock className="h-5 w-5 text-secondary" />
                    営業時間
                  </h3>
                  <div className="mt-5 space-y-1 text-sm">
                    <div className="flex justify-between border-b border-line-dark py-2.5">
                      <span className="text-paper/60">平日</span>
                      <span className="font-en font-semibold tracking-wide">
                        9:00 - 18:00
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-line-dark py-2.5">
                      <span className="text-paper/60">土日祝</span>
                      <span className="font-en font-semibold tracking-wide">
                        9:00 - 18:00
                      </span>
                    </div>
                    <div className="pt-3">
                      <span className="text-paper/60">不定休</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* FAQ Link */}
              <Reveal delay={0.3}>
                <div className="rounded-2xl border border-border bg-white p-7">
                  <h3 className="flex items-center gap-2.5 font-display text-xl font-black">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    よくあるご質問
                  </h3>
                  <p className="mt-3 text-sm text-text-sub">
                    こちらで解決するかもしれません
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {faqTopics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-2.5 text-sm"
                      >
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-secondary"
                        />
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-6 w-full border-ink/20 hover:opacity-100 hover:border-primary hover:text-primary"
                  >
                    <a href="/faq">FAQを見る</a>
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
