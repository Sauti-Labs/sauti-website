# Architecture — sauti-website

This document is the canonical, living record of this repository's directory
structure and the reasoning behind it. It is updated in the same commit/PR
as any structural change. Architecture documentation drifting from the
actual repository structure is treated as a bug, not an inconvenience.

## 1. Directories that exist today

.github/
public/
src/app/
src/components/ui/
src/components/layout/
src/components/sections/
src/lib/
src/types/
design/
docs/
docs/decisions/
docs/milestones/


Several of these (`src/components/ui/`, `layout/`, `sections/`, `src/lib/`,
`src/types/`) are committed architectural boundaries without files in them
yet. Git does not track empty directories, so they will appear on disk the
moment their first real file is added — not before. Their presence in this
document is the commitment; their presence on disk follows naturally from
use.

## 2. Directories that are deliberately deferred (not created, not forgotten)

| Directory | Why deferred | Condition that justifies creating it |
|---|---|---|
| `src/content/` | No concrete content architecture exists yet. | Create when a content architecture decision is made — this should be its own ADR. |
| `src/styles/` | Tailwind is the styling approach; global styles live in `src/app/globals.css`. | Create only if a substantial body of non-Tailwind CSS emerges, after an explicit decision that Tailwind alone isn't sufficient. |
| `src/components/shared/` | "Shared" is not a falsifiable boundary — it invites anything. | Never introduce this name at all. If a genuine cross-cutting category emerges, name it for what it actually is. |
| `public/images/{brand,products,research,team}/`, `public/icons/`, `public/fonts/` | No images/icons/fonts exist yet; imposing a taxonomy before files exist is speculative. | Start flat (`public/images/`). Introduce subdirectories when a clear recurring categorization emerges that materially improves discoverability and navigation — based on the nature and organization of the assets, not an arbitrary file count. |
| `design/{user-flows,wireframes,mockups,decisions}/` | No design artifacts exist yet. | Start flat (`design/` with a `README.md`). Introduce subfolders when a clear recurring categorization emerges, same principle as above. |
| `tests/components/`, `tests/e2e/` | No components or pages exist yet beyond the default scaffold. | Create `tests/components/` when the first real, non-trivial component is written; `tests/e2e/` once a real user flow exists worth testing end-to-end. |
| `.github/workflows/` | Not deferred — imminent, next on our list. | N/A |

## 3. Responsibility and boundary of every directory

**`src/app/`** — Next.js App Router convention: routing, layouts, route-level
composition. Not a place for reusable logic or components — if something is
used by more than one route, it belongs in `components/` or `lib/`.

**`src/components/ui/`** — small, reusable, presentation-only primitives with
no knowledge of business logic or page context.

**`src/components/layout/`** — global structural components appearing across
most/all routes (Header, Footer, Navigation). Boundary vs. `sections/`:
layout is the frame of every page; sections are the content of a specific
page.

**`src/components/sections/`** — larger, page-specific composed sections
built from `ui/` primitives. Allowed to know its page context; `ui/`
primitives are not.

**`src/lib/`** — reusable, non-UI application logic: utilities,
data-fetching helpers, formatting functions, constants.

Watch item: `src/lib/` is intentionally broad at M001. If distinct
responsibilities emerge over time, it may be split into meaningful
subdomains rather than becoming a catch-all utility directory. Such
restructuring should follow the architecture-evolution process in
Section 10. Do NOT create subdirectories inside `lib/` now.

**`src/types/`** — shared TypeScript types used in 2+ files. A type used in
only one file stays colocated there; promote it only once a second consumer
needs it.

**`public/`** — static, unprocessed assets referenced by the application.
See Section 9 for how this relates to the application dependency graph.

**`design/`** — engineering-relevant design artifacts and documentation:
reasoning and reference material a developer needs to implement something
correctly. Not a dump for raw exports, screenshots, or WIP clutter with no
lasting reference value.

**`docs/`** — engineering and project documentation: architecture,
development setup, contribution rules, ADRs, milestones.

**`docs/decisions/`** — ADRs for meaningful, hard-to-reverse decisions. Not
for routine implementation details.

**`docs/milestones/`** — point-in-time snapshots of what was accomplished,
why, and what's next. Historical record; this document is the living spec.

**`.github/`** — repository-level automation and contribution scaffolding:
CI workflows, PR template, issue templates.

## 4. What belongs / doesn't belong — quick reference

| Directory | Belongs | Does NOT belong |
|---|---|---|
| `src/app/` | routes, layouts, page composition | reusable components, business logic, utilities |
| `src/components/ui/` | presentation-only primitives | anything with page/business context |
| `src/components/layout/` | Header, Footer, Nav | one-off page sections |
| `src/components/sections/` | page-specific composed blocks | generic reusable primitives |
| `src/lib/` | pure functions, data helpers, constants | components, JSX of any kind |
| `src/types/` | types used in 2+ files | types used in only one file (keep colocated) |
| `public/` | static, unprocessed assets | anything requiring a build step |
| `design/` | engineering-relevant design reference docs | raw exports, random screenshots, WIP clutter |
| `docs/` | architecture/process documentation | user-facing website copy |
| `docs/decisions/` | significant, hard-to-reverse decisions | routine implementation details |

## 5. Conditions for introducing deferred directories

