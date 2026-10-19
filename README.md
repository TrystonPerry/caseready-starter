# CaseReady starter

A minimal React + [Void](https://void.cloud) template for the CaseReady workshop.
The welcome page previews without Cloudflare credentials or a database.

## Follow the workshop

Choose **Use this template → Create a new repository**, then open your copy in
Claude Code web or a local coding agent. Follow [GUIDE.md](GUIDE.md):

1. Ask the agent to install dependencies and start the preview.
2. Paste the CaseReady build prompt.
3. Ask the agent to connect your Cloudflare account and deploy.
4. Request a change and redeploy.

Web agents need separate Cloudflare credentials and an environment that can expose
its preview server. The guide explains this; the full browser path still needs a
workshop rehearsal. A local agent can use Void's browser login.

## Run manually

Use Node **>=24.21.0** and pnpm **10.34.7** (also declared in package.json).

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open the address printed by the server. No migrations, seed, or `void init` needed.

```sh
pnpm typecheck
pnpm build
pnpm deploy
```

Deploy connects to your own Cloudflare account. After adding Workers AI, preview
also needs account access. See [GUIDE.md](GUIDE.md) for account setup and AI usage.

## Project layout

| Path | Purpose |
| --- | --- |
| `pages/index.tsx` | Minimal welcome page to replace during the workshop |
| `routes/api/hello.ts` | Example server endpoint |
| `void.config.ts` | Shared app configuration, without an account target |
| `AGENTS.md` | Instructions for your coding agent |
| `GUIDE.md` | Copyable start, build, and deployment prompts |

This template ships without an account-specific `void.lock.json`. After connecting
your own account, keep the generated lockfile in your own project so future
deployments use the same resources. Never add credentials to source control.
