"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { samples } from "@/content/product";

type Tone = "a" | "b" | "c";

const toneStyles: Record<
  Tone,
  { base: string; active: string; ring: string; bg: string }
> = {
  a: {
    base: "text-[#1B4332]/70 hover:text-[#1B4332]",
    active: "bg-[#1B4332] text-[#FAF3E0]",
    ring: "ring-[#1B4332]/15",
    bg: "bg-[#FAF3E0]/40",
  },
  b: {
    base: "text-[#E2E8F0]/70 hover:text-[#5EEAD4]",
    active: "bg-[#5EEAD4]/15 text-[#5EEAD4] ring-[#5EEAD4]/30",
    ring: "ring-white/10",
    bg: "bg-white/[0.03]",
  },
  c: {
    base: "text-[#2F5233]/70 hover:text-[#2F5233]",
    active: "bg-[#2F5233] text-[#F7F4EC]",
    ring: "ring-[#2F5233]/20",
    bg: "bg-[#F7F4EC]/60",
  },
};

export function SampleSwitcher({ tone }: { tone: Tone }) {
  const pathname = usePathname();
  const s = toneStyles[tone];

  return (
    <div className="flex items-center gap-3">
      <span
        className={`hidden text-[10px] uppercase tracking-[0.3em] md:inline ${
          tone === "b" ? "text-[#E2E8F0]/50" : "text-[#1B1F1B]/50"
        }`}
      >
        Design
      </span>
      <nav
        aria-label="デザインバリエーション切替"
        className={`inline-flex items-center gap-1 rounded-full p-1 ring-1 ${s.ring} ${s.bg}`}
      >
        {samples.map((sample) => {
          const isActive = pathname.startsWith(sample.href);
          return (
            <Link
              key={sample.key}
              href={sample.href}
              aria-current={isActive ? "page" : undefined}
              title={sample.concept}
              className={`rounded-full px-3 py-1 text-xs font-medium tracking-widest uppercase transition-colors ${
                isActive ? s.active : s.base
              }`}
            >
              {sample.label.replace("Sample ", "")}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
