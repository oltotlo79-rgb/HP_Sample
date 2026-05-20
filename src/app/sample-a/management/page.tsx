import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { WaveDivider } from "@/components/sample-a/WaveDivider";
import { LeafAccordion } from "@/components/sample-a/LeafAccordion";
import { ManagementMap } from "@/components/sample-a/ManagementMap";
import { management } from "@/content/product";

export const metadata: Metadata = {
  title: "管理機能",
};

export default function SampleAManagement() {
  return (
    <main>
      <section className="relative overflow-hidden px-5 pt-28 pb-12 sm:px-6 md:px-12 md:pt-40 md:pb-16">
        <div className="absolute inset-0 -z-10" aria-hidden>
          <Image
            src="/images/sample-a/sa-management-hero.webp"
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
                "radial-gradient(circle at 20% 0%, rgba(149,213,178,0.35), transparent 55%), linear-gradient(180deg, rgba(250,243,224,0.88), rgba(244,236,211,0.95))",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl">
          <Breadcrumb
            items={[
              { label: "TOP", href: "/sample-a" },
              { label: "管理機能" },
            ]}
            className="mb-10 text-[var(--a-moss)]"
          />
          <p className="font-fraunces text-sm uppercase tracking-[0.35em] text-[var(--a-moss)]">
            Feature · Management
          </p>
          <h1 className="mt-5 font-serif-jp text-[2rem] leading-[1.15] text-[var(--a-forest)] sm:text-4xl md:mt-6 md:text-6xl">
            {management.title}
          </h1>
          <p className="mt-6 max-w-3xl text-sm leading-loose text-[var(--a-ink)]/80 sm:text-base md:mt-8 md:text-lg">
            {management.lead}
          </p>
        </div>
      </section>

      <WaveDivider from="transparent" to="var(--a-cream)" />

      <section className="relative px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-10 font-fraunces text-sm uppercase tracking-[0.35em] text-[var(--a-moss)]">
            01 ── 全体マップ (fig.06)
          </p>
          <ManagementMap />
        </div>
      </section>

      <section className="relative px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-10 font-fraunces text-sm uppercase tracking-[0.35em] text-[var(--a-moss)]">
            02 ── 機能群の詳細
          </p>
          <LeafAccordion groups={management.groups} />
        </div>
      </section>

      <section className="px-6 pb-32 md:px-12">
        <div className="mx-auto max-w-7xl">
          <blockquote
            className="rounded-3xl bg-[var(--a-forest)] p-10 text-[var(--a-cream)] md:p-16"
            style={{
              background:
                "linear-gradient(135deg, var(--a-forest), var(--a-moss))",
            }}
          >
            <p className="font-fraunces text-2xl uppercase tracking-[0.3em] text-[var(--a-mint)]">
              Necessary Only
            </p>
            <p className="mt-6 font-serif-jp text-3xl leading-snug md:text-5xl">
              必要な機能だけを、必要な分だけ。
            </p>
            <p className="mt-6 max-w-2xl text-sm leading-loose opacity-80 md:text-base">
              クラウド上でのサービス提供のため、豊富なオプション機能の中から、
              必要な機能だけを必要な分だけ利用できます。短期間かつ低コストで導入可能です。
            </p>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
