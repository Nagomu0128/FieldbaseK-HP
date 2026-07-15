"use client";

import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/Container";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface PageIntroProps {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  children?: React.ReactNode;
}

/** サブページ共通のダークなイントロ帯(画像ヒーローの代替) */
export default function PageIntro({
  eyebrow,
  title,
  lead,
  children,
}: PageIntroProps) {
  const reduced = useReducedMotion();

  const fade = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: EASE },
        };

  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      {/* 背景の巨大な英字(装飾) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 bottom-[-0.18em] select-none font-en text-[23vw] font-bold uppercase leading-none text-paper/[0.04] md:text-[17vw]"
      >
        {eyebrow.split(" ")[0]}
      </div>

      <Container className="relative pb-16 pt-32 sm:pb-20 sm:pt-36 md:pb-24 md:pt-44">
        <motion.p
          aria-hidden="true"
          className="text-eyebrow mb-5 text-secondary"
          {...fade(0)}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          className="font-display text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl md:text-6xl"
          {...fade(0.08)}
        >
          {title}
        </motion.h1>
        {lead && (
          <motion.p
            className="mt-6 max-w-2xl text-base leading-relaxed text-paper/65 md:text-lg"
            {...fade(0.16)}
          >
            {lead}
          </motion.p>
        )}
        {children && <motion.div {...fade(0.24)}>{children}</motion.div>}
      </Container>

      <div className="h-px w-full bg-line-dark" />
    </section>
  );
}
