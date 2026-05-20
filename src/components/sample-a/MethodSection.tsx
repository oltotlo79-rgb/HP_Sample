"use client";

import { motion } from "framer-motion";

type Method = {
  key: string;
  no: string;
  title: string;
  desc: string;
  steps: readonly string[];
  features: readonly string[];
};

export function MethodSection({
  method,
  index,
  alt = false,
  children,
}: {
  method: Method;
  index: number;
  alt?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <section
      className="relative px-6 py-24 md:px-12 md:py-32"
      style={{ background: alt ? "var(--a-mist)" : "transparent" }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-baseline gap-6">
            <span className="font-fraunces text-6xl text-[var(--a-mint)] md:text-8xl">
              {method.no}
            </span>
            <h2 className="font-serif-jp text-2xl text-[var(--a-forest)] md:text-4xl">
              {method.title}
            </h2>
          </div>
          <p className="mt-6 max-w-3xl text-base leading-loose text-[var(--a-ink)]/80 md:text-lg">
            {method.desc}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--a-moss)]">
              Steps
            </p>
            <ol className="mt-4 space-y-3">
              {method.steps.map((s, i) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-3 rounded-2xl bg-white/60 p-4 backdrop-blur-sm"
                  style={{ border: "1px solid rgba(27,67,50,0.08)" }}
                >
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--a-forest)] text-xs font-bold text-[var(--a-cream)]">
                    {i + 1}
                  </span>
                  <span className="font-serif-jp text-base text-[var(--a-forest)]">
                    {s.replace(/^[①②③]/, "")}
                  </span>
                </motion.li>
              ))}
            </ol>

            <p className="mt-10 text-xs uppercase tracking-[0.3em] text-[var(--a-moss)]">
              Features
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {method.features.map((f) => (
                <li
                  key={f}
                  className="rounded-full bg-[var(--a-forest)]/8 px-4 py-1.5 text-xs text-[var(--a-forest)] md:text-sm"
                  style={{ border: "1px solid rgba(27,67,50,0.15)" }}
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-7">{children}</div>
        </div>
      </div>
    </section>
  );
}
