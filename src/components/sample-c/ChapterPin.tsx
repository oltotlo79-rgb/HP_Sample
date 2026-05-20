"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ChapterPin({
  no,
  title,
  subtitle,
  children,
}: {
  no: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const numScale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const numOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.18, 0.12, 0.05]);
  const numY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section ref={ref} className="relative">
      <div className="sticky top-0 -z-0 hidden h-screen items-center justify-end overflow-hidden px-6 md:flex md:px-12">
        <motion.span
          style={{ scale: numScale, opacity: numOpacity, y: numY }}
          aria-hidden
          className="font-fraunces text-[28vw] font-light leading-none tracking-tighter text-[var(--c-deep)]"
        >
          {no}
        </motion.span>
      </div>
      <div className="relative px-5 py-20 sm:px-6 md:-mt-[100vh] md:px-12 md:py-48">
        <div className="mx-auto max-w-7xl">
          <p className="font-space-grotesk text-[10px] uppercase tracking-[0.4em] text-[var(--c-mustard)] sm:text-xs">
            Chapter · {no}
          </p>
          <h2 className="mt-4 font-serif-jp text-[2rem] leading-[1.15] text-[var(--c-deep)] sm:mt-6 sm:text-4xl md:text-6xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-5 max-w-2xl font-serif-jp text-sm leading-loose text-[var(--c-ink)]/80 sm:mt-6 sm:text-base md:text-lg">
              {subtitle}
            </p>
          )}
          <div className="mt-10 sm:mt-16">{children}</div>
        </div>
      </div>
    </section>
  );
}
