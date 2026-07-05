# 画像生成指示書 その2(codex 向け・リッチ化追加分)

> 本書は「盆栽のあるくらし」サイトの**モーション・没入感リッチ化にともなう追加画像 7 枚**を、codex(AI 画像生成)で生成するための指示書です。第1弾の指示書 `docs/plans/image-generation-brief.md`(以下 **brief-1**)と**完全に同じ形式・同じ品質基準**で書かれており、各セクションの「Prompt」と「Negative」をそのままコピーして生成できます。「〜と同様」による省略参照はありません。

---

## 1. 概要

- **位置づけ**: brief-1(全33ファイル)の**追加分**。サイトの演出を「没入感のあるリッチ」に強化するため、(A) モバイル用にアートディレクションされた縦構図ヒーロー 5 枚と、(B) セクション背景に低不透明度で重ねる和紙テクスチャタイル 2 枚を追加する。**brief-1 の内容は変更しない**。brief-1 の画像がすべて先に存在する前提で、本書の画像はそれを補完する。
- **目的**: (A) はデスクトップ版ヒーローの単純トリミングでは縦画面で主題が切れる・余白が失われるため、**縦構図として再構成した別カット**を用意する。(B) は明色・夜色セクションの背景に紙の質感をごく薄く重ね、平坦な単色背景に上質な奥行きを与える。
- **保存先**: すべて `assets/images/` 直下(例: `assets/images/hero-top-mobile.webp`)。
- **フォーマット**: **WebP・品質 80**。生成が PNG/JPG の場合は後工程で WebP(品質 80)に変換する。解像度は各セクションの指定どおり。
- **命名規則**: brief-1 の規則に準拠(半角英小文字・数字・ハイフン、拡張子 `.webp`)。モバイル縦構図は対応するデスクトップ版ファイル名に `-mobile` を付ける。テクスチャは `texture-` 接頭辞。
- **枚数**: モバイルヒーロー 5 枚 + テクスチャ 2 枚 = **合計 7 ファイル**。
- **カラーマネジメント**: sRGB で書き出す。埋め込みテキスト・ロゴは一切入れない。

---

## 2. 共通スタイルガイド(brief-1 準拠)と本書固有の注意

**brief-1 のセクション2「全画像共通スタイルガイド」および「モデル別の使い方(必読)」がそのまま適用される。** 特に以下は本書でも同一:

- **共通英語サフィックス**(光・被写界深度を含まない中立トークンのみ。各 Prompt 末尾に付与済み):

  > `photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail`

- **共通ネガティブ指定**(各 Negative に付与済み):

  > `oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look`

- **光と被写界深度は共通サフィックスに含めず、各画像の Prompt 内で個別に指定する**(brief-1 修正版の方針)。本書でも全プロンプトに光・DoF を個別に明示している。
- 手が写る画像(M02 / M04)の Negative には `extra fingers, deformed hands, mutated hands, fused fingers` を追加済み。
- アスペクト比はプロンプト文でなく**モデルのパラメータ**(例: `--ar 3:4`、`--ar 1:1`)で指定し、後トリミングに頼らない。

### モバイル縦構図(M01〜M05)固有の注意

- **単なるトリミングではなく、縦構図として再構成する。** 各プロンプトに `recomposed as a vertical portrait composition for a smartphone screen` を含め、被写体の配置を縦画面用に指示している。被写体・光・トーンは対応するデスクトップ版(brief-1 の該当セクション)と**同一世界観**を保つこと。
- **上 1/3 は余白気味にする**(モバイルではテキストが画面上部に載るため)。例外として M01(hero-top-mobile)は縦書きコピーが**中央〜下**に載るため、上部の余白に加えて**中央の縦の抜け**(quiet vertical corridor)も確保する。
- HTML 側では `<picture>` + `<source media="(max-width: 768px)" srcset="...-mobile.webp">` で出し分ける前提。デスクトップ版と色調・露出が大きく異なると切り替え時に不自然なので、対応するデスクトップ版と並べて見比べてトーンを合わせること。

### 和紙テクスチャ(T01〜T02)固有の注意

