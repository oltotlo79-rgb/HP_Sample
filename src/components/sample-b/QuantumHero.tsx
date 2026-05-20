"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { company, product } from "@/content/product";

export function QuantumHero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* レイヤ 1: シネマティックなモニター写真 */}
        <Image
          src="/images/photos/sample-b/hero-monitors.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* レイヤ 2: ダークなオーバーレイ */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(27,39,64,0.60) 0%, rgba(10,14,26,0.92) 60%)",
          }}
        />
        {!reduce && <GridCanvas />}
        <ParticleField />
        <NebulaGlow />
      </div>

      <div className="mx-auto grid min-h-[78vh] max-w-7xl items-center px-5 py-24 sm:px-6 md:min-h-[90vh] md:grid-cols-12 md:px-12 md:py-32">
        <div className="md:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-space-grotesk text-xs uppercase tracking-[0.4em] text-[var(--b-mint)]"
          >
            ◇ {product.name} · {product.category}
          </motion.p>

          <h1 className="mt-6 text-[2.25rem] leading-[1.05] tracking-tight sm:text-5xl md:mt-8 md:text-6xl lg:text-7xl">
            <RevealText delay={0.1} className="font-serif-jp text-[var(--b-text)]">
              コンタクトセンター業務、
            </RevealText>
            <RevealText delay={0.3} className="font-serif-jp text-[var(--b-mint)]">
              CRM を簡単導入。
            </RevealText>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 max-w-2xl text-sm leading-loose text-[var(--b-muted)] md:text-base"
          >
            {product.heroSub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/sample-b/screen-builder"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--b-mint)] px-6 py-3 text-sm font-bold text-[var(--b-space)] glow-mint transition-transform hover:scale-[1.02]"
            >
              業務画面作成機能を見る
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/sample-b/management"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--b-mint)]/40 px-6 py-3 text-sm font-medium text-[var(--b-mint)] transition-colors hover:bg-[var(--b-mint)]/10"
            >
              管理機能を見る
            </Link>
            <a
              href={`tel:${company.phone.replace(/-/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm text-[var(--b-text)]/70 hover:text-[var(--b-mint)]"
            >
              <Phone size={14} />
              {company.phone}
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-[var(--b-mint)]/15 pt-6"
          >
            <Stat label="Experience" value="10+" suffix="yr" />
            <Stat label="CTI Partners" value="10+" suffix="bx" />
            <Stat label="Channels" value="5+" suffix="ch" />
          </motion.dl>
        </div>

        <div className="md:col-span-5 mt-16 md:mt-0">
          <FloatingPanels />
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  suffix,
}: {
  label: string;
  value: string;
  suffix?: string;
}) {
  return (
    <div>
      <dt className="font-space-grotesk text-xs uppercase tracking-widest text-[var(--b-muted)]">
        {label}
      </dt>
      <dd className="mt-1 font-space-grotesk text-3xl font-bold text-[var(--b-mint)] md:text-4xl">
        {value}
        {suffix && (
          <span className="ml-1 text-xs font-normal text-[var(--b-muted)]">
            {suffix}
          </span>
        )}
      </dd>
    </div>
  );
}

function RevealText({
  children,
  delay = 0,
  className = "",
}: {
  children: string;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.9, delay, ease: [0.2, 0.7, 0.2, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function GridCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let t = 0;
    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      t += 0.005;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const cellSize = 60 * window.devicePixelRatio;
      ctx.strokeStyle = "rgba(94,234,212,0.10)";
      ctx.lineWidth = 1;
      for (let x = 0; x < w + cellSize; x += cellSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h + cellSize; y += cellSize) {
        const offset = Math.sin(t + y * 0.005) * 6 * window.devicePixelRatio;
        ctx.beginPath();
        ctx.moveTo(0, y + offset);
        ctx.lineTo(w, y - offset);
        ctx.stroke();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 h-full w-full" />;
}

function ParticleField() {
  const [particles, setParticles] = useState<
    { left: string; top: string; size: number; delay: number; dur: number }[]
  >([]);

  useEffect(() => {
    const arr = Array.from({ length: 40 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 0.6,
      delay: Math.random() * 6,
      dur: 6 + Math.random() * 8,
    }));
    setParticles(arr);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-[var(--b-mint)]"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            boxShadow: "0 0 6px rgba(94,234,212,0.7)",
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.9, 0.3],
          }}
          transition={{
            duration: p.dur,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function NebulaGlow() {
  return (
    <div className="absolute inset-0">
      <motion.div
        className="absolute"
        style={{
          left: "60%",
          top: "20%",
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(94,234,212,0.18), transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute"
        style={{
          left: "-10%",
          top: "60%",
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(167,139,250,0.16), transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function FloatingPanels() {
  return (
    <div className="relative aspect-square">
      <motion.div
        className="glass absolute left-4 top-4 h-56 w-72 rounded-2xl p-5"
        animate={{ y: [0, -12, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="text-xs font-mono uppercase tracking-widest text-[var(--b-mint)]">
          Active Calls
        </div>
        <div className="mt-2 font-space-grotesk text-5xl font-bold text-[var(--b-text)]">
          1,284
        </div>
        <div className="mt-4 flex h-12 items-end gap-1">
          {[40, 65, 30, 80, 55, 70, 45, 90, 60, 50].map((h, i) => (
            <motion.div
              key={i}
              className="w-2 rounded-t bg-[var(--b-mint)]"
              style={{ opacity: 0.6 + (i % 3) * 0.1 }}
              animate={{ height: [`${h}%`, `${Math.min(h + 15, 100)}%`, `${h}%`] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="glass absolute right-2 top-32 h-44 w-60 rounded-2xl p-5"
        animate={{ y: [0, 10, 0], rotate: [1, -1, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="text-xs font-mono uppercase tracking-widest text-[var(--b-aqua)]">
          Response
        </div>
        <div className="mt-2 font-space-grotesk text-4xl font-bold text-[var(--b-text)]">
          0.42<span className="text-sm font-normal text-[var(--b-muted)]"> s</span>
        </div>
        <svg viewBox="0 0 200 60" className="mt-3 w-full">
          <motion.path
            d="M 0 40 Q 50 10 100 30 T 200 20"
            stroke="#5EEAD4"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
        </svg>
      </motion.div>

      <motion.div
        className="glass absolute left-0 bottom-4 h-40 w-72 rounded-2xl p-5"
        animate={{ y: [0, -8, 0], rotate: [-1, 1, -1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="text-xs font-mono uppercase tracking-widest text-[var(--b-violet)]">
          Operators
        </div>
        <div className="mt-3 grid grid-cols-6 gap-1.5">
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.div
              key={i}
              className="h-3 w-3 rounded-sm"
              style={{
                background:
                  i % 5 === 0 ? "#A78BFA" : i % 7 === 0 ? "#06B6D4" : "#5EEAD4",
                opacity: 0.7,
              }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.05 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
