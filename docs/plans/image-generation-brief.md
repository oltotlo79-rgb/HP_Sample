# 画像生成指示書(codex 向け)

> 本書は「盆栽のあるくらし」サイトで使用する全画像を、codex(AI 画像生成)で生成するための完全な指示書です。**各画像セクションの「Prompt」と「Negative」をそのままコピーして生成**できるよう、すべて完成形で記載しています。「〜と同様」による省略はありません。

---

## 1. 概要

- **目的**: 盆栽の魅力を伝える静的サイト用の、写真調(フォトリアル)画像を生成する。テンプレート的・AI 生成的な印象を避け、スクール審査に耐える上質な仕上がりを目指す。
- **保存先**: すべて `assets/images/` 直下に配置する(例: `assets/images/hero-top.webp`)。
- **フォーマット**: **WebP・品質 80**。生成が PNG/JPG の場合は、後工程で WebP(品質 80)に変換して保存する。解像度は各セクションの指定どおりにリサイズ・トリミングする。
- **命名規則**: 半角英小文字・数字・ハイフンのみ。用途接頭辞を付ける(`hero-` = 各ページヒーロー / `chapter-` = トップの章 / `nav-` = 誘導カード / `step-` = 入門ステップ / `sp-` = 樹種 / `care-` = 手入れ作業 / `season-` = 四季タブ / `culture-` = 文化 / `og-` = OGP)。拡張子は `.webp`。
- **枚数**: 本編 32 ファイル + OGP 1 ファイル = **合計 33 ファイル**。
- **カラーマネジメント**: sRGB で書き出す。埋め込みテキスト・ロゴは一切入れない(サイト側で HTML/CSS のテキストを重ねる)。

---

## 2. 全画像共通スタイルガイド(必ず各プロンプトに含める)

以下は全画像で共通する方針です。各画像の Prompt 末尾には後述の**共通英語サフィックス**が、Negative には**共通ネガティブ指定**が必ず含まれています(各セクションに展開済み)。**光と被写界深度は画像ごとに性格が異なるため、共通サフィックスには含めず、各画像の Prompt 内で個別に指定しています。**

- **画質・レンズ**: Photorealistic, professional photography。DSLR/ミラーレスで 50mm または 85mm 単焦点相当の描写。ボケは自然。
- **光**: 自然光を基本とする(基準は朝の斜光)。ただし**光は共通サフィックスに含めず、各画像プロンプト側で個別に指定する**。基本は朝の自然光、例外として chapter-time = 暗所の一筋の光 / hero-culture = 美術館的な静謐な照明 / chapter-nature・culture-wabisabi = 曇天の拡散光 / season-winter = 冬の澄んだ冷たい光。硬い直射・不自然なスタジオライティングは避ける。
- **被写界深度**: 基本は浅め(主題にピント、背景はやわらかくボケる)。ただし**被写界深度も共通サフィックスに含めず、各画像プロンプト側で個別に指定する**。マクロ・手元 = shallow / tools のフラットレイ = deep(全体シャープ)/ nav-species・hero-species = moderate。マクロ以外は樹全体のシルエットが分かる程度に。
- **背景**: 和の要素(縁側・木のテーブル・和紙・障子・苔・砂利・床の間・簀の子棚)。ごちゃついた背景・生活感の出すぎる雑然とした背景は禁止。余白と静けさを大切にする。
- **カラーグレーディング**: 生成り `#F6F3EC`・深松葉色 `#2E4B3C`・焦茶 `#4A3728` に調和する、落ち着いた低〜中彩度のアースカラー。**過飽和・HDR 調は厳禁**。緑は鮮やかすぎない深い松葉色に寄せる。
- **樹種名の表記**: プロンプト内では英語名+ローマ字日本語を併記する(例: `Japanese black pine (kuromatsu)`)。
- **手元カット**: 顔は写さない。必ず `hands only, no face` を明示する。手が写る画像の Negative には手の破綻対策(`extra fingers, deformed hands, mutated hands, fused fingers`)を追加済み。
- **共通英語サフィックス**(各 Prompt 末尾に付与済み。光・被写界深度を含まない中立トークンのみ):

  > `photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail`

- **共通ネガティブ指定**(各 Negative に付与済み):

  > `oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look`

### モデル別の使い方(必読)

- **アスペクト比はモデルのパラメータで指定する**: 比率(16:9 / 4:3 / 3:2 / 3:4 / 1.91:1)はプロンプト文中に書くのではなく、モデル側のパラメータ(例: Midjourney の `--ar 16:9`、その他モデルの解像度・比率設定)で必ず指定する。特にヒーロー類は後からのトリミングに頼らず、最初から指定比率で生成すること。
- **hex カラーコードは補助情報**: 多くのモデルは hex コード(`#F6F3EC` 等)を解釈しない。色指定の本体は言葉によるトーン指定(muted cream, deep pine green, dark brown)であり、hex は人間の確認・対応モデル向けの補助とみなす。
- **ネガティブプロンプト非対応モデルの場合**(DALL·E 3 等): 「Negative」の回避事項をポジティブ文に織り込む(例: `natural muted colors with no oversaturation, no text or watermark anywhere, healthy well-formed branches, clean undistorted pot, anatomically correct hands`)。

