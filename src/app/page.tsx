import Link from "next/link";
import { Footer } from "@/components/shared/Footer";
import { samples, company } from "@/content/product";
import { LandingCard } from "@/components/landing/LandingCard";
import { LandingHero } from "@/components/landing/LandingHero";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[var(--color-canvas)] text-[var(--color-ink)]">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[rgba(250,250,250,0.85)] border-b border-black/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3 sm:px-6 sm:py-4 md:px-12">
          <Link href="/" className="font-fraunces text-xl tracking-tight text-[var(--color-accent)] sm:text-2xl">
            QuickCRM
          </Link>
          <a
            href={`tel:${company.phone.replace(/-/g, "")}`}
            className="text-xs font-medium tracking-wider opacity-80 hover:opacity-100 sm:text-sm"
          >
            <span className="hidden sm:inline">お問い合わせ </span>
            {company.phone}
          </a>
        </div>
      </header>

      <LandingHero />

      <section className="relative px-6 pb-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {samples.map((s, i) => (
              <LandingCard key={s.key} sample={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-12">
        <div className="grid gap-12 border-y border-black/10 py-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-widest opacity-60">About QuickCRM</p>
            <h2 className="mt-3 font-serif-jp text-3xl leading-tight md:text-4xl">
              一つの製品を、<br />三つの世界観で。
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-base leading-relaxed opacity-80 md:text-lg">
            <p>
              QuickCRM は、株式会社MITシステム研究所が提供する、コンタクトセンター向けの
              CRM クラウドサービスです。10 年以上のノウハウを結集し、エントリー〜
              高機能モデルまでシームレスに利用できます。
            </p>
            <p>
              インバウンド／アウトバウンド、見て分かりやすい管理機能、SMS・メール・
              LINE などのマルチチャネル、PBX に依存しない CTI 連携。必要な機能を、
              必要な時に、必要な数だけ契約できる柔軟性が QuickCRM の特長です。
            </p>
            <p>
              本サイトでは、同一の製品コンテンツを 3 つの異なるデザイン哲学
              (Organic Forest / Neo Mint Glass / Editorial Botanical) で再構築し、
              ブランド表現の可能性を並走比較できます。
            </p>
          </div>
        </div>
      </section>

      <Footer tone="neutral" />
    </main>
  );
}