- ほぼ無地の和紙の**繊維感・漉きムラ(すきむら)のクローズアップ**。強いパターン・文字・グラデーションは禁止。
- **シームレスタイル化を目指す**: `designed to tile seamlessly, no distinct features near the edges` を指示に含める。ただし**生成 AI で完全なシームレスは困難**。生成後に 2×2 で並べて端の明度差・継ぎ目を確認し、目立つ場合は画像を使わず **CSS の SVG `feTurbulence` ノイズで代替**する(運用注記)。
- CSS 側では **`opacity: 0.03〜0.05` の低不透明度オーバーレイ + `background-repeat: repeat`** で使う前提。単体で見て「ほぼ無地」に見えるくらい淡い変化で正しい。
- 色は T01 が生成り `#F6F3EC` 近傍のごく淡い明度変化のみ、T02 が夜色 `#161B17` 近傍。**この2枚は色域を単一トーンに厳密に固定する必要があるため、例外として共通サフィックスのパレット句(cream / deep pine green / dark brown)を含めず**、Prompt 本文中で目標色を直接指定している(brief-1 との差分はこの1点のみ。中立トークン `photorealistic, professional photography, Japanese aesthetic, high detail` は共通)。

---

## 3. 画像一覧表

| ID | ファイル名 | 使用箇所 | 比率 | 解像度 | 被写体 |
|---|---|---|---|---|---|
| M01 | `hero-top-mobile.webp` | index ヒーロー(モバイル ≤768px、`<picture>` 出し分け) | 3:4 | 1080×1440 | 床の間の黒松・朝の斜光(hero-top.webp の縦構図再構成) |
| M02 | `hero-guide-mobile.webp` | guide ヒーロー(モバイル ≤768px、`<picture>` 出し分け) | 3:4 | 1080×1440 | 縁側で一鉢に向き合う手元(hero-guide.webp の縦構図再構成) |
| M03 | `hero-species-mobile.webp` | species ヒーロー(モバイル ≤768px、`<picture>` 出し分け) | 3:4 | 1080×1440 | 棚に並ぶ多様な樹種(hero-species.webp の縦構図再構成) |
| M04 | `hero-care-mobile.webp` | care ヒーロー(モバイル ≤768px、`<picture>` 出し分け) | 3:4 | 1080×1440 | 朝の水やり・水滴と光(hero-care.webp の縦構図再構成) |
| M05 | `hero-culture-mobile.webp` | culture ヒーロー(モバイル ≤768px、`<picture>` 出し分け) | 3:4 | 1080×1440 | 名品盆栽・美術館照明(hero-culture.webp の縦構図再構成) |
| T01 | `texture-washi-light.webp` | 明色セクション背景の低不透明度オーバーレイ(タイル) | 1:1 | 2048×2048 | 生成り #F6F3EC 近傍の無地和紙テクスチャ |
| T02 | `texture-washi-dark.webp` | 夜色セクション背景の低不透明度オーバーレイ(タイル) | 1:1 | 2048×2048 | 夜色 #161B17 近傍の無地和紙テクスチャ |
| W01 | `world-bonsai.webp`(任意) | culture「世界の BONSAI」ダーク章(現在は hero-culture.webp を再利用中) | 16:9 | 2000×1125 | 海外の盆栽展示会場の雰囲気(暗めのホール、スポットライトの並ぶ展示台) |

---

## 4. 画像ごとの個別指示

### M01. hero-top-mobile.webp
- 保存先: `assets/images/hero-top-mobile.webp`
- 使用箇所: `index.html` ヒーローセクション(モバイル用背景。`<picture>` + `<source media="(max-width: 768px)" srcset="/assets/images/hero-top-mobile.webp">` で `hero-top.webp` と出し分け、`object-fit: cover`)
- アスペクト比 / 解像度: 3:4 / 1080×1440px、WebP 品質80
- 表示上の注意: 対応デスクトップ版は brief-1 の「01. hero-top.webp」。被写体・光・トーンを揃える。縦書きコピー「小さな鉢の、大きな宇宙。」が**中央〜下**に載るため、**上 1/3 を空け気味にしつつ、画面中央にも縦方向の静かな抜け**を確保する。主題(黒松)は下半分・やや右に置く。
- Prompt:
  > An ancient Japanese black pine bonsai (kuromatsu) with thick, rugged, deeply fissured bark and dark green needles, displayed in a traditional tokonoma alcove on a plain wooden stand, recomposed as a vertical portrait composition for a smartphone screen, the tree placed in the lower half of the frame and slightly right of center, a tall quiet washi-paper wall rising above it, soft morning side-light raking across the moss-covered soil surface, generous calm negative space in the upper third of the frame and a quiet vertical corridor of empty space down the center for overlaid vertical Japanese text, shallow depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look

