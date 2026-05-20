# Sample A — Organic Forest (有機的・森の呼吸)

最終更新: 2026-05-19
パス: `/sample-a` , `/sample-a/screen-builder` , `/sample-a/management`

---

## 1. コンセプト

「森が呼吸するように、業務に寄り添う CRM」。
オーガニックで温かみのあるブランドトーン。深い森林緑をベースに、葉脈・木漏れ日・波紋といった自然モチーフを SVG と Lottie で表現する。フラットでも豪華すぎず、人間味のあるサイトを目指す。

### キャッチコピー候補
- メインページからの導線: 「Organic — 森のように、しなやかに」
- Hero: 「業務に呼吸を、画面に余白を。」
- 副題: 「コンタクトセンターのための、有機的 CRM 体験。」

---

## 2. デザイントークン

### 2.1 カラー
| トークン | 値 | 用途 |
|---|---|---|
| `--color-forest` | `#1B4332` | 主要見出し・濃いボタン |
| `--color-moss` | `#2D6A4F` | セカンダリ |
| `--color-mint` | `#95D5B2` | 強調・タグ・アクセント |
| `--color-mist` | `#D8F3DC` | ホバー背景 |
| `--color-cream` | `#FAF3E0` | ベース背景 |
| `--color-bark` | `#5C4033` | 副次的なアクセント (補色) |
| `--color-ink` | `#1A1F1B` | テキスト |
| `--color-veil` | `rgba(27, 67, 50, .08)` | 微細な区切り |

コントラスト: `--color-ink` on `--color-cream` = 14.6:1 (AAA 通過)。

### 2.2 タイポグラフィ
- 見出し (和文): **Noto Serif JP** (700)
- 見出し (欧文): **Fraunces** (Variable, 500-800、Optical Size 軸活用)
- 本文 (和文): **Noto Sans JP** (400/500)
- 本文 (欧文): **Inter** (400/500)
- 数字: Fraunces (Old-style numerals)

### 2.3 余白とリズム
- ベーススケール 8px
- セクション間: 96 / 128px (PC) , 72 / 96px (SP)
- 行送り: 本文 1.85、見出し 1.4

### 2.4 装飾
- 波形 SVG divider をセクション間に挿入 (流動的、グラデーション)
- 葉脈 SVG パターンを Hero / Footer に薄く重ねる
- 角丸は 12px (カード) / 28px (大きなブロック)
- シャドウは ` 0 12px 32px -16px rgba(27,67,50,.35)` のような柔らかい影

---

## 3. ページレイアウト

### 3.1 トップ ( `/sample-a` )

```
┌─────────────────────────────────────────────┐
│ NAV   QuickCRM  [ A B C ]      問い合わせ ↳ │
├─────────────────────────────────────────────┤
│  HERO                                       │
│   ・大胆な日本語見出し+欧文サブ              │
│   ・背景に動く葉影 (Lottie)                  │
│   ・右上に風で揺れる葉の SVG                 │
│   ・CTA: 「機能を見る」「資料請求」          │
├─────────────────────────────────────────────┤
│  CONCEPT (slide 2)                          │
│   ・大きな引用風タイポ                       │
│   ・左に有機的な水彩風カット                  │
├─────────────────────────────────────────────┤
│  3 STRENGTHS (slide 3)                      │
│   3 列カード + 葉のアイコン + 数字 01-03     │
│   ホバーで葉脈アニメ                          │
├─────────────────────────────────────────────┤
│  FUNCTION GATEWAY                           │
│   2 つの大きなカード:                        │
│   ・業務画面作成機能 → /sample-a/screen-... │
│   ・管理機能 → /sample-a/management         │
├─────────────────────────────────────────────┤
│  FOOTER (会社情報 / 03-6891-1010 / 住所)    │
└─────────────────────────────────────────────┘
```

### 3.2 業務画面作成機能 ( `/sample-a/screen-builder` )
- パンくず: トップ ▸ 業務画面作成機能
- リードコピー: 「オブジェクトを配置するだけで、業務にフィットする画面が完成。」
- 3 つの手法をそれぞれフルスクリーン高さに近い縦長セクションで表示
  1. 自由度の高い画面作成 — 左に手順 3 ステップ + 右にトリガー / アクションのモック UI
  2. テンプレートを用いた画面作成 — テンプレート 4 種 (案件処理 / アウトバウンド / スケジュール処理 / 受注処理) を葉のカードで表現
  3. Excel を用いた画面作成 — 画面設計書 → 取込 → 調整 の流れを波形矢印で繋ぐ

