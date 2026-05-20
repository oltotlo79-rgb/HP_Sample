# codex 向け画像生成 一括指示書

最終更新: 2026-05-19
対象: codex (画像生成タスク)
読み込み方: 本ファイル単体で完結する形にしているため、codex に「このファイルの内容に従って `public/images/...` 配下に画像を生成してほしい」と指示すれば実行可能。

---

## 0. 概要

QuickCRM コーポレートサイトリニューアル (Next.js + Cloudflare Workers) で使用する画像を一括で生成する。
3 つのデザインサンプル (A: Organic Forest / B: Neo Mint Glass / C: Editorial Botanical) はそれぞれ強く差別化された世界観を持つため、**プロンプトは混ぜない**こと。

詳細仕様はサンプル別ファイルにも記載してあるが、本ファイルは codex 単体で完結するよう全プロンプトを再掲する。

- `docs/plans/sample-a-organic-forest.md`
- `docs/plans/sample-b-neo-mint-glass.md`
- `docs/plans/sample-c-editorial-botanical.md`

---

## 1. 出力先・命名規則

| 種別 | 配置先 | 命名規則 |
|---|---|---|
| サンプル A 画像 | `public/images/sample-a/` | `sa-{section}-{purpose}.{ext}` |
| サンプル B 画像 | `public/images/sample-b/` | `sb-{section}-{purpose}.{ext}` |
| サンプル C 画像 | `public/images/sample-c/` | `sc-{section}-{purpose}.{ext}` |
| OGP | `public/og/` | `sample-{a|b|c}.webp` |
| メインページ用 | `public/images/landing/` | `landing-{purpose}.{ext}` |
| ロゴ | `public/brand/` | `quickcrm-logo.{svg|png}` (ユーザー支給予定) |

ファイル名は本ファイル中の「ファイル名」列を **そのまま** 用いること。差し替えてはならない。

---

## 2. 共通ルール

- **画像内にテキスト・ロゴ・透かしを描画しない**。日本語/英字いずれも禁止。
- **特定人物 / 既存ブランド / 実在企業のビジュアル要素を含めない**。
- 人物は可能な限り含めない。含める場合も顔の特徴が判別できない抽象表現にする。
- 文化的中立性を保つ (特定宗教・民族的記号を避ける)。
- 写真風画像のフォーマットは **WebP (品質 85)**。サイズは記載寸法を厳守。
- SVG は **vector のみ** で、ラスタを埋め込まない。`viewBox` を必ず指定。
- PNG (透過) を指定された画像は **アルファチャンネル必須**。
- 出力前に各画像が 1 枚あたり **300KB 以下** に最適化されているか確認。困難な場合は別途報告。
- すべてのプロンプトに以下のネガティブを併用すること:

```
text, letters, numbers, watermark, logo, signature, blurry, distorted,
lowres, jpeg artifacts, extra fingers, deformed hands, low quality
```

- サンプル B では追加で `daytime, warm tones` を、サンプル C では追加で `saturated colors, neon, cyberpunk` をネガティブに追加すること。

---

## 3. サンプル A — Organic Forest (有機・自然・あたたかさ)

世界観: 水彩 + ボタニカル + クリーム紙。色は深い森林緑 `#1B4332` / ミント `#95D5B2` / クリーム `#FAF3E0` を主軸とし、温かく落ち着いた印象。

