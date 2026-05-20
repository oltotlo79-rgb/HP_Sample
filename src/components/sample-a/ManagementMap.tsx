"use client";

import { motion } from "framer-motion";
import { management } from "@/content/product";

/**
 * PPT slide 6 の管理機能 5 群を、樹冠のクラスタとして再構築する。
 * 中央に「必要な機能だけを選択可能」を据え、5 つの群が枝のように展開する。
 */
export function ManagementMap() {
  const positions = [
    { x: 200, y: 130, angle: -140 },
    { x: 740, y: 130, angle: -40 },
    { x: 200, y: 470, angle: 140 },
    { x: 740, y: 470, angle: 40 },
    { x: 470, y: 70, angle: -90 },
  ];

  return (
    <figure className="relative" aria-label="管理機能 全体マップ">
      <svg viewBox="0 0 960 600" className="h-auto w-full">
        <defs>
          <radialGradient id="mm-center" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FAF3E0" />
            <stop offset="100%" stopColor="#95D5B2" />
          </radialGradient>
          <linearGradient id="mm-leaf" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#2D6A4F" />
            <stop offset="100%" stopColor="#95D5B2" />
          </linearGradient>
        </defs>

        {/* 背景 */}
        <rect width="960" height="600" fill="#FAF3E0" opacity="0.4" />

        {/* 接続線 */}
        {positions.map((p, i) => (
          <motion.path
            key={`line-${i}`}
            d={`M 470 300 Q ${(p.x + 470) / 2} ${(p.y + 300) / 2 + 20} ${p.x} ${p.y}`}
            stroke="#1B4332"
            strokeWidth="1.2"
            fill="none"
            opacity="0.35"
            strokeDasharray="2 4"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
          />
        ))}

        {/* 中央 */}
        <motion.g
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <circle cx="470" cy="300" r="116" fill="url(#mm-center)" />
          <circle cx="470" cy="300" r="116" fill="none" stroke="#1B4332" strokeWidth="1.5" opacity="0.4" />
          <text x="470" y="288" textAnchor="middle" fontFamily="serif" fontSize="11" letterSpacing="4" fill="#1B4332" opacity="0.7">
            QuickCRM
          </text>
          <text x="470" y="312" textAnchor="middle" fontFamily="serif" fontSize="18" fontWeight="700" fill="#1B4332">
            管理機能
          </text>
          <text x="470" y="334" textAnchor="middle" fontFamily="serif" fontSize="10" fill="#5C4033" opacity="0.85">
            必要な機能だけを選択
          </text>
        </motion.g>

        {/* 5 機能群クラスタ */}
        {management.groups.map((g, i) => {
          const p = positions[i];
          if (!p) return null;
          return (
            <motion.g
              key={g.key}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
            >
              <ellipse cx={p.x} cy={p.y} rx="120" ry="62" fill="url(#mm-leaf)" opacity="0.88" />
              <text
                x={p.x}
                y={p.y - 6}
                textAnchor="middle"
                fontFamily="serif"
                fontSize="9"
                letterSpacing="4"
                fill="#FAF3E0"
                opacity="0.85"
              >
                {String(i + 1).padStart(2, "0")}
              </text>
              <text
                x={p.x}
                y={p.y + 14}
                textAnchor="middle"
                fontFamily="serif"
                fontSize="14"
                fontWeight="700"
                fill="#FAF3E0"
              >
                {g.title}
              </text>
              <text
                x={p.x}
                y={p.y + 32}
                textAnchor="middle"
                fontFamily="serif"
                fontSize="9"
                fill="#FAF3E0"
                opacity="0.85"
              >
                {g.items.length} 機能
              </text>
            </motion.g>
          );
        })}

        <text x="40" y="586" fontFamily="serif" fontSize="10" fill="#1B4332" opacity="0.55">
          fig.06 — 出典: PPT slide 6 ・管理機能の全体構成
        </text>
      </svg>
    </figure>
  );
}
