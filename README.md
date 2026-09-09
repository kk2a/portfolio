# portfolio

Next.js + TypeScript で構築したポートフォリオです。vinextを用いてCloudflare Workersへデプロイできます。

## 開発

```bash
pnpm install
pnpm dev
```

`pnpm dev` はNext.js標準の開発サーバーを起動します。WSL環境での画面開発はこちらを使用してください。Cloudflare Workersランタイム上で確認する場合は `pnpm dev:workers`、ビルド済みWorkersを確認する場合は `pnpm build && pnpm start` を使用します。

品質チェックと本番ビルドは次のコマンドで実行できます。

```bash
pnpm typecheck
pnpm lint
pnpm build
```

## Cloudflare Workers へのデプロイ

初回のみCloudflareへログインします。

```bash
pnpm exec wrangler login
```

以降は次のコマンドでビルドとデプロイを実行できます。

```bash
pnpm deploy
```

`pnpm deploy` はvinextでWorkers用のビルドを行い、Worker `portfolio` にデプロイします。Workers Buildsからは、ビルド済み成果物をデプロイする `pnpm deploy:built` を使用します。

## CI/CD

Cloudflare Workers Buildsを使用します。CloudflareダッシュボードでGitHubリポジトリをWorkerに接続し、production branchを `main` に設定してください。PRのmergeによって `main` にpushされると、Cloudflare側で自動的にビルド・デプロイされます。

Workers BuildsのBuild settingsは次のように設定します。

- Build command：`pnpm build`
- Deploy command：`pnpm deploy:built`
- Production branch：`main`

認証用API TokenはCloudflare Workers Builds側で設定します。GitHub ActionsやGitHub Secretsは使用しません。

[![kk2a](https://img.shields.io/endpoint?url=https%3A%2F%2Fatcoder-badges.now.sh%2Fapi%2Fatcoder%2Fjson%2Fkk2a)](https://atcoder.jp/users/kk2a)