| # | ファイル名 | サイズ | フォーマット | プロンプト |
|---|---|---|---|---|
| A-01 | `public/images/sample-a/sa-hero-leaf-bg.webp` | 2880×1620 | WebP | Watercolor-style abstract background of dense forest seen from below, soft sunlight filtering through deep emerald leaves, organic and tranquil mood, gentle bokeh, warm cream highlights, painterly brush strokes, ultra-wide cinematic composition, dominant colors deep forest green #1B4332 and cream #FAF3E0. |
| A-02 | `public/images/sample-a/sa-hero-leaf-foreground.png` | 2400×1600 | PNG (透過) | Three large translucent botanical leaves floating across the frame, mid-air, watercolor texture with subtle ink veins, partially transparent edges, gentle motion blur, isolated on transparent background, mint and forest green palette. |
| A-03 | `public/images/sample-a/sa-concept-watercolor.webp` | 1600×1600 | WebP | Soft watercolor illustration of a stylized leaf cross-section, showing veins as elegant linework, calm composition with negative space, cream paper texture, forest green ink, single subject centered. |
| A-04 | `public/images/sample-a/sa-strength-01.webp` | 1200×900 | WebP | Abstract organic illustration suggesting connectivity and flexible deployment, three interlocking botanical pods linked by gentle vines on a cream background, watercolor + ink style, palette of forest green, moss and mint. |
| A-05 | `public/images/sample-a/sa-strength-02.webp` | 1200×900 | WebP | Abstract organic illustration of three flowing paths converging into a single sprout, suggesting multiple development approaches, watercolor brushwork, cream background, mint accents. |
| A-06 | `public/images/sample-a/sa-strength-03.webp` | 1200×900 | WebP | Abstract organic illustration of a young seedling rapidly unfolding into a stylized leaf, gentle motion lines, watercolor + ink style, optimistic and light atmosphere. |
| A-07 | `public/images/sample-a/sa-card-screen-builder.webp` | 1600×900 | WebP | Top-down abstract botanical composition of modular leaf shapes arranged like a UI grid, suggesting drag-and-drop screen building, soft watercolor edges, cream and forest palette. |
| A-08 | `public/images/sample-a/sa-card-management.webp` | 1600×900 | WebP | Abstract botanical dashboard metaphor — vines weaving between gentle geometric shapes representing data tiles, soft and calm composition, watercolor style, cream and mint palette. |
| A-09 | `public/images/sample-a/sa-motif-wave.svg` | viewBox 1920×120 | SVG | SVG only. Smooth organic wave divider with two layered waves and slight phase offset. Two-tone gradient between forest green #1B4332 and mint #95D5B2. Pure vector, no raster. |
| A-10 | `public/images/sample-a/sa-motif-veins.svg` | viewBox 400×400 | SVG | SVG only. Botanical leaf vein pattern, single mid-rib and 6-8 secondary veins fanning out, very thin stroke (1.5px), forest green #1B4332, opacity 0.2. Designed to tile or stretch. |
| A-11 | `public/images/sample-a/sa-screen-builder-hero.webp` | 2880×1620 | WebP | Abstract watercolor depiction of organic UI building blocks arranged on a cream canvas, gentle ink wash, subtle drop shadows, palette of forest green, mint and cream, calm and human-centered atmosphere. |
| A-12 | `public/images/sample-a/sa-template-leaf-card.webp` | 1200×1200 | WebP | Four distinct stylized leaves arranged in a 2x2 grid on cream paper, each leaf suggesting a different business workflow, watercolor with delicate ink linework, equal weight. |
| A-13 | `public/images/sample-a/sa-excel-flow-bg.webp` | 1600×900 | WebP | Abstract watercolor of paper sheets transforming into stylized leaves as they flow from left to right, suggesting Excel-to-screen workflow, cream background, forest green and bark accents. |
| A-14 | `public/images/sample-a/sa-management-hero.webp` | 2880×1620 | WebP | Abstract botanical control room metaphor — a calm cluster of leaves arranged like dashboard tiles, soft watercolor washes, faint vein lines, cream paper, forest and mint palette, serene atmosphere. |
| A-15 | `public/images/sample-a/sa-leaf-animation.json` | Lottie 1080×1080 / 6s loop / 30fps | Lottie JSON | Lottie animation: three translucent botanical leaves drifting from upper-right to lower-left with gentle rotation, forest green and mint palette, light parallax depth, transparent background. (Lottie 生成が不可能な場合は本ファイルを省略し、A-02 をフォールバックとして利用する旨を報告。) |
| A-16 | `public/og/sample-a.webp` | 1200×630 | WebP | Wide OGP banner, watercolor forest background, single bold botanical leaf positioned left, large negative space on the right (text will be overlaid later by code), forest green and cream palette. |

---

## 4. サンプル B — Neo Mint Glass (近未来・サイバー・ガラスモーフィズム)

