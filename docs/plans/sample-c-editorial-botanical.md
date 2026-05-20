# Sample C — Editorial Botanical (エディトリアル・ミニマル・タイポ駆動)

最終更新: 2026-05-19
パス: `/sample-c` , `/sample-c/screen-builder` , `/sample-c/management`

---

## 1. コンセプト

「雑誌の 1 冊を読み解くように、業務の本質に近づく」。
スイス・エディトリアルデザインを下敷きに、大胆な余白・洗練されたタイポグラフィ・ナンバリング・印刷物的なグリッドで「上質さ」を表現する。緑は知性と落ち着きの象徴として深く落とし、植物の写真や線画を編集的に配置する。

### キャッチコピー候補
- メインページからの導線: 「Editorial — 上質な業務、整った思考。」
- Hero: 「業務に、構造と余白を。」
- 副題: 「読むように向き合う、コンタクトセンター CRM のあたらしい姿。」

---

## 2. デザイントークン

### 2.1 カラー
| トークン | 値 | 用途 |
|---|---|---|
| `--color-canvas` | `#F7F4EC` | ベース背景 (アイボリー) |
| `--color-paper` | `#EFE9D9` | セクション背景の差分 |
| `--color-deep` | `#2F5233` | 主要見出し / 線 |
| `--color-ink` | `#1B1F1A` | 本文 |
| `--color-moss` | `#4F6F52` | 補助 |
| `--color-mustard` | `#C9A227` | アクセント (引用・数字・下線) |
| `--color-rule` | `rgba(47,82,51,.18)` | 罫線 |

コントラスト: `--color-ink` on `--color-canvas` = 12.8:1。

### 2.2 タイポグラフィ
- 見出し (和文): **Noto Serif JP** (Light 300 + Bold 700 のコントラスト運用)
- 見出し (欧文): **Fraunces** (Variable, 200-900、Optical Size を見出しサイズに応じて変える)
- 本文 (和文): **Shippori Mincho B1** または **Noto Serif JP** Regular
- 本文 (欧文): **Schibsted Grotesk** (400/500)
- 数字: Fraunces (Old-style numerals) + ナンバリングは Schibsted Grotesk

### 2.3 グリッドとリズム
- 12 カラム / ガター 24px / マージン 80px (PC) / 24px (SP)
- ベースライン 8px、行高はベースラインスナップ
- セクション間: 160px (PC) / 96px (SP)
- 全ページ上部に薄い罫線で「号数 / 章番号 / 通巻」のメタ情報を配置 (誌面の柱)

### 2.4 装飾
- 鋭利な hairline 罫線 (1px solid `--color-rule`)
- 章番号は Big Display サイズ (200-280px) でカット感を持たせる
- アニメーションは控えめだが演出は強い (Cinematic な静止)

---

## 3. ページレイアウト

### 3.1 トップ ( `/sample-c` )

```
┌─────────────────────────────────────────────┐
│ vol.01 / quickcrm  ───────  ISSUE 2026.05   │
│ NAV  Index  Sample-A  Sample-B  Sample-C    │
├─────────────────────────────────────────────┤
│  HERO                                       │
│   ・大判の植物写真 (B&W トーン + 緑のかすかな影)│
│   ・大胆な縦書き日本語見出し + 欧文サブ        │
│   ・小さな号数表記                            │
├─────────────────────────────────────────────┤
│  EDITOR'S NOTE (slide 2 内容)                │
│   ・左 1/3 リード, 右 2/3 大判本文            │
├─────────────────────────────────────────────┤
│  INDEX OF STRENGTHS (slide 3)               │
│   1. 豊富な利用形態 ─── p.02                 │
│   2. 柔軟な開発手法 ─── p.03                 │
│   3. 手軽に導入可能 ─── p.04                 │
├─────────────────────────────────────────────┤
│  FEATURE PREVIEW                            │
│   左半分: Screen Builder の引用 + 大判写真    │
│   右半分: Management の引用 + 大判写真        │
├─────────────────────────────────────────────┤
│  COLOPHON / FOOTER (会社情報・連絡先)         │
└─────────────────────────────────────────────┘
```

