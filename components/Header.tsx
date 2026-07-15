"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { getLenis } from "@/components/motion/SmoothScroll";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const navLinks = [
  { href: "/", label: "ホーム" },
  { href: "/vehicle", label: "車両詳細" },
  { href: "/pricing", label: "料金" },
  { href: "/flow", label: "ご利用の流れ" },
  { href: "/calendar", label: "空き状況" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastY = useRef(0);
  const pathname = usePathname();
  const reduced = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 40);
      // 下方向スクロールで隠し、上方向で出す
      setIsHidden(y > 160 && y > lastY.current);
      lastY.current = y;
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // メニュー展開中は慣性スクロールを停止し、背面コンテンツをフォーカス不可(inert)にする
  useEffect(() => {
    const lenis = getLenis();
    const pageRegions = [
      document.querySelector("main"),
      document.querySelector("footer"),
    ];
    if (isMenuOpen) {
      lenis?.stop();
      document.documentElement.classList.add("lenis-stopped");
      pageRegions.forEach((el) => el?.setAttribute("inert", ""));
    } else {
      lenis?.start();
      document.documentElement.classList.remove("lenis-stopped");
      pageRegions.forEach((el) => el?.removeAttribute("inert"));
    }
    return () => {
      getLenis()?.start();
      document.documentElement.classList.remove("lenis-stopped");
      pageRegions.forEach((el) => el?.removeAttribute("inert"));
    };
  }, [isMenuOpen]);

  // md 以上にリサイズされたらメニューを閉じる(UIだけ消えてロックが残るのを防ぐ)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setIsMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const onDark = !isScrolled || isMenuOpen;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color,box-shadow] duration-500",
          isHidden && !isMenuOpen && "-translate-y-full",
          isScrolled && !isMenuOpen
            ? "border-b border-border bg-paper/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              "font-en text-xl font-bold tracking-tight transition-colors",
              onDark ? "text-paper" : "text-ink"
            )}
          >
            FieldBase-K
            <span className="text-secondary">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "group relative px-4 py-2 text-sm font-medium transition-colors",
                    onDark
                      ? "text-paper/80 hover:text-paper"
                      : "text-ink/70 hover:text-ink",
                    active && (onDark ? "text-paper" : "text-ink")
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute inset-x-4 bottom-0.5 h-px origin-left scale-x-0 bg-secondary transition-transform duration-300 group-hover:scale-x-100",
                      active && "scale-x-100"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            {/* CTA */}
            <Link
              href="/contact"
              className="hidden h-11 items-center gap-1.5 rounded-full bg-secondary px-6 text-sm font-bold text-ink transition-colors duration-300 hover:bg-secondary-dark md:inline-flex"
            >
              お問い合わせ
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border transition-colors md:hidden",
                onDark
                  ? "border-paper/25 text-paper"
                  : "border-ink/15 text-ink"
              )}
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={reduced ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col bg-ink md:hidden"
          >
            <div className="flex-1 overflow-y-auto px-6 pb-10 pt-28" data-lenis-prevent>
              <p aria-hidden="true" className="text-eyebrow mb-6 text-secondary">
                Menu
              </p>
              <nav className="space-y-1">
                {navLinks.map((link, index) => {
                  const active = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={reduced ? {} : { opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.05 + index * 0.06,
                        ease: EASE,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={cn(
                          "group flex items-baseline gap-4 border-b border-line-dark py-4",
                          active ? "text-secondary" : "text-paper"
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className="font-en text-xs text-paper/40"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-2xl font-black tracking-tight">
                          {link.label}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                initial={reduced ? {} : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
                className="mt-10"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-secondary text-base font-bold text-ink"
                >
                  お問い合わせ
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
