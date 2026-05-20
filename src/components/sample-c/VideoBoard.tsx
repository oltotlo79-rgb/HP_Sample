"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { videoBoard } from "@/content/product";

export function VideoBoard() {
  return (
    <figure
      className="relative grid gap-px md:grid-cols-12"
      style={{ background: "var(--c-rule)" }}
      aria-label="動画コーナー"
    >
      <aside className="bg-[var(--c-canvas)] p-8 md:col-span-4 md:p-12">
        <p className="font-space-grotesk text-[10px] uppercase tracking-[0.4em] text-[var(--c-mustard)]">
          Fig.07 ── Video
        </p>
        <h3 className="mt-4 font-serif-jp text-2xl leading-snug text-[var(--c-deep)] md:text-3xl">
          {videoBoard.title}
        </h3>
        <p className="mt-6 font-serif-jp text-base leading-loose text-[var(--c-ink)]/80">
          {videoBoard.body}
        </p>
        <hr className="my-6 border-t" style={{ borderColor: "var(--c-rule)" }} />
        <p className="font-space-grotesk text-[10px] uppercase tracking-widest text-[var(--c-ink)]/60">
          duration · {videoBoard.duration}
        </p>
      </aside>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[var(--c-paper)] p-6 md:col-span-8 md:p-8"
      >
        <div
          className="relative aspect-video w-full overflow-hidden border bg-[#2F5233]"
          style={{ borderColor: "var(--c-rule)" }}
        >
          {/* 額縁内のシーン (大判のシダ + 操作画面のシルエット) */}
          <svg viewBox="0 0 800 450" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="vc-bg" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#2F5233" />
                <stop offset="100%" stopColor="#1B1F1A" />
              </linearGradient>
            </defs>
            <rect width="800" height="450" fill="url(#vc-bg)" />
            {/* シダのシルエット */}
            <g opacity="0.32" stroke="#F7F4EC" strokeWidth="1" fill="none">
              <path d="M 600 50 Q 600 220 660 420" />
              {Array.from({ length: 9 }).map((_, i) => {
                const y = 80 + i * 38;
                const w = 90 - i * 4;
                return (
                  <g key={i}>
                    <path d={`M 600 ${y} Q ${600 - w * 0.5} ${y - 8} ${600 - w} ${y + 4}`} />
                    <path d={`M 600 ${y} Q ${600 + w * 0.5} ${y - 6} ${600 + w} ${y + 4}`} />
                  </g>
                );
              })}
            </g>
            {/* UIモック (枠線) */}
            <g stroke="#F7F4EC" strokeWidth="0.6" opacity="0.5" fill="none">
              <rect x="80" y="100" width="320" height="240" />
              <rect x="100" y="120" width="120" height="20" />
              <rect x="100" y="160" width="280" height="14" />
              <rect x="100" y="184" width="280" height="14" />
              <rect x="100" y="208" width="280" height="14" />
              <rect x="100" y="240" width="60" height="40" fill="#C9A227" opacity="0.5" />
            </g>
          </svg>

          {/* 再生ボタン */}
          <button
            type="button"
            aria-label="動画を再生 (準備中)"
            className="absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full border border-[var(--c-canvas)] bg-[var(--c-canvas)]/95 text-[var(--c-deep)] transition-transform hover:scale-105 md:h-24 md:w-24"
          >
            <Play size={28} className="ml-1" />
          </button>

          {/* キャプション */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1B1F1A] to-transparent p-6">
            <p className="font-space-grotesk text-[10px] uppercase tracking-[0.4em] text-[var(--c-mustard)]">
              caption
            </p>
            <p className="mt-1 font-serif-jp text-sm leading-snug text-[var(--c-canvas)] md:text-base">
              {videoBoard.poster}
            </p>
          </div>
        </div>
      </motion.div>
    </figure>
  );
}
