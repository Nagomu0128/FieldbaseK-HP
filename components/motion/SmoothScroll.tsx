"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsapConfig";

let lenisInstance: Lenis | null = null;

/** Header 等から慣性スクロールを一時停止するためのアクセサ */
export function getLenis(): Lenis | null {
  return lenisInstance;
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const rafCallback = useRef<((time: number) => void) | null>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisInstance = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    rafCallback.current = raf;
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      if (rafCallback.current) gsap.ticker.remove(rafCallback.current);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  // ページ遷移時: 先頭へ即時スクロールし、レイアウト確定後に ScrollTrigger を再計測
  useEffect(() => {
    lenisInstance?.scrollTo(0, { immediate: true, force: true });
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return <>{children}</>;
}
