"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { systemArchitecture } from "@/content/product";

/**
 * 公式サイト「QuickCRM クラウドサービスの全体構成」+ PPT slide 3。
 * メイン画像は Codex 生成の `hero.webp` を使用 (指示書: docs/plans/sa-architecture-images.md)。
 * ラベルは絶対配置 (%) で重ね、舞う葉スポット素材は framer-motion でアニメさせる。
 *
 * 画像内の座標基準: 2200 × 1600 px。% 換算で配置:
 *   USER     : left 86.4 / top 13.8
 *   CRM      : left 50.9 / top 22.5
 *   CTI      : left 25.1 / top 50.0
 *   OPTIONS  : left 77.5 / top 50.0
 *   AWS      : left 21.8 / top 88.8
 *   オンプレ  : left 50.0 / top 90.6
 *   SoftBank : left 78.2 / top 88.8
 */

type LabelPlacement = {
  key: string;
  left: number; // %
  top: number; // %
  body: React.ReactNode;
  tone?: "core" | "node" | "root" | "user";
};

const LABELS: LabelPlacement[] = [
  {
    key: "user",
    left: 86.4,
    top: 13.8,
    tone: "user",
    body: (
      <>
        <span className="text-[9px] tracking-[0.4em] opacity-70">SUN</span>
        <span className="block text-sm font-bold tracking-[0.25em]">USER</span>
      </>
    ),
  },
  {
    key: "crm",
    left: 50.9,
    top: 22.5,
    tone: "core",
    body: (
      <>
        <span className="text-[10px] italic tracking-[0.4em] opacity-75">
          N° 01 — Core
        </span>
        <span className="mt-0.5 block font-fraunces text-xl font-bold tracking-[0.2em] md:text-2xl">
          CRM
        </span>
      </>
    ),
  },
  {
    key: "cti",
    left: 25.1,
    top: 50,
    tone: "node",
    body: (
      <>
        <span className="text-[10px] italic tracking-[0.35em] text-[var(--a-moss)]">
          N° 02 — CTI
        </span>
        <span className="mt-1 block font-serif-jp text-sm font-bold md:text-base">
          電話系サービス
        </span>
        <span className="mt-0.5 block text-[10px] text-[var(--a-bark)] opacity-80">
          PBX 非依存 · クラウド + 設置型
        </span>
      </>
    ),
  },
  {
    key: "opt",
    left: 77.5,
    top: 50,
    tone: "node",
    body: (
      <>
        <span className="text-[10px] italic tracking-[0.35em] text-[var(--a-moss)]">
          N° 03 — Options
        </span>
        <span className="mt-1 block font-serif-jp text-sm font-bold md:text-base">
          オプション機能
        </span>
        <span className="mt-0.5 block text-[10px] text-[var(--a-bark)] opacity-80">
          SMS / Mail / LINE / Chat …
        </span>
      </>
    ),
  },
  {
    key: "aws",
    left: 21.8,
    top: 88.8,
    tone: "root",
    body: (
      <>
        <span className="text-[9px] tracking-[0.35em] opacity-70">DB</span>
        <span className="mt-0.5 block text-sm font-bold tracking-wide">
          AWS
        </span>
      </>
    ),
  },
  {
    key: "onprem",
    left: 50,
    top: 90.6,
    tone: "root",
    body: (
      <>
        <span className="text-[9px] tracking-[0.35em] opacity-70">DB</span>
        <span className="mt-0.5 block text-sm font-bold tracking-wide">
          オンプレ
        </span>
      </>
    ),
  },
  {
    key: "softbank",
    left: 78.2,
    top: 88.8,
    tone: "root",
    body: (
      <>
        <span className="text-[9px] tracking-[0.35em] opacity-70">DB</span>
        <span className="mt-0.5 block text-sm font-bold tracking-wide">
          SoftBank
        </span>
      </>
    ),
  },
];

// 舞う葉のスポット素材 (animated overlays)
const FALLING_LEAVES = [
  {
    src: "/images/sample-a/architecture/leaf-fall-1.png",
    keyframes: {
      x: ["62%", "55%", "44%", "30%"],
      y: ["18%", "32%", "52%", "78%"],
      rotate: [0, 80, 180, 340],
    },
    duration: 11,
    delay: 0,
  },
  {
    src: "/images/sample-a/architecture/leaf-fall-2.png",
    keyframes: {
      x: ["38%", "44%", "52%", "60%"],
      y: ["20%", "38%", "58%", "82%"],
      rotate: [-20, 60, 140, 280],
    },
    duration: 13,
    delay: 3,
  },
  {
    src: "/images/sample-a/architecture/leaf-fall-3.png",
    keyframes: {
      x: ["48%", "46%", "50%", "44%"],
      y: ["16%", "34%", "56%", "84%"],
      rotate: [10, 120, 240, 380],
    },
    duration: 15,
    delay: 6,
  },
];

