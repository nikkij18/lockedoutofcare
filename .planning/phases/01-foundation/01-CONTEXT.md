# Phase 1: Foundation - Context

**Gathered:** 2026-04-22
**Status:** Ready for planning

<domain>
## Phase Boundary

Deliver the working HTML skeleton, full CSS design system, and fixed nav for `index.html`. When Phase 1 is complete, opening the file in Chrome renders a dark page with all 6 section stubs, a functional nav that smooth-scrolls to each section, and correct fonts and colors throughout. No content yet — just the shell everything else builds inside.

</domain>

<decisions>
## Implementation Decisions

### Navigation

- **D-01:** Nav background is always `rgba(10,10,10,0.95)` — no scroll-triggered fade-in. No JS listener needed for nav background.
- **D-02:** Chapter link hover style: underline on hover (not color change). Links default `var(--muted)` (#888888), underline appears on hover.
- **D-03:** Nav chapter link labels (in scroll order):
  1. "The Problem" → `#scale`
  2. "The Statistics" → `#findings`
  3. "Barriers" → `#barriers`
  4. "Gaps" → `#gaps`
  5. "The Proposal" → `#pitch`
  6. "Take Action" → `#action`
- **D-04:** Section IDs to create stubs for (7 total including hero): `#hero`, `#scale`, `#findings`, `#barriers`, `#gaps`, `#pitch`, `#action`
- **D-05:** Nav left side: "Locked Out of Care" in DM Mono, `var(--gold)` color

### Smooth Scroll

- **D-06:** Use JS `scrollIntoView({ behavior: 'smooth' })` (not CSS `scroll-behavior: smooth`) — gives more control and works reliably on `file://` protocol across browsers.

### IO Observer Architecture

- **D-07:** Single shared IntersectionObserver for all `.reveal` elements (`threshold: 0.15`, `rootMargin: '0px 0px -50px 0px'`). Bar chart animation will use a separate IO observer (Phase 3) with a different callback — set up the pattern in Phase 1, the bar-specific observer gets added in Phase 3.
- **D-08:** `observer.unobserve(entry.target)` after first trigger — reveal fires once only.

### Design System

- **D-09:** CSS custom property order in `:root`: colors first, then spacing (`--pad-v: 120px`, `--pad-h: 10vw`).
- **D-10:** CSS file order within `<style>`: (1) `:root` variables, (2) reset + base, (3) fixed elements (nav), (4) section layout, (5) component styles, (6) animation classes + `@keyframes`, (7) responsive `@media`.
- **D-11:** Section label style: DM Mono, uppercase, `letter-spacing: 0.3em`, `color: var(--gold)`, `font-size: 11px`.

### Claude's Discretion

- HTML reset style (can use `* { box-sizing: border-box; margin: 0; padding: 0; }` or similar minimal reset)
- Whether to include `scroll-behavior: smooth` on `html` as a CSS fallback alongside the JS approach
- Exact section stub inner HTML structure (can pre-scaffold or leave empty)

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project Spec
- `.planning/REQUIREMENTS.md` — v1 requirements, NAV-01, DES-01–04 are Phase 1 scope
- `.planning/ROADMAP.md` — Phase 1 tasks and success criteria
- `.planning/research/STACK.md` — Confirmed tech stack, file structure pattern, Google Fonts CDN snippet, IO observer best practice
- `.planning/research/PITFALLS.md` — Critical pitfalls for this phase: Google Fonts CORS on `file://`, IO triggers on above-fold elements, single file manageability

### PRD (original source of truth)
- User provided detailed PRD in conversation (not a file). Key Phase 1 specs:
  - Color palette: `--bg: #0a0a0a`, `--bg2: #111111`, `--bg3: #1a1a1a`, `--cream: #f0ead8`, `--gold: #c8a96e`, `--red: #c0392b`, `--blue: #2980b9`, `--muted: #888888`, `--border: #2a2a2a`
  - Fonts: Playfair Display (400/700/900 + italic), DM Mono (300/400/500), DM Sans (300/400) — all from Google Fonts CDN in a single combined `<link>`
  - Section padding: `120px` vertical, `10vw` horizontal (mobile: `80px` / `6vw`)
  - Nav: fixed top-0, full width, z-index 999; logo left (DM Mono gold); links right

No external specs — all requirements captured in decisions above and REQUIREMENTS.md.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- None — greenfield project. `index.html` does not exist yet.

### Established Patterns
- None yet — Phase 1 establishes the patterns all later phases follow.

### Integration Points
- All later phases (2–6) build content inside the section stubs created here.
- The `.reveal` / `.visible` IO pattern established here is used by phases 3, 4, 5.
- The JS `<script>` block structure established here is where phase 3 adds the bar chart observer and phase 4 adds the tab toggle.

</code_context>

<specifics>
## Specific Ideas

- "Take Action" nav link points to `#action` — a dedicated CTA section (separate from `#pitch`) that will be scoped in Phase 5. Phase 1 creates the `#action` stub.
- The site must open directly in Chrome via `file://` — no server. Google Fonts CDN link must use `display=swap` to avoid render-blocking; Firefox/Safari may block CDN fonts on `file://` (document this in source comments).

</specifics>

<deferred>
## Deferred Ideas

- **Small one-time donations option** — mentioned in PROJECT.md. Not in REQUIREMENTS.md. This belongs in Phase 5 ("Take Action" section scope) or as a future v2 requirement. Note for Phase 5 discussion.
- **Active section highlight in nav** — v2 requirement (NAV-V2-02). Not in Phase 1.
- **Scroll progress bar** — v2 requirement (NAV-V2-01). Not in Phase 1.

</deferred>

---

*Phase: 01-foundation*
*Context gathered: 2026-04-22*