### 3.3 管理機能 ( `/sample-a/management` )
- 5 つの機能群を縦並びアコーディオン+葉脈アニメーション
  - アウトバウンド / データ管理 / レポート / コミュニケーション / 通話録音
- 各機能群はサブ項目を Pill で羅列
- 最後に「必要な機能だけを選択可能」をフルブリードの引用ブロックで強調

---

## 4. アニメーション仕様

| 場所 | 種類 | 実装 |
|---|---|---|
| Hero 背景 | 木漏れ日のフリッカー (CSS) + 葉が舞う (Lottie) | `lottie-react` |
| Hero 見出し | 文字が下からマスクで現れる | Framer Motion `useInView` |
| 波形 divider | スクロールに連動して波が伸縮 | SVG + Framer Motion |
| 3 Strengths カード | ホバーで葉脈 SVG が描画される (stroke-dashoffset) | CSS or Framer |
| 機能カードホバー | カード全体が 4° 持ち上がり、影が伸びる | Framer Motion `whileHover` |
| 機能ページのステップ番号 | 円形プログレスがスクロールで埋まる | Framer Motion `scrollYProgress` |
| 管理機能アコーディオン | 開閉時に葉脈ライン伸び | SVG path animate |
| ページ遷移 | Cross-fade + 葉が一瞬流れる演出 | App Router `template.tsx` |
| reduced-motion | 全アニメ停止、葉は静止画 | `prefers-reduced-motion: reduce` |

---

## 5. 画像生成指示書 (codex 用プロンプト)

> すべてのプロンプトには共通ネガティブを併用すること: `text, letters, watermark, logo, signature, blurry, distorted, lowres, jpeg artifacts, extra fingers, deformed hands, low quality`

### 配置一覧

| # | ファイル名 | サイズ | 用途 / 配置先 | フォーマット |
|---|---|---|---|---|
| A-01 | `sa-hero-leaf-bg.webp` | 2880×1620 | `/sample-a` Hero 背景 | WebP |
| A-02 | `sa-hero-leaf-foreground.png` | 2400×1600 | 同 Hero 前景 (透過) | PNG (透過) |
| A-03 | `sa-concept-watercolor.webp` | 1600×1600 | コンセプトセクション左カット | WebP |
| A-04 | `sa-strength-01.webp` | 1200×900 | 強み 1: 豊富な利用形態 | WebP |
| A-05 | `sa-strength-02.webp` | 1200×900 | 強み 2: 柔軟な開発手法 | WebP |
| A-06 | `sa-strength-03.webp` | 1200×900 | 強み 3: 手軽に導入可能 | WebP |
| A-07 | `sa-card-screen-builder.webp` | 1600×900 | 機能ゲートウェイ 1 | WebP |
| A-08 | `sa-card-management.webp` | 1600×900 | 機能ゲートウェイ 2 | WebP |
| A-09 | `sa-motif-wave.svg` | vector | 全ページ divider | SVG |
| A-10 | `sa-motif-veins.svg` | vector | カード装飾 / Footer 背景 | SVG |
| A-11 | `sa-screen-builder-hero.webp` | 2880×1620 | 業務画面作成機能ページ Hero | WebP |
| A-12 | `sa-template-leaf-card.webp` | 1200×1200 | テンプレート 4 種を 1 枚で表現 | WebP |
| A-13 | `sa-excel-flow-bg.webp` | 1600×900 | Excel 手法セクション背景 | WebP |
| A-14 | `sa-management-hero.webp` | 2880×1620 | 管理機能ページ Hero | WebP |
| A-15 | `sa-leaf-animation.json` | Lottie | Hero の舞う葉 | JSON (Lottie) |
| A-16 | `sa-og-image.webp` | 1200×630 | OGP / Twitter | WebP (`/public/og/sample-a.webp`) |

### プロンプト集

#### A-01 `sa-hero-leaf-bg.webp` (2880×1620)
> Watercolor-style abstract background of dense forest seen from below, soft sunlight filtering through deep emerald leaves, organic and tranquil mood, gentle bokeh, warm cream highlights, painterly brush strokes, ultra-wide cinematic composition, dominant colors deep forest green #1B4332 and cream #FAF3E0, no people, no text.

#### A-02 `sa-hero-leaf-foreground.png` (2400×1600, transparent)
> Three large translucent botanical leaves floating across the frame, mid-air, watercolor texture with subtle ink veins, partially transparent edges, gentle motion blur, isolated on transparent background, mint and forest green palette.

#### A-03 `sa-concept-watercolor.webp` (1600×1600)
> Soft watercolor illustration of a stylized leaf cross-section, showing veins as elegant linework, calm composition with negative space, cream paper texture, forest green ink, single subject centered.

