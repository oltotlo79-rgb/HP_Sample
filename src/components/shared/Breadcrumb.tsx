import Link from "next/link";

export type Crumb = { label: string; href?: string };

export function Breadcrumb({
  items,
  className = "",
}: {
  items: Crumb[];
  className?: string;
}) {
  return (
    <nav aria-label="パンくず" className={`text-xs tracking-wider ${className}`}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="underline-offset-4 hover:underline opacity-70"
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast && <span aria-hidden className="opacity-40">▸</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
