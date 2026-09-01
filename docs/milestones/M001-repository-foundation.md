# M001 - Repository Foundation

Status: Complete

## 1. Objective

Establish the professional engineering foundation for `sauti-website`
before feature development begins.

## 2. Context

`sauti-website` is Sauti Labs' public-facing website and product surface,
maintained as a repository separate from the core `sauti-labs` engineering
monorepo. It has its own frontend application, design/UX lifecycle,
deployment pipeline, CI/CD, documentation, and development workflow.

Lynn Gathoni, Product Design Engineer, will be the primary engineer
responsible for the initial product design and website implementation.
This repository is intentionally being structured before feature
development begins so that she - and any future contributor - inherits
clear engineering boundaries, documented reasoning, and a professional
environment from her first commit, rather than an empty repository with
no conventions.

## 3. Established in this milestone

- GitHub repository created under the Sauti Labs organization
  (`Sauti-Labs/sauti-website`), private visibility.
- Local repository clone, with remote and Git identity confirmed healthy.
- Next.js 16 application foundation scaffolded (TypeScript, Tailwind CSS,
  ESLint, App Router, `src/` directory, Turbopack).
- Baseline code-quality/tooling foundation from the scaffold (TypeScript,
  ESLint configuration).
- ADR system established under `docs/decisions/`, with ADR-0001 recording
  the decision to pin ESLint to v9 pending `eslint-config-next` v10
  support, and ADR-0002 recording the decision to deploy via Vercel.
- Approved repository architecture specification (`docs/architecture.md`).
- `design/` boundary established, with `design/README.md` documenting
  what belongs there and what does not.
- `docs/decisions/` established for Architecture Decision Records.
- `docs/milestones/` established for milestone documentation (this file
  is its first occupant).
- Project-specific root `README.md`, replacing the scaffolded placeholder.
- `docs/contributing.md` and `docs/development.md` established.
- `.github/pull_request_template.md` established.
- CI established via GitHub Actions (`.github/workflows/ci.yml`):
  install, type check, lint, and build on pull requests and pushes to
  `main`. Confirmed passing on a genuine clean checkout.
- Deployment foundation established: `sauti-website` connected to Vercel
  under the Sauti Labs team, with automatic Production Deployments on
  push to `main` and Preview Deployments on pull requests and other
  branches. Documented in `docs/deployment.md`.

## 4. Architecture established

The canonical structural contract for this repository is
`docs/architecture.md`. It defines which directories exist today, which
are deliberately deferred and under what conditions they should be
introduced, the responsibility and boundary of every directory, naming
conventions, the rules governing when a new folder or file may be
created, the application's dependency graph, and the process for
evolving the architecture deliberately over time. This milestone does
not duplicate that specification - refer to it directly for structural
decisions.

## 5. Important principles established

- Documentation as we build: architectural reasoning is recorded while
  it is still fresh, not reconstructed after the fact.
- Least privilege: nothing is created, granted, or scaffolded beyond
  what is justified by an immediate, concrete need.
- No speculative folders: directories are created when their first real
  file exists, not in anticipation of future need.
- Responsibility-based file organization: files are grouped by what they
  are responsible for, not by convenience or habit.
- AI-generated structures are suggestions, not authority: a folder or
  pattern is never adopted merely because a tutorial, framework default,
  or AI coding assistant proposes it - it must be justified against this
  repository's own architectural rules.
- Architecture changes must be deliberate and documented: structural
  changes follow the identify-propose-evaluate-document-update-implement
  process defined in `docs/architecture.md`, not silent drift.
- Prefer clear, falsifiable boundaries over generic catch-alls: names
  like `shared/`, `common/`, or `misc/` are rejected on sight in favor of
  boundaries that can be defined in one sentence.
- A green CI check must represent an actual check that was performed:
  no placeholder or fake test stages, and a local pass is not trusted
  until verified against a clean checkout.
- Deliberate, temporary choices (e.g. deploying on a free tier
  pre-launch) are recorded as decisions with a documented follow-up, not
  left as silent defaults.
- Documentation coverage is checked before creating a new file: a
  requirement is only a gap if no existing document's responsibility
  already covers it.

## 6. Intentionally deferred

The following are deliberately not created yet. Each is documented in
`docs/architecture.md` with the specific condition that justifies
introducing it:

- `src/content/` - pending a concrete content architecture decision.
- `src/styles/` - Tailwind is the styling approach; not needed unless a
  substantial body of non-Tailwind CSS emerges.
- Component tests (`tests/components/`) - pending the first real,
  non-trivial component.
- End-to-end tests (`tests/e2e/`) - pending a real user flow worth
  testing end-to-end.
- Image/icon/font subdirectories under `public/` - pending enough assets
  to justify a recurring categorization.
