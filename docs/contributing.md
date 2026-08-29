# Contributing to sauti-website

This document describes how work gets done in this repository. It
reflects the conventions already in practice, not an aspirational
process.

## Branching

`main` is always stable and deployable. Work happens on branches, named
by type:

```text
feature/short-description
fix/short-description
docs/short-description
design/short-description
refactor/short-description
```

Use whichever prefix best describes the primary intent of the change.
Keep the description short and kebab-case (e.g. `feature/hero-section`).

## Commits

This repository follows [Conventional Commits](https://www.conventionalcommits.org/).
Common types used here:

```text
feat:      a new feature
fix:       a bug fix
docs:      documentation only
design:    design artifacts or design-system changes
refactor:  code change that neither fixes a bug nor adds a feature
test:      adding or correcting tests
chore:     tooling, dependencies, config
ci:        CI/CD configuration
```

Keep commits focused on one logical change. A commit that mixes unrelated
concerns (e.g. a dependency bump and a new component) should be split.
Write commit messages in the imperative mood ("add ADR-0001", not "added"
or "adds").

## Pull requests

Every change to `main` goes through a pull request, even for small
changes — this keeps history reviewable and gives CI a chance to run
before anything lands. Use `.github/pull_request_template.md` (once
established) to structure the description: summary, motivation,
screenshots for UI changes, testing performed, documentation updated,
whether an ADR is required, and known limitations.

## Code review

- Review for correctness, adherence to `docs/architecture.md`, and
  whether the change is at the right level of scope (see "Definition of
  done" below).
- A reviewer who disagrees with an architectural choice should raise it
  against `docs/architecture.md` directly — see Section 10 of that
  document ("Architecture is a constraint, not a cage") for the process
  to propose a change, rather than relitigating it informally in a PR
  thread.
- Small, focused PRs are easier to review well than large ones. If a PR
  is doing more than one distinct thing, consider splitting it.

## Testing expectations

No testing foundation exists yet (see `docs/architecture.md` for the
conditions under which `tests/components/` and `tests/e2e/` will be
introduced). Once it exists: new components with meaningful logic or
behavior should be tested; visual-only presentational components are not
required to have tests merely to satisfy coverage. Testing should
support the application, not become ceremony.

## Documentation expectations

- Documentation is written as the system is built, not after the fact
  (see `docs/architecture.md` and the milestone system in
  `docs/milestones/`).
- If a PR changes repository structure, `docs/architecture.md` is
  updated in the same PR.
- If a PR makes a significant, hard-to-reverse decision (framework
  choice, deployment architecture, content architecture, a major
  dependency), it should include an ADR under `docs/decisions/`. Not
  every implementation detail needs one — see `docs/decisions/` for
  examples of what warrants an ADR.

## Naming conventions

See `docs/architecture.md` Section 6 for the canonical naming
conventions (directories, components, utilities, framework files). This
document does not duplicate them.

## Definition of done

A change is ready to merge when:

- It does what the PR describes, and nothing unrelated.
- It follows `docs/architecture.md` — no new folders created without
  meeting the five conditions in Section 7 of that document.
- Naming follows the conventions in `docs/architecture.md` Section 6.
- Relevant documentation (`docs/architecture.md`, an ADR, or this file)
  is updated if the change affects any of them.
- `npm run lint` passes.
- The application builds successfully (`npm run build`).
- CI passes (once CI is established — see
  `docs/milestones/M001-repository-foundation.md` for current status).
