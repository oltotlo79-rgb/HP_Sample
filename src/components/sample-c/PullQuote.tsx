"use client";

import { motion } from "framer-motion";

export function PullQuote({
  children,
  attribution,
}: {
  children: React.ReactNode;
  attribution?: string;
}) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9 }}
      className="relative my-12 border-y py-12 text-center md:py-20"
      style={{ borderColor: "var(--c-rule)" }}
    >
      <span
        aria-hidden
        className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-[var(--c-canvas)] px-4 font-fraunces text-base italic text-[var(--c-mustard)]"
      >
        Pull Quote
      </span>
      <p className="mx-auto max-w-3xl font-serif-jp text-3xl leading-snug text-[var(--c-deep)] md:text-5xl">
        {children}
      </p>
      {attribution && (
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-[var(--c-ink)]/60">
          {attribution}
        </p>
      )}
    </motion.blockquote>
  );
}
