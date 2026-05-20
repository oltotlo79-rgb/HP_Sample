import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { WaveDivider } from "@/components/sample-a/WaveDivider";
import { TemplateLeafGrid } from "@/components/sample-a/TemplateLeafGrid";
import { noCode, screenBuilder, templateFlow } from "@/content/product";
import { MethodSection } from "@/components/sample-a/MethodSection";

export const metadata: Metadata = {
  title: "業務画面作成機能",
};

export default function SampleAScreenBuilder() {
  return (
    <main>
      <section className="relative overflow-hidden px-5 pt-28 pb-12 sm:px-6 md:px-12 md:pt-40 md:pb-16">
        <div className="absolute inset-0 -z-10" aria-hidden>
          <Image
            src="/images/sample-a/sa-screen-builder-hero.webp"
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
                "radial-gradient(circle at 80% 0%, rgba(149,213,178,0.35), transparent 50%), linear-gradient(180deg, rgba(250,243,224,0.88), rgba(242,234,211,0.95))",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl">
          <Breadcrumb
            items={[
              { label: "TOP", href: "/sample-a" },
              { label: "業務画面作成機能" },
            ]}
            className="mb-10 text-[var(--a-moss)]"
          />
          <p className="font-fraunces text-sm uppercase tracking-[0.35em] text-[var(--a-moss)]">
            Feature · Screen Builder
          </p>
          <h1 className="mt-5 font-serif-jp text-[2rem] leading-[1.15] text-[var(--a-forest)] sm:text-4xl md:mt-6 md:text-6xl">
            {screenBuilder.title}
          </h1>
          <p className="mt-6 max-w-3xl text-sm leading-loose text-[var(--a-ink)]/80 sm:text-base md:mt-8 md:text-lg">
            {screenBuilder.lead}
          </p>
        </div>
      </section>

      <WaveDivider from="transparent" to="var(--a-cream)" />

      <MethodSection method={screenBuilder.methods[0]} index={0}>
        <TriggerActionCanvas />
      </MethodSection>

      <MethodSection method={screenBuilder.methods[1]} index={1} alt>
        <div className="space-y-6">
          <TemplateLeafGrid items={screenBuilder.methods[1].templates ?? []} />
          <TemplateStepDetail />
        </div>
      </MethodSection>

      <MethodSection method={screenBuilder.methods[2]} index={2}>
        <ExcelFlowCanvas />
      </MethodSection>

      <NoCodeReference />
    </main>
  );
}

function TemplateStepDetail() {
  return (
    <div className="rounded-3xl border border-[var(--a-forest)]/10 bg-white/60 p-6 backdrop-blur-sm md:p-8">
      <p className="text-xs uppercase tracking-[0.3em] text-[var(--a-moss)]">
        テンプレート利用 · 3 ステップ
      </p>
      <p className="mt-3 text-sm leading-loose text-[var(--a-ink)]/80">
        {templateFlow.intro}
      </p>
      <ol className="mt-6 space-y-3">
        {templateFlow.steps.map((s, i) => (
          <li
            key={s.no}
            className="rounded-2xl bg-[var(--a-mist)] p-4"
            style={{ border: "1px solid rgba(27,67,50,0.1)" }}
          >
            <p className="text-xs font-medium text-[var(--a-moss)]">
              Step {s.no}
            </p>
            <p className="mt-1 font-serif-jp text-base text-[var(--a-forest)]">
              {s.title}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-[var(--a-ink)]/75">
              {s.body}
            </p>
            {i === 1 && (
              <p className="mt-2 text-xs text-[var(--a-bark)]">
                例:{" "}
                {templateFlow.frameTemplates.join(" / ")}
              </p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

function NoCodeReference() {
  return (
    <section className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="font-fraunces text-sm uppercase tracking-[0.35em] text-[var(--a-moss)]">
          Reference · No-Code Capability
        </p>
        <h2 className="mt-4 font-serif-jp text-3xl text-[var(--a-forest)] md:text-4xl">
          全機能 — トリガー × アクション 一覧
        </h2>
        <p className="mt-6 max-w-3xl text-sm leading-loose text-[var(--a-ink)]/80 md:text-base">
          {noCode.intro}
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div
            className="rounded-3xl bg-white/60 p-6 backdrop-blur-sm"
            style={{ border: "1px solid rgba(27,67,50,0.1)" }}
          >
            <p className="text-xs uppercase tracking-widest text-[var(--a-moss)]">
              Triggers
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {noCode.triggers.map((t) => (
                <li
                  key={t}
                  className="rounded-full bg-[var(--a-mist)] px-3 py-1 text-xs text-[var(--a-forest)]"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="rounded-3xl bg-white/60 p-6 backdrop-blur-sm"
            style={{ border: "1px solid rgba(27,67,50,0.1)" }}
          >
            <p className="text-xs uppercase tracking-widest text-[var(--a-moss)]">
              Actions
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {noCode.actions.map((a) => (
                <li
                  key={a}
                  className="rounded-full bg-[var(--a-cream)] px-3 py-1 text-xs text-[var(--a-forest)]"
                  style={{ border: "1px solid rgba(27,67,50,0.15)" }}
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function TriggerActionCanvas() {
  const triggers = ["入力領域", "ボタンの押下", "チェックボックス ON"];
  const actions = ["表示／色の変更", "値のセット／計算", "コピー", "繰り返し"];
  return (
    <div className="rounded-3xl border border-[var(--a-forest)]/10 bg-white/60 p-8 backdrop-blur-sm">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--a-moss)]">
            Trigger
          </p>
          <ul className="mt-4 space-y-3">
            {triggers.map((t) => (
              <li
                key={t}
                className="flex items-center gap-3 rounded-full bg-[var(--a-mist)] px-4 py-2 text-sm text-[var(--a-forest)]"
              >
                <span className="h-2 w-2 rounded-full bg-[var(--a-moss)]" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--a-moss)]">
            Action
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-3">
            {actions.map((a) => (
              <li
                key={a}
                className="rounded-2xl border border-[var(--a-forest)]/15 bg-white px-4 py-3 text-sm text-[var(--a-forest)]"
              >
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <svg viewBox="0 0 600 80" className="mt-6 w-full">
        <path
          d="M 60 40 Q 200 0 300 40 T 540 40"
          stroke="#2D6A4F"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="4 6"
        />
        <circle cx="60" cy="40" r="5" fill="#1B4332" />
        <circle cx="540" cy="40" r="5" fill="#1B4332" />
      </svg>
    </div>
  );
}

function ExcelFlowCanvas() {
  const steps = ["設計書 (Excel)", "読込", "画面で調整"];
  return (
    <div className="rounded-3xl border border-[var(--a-forest)]/10 bg-white/60 p-8 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[var(--a-mist)] font-fraunces text-3xl text-[var(--a-forest)]">
                0{i + 1}
              </div>
              <p className="mt-3 font-serif-jp text-sm text-[var(--a-forest)] md:text-base">
                {s}
              </p>
            </div>
            {i < steps.length - 1 && (
              <span className="hidden h-px w-16 bg-[var(--a-moss)]/40 md:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
