import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PullQuote } from "@/components/sample-c/PullQuote";
import { ManagementIndex } from "@/components/sample-c/ManagementIndex";
import { management } from "@/content/product";

export const metadata: Metadata = {
  title: "管理機能",
};

export default function SampleCManagement() {
  return (
    <main>
      <section className="relative overflow-hidden px-5 pt-20 pb-10 sm:px-6 md:px-12 md:pt-32 md:pb-20">
        <div className="absolute inset-0 -z-10" aria-hidden>
          <Image
            src="/images/sample-c/sc-management-hero.webp"
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
              { label: "管理機能" },
            ]}
            className="mb-10 text-[var(--c-ink)]/70 md:mb-12"
          />
          <p className="font-space-grotesk text-[10px] uppercase tracking-[0.4em] text-[var(--c-mustard)]">
            Feature · Management
          </p>
          <h1 className="mt-5 font-serif-jp text-[2rem] leading-[1.1] tracking-tight text-[var(--c-deep)] sm:text-5xl md:mt-6 md:text-7xl">
            {management.title}
          </h1>
          <div className="mt-12 grid gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="font-serif-jp text-base leading-loose text-[var(--c-ink)]/85 md:text-lg">
                {management.lead}
              </p>
            </div>
            <div
              className="md:col-span-4 md:col-start-9 border-t pt-6 font-serif-jp text-sm leading-relaxed text-[var(--c-ink)]/70"
              style={{ borderColor: "var(--c-rule)" }}
            >
              本記事では、QuickCRM の管理機能を 5 つの章に分けて辿る。
              アウトバウンドからレポート、コミュニケーションまで、必要な機能だけを過不足なく。
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-12 md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 font-space-grotesk text-[10px] uppercase tracking-[0.4em] text-[var(--c-mustard)]">
            §01 — 全体目次 (fig.06)
          </p>
          <ManagementIndex />
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 font-space-grotesk text-[10px] uppercase tracking-[0.4em] text-[var(--c-mustard)]">
            §02 — 機能群の詳細
          </p>
          {management.groups.map((g, i) => (
            <article
              key={g.key}
              className="grid gap-8 border-t py-16 md:grid-cols-12 md:gap-12 md:py-24"
              style={{ borderColor: "var(--c-rule)" }}
            >
              <div className="md:col-span-3">
                <p className="font-space-grotesk text-xs uppercase tracking-[0.3em] text-[var(--c-mustard)]">
                  Chapter · {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-4 font-serif-jp text-3xl leading-tight text-[var(--c-deep)] md:text-4xl">
                  {g.title}
                </h2>
                {g.note && (
                  <p className="mt-4 text-xs leading-relaxed text-[var(--c-ink)]/65">
                    {g.note}
                  </p>
                )}
              </div>
              <div className="md:col-span-9">
                <DropCapIntro index={i} summary={g.summary} />
                <ul className="mt-8 grid gap-y-6 md:grid-cols-2 md:gap-x-12">
                  {g.items.map((item) => (
                    <li
                      key={item.name}
                      className="border-t pt-4 font-serif-jp"
                      style={{ borderColor: "var(--c-rule)" }}
                    >
                      <p className="text-lg text-[var(--c-deep)] md:text-xl">
                        {item.name}
                      </p>
                      {"subs" in item && item.subs && (
                        <p className="mt-2 text-sm leading-relaxed text-[var(--c-ink)]/75">
                          {item.subs.join(" · ")}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}

          <PullQuote attribution="QuickCRM">
            必要な機能だけを、必要な分だけ。
          </PullQuote>
        </div>
      </section>
    </main>
  );
}

function DropCapIntro({
  index,
  summary,
}: {
  index: number;
  summary?: string;
}) {
  const fallback = [
    "コールリストの作成から CTI 連携、自動架電、再架電予約まで。アウトバウンド運用の中核を、シンプルな手順で組み立てる。",
    "CSV／Excel 取込から画面上での直接編集、テーブル管理、外部連携まで。データの流通経路を整える機能群。",
    "オペレーター別・業務別・時間帯別。架電結果をリアルタイム／ヒストリカル両軸で読み解くレポート。",
    "メール・SMS・センター内チャット・シートマップ。コミュニケーションは多層に重なって機能する。",
    "通話録音システムとの連携を前提に、運用に必要な録音・再生の機能を提供する。",
  ];
  const text = summary ?? fallback[index] ?? "";
  const first = text.slice(0, 1);
  const rest = text.slice(1);
  return (
    <p className="font-serif-jp text-base leading-loose text-[var(--c-ink)]/85 md:text-lg">
      <span className="float-left mr-3 mt-1 font-fraunces text-6xl font-light leading-none text-[var(--c-deep)] md:text-7xl">
        {first}
      </span>
      {rest}
    </p>
  );
}
