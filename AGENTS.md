<!--injected-by-void-v1.1.12-->
## Void

- This project uses [Void](https://void.cloud), a full-stack Vite framework for Cloudflare Workers with file-based API routing, server-rendered pages, and typed backend services.
- Use Void's CLI and typed APIs. Before working with Void, read the relevant Markdown docs in `node_modules/void/docs/`; start with `guide/quickstart.md` for setup and `reference/cli.md` for commands.

<!--/injected-by-void-->

## Workshop starter

- Follow GUIDE.md: start preview, build from the attendee's prompt, then deploy when requested.
- Use pnpm and the committed pnpm-lock.yaml. Node must satisfy package.json engines.
- The initial preview needs no Cloudflare credentials, database, migrations, or seed.
- Keep the starter minimal; add Workers AI only during the build step.
- After adding void/ai, development uses real Cloudflare AI and needs account access.
- Read the installed Void authentication docs before connecting or deploying. Verify
  the attendee's intended account; never use a template author's saved account.
- The supported workshop path is Claude Desktop Code in Local mode, with a
  GitHub ZIP download first or git clone as an alternative. No GitHub account
  connection is required.
- Follow CLOUDFLARE_SETUP.md for account creation and authentication. Explain the
  steps and run Void commands; the attendee operates every account browser screen.
  Never use Chrome control, computer use, browser automation, or a browser MCP to
  sign up, log in, verify email/MFA, grant authorization, or manage billing.
- Use only Void commands for deployment. Do not substitute Wrangler, cf CLI,
  GitHub Actions, or dashboard deployment. Opening the auth page via Void is fine;
  interacting with it on the attendee's behalf is not.
- Keep credentials out of chat, source files, commits, and logs. Use the platform's
  credential settings. Do not pretend a preview or deployment succeeded.
- Run pnpm typecheck and pnpm build for app changes.
- Keep account-specific generated void.lock.json out of the distributed template.
  Attendees may commit their own generated lockfile in their own repository after
  connecting their account, as recommended by Void.
