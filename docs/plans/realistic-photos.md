# リアル写真風 画像生成指示書

最終更新: 2026-05-20
対象: 全 3 サンプル × 各セクション
読込元: 主に `src/components/sample-{a|b|c}/*.tsx` および `src/app/sample-{a|b|c}/**/page.tsx`
配置先: `public/images/photos/`

---

## 0. 目的

各サンプルの SVG / イラスト主体の構成に **編集写真品質のリアルなフォト** をレイヤとして加え、AI 量産的な「平面+幾何+ベタ塗り」の印象を払拭する。トップ・ティアのプロダクトサイト (Apple / Stripe / Linear / Granola) が用いる "編集写真+理にかなった余白" の水準を狙う。

本指示書は **写真風 (photoreal)** 画像のみを対象とする。ボタニカル・イラストや幾何学的素材は別ファイル (`codex-image-generation.md` / `sa-architecture-images.md`) を参照。

---

## 1. 共通原則 (重要)

すべての写真が以下を満たすこと。

### 1.1 撮影品質
- フルフレーム一眼レフ / ミラーレス (Canon R5 / Sony A7R V 相当) の **35〜85mm 単焦点レンズ** で撮影されたような自然な歪み・被写界深度。
- センサーノイズは ISO 200〜400 程度の自然な粒状感を残す。スマホ画質や HDR の過剰補正は避ける。
- **照明**: 自然光主体 (窓からの斜光) + 必要に応じて 1〜2 灯のソフトボックス補光。直射の硬影は避け、柔らかいハイライトと締まった影。
- **色温度**: 5000〜5600K の自然なホワイトバランス。極端な暖色 / 寒色フィルタはかけない (※サンプル別の色調整は §3 参照)。

### 1.2 構図と被写体
- **編集写真の文法**: ルール・オブ・サーズ、ネガティブスペースの確保、被写体の視線誘導。
- **被写体**:
  - 必ず **「コンタクトセンター業務」** を匂わせる小道具を含む (ヘッドセット・モニター・電話・タブレット・付箋・コーヒー・ペンなど)
  - 人物は顔がはっきり判別できないアングル (背中越し / 肩越し / 手元クローズアップ / シルエット / 顔の一部のみ)。**プライバシー配慮と AI イメージ感の排除のため**、顔の精細描画は避ける。
- **小道具のリアリティ**: 画面に映る UI は具体的なソフト名 / ロゴが入らないモック。書類 / 付箋の文字は読めない程度のぼかし。

### 1.3 禁止事項
- 画面内に文字・透かし・ロゴ・サイン・URL を描画しない (実装側でラベルを重ねる)。
- 過剰な彩度・コントラスト・露出。HDR トーンマッピング感。
- ステレオタイプの "AI 風コールセンター" 表現 (笑顔のヘッドセット女性を真正面から強照明、原色背景など)。
- 既存ブランド (Avaya / Genesys 等) のロゴが映り込むカット。
- 特定の人物 (実在モデル)・特定のオフィスに見える固有要素。

### 1.4 命名規則
```
public/images/photos/<sample>/<purpose>.webp
```
例: `public/images/photos/sample-a/operator-warm.webp`

WebP / 品質 88、上限 600 KB を目安。Retina 対応で実表示寸法の 2 倍を生成。

### 1.5 共通ネガティブプロンプト
```
text, letters, numbers, captions, watermark, logo, signature, ui labels,
brand names, identifiable faces, posed studio smile, generic call-center
stock cliché, oversaturated, hdr halo, neon, plastic skin, ai uncanny,
extra fingers, deformed hands, low resolution, jpeg artifacts, banding,
duplicate items, surreal lighting, cgi look
```

---

## 2. サンプル別カラートーン (color grading)

各サンプルで一貫した色味で撮ること。Codex には **末尾に「Color grading: …」** を必ず付ける。

| サンプル | 色味の方向 |
|---|---|
| A (Organic Forest) | Warm midtones, slightly muted greens, cream highlights. Tungsten tint in shadows. Film stock similar to Kodak Portra 400. |
| B (Neo Mint Glass) | Cool shadows, deep navy / charcoal, accent cyan-mint. Mood lit. Slight teal-orange contrast, restrained. |
| C (Editorial Botanical) | Neutral / slightly desaturated, magazine print look. Ivory paper highlights, deep forest greens in shadow. Fine grain. |

