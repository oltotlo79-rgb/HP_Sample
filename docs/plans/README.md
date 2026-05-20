# サンプルデザイン指示書 インデックス

このディレクトリには 3 つのデザインサンプルそれぞれに対する **デザイン仕様 + 画像生成指示書** が格納されています。

| ファイル | サンプル | 方向性 | 主軸カラー |
|---|---|---|---|
| [sample-a-organic-forest.md](./sample-a-organic-forest.md) | A | Organic Forest (有機的・自然・あたたかさ) | `#1B4332` / `#95D5B2` / `#FAF3E0` |
| [sample-b-neo-mint-glass.md](./sample-b-neo-mint-glass.md) | B | Neo Mint Glass (近未来・サイバー・3D グラスモーフィズム) | `#0A0E1A` / `#5EEAD4` / `#06B6D4` |
| [sample-c-editorial-botanical.md](./sample-c-editorial-botanical.md) | C | Editorial Botanical (エディトリアル・ミニマル・タイポ駆動) | `#2F5233` / `#F7F4EC` / `#C9A227` |
| [codex-image-generation.md](./codex-image-generation.md) | (全) | codex に直接読ませる一括画像生成指示書 | — |
| [sa-architecture-images.md](./sa-architecture-images.md) | A の §03 | Architecture セクションのメインイラストを画像に差し替える詳細指示書 | — |

---

## 共通事項

### 画像生成のお願い (codex 等)
- 生成 AI で作成した画像は `public/images/sample-{a|b|c}/` に配置する
- ファイル名は `s{a|b|c}-{section}-{purpose}.{webp|png|svg}` 形式
- 出力フォーマット: 写真風は WebP (品質 85)、UI モチーフ・線画は SVG または透過 PNG
- 1 枚あたりのファイルサイズ目安: 300KB 以下
- すべてのプロンプトは下記の各サンプルファイルで「指示書」セクションとして明記
- 画像内に **製品名 / 会社名 / 日本語テキストを描画させない** (誤字防止)
- 人物を含める場合は写実性を抑えた抽象的な表現とし、特定人物を生成しない
- 文化的中立性を保つ (特定の宗教・民族表現を避ける)

### ネガティブプロンプト共通指針
`text, letters, watermark, logo, signature, blurry, distorted, lowres, jpeg artifacts, extra fingers, deformed hands, low quality`

### サイズの呼称ルール
| 呼称 | サイズ (幅×高さ px) | 用途 |
|---|---|---|
| `hero-wide` | 2880 × 1620 | ヒーロー背景 (Retina 1440 表示想定) |
| `hero-square` | 1600 × 1600 | 縦長レイアウト用ヒーロー |
| `feature-card` | 1200 × 900 | カード型サムネイル (4:3) |
| `feature-wide` | 1600 × 900 | 横ワイド説明画像 (16:9) |
| `accent-square` | 800 × 800 | アクセント用カット |
| `motif-svg` | 任意 (vector) | 装飾モチーフ・パターン |
| `og-image` | 1200 × 630 | OGP / Twitter Card |

### 配置先テーブル
| 用途 | パス例 |
|---|---|
| Hero 背景 | `public/images/sample-a/sa-hero-leaf-bg.webp` |
| 機能カードサムネ | `public/images/sample-a/sa-card-screen-builder.webp` |
| モチーフ | `public/images/sample-a/sa-motif-wave.svg` |
| OGP | `public/og/sample-a.webp` |
