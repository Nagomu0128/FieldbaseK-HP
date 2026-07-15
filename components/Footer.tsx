"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import campingCarsOgp from "@/assets/camping-cars-ogp.jpg";

// 関連サイトの OGP 情報(https://camping-cars.jp/ の og:title / og:description より)
const relatedSite = {
  href: "https://camping-cars.jp/",
  name: "キャンピングカースタイル",
  title: "キャンピングカーの情報ならキャンピングカースタイル",
  description:
    "キャンピングカーの総合情報。キャンピングカーの車種紹介や新車情報、メーカー・ビルダー紹介など、買いたい人のための全国のキャンピングカー販売店を掲載。キャンピングカーの選び方や使い方、旅の仕方などご覧下さい。",
  displayUrl: "camping-cars.jp",
};

const footerLinks = {
  pages: [
    { href: "/vehicle", label: "車両詳細" },
    { href: "/pricing", label: "料金" },
    { href: "/flow", label: "ご利用の流れ" },
    { href: "/calendar", label: "空き状況" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "お問い合わせ" },
  ],
  legal: [
    { href: "/privacy-policy.pdf", label: "プライバシーポリシー", external: true },
    { href: "/rental-terms.pdf", label: "貸渡約款", external: true },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  {
    icon: Instagram,
    href: "https://www.instagram.com/fieldbasek/",
    label: "Instagram",
  },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-20 sm:px-6 md:pt-28 lg:px-8">
        {/* Wordmark */}
        <Reveal>
          <p
            aria-hidden="true"
            className="font-en text-[13.5vw] font-bold leading-[0.95] tracking-tight text-paper md:text-[7.5rem]"
          >
            FieldBase-K<span className="text-secondary">.</span>
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 border-t border-line-dark pt-12 md:mt-16 md:grid-cols-12 md:pt-16">
          {/* Brand Section */}
          <Reveal className="md:col-span-6">
            <p className="max-w-md leading-relaxed text-paper/60">
              家族での思い出づくりに最適なキャンピングカーレンタルサービス。
              初めての方でも安心してご利用いただけるよう、丁寧なサポートを提供しています。
            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-3 text-sm">
              <a
                href="https://maps.app.goo.gl/PVzS5o7RfNm7uu8F7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-paper/70 transition-colors hover:text-secondary"
              >
                <MapPin className="h-4 w-4 shrink-0 text-secondary" />
                <span>滋賀県大津市松山町 6-31</span>
              </a>
              <div className="flex items-center gap-3 text-paper/70">
                <Phone className="h-4 w-4 shrink-0 text-secondary" />
                <span className="font-en tracking-wide">070-9188-3811</span>
              </div>
              <div className="flex items-center gap-3 text-paper/70">
                <Mail className="h-4 w-4 shrink-0 text-secondary" />
                <span className="font-en tracking-wide">
                  fieldbasek@gmail.com
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-3">
              {socialLinks.map((social) => {
                const isExternal = social.href.startsWith("http");
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-line-dark text-paper/70 transition-all duration-300 hover:border-secondary hover:text-secondary"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </Reveal>

          {/* Quick Links */}
          <Reveal delay={0.1} className="md:col-span-3">
            <h4 className="mb-6 text-sm font-bold tracking-[0.18em] text-secondary">
              クイックリンク
            </h4>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-paper/70 transition-colors hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Legal */}
          <Reveal delay={0.2} className="md:col-span-3">
            <h4 className="mb-6 text-sm font-bold tracking-[0.18em] text-secondary">
              法的情報
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-paper/70 transition-colors hover:text-paper"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-paper/70 transition-colors hover:text-paper"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Related Site (OGP link card) */}
        <Reveal>
          <div className="mt-14 border-t border-line-dark pt-10">
            <h4 className="mb-6 text-sm font-bold tracking-[0.18em] text-secondary">
              関連サイト
            </h4>
            <a
              href={relatedSite.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex max-w-2xl flex-col overflow-hidden rounded-2xl border border-line-dark bg-ink-soft transition-colors duration-300 hover:border-secondary sm:flex-row"
            >
              <div className="relative aspect-[820/360] w-full shrink-0 bg-paper sm:aspect-auto sm:w-64">
                <Image
                  src={campingCarsOgp}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 256px, 100vw"
                  className="object-cover"
                  placeholder="blur"
                />
              </div>
              <div className="flex min-w-0 flex-col justify-center gap-2 p-5 sm:p-6">
                <p className="font-bold leading-snug text-paper transition-colors duration-300 group-hover:text-secondary">
                  {relatedSite.title}
                </p>
                <p className="line-clamp-2 text-xs leading-relaxed text-paper/55">
                  {relatedSite.description}
                </p>
                <p
                  aria-hidden="true"
                  className="mt-1 flex items-center gap-1.5 font-en text-xs tracking-wide text-paper/60"
                >
                  {relatedSite.displayUrl}
                  <ArrowUpRight className="h-3.5 w-3.5 text-secondary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </p>
              </div>
            </a>
          </div>
        </Reveal>

        {/* Bottom Bar */}
        <div className="mt-14 border-t border-line-dark pt-8">
          <p className="text-center text-sm text-paper/50">
            &copy; {new Date().getFullYear()} FieldBase-K. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
