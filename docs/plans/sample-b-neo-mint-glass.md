# Sample B — Neo Mint Glass (近未来・サイバー・量子グリッド)

最終更新: 2026-05-19
パス: `/sample-b` , `/sample-b/screen-builder` , `/sample-b/management`

---

## 1. コンセプト

「次世代のコンタクトセンター体験を、量子グリッドの彼方へ」。
ダークモード前提、ネオミントの発光、ガラスモーフィズム、3D 浮遊カード、低照度のサイバー世界観。Three.js でパーティクルを浮かべ、マウス追従の光跡で「触れるインターフェース」を演出する。

### キャッチコピー候補
- メインページからの導線: 「Neo Mint — 触れる、未来のオペレーション。」
- Hero: 「グリッドの先に、運用のすべてがある。」
- 副題: 「QuickCRM が示す、コンタクトセンターの次の地平。」

---

## 2. デザイントークン

### 2.1 カラー
| トークン | 値 | 用途 |
|---|---|---|
| `--color-space` | `#0A0E1A` | ベース背景 |
| `--color-deep` | `#101727` | カード背景 |
| `--color-mint` | `#5EEAD4` | 主アクセント / 発光 |
| `--color-aqua` | `#06B6D4` | サブアクセント |
| `--color-violet` | `#A78BFA` | リンク・装飾 |
| `--color-glass` | `rgba(255,255,255,.06)` | ガラス層 |
| `--color-edge` | `rgba(94,234,212,.4)` | ガラスのフチ発光 |
| `--color-text` | `#E2E8F0` | テキスト |
| `--color-muted` | `#94A3B8` | 補助テキスト |

ベース全体に `radial-gradient(ellipse at top, #1B2740, #0A0E1A 60%)` の宇宙感グラデを適用。

### 2.2 タイポグラフィ
- 見出し (欧文): **Space Grotesk** (Variable 400-700)
- 見出し (和文): **Noto Sans JP** (700/900) — Tracking を 0.04em でテック感
- 本文 (欧文): **JetBrains Mono** (UI ラベル) + **Inter** (本文)
- 本文 (和文): **Noto Sans JP** (400/500)
- 数字: タブラー数字 (Space Grotesk tabular-nums)

### 2.3 スペーシング・形状
- 角丸 16px (カード) / 24px (ガラスパネル)
- ボーダー 1px の `--color-edge` で発光フレーム
- ハイライト: `box-shadow: 0 0 24px -8px var(--color-mint)`
- グリッドオーバーレイ: `1px dashed rgba(255,255,255,.04)` で 80px グリッド

### 2.4 ガラスモーフィズム規約
```css
backdrop-filter: blur(24px) saturate(160%);
background: linear-gradient(135deg, rgba(255,255,255,.08), rgba(255,255,255,.02));
border: 1px solid rgba(94,234,212,.18);
```

---

## 3. ページレイアウト

### 3.1 トップ ( `/sample-b` )

```
┌─────────────────────────────────────────────┐
│ NAV ◇ QuickCRM   [ A B C ]    Contact ↳     │
├─────────────────────────────────────────────┤
│  HERO (full-bleed, dark)                    │
│   ・3D グリッド + ネオミント・パーティクル    │
│   ・中央にガラスカード (Hero copy)           │
│   ・マウス追従の光跡                          │
│   ・CTA: ネオミントの発光ボタン               │
├─────────────────────────────────────────────┤
│  CONCEPT  (slide 2)                         │
│   ・大きなタイポが Glitch で出現              │
│   ・ガラスパネルの上に重なる                   │
├─────────────────────────────────────────────┤
│  3 STRENGTHS (slide 3) — Bento Grid 4 タイル │
│   01 Forms  02 Methods  03 Speed             │
│   各タイルにマイクロ 3D アイコン               │
├─────────────────────────────────────────────┤
│  FUNCTION GATEWAY                           │
│   2 つの巨大ガラスタイル, flip on hover      │
├─────────────────────────────────────────────┤
│  FOOTER (暗色, ネオングリッド薄く)            │
└─────────────────────────────────────────────┘
```

### 3.2 業務画面作成機能 ( `/sample-b/screen-builder` )
- 横スクロールセクション (左→右に 3 つの開発手法をパララックスで読ませる)
  - Section 1: 自由度の高い画面作成 — 中央に 3D の浮遊カードでオブジェクト→設定→連携 の 3 ステップ。トリガーとアクションが繋がる光線アニメ。
  - Section 2: テンプレート — 4 つのテンプレートを 3D タイルで提示。ホバーで奥行き拡大。
  - Section 3: Excel — Excel シートが 3D で開き、左から右に「設計書 → 取込 → 調整」の動き。