世界観: ダークモード前提のサイバー空間。色は黒紺 `#0A0E1A` / ネオミント `#5EEAD4` / アクア `#06B6D4`。ガラス、3D グリッド、パーティクル、低照度。
**追加ネガティブ**: `daytime, warm tones`

| # | ファイル名 | サイズ | フォーマット | プロンプト |
|---|---|---|---|---|
| B-01 | `public/images/sample-b/sb-hero-grid-bg.webp` | 2880×1620 | WebP | Cinematic dark sci-fi background, deep navy and obsidian gradient, vast holographic mesh grid stretching toward a vanishing point, neo-mint cyan #5EEAD4 emissive lines, soft volumetric haze, sparse luminous particles, ultra-wide composition, mood quiet and futuristic. |
| B-02 | `public/images/sample-b/sb-hero-particles-still.png` | 2880×1620 | PNG | Same composition as B-01 but with frozen neo-mint particles floating in foreground, no motion blur, crisp particles, ultra-wide, dark cinematic mood. |
| B-03 | `public/images/sample-b/sb-concept-glass.webp` | 1600×1600 | WebP | Hyper-real frosted glass slab levitating in a dark cyan-lit room, soft refractive caustics inside the glass, faint geometric data structures visible through translucency, neo-mint rim light, hero product shot style, deep space background. |
| B-04 | `public/images/sample-b/sb-bento-01.webp` | 1200×900 | WebP | Abstract sci-fi visualization of holographic UI tiles arranged as a floating bento grid, neo-mint highlights, dark background, glass material, shallow depth of field. |
| B-05 | `public/images/sample-b/sb-bento-02.webp` | 1200×900 | WebP | Abstract visualization of three glowing data conduits converging into a single luminous core, dark background, neo-mint cyan and violet accents, glassy materials. |
| B-06 | `public/images/sample-b/sb-bento-03.webp` | 1200×900 | WebP | Abstract visualization of light streaks tearing through a dark holographic grid, suggesting velocity, neo-mint cyan motion trails, subtle violet bloom. |
| B-07 | `public/images/sample-b/sb-bento-04.webp` | 1200×900 | WebP | Abstract globe of soft cyan latitude lines orbited by tiny luminous data nodes, futuristic neutral background, deep navy. |
| B-08 | `public/images/sample-b/sb-gateway-screen.webp` | 1600×900 | WebP | Floating glass tablet displaying abstract neo-mint UI elements, holographic widgets emerging from its surface, dark cinematic environment, soft volumetric glow. |
| B-09 | `public/images/sample-b/sb-gateway-mgmt.webp` | 1600×900 | WebP | Floating glass control surface with stacked translucent panels showing abstract dashboards, particles drifting around, dark cinematic environment. |
| B-10 | `public/images/sample-b/sb-screen-builder-hero.webp` | 2880×1620 | WebP | Wide cinematic dark interior, large hovering glass interface modules being assembled by invisible hands, neo-mint accent lines, particles, sense of construction in progress. |
| B-11 | `public/images/sample-b/sb-builder-step-trigger.webp` | 1200×1200 | WebP | Square composition. Glowing UI input elements (abstract buttons, checkbox, text field) floating in dark space, neo-mint cyan rim lights, sense of activation. |
| B-12 | `public/images/sample-b/sb-builder-step-action.webp` | 1200×1200 | WebP | Square composition. Holographic geometric icons representing screen actions (color change, copy, calculation) glowing in dark space, neo-mint cyan. |
| B-13 | `public/images/sample-b/sb-template-tile.webp` | 1600×900 | WebP | Four floating glass tiles arranged in a row in dark space, each tile shows an abstract workflow pattern, neo-mint rim light. |
| B-14 | `public/images/sample-b/sb-excel-flow.webp` | 1600×900 | WebP | Translucent grid sheet morphing into a holographic UI panel, left-to-right flow, neo-mint glow, dark cinematic background. |
| B-15 | `public/images/sample-b/sb-management-hero.webp` | 2880×1620 | WebP | Wide cinematic command center metaphor, multiple glass dashboards floating in dark space, soft neo-mint emissive lines connecting them, particles, futuristic and calm. |
| B-16 | `public/images/sample-b/sb-data-stream-motif.svg` | viewBox 1920×120 | SVG | SVG only. Horizontal data-stream lines, 8 parallel rules with varying dash patterns, gradient from transparent to neo-mint cyan #5EEAD4. Designed to animate stroke-dashoffset. |
| B-17 | `public/images/sample-b/sb-grid-overlay.svg` | viewBox 1920×1080 | SVG | SVG only. Subtle perspective grid pattern, 80×80 unit cells, 1px stroke, opacity 0.06, perspective converging toward the upper center, tileable horizontally. |
| B-18 | `public/og/sample-b.webp` | 1200×630 | WebP | Wide cinematic dark background with a single glowing neo-mint grid line crossing the frame diagonally, soft particles, generous negative space on the right. |

