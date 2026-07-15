"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsapConfig";
import { cn } from "@/lib/utils";

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  /** 移動量(yPercent 合計)。大きいほど視差が強い */
  amount?: number;
}

/**
 * GSAP ScrollTrigger の scrub による画像パララックス。
 * 子要素は自動で少し拡大され、上下移動しても縁が見えない。
 */
export default function Parallax({
  children,
  className,
  amount = 14,
}: ParallaxProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        innerRef.current,
        { yPercent: -amount / 2 },
        {
          yPercent: amount / 2,
          ease: "none",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    },
    { scope: wrapRef }
  );

  return (
    <div ref={wrapRef} className={cn("overflow-hidden", className)}>
      <div
        ref={innerRef}
        className="relative h-full w-full scale-[1.16] will-change-transform"
      >
        {children}
      </div>
    </div>
  );
}