---

## 3. 画像一覧表

| ID | ファイル名 | 使用箇所 | 比率 | 解像度 | 被写体 |
|---|---|---|---|---|---|
| 01 | `hero-top.webp` | index ヒーロー(全画面背景) | 16:9 | 2400×1350 | 床の間に置かれた樹齢を感じる黒松の盆栽、朝の斜光。左1/3は余白気味 |
| 02 | `intro-hands.webp` | index 導入(左寄せ) | 3:2 | 1600×1067 | 職人の手が鋏で枝を整える手元のクローズアップ(顔なし) |
| 03 | `chapter-time.webp` | index 第一章「時間を育てる」(全画面・ダーク) | 16:9 | 2400×1350 | 暗背景に浮かぶ古木盆栽のシルエット、一筋の光 |
| 04 | `chapter-nature.webp` | index 第二章「自然を写す」(全画面) | 16:9 | 2400×1350 | 苔と紅葉した葉のマクロ、雨上がりの水滴 |
| 05 | `chapter-form.webp` | index 第三章「かたちを見立てる」(全画面) | 16:9 | 2400×1350 | 文人木の流れる幹の曲線、余白を活かした構図 |
| 06 | `nav-guide.webp` | index 下層誘導カード | 4:3 | 1200×900 | 作業台の上の初心者向け盆栽と道具 |
| 07 | `nav-species.webp` | index 下層誘導カード | 4:3 | 1200×900 | 棚に並ぶ異なる樹種の盆栽たち |
| 08 | `nav-care.webp` | index 下層誘導カード | 4:3 | 1200×900 | 銅のじょうろで水やりする瞬間 |
| 09 | `nav-culture.webp` | index 下層誘導カード | 4:3 | 1200×900 | 掛け軸のある床の間に飾られた盆栽 |
| 10 | `bonlog-app.webp` | index BON-LOG 告知 | 3:4 | 900×1200 | ※実物スクショ推奨。代替: 盆栽の横のスマホに記録アプリ画面 |
| 11 | `hero-guide.webp` | guide ヒーロー | 16:9 | 2400×1350 | 明るい縁側で初めての一鉢に向き合う手元 |
| 12 | `step-choose.webp` | guide ステップ1 | 4:3 | 1200×900 | 園芸店で小品盆栽を選ぶ手元 |
| 13 | `step-place.webp` | guide ステップ2 | 4:3 | 1200×900 | 日当たりの良いベランダの棚に置かれた盆栽 |
| 14 | `step-water.webp` | guide ステップ3 | 4:3 | 1200×900 | 土に注がれる水、細かい水流のクローズアップ |
| 15 | `tools.webp` | guide 道具紹介 | 3:2 | 1600×1067 | 帆布の上に並ぶ盆栽鋏・ピンセット・じょうろ(はす口)・針金 |
| 16 | `first-tree.webp` | guide 最初の一鉢 | 3:2 | 1600×1067 | 丈夫な真柏の小品盆栽、シンプルな鉢 |
| 17 | `hero-species.webp` | species ヒーロー | 16:9 | 2400×1350 | 展示棚に並ぶ多様な樹種、奥行きのある構図 |
| 18 | `sp-kuromatsu.webp` | species 黒松 | 16:9 | 2000×1125 | 荒々しい幹肌と力強い枝ぶりの黒松 |
| 19 | `sp-goyomatsu.webp` | species 五葉松 | 16:9 | 2000×1125 | 短い葉が密につく気品ある五葉松 |
| 20 | `sp-shimpaku.webp` | species 真柏 | 16:9 | 2000×1125 | 白い舎利と緑のコントラストが美しい真柏 |
| 21 | `sp-momiji.webp` | species もみじ | 16:9 | 2000×1125 | 紅葉の盛りのもみじ盆栽、逆光で透ける葉 |
| 22 | `sp-keyaki.webp` | species 欅 | 16:9 | 2000×1125 | ほうき立ちの欅、冬の枝ぶり(寒樹) |
| 23 | `sp-ume.webp` | species 梅 | 16:9 | 2000×1125 | 古木に白い花が咲く梅盆栽、早春の光 |
| 24 | `hero-care.webp` | care ヒーロー | 16:9 | 2400×1350 | 朝の水やり風景、水滴と光 |
| 25 | `care-pruning.webp` | care 剪定 | 3:2 | 1600×1067 | 鋏で芽を摘む精密な手元 |
| 26 | `care-repotting.webp` | care 植替え | 3:2 | 1600×1067 | 鉢から抜いた根鉢をほぐす作業 |
| 27a | `season-spring.webp` | care 四季タブ・春 | 4:3 | 1200×900 | 芽吹きの盆栽、みずみずしい新芽 |
| 27b | `season-summer.webp` | care 四季タブ・夏 | 4:3 | 1200×900 | 葉水と木漏れ日、涼しげな夏の棚場 |
| 27c | `season-autumn.webp` | care 四季タブ・秋 | 4:3 | 1200×900 | 紅葉と施肥(固形肥料が土に置かれた鉢) |
| 27d | `season-winter.webp` | care 四季タブ・冬 | 4:3 | 1200×900 | 雪をかぶった枝、冬の保護(棚下) |
| 28 | `hero-culture.webp` | culture ヒーロー | 16:9 | 2400×1350 | 歴史を感じる名品盆栽、美術館のような静謐な照明 |
| 29 | `culture-wabisabi.webp` | culture 侘び寂び | 3:2 | 1600×1067 | 苔むした石灯籠と盆栽、経年の美 |
| OG | `og-image.webp` | 全ページ OGP | 1.91:1 | 1200×630 | 01 と同系統の構図に余白(テキストは入れない) |

