"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Sample = {
  key: string;
  href: string;
  label: string;
  concept: string;
  tagline: string;
  description: string;
  accent: string;
};

const imageByKey: Record<string, string> = {
  a: "/images/landing/landing-card-a.webp",
  b: "/images/landing/landing-card-b.webp",
  c: "/images/landing/landing-card-c.webp",
};

export function LandingCard({
  sample,
  index,
}: {
  sample: Sample;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -6 }}
    >
      <Link
        href={sample.href}
        className="group relative block overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-shadow hover:shadow-2xl"
      >
        <div
          className="relative aspect-[4/3] w-full overflow-hidden"
          style={{ background: sample.accent }}
        >
          <Image
            src={imageByKey[sample.key] ?? imageByKey.a}
            alt=""
            fill
            sizes="(min-width: 768px) 30vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="p-6 md:p-8">
          <p className="text-xs uppercase tracking-widest opacity-60">
            {sample.label}
          </p>
          <h3 className="mt-2 font-fraunces text-2xl tracking-tight md:text-3xl">
            {sample.concept}
          </h3>
          <p className="mt-3 font-serif-jp text-base leading-relaxed md:text-lg">
            {sample.tagline}
          </p>
          <p className="mt-4 text-sm leading-relaxed opacity-70">
            {sample.description}
          </p>

          <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium tracking-wider">
            サンプルを開く
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

// (旧 PreviewA/B/C SVG は landing-card-*.webp に置換済)
