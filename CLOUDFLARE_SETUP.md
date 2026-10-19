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

If they already have a Cloudflare account, skip signup.

Otherwise, give them this link: https://dash.cloudflare.com/sign-up

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

From the project folder, run:

```sh
pnpm exec void cloudflare status
```

If not authenticated or no project account is selected, run:

```sh
pnpm exec void connect --platform cloudflare
```

Tell the attendee that Void will open an authorization page or print instructions.
They must complete login and approve the requested access themselves. If a link
or code is shown, have them follow the instructions directly from the command's
output. Use an interactive terminal if Void requires it; if the agent's command
runner cannot support that interaction, guide the attendee through running this
single command in their local terminal or ask a helper. Do not automate the page
as a workaround.

Then run `pnpm exec void cloudflare status` again. Show the selected account name
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
pnpm typecheck
pnpm build
pnpm deploy
```

The deploy script runs `void deploy --platform cloudflare`. Use **only Void for
deployment**. Do not switch to Wrangler, cf CLI, GitHub Actions, or dashboard
deployment to bypass an error. Diagnose using the installed Void docs instead.

Return the public URL and ask the attendee to try the fictional example. Explain
how they can find the app in their Cloudflare dashboard under Workers & Pages.
Deployment goes directly into their selected account; no claim/transfer follows.
Keep the generated `void.lock.json` in their project for subsequent deployments.
Report the checks actually completed; do not claim a successful AI call or
deployment from a build result alone.

References: [Void authentication](https://void.cloud/reference/cli/auth),
[Void deployment](https://void.cloud/guide/deployment),
[Workers AI pricing](https://developers.cloudflare.com/workers-ai/platform/pricing/).
