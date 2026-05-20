"use client";

import { motion } from "framer-motion";
import { noCode } from "@/content/product";

/**
 * PPT slide 4「ノーコードで多様な操作を実現できる機能」を、
 * 左にトリガー一覧 / 中央に × グリフ / 右にアクション一覧という
 * 誌面の対照表として組む。雨粒/流路は撤去し、罫線とタイポで構成。
 */
export function TriggerActionVisual() {
  return (
    <figure
      className="overflow-hidden rounded-3xl bg-white/65 backdrop-blur-sm"
      style={{ border: "1px solid rgba(27,67,50,0.12)" }}
      aria-label="トリガー × アクション 対照表"
    >
      {/* キャプション帯 */}
      <header
        className="flex items-baseline justify-between border-b px-6 py-4 md:px-10"
        style={{ borderColor: "rgba(27,67,50,0.15)" }}
      >
        <p className="font-fraunces text-xs uppercase tracking-[0.4em] text-[var(--a-moss)]">
          fig. 04 ── Trigger × Action
        </p>
        <p className="hidden text-[10px] uppercase tracking-[0.3em] text-[var(--a-bark)] md:block">
          出典 · PPT slide 4
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* 左: Trigger */}
        <section
          className="border-b px-6 py-8 md:col-span-5 md:border-b-0 md:border-r md:px-10 md:py-10"
          style={{ borderColor: "rgba(27,67,50,0.12)" }}
        >
          <div className="flex items-baseline justify-between">
            <p className="font-fraunces text-xs uppercase tracking-[0.35em] text-[var(--a-moss)]">
              Trigger
            </p>
            <span className="font-fraunces text-2xl font-light italic text-[var(--a-mint)]">
              {noCode.triggers.length}
            </span>
          </div>
          <p className="mt-1 font-serif-jp text-sm text-[var(--a-ink)]/70">
            画面のイベント
          </p>

          <ol className="mt-6 space-y-2">
            {noCode.triggers.map((t, i) => (
              <motion.li
                key={t}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-baseline gap-4 border-b py-2"
                style={{ borderColor: "rgba(27,67,50,0.08)" }}
              >
                <span className="font-fraunces text-xs italic text-[var(--a-mint)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif-jp text-base text-[var(--a-forest)]">
                  {t}
                </span>
              </motion.li>
            ))}
          </ol>
        </section>

        {/* 中央: × グリフ (デスクトップのみ) */}
        <div
          className="hidden items-center justify-center md:col-span-2 md:flex"
          aria-hidden
        >
          <motion.svg
            viewBox="0 0 80 80"
            className="h-20 w-20"
            initial={{ opacity: 0, rotate: -12, scale: 0.6 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.path
              d="M 16 18 Q 40 36 64 62"
              stroke="#2D6A4F"
              strokeWidth="2.4"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
            <motion.path
              d="M 64 18 Q 42 38 16 62"
              stroke="#2D6A4F"
              strokeWidth="2.4"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.55 }}
            />
          </motion.svg>
        </div>

        {/* モバイル時の × */}
        <div
          className="flex items-center justify-center border-b py-6 md:hidden"
          style={{ borderColor: "rgba(27,67,50,0.12)" }}
          aria-hidden
        >
          <span className="font-fraunces text-4xl font-light text-[var(--a-moss)]">
            ×
          </span>
        </div>

        {/* 右: Action */}
        <section className="px-6 py-8 md:col-span-5 md:px-10 md:py-10">
          <div className="flex items-baseline justify-between">
            <p className="font-fraunces text-xs uppercase tracking-[0.35em] text-[var(--a-moss)]">
              Action
            </p>
            <span className="font-fraunces text-2xl font-light italic text-[var(--a-mint)]">
              {noCode.actions.length}
            </span>
          </div>
          <p className="mt-1 font-serif-jp text-sm text-[var(--a-ink)]/70">
            実行する処理
          </p>

          <ol className="mt-6 grid gap-y-2 md:grid-cols-2 md:gap-x-6">
            {noCode.actions.map((a, i) => (
              <motion.li
                key={a}
                initial={{ opacity: 0, x: 8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.03 }}
                className="flex items-baseline gap-4 border-b py-1.5"
                style={{ borderColor: "rgba(27,67,50,0.08)" }}
              >
                <span className="font-fraunces text-[10px] italic text-[var(--a-mint)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif-jp text-sm text-[var(--a-forest)]">
                  {a}
                </span>
              </motion.li>
            ))}
          </ol>
        </section>
      </div>

      <footer
        className="border-t px-6 py-4 md:px-10"
        style={{ borderColor: "rgba(27,67,50,0.12)" }}
      >
        <p className="text-[11px] leading-relaxed text-[var(--a-ink)]/70">
          各イベントは複数のアクションと自由に結びつけ可能。設定はすべてノーコード。
        </p>
      </footer>
    </figure>
  );
}
