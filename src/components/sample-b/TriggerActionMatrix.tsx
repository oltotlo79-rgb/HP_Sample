"use client";

import { motion } from "framer-motion";
import { noCode } from "@/content/product";

/**
 * PPT slide 4 のトリガー × アクションを、データストリームと光のグリッドで再構築。
 * 8 本のトリガー線が中央の × で 16 本のアクションに発散する。
 */
export function TriggerActionMatrix() {
  return (
    <figure
      className="relative overflow-hidden rounded-3xl border border-[var(--b-mint)]/20 bg-[#0A0E1A]"
      aria-label="トリガー × アクション マトリクス"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(94,234,212,0.18), transparent 70%)",
        }}
      />
      {/* グリッド */}
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full opacity-25"
        viewBox="0 0 1200 700"
        preserveAspectRatio="none"
      >
        <g stroke="#5EEAD4" strokeWidth="0.4">
          {Array.from({ length: 16 }).map((_, i) => (
            <line key={`gh${i}`} x1="0" y1={i * 44} x2="1200" y2={i * 44} />
          ))}
          {Array.from({ length: 25 }).map((_, i) => (
            <line key={`gv${i}`} x1={i * 50} y1="0" x2={i * 50} y2="700" />
          ))}
        </g>
      </svg>

      <div className="relative grid grid-cols-12 gap-6 p-8 md:p-12">
        {/* ヘッダ */}
        <div className="col-span-12 flex items-center justify-between border-b border-[var(--b-mint)]/15 pb-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--b-mint)]">
            ◇ fig.04 · trigger × action matrix
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--b-muted)]">
            src · PPT slide 4
          </p>
        </div>

        {/* 左列: triggers */}
        <div className="col-span-12 md:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--b-mint)]">
            [TRIGGER] × {noCode.triggers.length}
          </p>
          <ul className="mt-4 space-y-1.5">
            {noCode.triggers.map((t, i) => (
              <motion.li
                key={t}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group flex items-center gap-2 rounded-md border border-[var(--b-mint)]/15 bg-[var(--b-deep)]/40 px-3 py-1.5"
              >
                <span className="font-mono text-[10px] text-[var(--b-mint)]">
                  &gt;{String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-xs text-[var(--b-text)] md:text-sm">{t}</span>
                <motion.span
                  className="ml-auto h-1.5 w-1.5 rounded-full bg-[var(--b-mint)]"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1.8,
                    delay: i * 0.12,
                    repeat: Infinity,
                  }}
                />
              </motion.li>
            ))}
          </ul>
        </div>

        {/* 中央: × グリフと流線 */}
        <div className="col-span-12 md:col-span-4 relative flex items-center justify-center">
          <svg viewBox="0 0 320 480" className="h-full w-full">
            <defs>
              <linearGradient id="flow-l" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#5EEAD4" stopOpacity="0" />
                <stop offset="100%" stopColor="#5EEAD4" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="flow-r" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* 左から中央への流路 */}
            {Array.from({ length: 8 }).map((_, i) => {
              const y1 = 40 + i * 50;
              return (
                <motion.path
                  key={`fl-${i}`}
                  d={`M 0 ${y1} Q 80 ${y1} 160 240`}
                  stroke="url(#flow-l)"
                  strokeWidth="1.4"
                  fill="none"
                  strokeDasharray="6 6"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 + i * 0.05 }}
                  animate={{
                    strokeDashoffset: [0, -120],
                  }}
                  style={{ animationIterationCount: "infinite" }}
                />
              );
            })}
            {/* 中央から右への流路 */}
            {Array.from({ length: 16 }).map((_, i) => {
              const y2 = 24 + i * 28;
              return (
                <motion.path
                  key={`fr-${i}`}
                  d={`M 160 240 Q 240 ${y2} 320 ${y2}`}
                  stroke="url(#flow-r)"
                  strokeWidth="1.2"
                  fill="none"
                  strokeDasharray="6 6"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.6 + i * 0.03 }}
                />
              );
            })}

            {/* 中央 × */}
            <motion.g
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <circle cx="160" cy="240" r="58" fill="#0A0E1A" stroke="#5EEAD4" strokeWidth="1.6" />
              <text
                x="160"
                y="262"
                textAnchor="middle"
                fontFamily="monospace"
                fontSize="58"
                fontWeight="300"
                fill="#5EEAD4"
              >
                ×
              </text>
              <motion.circle
                cx="160"
                cy="240"
                r="58"
                fill="none"
                stroke="#5EEAD4"
                strokeWidth="1"
                animate={{ r: [58, 76, 58], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut" }}
              />
            </motion.g>

            <text x="160" y="450" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#94A3B8" letterSpacing="3">
              {noCode.triggers.length} × {noCode.actions.length} = {noCode.triggers.length * noCode.actions.length} patterns
            </text>
          </svg>
        </div>

        {/* 右列: actions */}
        <div className="col-span-12 md:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--b-aqua)]">
            [ACTION] × {noCode.actions.length}
          </p>
          <ul className="mt-4 space-y-1">
            {noCode.actions.map((a, i) => (
              <motion.li
                key={a}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.03 }}
                className="flex items-center gap-2 rounded-md border border-[var(--b-aqua)]/15 bg-[var(--b-deep)]/40 px-3 py-1"
              >
                <span className="font-mono text-[10px] text-[var(--b-aqua)]">
                  &lt;{String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[11px] text-[var(--b-text)] md:text-xs">
                  {a}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </figure>
  );
}
