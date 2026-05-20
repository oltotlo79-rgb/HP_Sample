"use client";

import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";

type Method = {
  no: string;
  title: string;
  desc: string;
  steps: readonly string[];
  features: readonly string[];
};

export function MethodPanel({
  method,
  index,
  children,
}: {
  method: Method;
  index: number;
  children?: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.05 }}
    >
      <GlassCard hover={false} className="p-8 md:p-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-4">
              <span className="font-space-grotesk text-5xl font-bold text-[var(--b-mint)] md:text-7xl">
                {method.no}
              </span>
              <h2 className="font-serif-jp text-2xl text-[var(--b-text)] md:text-3xl">
                {method.title}
              </h2>
            </div>
            <p className="mt-6 max-w-md text-sm leading-loose text-[var(--b-muted)] md:text-base">
              {method.desc}
            </p>

            <p className="mt-8 font-space-grotesk text-xs uppercase tracking-[0.3em] text-[var(--b-mint)]">
              Steps
            </p>
            <ol className="mt-3 space-y-2">
              {method.steps.map((s, i) => (
                <li
                  key={s}
                  className="flex items-center gap-3 text-sm text-[var(--b-text)]"
                >
                  <span className="font-space-grotesk text-xs text-[var(--b-mint)]">
                    0{i + 1}
                  </span>
                  {s.replace(/^[①②③]/, "")}
                </li>
              ))}
            </ol>

            <p className="mt-6 font-space-grotesk text-xs uppercase tracking-[0.3em] text-[var(--b-mint)]">
              Features
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {method.features.map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-[var(--b-mint)]/30 bg-[var(--b-mint)]/5 px-3 py-1 text-xs text-[var(--b-text)]"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-7">{children}</div>
        </div>
      </GlassCard>
    </motion.section>
  );
}
