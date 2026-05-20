"use client";

import { motion } from "framer-motion";
import { management } from "@/content/product";

/**
 * PPT slide 6 を、中心の Core (QuickCRM) を周回する 5 つの軌道で表現する。
 * 軌道は自転し、機能群がそれぞれ異なる速度で巡る。
 */
export function ManagementOrbit() {
  const palette = ["#5EEAD4", "#06B6D4", "#A78BFA", "#FBBF24", "#F472B6"];

  return (
    <figure className="relative overflow-hidden rounded-3xl border border-[var(--b-mint)]/20 bg-[#0A0E1A] p-6 md:p-12" aria-label="管理機能 軌道図">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(94,234,212,0.16), transparent 60%)",
        }}
      />
      <p className="relative font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--b-mint)]">
        ◇ fig.06 · management modules orbit
      </p>

      <div className="relative mt-6 grid gap-8 md:grid-cols-12">
        {/* 軌道 SVG */}
        <div className="relative md:col-span-7 aspect-square">
          <svg viewBox="0 0 600 600" className="absolute inset-0 h-full w-full">
            <defs>
              <radialGradient id="orb-core" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#5EEAD4" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#5EEAD4" stopOpacity="0" />
              </radialGradient>
            </defs>
            {/* 軌道環 */}
            {management.groups.map((_, i) => {
              const r = 90 + i * 50;
              return (
                <motion.circle
                  key={`orb-${i}`}
                  cx="300"
                  cy="300"
                  r={r}
                  fill="none"
                  stroke={palette[i]}
                  strokeWidth="0.6"
                  opacity="0.5"
                  strokeDasharray="3 8"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: 0.2 + i * 0.1 }}
                />
              );
            })}

            {/* 中央 Core */}
            <circle cx="300" cy="300" r="74" fill="url(#orb-core)" />
            <circle cx="300" cy="300" r="50" fill="#101727" stroke="#5EEAD4" strokeWidth="1.4" />
            <text
              x="300"
              y="294"
              textAnchor="middle"
              fontFamily="monospace"
              fontSize="9"
              letterSpacing="4"
              fill="#5EEAD4"
            >
              CORE
            </text>
            <text
              x="300"
              y="312"
              textAnchor="middle"
              fontFamily="monospace"
              fontSize="13"
              fontWeight="700"
              fill="#E2E8F0"
            >
              QuickCRM
            </text>

            {/* 軌道上の機能群ノード */}
            {management.groups.map((g, i) => {
              const r = 90 + i * 50;
              const dur = 22 + i * 6;
              return (
                <motion.g
                  key={`orb-node-${i}`}
                  style={{ transformOrigin: "300px 300px" }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: dur, repeat: Infinity, ease: "linear" }}
                >
                  <circle
                    cx={300 + r}
                    cy={300}
                    r="14"
                    fill="#101727"
                    stroke={palette[i]}
                    strokeWidth="1.4"
                  />
                  <text
                    x={300 + r}
                    y={304}
                    textAnchor="middle"
                    fontFamily="monospace"
                    fontSize="11"
                    fontWeight="700"
                    fill={palette[i]}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </text>
                </motion.g>
              );
            })}
          </svg>
        </div>

        {/* レジェンド */}
        <ul className="md:col-span-5 space-y-3">
          {management.groups.map((g, i) => (
            <motion.li
              key={g.key}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="rounded-2xl border border-[var(--b-mint)]/15 bg-[var(--b-deep)]/40 p-4"
            >
              <div className="flex items-baseline justify-between gap-3">
                <span
                  className="font-mono text-xs font-bold"
                  style={{ color: palette[i] }}
                >
                  [{String(i + 1).padStart(2, "0")}] {g.title}
                </span>
                <span className="font-mono text-[10px] text-[var(--b-muted)]">
                  {g.items.length} fn
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-[var(--b-muted)]">
                {g.summary}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </figure>
  );
}