---

## 3. 画像一覧と詳細仕様

### 3.1 サンプル A — Organic Forest (warm / human-centered)

| # | ファイル名 | 寸法 | 用途 / 配置 |
|---|---|---|---|
| A-P-01 | `photos/sample-a/operator-warm.webp` | 2400 × 1500 | 上書きで Hero 背景に重ねる写真層 (`src/components/sample-a/LeafHero.tsx`) |
| A-P-02 | `photos/sample-a/strength-scale.webp` | 1600 × 1200 | StrengthCard #1「豊富な利用形態」差替 |
| A-P-03 | `photos/sample-a/strength-flex.webp` | 1600 × 1200 | StrengthCard #2「柔軟な開発手法」差替 |
| A-P-04 | `photos/sample-a/strength-quick.webp` | 1600 × 1200 | StrengthCard #3「手軽に導入可能」差替 |
| A-P-05 | `photos/sample-a/video-still.webp` | 2400 × 1350 | VideoBoard のサムネ差替 (`VideoBoard.tsx`) |
| A-P-06 | `photos/sample-a/editions-room.webp` | 2400 × 1500 | EditionsBoard 横の風景 (規模感) |

#### A-P-01 · operator-warm.webp

```
A wide-angle editorial photograph of a contact center workspace shot
from behind an operator's shoulder. The operator wears a slim
headset; only the side of the head and one ear are visible — no
facial features. On the wooden desk: an open laptop with a soft,
generic CRM interface (no readable text), a ceramic mug of coffee
steaming gently, a closed notebook, and a small potted plant. Warm
late-afternoon window light spills in from the right, creating soft
golden hotspots on the wood and a long, soft shadow behind the
monitor. The background is a softly defocused open-plan office with
a hint of plants and natural materials, NOT a sterile corporate
space. Shot at 35mm f/2.8, ISO 320, natural skin tones, gentle film
grain. Color grading: Kodak Portra 400, warm midtones, muted greens
in the bokeh.
```

#### A-P-02 · strength-scale.webp

```
A top-down editorial flat lay on a cream linen desk surface. Three
matte ceramic cups of varying sizes (small, medium, large) lined
up with mathematical care, suggesting Entry / Standard / Advanced
scale. A small fresh fern leaf rests beside the largest cup. Warm
diffuse window light from upper-left. Shot on 50mm f/4, fine film
grain. Color grading: Portra 400 warm midtones, restrained.
```

#### A-P-03 · strength-flex.webp

```
A close-up editorial photograph of two hands (caucasian / asian
mix-skin ambiguous, no jewelry, neutral) arranging modular wooden
blocks on a cream desk surface as if planning a layout. The blocks
form a partial grid; some are stacked, some rotated. A linen napkin
and a small fountain pen sit nearby. Warm window light from upper-
right, shallow depth of field on the foreground blocks. Shot on 50mm
f/2.0. Color grading: Portra 400, warm gentle.
```

#### A-P-04 · strength-quick.webp

```
A side-angle editorial photograph of a sprout in a small terracotta
pot photographed against a cream paper backdrop, with a single
crisp shadow falling to the right. Slight motion blur on one leaf
as if it just settled. A folded square of cream paper sits nearby.
Warm window light, Portra 400 grading. 50mm f/4.
```

#### A-P-05 · video-still.webp

```
A close-up editorial photograph of a laptop screen displaying a
soft, blurred CRM-like interface (abstract shapes, color blocks,
no readable text). The frame includes the laptop bezel, a corner
of a notebook, and a few green leaves out of focus in the bokeh
background. Warm 4500K, gentle film grain, 50mm f/2.8.
```

#### A-P-06 · editions-room.webp

```
A wide editorial photograph of an open-plan contact-center workspace
with multiple desks of varying sizes visible in soft layered focus.
No people in frame. Wooden surfaces, brass accents, several potted
plants on a low shelf. Late golden afternoon window light from the
right. Shot on 35mm f/4. Color grading: Portra 400, warm midtones.
```

---

### 3.2 サンプル B — Neo Mint Glass (cool / futurist / restrained)