### 3.2 業務画面作成機能 ( `/sample-c/screen-builder` )
- 雑誌の特集ページ風レイアウト
- 章番号 1 章: 自由度の高い画面作成 (大判写真 + 引用 + 3 ステップ)
- 章番号 2 章: テンプレートを用いた画面作成 (4 種を版面の Index 風に並べる)
- 章番号 3 章: Excel を用いた画面作成 (Spread レイアウト)
- 各章末に「特徴」を Lead 体の箇条書きで配置

### 3.3 管理機能 ( `/sample-c/management` )
- 5 機能群をそれぞれ「章」として版組
- 各章の冒頭に Drop Cap (落とし文字)
- サブ項目は インデント付き箇条書きで誌面感
- 文末に「必要な機能だけを選択可能」を Pull Quote (引用) で大写し

---

## 4. アニメーション仕様

| 場所 | 種類 | 実装 |
|---|---|---|
| Hero 見出し | 文字単位でマスクスライド (line by line) | GSAP SplitText + ScrollTrigger |
| ページ遷移 | 縦の縞 wipe + クロスフェード | App Router `template.tsx` + Framer |
| INDEX OF STRENGTHS | ナンバリングがスクロールでカウントアップ | GSAP ScrollTrigger |
| FEATURE PREVIEW | 写真がパララックスで縦にシフト | GSAP ScrollTrigger |
| 機能ページの章ナンバー | スクロールで巨大数字が pin される | GSAP ScrollTrigger `pin` |
| Drop Cap | viewport 入りで文字が拡大→収束 | GSAP timeline |
| Pull Quote | 引用線が左から右に伸びる | SVG stroke + ScrollTrigger |
| 写真 hover | グレースケール→緑トーン (微妙な色味) | CSS filter transition |
| reduced-motion | アニメ停止、写真は静的、テキストは即時表示 | `prefers-reduced-motion` |

---

## 5. 画像生成指示書 (codex 用プロンプト)

> 共通ネガティブ: `text, letters, watermark, logo, signature, blurry, lowres, jpeg artifacts, extra fingers, deformed hands, low quality, saturated colors, neon, cyberpunk`

### 配置一覧

| # | ファイル名 | サイズ | 用途 / 配置先 | フォーマット |
|---|---|---|---|---|
| C-01 | `sc-hero-botanical-large.webp` | 2400×3200 | Hero 縦長メインカット | WebP |
| C-02 | `sc-editor-portrait.webp` | 1200×1600 | エディターズノート右側 | WebP |
| C-03 | `sc-strength-01.webp` | 1200×1500 | 強み 1 写真 | WebP |
| C-04 | `sc-strength-02.webp` | 1200×1500 | 強み 2 写真 | WebP |
| C-05 | `sc-strength-03.webp` | 1200×1500 | 強み 3 写真 | WebP |
| C-06 | `sc-preview-screen-builder.webp` | 1600×2000 | プレビュー左半分 | WebP |
| C-07 | `sc-preview-management.webp` | 1600×2000 | プレビュー右半分 | WebP |
| C-08 | `sc-screen-builder-hero.webp` | 2400×3200 | 機能ページ Hero | WebP |
| C-09 | `sc-template-still-life.webp` | 1600×1600 | テンプレート 4 種 静物 | WebP |
| C-10 | `sc-excel-spread.webp` | 2400×1200 | Excel 章スプレッド | WebP |
| C-11 | `sc-management-hero.webp` | 2400×3200 | 管理機能ページ Hero | WebP |
| C-12 | `sc-chapter-fern-line.svg` | vector | 章扉の植物線画 | SVG |
| C-13 | `sc-rule-asterism.svg` | vector | 章間アスタリスム ( ⁂ ) | SVG |
| C-14 | `sc-og-image.webp` | 1200×630 | OGP | WebP (`/public/og/sample-c.webp`) |

### プロンプト集

#### C-01 `sc-hero-botanical-large.webp` (2400×3200)
> Editorial photography. A single large fern leaf placed on textured ivory paper, top-down composition with generous negative space, soft directional studio light from upper left, faint shadows. Color treatment: desaturated film, with subtle deep-green tint #2F5233 in the shadows. Magazine cover feel, museum-quality composition, no text.

#### C-02 `sc-editor-portrait.webp` (1200×1600)
> Editorial still life. A small botanical specimen pressed between glass plates resting on an ivory desk, soft window light, archival mood. Slight green tint, museum aesthetic, no people, no text.