---

## 4. 画像ごとの個別指示

### 01. hero-top.webp
- 保存先: `assets/images/hero-top.webp`
- 使用箇所: `index.html` ヒーローセクション(全画面背景、`object-fit: cover`、`fetchpriority="high"`、lazy なし)
- アスペクト比 / 解像度: 16:9 / 2400×1350px、WebP 品質80
- 表示上の注意: 中央〜やや右に主題を置く。左側に縦書きコピー「小さな鉢の、大きな宇宙。」が載るため、**左1/3は余白気味**にする。
- Prompt:
  > An ancient Japanese black pine bonsai (kuromatsu) with thick, rugged, deeply fissured bark and dark green needles, displayed in a traditional tokonoma alcove on a plain wooden stand, soft morning side-light raking across the moss-covered soil surface, quiet washi-paper wall behind, the tree positioned to the right of center with generous negative space on the left third of the frame, shallow depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look

### 02. intro-hands.webp
- 保存先: `assets/images/intro-hands.webp`
- 使用箇所: `index.html` 導入セクション(`.split` の写真側、左寄せ)
- アスペクト比 / 解像度: 3:2 / 1600×1067px、WebP 品質80
- 表示上の注意: 手元のクローズアップ。顔は絶対に写さない。
- Prompt:
  > Close-up of a craftsman's weathered hands, hands only, no face, carefully trimming a small branch of a bonsai with traditional Japanese bonsai scissors, soft morning light from a side window, blurred wooden workbench and a moss-covered pot in the background, calm and focused mood, shallow depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look, extra fingers, deformed hands, mutated hands, fused fingers

### 03. chapter-time.webp
- 保存先: `assets/images/chapter-time.webp`
- 使用箇所: `index.html` 第一章「時間を育てる」(全画面・ダークセクション `.chapter--dark`、`--c-night #161B17` 背景上)
- アスペクト比 / 解像度: 16:9 / 2400×1350px、WebP 品質80
- 表示上の注意: **暗めのトーン**。縦書きの章タイトル+本文が重なるため、全体に沈んだ露出で、主題以外は深い影に落とす。
- Prompt:
  > A gnarled, ancient bonsai tree emerging from deep darkness, dramatic single shaft of soft light illuminating the twisting trunk and a few needles while the rest falls into shadow, near-black background, low-key chiaroscuro lighting, contemplative and timeless mood, dark moody tones, shallow depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look

### 04. chapter-nature.webp
- 保存先: `assets/images/chapter-nature.webp`
- 使用箇所: `index.html` 第二章「自然を写す」(全画面 `.chapter`)
- アスペクト比 / 解像度: 16:9 / 2400×1350px、WebP 品質80
- 表示上の注意: マクロ寄り。縦書きタイトルが重なるため片側に静かな面を残す。
- Prompt:
  > Extreme macro close-up of lush green moss and a few softly reddened autumn maple leaves on a bonsai soil surface, tiny water droplets clinging to the moss after rain, glistening softly in gentle overcast light, intimate natural texture, dewy freshness, shallow macro depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look

