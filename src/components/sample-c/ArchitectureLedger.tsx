"use client";

import { motion } from "framer-motion";
import { systemArchitecture } from "@/content/product";

/**
 * 公式サイト「全体構成」+ PPT slide 3 を、編集デザインの annotated figure として
 * 再構築する。中央に CRM を据え、上下に CTI / Options / DB を配置。
 * ハンドドロー風の罫線・引出し線・脚注で「読み解く図」として提示。
 */
export function ArchitectureLedger() {
  const [crm, db, cti, opt] = systemArchitecture.blocks;

  return (
    <figure className="relative" aria-label="QuickCRM 全体構成図 (誌面風)">
      <div className="mb-6 grid items-baseline gap-4 md:grid-cols-12">
        <p className="md:col-span-2 font-space-grotesk text-[10px] uppercase tracking-[0.4em] text-[var(--c-mustard)]">
          Fig.01
        </p>
        <p className="md:col-span-7 font-serif-jp text-base leading-relaxed text-[var(--c-ink)]/85 md:text-lg">
          {systemArchitecture.intro}
        </p>
        <p className="md:col-span-3 font-space-grotesk text-[10px] uppercase tracking-[0.3em] text-[var(--c-ink)]/55">
          出典 — 公式サイト「全体構成」/ PPT slide 3
        </p>
      </div>

      <div className="overflow-hidden border" style={{ borderColor: "var(--c-rule)" }}>
        <svg viewBox="0 0 1080 700" className="h-auto w-full bg-[var(--c-canvas)]">
          {/* 罫紙風背景 */}
          <g stroke="var(--c-rule)" strokeWidth="0.5">
            {Array.from({ length: 22 }).map((_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 32 + 16} x2="1080" y2={i * 32 + 16} opacity="0.4" />
            ))}
          </g>
          {/* 上ノンブル */}
          <text x="40" y="40" fontFamily="serif" fontSize="11" letterSpacing="6" fill="#2F5233" opacity="0.7">
            QUICKCRM · CLOUD SERVICE · CONFIGURATION
          </text>
          <line x1="40" y1="56" x2="1040" y2="56" stroke="#2F5233" strokeWidth="0.6" />

          {/* 中央: CRM ボックス */}
          <motion.g
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <rect x="360" y="240" width="360" height="180" fill="#F7F4EC" stroke="#2F5233" strokeWidth="1.5" />
            <rect x="370" y="250" width="340" height="160" fill="none" stroke="#2F5233" strokeWidth="0.5" />
            <text x="540" y="260" textAnchor="middle" fontFamily="serif" fontSize="9" letterSpacing="6" fill="#2F5233" opacity="0.75">
              N° 01 ── CORE
            </text>
            <text x="540" y="310" textAnchor="middle" fontFamily="serif" fontSize="34" fontWeight="700" fill="#2F5233">
              CRM
            </text>
            <text x="540" y="340" textAnchor="middle" fontFamily="serif" fontSize="14" fill="#1B1F1A">
              {crm.title}
            </text>
            <text x="540" y="380" textAnchor="middle" fontFamily="serif" fontSize="11" fill="#4F6F52" letterSpacing="3">
              Entry · Standard · Advanced
            </text>
          </motion.g>

          {/* 上: CTI ボックス */}
          <motion.g
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <rect x="120" y="100" width="240" height="100" fill="#F7F4EC" stroke="#2F5233" strokeWidth="1" />
            <text x="140" y="124" fontFamily="serif" fontSize="9" letterSpacing="6" fill="#C9A227">
              N° 02 ── CTI
            </text>
            <text x="140" y="156" fontFamily="serif" fontSize="20" fontWeight="700" fill="#2F5233">
              電話系サービス
            </text>
            <text x="140" y="180" fontFamily="serif" fontSize="11" fill="#1B1F1A">
              PBX 非依存 / クラウド + 設置型
            </text>
          </motion.g>

          {/* 上: Options ボックス */}
          <motion.g
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <rect x="720" y="100" width="240" height="100" fill="#F7F4EC" stroke="#2F5233" strokeWidth="1" />
            <text x="740" y="124" fontFamily="serif" fontSize="9" letterSpacing="6" fill="#C9A227">
              N° 03 ── OPTIONS
            </text>
            <text x="740" y="156" fontFamily="serif" fontSize="20" fontWeight="700" fill="#2F5233">
              オプション
            </text>
            <text x="740" y="180" fontFamily="serif" fontSize="11" fill="#1B1F1A">
              SMS / Mail / LINE / Chat / Tablet
            </text>
          </motion.g>

          {/* 下: DB ボックス */}
          <motion.g
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <rect x="400" y="500" width="280" height="100" fill="#F7F4EC" stroke="#2F5233" strokeWidth="1" />
            <text x="420" y="524" fontFamily="serif" fontSize="9" letterSpacing="6" fill="#C9A227">
              N° 04 ── DATABASE
            </text>
            <text x="420" y="556" fontFamily="serif" fontSize="20" fontWeight="700" fill="#2F5233">
              データベース環境
            </text>
            <text x="420" y="580" fontFamily="serif" fontSize="11" fill="#1B1F1A">
              AWS / SoftBank / オンプレ / VPN
            </text>
          </motion.g>

          {/* 引出し線 */}
          <motion.g
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.7 }}
          >
            <path d="M 360 240 L 240 200" stroke="#2F5233" strokeWidth="0.8" fill="none" />
            <path d="M 720 240 L 840 200" stroke="#2F5233" strokeWidth="0.8" fill="none" />
            <path d="M 540 420 L 540 500" stroke="#2F5233" strokeWidth="0.8" fill="none" />
          </motion.g>

          {/* 矢印頭 */}
          <polygon points="240,200 234,194 234,206" fill="#2F5233" />
          <polygon points="840,200 846,194 846,206" fill="#2F5233" />
          <polygon points="540,500 534,494 546,494" fill="#2F5233" />

          {/* 脚注 */}
          <text x="40" y="660" fontFamily="serif" fontSize="10" fill="#2F5233" opacity="0.65">
            * 図中のノードは出典資料の構成機能 (CRM / CTI / Options / Database) を編集デザインの体裁で再配置したもの。
          </text>
          <text x="40" y="680" fontFamily="serif" fontSize="10" fill="#2F5233" opacity="0.65">
            ** 各構成要素の詳細は本記事右の解説および後段 §02 を参照のこと。
          </text>
        </svg>
      </div>

      {/* 脚注解説 */}
      <ol className="mt-8 grid gap-px md:grid-cols-4" style={{ background: "var(--c-rule)" }}>
        {[crm, cti, opt, db].map((b, i) => (
          <li key={b.key} className="bg-[var(--c-canvas)] p-6">
            <span className="font-space-grotesk text-[10px] uppercase tracking-widest text-[var(--c-mustard)]">
              N° 0{i + 1}
            </span>
            <p className="mt-2 font-serif-jp text-base font-bold text-[var(--c-deep)]">
              {b.title}
            </p>
            <p className="mt-2 font-serif-jp text-xs leading-loose text-[var(--c-ink)]/80">
              {b.body}
            </p>
          </li>
        ))}
      </ol>
    </figure>
  );
}
