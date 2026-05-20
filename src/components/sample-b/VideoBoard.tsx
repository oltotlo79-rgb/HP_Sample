"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";
import { videoBoard } from "@/content/product";

export function VideoBoard() {
  return (
    <figure className="grid gap-8 md:grid-cols-12 md:gap-12">
      <aside className="md:col-span-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--b-mint)]">
          ◇ media · video
        </p>
        <h3 className="mt-4 font-serif-jp text-2xl leading-snug text-[var(--b-text)] md:text-3xl">
          {videoBoard.title}
        </h3>
        <p className="mt-6 font-serif-jp text-base leading-loose text-[var(--b-muted)]">
          {videoBoard.body}
        </p>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-[var(--b-mint)]">
          ▌ duration · {videoBoard.duration}
        </p>
      </aside>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="md:col-span-8"
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-[var(--b-mint)]/30 bg-[var(--b-deep)]">
          {/* 動画サムネ写真 */}
          <Image
            src="/images/photos/sample-b/video-still.webp"
            alt={videoBoard.poster}
            fill
            sizes="(min-width: 768px) 70vw, 100vw"
            className="object-cover"
          />
          {/* オーバーレイ */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,14,26,0.35) 0%, rgba(10,14,26,0.65) 100%)",
            }}
          />
          {/* スキャンライン */}
          <svg viewBox="0 0 800 450" className="absolute inset-0 h-full w-full opacity-20">
            {Array.from({ length: 30 }).map((_, i) => (
              <line
                key={i}
                x1="0"
                y1={i * 15 + 6}
                x2="800"
                y2={i * 15 + 6}
                stroke="#5EEAD4"
                strokeWidth="0.3"
              />
            ))}
          </svg>

          {/* 走査線 */}
          <motion.div
            aria-hidden
            className="absolute inset-x-0 h-px bg-[var(--b-mint)]/70"
            initial={{ top: "0%" }}
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            style={{ filter: "drop-shadow(0 0 6px #5EEAD4)" }}
          />

          {/* HUD 表示 */}
          <div className="absolute inset-0 p-6 md:p-8">
            <div className="flex items-start justify-between font-mono text-[10px] uppercase tracking-widest text-[var(--b-mint)]">
              <div>
                <p>● REC</p>
                <p className="mt-1 text-[var(--b-muted)]">timecode 00:00:00</p>
              </div>
              <div className="text-right">
                <p>◇ {videoBoard.eyebrow}</p>
                <p className="mt-1 text-[var(--b-muted)]">res · 1920×1080</p>
              </div>
            </div>

            {/* 再生ボタン */}
            <button
              type="button"
              aria-label="動画を再生 (準備中)"
              className="absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full border border-[var(--b-mint)] bg-[var(--b-mint)]/15 text-[var(--b-mint)] transition-transform hover:scale-110 md:h-24 md:w-24"
              style={{ boxShadow: "0 0 28px rgba(94,234,212,0.45)" }}
            >
              <Play size={28} className="ml-1" />
            </button>

            {/* 字幕 */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--b-mint)]">
                ◇ subtitle
              </p>
              <p className="mt-2 font-serif-jp text-sm leading-snug text-[var(--b-text)] md:text-base">
                {videoBoard.poster}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </figure>
  );
}
