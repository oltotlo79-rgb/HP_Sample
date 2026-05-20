import Image from "next/image";
import { QuantumHero } from "@/components/sample-b/QuantumHero";
import { BentoTile } from "@/components/sample-b/BentoTile";
import { FlipGateway } from "@/components/sample-b/FlipGateway";
import { DataStream } from "@/components/sample-b/DataStream";
import { GlassCard } from "@/components/sample-b/GlassCard";
import { ArchitectureNetwork } from "@/components/sample-b/ArchitectureNetwork";
import { AxesFormula } from "@/components/sample-b/AxesFormula";
import { TriggerActionMatrix } from "@/components/sample-b/TriggerActionMatrix";
import { VideoBoard } from "@/components/sample-b/VideoBoard";
import { EditionsBoard } from "@/components/sample-b/EditionsBoard";
import {
  ctiPartners,
  options,
  product,
  strengths,
  templateFlow,
} from "@/content/product";

export default function SampleBHome() {
  return (
    <main>
      <QuantumHero />

      <ProductLead />
      <Video />
      <Architecture />
      <BuildSelf />
      <Strengths />
      <TriggerAction />
      <ChannelsAndCti />
      <Editions />
      <TemplateSteps />
      <Gateways />
    </main>
  );
}

function ProductLead() {
  return (
    <section className="relative px-6 py-24 md:px-12 md:py-32">
      <DataStream className="absolute inset-x-0 top-0 -z-0 h-32 opacity-50" />
      <div className="relative mx-auto max-w-7xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--b-mint)]">
          ▌ overview
        </p>
        <h2 className="mt-6 font-serif-jp text-3xl leading-tight text-[var(--b-text)] md:text-5xl">
          {product.productLead}
        </h2>
        <ul className="mt-12 grid gap-3 md:grid-cols-2">
          {product.productHighlights.map((h) => (
            <li key={h}>
              <GlassCard hover={false} className="p-5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--b-mint)]">
                  · feature
                </span>
                <p className="mt-2 font-serif-jp text-base text-[var(--b-text)] md:text-lg">
                  {h}
                </p>
              </GlassCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Video() {
  return (
    <section className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="mb-12 font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--b-mint)]">
          ▌ media
        </p>
        <VideoBoard />
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--b-mint)]">
              ▌ architecture
            </p>
            <h2 className="mt-4 font-serif-jp text-3xl text-[var(--b-text)] md:text-5xl">
              4 ノードの<br />ネットワーク。
            </h2>
          </div>
          <p className="md:col-span-6 md:col-start-7 text-base leading-loose text-[var(--b-muted)] md:text-lg">
            CRM コアを中心に、Database / CTI / Options / Operator が
            データストリームで結ばれます。PBX 非依存・クラウドもオンプレも、
            お客様の環境にフィットする構成を実現します。
          </p>
        </div>
        <ArchitectureNetwork />

        {/* 24/7 オペレーションセンターの写真 */}
        <div className="mt-12 grid gap-6 md:grid-cols-12">
          <div
            className="relative aspect-[16/10] overflow-hidden rounded-3xl md:col-span-7"
            style={{ border: "1px solid rgba(94,234,212,0.18)" }}
          >
            <Image
              src="/images/photos/sample-b/control-room.webp"
              alt=""
              fill
              sizes="(min-width: 768px) 55vw, 100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(10,14,26,0) 50%, rgba(10,14,26,0.65) 100%)",
              }}
            />
            <p className="absolute bottom-5 left-6 font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--b-mint)]">
              ▌ ops · 24/7
            </p>
          </div>
          <div className="md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--b-mint)]">
              ▌ note
            </p>
            <p className="mt-4 font-serif-jp text-base leading-loose text-[var(--b-muted)] md:text-lg">
              インバウンド／アウトバウンド両対応・10 年以上の運用実績を活かし、
              席数規模・PBX 構成・配置形態にかかわらず動作する設計です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BuildSelf() {
  return (
    <section className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--b-mint)]">
              ▌ build by yourself
            </p>
            <h2 className="mt-4 font-serif-jp text-3xl leading-snug text-[var(--b-text)] md:text-5xl">
              {product.buildSelfHeadline}
            </h2>
          </div>
          <p className="md:col-span-6 md:col-start-7 text-base leading-loose text-[var(--b-muted)] md:text-lg">
            {product.buildSelfSub}
          </p>
        </div>
        <AxesFormula />
      </div>
    </section>
  );
}

function Strengths() {
  return (
    <section className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--b-mint)]">
          ▌ strengths
        </p>
        <h2 className="mt-4 font-serif-jp text-3xl text-[var(--b-text)] md:text-5xl">
          3 つの強み・量子のグリッド
        </h2>
        <div className="mt-14 grid auto-rows-[minmax(180px,_auto)] gap-5 md:grid-cols-3">
          {strengths.map((s, i) => (
            <BentoTile
              key={s.no}
              no={s.no}
              title={s.title}
              body={s.body}
              index={i}
              accent={i === 0 ? "mint" : i === 1 ? "aqua" : "violet"}
              span={i === 1 ? "wide" : "default"}
              imageSrc={
                i === 1
                  ? "/images/photos/sample-b/bento-realtime.webp"
                  : undefined
              }
            />
          ))}
          <BentoTile
            no="04"
            title="Coverage"
            body="クラウド (AWS / SoftBank)・オンプレ・VPN／専用線・PBX 非依存。お客様の環境にフィットします。"
            index={3}
            accent="aqua"
            imageSrc="/images/photos/sample-b/bento-call-detail.webp"
          >
            <CoverageOrb />
          </BentoTile>
        </div>
      </div>
    </section>
  );
}