### 05. chapter-form.webp
- 保存先: `assets/images/chapter-form.webp`
- 使用箇所: `index.html` 第三章「かたちを見立てる」(全画面 `.chapter`)
- アスペクト比 / 解像度: 16:9 / 2400×1350px、WebP 品質80
- 表示上の注意: 余白を大きく取った構図。縦書きタイトルが重なる側は空けておく。
- Prompt:
  > An elegant literati-style bonsai (bunjingi) with a slender, gracefully curving bare trunk and a small tuft of foliage near the top, minimalist composition with abundant negative space, simple unglazed brown pot on a plain wooden stand against a pale washi-paper background, refined and poetic mood emphasizing line and emptiness, soft natural morning light, shallow depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look

### 06. nav-guide.webp
- 保存先: `assets/images/nav-guide.webp`
- 使用箇所: `index.html` 下層誘導カード(盆栽入門へのリンクカード、`.card-grid`)
- アスペクト比 / 解像度: 4:3 / 1200×900px、WebP 品質80
- 表示上の注意: カード上部の画像。主題を中央に置き、カード見出しが下に載る想定。
- Prompt:
  > A small beginner-friendly bonsai in a simple pot on a wooden workbench, accompanied by a few basic tools such as small scissors and a watering can, tidy and inviting arrangement, soft morning light from a window, clean uncluttered background, welcoming beginner mood, shallow depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look

### 07. nav-species.webp
- 保存先: `assets/images/nav-species.webp`
- 使用箇所: `index.html` 下層誘導カード(樹種図鑑へのリンクカード、`.card-grid`)
- アスペクト比 / 解像度: 4:3 / 1200×900px、WebP 品質80
- 表示上の注意: カード上部の画像。複数樹種が並ぶ様子で「図鑑」感を出す。
- Prompt:
  > Several different species of bonsai lined up on a wooden display shelf, including a dark green pine, a delicate deciduous maple, and a juniper, showing variety of shapes and foliage, soft diffused morning light, calm nursery atmosphere, gently blurred background, moderate depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look

### 08. nav-care.webp
- 保存先: `assets/images/nav-care.webp`
- 使用箇所: `index.html` 下層誘導カード(手入れ・育て方へのリンクカード、`.card-grid`)
- アスペクト比 / 解像度: 4:3 / 1200×900px、WebP 品質80
- 表示上の注意: 水やりの瞬間。動きのあるカット。
- Prompt:
  > A moment of watering a bonsai with a copper watering can with a fine rose spout, hands only, no face, thin streams of water falling onto the soil catching the morning light, fresh green foliage, wooden shelf background softly blurred, lively caring mood, shallow depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look, extra fingers, deformed hands, mutated hands, fused fingers

### 09. nav-culture.webp
- 保存先: `assets/images/nav-culture.webp`
- 使用箇所: `index.html` 下層誘導カード(歴史・文化へのリンクカード、`.card-grid`)
- アスペクト比 / 解像度: 4:3 / 1200×900px、WebP 品質80
- 表示上の注意: 床の間の設え。格式ある静けさ。
- Prompt:
  > A dignified bonsai displayed in a traditional tokonoma alcove with a hanging scroll (kakejiku) on the wall behind it, tatami floor, quiet formal Japanese interior, soft indirect morning daylight, serene and cultured atmosphere, restrained composition, shallow depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look

### 10. bonlog-app.webp
- 保存先: `assets/images/bonlog-app.webp`
- 使用箇所: `index.html` BON-LOG 告知セクション(縦長ビジュアル、右カラム)
- アスペクト比 / 解像度: 3:4 / 900×1200px、WebP 品質80
- 表示上の注意: **実物スクリーンショットの使用を強く推奨**(セクション 5 参照)。生成する場合も UI 文字の破綻に注意し、下記の代替プロンプトを使う。
- Prompt(代替・生成する場合):
  > A modern smartphone placed upright next to a small bonsai on a wooden table, the phone screen showing a clean minimalist plant-care journal app interface with a photo of a bonsai and simple monochrome ink-style UI, the UI kept vague and out of sharp focus so no readable text is needed, soft morning light, shallow depth of field with the bonsai gently blurred, calm and modern lifestyle mood, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look, garbled UI text, distorted app interface, unreadable characters

### 11. hero-guide.webp
- 保存先: `assets/images/hero-guide.webp`
- 使用箇所: `guide.html` ヒーロー(小型ヒーロー `min-height: 60svh`、`object-fit: cover`)
- アスペクト比 / 解像度: 16:9 / 2400×1350px、WebP 品質80
- 表示上の注意: h1「はじめての盆栽」とリードが重なる。片側(特に左)に余白を残し、明るく親しみやすいトーンに。
- Prompt:
  > A bright, sunlit engawa (wooden veranda) where a person's hands, hands only, no face, gently hold and examine their very first small bonsai in a simple pot, warm inviting morning light streaming across the wood, garden softly blurred in the background, hopeful beginner mood with calm open space on one side of the frame, shallow depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look, extra fingers, deformed hands, mutated hands, fused fingers