### 3.3 管理機能 ( `/sample-b/management` )
- フルスクリーン 5 セクション縦スクロール (CSS scroll-snap)
- 各セクション背景にネオングリッドと薄いパーティクル
- 機能項目は Pill (ガラス) で羅列
- セクション間に DataStream 風のラインアニメーション

---

## 4. アニメーション仕様

| 場所 | 種類 | 実装 |
|---|---|---|
| Hero 背景 | 3D グリッド (波打つ) | React Three Fiber + Custom shader |
| Hero パーティクル | 浮遊 + マウス追従 | R3F + drei `Points` |
| Hero 見出し | Glitch / Split text | Framer Motion + `useReducedMotion` |
| Bento タイル | ホバーで 3D 回転 (rotateY 8°, rotateX -4°) | Framer Motion `whileHover` |
| Gateway カード | 表/裏フリップ (mouse enter / leave) | Framer Motion |
| ScreenBuilder 横スクロール | スクロール量を `x` に変換 | Framer Motion `scrollYProgress` |
| Management スクロールスナップ | 各セクション IN で UI が組み上がる | CSS scroll-snap + Framer |
| トリガー→アクション線 | SVG stroke-dashoffset で流動光 | CSS animation |
| Cursor | カスタムカーソル (ネオミントのリング) | 独自フック |
| reduced-motion | 3D を停止し、静的画像にフォールバック | Three を `Suspense + dynamic({ ssr: false })` で切替 |

---

## 5. 画像生成指示書 (codex 用プロンプト)

> 共通ネガティブ: `text, letters, watermark, logo, signature, blurry, distorted, lowres, jpeg artifacts, extra fingers, deformed hands, low quality, daytime, warm tones`

### 配置一覧

| # | ファイル名 | サイズ | 用途 / 配置先 | フォーマット |
|---|---|---|---|---|
| B-01 | `sb-hero-grid-bg.webp` | 2880×1620 | Hero 背景フォールバック (3D 起動前) | WebP |
| B-02 | `sb-hero-particles-still.png` | 2880×1620 | reduced-motion 時の代替 | PNG (透過なし、ロスレス感) |
| B-03 | `sb-concept-glass.webp` | 1600×1600 | コンセプトセクション右カット | WebP |
| B-04 | `sb-bento-01.webp` | 1200×900 | Bento 01: Forms | WebP |
| B-05 | `sb-bento-02.webp` | 1200×900 | Bento 02: Methods | WebP |
| B-06 | `sb-bento-03.webp` | 1200×900 | Bento 03: Speed | WebP |
| B-07 | `sb-bento-04.webp` | 1200×900 | Bento 04: Coverage | WebP |
| B-08 | `sb-gateway-screen.webp` | 1600×900 | ゲートウェイ 1 表面 | WebP |
| B-09 | `sb-gateway-mgmt.webp` | 1600×900 | ゲートウェイ 2 表面 | WebP |
| B-10 | `sb-screen-builder-hero.webp` | 2880×1620 | screen-builder Hero | WebP |
| B-11 | `sb-builder-step-trigger.webp` | 1200×1200 | 自由度高い - トリガー | WebP |
| B-12 | `sb-builder-step-action.webp` | 1200×1200 | 自由度高い - アクション | WebP |
| B-13 | `sb-template-tile.webp` | 1600×900 | テンプレート 4 種を 3D タイルで | WebP |
| B-14 | `sb-excel-flow.webp` | 1600×900 | Excel 手法 | WebP |
| B-15 | `sb-management-hero.webp` | 2880×1620 | management Hero | WebP |
| B-16 | `sb-data-stream-motif.svg` | vector | データストリーム ライン | SVG |
| B-17 | `sb-grid-overlay.svg` | vector | ネオングリッドオーバーレイ | SVG |
| B-18 | `sb-og-image.webp` | 1200×630 | OGP | WebP (`/public/og/sample-b.webp`) |

### プロンプト集

#### B-01 `sb-hero-grid-bg.webp` (2880×1620)
> Cinematic dark sci-fi background, deep navy and obsidian gradient, vast holographic mesh grid stretching toward a vanishing point, neo-mint cyan #5EEAD4 emissive lines, soft volumetric haze, sparse luminous particles, ultra-wide composition, mood quiet and futuristic, no text, no people, no logos.

#### B-02 `sb-hero-particles-still.png` (2880×1620)
> Same composition as B-01 but with frozen neo-mint particles floating in foreground, suggesting motion captured at one instant, no motion blur, crisp particles, ultra-wide.

#### B-03 `sb-concept-glass.webp` (1600×1600)
> Hyper-real frosted glass slab levitating in a dark cyan-lit room, soft refractive caustics inside the glass, faint geometric data structures visible through translucency, neo-mint rim light, hero product shot style, deep space background.

