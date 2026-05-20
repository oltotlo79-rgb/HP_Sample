"use client";

import { motion } from "framer-motion";
import { product } from "@/content/product";

/**
 * PPT slide 2 の「レイアウトの高い自由度 × 直観的なUI × 高機能な連携処理」を
 * 3 枚の葉と × 記号で再構築した式。等価な式が成立することで
 * 「お客様自身による構築」が可能になる、というメッセージを視覚化。
 */
export function AxesFormula() {
  return (
    <figure className="relative" aria-label="3 つの軸の積による構築式">
      <svg viewBox="0 0 1200 360" className="h-auto w-full">
        <defs>
          <linearGradient id="ax-leaf-1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1B4332" />
            <stop offset="100%" stopColor="#95D5B2" />
          </linearGradient>
          <linearGradient id="ax-leaf-2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2D6A4F" />
            <stop offset="100%" stopColor="#D8F3DC" />
          </linearGradient>
          <linearGradient id="ax-leaf-3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5C4033" />
            <stop offset="100%" stopColor="#95D5B2" />
          </linearGradient>
        </defs>

        {/* 葉 1 */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <path
            d="M 60 200 Q 140 80 240 130 Q 320 170 280 250 Q 220 320 120 280 Q 60 250 60 200 Z"
            fill="url(#ax-leaf-1)"
          />
          <path d="M 75 220 Q 170 200 270 230" stroke="#FAF3E0" strokeWidth="1" fill="none" opacity="0.6" />
          <text x="172" y="200" textAnchor="middle" fontFamily="serif" fontSize="20" fontWeight="700" fill="#FAF3E0">
            01
          </text>
        </motion.g>
        <motion.text
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          x="172"
          y="340"
          textAnchor="middle"
          fontFamily="serif"
          fontSize="18"
          fill="#1B4332"
        >
          {product.buildSelfAxes[0].title}
        </motion.text>

        {/* × 1 */}
        <motion.text
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          x="370"
          y="220"
          textAnchor="middle"
          fontFamily="serif"
          fontSize="86"
          fill="#C9A227"
          fontWeight="300"
        >
          ×
        </motion.text>

        {/* 葉 2 */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <path
            d="M 460 220 Q 540 90 660 140 Q 740 180 700 270 Q 640 320 540 290 Q 460 270 460 220 Z"
            fill="url(#ax-leaf-2)"
          />
          <path d="M 480 240 Q 580 220 690 250" stroke="#1B4332" strokeWidth="1" fill="none" opacity="0.4" />
          <text x="582" y="210" textAnchor="middle" fontFamily="serif" fontSize="20" fontWeight="700" fill="#1B4332">
            02
          </text>
        </motion.g>
        <motion.text
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          x="582"
          y="340"
          textAnchor="middle"
          fontFamily="serif"
          fontSize="18"
          fill="#1B4332"
        >
          {product.buildSelfAxes[1].title}
        </motion.text>

        {/* × 2 */}
        <motion.text
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          x="790"
          y="220"
          textAnchor="middle"
          fontFamily="serif"
          fontSize="86"
          fill="#C9A227"
          fontWeight="300"
        >
          ×
        </motion.text>

        {/* 葉 3 */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <path
            d="M 880 220 Q 960 90 1080 140 Q 1160 180 1120 270 Q 1060 320 960 290 Q 880 270 880 220 Z"
            fill="url(#ax-leaf-3)"
          />
          <path d="M 900 240 Q 1000 220 1110 250" stroke="#FAF3E0" strokeWidth="1" fill="none" opacity="0.5" />
          <text x="1002" y="210" textAnchor="middle" fontFamily="serif" fontSize="20" fontWeight="700" fill="#FAF3E0">
            03
          </text>
        </motion.g>
        <motion.text
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          x="1002"
          y="340"
          textAnchor="middle"
          fontFamily="serif"
          fontSize="18"
          fill="#1B4332"
        >
          {product.buildSelfAxes[2].title}
        </motion.text>

        <text x="40" y="40" fontFamily="serif" fontSize="11" letterSpacing="4" fill="#2D6A4F" opacity="0.7">
          FORMULA · 出典: PPT slide 2
        </text>
        <text x="40" y="62" fontFamily="serif" fontSize="13" fill="#1B4332" opacity="0.65">
          お客様ご自身で構築可能 — その方程式。
        </text>
      </svg>

      <ul className="mt-8 grid gap-6 md:grid-cols-3">
        {product.buildSelfAxes.map((a, i) => (
          <li key={a.key}>
            <p className="font-fraunces text-2xl text-[var(--a-mint)]">
              0{i + 1} ── {a.title}
            </p>
            <p className="mt-2 font-serif-jp text-sm leading-loose text-[var(--a-ink)]/80">
              {a.desc}
            </p>
          </li>
        ))}
      </ul>
    </figure>
  );
}
