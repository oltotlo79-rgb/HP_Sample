# Cloudflare へのデプロイ手順

最終更新: 2026-05-20
対象プロジェクト: QuickCRM HP (Next.js 16 + App Router + @opennextjs/cloudflare)
リポジトリ: https://github.com/oltotlo79-rgb/HP_Sample

---

## 0. 全体像

このプロジェクトは Cloudflare **Workers** に SSR 構成でデプロイする想定です。アダプタは `@opennextjs/cloudflare` (OpenNext) です。

```
GitHub Repo
   │
   ├─ パス① Cloudflare Workers Builds (Git 統合, 推奨)
   │     Cloudflare がリポジトリを pull → ビルド → 自動デプロイ
   │
   ├─ パス② GitHub Actions
   │     GitHub Actions がビルド → Wrangler で deploy
   │
   └─ パス③ ローカル `wrangler deploy`
         手元で build → wrangler deploy
         (Windows ARM64 では workerd が無く preview は不可、deploy のみ可能)
```

このマシン (Windows ARM64) は `workerd` が無いため、ローカル `wrangler dev` で動作確認はできません。よって **パス① を強く推奨** します。

---

## 1. 前提条件

- ✅ Cloudflare のアカウント (有り)
- ✅ GitHub リポジトリ (https://github.com/oltotlo79-rgb/HP_Sample)
- ⬜ Cloudflare の **Account ID** を控えていること
- ⬜ (パス②/③ を選ぶ場合のみ) Cloudflare の **API Token** を発行していること
- ⬜ (将来) 独自ドメイン `quickcrm.site` を Cloudflare 側に切替する判断

---

## 2. パス① ─ Cloudflare Workers Builds (推奨)

> Cloudflare が GitHub と直接連携し、ビルドからデプロイまで全自動で行います。
> ローカルに workerd が無くてもデプロイ可能で、Push ごとに自動更新されます。

### 2.1 Cloudflare ダッシュボードでプロジェクト作成

1. https://dash.cloudflare.com にログイン
2. 左メニュー **Workers & Pages** をクリック
3. **Create application** → **Workers** タブ → **Connect to Git** を選択
4. **GitHub** 認可 (初回のみ) → **Install Cloudflare on GitHub** で対象リポジトリ (`oltotlo79-rgb/HP_Sample`) のアクセスを許可
5. リポジトリ一覧から `HP_Sample` を選択 → **Begin setup**

### 2.2 ビルド設定

| 項目 | 値 |
|---|---|
| Project name | `quickcrm-hp` (Worker 名にもなる) |
| Production branch | `main` |
| Framework preset | `Next.js` |
| Build command | `npx opennextjs-cloudflare build` |
| Deploy command | `npx wrangler deploy` |
| Root directory | (空欄 / プロジェクト直下) |
| Node version | `20` 以上 (環境変数で `NODE_VERSION=20`) |

設定後 **Save and Deploy** で初回ビルドが始まります。
ビルド完了で `https://quickcrm-hp.<your-subdomain>.workers.dev` の URL が払い出されます。

### 2.3 確認

ダッシュボード → **Workers & Pages** → `quickcrm-hp` を開き:
- **Settings** タブ: Production branch / Build command / Node version を確認
- **Deployments** タブ: 各コミットのビルドログが見られる
- **Custom domains** タブ: ドメイン接続はここで行う (§5)

### 2.4 以後の更新フロー

```
git push origin main    →    Cloudflare が自動ビルド    →    本番反映
git push origin feature →    Preview デプロイメント (個別 URL)
```

PR 単位で Preview URL が発行されるので、レビュー用にも使えます。

---

## 3. パス② ─ GitHub Actions

> ビルドを GitHub Actions (Linux runner) で行い、`wrangler deploy` で Cloudflare に送ります。

### 3.1 Cloudflare API Token 発行

1. https://dash.cloudflare.com/profile/api-tokens
2. **Create Token** → テンプレ **Edit Cloudflare Workers** を選択
3. **Account Resources**: `Include - <対象アカウント>`
4. **Zone Resources**: `Include - All zones` (独自ドメイン使う場合)
5. **TTL**: 任意 (無期限可)
6. **Continue to summary** → **Create Token** → トークン文字列をコピー (1 回だけ表示)

### 3.2 Account ID の確認

ダッシュボード右側 **Account ID** をコピー (例: `a1b2c3d4...`)。

### 3.3 GitHub Secrets 設定

GitHub リポジトリ → **Settings** → **Secrets and variables** → **Actions** → **New repository secret** で 2 個登録:

| Name | Value |
|---|---|
| `CLOUDFLARE_API_TOKEN` | 3.1 で取得したトークン |
| `CLOUDFLARE_ACCOUNT_ID` | 3.2 の Account ID |

### 3.4 ワークフロー追加

`.github/workflows/deploy.yml` を作成:

```yaml
name: Deploy to Cloudflare Workers

on:
  push:
    branches: [main]
  workflow_dispatch: {}

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build (OpenNext)
        run: npx opennextjs-cloudflare build

      - name: Deploy
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          command: deploy
```

main に push されると自動でデプロイされます。

---

## 4. パス③ ─ ローカル `wrangler deploy`

> このマシン (Windows ARM64) は workerd 非対応のため `wrangler dev` / `preview` は動きません。
> ですが `wrangler deploy` (= API へアップロード) は動作する可能性が高いです。
> 他マシン (Win x64 / Mac / Linux) が使えるなら最も柔軟。

### 4.1 wrangler 認証

```powershell
cd C:\Users\oltot\Documents\git-projects\HP_Sample
npx wrangler login
```

ブラウザが開いて Cloudflare の OAuth を許可すると認証完了。

### 4.2 ビルド

```powershell
npx opennextjs-cloudflare build
```

出力: `.open-next/worker.js` と `.open-next/assets/`。
※ Windows ARM64 では `opennextjs-cloudflare` の内部で `workerd` を呼ぶ箇所があり、失敗することがある (確認次第追記)。

### 4.3 デプロイ

```powershell
npx wrangler deploy
```

成功すると `https://quickcrm-hp.<subdomain>.workers.dev` が払い出される。

---

## 5. 独自ドメイン (`quickcrm.site`) の接続

> 切替は本リポジトリ範囲外。判断が済んだら以下の手順で行います。

### 5.1 ドメインを Cloudflare に登録 (まだなら)

1. Cloudflare ダッシュボード → **Websites** → **Add a site** で `quickcrm.site` を追加
2. ネームサーバを Cloudflare のものに変更 (現在のレジストラ側で設定)
3. SSL/TLS 設定は `Full (Strict)` を推奨

### 5.2 Worker にドメインをバインド

1. **Workers & Pages** → `quickcrm-hp` → **Settings** → **Triggers**
2. **Add Custom Domain** → `quickcrm.site` (および `www.quickcrm.site` も必要なら)
3. Cloudflare が DNS の `CNAME` / `AAAA` を自動設定

数分後に `https://quickcrm.site` で本サイトが表示されます。

### 5.3 並行公開 / 切替戦略 (任意)

- 旧サイトは現状の構成 (恐らく他社ホスト) で残し、Cloudflare 側 Worker を `next.quickcrm.site` で公開し UAT
- 問題なければ DNS をルートドメインに移し正式公開
- 旧サイトは 301 リダイレクトで Worker に転送する設定も可能 (Page Rules / Workers Routes)

---

## 6. 環境変数

現状このプロジェクトは秘匿環境変数を使っていません。将来 Resend や reCAPTCHA キーが必要になった場合:

### パス① (Workers Builds)
- ダッシュボード → `quickcrm-hp` → **Settings** → **Variables and Secrets**
- `Add variable` で **Type = Secret** を選択して値を投入

### パス②/③
- `wrangler secret put RESEND_API_KEY` のように個別投入
- `wrangler.toml` の `[vars]` セクションは平文 var 用 (Secret は使わない)

---

## 7. 動作確認チェックリスト

デプロイ後、本番 URL で以下を確認:

- [ ] `/` (TOP) が 200 で開き、ロゴ・3 カード・フッターが揃う
- [ ] `/sample-a` `/sample-b` `/sample-c` が開く
- [ ] 各サンプルから `screen-builder` `management` に遷移できる
- [ ] §03 Architecture の hero 画像が表示される (`/images/sample-a/architecture/hero.webp`)
- [ ] OG 画像 (`/og/landing.webp` 等) が取得できる
- [ ] スマホ (iOS / Android) で横スクロールが発生しない
- [ ] `prefers-reduced-motion` でアニメが停止 (システム設定で確認)
- [ ] Lighthouse Performance / Accessibility / SEO が 90+ (デスクトップ)

---

## 8. トラブルシューティング

| 症状 | 原因 / 対処 |
|---|---|
| ビルドが `workerd` の post-install で落ちる | Windows ARM64 環境では発生。パス① (Cloudflare の Linux runner) または GitHub Actions を使うことで回避 |
| `next` のバージョン互換エラー | `@opennextjs/cloudflare` の対応 Next バージョンを確認 (本リポは `next@^16.2.6`) |
| 画像 (next/image) が 404 | `next.config.ts` で `images.unoptimized` の調整が必要な場合あり (Workers では Image Optimization が制限されるため) |
| `Image Optimization not supported` 警告 | Cloudflare Workers の Image Optimization は別途 `Cloudflare Images` または `next/image` の `loader` を `cloudflare` に設定して回避 |
| 静的アセットが配信されない | `wrangler.toml` の `[assets]` の `directory` が `.open-next/assets` を指していること |
| ドメインを足したが SSL エラー | Cloudflare の SSL/TLS を `Full (Strict)` に。Worker 側は自動で証明書発行されるので待つ |

---

## 9. 推奨初手 (= 最初にやること)

> **質問: 「まずは何をすればいい?」**

順番に以下の 3 ステップを進めてください。

### Step 1 ─ Cloudflare ダッシュボードを開いて Account ID をメモ

1. https://dash.cloudflare.com にログイン
2. 右上のアカウントピッカーで対象アカウントを選択
3. ダッシュボード右側のサイドバー (またはアカウントホーム画面) に表示される **Account ID** をコピーしてメモ

### Step 2 ─ デプロイ手段を決める

| 候補 | 適合度 | 必要なもの |
|---|---|---|
| **パス① Workers Builds (Git 統合)** | ◎ おすすめ | Cloudflare アカウント + GitHub 連携承認 のみ |
| パス② GitHub Actions | ○ 柔軟 | API Token + Secrets 設定 |
| パス③ ローカル wrangler | △ | 他マシン (Win x64 / Mac / Linux) |

特に理由がなければ **パス①** を選んでください。

### Step 3 ─ Workers Builds で初回プロジェクト作成

§2 の手順 (2.1 → 2.2 → 2.3) に従い、ダッシュボードから GitHub リポを接続してビルド設定を入れる。
初回ビルドは 3〜5 分で完了し、`https://quickcrm-hp.<subdomain>.workers.dev` が払い出される。

---

## 10. 次の一歩

Step 1 が完了したら、Account ID と希望するデプロイパスを教えてください。
パス①であれば Step 3 を一緒に進めます (Cloudflare ダッシュボードの操作は対話で誘導します)。
パス②/③であればワークフローファイルや wrangler コマンドを具体化します。