function TriggerAction() {
  return (
    <section className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--b-mint)]">
              ▌ trigger × action
            </p>
            <h2 className="mt-4 font-serif-jp text-3xl text-[var(--b-text)] md:text-5xl">
              組み合わせる<br />量子ロジック。
            </h2>
          </div>
          <p className="md:col-span-6 md:col-start-7 text-base leading-loose text-[var(--b-muted)] md:text-lg">
            8 種類の画面イベントと 16 種類のアクション。
            その組み合わせで {8 * 16} パターン以上のノーコード業務ロジックが定義できます。
          </p>
        </div>
        <TriggerActionMatrix />
      </div>
    </section>
  );
}

function ChannelsAndCti() {
  return (
    <section className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-2">
        <GlassCard className="p-8 md:p-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--b-mint)]">
            ▌ cti partners
          </p>
          <h3 className="mt-4 font-serif-jp text-2xl text-[var(--b-text)] md:text-4xl">
            PBX 非依存の<br />接続実績。
          </h3>
          <div className="mt-8 space-y-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--b-muted)]">
                cloud
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {ctiPartners.cloud.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-[var(--b-mint)]/30 bg-[var(--b-mint)]/8 px-3 py-1 text-sm text-[var(--b-mint)]"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--b-muted)]">
                on-premise
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {ctiPartners.onPremise.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-[var(--b-aqua)]/30 bg-[var(--b-aqua)]/8 px-3 py-1 text-sm text-[var(--b-aqua)]"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-xs leading-relaxed text-[var(--b-muted)]">
              {ctiPartners.note}
            </p>
          </div>
        </GlassCard>

        <GlassCard className="p-8 md:p-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--b-mint)]">
            ▌ optional modules
          </p>
          <h3 className="mt-4 font-serif-jp text-2xl text-[var(--b-text)] md:text-4xl">
            必要な機能を、<br />必要な時だけ。
          </h3>
          <ul className="mt-8 grid grid-cols-2 gap-3">
            {options.map((o) => (
              <li
                key={o.key}
                className="rounded-2xl border border-[var(--b-mint)]/15 bg-white/5 p-4 text-sm text-[var(--b-text)]"
              >
                {o.name}
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </section>
  );
}

function Editions() {
  return (
    <section className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="mb-12 font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--b-mint)]">
          ▌ editions
        </p>
        <EditionsBoard />
      </div>
    </section>
  );
}

function TemplateSteps() {
  return (
    <section className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--b-mint)]">
          ▌ template · 3 steps
        </p>
        <h2 className="mt-4 font-serif-jp text-3xl text-[var(--b-text)] md:text-5xl">
          3 ステップで、<br />自分仕様の画面。
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-loose text-[var(--b-muted)] md:text-lg">
          {templateFlow.intro}
        </p>

        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {templateFlow.steps.map((s) => (
            <li key={s.no}>
              <GlassCard hover={false} className="h-full p-7">
                <p className="font-space-grotesk text-4xl font-bold text-[var(--b-mint)]">
                  Step {s.no}
                </p>
                <h3 className="mt-3 font-serif-jp text-lg text-[var(--b-text)] md:text-xl">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-loose text-[var(--b-muted)]">
                  {s.body}
                </p>
              </GlassCard>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <GlassCard hover={false} className="p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--b-mint)]">
              アプリケーションテンプレート
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {templateFlow.appTemplates.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-[var(--b-mint)]/30 bg-[var(--b-mint)]/8 px-3 py-1 text-sm text-[var(--b-text)]"
                >
                  {t}
                </li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard hover={false} className="p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--b-aqua)]">
              機能枠テンプレート
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {templateFlow.frameTemplates.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-[var(--b-aqua)]/30 bg-[var(--b-aqua)]/8 px-3 py-1 text-sm text-[var(--b-text)]"
                >
                  {t}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

function Gateways() {
  return (
    <section className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="mb-12 font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--b-mint)]">
          ▌ more
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <FlipGateway
            href="/sample-b/screen-builder"
            eyebrow="Slide 04"
            title="業務画面作成機能"
            description="3 つの手法でノーコードに業務画面を構築。トリガーとアクションを繋ぐ、量子の組み立て。"
            accent="mint"
            preview={<MiniGrid />}
            imageSrc="/images/sample-b/sb-gateway-screen.webp"
            details={[
              "自由配置 — オブジェクト配置 → 設定 → 連携",
              "テンプレート — 案件/アウト/予定/受注",
              "Excel — 設計書を読み込み画面で調整",
            ]}
          />
          <FlipGateway
            href="/sample-b/management"
            eyebrow="Slide 05"
            title="管理機能"
            description="必要な機能だけを必要な分だけ。アウトバウンド・データ・レポート・通信・録音。"
            accent="aqua"
            preview={<MiniWave />}
            imageSrc="/images/sample-b/sb-gateway-mgmt.webp"
            details={[
              "Outbound — 自動架電 / CTI / 結果登録",
              "Data — Import/Export, テーブル管理",
              "Reports — Operator/Time/業務別",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function CoverageOrb() {
  return (
    <svg viewBox="0 0 200 100" className="w-full">
      <defs>
        <radialGradient id="orb" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#5EEAD4" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#5EEAD4" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="50" rx="80" ry="40" fill="url(#orb)" />
      {Array.from({ length: 6 }).map((_, i) => (
        <ellipse
          key={i}
          cx="100"
          cy="50"
          rx={80 - i * 12}
          ry={40 - i * 6}
          fill="none"
          stroke="#5EEAD4"
          strokeWidth="0.5"
          opacity={0.6 - i * 0.08}
        />
      ))}
    </svg>
  );
}

function MiniGrid() {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full">
      <g stroke="#5EEAD4" strokeWidth="0.5" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="3" />
        <rect x="36" y="4" width="24" height="24" rx="3" />
        <rect x="4" y="36" width="56" height="24" rx="3" />
      </g>
    </svg>
  );
}

function MiniWave() {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full">
      <path
        d="M 4 40 Q 16 20 32 32 T 60 28"
        stroke="#06B6D4"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="4" cy="40" r="2" fill="#06B6D4" />
      <circle cx="60" cy="28" r="2" fill="#06B6D4" />
    </svg>
  );
}
