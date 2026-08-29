# ADR-0001: Pin ESLint to v9 pending eslint-config-next v10 support

Status: Accepted

Date: 2026-08-29

Deciders: Bernard Abuto

## Context

create-next-app@16.3.3 installs eslint@^9 as a devDependency. ESLint 9.x
officially reached end-of-life on 2026-08-06 and no longer receives fixes.
ESLint 10.0.0 (released Feb 2026) is the current supported major.

However, eslint-config-next@16.3.3 depends on eslint-plugin-react and
eslint-plugin-import, both of which declare a peer dependency ceiling of
eslint@^9. Neither plugin has shipped ESLint 10 support as of this writing.
There is an open, unresolved issue on the vercel/next.js repository tracking
this gap (Add support for eslint v10 in eslint-config-next).

## Decision

Remain on eslint@^9 as installed by the official Next.js scaffolder. Do not
force an upgrade to eslint@^10 at this time.

## Alternatives Considered

- Upgrade to eslint@^10 immediately: rejected. This would break
  eslint-config-next due to unmet peer dependencies in eslint-plugin-react
  and eslint-plugin-import, leaving the project with a newer linter that
  cannot correctly apply Next.js's own lint rules.
- Replace eslint-config-next with a custom flat config built directly on
  ESLint 10: rejected as premature. This adds real maintenance burden to
  work around an ecosystem gap that is actively being resolved upstream.

## Consequences

- The project currently depends on an EOL major version of ESLint. This is
  accepted as temporary, tracked technical debt, not an oversight.
- CI and local linting will continue to show ESLint's own deprecation
  warning until this is resolved.

## Follow-up

- Monitor eslint-config-next releases (https://www.npmjs.com/package/eslint-config-next)
  for ESLint 10 support.
- Monitor vercel/next.js issue #91702 for resolution.
- Once eslint-config-next ships ESLint 10 support, upgrade eslint to ^10
  and close out this ADR's follow-up (supersede with a new ADR only if the
  upgrade requires a materially different config approach, e.g. a full
  migration to flat config authored outside eslint-config-next).
