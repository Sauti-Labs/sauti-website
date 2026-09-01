# sauti-website

The public-facing website for [Sauti Labs](https://github.com/Sauti-Labs).

## Status

Foundation stage. This repository currently contains a Next.js application
scaffold and the engineering foundation (architecture, tooling, CI, and
deployment) it will be built on. No website features have been
implemented yet. See `docs/milestones/M001-repository-foundation.md`
for current progress.

## Relationship to Sauti Labs

`sauti-website` is maintained separately from the core `sauti-labs`
engineering monorepo. It has its own frontend application, design/UX
lifecycle, deployment pipeline, CI/CD, documentation, and development
workflow, reflecting that it is an independently developed and deployed
public-facing product surface.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/) (see `docs/decisions/ADR-0001-pin-eslint-v9.md`
  for a known, tracked version constraint)

## Repository structure

See `docs/architecture.md` for the full architecture specification,
including directory responsibilities, naming conventions, and the rules
for introducing new structure. In short:

```text
src/app/          Next.js routes and route-level composition
src/components/   UI: ui/, layout/, sections/ (populated as built)
src/lib/          non-UI application logic (populated as built)
src/types/        shared TypeScript types (populated as built)
public/           static assets
design/           engineering-relevant design artifacts and documentation
docs/             architecture, decisions, milestones, and process docs
```

`docs/architecture.md` also documents directories that are deliberately
not created yet, and the conditions under which they should be introduced.

## Local setup

Requires Node.js 20+ (developed against Node 24).

```bash
npm install
npm run dev
```

The application will be available at `http://localhost:3000`.

## Environment variables

No environment variables are required yet. A `.env.example` will be added
once a concrete need exists (see `docs/architecture.md` for how this
repository handles deferred conventions).

## Linting

```bash
npm run lint
```

## Testing

No testing foundation has been established yet. `docs/architecture.md`
documents the conditions under which component and end-to-end tests will
be introduced.

## Deployment

Deployed via [Vercel](https://vercel.com). Pushing to `main` triggers a
Production Deployment; pull requests and other branches get Preview
Deployments. See `docs/deployment.md` for the full pipeline, and
`docs/decisions/ADR-0002-vercel-deployment.md` for why Vercel was chosen.

## Documentation

- `docs/architecture.md` — canonical repository architecture specification
- `docs/decisions/` — Architecture Decision Records (ADRs)
- `docs/deployment.md` — deployment pipeline and rollback
- `docs/milestones/` — project history and progress
- `design/README.md` — what belongs in `design/` and what doesn't

## Contributing

This repository follows [Conventional Commits](https://www.conventionalcommits.org/)
(`feat:`, `fix:`, `docs:`, `chore:`, etc.) and keeps `main` stable and
deployable at all times. See `docs/contributing.md` for the full workflow.