Stated per-directory in Section 2. General principle: a directory is
created when its first real file exists and its shape has become concrete
through actual use — not in anticipation of future need. Anticipated need
is documented here, not scaffolded on disk.

## 6. Naming conventions

- Directories: `lowercase-kebab-case`
- React components: `PascalCase.tsx`
- Utilities: `camelCase.ts`
- Next.js framework files: must follow framework convention exactly
  (`page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`)
- Forbidden: meaningless names (`test.tsx`, `final2.tsx`, `component1.tsx`,
  `home2.tsx`) — the filename must communicate the file's responsibility.

## 7. Rule for creating a new folder

A new folder may be created only when **all** of the following are true:

1. It represents a genuinely distinct architectural boundary — not a vague
   catch-all (`shared/`, `misc/`, `common/`, `helpers/` are rejected on
   sight).
2. There is at least one real file to put in it right now — no folders
   created in anticipation of future files.
3. Its responsibility can be stated in one sentence that would let a
   reviewer immediately know what does and doesn't belong there.
4. If not obviously covered by an existing boundary in this document,
   `docs/architecture.md` is updated in the same PR that introduces the
   folder.
5. The folder is not being created merely because another project,
   tutorial, framework default, or AI-generated example uses that
   structure. This repository's architecture takes precedence over generic
   AI-suggested project layouts — including layouts an AI coding assistant
   proposes by default. If an assistant (Claude or otherwise) suggests a
   new folder, it must be justified against conditions 1-4 above, not
   adopted because it's a common pattern elsewhere.

If a contributor is unsure whether a new folder is justified, the default
is: don't create it — put the file in the nearest existing appropriate
location and raise it in the PR description for discussion.

## 8. Rule for new file vs. modifying an existing one

- If a file's stated responsibility genuinely covers what you're adding,
  modify it.
- If what you're adding is a distinct responsibility that happens to be
  related, create a new file, even if it's small.
- Never append unrelated logic to a file just because it's already open or
  nearby.
- File size may be a signal, but responsibility and cohesion are the
  primary criteria. Split a file when it contains multiple distinct
  responsibilities, becomes difficult to understand or test, or develops
  dependencies unrelated to its stated purpose — not because it crossed a
  line count. If unsure whether a file has drifted into multiple
  responsibilities, ask whether you could describe its purpose in one
  sentence without using "and."

## 9. Application dependency graph vs. design/documentation relationship

These are two different relationships and are not drawn as one chain.

### Application dependency graph (permitted/default relationships)

src/app/
|-- may use --> components/
|-- may use --> lib/
`-- may use --> types/

src/components/
|-- may use --> lib/
`-- may use --> types/

src/lib/
`-- may use --> types/

src/types/
`-- does not depend on application layers


This is a default architectural direction, not a mandatory dependency
pipeline. It does not mean `components/` must depend on `lib/`, or that
`lib/` must depend on `types/` — most files in `components/` and `lib/`
will have no dependency on `types/` at all until a shared type is actually
needed. What this diagram fixes is the *permitted direction*: a lower-level
layer must never import from a higher-level one (`src/lib/` must never
import from `src/app/` or `src/components/`), and no circular dependencies
between layers are acceptable. This keeps `lib/` and `types/` genuinely
reusable and testable in isolation, without imposing artificial ceremony on
a website of this scale.

### `public/` — not part of this chain

`public/` sits outside the dependency graph entirely. It is not a layer
that code imports *from* in the architectural sense — it is a static-asset
serving mechanism. Components and routes *reference* paths in `public/`
(e.g. `<img src="/images/...">`), which is asset resolution, not a code
dependency.

### Design and documentation relationship (separate, non-runtime)

design/ --> reference material informing decisions
docs/ --> records those decisions and the resulting architecture


`design/` and `docs/` inform and record the human decision-making that
produces the code above. They are never imported by the application and
are not part of the deployable artifact — this is why they sit outside
`src/` entirely.

## 10. Architecture is a constraint, not a cage

This document establishes intentional default boundaries — it is not
immutable, and it should not become an obstacle to good engineering.

Contributors should not change the architecture casually, on a whim, or to
suit a single PR's convenience. But contributors should also never force a
legitimate requirement into a structure that doesn't actually fit it,
merely to preserve a rule that reality has outgrown. When the existing
architecture no longer fits a legitimate need:

1. Identify the actual problem — not just discomfort with the current
   structure, but a concrete way it fails.
2. Explain the proposed change.
3. Evaluate alternatives, including whether the "problem" might be solved
   without a structural change at all.
4. Document the decision as an ADR when the change is significant (new
   top-level directory, changed dependency direction, new architectural
   boundary).
5. Update this document in the same change.
6. Implement the change.

The lesson this is meant to teach: professional engineering is not about
blind obedience to an architecture forever — it is about understanding why
the architecture exists, so that when it is changed, it is changed
deliberately, with reasoning the next person can follow, rather than
eroded silently one convenient exception at a time.

## 11. How this architecture evolves as the website grows

- This document is updated in the same commit/PR as any structural change.
- Meaningful structural changes warrant an ADR (see Section 10), not just
  an edit to this file — this file describes current state; ADRs preserve
  why it changed.
- Routine growth (a new `ui/` component, a new route under `app/`) requires
  no update to this document.
- If a boundary defined here proves wrong in practice, that is resolved via
  Section 10's process, not silent drift.
