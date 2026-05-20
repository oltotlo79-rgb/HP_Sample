import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ChapterPin } from "@/components/sample-c/ChapterPin";
import { PullQuote } from "@/components/sample-c/PullQuote";
import { Spread } from "@/components/sample-c/Spread";
import { noCode, screenBuilder, templateFlow } from "@/content/product";

export const metadata: Metadata = {
  title: "業務画面作成機能",
};

export default function SampleCScreenBuilder() {
  return (
    <main>
      <section className="relative overflow-hidden px-5 pt-20 pb-10 sm:px-6 md:px-12 md:pt-32 md:pb-20">
        <div className="absolute inset-0 -z-10" aria-hidden>
          <Image
            src="/images/sample-c/sc-screen-builder-hero.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(247,244,236,0.95), rgba(239,233,217,0.98))",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl">
          <Breadcrumb
            items={[
              { label: "TOP", href: "/sample-c" },
              { label: "業務画面作成機能" },
            ]}
            className="mb-10 text-[var(--c-ink)]/70 md:mb-12"
          />
          <p className="font-space-grotesk text-[10px] uppercase tracking-[0.4em] text-[var(--c-mustard)]">
            Feature · Screen Builder
          </p>
          <h1 className="mt-5 font-serif-jp text-[2rem] leading-[1.1] tracking-tight text-[var(--c-deep)] sm:text-5xl md:mt-6 md:text-7xl">
            {screenBuilder.title}
          </h1>
          <div className="mt-12 grid gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="font-serif-jp text-base leading-loose text-[var(--c-ink)]/85 md:text-lg">
                {screenBuilder.lead}
              </p>
            </div>
            <div
              className="md:col-span-4 md:col-start-9 border-t pt-6 font-serif-jp text-sm leading-relaxed text-[var(--c-ink)]/70"
              style={{ borderColor: "var(--c-rule)" }}
            >
              本記事では、QuickCRM の業務画面を構築する 3 つのアプローチを順に紹介する。
              余白と罫線が、機能の輪郭を読みやすくしてくれる。
            </div>
          </div>
        </div>
      </section>

      <ChapterPin
        no="01"
        title={screenBuilder.methods[0].title}
        subtitle={screenBuilder.methods[0].desc}
        plateSrc="/images/photos/sample-c/chapter-hands.webp"
      >
        <Spread
          left={
            <div>
              <p className="font-space-grotesk text-xs uppercase tracking-widest text-[var(--c-mustard)]">
                Steps
              </p>
              <ol className="mt-4 space-y-3">
                {screenBuilder.methods[0].steps.map((s, i) => (
                  <li
                    key={s}
                    className="border-t pt-3 font-serif-jp text-lg text-[var(--c-deep)]"
                    style={{ borderColor: "var(--c-rule)" }}
                  >
                    <span className="mr-3 font-space-grotesk text-xs text-[var(--c-mustard)]">
                      0{i + 1}
                    </span>
                    {s.replace(/^[①②③]/, "")}
                  </li>
                ))}
              </ol>
            </div>
          }
          right={
            <div>
              <p className="font-space-grotesk text-xs uppercase tracking-widest text-[var(--c-mustard)]">
                Trigger × Action
              </p>
              <div className="mt-6 space-y-3 font-serif-jp text-base">
                <p className="text-[var(--c-ink)]/70">トリガー</p>
                <ul className="space-y-1 pl-4 text-[var(--c-deep)]">
                  {screenBuilder.methods[0].triggers?.map((t) => (
                    <li key={t}>· {t}</li>
                  ))}
                </ul>
                <p className="mt-4 text-[var(--c-ink)]/70">アクション</p>
                <ul className="space-y-1 pl-4 text-[var(--c-deep)]">
                  {screenBuilder.methods[0].actions?.map((a) => (
                    <li key={a}>· {a}</li>
                  ))}
                </ul>
              </div>
            </div>
          }
        />
        <FeaturesList items={screenBuilder.methods[0].features} />
      </ChapterPin>

      <ChapterPin
        no="02"
        title={screenBuilder.methods[1].title}
        subtitle={screenBuilder.methods[1].desc}
        plateSrc="/images/photos/sample-c/chapter-template.webp"
      >
        <div className="grid grid-cols-2 gap-px md:grid-cols-4" style={{ background: "var(--c-rule)" }}>
          {screenBuilder.methods[1].templates?.map((t, i) => (
            <div
              key={t}
              className="aspect-[3/4] bg-[var(--c-canvas)] p-6 md:p-8"
            >
              <p className="font-space-grotesk text-xs uppercase tracking-widest text-[var(--c-mustard)]">
                Template · 0{i + 1}
              </p>
              <p className="mt-12 font-serif-jp text-xl leading-tight text-[var(--c-deep)] md:text-2xl">
                {t}
              </p>
            </div>
          ))}
        </div>
        <FeaturesList items={screenBuilder.methods[1].features} />
        <TemplateStepDetail />
      </ChapterPin>

      <ChapterPin
        no="03"
        title={screenBuilder.methods[2].title}
        subtitle={screenBuilder.methods[2].desc}
        plateSrc="/images/photos/sample-c/chapter-excel.webp"
      >
        <Spread
          left={
            <div>
              <p className="font-space-grotesk text-xs uppercase tracking-widest text-[var(--c-mustard)]">
                Flow
              </p>
              <ol className="mt-6 space-y-6">
                {screenBuilder.methods[2].steps.map((s, i) => (
                  <li key={s}>
                    <span className="font-fraunces text-5xl font-light italic text-[var(--c-mustard)]">
                      0{i + 1}
                    </span>
                    <p className="mt-2 font-serif-jp text-xl text-[var(--c-deep)]">
                      {s.replace(/^[①②③]/, "")}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          }
          right={
            <div className="flex h-full items-center">
              <svg viewBox="0 0 240 320" className="w-full">
                <rect
                  x="10"
                  y="10"
                  width="220"
                  height="300"
                  fill="none"
                  stroke="#2F5233"
                  strokeWidth="1"
                  opacity="0.4"
                />
                {Array.from({ length: 10 }).map((_, i) => (
                  <line
                    key={`h${i}`}
                    x1="10"
                    y1={40 + i * 28}
                    x2="230"
                    y2={40 + i * 28}
                    stroke="#2F5233"
                    strokeWidth="0.5"
                    opacity="0.18"
                  />
                ))}
                {Array.from({ length: 6 }).map((_, i) => (
                  <line
                    key={`v${i}`}
                    x1={10 + i * 44}
                    y1="10"
                    x2={10 + i * 44}
                    y2="310"
                    stroke="#2F5233"
                    strokeWidth="0.5"
                    opacity="0.18"
                  />
                ))}
                <text
                  x="120"
                  y="170"
                  textAnchor="middle"
                  fontFamily="serif"
                  fontSize="14"
                  fill="#2F5233"
                  letterSpacing="2"
                  opacity="0.7"
                >
                  Excel Sheet
                </text>
              </svg>
            </div>
          }
        />
        <FeaturesList items={screenBuilder.methods[2].features} />
      </ChapterPin>

      <section className="px-6 py-24 md:px-12 md:py-32" style={{ background: "var(--c-paper)" }}>
        <div className="mx-auto max-w-7xl">
          <p className="font-space-grotesk text-[10px] uppercase tracking-[0.4em] text-[var(--c-mustard)]">
            Reference · No-Code Capability
          </p>
          <h2 className="mt-4 font-serif-jp text-3xl leading-snug text-[var(--c-deep)] md:text-5xl">
            全機能 — トリガー × アクション 一覧。
          </h2>
          <p className="mt-6 max-w-3xl font-serif-jp text-base leading-loose text-[var(--c-ink)]/80 md:text-lg">
            {noCode.intro}
          </p>
          <div className="mt-12 grid gap-px md:grid-cols-12" style={{ background: "var(--c-rule)" }}>
            <div className="bg-[var(--c-paper)] p-6 md:col-span-5 md:p-10">
              <p className="font-space-grotesk text-xs uppercase tracking-widest text-[var(--c-mustard)]">
                Triggers
              </p>
              <ul className="mt-6 space-y-2 font-serif-jp text-base text-[var(--c-deep)]">
                {noCode.triggers.map((t) => (
                  <li key={t} className="border-b pb-2" style={{ borderColor: "var(--c-rule)" }}>
                    <span className="mr-2 text-[var(--c-mustard)]">·</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[var(--c-paper)] p-6 md:col-span-7 md:p-10">
              <p className="font-space-grotesk text-xs uppercase tracking-widest text-[var(--c-mustard)]">
                Actions
              </p>
              <ul className="mt-6 grid gap-y-2 font-serif-jp text-base text-[var(--c-deep)] md:grid-cols-2">
                {noCode.actions.map((a) => (
                  <li key={a} className="border-b pb-2" style={{ borderColor: "var(--c-rule)" }}>
                    <span className="mr-2 text-[var(--c-mustard)]">·</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-32 md:px-12">
        <div className="mx-auto max-w-7xl">
          <PullQuote attribution="QuickCRM">
            業務に最適な画面は、お客様自身の手で編む。
          </PullQuote>
        </div>
      </section>
    </main>
  );
}

function TemplateStepDetail() {
  return (
    <div className="mt-12 border-t pt-12" style={{ borderColor: "var(--c-rule)" }}>
      <p className="font-space-grotesk text-xs uppercase tracking-widest text-[var(--c-mustard)]">
        テンプレート利用 · 3 ステップ
      </p>
      <p className="mt-3 max-w-3xl font-serif-jp text-base leading-loose text-[var(--c-ink)]/80">
        {templateFlow.intro}
      </p>
      <ol className="mt-8 grid gap-px md:grid-cols-3" style={{ background: "var(--c-rule)" }}>
        {templateFlow.steps.map((s, i) => (
          <li
            key={s.no}
            className="bg-[var(--c-canvas)] p-6 md:p-8"
          >
            <p className="font-fraunces text-3xl font-light italic text-[var(--c-mustard)]">
              Step {s.no}
            </p>
            <p className="mt-2 font-serif-jp text-lg text-[var(--c-deep)] md:text-xl">
              {s.title}
            </p>
            <p className="mt-3 font-serif-jp text-sm leading-loose text-[var(--c-ink)]/80">
              {s.body}
            </p>
            {i === 1 && (
              <p className="mt-3 text-xs text-[var(--c-ink)]/65">
                例: {templateFlow.frameTemplates.join(" / ")}
              </p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

function FeaturesList({ items }: { items: readonly string[] }) {
  return (
    <ul
      className="mt-12 grid gap-3 border-t pt-8 md:grid-cols-3"
      style={{ borderColor: "var(--c-rule)" }}
    >
      {items.map((f) => (
        <li
          key={f}
          className="font-serif-jp text-base leading-relaxed text-[var(--c-deep)]"
        >
          <span className="mr-2 text-[var(--c-mustard)]">⁂</span>
          {f}
        </li>
      ))}
    </ul>
  );
}
