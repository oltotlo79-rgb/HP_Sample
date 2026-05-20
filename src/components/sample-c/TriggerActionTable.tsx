"use client";

import { motion } from "framer-motion";
import { noCode } from "@/content/product";

/**
 * PPT slide 4 を、編集デザインの「対照表」として組み直す。
 * 左に Trigger、右に Action を並べ、中央に × グリフを置く誌面組版。
 */
export function TriggerActionTable() {
  return (
    <figure className="relative" aria-label="トリガー × アクション 対照表">
      <div className="mb-8 grid items-baseline gap-4 md:grid-cols-12">
        <p className="md:col-span-2 font-space-grotesk text-[10px] uppercase tracking-[0.4em] text-[var(--c-mustard)]">
          Fig.03
        </p>
        <p className="md:col-span-7 font-serif-jp text-base leading-relaxed text-[var(--c-ink)]/85 md:text-lg">
          画面上のイベントを「トリガー」として捕え、画面/データ/通知への処理を「アクション」として組み合わせる。
          ノーコードで {noCode.triggers.length * noCode.actions.length} パターン以上の業務ロジックが組成可能。
        </p>
        <p className="md:col-span-3 font-space-grotesk text-[10px] uppercase tracking-[0.3em] text-[var(--c-ink)]/55">
          出典 — PPT slide 4
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-12 overflow-hidden border bg-[var(--c-canvas)]"
        style={{ borderColor: "var(--c-rule)" }}
      >
        {/* 左: Triggers */}
        <div className="md:col-span-5 border-r p-8 md:p-10" style={{ borderColor: "var(--c-rule)" }}>
          <div className="flex items-baseline justify-between">
            <p className="font-space-grotesk text-[10px] uppercase tracking-[0.4em] text-[var(--c-mustard)]">
              N° 01 ── Trigger
            </p>
            <p className="font-fraunces text-2xl font-light italic text-[var(--c-deep)]">
              {noCode.triggers.length}
            </p>
          </div>
          <p className="mt-2 font-serif-jp text-sm text-[var(--c-ink)]/65">画面のイベント</p>

          <ol className="mt-6 divide-y" style={{ borderColor: "var(--c-rule)" }}>
            {noCode.triggers.map((t, i) => (
              <motion.li
                key={t}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="grid grid-cols-12 items-baseline gap-4 py-3"
                style={{ borderBottomColor: "var(--c-rule)" }}
              >
                <span className="col-span-2 font-fraunces text-base italic text-[var(--c-mustard)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="col-span-10 font-serif-jp text-base text-[var(--c-deep)]">
                  {t}
                </span>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* 中央 × */}
        <div className="md:col-span-2 flex items-center justify-center border-y md:border-y-0 md:border-x py-8 md:py-0" style={{ borderColor: "var(--c-rule)" }}>
          <motion.svg
            viewBox="0 0 120 120"
            className="h-24 w-24 md:h-32 md:w-32"
            initial={{ opacity: 0, rotate: -10 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.path
              d="M 24 28 Q 60 52 96 96"
              stroke="#C9A227"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <motion.path
              d="M 96 28 Q 62 56 24 96"
              stroke="#C9A227"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
          </motion.svg>
        </div>

        {/* 右: Actions */}
        <div className="md:col-span-5 p-8 md:p-10">
          <div className="flex items-baseline justify-between">
            <p className="font-space-grotesk text-[10px] uppercase tracking-[0.4em] text-[var(--c-mustard)]">
              N° 02 ── Action
            </p>
            <p className="font-fraunces text-2xl font-light italic text-[var(--c-deep)]">
              {noCode.actions.length}
            </p>
          </div>
          <p className="mt-2 font-serif-jp text-sm text-[var(--c-ink)]/65">実行する処理</p>

          <ol className="mt-6 grid gap-y-2 md:grid-cols-2 md:gap-x-6">
            {noCode.actions.map((a, i) => (
              <motion.li
                key={a}
                initial={{ opacity: 0, x: 8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.03 }}
                className="grid grid-cols-12 items-baseline gap-3 border-b py-2"
                style={{ borderBottomColor: "var(--c-rule)" }}
              >
                <span className="col-span-2 font-fraunces text-sm italic text-[var(--c-mustard)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="col-span-10 font-serif-jp text-sm text-[var(--c-deep)]">
                  {a}
                </span>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>

      <p className="mt-6 font-space-grotesk text-[10px] uppercase tracking-widest text-[var(--c-ink)]/60">
        * 各イベントは複数のアクションと自由に結びつけ可能。設定はすべてノーコード。
      </p>
    </figure>
  );
}
