import { LeafHero } from "@/components/sample-a/LeafHero";
import { WaveDivider } from "@/components/sample-a/WaveDivider";
import { StrengthCard } from "@/components/sample-a/StrengthCard";
import { GatewayCard } from "@/components/sample-a/GatewayCard";
import { ArchitectureForest } from "@/components/sample-a/ArchitectureForest";
import { AxesFormula } from "@/components/sample-a/AxesFormula";
import { TriggerActionVisual } from "@/components/sample-a/TriggerActionVisual";
import { VideoBoard } from "@/components/sample-a/VideoBoard";
import { EditionsBoard } from "@/components/sample-a/EditionsBoard";
import {
  ctiPartners,
  options,
  product,
  strengths,
  systemArchitecture,
  templateFlow,
} from "@/content/product";

export default function SampleAHome() {
  return (
    <main>
      <LeafHero />

      <WaveDivider from="transparent" to="var(--a-cream)" />

      <Intro />

      <VideoSection />

      <ArchitectureSection />

      <BuildSelfSection />

      <StrengthsSection />

      <TriggerActionSection />

      <ChannelsAndCtiSection />

      <EditionsSection />

      <TemplateStepsSection />

      <GatewaySection />
    </main>
  );
}

function Intro() {
  return (
    <section className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-12">
        <div className="md:col-span-3">
          <p className="font-fraunces text-xs uppercase tracking-[0.4em] text-[var(--a-moss)]">
            Overview
          </p>
          <p
            className="mt-6 hidden font-serif-jp text-2xl leading-tight text-[var(--a-forest)] md:block"
            style={{ writingMode: "vertical-rl" }}
          >
            業務の輪郭を、葉脈のようにたどる。
          </p>
        </div>
        <div className="md:col-span-9">
          <p className="font-serif-jp text-3xl leading-snug text-[var(--a-forest)] md:text-5xl">
            {product.productLead}
          </p>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {product.productHighlights.map((h, i) => (
              <li
                key={h}
                className="relative pl-12 font-serif-jp text-base leading-loose text-[var(--a-ink)]/85 md:text-lg"
              >
                <span className="absolute left-0 top-1 font-fraunces text-3xl text-[var(--a-mint)]">
                  0{i + 1}
                </span>
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
    <section className="relative px-6 py-24 md:px-12 md:py-32" style={{ background: "var(--a-mist)" }}>
      <div className="mx-auto max-w-7xl">
        <p className="mb-12 font-fraunces text-xs uppercase tracking-[0.4em] text-[var(--a-moss)]">
          Video
        </p>
        <VideoBoard />
      </div>
    </section>
  );
}

function ArchitectureSection() {
  return (
    <section className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-baseline gap-6 md:mb-16">
          <p className="font-fraunces text-xs uppercase tracking-[0.4em] text-[var(--a-moss)]">
            Architecture
          </p>
          <span className="hidden text-xs text-[var(--a-ink)]/55 md:inline">
            fig. 01
          </span>
        </div>
        <ArchitectureForest />

        {/* テキスト解説 (4 ブロック詳細) */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {systemArchitecture.blocks.map((b, i) => (
            <article
              key={b.key}
              className="rounded-3xl bg-white/55 p-8 backdrop-blur-sm"
              style={{ border: "1px solid rgba(27,67,50,0.1)" }}
            >
              <p className="font-fraunces text-xs uppercase tracking-widest text-[var(--a-moss)]">
                Block · 0{i + 1}
              </p>
              <h3 className="mt-3 font-serif-jp text-xl text-[var(--a-forest)] md:text-2xl">
                {b.title}
              </h3>
              <p className="mt-3 text-sm leading-loose text-[var(--a-ink)]/80">
                {b.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BuildSelfSection() {
  return (
    <section
      className="relative px-6 py-24 md:px-12 md:py-32"
      style={{ background: "var(--a-mist)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-fraunces text-xs uppercase tracking-[0.4em] text-[var(--a-moss)]">
              Build by Yourself
            </p>
            <h2 className="mt-4 font-serif-jp text-3xl leading-snug text-[var(--a-forest)] md:text-5xl">
              {product.buildSelfHeadline}
            </h2>
          </div>
          <p className="md:col-span-6 md:col-start-7 text-base leading-loose text-[var(--a-ink)]/80 md:text-lg">
            {product.buildSelfSub}
          </p>
        </div>
        <AxesFormula />
      </div>
    </section>
  );
}

function StrengthsSection() {
  return (
    <section className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-end justify-between gap-6">
          <div>
            <p className="font-fraunces text-xs uppercase tracking-[0.4em] text-[var(--a-moss)]">
              Strengths
            </p>
            <h2 className="mt-4 font-serif-jp text-3xl text-[var(--a-forest)] md:text-5xl">
              3 つの強み
            </h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {strengths.map((s, i) => (
            <StrengthCard key={s.no} strength={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TriggerActionSection() {
  return (
    <section
      className="relative px-6 py-24 md:px-12 md:py-32"
      style={{ background: "var(--a-mist)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-fraunces text-xs uppercase tracking-[0.4em] text-[var(--a-moss)]">
              Trigger × Action
            </p>
            <h2 className="mt-4 font-serif-jp text-3xl leading-snug text-[var(--a-forest)] md:text-5xl">
              組み合わせるだけで、<br />業務ロジック。
            </h2>
          </div>
          <p className="md:col-span-6 md:col-start-7 text-base leading-loose text-[var(--a-ink)]/80 md:text-lg">
            画面のイベント (8 種類) と実行する処理 (16 種類)
            を組み合わせるだけで、ノーコードに複雑な業務ロジックを定義できます。
          </p>
        </div>
        <TriggerActionVisual />
      </div>
    </section>
  );
}

function ChannelsAndCtiSection() {
  return (
    <section className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="mb-12 font-fraunces text-xs uppercase tracking-[0.4em] text-[var(--a-moss)]">
          Channels & CTI
        </p>
        <div className="grid gap-12 md:grid-cols-12">
          <article className="md:col-span-6">
            <h3 className="font-serif-jp text-2xl text-[var(--a-forest)] md:text-4xl">
              PBX に依存しない、<br />豊富な接続実績。
            </h3>
            <div className="mt-8 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-[var(--a-moss)]">
                  クラウド系
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {ctiPartners.cloud.map((c) => (
                    <li
                      key={c}
                      className="rounded-full bg-[var(--a-cream)] px-3 py-1 text-sm text-[var(--a-forest)]"
                      style={{ border: "1px solid rgba(27,67,50,0.18)" }}
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[var(--a-moss)]">
                  設置型
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {ctiPartners.onPremise.map((c) => (
                    <li
                      key={c}
                      className="rounded-full bg-[var(--a-cream)] px-3 py-1 text-sm text-[var(--a-forest)]"
                      style={{ border: "1px solid rgba(27,67,50,0.18)" }}
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-xs leading-relaxed text-[var(--a-ink)]/70">
                {ctiPartners.note}
              </p>
            </div>
          </article>

          <article className="md:col-span-6">
            <h3 className="font-serif-jp text-2xl text-[var(--a-forest)] md:text-4xl">
              必要な機能を、<br />必要な時だけ。
            </h3>
            <p className="mt-6 text-sm leading-loose text-[var(--a-ink)]/80">
              コミュニケーション、レポート、タブレット、アウトバウンド。豊富なオプションから、業務に応じて自由に組み合わせることができます。
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-3">
              {options.map((o) => (
                <li
                  key={o.key}
                  className="rounded-2xl bg-[var(--a-cream)] p-4 text-sm font-medium text-[var(--a-forest)]"
                  style={{ border: "1px solid rgba(27,67,50,0.12)" }}
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
      className="relative px-6 py-24 md:px-12 md:py-32"
      style={{ background: "var(--a-mist)" }}
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-12 font-fraunces text-xs uppercase tracking-[0.4em] text-[var(--a-moss)]">
          Editions
        </p>
        <EditionsBoard />
      </div>
    </section>
  );
}

function TemplateStepsSection() {
  return (
    <section className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="font-fraunces text-xs uppercase tracking-[0.4em] text-[var(--a-moss)]">
          Template · 3 Steps
        </p>
        <h2 className="mt-4 font-serif-jp text-3xl text-[var(--a-forest)] md:text-5xl">
          たった 3 ステップで、<br />自分仕様の画面を。
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-loose text-[var(--a-ink)]/80 md:text-lg">
          {templateFlow.intro}
        </p>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {templateFlow.steps.map((s) => (
            <li
              key={s.no}
              className="relative rounded-3xl bg-white/55 p-7 backdrop-blur-sm"
              style={{ border: "1px solid rgba(27,67,50,0.1)" }}
            >
              <p className="font-fraunces text-5xl text-[var(--a-mint)]">
                Step {s.no}
              </p>
              <h3 className="mt-3 font-serif-jp text-xl text-[var(--a-forest)]">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-loose text-[var(--a-ink)]/80">
                {s.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div
            className="rounded-3xl bg-[var(--a-mist)] p-6"
            style={{ border: "1px solid rgba(27,67,50,0.12)" }}
          >
            <p className="text-xs uppercase tracking-widest text-[var(--a-moss)]">
              アプリケーションテンプレート
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {templateFlow.appTemplates.map((t) => (
                <li
                  key={t}
                  className="rounded-full bg-[var(--a-cream)] px-3 py-1 text-sm text-[var(--a-forest)]"
                  style={{ border: "1px solid rgba(27,67,50,0.18)" }}
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="rounded-3xl bg-[var(--a-mist)] p-6"
            style={{ border: "1px solid rgba(27,67,50,0.12)" }}
          >
            <p className="text-xs uppercase tracking-widest text-[var(--a-moss)]">
              機能枠テンプレート
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {templateFlow.frameTemplates.map((t) => (
                <li
                  key={t}
                  className="rounded-full bg-[var(--a-cream)] px-3 py-1 text-sm text-[var(--a-forest)]"
                  style={{ border: "1px solid rgba(27,67,50,0.18)" }}
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function GatewaySection() {
  return (
    <section className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="mb-12 font-fraunces text-xs uppercase tracking-[0.4em] text-[var(--a-moss)]">
          More
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <GatewayCard
            href="/sample-a/screen-builder"
            eyebrow="Slide 04 / 業務画面作成"
            title="業務画面作成機能"
            description="自由配置・テンプレート・Excel 取込の 3 手法。ノーコードのトリガー × アクションで、業務に最適な画面を組み立てます。"
            imageSrc="/images/sample-a/sa-card-screen-builder.webp"
            index={0}
          />
          <GatewayCard
            href="/sample-a/management"
            eyebrow="Slide 05 / 管理機能"
            title="管理機能"
            description="アウトバウンド、データ管理、レポート、コミュニケーション、通話録音。必要な機能だけを必要な分だけ選択できます。"
            imageSrc="/images/sample-a/sa-card-management.webp"
            index={1}
          />
        </div>
      </div>
    </section>
  );
}
