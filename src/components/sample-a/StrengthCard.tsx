"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Strength = { no: string; title: string; body: string };

const IMAGES = [
  "/images/photos/sample-a/strength-scale.webp",
  "/images/photos/sample-a/strength-flex.webp",
  "/images/photos/sample-a/strength-quick.webp",
];

export function StrengthCard({
  strength,
  index,
}: {
  strength: Strength;
  index: number;
}) {
  const img = IMAGES[index] ?? IMAGES[0];
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-3xl bg-white/65 backdrop-blur-sm transition-shadow hover:shadow-2xl"
      style={{ border: "1px solid rgba(27,67,50,0.12)" }}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={img}
          alt=""
          fill
          sizes="(min-width: 768px) 30vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span
          aria-hidden
          className="absolute left-5 top-3 font-fraunces text-6xl leading-none text-[var(--a-cream)] drop-shadow"
        >
          {strength.no}
        </span>
      </div>
      <div className="p-6 sm:p-7 md:p-8">
        <h3 className="font-serif-jp text-xl text-[var(--a-forest)] sm:text-2xl">
          {strength.title}
        </h3>
        <p className="mt-3 text-sm leading-loose text-[var(--a-ink)]/80 sm:mt-4">
          {strength.body}
        </p>
      </div>
    </motion.article>
  );
}