| # | ファイル名 | 寸法 | 用途 / 配置 |
|---|---|---|---|
| B-P-01 | `photos/sample-b/hero-monitors.webp` | 2880 × 1620 | Hero 背景上のフォト層 (`QuantumHero.tsx`) |
| B-P-02 | `photos/sample-b/control-room.webp` | 2400 × 1500 | Architecture セクション挿入用 |
| B-P-03 | `photos/sample-b/bento-call-detail.webp` | 1600 × 1200 | Bento #2 差替候補 |
| B-P-04 | `photos/sample-b/bento-realtime.webp` | 1600 × 1200 | Bento #3 差替候補 |
| B-P-05 | `photos/sample-b/video-still.webp` | 2400 × 1350 | VideoBoard サムネ |

#### B-P-01 · hero-monitors.webp

```
A cinematic, low-light editorial photograph of a curved multi-
monitor setup viewed from a 45° rear-side angle. The screens display
soft, blurred dashboards (no readable text), with mostly mint-cyan
and aqua highlights against deep navy. A sleek mechanical keyboard
and a single tactile knob sit on a matte black desk. Atmospheric
haze in the background, suggesting a quiet 24/7 operations center.
Shot on 35mm f/2.0, ISO 800, very slight motion blur, restrained
contrast. Color grading: cool shadows #0A0E1A, accent mint #5EEAD4,
no warm highlights. Mood: focused, calm, technological.
```

#### B-P-02 · control-room.webp

```
A wide, low-key editorial photograph of a modern operations control
room. Several screens visible at different depths showing soft data
visualizations (abstract waves, dotted maps, no text). A single
hooded figure visible only as a back silhouette in mid-frame. Cool
ambient teal-cyan lighting from above, deep navy walls. No glaring
highlights. Shot on 35mm f/4. Color grading: cool desaturated,
mint-cyan accent, charcoal shadows.
```

#### B-P-03 · bento-call-detail.webp

```
A macro editorial photograph of a slim wireless headset resting on a
dark glass surface. Subtle mint-cyan rim light catches one earcup;
the boom mic extends toward the right of frame, partially out of
focus. The background is a soft gradient of deep navy fading to
charcoal. Shot on 100mm macro f/4. Color grading: cool, restrained,
single accent.
```

#### B-P-04 · bento-realtime.webp

```
A close-up editorial photograph of a single sleek tablet leaning
against a matte black stand, displaying a softly blurred line chart
in mint and cyan (no text). A thin line of mint LED light along
the desk edge. Atmospheric cool tones, gentle reflection on the
glossy tablet face. 50mm f/2.8.
```

#### B-P-05 · video-still.webp

```
A wide screenshot-style editorial photograph of a curved monitor
displaying an abstract dashboard (color blocks, soft waveforms,
mint-cyan accents, no text). The reflection on the monitor surface
hints at a window with city night lights, very softly defocused.
Cool color grading, focused mood.
```

---

### 3.3 サンプル C — Editorial Botanical (neutral / publication-grade)

| # | ファイル名 | 寸法 | 用途 / 配置 |
|---|---|---|---|
| C-P-01 | `photos/sample-c/editorial-spread.webp` | 2400 × 1800 | Editor's Note セクションの差し色 |
| C-P-02 | `photos/sample-c/strength-team.webp` | 1600 × 2000 | IndexList の冒頭挿入用 |
| C-P-03 | `photos/sample-c/chapter-hands.webp` | 1600 × 2000 | ChapterPin #1 (自由配置) スプレッド差色 |
| C-P-04 | `photos/sample-c/chapter-template.webp` | 1600 × 2000 | ChapterPin #2 (テンプレート) スプレッド差色 |
| C-P-05 | `photos/sample-c/chapter-excel.webp` | 1600 × 2000 | ChapterPin #3 (Excel) スプレッド差色 |
| C-P-06 | `photos/sample-c/video-still.webp` | 2400 × 1350 | VideoBoard サムネ |

#### C-P-01 · editorial-spread.webp

```
A top-down editorial photograph of an open magazine on an ivory
desk surface, partially overlapping a closed black notebook, a fine
fountain pen, and a single sprig of fresh herb. The magazine pages
contain blurred greyscale layouts (no readable text), suggesting a
serious editorial publication. Soft diffuse window light from the
top-left. Magazine-quality color grading, slight desaturation, fine
film grain. Shot on 50mm f/4.
```

