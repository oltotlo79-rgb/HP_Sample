"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { product } from "@/content/product";

/**
 * PPT slide 2 を、誌面の方程式として組版する。
 * 大判の手書き × 記号とセリフタイポの番号で 3 軸を編集する。
 */
export function AxesFormula() {
  return (
    <figure className="relative" aria-label="3 軸の方程式 (誌面組版)">
      <div className="mb-8 grid items-baseline gap-4 md:grid-cols-12">
        <p className="md:col-span-2 font-space-grotesk text-[10px] uppercase tracking-[0.4em] text-[var(--c-mustard)]">
          Fig.02
        </p>
        <p className="md:col-span-7 font-serif-jp text-base leading-relaxed text-[var(--c-ink)]/85 md:text-lg">
          QuickCRM は、3 つの軸の積で成立する。お客様自身がレイアウト・操作性・連携処理の
          いずれにも手を入れることで、業務にぴったり寄り添う環境が立ち上がる。
        </p>
        <p className="md:col-span-3 font-space-grotesk text-[10px] uppercase tracking-[0.3em] text-[var(--c-ink)]/55">
          出典 — PPT slide 2
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-11 items-stretch overflow-hidden border bg-[var(--c-canvas)]"
        style={{ borderColor: "var(--c-rule)" }}
      >
        {product.buildSelfAxes.map((a, i) => (
          <Fragment key={a.key}>
            {i > 0 && (
              <motion.div
                initial={{ opacity: 0, rotate: -8, scale: 0.6 }}
                whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.2 }}
                className="hidden items-center justify-center border-x md:flex md:col-span-1"
                style={{ borderColor: "var(--c-rule)" }}
              >
                <svg viewBox="0 0 80 80" className="h-20 w-20">
                  {/* 手書き感のある × */}
                  <path
                    d="M 16 18 Q 40 36 64 62"
                    stroke="#C9A227"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 64 18 Q 42 38 16 62"
                    stroke="#C9A227"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
            )}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="relative md:col-span-3 p-8 md:p-10"
            >
              <p className="font-space-grotesk text-[10px] uppercase tracking-[0.4em] text-[var(--c-mustard)]">
                Axis · 0{i + 1}
              </p>
              <p className="mt-4 font-fraunces text-7xl font-light italic text-[var(--c-deep)] md:text-8xl">
                {i + 1}
              </p>
              <hr className="my-6 border-t" style={{ borderColor: "var(--c-rule)" }} />
              <h3 className="font-serif-jp text-xl leading-tight text-[var(--c-deep)] md:text-2xl">
                {a.title}
              </h3>
              <p className="mt-4 font-serif-jp text-sm leading-loose text-[var(--c-ink)]/80">
                {a.desc}
              </p>
            </motion.article>
          </Fragment>
        ))}
      </div>

      <p className="mt-6 font-space-grotesk text-[10px] uppercase tracking-widest text-[var(--c-ink)]/60">
        * 3 軸の積 = お客様ご自身による構築 (ノーコード)
      </p>
    </figure>
  );
}
