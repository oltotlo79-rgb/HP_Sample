"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

type Item = { name: string; subs?: readonly string[] };

export function LeafAccordion({
  groups,
}: {
  groups: readonly {
    title: string;
    summary?: string;
    items: readonly Item[];
    note?: string;
  }[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-4">
      {groups.map((g, i) => {
        const isOpen = open === i;
        return (
          <motion.section
            key={g.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="overflow-hidden rounded-3xl border border-[var(--a-forest)]/12 bg-white/60 backdrop-blur-sm"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-10 md:py-8"
            >
              <div className="flex items-center gap-4 md:gap-6">
                <span className="font-fraunces text-3xl text-[var(--a-mint)] md:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif-jp text-xl text-[var(--a-forest)] md:text-3xl">
                  {g.title}
                </h3>
              </div>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-full bg-[var(--a-mist)] p-2 text-[var(--a-forest)]"
              >
                <ChevronDown size={20} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-8 md:px-10 md:pb-12">
                    {g.summary && (
                      <p className="mb-6 max-w-3xl text-sm leading-loose text-[var(--a-ink)]/80 md:text-base">
                        {g.summary}
                      </p>
                    )}
                    <ul className="grid gap-6 md:grid-cols-2">
                      {g.items.map((item, idx) => (
                        <motion.li
                          key={item.name}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 + idx * 0.04 }}
                          className="border-l-2 border-[var(--a-mint)] pl-4"
                        >
                          <p className="text-base font-medium text-[var(--a-forest)]">
                            {item.name}
                          </p>
                          {item.subs && (
                            <div className="mt-2 flex flex-wrap gap-2">
                              {item.subs.map((s) => (
                                <span
                                  key={s}
                                  className="rounded-full bg-[var(--a-mist)] px-3 py-1 text-xs text-[var(--a-forest)]/80"
                                >
                                  {s}
                                </span>
                              ))}
                            </div>
                          )}
                        </motion.li>
                      ))}
                    </ul>
                    {g.note && (
                      <p className="mt-6 text-xs text-[var(--a-bark)] opacity-75">
                        {g.note}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>
        );
      })}
    </div>
  );
}
