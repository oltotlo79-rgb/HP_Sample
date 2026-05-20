import type { Metadata } from "next";
import {
  Noto_Sans_JP,
  Noto_Serif_JP,
  Fraunces,
  Space_Grotesk,
  Inter,
} from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--font-sans-jp",
});

const notoSerifJp = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-serif-jp",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "500", "700", "900"],
  display: "swap",
  variable: "--font-fraunces",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quickcrm.site"),
  title: {
    default: "QuickCRM | コンタクトセンターのためのCRM",
    template: "%s | QuickCRM",
  },
  description:
    "QuickCRMは、お客様自身で業務に最適な画面を作成できる、コンタクトセンター向けCRMアプリケーションです。",
  openGraph: {
    title: "QuickCRM | コンタクトセンターのためのCRM",
    description:
      "QuickCRMは、お客様自身で業務に最適な画面を作成できる、コンタクトセンター向けCRMアプリケーションです。",
    type: "website",
    locale: "ja_JP",
    images: [{ url: "/og/landing.webp", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJp.variable} ${notoSerifJp.variable} ${fraunces.variable} ${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
