"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function GlassCard({
  children,
  className = "",
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, rotate: 0.15 } : undefined}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={`glass relative overflow-hidden rounded-3xl ${className}`}
      style={{ boxShadow: "0 30px 60px -30px rgba(0,0,0,0.6)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(94,234,212,0.18), transparent 40%)",
        }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
