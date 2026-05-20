"use client";

import { motion } from "framer-motion";

export function LandingHero() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-16 md:px-12 md:pt-32 md:pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <svg
          aria-hidden
          className="absolute -top-32 -right-32 h-[640px] w-[640px] opacity-[0.06]"
          viewBox="0 0 600 600"
        >
          <defs>
            <radialGradient id="bg-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2F5233" stopOpacity="1" />
              <stop offset="100%" stopColor="#2F5233" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="300" cy="300" r="300" fill="url(#bg-grad)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xs uppercase tracking-[0.3em] opacity-60"
        >
          QuickCRM クラウドサービス · リニューアル提案
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="mt-6 font-serif-jp text-4xl leading-[1.15] tracking-tight md:text-6xl lg:text-7xl"
        >
          <span className="block">コンタクトセンターに、</span>
          <span className="block">
            <span className="text-[var(--color-accent)]">簡単に</span>
            導入できる CRM を。
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="mt-8 max-w-3xl text-base leading-relaxed opacity-80 md:text-lg"
        >
          QuickCRM (株式会社MITシステム研究所) のコーポレートサイトリニューアル案。
          10 年以上のコンタクトセンター向け CRM 開発ノウハウを、3 つの異なるデザイン哲学で再構築しました。
          内容は同一・世界観は異なる、3 サンプルの並走比較です。
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 text-sm opacity-60"
        >
          下のサンプルを選択すると、QuickCRM の製品コンセプト・システム構成・機能を、サンプル固有の世界観で閲覧できます。
        </motion.p>
      </div>
    </section>
  );
}
