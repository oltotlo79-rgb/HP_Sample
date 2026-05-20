# 画像配置ディレクトリ

このディレクトリ配下に、codex で生成した画像を配置してください。
配置先・ファイル名・サイズ・プロンプトの完全な指示書は以下を参照:

- `docs/plans/codex-image-generation.md`

## 想定ディレクトリ

```
public/
├── images/
│   ├── sample-a/        # Organic Forest
│   ├── sample-b/        # Neo Mint Glass
│   ├── sample-c/        # Editorial Botanical
│   └── landing/         # メインランディング用
├── og/                  # OGP/Twitter Card 用
└── brand/               # ロゴ (支給予定)
```

現状の Next.js 実装は **すべて SVG ベースで画像なしで描画**するため、
codex 生成画像が無くてもサイトは動作します。

画像が揃ったら、各ページの該当箇所で `<Image src="/images/..." />` に
差し替えてください。
