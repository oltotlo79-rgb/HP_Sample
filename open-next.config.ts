import { defineCloudflareConfig } from "@opennextjs/cloudflare/config";

// buildCommand を明示しないと、内部の Next.js ビルドフェーズで
// `npm run build` が再帰呼び出しされて無限ループになる
// (本プロジェクトの build スクリプトは opennextjs-cloudflare build なので)。
const cloudflareConfig = defineCloudflareConfig({});

const config = {
  ...cloudflareConfig,
  buildCommand: "npx next build",
};

export default config;
