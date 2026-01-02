"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/Container";
import {
  Calendar as CalendarIcon,
  Check,
  X,
  AlertCircle,
  ArrowRight,
  Clock,
} from "lucide-react";

// Google Calendar の埋め込みURL（実際のカレンダーIDに置き換える必要があります）
const GOOGLE_CALENDAR_EMBED_URL = "YOUR_GOOGLE_CALENDAR_EMBED_URL_HERE";

const legend = [
  { status: "available", label: "空き", color: "bg-green-500", icon: Check },
  { status: "booked", label: "予約済み", color: "bg-red-500", icon: X },
  { status: "pending", label: "仮予約", color: "bg-yellow-500", icon: Clock },
];

const instructions = [
  {
    step: 1,
    title: "カレンダーで空き状況を確認",
    description: "ご希望の日程が空いているかカレンダーでご確認ください",
  },
  {
    step: 2,
    title: "お問い合わせフォームからご連絡",
    description: "空いている日程があれば、お問い合わせフォームからご連絡ください",
  },
  {
    step: 3,
    title: "予約確定",
    description: "詳細をご相談の上、予約を確定させていただきます",
  },
];

const notes = [
  "カレンダーは随時更新されますが、タイムラグが生じる場合があります",
  "最新の空き状況は、お問い合わせ時に確認させていただきます",
  "繁忙期（GW、夏休み、年末年始等）はお早めのご予約をおすすめします",
  "前後の日程も含めてご検討いただくと、ご予約いただきやすくなります",
];

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1920&q=80"
          alt="空き状況カレンダー"
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
              空き状況カレンダー
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              リアルタイムの予約状況をご確認いただけます
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Legend Section */}
      <section className="py-12 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {legend.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-full shadow-md"
              >
                <div className={`w-4 h-4 ${item.color} rounded-full`} />
                <span className="font-medium">{item.label}</span>
                <item.icon className="w-5 h-5 text-text-sub" />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Calendar Section */}
      <section className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Card className="overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                {/* Google Calendar Embed Placeholder */}
                <div className="relative w-full" style={{ paddingBottom: "75%" }}>
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                    <div className="text-center p-8">
                      <CalendarIcon className="w-20 h-20 text-primary mx-auto mb-6" />
                      <h3 className="text-2xl font-bold mb-4">
                        Google カレンダー連携
                      </h3>
                      <p className="text-text-sub mb-6 max-w-md">
                        実際の運用時には、Google カレンダーがここに表示されます。
                        <br />
                        <br />
                        下記のURLを設定してください：
                        <br />
                        <code className="text-xs bg-gray-200 px-2 py-1 rounded">
                          {GOOGLE_CALENDAR_EMBED_URL}
                        </code>
                      </p>

                      {/* 実際の Google Calendar 埋め込みコード（コメントアウト） */}
                      {/*
                      <iframe
                        src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=Asia%2FTokyo"
                        style={{ border: 0 }}
                        width="100%"
                        height="600"
                        frameBorder="0"
                        scrolling="no"
                      ></iframe>
                      */}

                      <div className="mt-8">
                        <Button
                          asChild
                          className="bg-gradient-to-r from-primary to-primary-dark"
                        >
                          <Link href="/contact">
                            空き状況を問い合わせる <ArrowRight className="ml-2 w-5 h-5" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>

      {/* How to Reserve Section */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">ご予約の流れ</h2>
            <p className="text-xl text-text-sub max-w-2xl mx-auto">
              3ステップで簡単予約
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {instructions.map((instruction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full relative overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary" />
                  <CardContent className="p-6 pt-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto shadow-lg">
                      {instruction.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-center">
                      {instruction.title}
                    </h3>
                    <p className="text-text-sub text-center">
                      {instruction.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Notes Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
                  <AlertCircle className="w-6 h-6 text-secondary mr-3" />
                  ご予約時の注意事項
                </h3>
                <ul className="space-y-3">
                  {notes.map((note, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex items-start"
                    >
                      <span className="text-secondary mr-3 mt-1">•</span>
                      <span className="text-text-sub">{note}</span>
                    </motion.li>
                  ))}
                </ul>
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
              ご希望の日程は見つかりましたか？
            </h2>
            <p className="text-xl mb-8 opacity-90">
              お問い合わせフォームから、お気軽にご連絡ください
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                <Link href="/pricing">
                  料金を見る <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
