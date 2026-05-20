"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function FlipGateway({
  href,
  eyebrow,
  title,
  description,
  accent,
  preview,
  details,
  imageSrc,
}: {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  accent: "mint" | "aqua";
  preview: React.ReactNode;
  details: string[];
  imageSrc?: string;
}) {
  const [flipped, setFlipped] = useState(false);
  const color = accent === "mint" ? "#5EEAD4" : "#06B6D4";
  return (
    <div
      className="relative aspect-[16/11] cursor-pointer"
      style={{ perspective: 1400 }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <div
          className="glass absolute inset-0 overflow-hidden rounded-3xl p-8 md:p-10"
          style={{ backfaceVisibility: "hidden" }}
        >
          {imageSrc && (
            <Image
              src={imageSrc}
              alt=""
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="pointer-events-none absolute inset-0 -z-10 object-cover opacity-55"
            />
          )}
          <div className="flex h-full flex-col">
            <p
              className="font-space-grotesk text-xs font-bold uppercase tracking-[0.3em]"
              style={{ color }}
            >
              {eyebrow}
            </p>
            <h3 className="mt-4 font-serif-jp text-3xl text-[var(--b-text)] md:text-4xl">
              {title}
            </h3>
            <p className="mt-4 max-w-md text-sm leading-loose text-[var(--b-muted)]">
              {description}
            </p>
            <div className="mt-auto flex items-end justify-between">
              <p className="text-xs uppercase tracking-widest text-[var(--b-muted)]">
                hover to reveal
              </p>
              <div className="aspect-square h-16">{preview}</div>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 overflow-hidden rounded-3xl p-8 md:p-10"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background:
              "linear-gradient(135deg, rgba(94,234,212,0.18), rgba(6,182,212,0.08))",
            border: `1px solid ${color}55`,
            backdropFilter: "blur(20px) saturate(150%)",
            WebkitBackdropFilter: "blur(20px) saturate(150%)",
          }}
        >
          <div className="flex h-full flex-col justify-between">
            <div>
              <p
                className="font-space-grotesk text-xs font-bold uppercase tracking-[0.3em]"
                style={{ color }}
              >
                {eyebrow} / detail
              </p>
              <ul className="mt-6 space-y-3">
                {details.map((d) => (
                  <li
                    key={d}
                    className="flex items-center gap-3 text-sm text-[var(--b-text)]"
                  >
                    <span
                      className="inline-block h-1.5 w-1.5 rounded-full"
                      style={{ background: color }}
                    />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href={href}
              className="group inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold"
              style={{ background: color, color: "#0A0E1A" }}
            >
              Open Page
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:rotate-12"
              />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
