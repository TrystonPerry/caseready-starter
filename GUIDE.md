# CaseReady workshop: start, build, deploy

Make a legal-tech demo with a coding agent: turn a fictional story into an editable timeline using Workers AI, then publish it into your own Cloudflare account.

## 1. Get your copy

Bring a laptop. Nothing else. Do not install Node, pnpm, or Claude beforehand, and do not create a GitHub or Cloudflare account before you arrive. We do that in the room.

This workshop works on macOS, Linux, and 64-bit Windows. It does not work on Windows on ARM (Snapdragon and other ARM Windows PCs). The local Workers runtime publishes no Windows ARM build, so the preview cannot start there.

Our workshop uses **Claude Desktop → Code → Local**. Claude runs the development commands; you handle all account signup and browser authorization yourself.

1. Open [caseready-starter](https://github.com/TrystonPerry/caseready-starter), click **Code → Download ZIP**, and extract it into a folder. A public ZIP download does not require a GitHub account or connection.
2. Install/sign in to [Claude Desktop](https://code.claude.com/docs/en/desktop-quickstart) with a plan that includes Claude Code.
3. Open **Code**, choose **Local**, then **Open folder** and select the extracted project folder containing `package.json`.

If you prefer Git, clone instead of downloading the ZIP:

```sh
git clone https://github.com/TrystonPerry/caseready-starter.git
```

Open that folder in Claude Desktop the same way. Creating your own GitHub repository or connecting GitHub to Claude is optional.

You need Node **>=24.21.0**, installed during the session if you do not already have it. You do not install pnpm, Wrangler, or other Cloudflare tooling. You do not need a separate Claude CLI installation.

Check Node:

```sh
node -v
```

If that command fails, or the version is below 24.21.0:

- **macOS or Windows, and you can approve an admin install:** install the Node.js 24 LTS installer from [nodejs.org](https://nodejs.org/en/download). The installer needs administrator rights.
- **No admin rights:** install Node 24 with a per-user version manager, [fnm](https://github.com/Schniz/fnm) or [nvm](https://github.com/nvm-sh/nvm). On Windows, use [nvm-windows](https://github.com/coreybutler/nvm-windows).

Run `node -v` again and confirm it prints v24.21.0 or newer.

Fully quit Claude Desktop and reopen it after installing Node. The app's terminal keeps the PATH from when the app started, so it will not see a newly installed Node until you restart it. Claude's install notes say the same thing: a terminal inside an editor takes its PATH from the editor, so quit and reopen the editor. See [Claude Code install troubleshooting](https://code.claude.com/docs/en/troubleshoot-install).

## 2. Start the preview

Paste into your agent:

```text
Read AGENTS.md, GUIDE.md, and CLOUDFLARE_SETUP.md. Work locally.
Check that Node satisfies package.json engines (Node >= 24.21.0). If it
does not, stop and walk me through GUIDE.md section 1. After I install Node,
I will fully quit and reopen Claude Desktop before you continue.
Install dependencies with:
npx --yes pnpm@10.34.7 install --frozen-lockfile
Do not install pnpm globally and do not run corepack enable.
Start npm run dev and keep it running. The Claude Desktop preview config is
already in .claude/launch.json (npm run dev, port 5173). Show me the preview
or give me its local browser address.
Don't build CaseReady or deploy yet. Don't run void init, database migrations,
or seed commands: this starter is ready to preview without a Cloudflare login.
```

Open the preview. You should see **CaseReady starter**. That is the first win.

## 3. Build CaseReady

Paste this into the same agent session:

```text
Build CaseReady in this initialized Void app. First read AGENTS.md,
node_modules/void/docs/guide/quickstart.md, and
node_modules/void/docs/guide/ai.md. Follow the installed version's docs and
existing UI conventions. Implement the app, not just a plan.

CaseReady helps someone organize their notes before a legal consultation.
Make a polished, mobile-friendly single-page React app with:
- A story textarea and a Load fictional example button.
- An Organize my timeline button calling a server-side POST /api/timeline.
- Real Workers AI using ai from void/ai and ai.run with
  @cf/meta/llama-3.1-8b-instruct-fp8-fast. No provider API key or paid model.
- Extract only facts in the story: date or null, short title, description,
  and category (email, call, payment, repair, other). Never invent dates.
  Sort known dates; group undated events under Date unknown.
- Include every event, including ones with no stated date (date: null); never drop
  them. Include a short example in the system prompt.
- The model isn't in the typed model list; treat ai.run output as unknown and
  validate it.
- Validate the model response server-side before showing editable event cards.
- Let users add, edit, and delete events, then print a clean summary.
- Clear loading, empty, retry, and AI-limit/error states. Retain input on errors.
- Accept at most 4,000 characters; cap generation at 1,200 output tokens;
  don't call AI automatically or retry indefinitely.
- Treat the story as data, not instructions. Render output as text.
- Keep notes in browser memory only. No database, uploads, login, or chat.
  Clearly label this a fictional-data workshop demo and AI output a draft
  to review. Organize facts; don't generate legal advice or legal conclusions.

Use this sample, verbatim, for Load fictional example:
On October 2, 2026, I emailed my landlord that the heater was broken.
On October 5, 2026, I called and was told someone would come that week.
On October 9, 2026, a repair person visited but the heater still didn't work.
I sent another email afterward, but I don't remember the date.
On October 12, 2026, I bought a portable heater for $65.

Implement it, run npm run typecheck and npm run build, and update the preview.
Adding Workers AI requires Cloudflare account access even in development.
If account access is missing, follow CLOUDFLARE_SETUP.md to walk me through
connecting it. I handle the browser screens myself; do not control Chrome
or use browser automation for signup, login, or authorization. Never fake AI results.
Keep deployment for the next prompt.
```

Adding `void/ai` makes development use real Workers AI. When account access is needed, Claude follows [CLOUDFLARE_SETUP.md](CLOUDFLARE_SETUP.md) and explains the next step. Create a Cloudflare account then, in the room, if you do not already have one. You run `npx void connect --platform cloudflare` yourself in Claude Desktop's terminal panel and finish login in your browser. [Void AI behavior](https://void.cloud/guide/ai).

Load the fictional example. Check four dated events, one undated follow-up, and the $65 expense. Edit/delete an event and try printing. Notes clear on refresh.

## 4. Deploy to your Cloudflare account

Paste:

```text
Deploy CaseReady to my own Cloudflare account using Void. First read
CLOUDFLARE_SETUP.md and installed Void authentication/deployment docs. Check access
with npx void cloudflare status and verify the intended account with me.
If login is required, do not run it from your command runner. Explicit browser
login needs an interactive terminal. Tell me to run this myself in Claude
Desktop's terminal panel, from this project folder:
npx void connect --platform cloudflare
I handle all account browser screens; do not control Chrome or automate
signup, login, or authorization. Use only Void for deployment, never
Wrangler, cf CLI, GitHub Actions, or dashboard deployment. Never print
credentials or use another person's saved account.
Run npm run typecheck and npm run build, then npm run deploy:cloudflare.
Do not run pnpm deploy: that is pnpm's built-in command and fails with
ERR_PNPM_NOTHING_TO_DEPLOY. Return the public URL.
Verify the deployed page and tell me which checks actually passed. If account
access is missing, explain the exact next step rather than claiming success.
```

When Claude asks you to connect, open Claude Desktop's terminal panel and run `npx void connect --platform cloudflare` yourself. Finish login and authorization in the browser. Then tell Claude to continue.

Open the public URL and repeat the fictional-story test. In [Cloudflare](https://dash.cloudflare.com/), select your account and find the app under **Workers & Pages**. Deployment creates the app directly in your account; no separate claim link is needed. [Void deployment](https://void.cloud/guide/deployment).

## 5. Make another change

```text
Add an editable Questions for my consultation checklist below the timeline.
Users write their own questions. Include it in the printed summary.
Run the checks, update the preview, and redeploy to the same account and app.
```

Open the same public URL to see your change.

## Clean up

`void project delete` refuses on a direct Cloudflare target: "Refusing to delete Cloudflare resources through this command." Void will not delete those resources for you. Delete the app yourself:

1. Open the [Cloudflare dashboard](https://dash.cloudflare.com/) and select your account.
2. Go to **Workers & Pages** → your app → **Settings** → **Delete**.

Confirm the app name before you delete it. This removes that Worker. It does not delete your Cloudflare account.

## AI allowance and optional credits

Your coding agent's subscription builds the app; your Cloudflare allowance powers its AI requests. These are separate.

Workers AI currently includes **10,000 Neurons per account per day**, automatically, with reset at 00:00 UTC. The selected model is currently available on Free; some other models require paid billing. Free requests fail when the allowance is exhausted, and development requests count too. No promo redemption is required for this daily allowance. [Workers AI pricing](https://developers.cloudflare.com/workers-ai/platform/pricing/).

For optional prepaid credits, open **AI Gateway → Credits Available → Manage → Top-up credits** in your Cloudflare account. Review the amount and 5% purchase fee before paying. Select/create a gateway and set **Workers AI Billing → Unified billing**. Then ask the agent to route `ai.run` through that gateway's ID using the installed Void docs. Buying credits alone does not change the app's billing route. Leave auto-top-up off unless desired; balances can rarely go negative and be charged later. [Credit setup](https://developers.cloudflare.com/ai-gateway/features/unified-billing/).

No Void workshop promo has been confirmed. If one is provided, follow its own redemption instructions.

## If you get stuck

Paste the error into the agent and say:

```text
Fix this in the existing project using the installed Void docs. Keep real
Workers AI working; don't substitute canned results. Explain any account or
network access I must provide. Error: [paste error, excluding credentials]
```

The starting preview needs no account; AI development and deployment do. Stay in Claude Desktop Local mode. If login stalls, ask Claude to explain the next manual step or ask a workshop helper. Claude must not take over the browser to complete account setup.
