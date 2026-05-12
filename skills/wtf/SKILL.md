---
name: wtf
description: "Pre-launch and pre-commit audit for vibe coding projects. Use when asked to check whether a project is ready to ship, deploy, merge, or commit, especially for common AI-built app mistakes: broken project structure, committed secrets or cache files, environment variable hygiene, database migrations, ORM/schema drift, unsafe raw SQL, unused legacy code, dead routes/components, weak auth, missing tests, build failures, and deployment footguns."
---

# WTF

Use this skill as a hard-nosed pre-launch or pre-commit audit for fast-moving "vibe coded" projects. The goal is to find concrete blockers before code is shipped, not to produce a generic best-practices essay.

## Operating Mode

- Inspect the actual repository before judging it. Start with `git status --short`, project docs, file tree, package manifests, framework config, CI config, and deployment config.
- Keep the audit scoped to the user's target: current branch, staged changes, a PR diff, or the whole project. If unclear, default to the current worktree plus files likely to affect deploy/runtime.
- Prefer evidence over guesses. Tie every finding to a file, command output, or missing expected artifact.
- Do not print secret values. If a secret is committed or exposed, name the file and variable/key shape, but redact the value.
- If the user asks to fix issues, implement the fixes after the audit and verify them. Otherwise, remain in review/audit mode.

## Audit Workflow

1. **Map the project**
   - Identify app type, framework, package manager, runtime, deployment target, database, ORM, auth provider, and build/test commands.
   - Check whether the root is clean or dirty. Preserve unrelated user changes.
   - Find likely entrypoints: app routes, API routes, workers, server actions, CLI commands, cron jobs, migrations, schemas, and config files.

2. **Check repository hygiene**
   - Look for committed `.env*` files other than safe examples, local database files, logs, cache directories, build outputs, generated artifacts, coverage, temporary uploads, screenshots, and tool caches.
   - Verify `.gitignore` covers framework/runtime artifacts such as `.next`, `dist`, `build`, `.turbo`, `.vercel`, `.wrangler`, `.parcel-cache`, `coverage`, `node_modules`, local SQLite files, logs, and upload/cache folders.
   - Use `git ls-files` to distinguish ignored local junk from files already tracked by Git.

3. **Check secrets and environment variables**
   - Search for tokens, private keys, API keys, JWT secrets, database URLs, webhook secrets, cloud credentials, and hardcoded production URLs.
   - Verify required env vars are documented in `.env.example`, deployment docs, or typed config. Flag required envs that are used in code but undocumented.
   - Check for accidental logging of secrets, auth headers, cookies, session payloads, or provider responses.

4. **Check database readiness**
   - Identify whether the app uses Prisma, Drizzle, TypeORM, Sequelize, Rails migrations, Django migrations, Alembic, Knex, raw SQL, or another migration system.
   - Confirm schema changes have matching migrations and that migrations are committed.
   - Flag schema drift, missing deploy migration commands, destructive migrations without a backfill/rollback plan, seed data required in production, and raw SQL that is not parameterized.
   - If a database-backed app has no ORM or migration tool, call that out as a launch risk unless the repository has a clear alternative migration process.

5. **Check app correctness and security basics**
   - Run or inspect available `lint`, `typecheck`, `test`, and `build` scripts when practical.
   - Review auth boundaries, protected routes, admin-only actions, server/client separation, CORS, CSRF where relevant, rate limits, file upload validation, SSRF surfaces, open redirects, and unsafe eval/shell execution.
   - Check error handling and observability: production errors should not leak stack traces, secrets, or internal IDs unnecessarily.

6. **Check dead and legacy code**
   - Search for unused routes, duplicate pages/components, abandoned API handlers, old feature flags, large commented blocks, stale TODO/FIXME/HACK notes, generated placeholders, console debugging, unused dependencies, and test/demo data paths.
   - Prefer repository-aware tools when available: TypeScript compiler, ESLint, depcheck, framework route manifests, import graph tools, or existing CI checks.
   - Treat dead code as lower severity unless it affects security, deploy size, routing, migrations, or user-visible behavior.

7. **Check deployment shape**
   - Inspect Dockerfiles, wrangler/vercel/netlify/cloudflare config, GitHub Actions, release scripts, cron configuration, and required runtime versions.
   - Flag missing production build commands, wrong package manager commands, missing migration steps, secrets expected at build time vs runtime, cache directories mounted incorrectly, and local-only assumptions.

## Useful Commands

Adapt commands to the repository; do not run broad destructive commands.

```bash
git status --short
git ls-files
rg -n --hidden --glob '!node_modules' --glob '!.git' 'AKIA|BEGIN (RSA |OPENSSH |EC )?PRIVATE KEY|DATABASE_URL|JWT_SECRET|SECRET_KEY|API_KEY|ACCESS_TOKEN|REFRESH_TOKEN|WEBHOOK_SECRET|STRIPE_SECRET|OPENAI_API_KEY|ANTHROPIC_API_KEY|PASSWORD=' .
rg -n --hidden --glob '!node_modules' --glob '!.git' 'TODO|FIXME|HACK|console\\.log|debugger|ts-ignore|eslint-disable' .
```

For JavaScript/TypeScript projects, inspect `package.json` scripts first, then run only relevant existing scripts such as `npm run lint`, `npm run typecheck`, `npm test`, or `npm run build`.

## Severity

- **P0 Blocker**: likely secret exposure, data loss, auth bypass, production deploy failure, broken migration, or user-data corruption.
- **P1 High**: strong launch risk such as missing env documentation, unsafe database access, unprotected sensitive route, failing build/test, or tracked cache/build artifacts.
- **P2 Medium**: maintainability or reliability issue likely to slow future work, such as stale duplicate code, missing focused tests, weak error handling, or unused dependencies.
- **P3 Low**: cleanup or polish that is useful but not launch-blocking.

## Host-Specific Review Output

Detect host-specific review capabilities from active system/developer/app instructions, available tools, or local agent docs. Do not infer support from the model name alone, and do not invent pseudo-directives for a host.

- **Codex App**: for findings tied to a specific file and line, emit one inline review comment directive per issue:

  ```text
  ::code-comment{title="[P1] Short issue title" body="Explain the concrete risk and the smallest practical fix. Redact any secret value." file="/absolute/path/to/file.ts" start=42 end=42 priority=1}
  ```

  Use absolute file paths, tight line ranges, and `priority` matching severity (`P0`/`P1` = `1`, `P2` = `2`, `P3` = `3`). Keep repo-level findings, missing-file findings, command failures, and residual risks in the normal findings list.

- **Claude Code**: do not assume an inline review comment output directive. Use normal review findings with `file:line` references unless the current Claude Code environment explicitly provides a comment protocol or tool.
- **Antigravity**: do not assume a portable text directive for artifact or inline comments. If the active environment exposes a native artifact/comment tool, use that tool; otherwise use normal review findings with `file:line` references.
- **Zed**: do not assume a response-level inline comment directive. Zed may show agent edit review UI, but audit findings should stay in normal review format unless the active Zed environment explicitly provides a comment protocol or tool.

## Output Format

Lead with findings, ordered by severity. For each finding include:

- Severity and short title.
- Evidence: file path, line, command, or missing expected file.
- Impact: what can break or leak.
- Fix: the smallest practical next step.

Then add:

- **Verified**: commands actually run and their result.
- **Not verified**: checks skipped and why.
- **Residual risk**: anything the repository shape prevented you from proving.
