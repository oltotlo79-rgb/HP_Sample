# Sample A · §03 Architecture セクション 画像生成指示書

最終更新: 2026-05-20
対象セクション: `/sample-a` の §03 ── Architecture (QuickCRM クラウドサービス 全体構成図)
読込元コンポーネント: `src/components/sample-a/ArchitectureForest.tsx`
配置先: `public/images/sample-a/architecture/`

---

## 0. 目的

公式サイト「QuickCRM クラウドサービスの全体構成」+ PPT slide 3 を、 *ボタニカル・イラストレーション (一本の樹のメタファ)* として可視化するセクションの SVG 部分を、 **Codex で生成した高品質な画像** に置き換える。
SVG だけでは表現できないテクスチャ・微細な葉脈・水彩のにじみ・大気感を本物の絵画品質で実現することが狙い。

---

## 1. 全体方針

- **絵柄**: 19 世紀の科学図譜 + 水彩ボタニカル・プレート (Pierre-Joseph Redouté、Maria Sibylla Merian の画風) を下敷きにし、現代のエディトリアル感を加えた手描きイラストレーション。線画 (細いインク描き) + 水彩淡彩 + 紙の質感。
- **被写体**: 一本の落葉広葉樹 (オーク・ブナ・イチョウのような格のある樹)。根が地面の断面 (cross-section) を通して見える "図譜風" の構図。
- **テキストは絵に入れない**: ラベル (CRM / CTI / OPTIONS / AWS / オンプレ / SoftBank / USER 等) は実装側 (SVG/HTML) で重ねるため、画像内に文字・数字・透かしを描かない。
- **構図の予約領域**: 後述「§7 構図マップ」で指定した位置にラベルを乗せるための「絵の主張が弱い余白 (ネガティブスペース)」を確保する。
- **アスペクト比**: ベース 11 : 8 (横長)。SVG viewBox 1100×800 とほぼ同じ。
- **解像度**: 表示サイズ 1100 px 幅を Retina (2x) で耐える 2200 px 幅以上で生成。出力は WebP / PNG。

---

## 2. 画像一覧

| # | ファイル名 | サイズ (px) | 形式 | 役割 | 重要度 |
|---|---|---|---|---|---|
| A | `public/images/sample-a/architecture/hero.webp` | 2200 × 1600 | WebP (q=88) | メイン: 樹 + 大気 + 地面 + 根 + 太陽。**この 1 枚で完結**するフル絵 | 必須 |
| B | `public/images/sample-a/architecture/tree-only.png` | 1600 × 2200 (縦) | PNG 透過 | 樹のみ (背景・地面なし)。`hero.webp` 上に重ね、視差や別配置に使う予備 | 任意 |
| C | `public/images/sample-a/architecture/parchment.webp` | 2200 × 1600 | WebP (q=80) | 背景の古紙テクスチャ単体 (樹なし)。`hero.webp` の差替が必要になった場合の保険 | 任意 |
| D | `public/images/sample-a/architecture/leaf-fall-1.png` | 256 × 256 | PNG 透過 | 風で舞う葉 (オーク / 紅葉) のスポット素材 | 任意 |
| E | `public/images/sample-a/architecture/leaf-fall-2.png` | 256 × 256 | PNG 透過 | 風で舞う葉 (メイプル / 緑) のスポット素材 | 任意 |
| F | `public/images/sample-a/architecture/leaf-fall-3.png` | 256 × 256 | PNG 透過 | 風で舞う葉 (槍形 / 深緑) のスポット素材 | 任意 |

**最低限 A だけあれば実装が成立する**。B〜F は将来の差替・パララックスに備えた予備。

---

## 3. 各画像の詳細仕様

### 3.1 (A) hero.webp — メインイラスト

| 項目 | 値 |
|---|---|
| ファイル | `public/images/sample-a/architecture/hero.webp` |
| サイズ | 2200 × 1600 px (アスペクト 11:8) |
| 形式 | WebP 品質 88、上限 600 KB |
| 背景色 | `#F2E2BC` (古紙ベース、四隅は `#D9C58E` まで暗く) |
| 透過 | なし |

#### プロンプト (英語、Codex / GPT-Image-1 推奨)

