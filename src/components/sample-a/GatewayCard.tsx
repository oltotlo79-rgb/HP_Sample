"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function GatewayCard({
  href,
  eyebrow,
  title,
  description,
  imageSrc,
  index,
}: {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  imageSrc?: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      whileHover={{ y: -8, rotate: -0.4 }}
    >
      <Link
        href={href}
        className="group relative block overflow-hidden rounded-[28px] border border-[var(--a-forest)]/10 bg-white/65 backdrop-blur-sm"
      >
        <div
          className="relative aspect-[16/9] w-full overflow-hidden"
          style={{ background: "linear-gradient(135deg, #D8F3DC, #95D5B2)" }}
        >
          {imageSrc && (
            <Image
              src={imageSrc}
              alt=""
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
        </div>

        <div className="flex items-start justify-between gap-6 p-6 sm:p-8 md:p-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--a-moss)] sm:text-xs">
              {eyebrow}
            </p>
            <h3 className="mt-2 font-serif-jp text-2xl text-[var(--a-forest)] sm:mt-3 sm:text-3xl md:text-4xl">
              {title}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-loose text-[var(--a-ink)]/75 sm:mt-4">
              {description}
            </p>
          </div>
          <div className="shrink-0 rounded-full bg-[var(--a-forest)] p-3 text-[var(--a-cream)] transition-transform group-hover:rotate-12">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
