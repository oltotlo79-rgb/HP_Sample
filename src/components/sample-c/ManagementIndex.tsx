"use client";

import { motion } from "framer-motion";
import { management } from "@/content/product";

/**
 * PPT slide 6 を、誌面のインデックス (目次表) として再構築する。
 * 各機能群を章立て、サブ項目を入子で展開する。
 */
export function ManagementIndex() {
  return (
    <figure className="relative" aria-label="管理機能 目次表">
      <div className="mb-8 grid items-baseline gap-4 md:grid-cols-12">
        <p className="md:col-span-2 font-space-grotesk text-[10px] uppercase tracking-[0.4em] text-[var(--c-mustard)]">
          Fig.06
        </p>
        <p className="md:col-span-7 font-serif-jp text-base leading-relaxed text-[var(--c-ink)]/85 md:text-lg">
          管理機能は 5 つの章で構成される。アウトバウンドからレポート、コミュニケーションまで、
          必要な機能群を過不足なく選択できる。
        </p>
        <p className="md:col-span-3 font-space-grotesk text-[10px] uppercase tracking-[0.3em] text-[var(--c-ink)]/55">
          出典 — PPT slide 6
        </p>
      </div>

      <div
        className="overflow-hidden border bg-[var(--c-canvas)]"
        style={{ borderColor: "var(--c-rule)" }}
      >
        <div
          className="grid grid-cols-12 border-b bg-[var(--c-paper)] px-6 py-3 font-space-grotesk text-[10px] uppercase tracking-widest text-[var(--c-mustard)] md:px-10"
          style={{ borderColor: "var(--c-rule)" }}
        >
          <span className="col-span-1">N°</span>
          <span className="col-span-4">機能群</span>
          <span className="col-span-6">サブ機能</span>
          <span className="col-span-1 text-right">数</span>
        </div>

        {management.groups.map((g, i) => (
          <motion.div
            key={g.key}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="grid grid-cols-12 gap-4 border-b px-6 py-6 md:px-10 md:py-8"
            style={{ borderColor: "var(--c-rule)" }}
          >
            <div className="col-span-1 font-fraunces text-3xl font-light italic text-[var(--c-mustard)] md:text-5xl">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="col-span-12 md:col-span-4">
              <p className="font-serif-jp text-xl text-[var(--c-deep)] md:text-2xl">
                {g.title}
              </p>
              <p className="mt-2 font-serif-jp text-xs leading-relaxed text-[var(--c-ink)]/70">
                {g.summary}
              </p>
              {g.note && (
                <p className="mt-2 font-serif-jp text-[10px] text-[var(--c-mustard)]">
                  {g.note}
                </p>
              )}
            </div>
            <div className="col-span-11 md:col-span-6">
              <ul className="space-y-2">
                {g.items.map((item) => (
                  <li key={item.name} className="font-serif-jp text-sm text-[var(--c-deep)]">
                    <span className="mr-2 text-[var(--c-mustard)]">·</span>
                    {item.name}
                    {item.subs && (
                      <span className="ml-2 text-xs text-[var(--c-ink)]/65">
                        {" — "}
                        {item.subs.join(" / ")}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-1 text-right font-fraunces text-xl italic text-[var(--c-mustard)]">
              {g.items.length}
            </div>
          </motion.div>
        ))}

        <div
          className="grid grid-cols-12 gap-4 bg-[var(--c-paper)] px-6 py-4 md:px-10"
          style={{ borderColor: "var(--c-rule)" }}
        >
          <span className="col-span-11 font-serif-jp text-sm font-bold text-[var(--c-deep)]">
            計 {management.groups.length} 章 ── 必要な機能だけを選択可能
          </span>
          <span className="col-span-1 text-right font-fraunces italic text-[var(--c-mustard)]">
            {management.groups.reduce((s, g) => s + g.items.length, 0)}
          </span>
        </div>
      </div>
    </figure>
  );
}
