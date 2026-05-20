"use client";

import { motion } from "framer-motion";
import { systemArchitecture } from "@/content/product";

/**
 * 公式サイト「全体構成」+ PPT slide 3 を、ネットワークトポロジ図として再構築。
 * 中央の CRM コアから DB / CTI / Options が放射し、データストリームが脈動する。
 */
export function ArchitectureNetwork() {
  const nodes = [
    { x: 200, y: 200, label: "CTI", title: systemArchitecture.blocks[2].title, accent: "#06B6D4" },
    { x: 720, y: 200, label: "OPT", title: systemArchitecture.blocks[3].title, accent: "#A78BFA" },
    { x: 200, y: 480, label: "DB", title: systemArchitecture.blocks[1].title, accent: "#5EEAD4" },
    { x: 720, y: 480, label: "OP", title: "Operator / User", accent: "#FBBF24" },
  ];

  return (
    <figure className="relative" aria-label="QuickCRM ネットワーク構成図">
      <svg viewBox="0 0 960 720" className="h-auto w-full">
        <defs>
          <radialGradient id="net-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5EEAD4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#5EEAD4" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="net-link" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#5EEAD4" stopOpacity="0" />
            <stop offset="50%" stopColor="#5EEAD4" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#5EEAD4" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* 背景グリッド */}
        <g stroke="rgba(94,234,212,0.06)" strokeWidth="1">
          {Array.from({ length: 16 }).map((_, i) => (
            <line key={`gh-${i}`} x1="0" y1={i * 45} x2="960" y2={i * 45} />
          ))}
          {Array.from({ length: 21 }).map((_, i) => (
            <line key={`gv-${i}`} x1={i * 48} y1="0" x2={i * 48} y2="720" />
          ))}
        </g>

        {/* 周辺ノードと中央の接続線 */}
        {nodes.map((n, i) => (
          <motion.path
            key={`link-${i}`}
            d={`M ${n.x} ${n.y} Q ${(n.x + 480) / 2} ${(n.y + 340) / 2 + 30} 480 340`}
            stroke="url(#net-link)"
            strokeWidth="1.6"
            fill="none"
            strokeDasharray="6 6"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
          />
        ))}

        {/* 中央コア */}
        <motion.g
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <circle cx="480" cy="340" r="160" fill="url(#net-glow)" />
          <circle cx="480" cy="340" r="92" fill="#0A0E1A" stroke="#5EEAD4" strokeWidth="1.4" />
          <circle cx="480" cy="340" r="70" fill="none" stroke="#5EEAD4" strokeWidth="0.6" opacity="0.6" />
          <text x="480" y="320" textAnchor="middle" fontFamily="monospace" fontSize="11" letterSpacing="5" fill="#5EEAD4">
            CORE
          </text>
          <text x="480" y="346" textAnchor="middle" fontFamily="monospace" fontSize="18" fontWeight="700" fill="#E2E8F0">
            QuickCRM
          </text>
          <text x="480" y="368" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#94A3B8">
            v.cloud · 2026
          </text>
          {/* 拍動 */}
          <motion.circle
            cx="480"
            cy="340"
            r="92"
            fill="none"
            stroke="#5EEAD4"
            strokeWidth="1"
            animate={{ r: [92, 110, 92], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
          />
        </motion.g>

        {/* ノード */}
        {nodes.map((n, i) => (
          <motion.g
            key={`node-${i}`}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
          >
            <rect
              x={n.x - 88}
              y={n.y - 36}
              width="176"
              height="72"
              rx="10"
              fill="#101727"
              stroke={n.accent}
              strokeWidth="1.4"
            />
            <text x={n.x - 76} y={n.y - 12} fontFamily="monospace" fontSize="10" letterSpacing="4" fill={n.accent}>
              [{n.label}]
            </text>
            <text x={n.x - 76} y={n.y + 12} fontFamily="serif" fontSize="13" fill="#E2E8F0">
              {n.title.split(" ")[0]}
            </text>
            <text x={n.x - 76} y={n.y + 28} fontFamily="monospace" fontSize="8" fill="#94A3B8">
              {i === 0 && "AVAYA / SoftBank / AWS …"}
              {i === 1 && "SMS / Mail / LINE …"}
              {i === 2 && "AWS / SoftBank / on-prem"}
              {i === 3 && "Inbound + Outbound"}
            </text>
            <motion.circle
              cx={n.x + 76}
              cy={n.y - 24}
              r="3"
              fill={n.accent}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5 + (i % 3) * 0.3, repeat: Infinity, delay: i * 0.2 }}
            />
          </motion.g>
        ))}

        {/* 注記 (terminal style) */}
        <g fontFamily="monospace" fontSize="10" fill="#5EEAD4" opacity="0.75">
          <text x="40" y="36">$ topology --service quickcrm</text>
          <text x="40" y="56" fill="#94A3B8">
            ▌ 4 nodes connected · 0 errors · 12 ms RTT
          </text>
        </g>
        <text x="40" y="700" fontFamily="monospace" fontSize="10" fill="#94A3B8" opacity="0.65">
          fig.01 — system architecture · PPT slide 3 / 公式サイト全体構成
        </text>
      </svg>

      <ul className="mt-6 grid grid-cols-2 gap-2 font-mono text-[10px] uppercase tracking-widest text-[var(--b-muted)] md:grid-cols-4">
        <li>· CORE = CRM</li>
        <li>· CTI = 電話系</li>
        <li>· DB = Data store</li>
        <li>· OPT = Options</li>
      </ul>
    </figure>
  );
}
