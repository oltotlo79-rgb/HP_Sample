"use client";

import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";

export function BentoTile({
  no,
  title,
  body,
  span = "default",
  accent = "mint",
  children,
  index = 0,
}: {
  no: string;
  title: string;
  body?: string;
  span?: "default" | "wide" | "tall";
  accent?: "mint" | "aqua" | "violet";
  children?: React.ReactNode;
  index?: number;
}) {
  const colorClass =
    accent === "mint"
      ? "text-[var(--b-mint)]"
      : accent === "aqua"
        ? "text-[var(--b-aqua)]"
        : "text-[var(--b-violet)]";

  const spanClass =
    span === "wide"
      ? "md:col-span-2 md:row-span-1"
      : span === "tall"
        ? "md:row-span-2"
        : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={spanClass}
    >
      <GlassCard className="h-full p-6 md:p-8">
        <div className="flex items-start justify-between">
          <p className={`font-space-grotesk text-xs font-bold uppercase tracking-[0.3em] ${colorClass}`}>
            {no}
          </p>
        </div>
        <h3 className="mt-4 font-serif-jp text-xl text-[var(--b-text)] md:text-2xl">
          {title}
        </h3>
        {body && (
          <p className="mt-3 text-sm leading-loose text-[var(--b-muted)]">
            {body}
          </p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </GlassCard>
    </motion.div>
  );
}