### M02. hero-guide-mobile.webp
- 保存先: `assets/images/hero-guide-mobile.webp`
- 使用箇所: `guide.html` ヒーロー(モバイル用背景。`<picture>` + `<source media="(max-width: 768px)" srcset="/assets/images/hero-guide-mobile.webp">` で `hero-guide.webp` と出し分け、`object-fit: cover`)
- アスペクト比 / 解像度: 3:4 / 1080×1440px、WebP 品質80
- 表示上の注意: 対応デスクトップ版は brief-1 の「11. hero-guide.webp」。被写体・光・トーンを揃える。h1「はじめての盆栽」とリードが**上 1/3** に載るため上部を空け気味に。手元と鉢は下半分に。顔は絶対に写さない。
- Prompt:
  > A bright, sunlit engawa (wooden veranda) where a person's hands, hands only, no face, gently hold and examine their very first small bonsai in a simple pot, recomposed as a vertical portrait composition for a smartphone screen, the hands and the bonsai placed in the lower half of the frame, warm inviting morning light streaming across the wood, the garden softly blurred rising behind, generous calm open space in the upper third of the frame for overlaid text, hopeful beginner mood, shallow depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look, extra fingers, deformed hands, mutated hands, fused fingers

### M03. hero-species-mobile.webp
- 保存先: `assets/images/hero-species-mobile.webp`
- 使用箇所: `species.html` ヒーロー(モバイル用背景。`<picture>` + `<source media="(max-width: 768px)" srcset="/assets/images/hero-species-mobile.webp">` で `hero-species.webp` と出し分け、`object-fit: cover`)
- アスペクト比 / 解像度: 3:4 / 1080×1440px、WebP 品質80
- 表示上の注意: 対応デスクトップ版は brief-1 の「17. hero-species.webp」。被写体・光・トーンを揃える。h1「樹種図鑑」とリードが**上 1/3** に載るため上部を空け気味に。縦構図では棚を縦に重ねて奥行き(高さ方向のレイヤー)を出す。
- Prompt:
  > A bonsai display area with many diverse tree species on tiered wooden shelves, pines, junipers, maples and flowering trees showing variety of form and foliage, recomposed as a vertical portrait composition for a smartphone screen, the shelves stacked vertically with the main shelf in the lower two-thirds of the frame in crisp focus and higher shelves receding softly behind and above, soft diffused morning light, calm exhibition atmosphere, quiet open space in the upper third of the frame for overlaid text, moderate depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look

### M04. hero-care-mobile.webp
- 保存先: `assets/images/hero-care-mobile.webp`
- 使用箇所: `care.html` ヒーロー(モバイル用背景。`<picture>` + `<source media="(max-width: 768px)" srcset="/assets/images/hero-care-mobile.webp">` で `hero-care.webp` と出し分け、`object-fit: cover`)
- アスペクト比 / 解像度: 3:4 / 1080×1440px、WebP 品質80
- 表示上の注意: 対応デスクトップ版は brief-1 の「24. hero-care.webp」。被写体・光・トーンを揃える。h1「育てる、という愉しみ」とリードが**上 1/3** に載るため、上部はやわらかい光と霧のグラデーションで空け気味に。水やりの動作は下半分に。顔は絶対に写さない。
- Prompt:
  > A serene early morning scene of watering bonsai on an outdoor wooden shelf, hands only, no face, a watering can releasing fine streams of water over lush green bonsai, droplets and light rays catching the low morning sun, gentle mist and glistening leaves, recomposed as a vertical portrait composition for a smartphone screen, the watering action placed in the lower half of the frame, soft bright hazy morning light and gentle mist filling the upper third of the frame as calm open space for overlaid text, calm nurturing atmosphere, shallow depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look, extra fingers, deformed hands, mutated hands, fused fingers

