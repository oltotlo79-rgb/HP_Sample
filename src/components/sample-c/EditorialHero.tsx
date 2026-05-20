"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { company, product } from "@/content/product";

export function EditorialHero() {
  return (
    <section className="relative px-5 py-14 sm:px-6 sm:py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="font-space-grotesk text-[10px] uppercase tracking-[0.4em] text-[var(--c-mustard)]"
            >
              {product.name} · {product.category}
            </motion.p>

            <h1 className="mt-6 font-serif-jp text-[2.25rem] leading-[1.1] tracking-tight sm:text-5xl md:mt-8 md:text-6xl lg:text-7xl">
              <RevealLine delay={0.05}>コンタクトセンター業務、</RevealLine>
              <RevealLine delay={0.2}>
                <span className="font-light italic text-[var(--c-deep)]">
                  CRM
                </span>
                を
              </RevealLine>
              <RevealLine delay={0.35}>
                <span className="font-light italic text-[var(--c-mustard)]">
                  簡単
                </span>
                導入。
              </RevealLine>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55 }}
              className="mt-10 max-w-2xl font-serif-jp text-base leading-loose text-[var(--c-ink)]/85 md:text-lg"
            >
              {product.heroSub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-12 flex flex-wrap items-center gap-6"
            >
              <Link
                href="/sample-c/screen-builder"
                className="group inline-flex items-center gap-3 border-b border-[var(--c-deep)] pb-1 font-serif-jp text-base tracking-wider text-[var(--c-deep)]"
              >
                <span>業務画面作成機能 へ</span>
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href="/sample-c/management"
                className="group inline-flex items-center gap-3 border-b border-[var(--c-mustard)] pb-1 font-serif-jp text-base tracking-wider text-[var(--c-mustard)]"
              >
                <span>管理機能 へ</span>
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <a
                href={`tel:${company.phone.replace(/-/g, "")}`}
                className="text-sm tracking-wider text-[var(--c-ink)]/70 hover:text-[var(--c-deep)]"
              >
                tel. {company.phone}
              </a>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.9 }}
              className="mt-14 grid max-w-xl grid-cols-3 border-t pt-6"
              style={{ borderColor: "var(--c-rule)" }}
            >
              <Stat label="運用ノウハウ" value="10+" suffix="年" />
              <Stat label="連携可能 CTI" value="10+" suffix="種" />
              <Stat label="マルチチャネル" value="5+" suffix="種" />
            </motion.dl>
          </div>

          <div className="md:col-span-5">
            <FernHero />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  suffix,
}: {
  label: string;
  value: string;
  suffix?: string;
}) {
  return (
    <div>
      <dt className="font-space-grotesk text-[10px] uppercase tracking-widest text-[var(--c-ink)]/60">
        {label}
      </dt>
      <dd className="mt-1 font-fraunces text-3xl font-light text-[var(--c-deep)] md:text-4xl">
        {value}
        {suffix && (
          <span className="ml-1 text-sm text-[var(--c-ink)]/60">{suffix}</span>
        )}
      </dd>
    </div>
  );
}

function RevealLine({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1, delay, ease: [0.2, 0.7, 0.2, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function FernHero() {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.4 }}
      className="relative"
    >
      {/* 写真本体 — 下から上にカーテンリビール */}
      <div
        className="relative aspect-[3/4] w-full overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #EFE9D9 0%, #F7F4EC 100%)",
          border: "1px solid var(--c-rule)",
        }}
      >
        <Image
          src="/images/sample-c/sc-hero-botanical-large.webp"
          alt="QuickCRM のカバーカット — シダのボタニカル・スタディ"
          fill
          priority
          sizes="(min-width: 768px) 40vw, 100vw"
          className="object-cover"
        />
        {/* リビール用のクリーム色シェード */}
        <motion.div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "var(--c-canvas)", originY: 1 }}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 1.4, delay: 0.6, ease: [0.7, 0, 0.2, 1] }}
        />
        {/* 微細な紙粒子感 (vignette) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 70% at 50% 30%, transparent 50%, rgba(47,82,51,0.10) 100%)",
          }}
        />
      </div>

      {/* キャプション帯 (画像の外、誌面風の小見出し) */}
      <motion.figcaption
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.6 }}
        className="mt-4 flex items-baseline justify-between border-t pt-3"
        style={{ borderColor: "var(--c-rule)" }}
      >
        <span className="font-space-grotesk text-[10px] uppercase tracking-[0.35em] text-[var(--c-deep)]/85">
          QuickCRM · Cloud Service
        </span>
        <span className="font-space-grotesk text-[10px] uppercase tracking-[0.3em] text-[var(--c-ink)]/55">
          Cover · 2026
        </span>
      </motion.figcaption>
    </motion.figure>
  );
}