#### C-03 `sc-strength-01.webp` (1200×1500) — 豊富な利用形態
> Editorial still life of three different leaf specimens arranged in a row on ivory paper, taxonomy-book style, very fine deep-green tint, generous margins, suitable as a magazine inside page image.

#### C-04 `sc-strength-02.webp` (1200×1500) — 柔軟な開発手法
> Editorial still life of three identical sprouts at different stages, arranged in a column, herbarium-style on ivory paper, fine grain film texture, deep green tint.

#### C-05 `sc-strength-03.webp` (1200×1500) — 手軽に導入可能
> Editorial still life of a single fresh seedling in a small terracotta pot photographed from above on ivory paper, soft window light, fine grain.

#### C-06 `sc-preview-screen-builder.webp` (1600×2000)
> Editorial photograph of an architect's drafting table with botanical leaves arranged into a modular grid pattern, soft natural light, desaturated film with deep green tint, ivory tones dominate.

#### C-07 `sc-preview-management.webp` (1600×2000)
> Editorial photograph of an apothecary cabinet of stylized leaf specimens, viewed straight-on, soft natural light, archival mood, deep green tint.

#### C-08 `sc-screen-builder-hero.webp` (2400×3200)
> Editorial vertical composition. A single ginkgo leaf placed at the right third of an ivory paper, generous negative space on the left for typographic overlay, museum-quality, no text, deep green tint.

#### C-09 `sc-template-still-life.webp` (1600×1600)
> Square editorial still life of four distinct leaves arranged neatly in a 2x2 grid on ivory paper, taxonomy style, equal spacing, soft shadow, desaturated film.

#### C-10 `sc-excel-spread.webp` (2400×1200)
> Wide horizontal editorial spread. Left half: a folded paper grid sheet on ivory paper. Right half: stylized leaves arranged in the same grid pattern. Soft window light, archival mood, deep green tint.

#### C-11 `sc-management-hero.webp` (2400×3200)
> Editorial vertical composition. A monstera leaf placed centered low on ivory paper, generous negative space above for typographic overlay, gallery aesthetic, no text.

#### C-12 `sc-chapter-fern-line.svg`
> SVG line drawing of a fern frond, 600×900 viewBox, 1.2px stroke, deep green #2F5233, no fill, elegant minimal line art suitable for chapter openers.

#### C-13 `sc-rule-asterism.svg`
> SVG asterism (three asterisks ⁂ arranged in a triangle), refined serif aesthetic, deep green color, 120×80 viewBox.

#### C-14 `sc-og-image.webp` (1200×630)
> Editorial wide OGP banner. A single fern leaf at the left, ivory background, generous negative space on the right for typographic overlay, deep green tint, fine grain.

---

## 6. コンポーネント設計

| コンポーネント | パス | 説明 |
|---|---|---|
| `MagazineHeader` | `src/components/sample-c/MagazineHeader.tsx` | vol/issue メタ + ナビ |
| `EditorialHero` | `src/components/sample-c/EditorialHero.tsx` | Hero |
| `IndexList` | `src/components/sample-c/IndexList.tsx` | INDEX セクション |
| `PullQuote` | `src/components/sample-c/PullQuote.tsx` | 引用 |
| `ChapterPin` | `src/components/sample-c/ChapterPin.tsx` | 巨大章番号の pin |
| `Spread` | `src/components/sample-c/Spread.tsx` | 見開き 2 カラム |
| `Colophon` | `src/components/sample-c/Colophon.tsx` | フッター |

---

## 7. アクセシビリティ留意
- 写真の `alt` は説明的 (例: 「アイボリー紙の上に置かれた一枚の大きなシダの葉」)
- 章番号は装飾なので `aria-hidden="true"` , 内容自体は `<h2>` で確保
- GSAP のテキスト分割は SR (スクリーンリーダー) のために原文をそのまま `aria-label` に保持
- Drop Cap は CSS `::first-letter` で実装し、DOM 上は通常テキスト

---

## 8. 受入基準
- スクロール中に章番号が滑らかに pin され、内容との読み合わせができる
- 写真の色味が 3 ページ間で統一されている (deep green tint)
- 紙面感を損なわないため、影や角丸を多用しない
- Lighthouse Performance 90+ (デスクトップ)
- 印刷ボタン押下時にも誌面感が保たれるよう `@media print` を整える (任意)