### M05. hero-culture-mobile.webp
- 保存先: `assets/images/hero-culture-mobile.webp`
- 使用箇所: `culture.html` ヒーロー(モバイル用背景。`<picture>` + `<source media="(max-width: 768px)" srcset="/assets/images/hero-culture-mobile.webp">` で `hero-culture.webp` と出し分け、`object-fit: cover`)
- アスペクト比 / 解像度: 3:4 / 1080×1440px、WebP 品質80
- 表示上の注意: 対応デスクトップ版は brief-1 の「28. hero-culture.webp」。被写体・光・トーンを揃える(美術館的な静謐な照明・暗背景)。h1「千年を、鉢の上に」とリードが**上 1/3** に載るため、上部は深い闇の余白として空ける。樹は下 2/3 に。
- Prompt:
  > A masterpiece ancient bonsai of great age and history displayed like a museum exhibit, softly spotlit against a deep dark neutral background, quiet reverent museum lighting emphasizing the venerable trunk and refined form, recomposed as a vertical portrait composition for a smartphone screen, the tree standing in the lower two-thirds of the frame, deep dark empty space filling the upper third of the frame as calm negative space for overlaid text, still and solemn atmosphere, shallow depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look

### T01. texture-washi-light.webp
- 保存先: `assets/images/texture-washi-light.webp`
- 使用箇所: 明色セクション(生成り `#F6F3EC` 背景)への低不透明度オーバーレイ。CSS で `opacity: 0.03〜0.05` 相当 + `background-repeat: repeat` のタイルとして使用。
- アスペクト比 / 解像度: 1:1 / 2048×2048px、**WebP は可逆(lossless)または品質90以上**(ほぼ無地の微細な繊維ディテールは非可逆圧縮でつぶれ・バンディングが出やすい。内容がほぼ平坦なためロスレスでもファイルサイズは小さい)
- 表示上の注意: **ほぼ無地**が正しい。`#F6F3EC` 近傍の**ごく淡い明度変化のみ**で、強いパターン・文字・グラデーション・ビネットは禁止。継ぎ目が目立たない均質テクスチャを目指す。**運用注記: 完全なシームレスは生成 AI では困難なため、生成後に 2×2 でタイル状に並べて端の明度差・継ぎ目を確認し、目立つ場合はこの画像を使わず CSS の SVG `feTurbulence` ノイズで代替する。**
- Prompt:
  > An extreme close-up of plain handmade Japanese washi paper, fine natural paper fibers and subtle uneven pulp density (sukimura) as the only visible detail, almost uniform pale cream tone very close to #F6F3EC with only the faintest variations in brightness, flat frontal view filling the entire frame edge to edge, even homogeneous texture designed to tile seamlessly with no distinct features near the edges, no pattern, no gradient, soft perfectly even diffused light with no visible light falloff, deep depth of field, everything in sharp focus, photorealistic, professional photography, Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look, visible seams, strong pattern, repeating motif, brightness gradient, vignetting, creases, folds, wrinkles, stains, colored fibers, embedded leaves or petals

