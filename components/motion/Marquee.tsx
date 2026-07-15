import { cn } from "@/lib/utils";

interface MarqueeProps {
  text: string;
  className?: string;
  textClassName?: string;
}

/** CSSアニメーションの無限マーキー(装飾・スクリーンリーダーからは隠す) */
export default function Marquee({
  text,
  className,
  textClassName,
}: MarqueeProps) {
  const items = Array.from({ length: 4 }, () => text);

  return (
    <div
      aria-hidden="true"
      className={cn("overflow-hidden whitespace-nowrap", className)}
    >
      <div className="animate-marquee inline-flex w-max">
        {[0, 1].map((half) => (
          <div key={half} className="inline-flex shrink-0 items-center">
            {items.map((item, i) => (
              <span
                key={`${half}-${i}`}
                className={cn(
                  "inline-flex items-center font-en font-semibold uppercase",
                  textClassName
                )}
              >
                {item}
                <span className="mx-[0.6em] inline-block text-secondary">
                  ✳
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
