"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { company, product } from "@/content/product";

export function LeafHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/sample-a/sa-hero-leaf-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-90"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 10%, rgba(149,213,178,0.45), transparent 55%), radial-gradient(circle at 80% 90%, rgba(45,106,79,0.3), transparent 60%), linear-gradient(180deg, rgba(250,243,224,0.85), rgba(242,234,211,0.92))",
          }}
        />
        <Image
          src="/images/sample-a/sa-hero-leaf-foreground.png"
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none object-cover opacity-40 mix-blend-multiply"
          aria-hidden
        />
        <DriftingLeaves />
      </div>

      <div className="mx-auto grid min-h-[78vh] max-w-7xl items-center px-5 py-20 sm:px-6 sm:py-24 md:min-h-[88vh] md:grid-cols-12 md:px-12">
        <div className="md:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-fraunces text-xs uppercase tracking-[0.3em] text-[var(--a-moss)] sm:text-sm sm:tracking-[0.35em]"
          >
            {product.name} · {product.category}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }}
            className="mt-5 font-serif-jp text-[2.25rem] leading-[1.12] tracking-tight text-[var(--a-forest)] sm:text-5xl md:mt-6 md:text-6xl lg:text-7xl"
          >
            コンタクトセンターに<br />
            <span className="text-[var(--a-moss)]">簡単に導入できる</span> CRM。
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-8 max-w-2xl text-base leading-loose text-[var(--a-ink)]/80 md:text-lg"
          >
            {product.heroSub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/sample-a/screen-builder"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--a-forest)] px-6 py-3 text-sm font-medium text-[var(--a-cream)] transition-transform hover:scale-[1.02]"
            >
              業務画面作成機能を見る
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/sample-a/management"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--a-forest)]/30 px-6 py-3 text-sm font-medium text-[var(--a-forest)] transition-colors hover:bg-[var(--a-mist)]"
            >
              管理機能を見る
            </Link>
            <a
              href={`tel:${company.phone.replace(/-/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm text-[var(--a-forest)]/80 hover:text-[var(--a-forest)]"
            >
              <Phone size={14} />
              {company.phone}
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-[var(--a-forest)]/15 pt-6"
          >
            <Stat label="運用ノウハウ" value="10+" suffix="年" />
            <Stat label="連携可能 CTI" value="10+" suffix="種" />
            <Stat label="マルチチャネル" value="5+" suffix="種" />
          </motion.dl>
        </div>

        <div className="md:col-span-5 hidden md:block">
          <LeafIllustration />
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
      <dt className="text-xs uppercase tracking-widest text-[var(--a-ink)]/55">
        {label}
      </dt>
      <dd className="mt-1 font-fraunces text-3xl text-[var(--a-forest)] md:text-4xl">
        {value}
        {suffix && (
          <span className="ml-1 text-base text-[var(--a-ink)]/60">{suffix}</span>
        )}
      </dd>
    </div>
  );
}

function DriftingLeaves() {
  const leaves = [
    { left: "8%", top: "18%", size: 90, delay: 0, rotate: -12 },
    { left: "62%", top: "10%", size: 130, delay: 1.5, rotate: 18 },
    { left: "78%", top: "62%", size: 110, delay: 3, rotate: -28 },
    { left: "12%", top: "70%", size: 80, delay: 4.5, rotate: 24 },
    { left: "44%", top: "82%", size: 100, delay: 2.2, rotate: -8 },
  ];
  return (
    <div className="absolute inset-0">
      {leaves.map((l, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: l.left, top: l.top, opacity: 0.35 }}
          animate={{
            x: [0, 12, -10, 0],
            y: [0, -10, 8, 0],
            rotate: [l.rotate, l.rotate + 10, l.rotate - 6, l.rotate],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: l.delay,
          }}
        >
          <LeafSvg size={l.size} />
        </motion.div>
      ))}
    </div>
  );
}

function LeafSvg({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 200 120">
      <defs>
        <linearGradient id={`leaf-${size}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2D6A4F" />
          <stop offset="100%" stopColor="#95D5B2" />
        </linearGradient>
      </defs>
      <path
        d="M 10 60 Q 50 10 100 30 Q 160 50 190 60 Q 160 70 100 90 Q 50 110 10 60 Z"
        fill={`url(#leaf-${size})`}
      />
      <path
        d="M 20 60 Q 100 55 180 60"
        stroke="#1B4332"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
    </svg>
  );
}

function LeafIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.3 }}
      className="relative aspect-square"
    >
      <svg viewBox="0 0 400 400" className="h-full w-full">
        <defs>
          <radialGradient id="hero-bg" cx="0.5" cy="0.5" r="0.6">
            <stop offset="0%" stopColor="#FAF3E0" />
            <stop offset="100%" stopColor="#D8F3DC" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hero-leaf" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1B4332" />
            <stop offset="100%" stopColor="#95D5B2" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="180" fill="url(#hero-bg)" />

        <motion.path
          d="M 200 60 Q 290 130 280 220 Q 270 320 200 340 Q 130 320 120 220 Q 110 130 200 60 Z"
          fill="url(#hero-leaf)"
          animate={{
            d: [
              "M 200 60 Q 290 130 280 220 Q 270 320 200 340 Q 130 320 120 220 Q 110 130 200 60 Z",
              "M 200 58 Q 295 135 282 222 Q 270 322 200 342 Q 130 322 118 222 Q 105 135 200 58 Z",
              "M 200 60 Q 290 130 280 220 Q 270 320 200 340 Q 130 320 120 220 Q 110 130 200 60 Z",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M 200 70 L 200 330"
          stroke="#FAF3E0"
          strokeWidth="1.5"
          opacity="0.7"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.6 }}
        />
        {[...Array(6)].map((_, i) => {
          const y = 110 + i * 35;
          const w = 60 - i * 4;
          return (
            <motion.path
              key={i}
              d={`M 200 ${y} L ${200 - w} ${y + 25} M 200 ${y} L ${200 + w} ${y + 25}`}
              stroke="#FAF3E0"
              strokeWidth="1"
              opacity="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.4, delay: 1 + i * 0.15 }}
            />
          );
        })}
      </svg>
    </motion.div>
  );
}
