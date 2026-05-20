"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function HorizontalScroller({
  children,
  panels,
}: {
  children?: React.ReactNode;
  panels: { title: string; node: React.ReactNode }[];
}) {
  const target = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start start", "end end"],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(panels.length - 1) * 100}%`]
  );

  return (
    <section
      ref={target}
      className="relative"
      style={{ height: `${panels.length * 100}vh` }}
    >
      {children}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex"
        >
          {panels.map((p, i) => (
            <div
              key={i}
              className="flex h-screen w-screen items-center justify-center px-6 md:px-16"
            >
              <div className="mx-auto w-full max-w-6xl">
                <p className="font-space-grotesk text-xs uppercase tracking-[0.4em] text-[var(--b-mint)]">
                  Method · 0{i + 1}
                </p>
                <h3 className="mt-4 font-serif-jp text-3xl text-[var(--b-text)] md:text-5xl">
                  {p.title}
                </h3>
                <div className="mt-10">{p.node}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
