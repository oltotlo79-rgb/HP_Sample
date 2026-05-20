"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
          {/* 動画サムネ (誌面トーンの編集写真) */}
          <Image
            src="/images/photos/sample-c/video-still.webp"
            alt={videoBoard.poster}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          {/* 暗トーンのオーバーレイ (キャプションの可読性) */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(27,31,26,0.20) 0%, rgba(27,31,26,0.55) 100%)",
            }}
          />

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
