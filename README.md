# caseready

A React app built with [Void](https://void.cloud), a full-stack Vite framework, and deployed to Cloudflare Workers with a D1 (SQLite) database.

## Prerequisites

- [Node.js](https://nodejs.org/) 24 or newer
- [pnpm](https://pnpm.io/installation) (`npm install -g pnpm`)

## Run locally

```sh
# 1. Install dependencies
pnpm install

# 2. Create the local database and load sample data
pnpm exec void db migrate
pnpm exec void db seed

# 3. Start the dev server
pnpm dev
```

Open http://localhost:5173. The API example is at http://localhost:5173/api/hello.

The local database lives in `.void/` and is not committed, so each machine gets its own.

## Project layout

| Path | What it is |
| --- | --- |
| `pages/` | Server-rendered React pages. `index.server.ts` loads data for `index.tsx`. |
| `routes/api/` | API routes (`routes/api/hello.ts` → `/api/hello`) |
| `db/schema.ts` | Database tables (Drizzle) |
| `db/migrations/` | Generated SQL migrations |
| `db/seed.ts` | Sample data for local development |

## Changing the database

After you edit `db/schema.ts`:

```sh
pnpm exec void db generate   # write a new migration
pnpm exec void db migrate    # apply it locally
```

Commit the generated files in `db/migrations/`.

## Deploy

```sh
pnpm exec void deploy --platform cloudflare
```

This deploys to your own Cloudflare account and asks you to log in the first time.
