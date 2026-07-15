import { cn } from "@/lib/utils";
import Reveal from "@/components/motion/Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

/** 全セクション共通の見出しブロック(英字eyebrow + 大見出し + リード) */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-14 md:mb-20",
        align === "center" && "text-center",
        className
      )}
    >
      <p
        aria-hidden="true"
        className={cn(
          "text-eyebrow mb-4",
          dark ? "text-secondary" : "text-primary"
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-display text-3xl font-black leading-[1.15] tracking-tight sm:text-4xl md:text-5xl",
          dark ? "text-paper" : "text-ink"
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-relaxed md:text-lg",
            dark ? "text-paper/60" : "text-text-sub",
            align === "center" && "mx-auto"
          )}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}
