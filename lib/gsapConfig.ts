import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// クライアントでのみ ScrollTrigger を登録する(多重登録は GSAP 側で無害化される)
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
}

export { gsap, ScrollTrigger };

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