---

## 5. サンプル C — Editorial Botanical (エディトリアル・上質・タイポ駆動)

世界観: 雑誌の特集ページのような誌面感。色はアイボリー `#F7F4EC` / 深緑 `#2F5233` / マスタード `#C9A227`。彩度を落とした写真と細い罫線。
**追加ネガティブ**: `saturated colors, neon, cyberpunk`

| # | ファイル名 | サイズ | フォーマット | プロンプト |
|---|---|---|---|---|
| C-01 | `public/images/sample-c/sc-hero-botanical-large.webp` | 2400×3200 | WebP | Editorial photography. A single large fern leaf placed on textured ivory paper, top-down composition with generous negative space, soft directional studio light from upper left, faint shadows. Color treatment: desaturated film, with subtle deep-green tint #2F5233 in the shadows. Magazine cover feel, museum-quality composition. |
| C-02 | `public/images/sample-c/sc-editor-portrait.webp` | 1200×1600 | WebP | Editorial still life. A small botanical specimen pressed between glass plates resting on an ivory desk, soft window light, archival mood, slight green tint, museum aesthetic. |
| C-03 | `public/images/sample-c/sc-strength-01.webp` | 1200×1500 | WebP | Editorial still life of three different leaf specimens arranged in a row on ivory paper, taxonomy-book style, very fine deep-green tint, generous margins, suitable as a magazine inside page image. |
| C-04 | `public/images/sample-c/sc-strength-02.webp` | 1200×1500 | WebP | Editorial still life of three identical sprouts at different stages, arranged in a column, herbarium-style on ivory paper, fine grain film texture, deep green tint. |
| C-05 | `public/images/sample-c/sc-strength-03.webp` | 1200×1500 | WebP | Editorial still life of a single fresh seedling in a small terracotta pot photographed from above on ivory paper, soft window light, fine grain. |
| C-06 | `public/images/sample-c/sc-preview-screen-builder.webp` | 1600×2000 | WebP | Editorial photograph of an architect's drafting table with botanical leaves arranged into a modular grid pattern, soft natural light, desaturated film with deep green tint, ivory tones dominate. |
| C-07 | `public/images/sample-c/sc-preview-management.webp` | 1600×2000 | WebP | Editorial photograph of an apothecary cabinet of stylized leaf specimens, viewed straight-on, soft natural light, archival mood, deep green tint. |
| C-08 | `public/images/sample-c/sc-screen-builder-hero.webp` | 2400×3200 | WebP | Editorial vertical composition. A single ginkgo leaf placed at the right third of an ivory paper, generous negative space on the left for typographic overlay, museum-quality, deep green tint. |
| C-09 | `public/images/sample-c/sc-template-still-life.webp` | 1600×1600 | WebP | Square editorial still life of four distinct leaves arranged neatly in a 2x2 grid on ivory paper, taxonomy style, equal spacing, soft shadow, desaturated film. |
| C-10 | `public/images/sample-c/sc-excel-spread.webp` | 2400×1200 | WebP | Wide horizontal editorial spread. Left half: a folded paper grid sheet on ivory paper. Right half: stylized leaves arranged in the same grid pattern. Soft window light, archival mood, deep green tint. |
| C-11 | `public/images/sample-c/sc-management-hero.webp` | 2400×3200 | WebP | Editorial vertical composition. A monstera leaf placed centered low on ivory paper, generous negative space above for typographic overlay, gallery aesthetic. |
| C-12 | `public/images/sample-c/sc-chapter-fern-line.svg` | viewBox 600×900 | SVG | SVG line drawing of a fern frond, 1.2px stroke, deep green #2F5233, no fill, elegant minimal line art suitable for chapter openers. |
| C-13 | `public/images/sample-c/sc-rule-asterism.svg` | viewBox 120×80 | SVG | SVG asterism (three asterisks arranged in a triangle), refined serif aesthetic, deep green #2F5233 color. |
| C-14 | `public/og/sample-c.webp` | 1200×630 | WebP | Editorial wide OGP banner. A single fern leaf at the left, ivory background, generous negative space on the right for typographic overlay, deep green tint, fine grain. |

