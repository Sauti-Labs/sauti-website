# Deployment

This document describes how `sauti-website` is deployed. For the
decision to use Vercel, see `docs/decisions/ADR-0002-vercel-deployment.md`.

## Platform

Deployed via [Vercel](https://vercel.com), connected directly to the
`Sauti-Labs/sauti-website` GitHub repository under the "Sauti Labs"
Vercel team.

## Deployment pipeline

Vercel's GitHub integration drives deployments automatically:

- **Push to `main`** triggers a Production Deployment.
- **Push to any other branch, or opening a pull request**, triggers a
  Preview Deployment - a live, shareable, isolated deployment of that
  branch's changes.
- **Merging an approved pull request into `main`** triggers a new
  Production Deployment.

CI (`.github/workflows/ci.yml`) and Vercel's deployment are independent
systems that both run on push/PR. A pull request should have both a
passing CI check and a working Preview Deployment before merge.

## Environment variables and secrets

No environment variables exist yet. When they become necessary, they
will be:

- Documented in `.env.example` at the repository root (variable names
  and descriptions, no real values).
- Configured directly in the Vercel project's Environment Variables
  settings, scoped appropriately to Production, Preview, and/or
  Development as needed.

Secrets are never committed to the repository under any circumstance.

## Rollback

Vercel retains deployment history and supports **Instant Rollback** to
any previous Production Deployment directly from the project dashboard,
without requiring a new Git push or revert commit.

## Deployment ownership

Bernard Abuto (Founder & CEO) owns the Vercel team and project
configuration. Deployment behavior itself (what triggers a deployment,
what gets built) is governed by this document and by Vercel's GitHub
integration - it is not something contributors configure per change.

## Current status

- Tier: Hobby (free). See `docs/decisions/ADR-0002-vercel-deployment.md`
  for the reasoning and the plan to revisit this before public launch.
- Custom domain: not yet configured.
- On-Demand Concurrent Builds: disabled (Hobby tier limitation; builds
  queue rather than running simultaneously).
