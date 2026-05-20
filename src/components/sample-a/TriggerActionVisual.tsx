"use client";

import { motion } from "framer-motion";
import { noCode } from "@/content/product";

/**
 * PPT slide 4 のトリガー × アクションを、雨粒 (トリガー) が流路 (アクション) に
 * 注ぐ図として再構築する。複数のトリガーが組み合わさって 1 つのアクションを
 * 引き起こす関係を、葉脈の交差で表現。
 */
export function TriggerActionVisual() {
  return (
    <figure className="relative" aria-label="トリガー × アクション 図">
      <svg viewBox="0 0 1200 760" className="h-auto w-full">
        <defs>
          <linearGradient id="ta-stream" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#2D6A4F" stopOpacity="0.0" />
            <stop offset="100%" stopColor="#2D6A4F" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* 雲 ─ 上部 */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <path
            d="M 80 80 Q 200 30 360 60 Q 500 30 660 70 Q 800 30 960 70 Q 1080 50 1140 90"
            stroke="#1B4332"
            strokeWidth="1.5"
            fill="none"
            opacity="0.5"
          />
          <text x="40" y="34" fontFamily="serif" fontSize="11" letterSpacing="4" fill="#2D6A4F" opacity="0.7">
            TRIGGER · 画面のイベント (8)
          </text>
        </motion.g>

        {/* トリガー (雨粒) */}
        {noCode.triggers.map((t, i) => {
          const x = 100 + i * 130;
          const y = 130;
          return (
            <motion.g
              key={t}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <ellipse cx={x} cy={y} rx="55" ry="20" fill="#D8F3DC" stroke="#1B4332" strokeWidth="0.8" />
              <text x={x} y={y + 4} textAnchor="middle" fontFamily="serif" fontSize="11" fill="#1B4332">
                {t}
              </text>
              {/* 雨粒のしずく */}
              <motion.path
                d={`M ${x} ${y + 24} L ${x - 3} ${y + 38} L ${x + 3} ${y + 38} Z`}
                fill="#95D5B2"
                animate={{ opacity: [0.3, 1, 0.3], y: [0, 6, 0] }}
                transition={{ duration: 2 + (i % 3), repeat: Infinity, delay: i * 0.1 }}
              />
            </motion.g>
          );
        })}

        {/* 流路 (葉脈の交差) */}
        <motion.path
          d="M 100 200 Q 600 280 1100 200 M 100 200 Q 600 380 1100 200"
          stroke="#2D6A4F"
          strokeWidth="1.5"
          fill="none"
          opacity="0.4"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />

        {/* 中央の × 結合 */}
        <motion.g
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <circle cx="600" cy="380" r="50" fill="#FAF3E0" stroke="#1B4332" strokeWidth="2" />
          <text x="600" y="396" textAnchor="middle" fontFamily="serif" fontSize="48" fill="#C9A227" fontWeight="300">
            ×
          </text>
        </motion.g>

        {/* 流れる線 (×から下へ) */}
        <motion.path
          d="M 600 430 Q 600 480 600 530"
          stroke="url(#ta-stream)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        />

        {/* アクション枠 (下部) ── 4列 × 4段 */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <text x="40" y="570" fontFamily="serif" fontSize="11" letterSpacing="4" fill="#2D6A4F" opacity="0.7">
            ACTION · 実行する処理 (16)
          </text>
          {noCode.actions.map((a, i) => {
            const col = i % 4;
            const row = Math.floor(i / 4);
            const ax = 80 + col * 280;
            const ay = 596 + row * 38;
            return (
              <g key={a}>
                <rect
                  x={ax}
                  y={ay}
                  width="260"
                  height="28"
                  rx="14"
                  fill="#FAF3E0"
                  stroke="#1B4332"
                  strokeWidth="0.6"
                  opacity="0.95"
                />
                <text x={ax + 14} y={ay + 18} fontFamily="serif" fontSize="11" fill="#1B4332">
                  {String(i + 1).padStart(2, "0")} {a}
                </text>
              </g>
            );
          })}
        </motion.g>

        <text x="40" y="752" fontFamily="serif" fontSize="10" fill="#1B4332" opacity="0.55">
          fig.04 — 出典: PPT slide 4「ノーコードで多様な操作を実現できる機能」
        </text>
      </svg>
    </figure>
  );
}