### 12. step-choose.webp
- 保存先: `assets/images/step-choose.webp`
- 使用箇所: `guide.html` ステップ1「一鉢を選ぶ」(`.split` の写真側)
- アスペクト比 / 解像度: 4:3 / 1200×900px、WebP 品質80
- 表示上の注意: 選ぶ手元。顔なし。
- Prompt:
  > Hands only, no face, choosing a small mame-size bonsai at a garden nursery, one hand gently lifting a little potted juniper among rows of small bonsai on a bench, soft natural morning daylight, greenhouse or nursery shelving softly blurred behind, thoughtful selecting mood, shallow depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look, extra fingers, deformed hands, mutated hands, fused fingers

### 13. step-place.webp
- 保存先: `assets/images/step-place.webp`
- 使用箇所: `guide.html` ステップ2「置き場所を決める」(`.split` の写真側)
- アスペクト比 / 解像度: 4:3 / 1200×900px、WebP 品質80
- 表示上の注意: ベランダの棚に置かれた盆栽。屋外の生活感。
- Prompt:
  > A small bonsai placed on a wooden shelf on a sunny apartment balcony with good airflow, morning sunlight and gentle shadows across the slats, simple railing and calm sky softly out of focus behind, everyday outdoor living mood, shallow depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look

### 14. step-water.webp
- 保存先: `assets/images/step-water.webp`
- 使用箇所: `guide.html` ステップ3「水やりを覚える」(`.split` の写真側)。※`care.html` 基本三作業「水やり」でも再利用。
- アスペクト比 / 解像度: 4:3 / 1200×900px、WebP 品質80
- 表示上の注意: 水流のクローズアップ。動きを止めた瞬間。
- Prompt:
  > Close-up of water being poured onto bonsai soil, fine delicate streams of water from a watering can rose falling and soaking into the dark soil and green moss, tiny splashes frozen in soft morning light, glistening freshness, wooden bench softly blurred behind, shallow depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look, extra fingers, deformed hands, mutated hands, fused fingers

### 15. tools.webp
- 保存先: `assets/images/tools.webp`
- 使用箇所: `guide.html` 道具紹介(`.split` の写真側)
- アスペクト比 / 解像度: 3:2 / 1600×1067px、WebP 品質80
- 表示上の注意: 道具のフラットレイ。整然と美しく。
- Prompt:
  > A neat flat-lay of traditional Japanese bonsai tools arranged tidily on a natural canvas cloth: black bonsai scissors, a pair of tweezers, a small copper watering can with a fine rose spout, and a coil of training wire, top-down slightly angled view, soft even morning daylight, clean minimal composition, refined craftsmanship mood, deep depth of field, everything in sharp focus, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look

### 16. first-tree.webp
- 保存先: `assets/images/first-tree.webp`
- 使用箇所: `guide.html` 最初の一鉢(`.split` の写真側)
- アスペクト比 / 解像度: 3:2 / 1600×1067px、WebP 品質80
- 表示上の注意: 主題を明快に。単体の真柏を丁寧に見せる。
- Prompt:
  > A hardy small shimpaku juniper bonsai (shimpaku) in a simple unglazed rectangular pot, healthy lush green foliage and a gently twisting trunk, presented as an ideal sturdy first bonsai, plain washi-paper or wooden background, soft morning light, clean centered composition, reassuring and approachable mood, shallow depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look

### 17. hero-species.webp
- 保存先: `assets/images/hero-species.webp`
- 使用箇所: `species.html` ヒーロー(`object-fit: cover`)
- アスペクト比 / 解像度: 16:9 / 2400×1350px、WebP 品質80
- 表示上の注意: h1「樹種図鑑」とリードが重なる。奥行きのある棚の並びで「多様さ」を表現しつつ、片側に余白を残す。
- Prompt:
  > A wide view of a bonsai display area with many diverse tree species arranged on tiered wooden shelves receding into depth, pines, junipers, maples and flowering trees showing variety of form and foliage, soft diffused morning light, layered depth with foreground sharp and background gently blurred, calm exhibition atmosphere, open space on one side of the frame, moderate depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look

### 18. sp-kuromatsu.webp
- 保存先: `assets/images/sp-kuromatsu.webp`
- 使用箇所: `species.html` 黒松の樹種セクション(`.species-item` 全幅写真)
- アスペクト比 / 解像度: 16:9 / 2000×1125px、WebP 品質80
- 表示上の注意: 黒松の力強さを主役に。テキストが重なる場合に備え片側をやや静かに。
- Prompt:
  > A powerful Japanese black pine bonsai (kuromatsu) with a thick trunk, rough deeply cracked dark bark, and strong muscular branching holding dense dark green needles, the classic masculine "otoko-matsu" character, in an unglazed brown pot on a wooden stand, plain neutral background, soft morning side-light, dignified strong mood, shallow depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look

