"use client";

import { motion } from "framer-motion";

export function Spread({
  left,
  right,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <div
      className="grid gap-px md:grid-cols-2"
      style={{ background: "var(--c-rule)" }}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="bg-[var(--c-canvas)] p-8 md:p-12"
      >
        {left}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="bg-[var(--c-paper)] p-8 md:p-12"
      >
        {right}
      </motion.div>
    </div>
  );
}
