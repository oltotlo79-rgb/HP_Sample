"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { editions, expertise } from "@/content/product";

export function EditionsBoard() {
  return (
    <div className="grid gap-12 md:grid-cols-12">
      <aside className="md:col-span-4">
        {/* 規模感を伝える写真 */}
        <div
          className="relative mb-8 aspect-[4/5] w-full overflow-hidden rounded-3xl"
          style={{ border: "1px solid rgba(27,67,50,0.12)" }}
        >
          <Image
            src="/images/photos/sample-a/editions-room.webp"
            alt=""
            fill
            sizes="(min-width: 768px) 30vw, 100vw"
            className="object-cover"
          />
        </div>
        <p className="font-fraunces text-sm uppercase tracking-[0.35em] text-[var(--a-moss)]">
          Editions × Expertise
        </p>
        <h3 className="mt-4 font-serif-jp text-3xl leading-snug text-[var(--a-forest)] md:text-4xl">
          規模に育つ、<br />3 つの Edition。
        </h3>
        <p className="mt-6 font-serif-jp text-base leading-loose text-[var(--a-ink)]/80">
          {editions.intro}
        </p>
        <p className="mt-6 text-xs leading-relaxed text-[var(--a-bark)]">
          {editions.note}
        </p>

        {/* 10年以上のノウハウ */}
        <div className="mt-10 rounded-3xl bg-[var(--a-mist)] p-6" style={{ border: "1px solid rgba(27,67,50,0.15)" }}>
          <p className="font-fraunces text-sm uppercase tracking-widest text-[var(--a-moss)]">
            since
          </p>
          <p className="mt-2 font-fraunces text-6xl text-[var(--a-forest)]">
            10
            <span className="ml-2 text-base text-[var(--a-bark)]">years +</span>
          </p>
          <p className="mt-2 font-serif-jp text-sm leading-loose text-[var(--a-ink)]/85">
            {expertise.label}。{expertise.body}
          </p>
        </div>
      </aside>

      <ul className="md:col-span-8 space-y-4">
        {editions.items.map((e, i) => (
          <motion.li
            key={e.tier}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="relative grid items-center gap-6 rounded-3xl p-7 md:grid-cols-12"
            style={{
              background: e.featured ? "var(--a-forest)" : "var(--a-cream)",
              color: e.featured ? "var(--a-cream)" : "var(--a-ink)",
              border: e.featured
                ? "1px solid var(--a-forest)"
                : "1px solid rgba(27,67,50,0.15)",
            }}
          >
            <div className="md:col-span-3">
              <span
                className={
                  e.featured
                    ? "font-fraunces text-3xl text-[var(--a-mint)] md:text-4xl"
                    : "font-fraunces text-3xl text-[var(--a-forest)] md:text-4xl"
                }
              >
                {e.tier}
              </span>
              <p
                className={
                  e.featured
                    ? "mt-1 text-xs uppercase tracking-widest text-[var(--a-cream)]/70"
                    : "mt-1 text-xs uppercase tracking-widest text-[var(--a-moss)]"
                }
              >
                {e.scale}
              </p>
            </div>
            <div className="md:col-span-9">
              <p
                className={
                  e.featured
                    ? "font-serif-jp text-lg text-[var(--a-cream)]"
                    : "font-serif-jp text-lg text-[var(--a-forest)]"
                }
              >
                {e.headline}
              </p>
              <p
                className={
                  e.featured
                    ? "mt-2 text-sm leading-loose text-[var(--a-cream)]/85"
                    : "mt-2 text-sm leading-loose text-[var(--a-ink)]/80"
                }
              >
                {e.body}
              </p>
            </div>
            {e.featured && (
              <span className="absolute -top-2 right-6 rounded-full bg-[var(--a-mint)] px-3 py-1 text-[10px] uppercase tracking-widest text-[var(--a-forest)]">
                Most Popular
              </span>
            )}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
