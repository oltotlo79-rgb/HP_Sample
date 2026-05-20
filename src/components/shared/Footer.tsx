import Link from "next/link";
import { company, samples } from "@/content/product";

type Tone = "a" | "b" | "c" | "neutral";

export function Footer({ tone = "neutral" }: { tone?: Tone }) {
  const isDark = tone === "b";
  const accent =
    tone === "a"
      ? "#1B4332"
      : tone === "b"
        ? "#5EEAD4"
        : tone === "c"
          ? "#2F5233"
          : "#1B1F1B";

  return (
    <footer
      className={`relative w-full px-5 py-14 sm:px-6 sm:py-16 md:px-12 md:py-20 ${
        isDark
          ? "text-[var(--b-text)]"
          : "text-[var(--color-ink)]"
      }`}
      style={{ borderTop: `1px solid ${isDark ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.08)"}` }}
    >
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <p
            className="font-fraunces text-3xl tracking-tight"
            style={{ color: accent }}
          >
            QuickCRM
          </p>
          <p className="mt-4 text-sm leading-relaxed opacity-80">
            コンタクトセンターの業務を包括的にサポートする CRM アプリケーション。<br />
            お客様ご自身の手で、業務にフィットする画面を構築できます。
          </p>
        </div>

        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-widest opacity-60">Company</p>
          <p className="mt-3 text-sm font-semibold">{company.name}</p>
          <p className="mt-2 text-sm opacity-80">{company.address}</p>
          <p className="mt-3 text-sm opacity-80">
            TEL <a className="underline-offset-4 hover:underline" href={`tel:${company.phone.replace(/-/g, "")}`}>{company.phone}</a>
          </p>
          <p className="text-sm opacity-80">FAX {company.fax}</p>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-widest opacity-60">
            Design Variants
          </p>
          <ul className="mt-3 space-y-2">
            {samples.map((s) => (
              <li key={s.key}>
                <Link
                  href={s.href}
                  className="text-sm underline-offset-4 hover:underline"
                >
                  {s.concept}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/" className="text-sm underline-offset-4 hover:underline">
                ← デザイン一覧に戻る
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <p
        className="mx-auto mt-16 max-w-7xl text-xs opacity-50"
        style={{ borderTop: `1px solid ${isDark ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.06)"}`, paddingTop: "1.5rem" }}
      >
        {company.copyright}
      </p>
    </footer>
  );
}