```
A high-resolution vintage botanical illustration plate in the style of
19th-century scientific atlases (Pierre-Joseph Redouté, Maria Sibylla
Merian), rendered in fine ink line work over delicate watercolor washes
on aged parchment paper.

Subject: ONE single, stately, fully-grown deciduous broadleaf tree
(oak / beech / linden silhouette), centered slightly left of frame,
filling roughly 70% of the canvas height. The trunk is thick at the
base, gently tapering upward, with realistic gnarled bark, visible
knots, vertical cracks, patches of moss, and a few small lichen spots.
The canopy is layered and naturalistic — hundreds of individually
shaped leaves of multiple species (oak-lobed, maple-like, lanceolate)
clustered into 5 to 7 organic lobes, with painterly variation in green
tone (deep forest green, moss green, sage, with occasional warm
yellow-orange and rust accents to suggest autumn turn). Subtle backlit
sun-dapple where the canopy meets the open sky.

Below ground: a clear cross-section view showing a fully-developed
root system spreading symmetrically into a darker earth band. The
roots are drawn as tapered tendrils with secondary and tertiary
branching, rendered in warm umber and burnt sienna. The soil is shown
as a horizontal strip with sediment lines and a few small pebbles.

Foreground at ground level: short grass tufts in mixed greens, three
or four tiny wildflowers (mustard yellow, dusty rose), small stones,
and the soft cast shadow of the tree spreading on the ground. A
single elegant butterfly (orange-amber wings) flying near the
mid-branches as a focal accent.

Sky / background: pale cream parchment paper with a subtle vignette
darkening to warm umber at the corners. Far behind the tree, very
soft, blurred silhouettes of distant tree canopies in muted teal-
green to suggest atmospheric perspective. Upper-right corner: a
warm, soft sun rendered with concentric gold rays radiating gently
outward — like a Linnean plate sun emblem.

Treatment: refined ink contour line over loose, watery pigment
washes that bleed slightly at edges. Visible paper grain throughout.
Slight age toning, faint foxing spots in the corners. The overall
mood is scholarly, calm, organic, and warm.

Color palette (strict): deep forest green #1B4332, moss #2D6A4F,
sage / mint #95D5B2, cream #FAF3E0, parchment #F2E2BC, umber bark
#5C4033, warm amber / autumn #C97D2C, sunlight gold #F3C95C, soil
#86683A. No bright primaries, no neon.

Composition rules:
  • The trunk vertical centerline at roughly 50% of frame width.
  • Canopy occupies the upper 45% of frame.
  • Roots occupy the lower 25% of frame (below a visible ground line
    drawn around 70% from top).
  • Reserve a low-density "calm zone" near the geometric center of
    the canopy (around 50% × 22% of frame) — this area should be
    foliage, but with reduced visual complexity so a label can sit
    there.
  • Reserve calm zones at the LEFT mid-canopy area (around 22% × 36%)
    and at the RIGHT mid-canopy area (around 78% × 36%) for branch-
    cluster labels.
  • Reserve a calm strip across the bottom 18% of frame for three
    root-end labels (centered around x = 22%, 50%, 78%).
  • Reserve the upper-right ~15% of frame for the sun emblem; the
    canopy should NOT cover that corner.

Strictly forbidden: any text, letters, numerals, captions, labels,
watermarks, signatures, logos, frames, borders, or UI elements
inside the image. No humans, no animals (one butterfly allowed),
no buildings, no modern objects, no cars, no signs.

Render at 2200 × 1600 px, 11:8 aspect, high detail, illustrative
not photographic.
```

#### 重要な構図ルール (絵作りの指針)

- **画面中央 (主樹冠)**: 葉はあるがディテール密度を意図的に落とし、CRM ラベルが視認できる余白を作る。
- **上部右隅 (太陽)**: 必ず空ける。太陽の絵自体はあってよい。
- **左右の中段 (脇枝先のクラスタ)**: 葉のクラスタを描きつつ、その**真下**にラベル用余白を作る。
- **下段 (根の先端 3 か所)**: 根は伸ばすが、根の終端付近には地面 / 影だけが見える区画を残し、白ラベルが乗っても破綻しないようにする。

---

### 3.2 (B) tree-only.png — 樹のみ (透過 PNG、任意)

| 項目 | 値 |
|---|---|
| ファイル | `public/images/sample-a/architecture/tree-only.png` |
| サイズ | 1600 × 2200 px (アスペクト 8:11、縦長) |
| 形式 | PNG (アルファ必須) |
| 背景 | **完全透過** |

