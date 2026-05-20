import Link from "next/link";
import { SampleSwitcher } from "@/components/shared/SampleSwitcher";
import { company } from "@/content/product";

export function MagazineHeader() {
  return (
    <header
      className="sticky top-0 z-50 bg-[var(--c-canvas)]/85 backdrop-blur-md"
      style={{ borderBottom: "1px solid var(--c-rule)" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2 sm:px-6 sm:py-3 md:px-12">
        <p className="hidden font-space-grotesk text-[10px] uppercase tracking-[0.3em] text-[var(--c-deep)]/70 md:block">
          QuickCRM Cloud Service · Vol.01
        </p>
        <p className="font-space-grotesk text-[10px] uppercase tracking-[0.3em] text-[var(--c-deep)]/70">
          Issue 2026
        </p>
      </div>
      <div
        className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3 sm:px-6 sm:py-4 md:gap-6 md:px-12"
        style={{ borderTop: "1px solid var(--c-rule)" }}
      >
        <Link
          href="/sample-c"
          className="font-fraunces text-2xl font-light tracking-tight text-[var(--c-deep)] sm:text-3xl"
        >
          QuickCRM
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          <SampleSwitcher tone="c" />
          <a
            href={`tel:${company.phone.replace(/-/g, "")}`}
            className="text-sm tracking-wider text-[var(--c-ink)]/80 hover:text-[var(--c-deep)]"
          >
            {company.phone}
          </a>
        </div>
        <div className="md:hidden">
          <SampleSwitcher tone="c" />
        </div>
      </div>
    </header>
  );
}
