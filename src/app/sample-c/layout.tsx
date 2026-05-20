import type { Metadata } from "next";
import { Footer } from "@/components/shared/Footer";
import { MagazineHeader } from "@/components/sample-c/MagazineHeader";

export const metadata: Metadata = {
  title: "QuickCRM | コンタクトセンター向け CRM クラウドサービス",
  description:
    "10 年以上のノウハウを結集したコンタクトセンター向け CRM クラウドサービス。インバウンド／アウトバウンド両対応、見て分かりやすい管理機能、PBX 非依存の CTI 連携。",
  openGraph: {
    images: [{ url: "/og/sample-c.webp", width: 1200, height: 630 }],
  },
};

export default function SampleCLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="scope-c min-h-screen">
      <MagazineHeader />
      {children}
      <Footer tone="c" />
    </div>
  );
}