#### B-04 `sb-bento-01.webp` (1200×900) — Forms
> Abstract sci-fi visualization of holographic UI tiles arranged as a floating bento grid, neo-mint highlights, dark background, glass material, shallow depth of field.

#### B-05 `sb-bento-02.webp` (1200×900) — Methods
> Abstract visualization of three glowing data conduits converging into a single luminous core, dark background, neo-mint cyan and violet accents, glassy materials.

#### B-06 `sb-bento-03.webp` (1200×900) — Speed
> Abstract visualization of light streaks tearing through a dark holographic grid, suggesting velocity, neo-mint cyan motion trails, subtle violet bloom.

#### B-07 `sb-bento-04.webp` (1200×900) — Coverage
> Abstract globe of soft cyan latitude lines orbited by tiny luminous data nodes, futuristic neutral background, deep navy.

#### B-08 `sb-gateway-screen.webp` (1600×900)
> Floating glass tablet displaying abstract neo-mint UI elements, holographic widgets emerging from its surface, dark cinematic environment, soft volumetric glow.

#### B-09 `sb-gateway-mgmt.webp` (1600×900)
> Floating glass control surface with stacked translucent panels showing abstract dashboards, particles drifting around, dark cinematic environment.

#### B-10 `sb-screen-builder-hero.webp` (2880×1620)
> Wide cinematic dark interior, large hovering glass interface modules being assembled by invisible hands, neo-mint accent lines, particles, sense of construction in progress.

#### B-11 `sb-builder-step-trigger.webp` (1200×1200)
> Square composition. Glowing UI input elements (abstract buttons, checkbox, text field) floating in dark space, neo-mint cyan rim lights, sense of activation.

#### B-12 `sb-builder-step-action.webp` (1200×1200)
> Square composition. Holographic geometric icons representing screen actions (color change, copy, calculation) glowing in dark space, neo-mint cyan.

#### B-13 `sb-template-tile.webp` (1600×900)
> Four floating glass tiles arranged like a row in dark space, each tile shows an abstract workflow pattern (case handling, outbound, schedule, order), neo-mint rim light.

#### B-14 `sb-excel-flow.webp` (1600×900)
> Translucent grid sheet (abstract spreadsheet metaphor) morphing into a holographic UI panel, left-to-right flow, neo-mint glow, dark cinematic background.

#### B-15 `sb-management-hero.webp` (2880×1620)
> Wide cinematic command center metaphor, multiple glass dashboards floating in dark space, soft neo-mint emissive lines connecting them, particles, futuristic and calm.

#### B-16 `sb-data-stream-motif.svg`
> SVG only. Horizontal data-stream lines, 8 parallel rules with varying dash patterns, gradient from transparent to neo-mint cyan #5EEAD4. Designed to animate stroke-dashoffset.

#### B-17 `sb-grid-overlay.svg`
> SVG only. Subtle perspective grid pattern, 80×80 unit cells, 1px stroke, opacity 0.06, perspective converging toward the upper center, tileable horizontally.

#### B-18 `sb-og-image.webp` (1200×630)
> Wide cinematic dark background with a single glowing neo-mint grid line crossing the frame diagonally, soft particles, generous negative space on the right.

---

## 6. コンポーネント設計

| コンポーネント | パス | 説明 |
|---|---|---|
| `QuantumHero` | `src/components/sample-b/QuantumHero.tsx` | R3F による Hero 3D |
| `GlassCard` | `src/components/sample-b/GlassCard.tsx` | ガラスモーフィズム共通 |
| `BentoTile` | `src/components/sample-b/BentoTile.tsx` | 3D ホバー |
| `FlipGateway` | `src/components/sample-b/FlipGateway.tsx` | 表裏フリップ |
| `HorizontalScroller` | `src/components/sample-b/HorizontalScroller.tsx` | 横スクロール |
| `DataStream` | `src/components/sample-b/DataStream.tsx` | SVG line アニメ |

---

## 7. パフォーマンス上の留意
- Three.js は `dynamic(() => import(...), { ssr: false })` でクライアント限定
- パーティクル数は `navigator.hardwareConcurrency` を見て低スペック端末で半減
- `prefers-reduced-motion` で 3D 自体をマウントせず、`B-01/B-02` の静的画像で代替
- メインバンドルに R3F を含めず、別 chunk へ分離

---

## 8. 受入基準
- Hero の 3D が iPhone 14 相当で 30fps 以上を維持
- ガラスカードのコントラスト不足を `outline` で補い、AA を維持
- キーボードフォーカス時、フォーカスリングがネオミントで視認可能
- 全 3 ページで Lighthouse Performance 90+ (デスクトップ)
