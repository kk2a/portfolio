# portfolio

Next.js + TypeScript で構築したポートフォリオです。静的エクスポートに対応しており、Cloudflare Pages へデプロイできます。

## 開発

```bash
pnpm install
pnpm dev
```

品質チェックと本番ビルドは次のコマンドで実行できます。

```bash
pnpm typecheck
pnpm lint
pnpm build
```

## Cloudflare Pages へのデプロイ

初回のみCloudflareへログインし、Pagesプロジェクトを作成します。

```bash
pnpm exec wrangler login
pnpm exec wrangler pages project create portfolio --production-branch main
```

以降は次のコマンドでビルドとデプロイを実行できます。

```bash
pnpm deploy
```

`pnpm deploy` は `out/` に生成された静的ファイルを、Cloudflare Pages プロジェクト `portfolio` にデプロイします。

[![kk2a](https://img.shields.io/endpoint?url=https%3A%2F%2Fatcoder-badges.now.sh%2Fapi%2Fatcoder%2Fjson%2Fkk2a)](https://atcoder.jp/users/kk2a)
