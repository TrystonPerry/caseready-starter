# Cloudflare setup: instructions for Claude

Use this guide when the attendee needs account access for Workers AI or deployment.
The workshop runs in Claude Desktop's Code tab, in **Local** mode.

## Who does what

- **Claude:** explain the next step, run local Void commands, read command results,
  and check the selected deployment account.
- **Attendee:** create their account and complete every browser step, including
  email verification, passwords, MFA, login, authorization, and billing choices.

Do not control Chrome or another browser to do account work. Do not use computer
use, browser automation, browser MCPs, or form-filling tools for these steps.
Void may open its authorization page; leave all interaction on that page to the
attendee. Do not ask for passwords, verification codes, or tokens in chat.

## 1. Walk the attendee through creating an account

Assume they have no Cloudflare account. Signup is part of the session, not homework.

Give them this link: https://dash.cloudflare.com/sign-up

If they already have an account, they can log in with it instead of creating a new one.

Ask them to open it themselves, create the account using their own email, and
complete any email verification or other account prompts. They can tell you when
they reach the dashboard. Start with Workers Free; this demo does not require a
custom domain, nameserver changes, or an AI credit purchase. If onboarding asks
for a website/domain, explain that the workshop deploys a Worker and does not
need a domain added. If they cannot find a way forward, have them describe the
screen or ask a workshop helper; do not take over their browser.

## 2. Check and connect through Void

First read the installed docs matching this project's version:

- `node_modules/void/docs/reference/cli/auth.md`
- `node_modules/void/docs/integrations/cloudflare.md`

From the project folder, after dependencies are installed, run:

```sh
npx void cloudflare status
```

`npx void` uses the Void installed in this project. Do not install Wrangler.

If not authenticated, or no project account is selected, stop. Explicit browser
login requires an interactive terminal. The agent's command runner is not
interactive, and a non-interactive `void connect` cannot complete Cloudflare
login. Tell the attendee to open Claude Desktop's terminal panel, `cd` to this
project folder, and run this themselves:

```sh
npx void connect --platform cloudflare
```

They must complete login and approve the requested access in the browser.
If a link or code is shown, they follow it from the terminal output. Do not
run that command for them, and do not automate the page as a workaround.

Then run `npx void cloudflare status` again. Show the selected account name
and ID, without credentials, and ask the attendee to confirm it is their intended
account before deploying. If several accounts are available, have them identify
the right one. Never reuse an author/helper's account. Login changes identity;
it does not necessarily change a previously pinned project account. Resolve a
wrong target using the installed Void docs before continuing.

If environment credentials override browser login, report only the variable
names. Do not print their values or silently remove existing credentials. Explain
the conflict and let the attendee choose which account/credential to use.

## 3. Use AI and deploy

Workers AI calls use this account even in development. Restart the preview if
needed after connection, then try the fictional story. Use the model specified
in GUIDE.md and the account's daily free allowance first. Explain any quota error;
do not purchase credits or upgrade a plan on the attendee's behalf.

When the attendee requests deployment, run:

```sh
npm run typecheck
npm run build
npm run deploy:cloudflare
```

The `deploy:cloudflare` script runs `void deploy --platform cloudflare`. Do not
run `pnpm deploy`. That name is pnpm's built-in command and fails with
`ERR_PNPM_NOTHING_TO_DEPLOY` instead of deploying this app. Use **only Void for
deployment**. Do not switch to Wrangler, cf CLI, GitHub Actions, or dashboard
deployment to bypass an error. Diagnose using the installed Void docs instead.

`void project delete` refuses on a direct Cloudflare target with "Refusing to
delete Cloudflare resources through this command." Do not try to clean up
with it. The attendee deletes the app themselves in the dashboard:
**Workers & Pages** → the app → **Settings** → **Delete**.

Return the public URL and ask the attendee to try the fictional example. Explain
how they can find the app in their Cloudflare dashboard under Workers & Pages.
Deployment goes directly into their selected account; no claim/transfer follows.
Keep the generated `void.lock.json` in their project for subsequent deployments.
Report the checks actually completed; do not claim a successful AI call or
deployment from a build result alone.

References: [Void authentication](https://void.cloud/reference/cli/auth),
[Void deployment](https://void.cloud/guide/deployment),
[Workers AI pricing](https://developers.cloudflare.com/workers-ai/platform/pricing/).