- Design subdirectories under `design/` (`user-flows/`, `wireframes/`,
  `mockups/`, `decisions/`) - pending enough design artifacts to justify
  them.
- `src/components/shared/` - not deferred but permanently rejected as a
  naming pattern; see `docs/architecture.md` Section 2.
- `.env.example` and any environment-variable convention - pending a
  concrete need for environment variables.
- A single source of truth for the project's supported Node.js version
  (currently hardcoded as 24 in `.github/workflows/ci.yml`, matching
  local development) - flagged as minor technical debt for a future
  milestone, not a blocker for M001.
- Other speculative structure not currently justified by a concrete,
  present need.

## 7. Post-M001 follow-up (not blocking, tracked for future milestones)

- Revisit Vercel Hobby vs. Pro tier before or at public launch (see
  `docs/decisions/ADR-0002-vercel-deployment.md`).
- Node.js version single source of truth (see Section 6).
- Dependency auditing, GitHub security features (e.g. secret scanning),
  and branch protection have not yet been assessed and should be
  considered in a future milestone.
- `.env.example` and environment-variable convention, once a concrete
  need exists.
- Real testing infrastructure (`tests/components/`, `tests/e2e/`), once
  there is something meaningful to test - see `docs/architecture.md`
  Section 2 and `docs/contributing.md` Testing expectations for the
  conditions and standards already documented.

## 8. Definition of done

All of the following are true:

- The GitHub repository, local clone, and application scaffold are
  established and confirmed healthy. (Done)
- The directory architecture is documented and approved in
  `docs/architecture.md`. (Done)
- The ADR system exists and has recorded at least one real decision.
  (Done - two ADRs recorded.)
- The milestone system exists and this document accurately reflects
  repository history. (Done)
- A project-specific root README exists, replacing the scaffolded
  placeholder. (Done)
- `docs/development.md` and `docs/contributing.md` exist and are
  accurate. (Done)
- A Git workflow and commit convention are documented (not merely
  practiced informally). (Done)
- A pull request template exists. (Done)
- CI runs on pull requests and validates install, type check, lint,
  and build. (Done - no test stage yet, by design; see Section 6.)
- A deployment foundation exists and is documented, including how
  environment variables and secrets are handled. (Done - see
  `docs/deployment.md`.)
- A baseline testing foundation is documented, even if minimal, so a
  new contributor knows where tests belong and when they are required.
  (Done - see `docs/contributing.md` Testing expectations,
  `docs/development.md` Testing, and `docs/architecture.md` Section 2
  for the deferred-directory conditions. No new file was needed; this
  was already covered.)
- Another engineer could clone the repository and understand, from the
  documentation alone, how they are expected to work inside it. (Done)

M001 is complete. Feature development and the Lynn-specific Claude
workflow are separate, future deliverables - see Section 30 of the
original repository-foundation brief.

## 9. Change log / progress

- GitHub repository created; local clone established and verified
  healthy (remote, branch, identity).
- `.gitignore` and `.gitattributes` established, then `.gitignore`
  merged with the official Next.js template plus editor/OS exclusions.
- Next.js 16 application scaffolded (TypeScript, Tailwind, ESLint, App
  Router, `src/` directory, Turbopack).
- ADR-0001 recorded, pinning ESLint to v9 pending `eslint-config-next`
  v10 support.
- Repository architecture specification designed, reviewed, revised,
  and approved; written to `docs/architecture.md`.
- `design/README.md` created, establishing the `design/` boundary.
- `docs/milestones/` created; this document authored as its first
  entry.
- Root `README.md` rewritten from the scaffolded placeholder into
  project-specific documentation.
- `docs/contributing.md` and `docs/development.md` authored.
- `.github/pull_request_template.md` authored.
- CI workflow added (`.github/workflows/ci.yml`): install, type check,
  lint, build.
- First CI run failed on a clean checkout: `tsc --noEmit` could not
  resolve the global `LayoutProps` type, because Next.js only generates
  it via `next dev` or `next build`, and the local pass had been
  accidental (riding on a stale `.next/types/` left over from the
  original scaffold command). Fixed by changing the `typecheck` script
  to `next typegen && tsc --noEmit`, verified against a genuinely clean
  local state, then confirmed green in GitHub Actions on the next run.
- `sauti-website` connected to Vercel under the Sauti Labs team (Hobby
  tier); first Production Deployment succeeded from `main`. ADR-0002
  recorded. `docs/deployment.md` authored. README's Deployment section
  corrected to reflect the live pipeline.
- Definition of done reviewed against existing documentation; testing
  expectations confirmed already covered across `docs/contributing.md`,
  `docs/development.md`, and `docs/architecture.md`. M001 marked
  Complete.
