"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

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

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line-dark pt-8 md:flex-row">
          <div className="text-sm text-paper/50">
            関連サイト：{" "}
            <a
              href="https://camping-cars.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-secondary"
            >
              キャンピングカースタイル
            </a>
          </div>
          <p className="text-sm text-paper/50">
            &copy; {new Date().getFullYear()} FieldBase-K. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