### 19. sp-goyomatsu.webp
- 保存先: `assets/images/sp-goyomatsu.webp`
- 使用箇所: `species.html` 五葉松の樹種セクション(`.species-item` 全幅写真)
- アスペクト比 / 解像度: 16:9 / 2000×1125px、WebP 品質80
- 表示上の注意: 短い葉の密なつきと気品を強調。
- Prompt:
  > An elegant Japanese white pine bonsai (goyomatsu) with short needles growing in dense refined clusters of five, soft blue-green foliage, a graceful tapering trunk, in a refined unglazed pot on a wooden stand, plain neutral background, soft morning light, noble and serene mood suited to celebration, shallow depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look

### 20. sp-shimpaku.webp
- 保存先: `assets/images/sp-shimpaku.webp`
- 使用箇所: `species.html` 真柏の樹種セクション(`.species-item` 全幅写真)
- アスペクト比 / 解像度: 16:9 / 2000×1125px、WebP 品質80
- 表示上の注意: 白い舎利と緑葉のコントラストを主役に。
- Prompt:
  > A striking shimpaku juniper bonsai (shimpaku) featuring dramatic bleached white shari deadwood spiraling along the trunk and weathered jin deadwood on the branch tips, contrasting with lush living green foliage, sinuous natural movement, in an unglazed pot on a wooden stand, plain neutral background, soft morning light emphasizing the white deadwood texture, dramatic yet elegant mood, shallow depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look

### 21. sp-momiji.webp
- 保存先: `assets/images/sp-momiji.webp`
- 使用箇所: `species.html` もみじの樹種セクション(`.species-item` 全幅写真)
- アスペクト比 / 解像度: 16:9 / 2000×1125px、WebP 品質80
- 表示上の注意: 紅葉の盛り。逆光で葉を透かす。彩度は上げすぎず落ち着いた紅に。
- Prompt:
  > A Japanese maple bonsai (momiji) in full autumn color, delicate palmate leaves turning warm crimson and amber, softly backlit so the leaves glow translucently against a dark background, fine ramified branching, in a shallow pot on a wooden stand, gentle morning backlight, poetic seasonal mood with restrained not-oversaturated reds, shallow depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look

### 22. sp-keyaki.webp
- 保存先: `assets/images/sp-keyaki.webp`
- 使用箇所: `species.html` 欅の樹種セクション(`.species-item` 全幅写真)
- アスペクト比 / 解像度: 16:9 / 2000×1125px、WebP 品質80
- 表示上の注意: ほうき立ちの端正さ。落葉した冬の枝ぶり(寒樹)を主題に。
- Prompt:
  > A Japanese zelkova bonsai (keyaki) in the classic broom style (hokidachi), a symmetrical upright trunk fanning out into a fine dense network of leafless winter twigs forming a delicate dome, bare-branch "kanju" winter silhouette, in a shallow oval pot on a wooden stand, soft pale winter morning light, plain pale background, quiet refined mood, shallow depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look

### 23. sp-ume.webp
- 保存先: `assets/images/sp-ume.webp`
- 使用箇所: `species.html` 梅の樹種セクション(`.species-item` 全幅写真)
- アスペクト比 / 解像度: 16:9 / 2000×1125px、WebP 品質80
- 表示上の注意: 古木と白花の対比。早春のやわらかい光。
- Prompt:
  > A flowering Japanese apricot bonsai (ume) with a rugged, aged, gnarled dark trunk contrasted against fresh white plum blossoms opening on slender branches, early spring, soft pale morning light, plain neutral background, a few blossoms in crisp focus and the rest gently blurred, delicate and hopeful early-spring mood, shallow depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look

### 24. hero-care.webp
- 保存先: `assets/images/hero-care.webp`
- 使用箇所: `care.html` ヒーロー(`object-fit: cover`)
- アスペクト比 / 解像度: 16:9 / 2400×1350px、WebP 品質80
- 表示上の注意: h1「育てる、という愉しみ」とリードが重なる。片側に余白。朝の水やりの情景。
- Prompt:
  > A serene early morning scene of watering bonsai on an outdoor wooden shelf, hands only, no face, a watering can releasing fine streams of water over lush green bonsai, droplets and light rays catching the low morning sun, gentle mist and glistening leaves, calm nurturing atmosphere, open space on one side of the frame, shallow depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look, extra fingers, deformed hands, mutated hands, fused fingers

### 25. care-pruning.webp
- 保存先: `assets/images/care-pruning.webp`
- 使用箇所: `care.html` 基本三作業「剪定」(`.split` の写真側)
- アスペクト比 / 解像度: 3:2 / 1600×1067px、WebP 品質80
- 表示上の注意: 精密な手元。顔なし。
- Prompt:
  > A precise close-up of hands, hands only, no face, using fine bonsai scissors to pinch and prune a tender new bud on a bonsai branch, delicate careful gesture, soft morning light, blurred green foliage and wooden bench in the background, focused meticulous mood, shallow depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look, extra fingers, deformed hands, mutated hands, fused fingers

