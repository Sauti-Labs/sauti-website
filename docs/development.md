# Development Guide

This document explains how to get `sauti-website` running locally and how
to work on it day to day. For repository structure and architectural
rules, see `docs/architecture.md`. For workflow and PR conventions, see
`docs/contributing.md`.

## Prerequisites

- Node.js 20 or later (this project is developed against Node 24).
- npm (ships with Node.js).
- Git.

Check your versions:

```bash
node --version
npm --version
```

## Installation

Clone the repository, then install dependencies:

```bash
git clone https://github.com/Sauti-Labs/sauti-website.git
cd sauti-website
npm install
```

## Local development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`. This uses
Turbopack (Next.js's default bundler as of Next.js 16) for fast local
iteration.

## Environment configuration

No environment variables are required at this stage. If and when
environment variables become necessary, they will be documented here and
in a `.env.example` file at the repository root — see `docs/architecture.md`
for how this repository handles deferred conventions.

## Linting

```bash
npm run lint
```

This project's ESLint version is intentionally pinned — see
`docs/decisions/ADR-0001-pin-eslint-v9.md` for why.

## Formatting

Code formatting is currently handled by ESLint's own formatting-adjacent
rules and editor defaults; no separate formatter (e.g. Prettier) has been
introduced yet. If one is added, this section will be updated and the
decision documented as an ADR if it is significant enough to warrant one.

## Testing

No testing foundation has been established yet. See `docs/architecture.md`
for the conditions under which `tests/components/` and `tests/e2e/` will
be introduced, and `docs/contributing.md` for testing expectations once
they exist.

## Production build

```bash
npm run build
npm run start
```

`npm run build` produces a production build; `npm run start` serves it
locally for verification before deployment. There is no deployment
pipeline established yet — see
`docs/milestones/M001-repository-foundation.md` for current status.

## Troubleshooting

- **`npm install` fails or behaves unexpectedly**: confirm your Node.js
  version is 20 or later (`node --version`). Next.js 16 requires this as
  a hard minimum.
- **Port 3000 already in use**: stop whatever else is using it, or run
  `npm run dev -- -p 3001` (or any other free port).
- **ESLint reports a deprecation warning on install**: this is expected
  and tracked — see `docs/decisions/ADR-0001-pin-eslint-v9.md`. It is not
  a sign that something is broken.
- **Line-ending warnings from Git (`CRLF will be replaced by LF`)**: this
  is expected behavior from `.gitattributes` normalizing line endings and
  is not an error.