#### プロンプト

```
The exact same stately deciduous broadleaf tree as the hero plate
(vintage botanical illustration, ink contour + watercolor wash),
isolated on a fully transparent background. Include trunk, full
canopy with hundreds of multi-species leaves, visible root system
below an implied ground line (no soil band, the roots are just
free-floating linework). No sky, no ground rectangle, no shadow,
no sun, no butterfly. The tree should be centered horizontally,
filling 88% of the canvas height. Identical color palette to the
hero plate. Render at 1600 × 2200, transparent PNG.

Strictly forbidden: any text, letters, numerals, captions, frame,
border, background fill, watermark.
```

---

### 3.3 (C) parchment.webp — 古紙テクスチャ (任意)

| 項目 | 値 |
|---|---|
| ファイル | `public/images/sample-a/architecture/parchment.webp` |
| サイズ | 2200 × 1600 px |
| 形式 | WebP 品質 80 |
| 背景色 | `#F2E2BC` (中央) → `#D9C58E` (四隅) |

#### プロンプト

```
A photorealistic aged parchment / cream-colored textured paper
background, slightly warm-toned, with subtle visible fiber, very
faint foxing spots in the corners, a gentle vignette darkening to
warm umber at the edges, and minor irregularities like small
creases and a hairline crinkle. No subject, no illustration, no
text — pure paper texture suitable as a background plate behind
botanical artwork. Render at 2200 × 1600.

Color palette: parchment center #F2E2BC, edges fading to #D9C58E,
foxing accents in muted sepia #B89154.

Strictly forbidden: any text, letters, drawings, illustrations,
borders, frames.
```

---

### 3.4 (D / E / F) leaf-fall-*.png — 舞う葉スポット素材 (任意)

3 枚作る。共通仕様:

| 項目 | 値 |
|---|---|
| サイズ | 各 256 × 256 px |
| 形式 | PNG (アルファ必須) |
| 背景 | 完全透過 |

#### D · leaf-fall-1.png プロンプト

```
A single oak leaf, top-down view, naturalistic watercolor + ink
botanical illustration style, with hand-painted color variation
from deep forest green at the base to warm autumn orange-amber at
the tip, visible leaf veins, slightly curled tip, gentle drop
shadow underneath. Tilted approximately -20°. Isolated on fully
transparent background. 256 × 256 px PNG.

Strictly forbidden: any text, watermark, background fill.
```

#### E · leaf-fall-2.png プロンプト

```
A single five-lobed maple leaf, top-down view, watercolor + ink
botanical style, painted in mixed mid-green (#3F8C5E) with a
subtle reddish edge wash, fine vein detail, isolated on fully
transparent background. Tilted approximately +30°. 256 × 256 px
PNG.
```

#### F · leaf-fall-3.png プロンプト

```
A single lanceolate (spear-shaped) willow-like leaf, watercolor +
ink botanical style, painted in deep forest green (#1B4332) with
a subtle highlight along the central rib, isolated on fully
transparent background. Tilted approximately -10°. 256 × 256 px
PNG.
```

---

## 4. 共通ルール

- **画像内テキスト禁止**: アルファベット・かな・漢字・数字・透かし・サインを描画しないこと (実装側でラベルを重ねる)。
- **人物・建物・現代物の禁止**: 機材・看板・車・ロゴなどを含めない。蝶 1 匹 (hero のみ) は OK。
- **過剰な装飾フレーム禁止**: 額縁・装飾コーナー・ボーダーは含めない。素のアートワークとして出力する。
- **彩度**: ハイサチュレーション・ネオン色を避ける。古い植物図譜の落ち着いたパレットを守る。
- **画素**: JPEG ノイズ・モアレ・低解像のアップスケール痕を出さない。
- **生成後の品質チェック**:
  - 「指定された余白 (calm zone) が確保されているか」
  - 「ラベル予定位置に細密な葉や枝が密集していないか」
  - 「色がパレット指定から逸脱していないか」
  - 「上記いずれかに不合格があれば再生成」

---

## 5. ネガティブプロンプト (共通)

