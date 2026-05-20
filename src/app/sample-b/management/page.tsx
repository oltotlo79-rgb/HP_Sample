"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { GlassCard } from "@/components/sample-b/GlassCard";
import { DataStream } from "@/components/sample-b/DataStream";
import { ManagementOrbit } from "@/components/sample-b/ManagementOrbit";
import { management } from "@/content/product";

export default function SampleBManagement() {
  return (
    <main>
      <section className="relative overflow-hidden px-5 pt-28 pb-12 sm:px-6 md:px-12 md:pt-40 md:pb-16">
        <div className="absolute inset-0 -z-10" aria-hidden>
          <Image
            src="/images/sample-b/sb-management-hero.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-90"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 80% 0%, rgba(6,182,212,0.22), transparent 50%), radial-gradient(ellipse at 0% 100%, rgba(94,234,212,0.18), transparent 60%), linear-gradient(180deg, rgba(10,14,26,0.85), rgba(16,23,39,0.92))",
            }}
          />
        </div>
        <DataStream className="absolute inset-x-0 top-24 -z-0 h-24 opacity-40" />
        <div className="relative mx-auto max-w-7xl">
          <Breadcrumb
            items={[
              { label: "TOP", href: "/sample-b" },
              { label: "管理機能" },
            ]}
            className="mb-10 text-[var(--b-muted)]"
          />
          <p className="font-space-grotesk text-xs uppercase tracking-[0.4em] text-[var(--b-mint)]">
            Feature · Management
          </p>
          <h1 className="mt-5 font-serif-jp text-[2rem] leading-[1.15] text-[var(--b-text)] sm:text-4xl md:mt-6 md:text-6xl">
            {management.title}
          </h1>
          <p className="mt-6 max-w-3xl text-sm leading-loose text-[var(--b-muted)] sm:text-base md:mt-8 md:text-lg">
            {management.lead}
          </p>
        </div>
      </section>

      <section className="relative px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-10 font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--b-mint)]">
            ▌ 01 · orbit map (fig.06)
          </p>
          <ManagementOrbit />
        </div>
      </section>

      <section className="relative px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl space-y-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--b-mint)]">
            ▌ 02 · detail
          </p>
          {management.groups.map((g, i) => (
            <motion.div
              key={g.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
            >
              <GlassCard className="p-8 md:p-12">
                <div className="grid gap-8 md:grid-cols-12">
                  <div className="md:col-span-4">
                    <span className="font-space-grotesk text-4xl font-bold text-[var(--b-mint)] sm:text-5xl md:text-7xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-3 font-serif-jp text-xl text-[var(--b-text)] sm:text-2xl md:text-3xl">
                      {g.title}
                    </h2>
                    {g.note && (
                      <p className="mt-3 text-xs text-[var(--b-muted)]">
                        {g.note}
                      </p>
                    )}
                  </div>
                  <div className="md:col-span-8">
                    <p className="mb-5 text-sm leading-loose text-[var(--b-muted)] md:text-base">
                      {g.summary}
                    </p>
                    <ul className="grid gap-4 md:grid-cols-2">
                      {g.items.map((item) => (
                        <li
                          key={item.name}
                          className="rounded-2xl border border-[var(--b-mint)]/20 bg-white/5 p-4"
                        >
                          <p className="font-medium text-[var(--b-text)]">
                            {item.name}
                          </p>
                          {"subs" in item && item.subs && (
                            <div className="mt-2 flex flex-wrap gap-1.5">
                              {item.subs.map((s) => (
                                <span
                                  key={s}
                                  className="rounded-full bg-[var(--b-mint)]/10 px-2 py-0.5 text-xs text-[var(--b-mint)]"
                                >
                                  {s}
                                </span>
                              ))}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative px-6 pb-32 md:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass overflow-hidden rounded-3xl p-10 text-[var(--b-text)] md:p-16"
            style={{
              background:
                "linear-gradient(135deg, rgba(94,234,212,0.16), rgba(6,182,212,0.08))",
            }}
          >
            <p className="font-space-grotesk text-xs uppercase tracking-[0.4em] text-[var(--b-mint)]">
              Modular Operations
            </p>
            <p className="mt-6 font-serif-jp text-3xl leading-snug md:text-5xl">
              必要な機能だけを、起動する。
            </p>
            <p className="mt-6 max-w-2xl text-sm leading-loose text-[var(--b-muted)] md:text-base">
              アウトバウンド、データ管理、レポート、コミュニケーション、通話録音。
              必要な機能群を選び、コンタクトセンターの運用を再構築できます。
            </p>
          </motion.blockquote>
        </div>
      </section>
    </main>
  );
}
