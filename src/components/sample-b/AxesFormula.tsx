"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { product } from "@/content/product";

/**
 * PPT slide 2 の 3 軸式を、3 つのホログラフィッククリスタルと巨大な × グリフで構成。
 * 各クリスタルは独立して回転し、× で交わると CRM が生成されるメタファ。
 */
export function AxesFormula() {
  const reduce = useReducedMotion();
  const colors = [
    { stroke: "#5EEAD4", glow: "rgba(94,234,212,0.45)" },
    { stroke: "#06B6D4", glow: "rgba(6,182,212,0.45)" },
    { stroke: "#A78BFA", glow: "rgba(167,139,250,0.45)" },
  ];

  return (
    <figure className="relative overflow-hidden rounded-3xl" aria-label="3 軸の方程式">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(94,234,212,0.16), transparent 60%), linear-gradient(180deg, #0A0E1A, #101727)",
        }}
      />
      <div className="relative grid grid-cols-1 items-center gap-6 px-6 py-12 md:grid-cols-11 md:px-12 md:py-16">
        {product.buildSelfAxes.map((a, i) => (
          <Fragment key={a.key}>
            {i > 0 && (
              <motion.div
                className="hidden text-center md:block"
                initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.2 }}
              >
                <span
                  className="block font-space-grotesk text-7xl font-light text-[var(--b-mint)]"
                  style={{ filter: "drop-shadow(0 0 12px rgba(94,234,212,0.6))" }}
                >
                  ×
                </span>
              </motion.div>
            )}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.2, 0.7, 0.2, 1] }}
              className="relative md:col-span-3"
            >
              <div
                className="relative aspect-[3/4] overflow-hidden rounded-2xl border p-6"
                style={{
                  borderColor: colors[i].stroke + "55",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* クリスタル */}
                <svg viewBox="0 0 200 240" className="absolute inset-0 h-full w-full opacity-70">
                  <defs>
                    <linearGradient id={`crystal-${i}`} x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor={colors[i].stroke} stopOpacity="0.4" />
                      <stop offset="100%" stopColor={colors[i].stroke} stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <motion.polygon
                    points="100,30 170,120 130,210 70,210 30,120"
                    fill={`url(#crystal-${i})`}
                    stroke={colors[i].stroke}
                    strokeWidth="1.2"
                    animate={
                      reduce
                        ? undefined
                        : {
                            rotate: [0, 8, -6, 0],
                          }
                    }
                    transition={{ duration: 12 + i * 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{ transformOrigin: "100px 120px" }}
                  />
                  <polygon
                    points="100,30 130,210 70,210"
                    fill={colors[i].stroke}
                    opacity="0.15"
                  />
                  <line x1="100" y1="30" x2="100" y2="210" stroke={colors[i].stroke} strokeWidth="0.4" opacity="0.6" />
                </svg>

                {/* インデックス + タイトル */}
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span
                      className="font-space-grotesk text-xs font-bold tracking-[0.3em]"
                      style={{ color: colors[i].stroke }}
                    >
                      ◇ {String(i + 1).padStart(2, "0")}
                    </span>
                    <motion.span
                      className="block h-1.5 w-1.5 rounded-full"
                      style={{ background: colors[i].stroke }}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.4 + i * 0.4, repeat: Infinity }}
                    />
                  </div>

                  <div className="mt-auto">
                    <p
                      className="font-serif-jp text-xl font-bold leading-tight text-[var(--b-text)] md:text-2xl"
                      style={{ textShadow: `0 0 18px ${colors[i].glow}` }}
                    >
                      {a.title}
                    </p>
                    <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-[var(--b-muted)]">
                      AXIS · {a.key.toUpperCase()}
                    </p>
                    <p className="mt-3 text-xs leading-loose text-[var(--b-muted)] md:text-sm">
                      {a.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Fragment>
        ))}
      </div>

      <div className="relative border-t border-[var(--b-mint)]/15 px-6 py-4 md:px-12">
        <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--b-muted)]">
          ▌ Equation: layout × ui × logic ⇒ build by yourself (no-code) · src: PPT slide 2
        </p>
      </div>
    </figure>
  );
}