```
text, letters, numbers, captions, labels, watermark, signature, logo,
frame, border, ornamental corners, ui elements, buttons, icons,
photograph, photorealistic 3d render, neon, saturated, oversaturated,
high contrast, harsh shadows, modern, futuristic, sci-fi, urban,
buildings, vehicles, signs, people, faces, animals (except butterfly),
blurry, lowres, jpeg artifacts, banding, pixelation, oversharpen
```

---

## 6. カラーパレット (厳守)

| 用途 | HEX | 用語 |
|---|---|---|
| 樹冠 (主) | `#1B4332` | 深い森緑 (a-forest) |
| 樹冠 (中) | `#2D6A4F` | 苔緑 (a-moss) |
| 樹冠 (明) | `#95D5B2` | ミント (a-mint) |
| 葉 (明部) | `#D8F3DC` | ミスト |
| 紙 (主) | `#FAF3E0` | クリーム (a-cream) |
| 紙 (古) | `#F2E2BC` | パーチメント |
| 紙 (隅) | `#D9C58E` | 古紙の深色 |
| 樹皮 (主) | `#5C4033` | 樹皮ブラウン |
| 樹皮 (暗) | `#2A1809` | 影 |
| 樹皮 (光) | `#A07647` | ハイライト |
| 土 | `#86683A` | 土 |
| 紅葉 | `#C97D2C` | 秋葉オレンジ |
| 太陽 | `#F3C95C` | サン・ゴールド |
| 花 (小) | `#E68A8A` / `#C97DD6` / `#F3C95C` | 野花 |

---

## 7. 構図マップ

`hero.webp` (2200×1600) の絶対座標 (px) で、絵を描くべきゾーンと **ラベル用に空けるべきゾーン** を示す。

```
                                                           2200
   0       400        800       1100       1400       1800      
0  ┌────────────────────────────────────────────────────────────┐
   │   遠景の樹冠 (大気遠近, 強くぼかす)                          │
   │                                          ☀ SUN ZONE        │
   │                                       (label "USER" 重ね)   │
 200┤    ╭─────── 主樹冠 ──────╮          [calm corner here]    │
   │    │                       │                                │
   │    │    [calm zone — CRM label] (約 850–1450, 280–440)      │
   │    │                       │                                │
 400┤    ╰───────────────────────╯                                │
   │              幹                                              │
 600┤  脇枝左            主幹            脇枝右                   │
   │  ╭ leaf cluster ╮  ████   ╭ leaf cluster ╮                  │
   │  │   (CTI)      │  ████   │  (OPTIONS)   │                  │
 800┤  ╰─────────────╯  ████   ╰──────────────╯                  │
   │     [CTI label]  ████      [OPTIONS label]                  │
   │                  ████                                       │
1000┤      ─── 地表 ───  ████  ─── 地表 ───                       │
   │             ╲      ████      ╱                              │
   │              ╲     ████     ╱                               │
1200┤   根 ──→     ╲    ████    ╱      ←── 根                    │
   │                ╲   ████   ╱                                 │
   │                 ╲  ████  ╱                                  │
1400┤    [AWS label]  ╲ ████ ╱  [オンプレ label]  [SoftBank label]│
   │                                                              │
1600└────────────────────────────────────────────────────────────┘
```

### ラベル予約座標 (画像中) — 実装側で重ねる文字の中心座標 (画像 2200×1600 基準)

| ラベル | 中心 X | 中心 Y | 幅 × 高 |
|---|---:|---:|---:|
| USER (太陽) | 1900 | 220 | 120 × 60 |
| CRM (主樹冠中央) | 1120 | 360 | 380 × 92 |
| CTI (左クラスタ下) | 552 | 800 | 360 × 92 |
| OPTIONS (右クラスタ下) | 1704 | 800 | 400 × 92 |
| AWS (左根先) | 480 | 1420 | 240 × 60 |
| オンプレ (中央根先) | 1100 | 1450 | 232 × 60 |
| SoftBank (右根先) | 1720 | 1420 | 240 × 60 |

これらの座標を **絵の中で「他より細密にしない」「他より暗くしない」** ことを徹底する。

---

## 8. 後処理 (生成後)

1. 生成された画像を **2200×1600** にトリミング (アスペクトずれがある場合)
2. `cwebp -q 88` などで WebP 化 (`hero.webp`)
3. ファイルサイズが 600 KB を超える場合は `q=82` まで段階的に下げる
4. 透過 PNG (B / D-F) は `pngquant --quality 80-95` で減色して 300 KB 以下に収める
5. 期待解像度・サイズに合致するか確認し、不合格なら再生成
6. 構図マップ §7 と重ね比較して「ラベルが乗る位置に過密な葉がない」ことを確認

