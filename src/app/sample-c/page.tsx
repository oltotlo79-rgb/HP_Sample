import Link from "next/link";
import { EditorialHero } from "@/components/sample-c/EditorialHero";
import { IndexList } from "@/components/sample-c/IndexList";
import { Spread } from "@/components/sample-c/Spread";
import { ArchitectureLedger } from "@/components/sample-c/ArchitectureLedger";
import { AxesFormula } from "@/components/sample-c/AxesFormula";
import { TriggerActionTable } from "@/components/sample-c/TriggerActionTable";
import { VideoBoard } from "@/components/sample-c/VideoBoard";
import { EditionsBoard } from "@/components/sample-c/EditionsBoard";
import {
  ctiPartners,
  options,
  product,
  strengths,
  templateFlow,
} from "@/content/product";

export default function SampleCHome() {
  return (
    <main>
      <EditorialHero />

      <EditorsNote />
      <VideoSection />
      <ArchitectureSection />
      <BuildSelf />
      <StrengthsFolio />
      <TriggerAction />
      <ChannelsFolio />
      <EditionsSection />
      <TemplateFolio />
      <FeaturePreview />
    </main>
  );
}

function EditorsNote() {
  return (
    <section className="px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-12">
        <div className="md:col-span-3">
          <p className="font-space-grotesk text-[10px] uppercase tracking-[0.4em] text-[var(--c-mustard)]">
            §01 — Editor’s Note
          </p>
          <p className="mt-4 font-serif-jp text-sm leading-loose text-[var(--c-ink)]/70">
            Vol.01 · 2026
            <br />
            Edition · QuickCRM
          </p>
        </div>
        <div className="md:col-span-9">
          <p className="font-serif-jp text-2xl leading-relaxed text-[var(--c-deep)] md:text-4xl">
            {product.productLead}
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {product.productHighlights.map((h) => (
              <li
                key={h}
                className="border-t pt-4 font-serif-jp text-base text-[var(--c-deep)] md:text-lg"
                style={{ borderColor: "var(--c-rule)" }}
              >
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="px-6 pb-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 font-space-grotesk text-[10px] uppercase tracking-[0.4em] text-[var(--c-mustard)]">
          §02 — Video
        </p>
        <VideoBoard />
      </div>
    </section>
  );
}

function ArchitectureSection() {
  return (
    <section className="px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 font-space-grotesk text-[10px] uppercase tracking-[0.4em] text-[var(--c-mustard)]">
          §03 — System Architecture
        </p>
        <ArchitectureLedger />
      </div>
    </section>
  );
}

function BuildSelf() {
  return (
    <section
      className="px-6 py-24 md:px-12 md:py-32"
      style={{ background: "var(--c-paper)" }}
    >
      <div className="mx-auto max-w-7xl">
        <p className="font-space-grotesk text-[10px] uppercase tracking-[0.4em] text-[var(--c-mustard)]">
          §04 — Build by Yourself
        </p>
        <h2 className="mt-4 font-serif-jp text-3xl leading-snug text-[var(--c-deep)] md:text-5xl">
          {product.buildSelfHeadline}
        </h2>
        <p className="mt-6 max-w-3xl font-serif-jp text-base leading-loose text-[var(--c-ink)]/80 md:text-lg">
          {product.buildSelfSub}
        </p>
        <div className="mt-12">
          <AxesFormula />
        </div>
      </div>
    </section>
  );
}

function StrengthsFolio() {
  return (
    <section className="px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-baseline justify-between">
          <h2 className="font-serif-jp text-3xl text-[var(--c-deep)] md:text-5xl">
            <span className="font-space-grotesk text-[10px] uppercase tracking-[0.4em] text-[var(--c-mustard)]">
              §05 ──
            </span>{" "}
            Index of Strengths
          </h2>
          <p className="hidden font-space-grotesk text-[10px] uppercase tracking-[0.3em] text-[var(--c-ink)]/60 md:block">
            p.03
          </p>
        </div>
        <IndexList
          items={strengths.map((s) => ({ no: s.no, title: s.title, body: s.body }))}
        />
      </div>
    </section>
  );
}

function TriggerAction() {
  return (
    <section
      className="px-6 py-24 md:px-12 md:py-32"
      style={{ background: "var(--c-paper)" }}
    >
      <div className="mx-auto max-w-7xl">
        <p className="font-space-grotesk text-[10px] uppercase tracking-[0.4em] text-[var(--c-mustard)]">
          §06 — Trigger × Action
        </p>
        <h2 className="mt-4 font-serif-jp text-3xl leading-snug text-[var(--c-deep)] md:text-5xl">
          組み合わせるだけで、業務ロジック。
        </h2>
        <div className="mt-12">
          <TriggerActionTable />
        </div>
      </div>
    </section>
  );
}

function ChannelsFolio() {
  return (
    <section className="px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 font-space-grotesk text-[10px] uppercase tracking-[0.4em] text-[var(--c-mustard)]">
          §07 — Channels & Options
        </p>
        <div className="grid gap-px md:grid-cols-2" style={{ background: "var(--c-rule)" }}>
          <article className="bg-[var(--c-canvas)] p-8 md:p-12">
            <p className="font-space-grotesk text-[10px] uppercase tracking-[0.4em] text-[var(--c-mustard)]">
              CTI Partners
            </p>
            <h3 className="mt-4 font-serif-jp text-2xl leading-tight text-[var(--c-deep)] md:text-4xl">
              PBX に依存しない、<br />豊富な接続実績。
            </h3>
            <div className="mt-8 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-[var(--c-ink)]/60">
                  クラウド系
                </p>
                <p className="mt-2 font-serif-jp text-base leading-loose text-[var(--c-deep)]">
                  {ctiPartners.cloud.join(" / ")}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[var(--c-ink)]/60">
                  設置型
                </p>
                <p className="mt-2 font-serif-jp text-base leading-loose text-[var(--c-deep)]">
                  {ctiPartners.onPremise.join(" / ")}
                </p>
              </div>
              <p
                className="border-t pt-4 text-xs leading-relaxed text-[var(--c-ink)]/70"
                style={{ borderColor: "var(--c-rule)" }}
              >
                {ctiPartners.note}
              </p>
            </div>
          </article>

          <article className="bg-[var(--c-paper)] p-8 md:p-12">
            <p className="font-space-grotesk text-[10px] uppercase tracking-[0.4em] text-[var(--c-mustard)]">
              Optional Modules
            </p>
            <h3 className="mt-4 font-serif-jp text-2xl leading-tight text-[var(--c-deep)] md:text-4xl">
              必要な機能を、<br />必要な時だけ。
            </h3>
            <ul className="mt-8 grid grid-cols-2 gap-y-3 font-serif-jp text-base text-[var(--c-deep)]">
              {options.map((o) => (
                <li
                  key={o.key}
                  className="border-t pt-3"
                  style={{ borderColor: "var(--c-rule)" }}
                >
                  {o.name}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

function EditionsSection() {
  return (
    <section
      className="px-6 py-24 md:px-12 md:py-32"
      style={{ background: "var(--c-paper)" }}
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-12 font-space-grotesk text-[10px] uppercase tracking-[0.4em] text-[var(--c-mustard)]">
          §08 — Editions
        </p>
        <EditionsBoard />
      </div>
    </section>
  );
}

function TemplateFolio() {
  return (
    <section className="px-6 pb-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="font-space-grotesk text-[10px] uppercase tracking-[0.4em] text-[var(--c-mustard)]">
          §09 — Template · 3 Steps
        </p>
        <h2 className="mt-4 font-serif-jp text-3xl leading-snug text-[var(--c-deep)] md:text-5xl">
          たった 3 ステップで、<br />自分仕様の画面を。
        </h2>
        <p className="mt-6 max-w-3xl font-serif-jp text-base leading-loose text-[var(--c-ink)]/80 md:text-lg">
          {templateFlow.intro}
        </p>

        <ol
          className="mt-12 divide-y border-y"
          style={{ borderColor: "var(--c-rule)" }}
        >
          {templateFlow.steps.map((s) => (
            <li
              key={s.no}
              className="grid gap-4 py-8 md:grid-cols-12 md:gap-8 md:py-12"
            >
              <div className="col-span-2 md:col-span-2">
                <span className="font-fraunces text-4xl font-light italic text-[var(--c-mustard)]">
                  {s.no}
                </span>
              </div>
              <div className="col-span-10 md:col-span-4">
                <h3 className="font-serif-jp text-xl text-[var(--c-deep)] md:text-2xl">
                  {s.title}
                </h3>
              </div>
              <div className="col-span-12 md:col-span-6">
                <p className="font-serif-jp text-base leading-loose text-[var(--c-ink)]/80">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-px md:grid-cols-2" style={{ background: "var(--c-rule)" }}>
          <div className="bg-[var(--c-canvas)] p-6 md:p-8">
            <p className="text-xs uppercase tracking-widest text-[var(--c-mustard)]">
              アプリケーションテンプレート
            </p>
            <p className="mt-3 font-serif-jp text-base leading-loose text-[var(--c-deep)]">
              {templateFlow.appTemplates.join(" / ")}
            </p>
          </div>
          <div className="bg-[var(--c-paper)] p-6 md:p-8">
            <p className="text-xs uppercase tracking-widest text-[var(--c-mustard)]">
              機能枠テンプレート
            </p>
            <p className="mt-3 font-serif-jp text-base leading-loose text-[var(--c-deep)]">
              {templateFlow.frameTemplates.join(" / ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturePreview() {
  return (
    <section className="px-6 pb-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 font-space-grotesk text-[10px] uppercase tracking-[0.4em] text-[var(--c-mustard)]">
          §10 — Feature Articles
        </p>
        <Spread
          left={
            <Link href="/sample-c/screen-builder" className="group block">
              <p className="font-space-grotesk text-xs uppercase tracking-widest text-[var(--c-mustard)]">
                Article · 04
              </p>
              <h3 className="mt-4 font-serif-jp text-3xl leading-tight text-[var(--c-deep)] md:text-5xl">
                業務画面作成機能
              </h3>
              <p className="mt-6 font-serif-jp text-base leading-loose text-[var(--c-ink)]/80">
                オブジェクトの自由配置・テンプレート・Excel
                読込。ノーコードで業務にフィットする画面を編集する 3 つの手法。
              </p>
              <p className="mt-8 inline-flex items-center gap-2 font-serif-jp text-base text-[var(--c-deep)] group-hover:underline">
                Read · 続きを読む
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </p>
            </Link>
          }
          right={
            <Link href="/sample-c/management" className="group block">
              <p className="font-space-grotesk text-xs uppercase tracking-widest text-[var(--c-mustard)]">
                Article · 05
              </p>
              <h3 className="mt-4 font-serif-jp text-3xl leading-tight text-[var(--c-deep)] md:text-5xl">
                管理機能
              </h3>
              <p className="mt-6 font-serif-jp text-base leading-loose text-[var(--c-ink)]/80">
                アウトバウンド・データ・レポート・コミュニケーション・通話録音。
                必要な機能だけを必要な分だけ。
              </p>
              <p className="mt-8 inline-flex items-center gap-2 font-serif-jp text-base text-[var(--c-deep)] group-hover:underline">
                Read · 続きを読む
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </p>
            </Link>
          }
        />
      </div>
    </section>
  );
}
