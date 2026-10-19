# CaseReady workshop: start, build, deploy

Make a legal-tech demo with a coding agent: turn a fictional story into an editable timeline using Workers AI, then publish it into your own Cloudflare account.

## 1. Get your copy

Open [caseready-starter](https://github.com/TrystonPerry/caseready-starter) and choose **Use this template → Create a new repository** under your GitHub account.

Connect your copy to Claude Code on the web, or clone/open it in your local coding agent. Use your own repository so you can keep building after the workshop.

You need GitHub, an agent account with coding access, and a [Cloudflare account](https://dash.cloudflare.com/sign-up). The agent runs the development commands for you; you paste the prompts below into its chat.

**Browser sessions:** Claude's cloud environment needs the project's Node version, package downloads, and a way to expose its dev server. Ask the agent to check these in the start prompt. If it cannot provide an accessible preview, use a local agent or preview the deployed app. A remote localhost address alone is not a working browser preview.

**Cloudflare connection:** Local agents can use Void's browser login. Web agents need Cloudflare API credentials configured in their cloud environment and network access to Cloudflare. Merely signing into Cloudflare in a separate tab does not connect the agent. Configure `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` using the environment's credential settings, not chat or GitHub. Have the agent consult the installed Void Cloudflare integration docs for the required token permissions. This browser deployment path still needs an end-to-end workshop rehearsal. [Claude cloud setup](https://code.claude.com/docs/en/cloud-environments), [Void authentication](https://void.cloud/reference/cli/auth).

## 2. Start the preview

Paste into your agent:

```text
Read AGENTS.md and GUIDE.md. Check that Node satisfies package.json engines.
Use the project's pinned pnpm version and pnpm install --frozen-lockfile.
Start pnpm dev and keep it running. Give me an accessible preview link.
If this cloud environment cannot expose the server, say so explicitly.
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

Implement it, run pnpm typecheck and pnpm build, and update the preview.
Adding Workers AI requires Cloudflare account access even in development.
If credentials are missing, explain the connection step; never fake AI results.
Keep deployment for the next prompt.
```

The agent may need you to connect Cloudflare at this point: importing `void/ai` makes development use real Workers AI. For a local agent, let it run `pnpm exec void connect --platform cloudflare` and help you complete login. For a web agent, use the environment credentials described above. [Void AI behavior](https://void.cloud/guide/ai).

Load the fictional example. Check four dated events, one undated follow-up, and the $65 expense. Edit/delete an event and try printing. Notes clear on refresh.

## 4. Deploy to your Cloudflare account

Paste:

```text
Deploy CaseReady to my own Cloudflare account using Void. First read the
installed Void authentication and Cloudflare deployment docs. Check access
with pnpm exec void cloudflare status and verify the intended account with me.
Help me connect if needed. Never print credentials or use another person's
saved account. Use the same Node and pnpm versions as this project.
Run pnpm typecheck and pnpm build, then pnpm deploy. Return the public URL.
Verify the deployed page and tell me which checks actually passed. If account
access is missing, explain the exact next step rather than claiming success.
```

Complete the account/login step when prompted. Open the public URL and repeat the fictional-story test. In [Cloudflare](https://dash.cloudflare.com/), select your account and find the app under **Workers & Pages**. Deployment creates the app directly in your account; no separate claim link is needed. [Void deployment](https://void.cloud/guide/deployment).

## 5. Make another change

```text
Add an editable Questions for my consultation checklist below the timeline.
Users write their own questions. Include it in the printed summary.
Run the checks, update the preview, and redeploy to the same account and app.
```

Open the same public URL to see your change.

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

The starting preview needs no account; AI development and deployment do. If web authentication or preview blocks the session, continue locally or have a helper assist with deployment. Do not spend the workshop repeatedly attempting a browser login inside a cloud VM.