### 26. care-repotting.webp
- 保存先: `assets/images/care-repotting.webp`
- 使用箇所: `care.html` 基本三作業「植替え」(`.split` の写真側)
- アスペクト比 / 解像度: 3:2 / 1600×1067px、WebP 品質80
- 表示上の注意: 根鉢をほぐす作業。顔なし。土や根のテクスチャを丁寧に。
- Prompt:
  > Close-up of hands, hands only, no face, carefully teasing apart the root ball of a bonsai just lifted out of its pot during repotting, using a root rake, exposed roots and crumbling soil in rich detail, working on a canvas cloth with an empty pot and fresh soil nearby, soft diffused morning daylight, hands-on horticultural mood, shallow depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look, extra fingers, deformed hands, mutated hands, fused fingers

### 27a. season-spring.webp
- 保存先: `assets/images/season-spring.webp`
- 使用箇所: `care.html` 四季の作業カレンダー・春タブ(タブパネル内画像)
- アスペクト比 / 解像度: 4:3 / 1200×900px、WebP 品質80
- 表示上の注意: **27a〜27d は4枚並べて使う**ため、構図・距離感・カメラ高さ・被写体サイズを揃える。単体の盆栽を同じくらいの画面占有率でほぼ中央に置き、季節の光と色だけを変える。春は芽吹きの明るくみずみずしい光。
- Prompt:
  > A single bonsai on a wooden shelf in spring, bursting with fresh tender new buds and bright young green shoots, bright soft spring morning light, delicate freshness of new growth, consistent centered framing with the tree filling a similar portion of the frame, plain softly blurred background, hopeful spring mood, shallow depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look

### 27b. season-summer.webp
- 保存先: `assets/images/season-summer.webp`
- 使用箇所: `care.html` 四季の作業カレンダー・夏タブ(タブパネル内画像)
- アスペクト比 / 解像度: 4:3 / 1200×900px、WebP 品質80
- 表示上の注意: 27a〜27d と構図・距離感を揃える(同じ画面占有率・ほぼ中央・同じカメラ高さ)。夏は木漏れ日と葉水で涼しげに。
- Prompt:
  > A single bonsai on a wooden shelf in summer, deep lush green foliage misted with fine water droplets (leaf misting), dappled sunlight filtering through leaves onto the shelf, cool refreshing shaded summer atmosphere, consistent centered framing with the tree filling a similar portion of the frame, plain softly blurred background, shallow depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look

### 27c. season-autumn.webp
- 保存先: `assets/images/season-autumn.webp`
- 使用箇所: `care.html` 四季の作業カレンダー・秋タブ(タブパネル内画像)
- アスペクト比 / 解像度: 4:3 / 1200×900px、WebP 品質80
- 表示上の注意: 27a〜27d と構図・距離感を揃える(同じ画面占有率・ほぼ中央・同じカメラ高さ)。秋は紅葉と、土に置かれた固形肥料が見える。
- Prompt:
  > A single bonsai on a wooden shelf in autumn, leaves turning warm gold and muted crimson, with small solid fertilizer cakes placed on the soil surface (fertilizing), soft warm low autumn morning light, mellow seasonal atmosphere with restrained not-oversaturated colors, consistent centered framing with the tree filling a similar portion of the frame, plain softly blurred background, shallow depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look

### 27d. season-winter.webp
- 保存先: `assets/images/season-winter.webp`
- 使用箇所: `care.html` 四季の作業カレンダー・冬タブ(タブパネル内画像)
- アスペクト比 / 解像度: 4:3 / 1200×900px、WebP 品質80
- 表示上の注意: 27a〜27d と構図・距離感を揃える(同じ画面占有率・ほぼ中央・同じカメラ高さ)。冬は雪をかぶった枝、棚下での保護。冷たく澄んだ光。
- Prompt:
  > A single bonsai on a wooden shelf in winter, bare branches lightly covered with fresh snow, sheltered under a lower shelf for winter protection, cold clear pale winter light, still and quiet frozen atmosphere, consistent centered framing with the tree filling a similar portion of the frame, plain softly blurred background, shallow depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look

### 28. hero-culture.webp
- 保存先: `assets/images/hero-culture.webp`
- 使用箇所: `culture.html` ヒーロー(`object-fit: cover`)
- アスペクト比 / 解像度: 16:9 / 2400×1350px、WebP 品質80
- 表示上の注意: h1「千年を、鉢の上に」とリードが重なる。美術館のような静謐な照明。片側に余白。
- Prompt:
  > A masterpiece ancient bonsai of great age and history displayed like a museum exhibit, softly spotlit against a deep dark neutral background, quiet reverent museum lighting emphasizing the venerable trunk and refined form, still and solemn atmosphere, generous open dark space on one side of the frame, shallow depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look

