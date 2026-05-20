import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { GlassCard } from "@/components/sample-b/GlassCard";
import { DataStream } from "@/components/sample-b/DataStream";
import { noCode, screenBuilder, templateFlow } from "@/content/product";
import { MethodPanel } from "@/components/sample-b/MethodPanel";

export const metadata: Metadata = {
  title: "業務画面作成機能",
};

export default function SampleBScreenBuilder() {
  return (
    <main>
      <section className="relative overflow-hidden px-5 pt-28 pb-12 sm:px-6 md:px-12 md:pt-40 md:pb-16">
        <div className="absolute inset-0 -z-10" aria-hidden>
          <Image
            src="/images/sample-b/sb-screen-builder-hero.webp"
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
                "radial-gradient(ellipse at 20% 0%, rgba(94,234,212,0.18), transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(167,139,250,0.18), transparent 60%), linear-gradient(180deg, rgba(10,14,26,0.85), rgba(16,23,39,0.92))",
            }}
          />
        </div>
        <DataStream className="absolute inset-x-0 top-24 -z-0 h-24 opacity-40" />
        <div className="relative mx-auto max-w-7xl">
          <Breadcrumb
            items={[
              { label: "TOP", href: "/sample-b" },
              { label: "業務画面作成機能" },
            ]}
            className="mb-10 text-[var(--b-muted)]"
          />
          <p className="font-space-grotesk text-xs uppercase tracking-[0.4em] text-[var(--b-mint)]">
            Feature · Screen Builder
          </p>
          <h1 className="mt-5 font-serif-jp text-[2rem] leading-[1.15] text-[var(--b-text)] sm:text-4xl md:mt-6 md:text-6xl">
            {screenBuilder.title}
          </h1>
          <p className="mt-6 max-w-3xl text-sm leading-loose text-[var(--b-muted)] sm:text-base md:mt-8 md:text-lg">
            {screenBuilder.lead}
          </p>
        </div>
      </section>

      <section className="relative px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl space-y-10">
          <MethodPanel method={screenBuilder.methods[0]} index={0}>
            <div className="grid gap-4 md:grid-cols-2">
              <GlassCard className="p-6">
                <p className="font-space-grotesk text-xs uppercase tracking-[0.3em] text-[var(--b-mint)]">
                  Triggers
                </p>
                <ul className="mt-4 space-y-2">
                  {screenBuilder.methods[0].triggers?.map((t) => (
                    <li
                      key={t}
                      className="flex items-center gap-2 text-sm text-[var(--b-text)]"
                    >
                      <span className="inline-block h-1 w-3 rounded-full bg-[var(--b-mint)]" />
                      {t}
                    </li>
                  ))}
                </ul>
              </GlassCard>
              <GlassCard className="p-6">
                <p className="font-space-grotesk text-xs uppercase tracking-[0.3em] text-[var(--b-aqua)]">
                  Actions
                </p>
                <ul className="mt-4 grid grid-cols-2 gap-2">
                  {screenBuilder.methods[0].actions?.map((a) => (
                    <li
                      key={a}
                      className="rounded-lg border border-[var(--b-aqua)]/30 bg-white/5 px-3 py-2 text-xs text-[var(--b-text)]"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </MethodPanel>

          <MethodPanel method={screenBuilder.methods[1]} index={1}>
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {screenBuilder.methods[1].templates?.map((t, i) => (
                  <GlassCard key={t} className="aspect-square p-4">
                    <div className="flex h-full flex-col justify-between">
                      <span className="font-space-grotesk text-2xl text-[var(--b-mint)]">
                        ◇0{i + 1}
                      </span>
                      <p className="font-serif-jp text-sm text-[var(--b-text)] md:text-base">
                        {t}
                      </p>
                    </div>
                  </GlassCard>
                ))}
              </div>
              <GlassCard hover={false} className="p-6">
                <p className="font-space-grotesk text-xs uppercase tracking-[0.3em] text-[var(--b-mint)]">
                  Template · 3 Steps
                </p>
                <p className="mt-3 text-xs leading-loose text-[var(--b-muted)] md:text-sm">
                  {templateFlow.intro}
                </p>
                <ol className="mt-5 space-y-3">
                  {templateFlow.steps.map((s) => (
                    <li
                      key={s.no}
                      className="rounded-2xl border border-[var(--b-mint)]/20 bg-white/5 p-4"
                    >
                      <span className="font-space-grotesk text-xs font-bold text-[var(--b-mint)]">
                        Step {s.no}
                      </span>
                      <p className="mt-1 font-serif-jp text-sm text-[var(--b-text)] md:text-base">
                        {s.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-[var(--b-muted)]">
                        {s.body}
                      </p>
                    </li>
                  ))}
                </ol>
                <p className="mt-4 text-xs text-[var(--b-muted)]">
                  機能枠テンプレート:{" "}
                  {templateFlow.frameTemplates.join(" / ")}
                </p>
              </GlassCard>
            </div>
          </MethodPanel>

          <MethodPanel method={screenBuilder.methods[2]} index={2}>
            <GlassCard className="p-8">
              <div className="grid grid-cols-3 items-center gap-4">
                {screenBuilder.methods[2].steps.map((s, i) => (
                  <div key={s} className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[var(--b-mint)]/40 bg-[var(--b-mint)]/10 font-space-grotesk text-xl font-bold text-[var(--b-mint)]">
                      0{i + 1}
                    </div>
                    <p className="mt-3 text-xs text-[var(--b-text)] md:text-sm">
                      {s.replace(/^[①②③]/, "")}
                    </p>
                  </div>
                ))}
              </div>
              <svg viewBox="0 0 600 40" className="mt-4 w-full">
                <line
                  x1="60"
                  y1="20"
                  x2="540"
                  y2="20"
                  stroke="#5EEAD4"
                  strokeWidth="1"
                  strokeDasharray="3 5"
                />
                <circle cx="60" cy="20" r="4" fill="#5EEAD4" />
                <circle cx="540" cy="20" r="4" fill="#5EEAD4" />
              </svg>
            </GlassCard>
          </MethodPanel>

          <section className="px-2 py-12">
            <p className="font-space-grotesk text-xs uppercase tracking-[0.4em] text-[var(--b-mint)]">
              Reference · No-Code Capability
            </p>
            <h2 className="mt-4 font-serif-jp text-2xl text-[var(--b-text)] md:text-4xl">
              全機能 — トリガー × アクション 一覧
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-loose text-[var(--b-muted)] md:text-base">
              {noCode.intro}
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <GlassCard className="p-6">
                <p className="font-space-grotesk text-xs uppercase tracking-[0.3em] text-[var(--b-mint)]">
                  Triggers
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {noCode.triggers.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-[var(--b-mint)]/30 bg-[var(--b-mint)]/8 px-3 py-1 text-xs text-[var(--b-text)]"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </GlassCard>
              <GlassCard className="p-6">
                <p className="font-space-grotesk text-xs uppercase tracking-[0.3em] text-[var(--b-aqua)]">
                  Actions
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {noCode.actions.map((a) => (
                    <li
                      key={a}
                      className="rounded-full border border-[var(--b-aqua)]/30 bg-[var(--b-aqua)]/8 px-3 py-1 text-xs text-[var(--b-text)]"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
