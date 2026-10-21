<!--injected-by-void-v1.1.12-->
## Void

- This project uses [Void](https://void.cloud), a full-stack Vite framework for Cloudflare Workers with file-based API routing, server-rendered pages, and typed backend services.
- Use Void's CLI and typed APIs. Before working with Void, read the relevant Markdown docs in `node_modules/void/docs/`; start with `guide/quickstart.md` for setup and `reference/cli.md` for commands.

<!--/injected-by-void-->

## Workshop starter

- Follow GUIDE.md: start preview, build from the attendee's prompt, then deploy when requested.
- Assume the attendee arrived with a laptop only. No Node, no pnpm, no Claude setup, no GitHub account, and no Cloudflare account. Do not ask them to have prepared anything. Install and signup happen during the session. If they already have a new enough Node or a Cloudflare account, use it and move on.
- Node must satisfy package.json engines (`>=24.21.0`). If it does not, stop and follow GUIDE.md section 1. After the attendee installs Node, they must fully quit and reopen Claude Desktop before you continue.
- Do not install pnpm globally and do not run `corepack enable`. That command writes into Node's bin directory and needs admin after a nodejs.org install. Install dependencies with `npx --yes pnpm@10.34.7 install --frozen-lockfile`, which uses the committed pnpm-lock.yaml. If something still invokes corepack, set `COREPACK_ENABLE_DOWNLOAD_PROMPT=0` so it does not wait for a download confirmation.
- Run scripts with npm so they resolve from `node_modules/.bin`: `npm run dev`, `npm run typecheck`, `npm run build`, `npm run deploy:cloudflare`. The deploy script is named `deploy:cloudflare` because `pnpm deploy` is pnpm's built-in command and fails with `ERR_PNPM_NOTHING_TO_DEPLOY` instead of running this package. Never run `pnpm deploy`.
- Claude Desktop preview is `.claude/launch.json` (`npm run dev` on port 5173). Use it; do not invent another preview config.
- `src/env.d.ts` declares `*.css` modules. Keep it. The first CSS import must typecheck.
- This workshop does not run on Windows on ARM. workerd publishes no Windows ARM binary, so dev and deploy cannot start there. Vite+ has a Windows ARM build; that does not remove the workerd gap. macOS, Linux, and 64-bit Windows are the supported machines.
- The initial preview needs no Cloudflare credentials, database, migrations, or seed.
- Keep the starter minimal; add Workers AI only during the build step.
- After adding void/ai, development uses real Cloudflare AI and needs account access.
- Read the installed Void authentication docs before connecting or deploying. Verify
  the attendee's intended account; never use a template author's saved account.
- The supported workshop path is Claude Desktop Code in Local mode, with a
  GitHub ZIP download first or git clone as an alternative. No GitHub account
  connection is required.
- Follow CLOUDFLARE_SETUP.md for account creation and authentication. Explain the
  steps. The attendee operates every account browser screen. Explicit Cloudflare
  browser login needs an interactive terminal, and your command runner is not one.
  When login is required, have the attendee run `npx void connect --platform cloudflare`
  themselves in Claude Desktop's terminal panel, from this project folder.
  Never use Chrome control, computer use, browser automation, or a browser MCP to
  sign up, log in, verify email/MFA, grant authorization, or manage billing.
- Use only Void commands for deployment. Do not substitute Wrangler, cf CLI,
  GitHub Actions, or dashboard deployment. Opening the auth page via Void is fine;
  interacting with it on the attendee's behalf is not.
- Keep credentials out of chat, source files, commits, and logs. Use the platform's
  credential settings. Do not pretend a preview or deployment succeeded.
- Run `npm run typecheck` and `npm run build` for app changes.
- `void project delete` refuses to run for direct Cloudflare targets. Do not invent another teardown command. The attendee deletes the Worker in the Cloudflare dashboard: Workers & Pages → the app → Settings → Delete.
- Keep account-specific generated void.lock.json out of the distributed template.
  Attendees may commit their own generated lockfile in their own repository after
  connecting their account, as recommended by Void.