### 29. culture-wabisabi.webp
- 保存先: `assets/images/culture-wabisabi.webp`
- 使用箇所: `culture.html` 侘び寂びセクション(`.split` の写真側)
- アスペクト比 / 解像度: 3:2 / 1600×1067px、WebP 品質80
- 表示上の注意: 経年の味わいを主題に。苔むした石灯籠と盆栽。
- Prompt:
  > A weathered moss-covered stone lantern beside an aged bonsai in a quiet Japanese garden, embodying wabi-sabi aesthetics, patina of age, lichen and moss, imperfect natural beauty, soft misty overcast light, muted subdued tones, asymmetry and negative space, contemplative timeworn mood, shallow depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look

### OG. og-image.webp
- 保存先: `assets/images/og-image.webp`
- 使用箇所: 全ページ共通 OGP(`<meta property="og:image">` / Twitter card)。SNS シェア時のサムネイル。
- アスペクト比 / 解像度: 1.91:1 / 1200×630px、WebP 品質80(SNS 側が非対応の場合に備え PNG/JPG 併用可)
- 表示上の注意: 01(hero-top)と同系統の黒松+床の間の構図。**テキストは一切入れない**(OGP のタイトルは SNS 側が重ねる)。安全のため中央〜やや右に主題、周囲に余白を確保して 1200×630 にトリミングされても主題が切れないようにする。
- Prompt:
  > An ancient Japanese black pine bonsai (kuromatsu) with thick rugged bark in a traditional tokonoma alcove, matching the hero composition, soft morning side-light across moss-covered soil, wide banner-friendly composition with ample calm negative space around the tree and no text anywhere, subject kept centered-right and safely away from the edges, shallow depth of field, photorealistic, professional photography, muted earthy color palette (cream #F6F3EC, deep pine green #2E4B3C, dark brown #4A3728), Japanese aesthetic, high detail
- Negative:
  > oversaturated colors, HDR look, plastic-looking leaves, deformed branches, warped pot, text, watermark, logo, people's faces, illustration, painting, CGI look

---

## 5. BON-LOG 用画像についての注記(`bonlog-app.webp`)

- **実物スクリーンショットの使用を強く推奨します。** BON-LOG(https://www.bon-log.com/)の実画面を撮影・キャプチャして `assets/images/bonlog-app.webp`(3:4 / 900×1200px、WebP 品質80)として保存するのが最良です。理由は、
  1. **本物感** — 実在サービスの告知なので、実画面のほうが信頼性・訴求力が高い。
  2. **UI 文字の破綻回避** — AI 生成はアプリ UI の文字・アイコン・レイアウトを高確率で破綻させ、審査でマイナス評価になりやすい。
- 撮影方法の目安: スマートフォン実機、またはブラウザのデバイスモード(縦長・3:4 相当)で BON-LOG のトップ/記録画面を表示 → スクリーンショット → 900×1200px にトリミング → WebP 品質80 に変換。可能なら盆栽の実物や木のテーブルを背景にした「置き画」にすると本サイトのトーンに馴染む。
- **どうしても生成する場合**は、セクション「10. bonlog-app.webp」の代替 Prompt を使用してください。その際は必ず **UI をピントから外して文字を判読不能にぼかす**指示(プロンプトに含めた `the UI kept vague and out of sharp focus`)を活かし、Negative の `garbled UI text, distorted app interface, unreadable characters` を残すこと。生成物に破綻した文字が見える場合は採用せず、スクリーンショットに切り替えてください。

---

## 6. 生成後のチェックリスト

- [ ] 全 33 ファイルが `assets/images/` に、指定のファイル名・解像度・16:9 等の比率で揃っているか。
- [ ] WebP・品質80 で書き出されているか(PNG/JPG 生成分は変換済みか)。
- [ ] ヒーロー・章画像は、テキストが載る側に余白があるか。
- [ ] 過飽和・HDR 調・プラスチックな葉・歪んだ枝/鉢になっていないか(共通 Negative の観点で目視確認)。
- [ ] 手元カットに顔が写り込んでいないか。
- [ ] 27a〜27d の4枚が、構図・距離感・被写体サイズで統一されているか。
- [ ] `bonlog-app.webp` は実スクリーンショットを優先採用したか(生成物は文字破綻がないか)。
- [ ] `og-image.webp` にテキストが入っていないか、主題が端で切れないか。
- [ ] 各画像で複数候補を生成し、最良の1枚を採用したか(基準を満たさない候補しかない場合は再生成する)。
