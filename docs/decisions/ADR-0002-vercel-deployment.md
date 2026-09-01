# ADR-0002: Use Vercel for deployment

Status: Accepted

Date: 2026-09-02

Deciders: Bernard Abuto

## Context

`sauti-website` needed a deployment platform with an independent
preview/production pipeline, per the founding brief's requirement that
this repository have its own deployment pipeline separate from the core
`sauti-labs` monorepo.

## Decision

Deploy via Vercel, connected to the `Sauti-Labs/sauti-website` GitHub
repository under a "Sauti Labs" Vercel team, currently on the Hobby
(free) tier.

## Alternatives Considered

- Other Next.js-compatible hosts (Netlify, Cloudflare Pages, a
  self-managed Node server): not evaluated in depth. Vercel is the
  first-party platform for Next.js (same maintainer), offers the
  simplest GitHub-integrated preview/production pipeline out of the
  box, and was the option named in the founding brief. No concrete
  requirement has emerged that Vercel doesn't meet, so alternatives
  were not pursued further at this stage.

## Consequences

- Pushing to `main` triggers a Production Deployment. Pushes to other
  branches and pull requests trigger Preview Deployments. Merging an
  approved PR into `main` triggers a new Production Deployment. This is
  Vercel's default GitHub integration behavior, confirmed active for
  this project.
- The project is currently on Vercel's Hobby (free) tier. Hobby is
  intended for non-commercial use; this is a company's public-facing
  product site. This is accepted as a deliberate, temporary choice
  pre-launch, not an oversight, and should be revisited before or at
  public launch.
- Vercel's Hobby tier disables On-Demand Concurrent Builds (queued
  builds run one at a time) and does not include skew protection
  (frontend/backend version mismatch prevention). Neither is a current
  problem: there is no backend/API surface yet, and build volume is low
  at this stage.

## Follow-up

- Revisit the Hobby vs. Pro decision before or at public launch, given
  Vercel's Hobby tier terms restrict it to non-commercial use.
- Reassess skew protection once the application has API routes or
  server-side logic where a frontend/backend version mismatch could
  cause real issues.
- A custom domain has not been configured. This is deferred until
  Sauti Labs has a domain ready to point at this deployment.