#### C-P-02 · strength-team.webp

```
A vertical editorial photograph of a small workspace corner: a
single chair pulled back from a wooden desk, a closed laptop, a
folded grey scarf draped over the chairback, and a ceramic mug with
steam barely rising. Late-afternoon north-facing window light, no
direct sun. Slight desaturation, museum-quiet mood. Shot on 35mm f/4.
```

#### C-P-03 · chapter-hands.webp

```
A vertical close-up editorial photograph of a pair of hands placing
small wooden component pieces on a paper grid (architect's plan).
Only the hands and forearms are visible, in soft natural light. A
mechanical pencil and a metal ruler lie nearby. Magazine grading,
ivory paper highlights, deep green tint in shadows. 50mm f/2.8.
```

#### C-P-04 · chapter-template.webp

```
A vertical editorial top-down photograph of four small folded paper
"templates" arranged neatly on an ivory desk. Each piece is a
different geometric pattern (no text). A linen napkin and a single
green leaf rest beside them. Magazine grading. 50mm f/4.
```

#### C-P-05 · chapter-excel.webp

```
A vertical editorial photograph of a partial view of a laptop screen
displaying a softly blurred spreadsheet-like grid (no readable text,
just colored cells). The corner of a leather notebook and a paper
clip rest beside the laptop. Ivory desk, magazine grading. 35mm f/4.
```

#### C-P-06 · video-still.webp

```
A wide editorial photograph of a clean studio desk with a flat-
panel monitor in the center displaying a softly blurred interface
(no text). A single fern leaf rests in front of the monitor stand.
Northern soft light. Magazine grading, slight grain.
```

---

## 4. 生成後の取り扱い

1. 受領した画像を §1.4 のパス命名に従って配置 (`public/images/photos/<sample>/<purpose>.webp`)。
2. `cwebp -q 88` で WebP 変換。600 KB を超えた場合 `q=82` まで段階下げ。
3. 各画像の検収項目:
   - 文字・ロゴ・透かしが入っていないか
   - 人物の顔が判別できないか
   - 色味がサンプルのトーンに合っているか (§2)
   - AI ぽさ (プラスチック肌・neon・浮き影など) が出ていないか
4. 実装側はパスを `Image` の `src` に渡すだけ。フォールバック画像は SVG ベタが既にあるため、未配置でも表示崩れはしない (画像が来た時点で差し替える前提)。

---

## 5. 実装側差し替えの参考スニペット

```tsx
// 例: StrengthCard に photo を渡す
const STRENGTH_PHOTOS = [
  "/images/photos/sample-a/strength-scale.webp",
  "/images/photos/sample-a/strength-flex.webp",
  "/images/photos/sample-a/strength-quick.webp",
];

<Image
  src={STRENGTH_PHOTOS[index]}
  alt=""
  fill
  sizes="(min-width: 768px) 30vw, 100vw"
  className="object-cover"
/>
```

`alt` は装飾画像のため空文字で良いが、本文中で代替できないものは適切な説明を入れる。

---

## 6. 一流デザイナー水準の補足ガイド

写真選定で **AI 量産っぽさを避ける** ためのチェック:

- ❌ "笑顔のヘッドセット女性正面" "原色背景の握手" "巨大グラフ画面前のCEO風"
- ❌ ステレオタイプなコールセンター画像 (列んだオペレーター越し)
- ❌ 過度に整理された "デモ用デスク"
- ✅ 後ろ姿・手元・道具のクローズアップ
- ✅ 自然光・実在感のある散らかり・小道具
- ✅ 業務の "気配" を見せ "業務そのもの" は見せない (画面の文字は読めない、ロゴは入らない)
- ✅ 一枚で完結する物語 (撮影者が現場にいたような臨場感)

これらは The New York Times / Monocle / Apple PR / Stripe のホームページ品質を参照する。

---

## 7. 参考

- 公式サイト: https://quickcrm.site/
- 全体の画像生成インデックス: `docs/plans/codex-image-generation.md`
- §03 Architecture 専用指示書: `docs/plans/sa-architecture-images.md`
- 配置先: `public/images/photos/<sample>/`
