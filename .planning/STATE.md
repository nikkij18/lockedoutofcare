---
gsd_state_version: 1.0
milestone: v1.0
milestone_name: milestone
status: unknown
last_updated: "2026-04-23T01:06:39.028Z"
progress:
  total_phases: 6
  completed_phases: 0
  total_plans: 0
  completed_plans: 0
---

# Project State: Locked Out of Care

## Project Reference

See: .planning/PROJECT.md (updated 2026-04-22)

**Core value:** A funder who reaches "Fund This Research" believes this research is worth funding — because they followed a composite individual's story through the scroll.
**Current focus:** Initialized — ready for Phase 1

## Current Status

**Phase:** Pre-execution (roadmap created, no code yet)
**Active plan:** None
**Blocked:** No

## Phase Progress

| Phase | Status | Notes |
|-------|--------|-------|
| 1: Foundation | ○ Pending | Design system + nav |
| 2: Hero | ○ Pending | Display headline + character intro |
| 3: Scale + Findings | ○ Pending | US map, bar chart, evidence cards |
| 4: Barriers + Gaps | ○ Pending | US timeline, gaps |
| 5: Pitch + Footer | ○ Pending | Cost grid, CTA cards, sources |
| 6: Responsive + QA | ○ Pending | Mobile, submission-ready |

## Key Files

- `.planning/PROJECT.md` — Project context and decisions
- `.planning/REQUIREMENTS.md` — 24 v1 requirements with REQ-IDs
- `.planning/ROADMAP.md` — 6-phase execution plan
- `index.html` — The single deliverable (does not exist yet)

## Decisions Log

- Single HTML file — course requirement + portability
- Composite character throughline — appears in hero only (v1); barriers + pitch fate deferred to v2
- Germany reframed as case study sidebar, not co-protagonist
- Interactive US map: SVG choropleth, BJS data, click → state rate tooltip; vanilla JS only

---
*Initialized: 2026-04-22*
