"use client";

import { motion } from "framer-motion";

export function DataStream({
  className = "",
  count = 6,
}: {
  className?: string;
  count?: number;
}) {
  return (
    <svg
      viewBox="0 0 1920 120"
      preserveAspectRatio="none"
      className={`block w-full ${className}`}
      aria-hidden
    >
      <defs>
        <linearGradient id="ds-grad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#5EEAD4" stopOpacity="0" />
          <stop offset="50%" stopColor="#5EEAD4" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#5EEAD4" stopOpacity="0" />
        </linearGradient>
      </defs>
      {Array.from({ length: count }).map((_, i) => {
        const y = (120 / (count + 1)) * (i + 1);
        return (
          <motion.line
            key={i}
            x1="0"
            y1={y}
            x2="1920"
            y2={y}
            stroke="url(#ds-grad)"
            strokeWidth="1"
            strokeDasharray={`${20 + i * 10} ${40 + i * 12}`}
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -(200 + i * 50) }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}
    </svg>
  );
}
