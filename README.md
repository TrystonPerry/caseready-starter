# CaseReady starter

A minimal React + [Void](https://void.cloud) template for the CaseReady workshop.
The welcome page previews without Cloudflare credentials or a database.

## Follow the workshop

Download from GitHub using **Code → Download ZIP**, extract it, and open the
folder in **Claude Desktop → Code → Local**. No GitHub account connection needed.
Alternatively, use `git clone` and open the cloned folder. Follow [GUIDE.md](GUIDE.md):

1. Ask Claude to install dependencies and start the preview.
2. Paste the CaseReady build prompt.
3. Let Claude explain Cloudflare setup and run Void; complete signup/login yourself.
4. Deploy with Void, request a change, and redeploy.

[CLOUDFLARE_SETUP.md](CLOUDFLARE_SETUP.md) tells Claude how to guide account setup.
Claude must not control Chrome or automate signup, login, or authorization.
All deployments use Void. The full local account/AI/deployment flow still needs a
workshop rehearsal.

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
| `CLOUDFLARE_SETUP.md` | AI instructions for human-operated account setup and Void auth |

This template ships without an account-specific `void.lock.json`. After connecting
your own account, keep the generated lockfile in your own project so future
deployments use the same resources. Never add credentials to source control.
