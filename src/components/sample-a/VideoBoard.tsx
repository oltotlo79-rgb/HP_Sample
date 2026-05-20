"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";
import { videoBoard } from "@/content/product";

export function VideoBoard() {
  return (
    <figure className="grid gap-8 md:grid-cols-12 md:gap-12">
      <aside className="md:col-span-4">
        <p className="font-fraunces text-sm uppercase tracking-[0.35em] text-[var(--a-moss)]">
          Video
        </p>
        <h3 className="mt-4 font-serif-jp text-2xl leading-snug text-[var(--a-forest)] md:text-3xl">
          {videoBoard.title}
        </h3>
        <p className="mt-6 font-serif-jp text-base leading-loose text-[var(--a-ink)]/80">
          {videoBoard.body}
        </p>
        <p className="mt-4 text-xs uppercase tracking-widest text-[var(--a-bark)]">
          再生時間 · {videoBoard.duration}
        </p>
      </aside>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="md:col-span-8"
      >
        <div
          className="relative aspect-video w-full overflow-hidden rounded-3xl"
          style={{ border: "1px solid rgba(27,67,50,0.18)" }}
        >
          {/* 動画サムネ写真 */}
          <Image
            src="/images/photos/sample-a/video-still.webp"
            alt={videoBoard.poster}
            fill
            sizes="(min-width: 768px) 70vw, 100vw"
            className="object-cover"
          />
          {/* 再生ボタン */}
          <button
            type="button"
            aria-label="動画を再生 (準備中)"
            className="absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full bg-[var(--a-cream)] text-[var(--a-forest)] shadow-xl transition-transform hover:scale-105 md:h-24 md:w-24"
          >
            <Play size={28} className="ml-1" />
          </button>

          {/* テロップ */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1B4332] to-transparent p-6 md:p-8">
            <p className="font-fraunces text-xs uppercase tracking-[0.4em] text-[var(--a-mint)]">
              {videoBoard.eyebrow}
            </p>
            <p className="mt-2 font-serif-jp text-base leading-snug text-[var(--a-cream)] md:text-lg">
              {videoBoard.poster}
            </p>
          </div>
        </div>
      </motion.div>
    </figure>
  );
}
