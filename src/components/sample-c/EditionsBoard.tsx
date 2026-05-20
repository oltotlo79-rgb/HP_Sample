"use client";

import { motion } from "framer-motion";
import { editions, expertise } from "@/content/product";

export function EditionsBoard() {
  return (
    <div className="grid gap-12 md:grid-cols-12">
      <aside className="md:col-span-4">
        <p className="font-space-grotesk text-[10px] uppercase tracking-[0.4em] text-[var(--c-mustard)]">
          Fig.08 ── Editions
        </p>
        <h3 className="mt-4 font-serif-jp text-3xl leading-snug text-[var(--c-deep)] md:text-4xl">
          規模に応じる、<br />3 つの版。
        </h3>
        <p className="mt-6 font-serif-jp text-base leading-loose text-[var(--c-ink)]/80">
          {editions.intro}
        </p>
        <p className="mt-6 font-space-grotesk text-[10px] uppercase tracking-widest text-[var(--c-ink)]/55">
          {editions.note}
        </p>

        <div
          className="mt-10 border-t pt-6"
          style={{ borderColor: "var(--c-rule)" }}
        >
          <p className="font-space-grotesk text-[10px] uppercase tracking-widest text-[var(--c-mustard)]">
            Since
          </p>
          <p className="mt-2 font-fraunces text-6xl font-light italic text-[var(--c-deep)]">
            10
            <span className="ml-2 text-base font-normal not-italic text-[var(--c-ink)]/65">
              years +
            </span>
          </p>
          <p className="mt-2 font-serif-jp text-sm leading-loose text-[var(--c-ink)]/80">
            {expertise.body}
          </p>
        </div>
      </aside>

      <div className="md:col-span-8 overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse">
          <thead>
            <tr
              className="text-left font-space-grotesk text-[10px] uppercase tracking-[0.3em] text-[var(--c-mustard)]"
            >
              <th
                className="border-b py-3 pr-4 align-bottom"
                style={{ borderColor: "var(--c-rule)" }}
              >
                Tier
              </th>
              <th
                className="border-b py-3 pr-4 align-bottom"
                style={{ borderColor: "var(--c-rule)" }}
              >
                Scale
              </th>
              <th
                className="border-b py-3 pr-4 align-bottom"
                style={{ borderColor: "var(--c-rule)" }}
              >
                Headline
              </th>
              <th
                className="border-b py-3 text-right align-bottom"
                style={{ borderColor: "var(--c-rule)" }}
              >
                N°
              </th>
            </tr>
          </thead>
          <tbody>
            {editions.items.map((e, i) => (
              <motion.tr
                key={e.tier}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{
                  background: e.featured ? "var(--c-paper)" : "transparent",
                }}
              >
                <td className="border-b py-5 pr-4 align-top font-fraunces text-3xl font-light italic text-[var(--c-deep)] md:py-7" style={{ borderColor: "var(--c-rule)" }}>
                  {e.tier}
                  {e.featured && (
                    <span className="ml-2 align-middle text-[10px] not-italic uppercase tracking-widest text-[var(--c-mustard)]">
                      most popular
                    </span>
                  )}
                </td>
                <td className="border-b py-5 pr-4 align-top font-space-grotesk text-xs uppercase tracking-widest text-[var(--c-ink)]/65" style={{ borderColor: "var(--c-rule)" }}>
                  {e.scale}
                </td>
                <td className="border-b py-5 pr-4 align-top font-serif-jp text-base text-[var(--c-deep)] md:text-lg" style={{ borderColor: "var(--c-rule)" }}>
                  <p className="font-bold">{e.headline}</p>
                  <p className="mt-2 text-sm leading-loose text-[var(--c-ink)]/80">
                    {e.body}
                  </p>
                </td>
                <td className="border-b py-5 text-right align-top font-fraunces text-2xl italic text-[var(--c-mustard)]" style={{ borderColor: "var(--c-rule)" }}>
                  {String(i + 1).padStart(2, "0")}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
