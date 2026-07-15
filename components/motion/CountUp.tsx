"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsapConfig";

interface CountUpProps {
  /** 数値文字列("100" 等)。数値でない場合はそのまま表示 */
  value: string;
  className?: string;
}

/** ビューに入ったら 0 から値までカウントアップ(GSAP)。SSR/リデュース時は実値を表示 */
export default function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const num = Number(value.replace(/,/g, ""));
  const isNumeric = value.trim() !== "" && !Number.isNaN(num);

  useGSAP(() => {
    if (!isNumeric || prefersReducedMotion() || !ref.current) return;
    const counter = { v: 0 };
    gsap.to(counter, {
      v: num,
      duration: 1.6,
      ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 88%", once: true },
      onStart: () => {
        if (ref.current) ref.current.textContent = "0";
      },
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = Math.round(counter.v).toLocaleString(
            "ja-JP"
          );
        }
      },
    });
  }, []);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