---

## 6. メインページ (`/`) 用画像 — ニュートラルトーン

メインページは 3 サンプルへ送る中立な選択画面。色は `#FAFAFA` / `#1B1F1B` / アクセント `#2F5233` のみ。
各サンプルへの誘導カードに使うキービジュアル 3 枚 + OGP 1 枚。

| # | ファイル名 | サイズ | フォーマット | プロンプト |
|---|---|---|---|---|
| L-01 | `public/images/landing/landing-card-a.webp` | 1200×900 | WebP | Soft minimal vignette suggesting watercolor botanical world, single curled leaf on cream paper, generous negative space, neutral magazine style. (サンプル A への導入カードのため、本気で水彩を出さずヒントに留める) |
| L-02 | `public/images/landing/landing-card-b.webp` | 1200×900 | WebP | Soft minimal vignette suggesting a dark futuristic interface, single glowing neo-mint cyan line tracing a curve on a near-black background, generous negative space, restrained mood. |
| L-03 | `public/images/landing/landing-card-c.webp` | 1200×900 | WebP | Soft minimal vignette suggesting editorial print, a small pressed leaf in upper third of an ivory paper composition, generous negative space, magazine aesthetic, desaturated. |
| L-04 | `public/og/landing.webp` | 1200×630 | WebP | Wide OGP banner. Three vertical color swatches arranged horizontally — left a soft forest green, center a deep navy with a faint neo-mint trace, right an ivory tone with a small leaf hint. Subtle hairline rules between them. Neutral and refined. |

---

## 7. 生成プロセスの推奨手順

1. **環境準備**: ディレクトリを生成 (`public/images/sample-a` 等)
2. **サンプル単位で世界観を固定**: A → B → C の順に生成し、サンプル間でプロンプトを混ぜない
3. **各画像はファイル名通りに保存** (codex 側で改名しない)
4. **WebP 変換と最適化**: 生成後に 300KB 以下に圧縮
5. **チェック**:
   - サイズ / フォーマット / 透過要件を満たすか
   - テキスト・ロゴが描画されていないか
   - サンプル C の写真群で色調が揃っているか
6. **報告**: 生成不可だった画像があれば、その #ID と理由を一覧で返却

---

## 8. 失敗時のフォールバック

- Lottie (A-15) が生成不可な場合: 静止画 A-02 を CSS keyframes で動かす設計に切替。本ファイルから A-15 行を削除して通知。
- 解像度が指定に満たない場合: 上位解像度で生成し、後段で縮小すること。逆方向 (Upscaler 拡大) はノイズが乗るため避ける。
- 透過 PNG (A-02) が透過処理に失敗した場合: アルファチャンネル付きで再生成。

---

## 9. 命名チェックリスト

すべてのファイルを生成し終えたら、以下を満たしているか確認:

- [ ] `public/images/sample-a/` に 14 枚 (A-01〜A-14 のうち WebP/PNG/SVG)
- [ ] `public/images/sample-a/sa-leaf-animation.json` (A-15) — Lottie が生成できた場合のみ
- [ ] `public/og/sample-a.webp` (A-16)
- [ ] `public/images/sample-b/` に 17 枚 (B-01〜B-17)
- [ ] `public/og/sample-b.webp` (B-18)
- [ ] `public/images/sample-c/` に 13 枚 (C-01〜C-13)
- [ ] `public/og/sample-c.webp` (C-14)
- [ ] `public/images/landing/` に 3 枚 (L-01〜L-03)
- [ ] `public/og/landing.webp` (L-04)

総枚数: 約 51 枚 (A-15 を含めると 52 枚)
