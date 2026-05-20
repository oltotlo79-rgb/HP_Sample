"use client";

import { motion } from "framer-motion";

export function TemplateLeafGrid({ items }: { items: readonly string[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
      {items.map((label, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.08 }}
          whileHover={{ y: -6, rotate: i % 2 ? -2 : 2 }}
          className="group relative aspect-square overflow-hidden rounded-3xl bg-white/50 p-6 backdrop-blur-sm"
          style={{ border: "1px solid rgba(27,67,50,0.1)" }}
        >
          <svg viewBox="0 0 100 100" className="h-full w-full">
            <defs>
              <linearGradient id={`leaf-grad-${i}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1B4332" />
                <stop offset="100%" stopColor="#95D5B2" />
              </linearGradient>
            </defs>
            <motion.path
              d={
                i === 0
                  ? "M 50 15 Q 75 35 70 60 Q 65 85 50 90 Q 35 85 30 60 Q 25 35 50 15 Z"
                  : i === 1
                    ? "M 50 12 C 80 25 80 60 50 90 C 20 60 20 25 50 12 Z"
                    : i === 2
                      ? "M 20 50 Q 50 15 80 50 Q 50 85 20 50 Z"
                      : "M 50 10 Q 70 30 70 50 Q 70 80 50 90 Q 30 80 30 50 Q 30 30 50 10 Z"
              }
              fill={`url(#leaf-grad-${i})`}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: i * 0.08 }}
            />
            <motion.path
              d="M 50 15 L 50 88"
              stroke="#FAF3E0"
              strokeWidth="0.8"
              opacity="0.7"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 0.3 + i * 0.08 }}
            />
          </svg>
          <p className="absolute bottom-4 left-4 right-4 font-serif-jp text-sm text-[var(--a-forest)] md:text-base">
            {label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
