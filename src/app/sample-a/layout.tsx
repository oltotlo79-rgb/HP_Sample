import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/shared/Footer";
import { SampleSwitcher } from "@/components/shared/SampleSwitcher";
import { company } from "@/content/product";

export const metadata: Metadata = {
  title: "QuickCRM | コンタクトセンター向け CRM クラウドサービス",
  description:
    "10 年以上のノウハウを結集したコンタクトセンター向け CRM クラウドサービス。インバウンド／アウトバウンド両対応、見て分かりやすい管理機能、PBX 非依存の CTI 連携。",
  openGraph: {
    images: [{ url: "/og/sample-a.webp", width: 1200, height: 630 }],
  },
};

export default function SampleALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="scope-a min-h-screen">
      <header
        className="sticky top-0 z-50"
        style={{
          background: "rgba(250, 243, 224, 0.82)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(27,67,50,0.08)",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3 sm:px-6 sm:py-4 md:px-12">
          <Link
            href="/sample-a"
            className="font-fraunces text-xl tracking-tight text-[var(--a-forest)] sm:text-2xl"
          >
            QuickCRM
          </Link>
          <div className="hidden items-center gap-6 md:flex">
            <SampleSwitcher tone="a" />
            <a
              href={`tel:${company.phone.replace(/-/g, "")}`}
              className="text-sm font-medium text-[var(--a-forest)]/80 hover:text-[var(--a-forest)]"
            >
              {company.phone}
            </a>
          </div>
          <div className="md:hidden">
            <SampleSwitcher tone="a" />
          </div>
        </div>
      </header>
      {children}
      <Footer tone="a" />
    </div>
  );
}
