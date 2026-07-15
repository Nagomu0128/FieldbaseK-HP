"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** 秒。カード群のスタッガーは delay={index * 0.08} のように指定 */
  delay?: number;
  /** 立ち上がり距離(px) */
  y?: number;
  duration?: number;
  once?: boolean;
}

/** スクロールで出現する汎用ラッパー(framer-motion) */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  duration = 0.8,
  once = true,
}: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "0px 0px -80px 0px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
