# portfolio

Next.js + TypeScript で構築したポートフォリオです。vinextを用いてCloudflare Workersへデプロイできます。

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

`pnpm dev` はWorkersランタイム上でvinextの開発サーバーを起動します。Next.js標準の開発サーバーを使う場合は `pnpm dev:next` を実行します。

## Cloudflare Workers へのデプロイ

初回のみCloudflareへログインします。

```bash
pnpm exec wrangler login
```

以降は次のコマンドでビルドとデプロイを実行できます。

```bash
pnpm deploy
```

`pnpm deploy` はvinextでWorkers用のビルドを行い、Worker `portfolio` にデプロイします。

[![kk2a](https://img.shields.io/endpoint?url=https%3A%2F%2Fatcoder-badges.now.sh%2Fapi%2Fatcoder%2Fjson%2Fkk2a)](https://atcoder.jp/users/kk2a)
