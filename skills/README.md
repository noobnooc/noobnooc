# Agent Skills

This directory contains Codex agent skills maintained in this repository. Each skill lives in its own folder with a `SKILL.md` file that defines when the skill should be used and what behavior it adds.

## Skills

| Skill | Summary |
| --- | --- |
| [`wtf`](./wtf/SKILL.md) | Adds a pre-launch/pre-commit audit for vibe coding projects: project structure, secret/env hygiene, tracked caches/artifacts, database migrations, ORM/schema drift, deploy footguns, and dead legacy code. |
| [`better-codex`](./better-codex/SKILL.md) | Adds coding-work guardrails for Codex: tighter scope control, safer file edits, general quality-first implementation, root-cause debugging, product/interface polish, meaningful tests, concise progress updates, and protection against leaking internal reasoning into user-facing UI. |