---

## 9. 実装側の差し替え方針

差替対象は `src/components/sample-a/ArchitectureForest.tsx` の SVG ブロック。
画像が用意されたら、SVG ブロックを以下の構造に置換する想定:

```tsx
<figure className="relative md:col-span-9" aria-label="...">
  <div className="relative aspect-[11/8] w-full">
    {/* 1. メイン画像 */}
    <Image
      src="/images/sample-a/architecture/hero.webp"
      alt="QuickCRM の全体構成を一本の樹で表現したボタニカル・イラスト"
      fill
      sizes="(min-width: 768px) 70vw, 100vw"
      priority
      className="object-cover"
    />

    {/* 2. ラベル群 (絶対配置で重ねる)。座標は §7 の比率から算出 */}
    <Label kind="crm"   style={{ left: "50.9%", top: "22.5%" }}>CRM</Label>
    <Label kind="cti"   style={{ left: "25.1%", top: "50.0%" }}>CTI / 電話系</Label>
    <Label kind="opt"   style={{ left: "77.5%", top: "50.0%" }}>OPTIONS / オプション</Label>
    <Label kind="user"  style={{ left: "86.4%", top: "13.8%" }}>USER</Label>
    <Label kind="db"    style={{ left: "21.8%", top: "88.8%" }}>AWS</Label>
    <Label kind="db"    style={{ left: "50.0%", top: "90.6%" }}>オンプレ</Label>
    <Label kind="db"    style={{ left: "78.2%", top: "88.8%" }}>SoftBank</Label>

    {/* 3. 任意: 舞う葉 (D/E/F) を framer-motion で重ねる */}
  </div>
</figure>
```

ラベルは現在の SVG にある `motion.g` の演出 (フェードイン・スケール) を Tailwind + framer-motion で再現する。
パーセント値は §7 の絶対座標を画像サイズ (2200×1600) で割って算出: 例 `CRM` の `top: 360/1600 = 22.5%`。

---

## 10. 受入チェックリスト

- [ ] §7 のラベル予約 7 座標すべてに、過密な葉・濃い影・枝の密集が存在しない (= 文字を載せて違和感がない)
- [ ] 画像内に文字・数字・透かし・サインがない
- [ ] パレット §6 に対し顕著に外れた色 (鮮やかな赤・青・蛍光色) が含まれない
- [ ] 樹冠は 5〜7 個のロブで構成されたオーガニックな塊として読める (規則的な格子状でない)
- [ ] 樹皮に縦割れ・節・苔・コケ斑点などのテクスチャがあり、ベタ塗りに見えない
- [ ] 根は地中で複数階層 (主根 + 側根 + 細根) に分岐している
- [ ] 太陽が右上にあり、光源と整合する陰影 (左下に向かって陰) が画面全体で成立している
- [ ] 紙の質感が画面全体に薄くかかっており、デジタル塗り絵には見えない
- [ ] 蝶が大きすぎず樹のスケール感を壊していない (画面の 2% 以下)
- [ ] 文字テキストとの十分なコントラスト (CRM ラベルが乗る中央領域が `#FAF3E0` 半透明の帯で十分読める明度)

---

## 11. 生成回数の目安

- まず `hero.webp` を **3 バリエーション** 生成し、§10 のチェックリスト最多適合をベースに採用。
- 必要に応じて再生成 (構図の calm zone が不足する場合や、画像内に文字が混入した場合)。
- 採用バリアントが決まったら同シードで `tree-only.png` を生成 (色味・樹形の整合を保つため)。
- `parchment.webp` と葉素材 (D/E/F) は独立して生成して問題なし。

---

## 12. 参照

- 公式サイト: https://quickcrm.site/ (「QuickCRM クラウドサービスの全体構成」ブロック)
- ステージング: https://quickcrm.stage-cmssv.awsv.jp/
- 出典 PPT: `00_QuickCRM_機能概要.pptx` slide 3
- 現行 SVG 実装 (置換対象): `src/components/sample-a/ArchitectureForest.tsx`
- 全体の画像生成インデックス: `docs/plans/codex-image-generation.md`
