"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function WaveDivider({
  from = "#FAF3E0",
  to = "#FAF3E0",
  flip = false,
}: {
  from?: string;
  to?: string;
  flip?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const dy = useTransform(scrollYProgress, [0, 1], [-12, 12]);

  return (
    <div
      ref={ref}
      className="relative h-24 w-full overflow-hidden md:h-32"
      style={{ background: from, transform: flip ? "scaleY(-1)" : undefined }}
      aria-hidden
    >
      <motion.svg
        viewBox="0 0 1920 120"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-full w-full"
        style={{ y: dy }}
      >
        <defs>
          <linearGradient id="wave-a" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#1B4332" />
            <stop offset="100%" stopColor="#2D6A4F" />
          </linearGradient>
        </defs>
        <path
          d="M0,80 C320,20 640,140 960,70 C1280,0 1600,110 1920,60 L1920,120 L0,120 Z"
          fill="url(#wave-a)"
          opacity="0.18"
        />
        <path
          d="M0,90 C320,40 640,140 960,80 C1280,20 1600,120 1920,80 L1920,120 L0,120 Z"
          fill={to}
        />
      </motion.svg>
    </div>
  );
}