### T02. texture-washi-dark.webp
- 保存先: `assets/images/texture-washi-dark.webp`
- 使用箇所: 夜色セクション(`#161B17` 背景、`.chapter--dark` や `.site-footer` 等)への低不透明度オーバーレイ。CSS で `opacity: 0.03〜0.05` 相当 + `background-repeat: repeat` のタイルとして使用。
- アスペクト比 / 解像度: 1:1 / 2048×2048px、**WebP は可逆(lossless)または品質90以上**(ほぼ無地の微細な繊維ディテールは非可逆圧縮でつぶれ・バンディングが出やすい。内容がほぼ平坦なためロスレスでもファイルサイズは小さい)
- 表示上の注意: **ほぼ無地**が正しい。`#161B17` 近傍の**ごく淡い明度変化のみ**で、強いパターン・文字・グラデーション・ビネットは禁止。継ぎ目が目立たない均質テクスチャを目指す。**運用注記: 完全なシームレスは生成 AI では困難なため、生成後に 2×2 でタイル状に並べて端の明度差・継ぎ目を確認し、目立つ場合はこの画像を使わず CSS の SVG `feTurbulence` ノイズで代替する。** また、生成 AI は近黒トーンを指定より数段明るく出しがちなため、**生成後にレベル補正で #161B17 近傍へ暗く調整してよい**(3〜5% の不透明度で正しい背景色に重ねるため、正確な色相よりも明度が合っていることが重要)。
- Prompt:
  > An extreme close-up of plain handmade Japanese washi paper in a very dark near-black tone close to #161B17, fine natural paper fibers and subtle uneven pulp density (sukimura) visible only as the faintest tonal variations, flat frontal view filling the entire frame edge to edge, even homogeneous texture designed to tile seamlessly with no distinct features near the edges, no pattern, no gradient, soft perfectly even diffused light with no visible light falloff, deep depth of field, everything in sharp focus, photorealistic, professional photography, Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look, visible seams, strong pattern, repeating motif, brightness gradient, vignetting, creases, folds, wrinkles, stains, colored fibers, embedded leaves or petals

### W01. world-bonsai.webp(任意 — 生成は必須ではない)
- 保存先: `assets/images/world-bonsai.webp`
- 使用箇所: `culture.html` 「世界の BONSAI」ダーク章(`.chapter--dark` の背景)。現在はヒーローと同じ `hero-culture.webp` を再利用しており、同一ページ内での画像重複を解消したい場合に生成して差し替える。差し替え時は `culture.html` の該当 `<img>` の src と alt を更新すること(width/height は 2000×1125 に変更)。
- アスペクト比 / 解像度: 16:9 / 2000×1125px、WebP 品質80
- 表示上の注意: ダークセクションで使用するため暗めのトーン。左1/3にテキストが載るため左側を静かに。「世界へ広がった BONSAI」の物語を画で補強する(海外の展示会場の空気感)。
- Prompt:
  > A dimly lit international bonsai exhibition hall, a row of refined bonsai trees displayed on individual pedestals each under its own soft spotlight, receding into the dark depth of the hall, quiet reverent gallery atmosphere suggesting a world-class exhibition, calm negative space on the left third of the frame, no people visible, moderate depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, people, crowds, illustration, painting, CGI look, bright background

---

## 5. 生成後のチェックリスト

- [ ] 全 7 ファイルが `assets/images/` に、指定のファイル名・解像度・比率(M01〜M05 = 3:4 / T01〜T02 = 1:1)で揃っているか。
- [ ] WebP・品質80 で書き出されているか(PNG/JPG 生成分は変換済みか)。
- [ ] M01〜M05 が単なる横構図のトリミングではなく、縦構図として再構成されているか(主題の配置・余白が縦画面向けか)。
- [ ] M01〜M05 の上 1/3 にテキスト用の余白があるか。M01 は中央の縦の抜けも確保されているか。
- [ ] M01〜M05 を対応するデスクトップ版(brief-1 の 01 / 11 / 17 / 24 / 28)と並べ、被写体・光・トーンが同一世界観か(`<picture>` 切り替え時に違和感が出ないか)。
- [ ] `<picture>` + `<source media="(max-width: 768px)">` の出し分けを DevTools のレスポンシブモード(768px 境界の前後)で確認したか。
- [ ] T01/T02 を 2×2 でタイル状に並べ、端の明度差・継ぎ目が目立たないか確認したか(目立つ場合は SVG `feTurbulence` ノイズで代替)。
- [ ] T01/T02 を実際に `opacity: 0.03〜0.05` で背景に重ね、「ほぼ無地だがわずかに紙の質感がある」状態になっているか(パターンが視認できるのは濃すぎ)。
- [ ] 過飽和・HDR 調・プラスチックな葉・歪んだ枝/鉢になっていないか(共通 Negative の観点で目視確認)。
- [ ] 手元カット(M02 / M04)に顔が写り込んでいないか、手の破綻(指の本数など)がないか。
- [ ] 各画像で複数候補を生成し、最良の1枚を採用したか(基準を満たさない候補しかない場合は再生成する)。
