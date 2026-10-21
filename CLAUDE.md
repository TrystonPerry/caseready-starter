# CaseReady workshop

Read `AGENTS.md` and follow `GUIDE.md`. The attendee uses Claude Desktop Code
in Local mode, starting from a downloaded GitHub ZIP or a clone.

For Cloudflare account setup, authentication, and deployment, follow
`CLOUDFLARE_SETUP.md`. Explain the steps. When Cloudflare login is required, the
attendee runs `npx void connect --platform cloudflare` in Claude Desktop's
terminal panel. Never use Chrome control, computer use, or browser automation
for signup, login, verification, authorization, or billing. Use only Void for
deployment (`npm run deploy:cloudflare`). Do not run `pnpm deploy`.
