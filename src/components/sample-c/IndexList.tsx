"use client";

import { motion } from "framer-motion";

type Entry = { no: string; title: string; body: string };

export function IndexList({ items }: { items: readonly Entry[] }) {
  return (
    <ol className="divide-y border-y" style={{ borderColor: "var(--c-rule)" }}>
      {items.map((it, i) => (
        <motion.li
          key={it.no}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="group relative grid grid-cols-12 items-baseline gap-4 py-8 md:gap-8 md:py-12"
        >
          <div className="col-span-2 md:col-span-1">
            <span className="font-space-grotesk text-xs uppercase tracking-widest text-[var(--c-mustard)]">
              No.{it.no}
            </span>
          </div>
          <div className="col-span-10 md:col-span-5">
            <h3 className="font-serif-jp text-2xl tracking-tight text-[var(--c-deep)] md:text-4xl">
              {it.title}
            </h3>
          </div>
          <div className="col-span-12 md:col-span-6">
            <p className="font-serif-jp text-base leading-loose text-[var(--c-ink)]/80">
              {it.body}
            </p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
