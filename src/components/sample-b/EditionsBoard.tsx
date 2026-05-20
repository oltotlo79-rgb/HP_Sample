"use client";

import { motion } from "framer-motion";
import { editions, expertise } from "@/content/product";

export function EditionsBoard() {
  return (
    <div className="grid gap-12 md:grid-cols-12">
      <aside className="md:col-span-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--b-mint)]">
          ◇ editions · 3 tiers
        </p>
        <h3 className="mt-4 font-serif-jp text-3xl leading-snug text-[var(--b-text)] md:text-4xl">
          規模に応じて、<br />Edition を選ぶ。
        </h3>
        <p className="mt-6 font-serif-jp text-base leading-loose text-[var(--b-muted)]">
          {editions.intro}
        </p>
        <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-[var(--b-muted)]">
          {editions.note}
        </p>

        {/* 10+ years */}
        <div
          className="mt-10 rounded-3xl border border-[var(--b-mint)]/25 p-6"
          style={{
            background:
              "linear-gradient(135deg, rgba(94,234,212,0.12), rgba(6,182,212,0.04))",
          }}
        >
          <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--b-mint)]">
            ▌ since
          </p>
          <p className="mt-2 font-space-grotesk text-6xl font-bold text-[var(--b-mint)]">
            10
            <span className="ml-2 text-base font-normal text-[var(--b-muted)]">years +</span>
          </p>
          <p className="mt-2 text-sm leading-loose text-[var(--b-muted)]">
            {expertise.body}
          </p>
        </div>
      </aside>

      <ol className="md:col-span-8 space-y-4">
        {editions.items.map((e, i) => (
          <motion.li
            key={e.tier}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="relative grid items-center gap-4 rounded-3xl border p-6 md:grid-cols-12 md:p-8"
            style={{
              borderColor: e.featured ? "rgba(94,234,212,0.6)" : "rgba(94,234,212,0.2)",
              background: e.featured
                ? "linear-gradient(135deg, rgba(94,234,212,0.18), rgba(167,139,250,0.06))"
                : "rgba(255,255,255,0.03)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="md:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--b-mint)]">
                ◇ tier · {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-1 font-space-grotesk text-3xl font-bold text-[var(--b-mint)] md:text-4xl">
                {e.tier}
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-[var(--b-muted)]">
                {e.scale}
              </p>
            </div>
            <div className="md:col-span-9">
              <p className="font-serif-jp text-lg text-[var(--b-text)]">
                {e.headline}
              </p>
              <p className="mt-2 text-sm leading-loose text-[var(--b-muted)]">
                {e.body}
              </p>
            </div>
            {e.featured && (
              <span
                className="absolute -top-3 right-6 rounded-full border border-[var(--b-mint)] bg-[#0A0E1A] px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--b-mint)]"
                style={{ boxShadow: "0 0 16px rgba(94,234,212,0.5)" }}
              >
                Most Popular
              </span>
            )}
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