#### A-04 `sa-strength-01.webp` (1200×900) — 豊富な利用形態
> Abstract organic illustration suggesting connectivity and flexible deployment, three interlocking botanical pods linked by gentle vines on a cream background, watercolor + ink style, palette of forest green, moss and mint.

#### A-05 `sa-strength-02.webp` (1200×900) — 柔軟な開発手法
> Abstract organic illustration of three flowing paths converging into a single sprout, suggesting multiple development approaches, watercolor brushwork, cream background, mint accents.

#### A-06 `sa-strength-03.webp` (1200×900) — 手軽に導入可能
> Abstract organic illustration of a young seedling rapidly unfolding into a stylized leaf, gentle motion lines, watercolor + ink style, optimistic and light atmosphere.

#### A-07 `sa-card-screen-builder.webp` (1600×900)
> Top-down abstract botanical composition of modular leaf shapes arranged like a UI grid, suggesting drag-and-drop screen building, soft watercolor edges, cream and forest palette.

#### A-08 `sa-card-management.webp` (1600×900)
> Abstract botanical dashboard metaphor — vines weaving between gentle geometric shapes representing data tiles, soft and calm composition, watercolor style, cream and mint palette.

#### A-09 `sa-motif-wave.svg`
> SVG only. Smooth organic wave divider, 1 viewport wide (1920 unit), height 120 unit, two-tone gradient between forest green and mint, two layered waves with slight phase offset. Pure vector, no raster.

#### A-10 `sa-motif-veins.svg`
> SVG only. Botanical leaf vein pattern, single mid-rib and 6-8 secondary veins fanning out, very thin stroke (1.5px), forest green, opacity 0.2. Designed to tile or stretch.

#### A-11 `sa-screen-builder-hero.webp` (2880×1620)
> Abstract watercolor depiction of organic UI building blocks arranged on a cream canvas, gentle ink wash, subtle drop shadows, palette of forest green, mint and cream, calm and human-centered atmosphere.

#### A-12 `sa-template-leaf-card.webp` (1200×1200)
> Four distinct stylized leaves arranged in a 2x2 grid on cream paper, each leaf suggesting a different business workflow (case handling, outbound, schedule, order), watercolor with delicate ink linework, equal weight.

#### A-13 `sa-excel-flow-bg.webp` (1600×900)
> Abstract watercolor of paper sheets transforming into stylized leaves as they flow from left to right, suggesting Excel-to-screen workflow, cream background, forest green and bark accents.

#### A-14 `sa-management-hero.webp` (2880×1620)
> Abstract botanical control room metaphor — a calm cluster of leaves arranged like dashboard tiles, soft watercolor washes, faint vein lines, cream paper, forest and mint palette, serene atmosphere.

#### A-15 `sa-leaf-animation.json` (Lottie)
> Lottie animation, 1080×1080, 6-second loop, 30fps. Three translucent botanical leaves slowly drifting from upper-right to lower-left with gentle rotation. Forest green and mint palette. Light parallax depth. Background transparent.
> ※ Lottie が生成不可なら、A-02 を CSS keyframes でドリフトさせるフォールバックを採用する。

#### A-16 `sa-og-image.webp` (1200×630)
> Wide OGP banner, watercolor forest background, single bold botanical leaf positioned left, large negative space on the right (text will be overlaid later by code), forest green and cream palette, no embedded text.

---

## 6. コンポーネント設計

| コンポーネント | パス | 説明 |
|---|---|---|
| `LeafHero` | `src/components/sample-a/LeafHero.tsx` | Hero。Lottie 葉 + 背景 + 見出し |
| `WaveDivider` | `src/components/sample-a/WaveDivider.tsx` | 波形 SVG。`from` `to` カラー受け取り |
| `StrengthCard` | `src/components/sample-a/StrengthCard.tsx` | 3 強みカード |
| `GatewayCard` | `src/components/sample-a/GatewayCard.tsx` | 機能ゲートウェイ |
| `LeafAccordion` | `src/components/sample-a/LeafAccordion.tsx` | 管理機能ページ用 |
| `TemplateLeafGrid` | `src/components/sample-a/TemplateLeafGrid.tsx` | テンプレート 4 種 |

---

## 7. 受入基準
- Hero 上でアニメーションが 60fps を維持 (Chrome / Edge / Safari)
- スクロール途中で波形が滑らかに変形する
- `prefers-reduced-motion` で全アニメが停止する
- Lighthouse Performance 90+ (デスクトップ)
- 色覚多様性 (P 型 / D 型) シミュレーションで主要 CTA が判別可能