export function ArchitectureForest() {
  const [crm, db, cti, opt] = systemArchitecture.blocks;

  return (
    <div className="relative">
      <div className="grid items-stretch gap-8 md:grid-cols-12 md:gap-10">
        <aside className="md:col-span-3">
          <p className="font-fraunces text-xs uppercase tracking-[0.35em] text-[var(--a-moss)] md:text-sm">
            QuickCRM
          </p>
          <p
            className="mt-3 hidden font-serif-jp text-2xl leading-tight text-[var(--a-forest)] md:block md:text-3xl"
            style={{ writingMode: "vertical-rl" }}
          >
            全体構成 ── 業務に育つ、一本の樹。
          </p>
          {/* モバイル時は横書き */}
          <h3 className="mt-3 font-serif-jp text-2xl leading-tight text-[var(--a-forest)] md:hidden">
            全体構成 ── 業務に育つ、一本の樹。
          </h3>
          <p className="mt-6 text-sm leading-loose text-[var(--a-ink)]/80 md:max-w-[18ch]">
            {systemArchitecture.intro}
          </p>
        </aside>

        <figure className="relative md:col-span-9" aria-label="QuickCRM の全体構成を一本の樹で表現したボタニカル・イラスト">
          <div
            className="relative w-full overflow-hidden rounded-2xl"
            style={{
              aspectRatio: "11 / 8",
              boxShadow:
                "0 24px 36px -16px rgba(31,52,33,0.32), 0 4px 12px -4px rgba(31,52,33,0.18)",
              border: "1px solid rgba(27,67,50,0.12)",
            }}
          >
            {/* Hero image */}
            <Image
              src="/images/sample-a/architecture/hero.webp"
              alt=""
              fill
              sizes="(min-width: 1024px) 70vw, (min-width: 768px) 75vw, 100vw"
              priority
              className="object-cover"
            />

            {/* 舞う葉のオーバーレイ */}
            <div className="pointer-events-none absolute inset-0">
              {FALLING_LEAVES.map((leaf, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{ width: "min(5%, 38px)", aspectRatio: "1" }}
                  animate={{
                    x: leaf.keyframes.x,
                    y: leaf.keyframes.y,
                    rotate: leaf.keyframes.rotate,
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: leaf.duration,
                    delay: leaf.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src={leaf.src}
                    alt=""
                    width={64}
                    height={64}
                    className="h-full w-full select-none object-contain"
                    aria-hidden
                  />
                </motion.div>
              ))}
            </div>

            {/* ラベル群 */}
            {LABELS.map((l, i) => (
              <Label key={l.key} placement={l} index={i} />
            ))}
          </div>

          <figcaption className="mt-4 grid gap-2 text-[11px] text-[var(--a-ink)]/65 sm:text-xs md:grid-cols-4">
            <span>① 樹冠: {crm.title}</span>
            <span>② 左枝: {cti.title}</span>
            <span>③ 右枝: {opt.title}</span>
            <span>④ 根: {db.title}</span>
          </figcaption>
          <p className="mt-2 text-[10px] text-[var(--a-ink)]/50">
            fig.01 — 出典: 公式サイト「QuickCRM クラウドサービスの全体構成」/ PPT slide 3 ・絵: Codex 生成 (docs/plans/sa-architecture-images.md)
          </p>
        </figure>
      </div>
    </div>
  );
}

function Label({
  placement,
  index,
}: {
  placement: LabelPlacement;
  index: number;
}) {
  const isCore = placement.tone === "core";
  const isUser = placement.tone === "user";
  const isRoot = placement.tone === "root";

  return (
    <motion.div
      initial={{ opacity: 0, y: 6, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: 0.4 + index * 0.08, ease: "easeOut" }}
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${placement.left}%`, top: `${placement.top}%` }}
    >
      <div
        className={[
          "rounded-full px-3 py-1.5 text-center text-[var(--a-forest)] shadow-md backdrop-blur-sm",
          isCore ? "px-5 py-2.5 md:px-7 md:py-3" : "px-3 py-1.5 md:px-4 md:py-2",
        ].join(" ")}
        style={{
          background: isCore
            ? "rgba(250,243,224,0.96)"
            : isUser
              ? "rgba(243,201,92,0.94)"
              : isRoot
                ? "rgba(250,243,224,0.94)"
                : "rgba(250,243,224,0.96)",
          border: isUser
            ? "1px solid rgba(92,58,31,0.5)"
            : "1px solid rgba(27,67,50,0.35)",
          color: isUser ? "#5C3A1F" : "#1B4332",
        }}
      >
        <div className="flex flex-col items-center leading-tight">
          {placement.body}
        </div>
      </div>
    </motion.div>
  );
}
