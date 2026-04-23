# Locked Out of Care

## What This Is

A single-page scrollytelling website that pitches a research agenda on substance use disorder (SUD) treatment access in US and German prisons to a funder audience. The site moves a reader through a narrative arc — from the scale of the crisis, to what the evidence shows, to barriers, to research gaps, and finally to a funding call to action. Built as a single HTML file with no build tools; opens directly in a browser.

**Target audience:** Research funders, public health advocates, policy stakeholders who are aware of the issue but not of its severity. Also will offer option of small one time donations. 

## Core Value

A funder who reaches the "Fund This Research" button believes the research is worth funding — because they followed a composite individual's story through the entire scroll and felt the gap between what's possible and what exists.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Fixed nav with scroll-progress bar and chapter links
- [ ] Hero section with composite character introduction, background image placeholder, and animated stats row
- [ ] Throughline narrative: composite character referenced at key scroll points, fate revealed at pitch
- [ ] Scale section: US vs. Germany comparison with animated bar charts (Intersection Observer)
- [ ] Findings section: 6 evidence cards with scroll reveal animations and pull quote
- [ ] Barriers section: tab toggle UI with US and DE timelines
- [ ] Research Gaps section: 5 numbered gaps with hover interaction
- [ ] Pitch section: cost grid, 3 why-fund cards, pull quote, and dual CTA buttons
- [ ] Footer with source list
- [ ] Full design system (dark palette, Playfair Display + DM Mono + DM Sans)
- [ ] Mobile responsive at 768px breakpoint
- [ ] User-provided copy dropped in (hero subheading, card copy, CTA email)

### Out of Scope

- Build tools, bundlers, or frameworks — single `.html` file only
- Backend, server, or database — runs by opening file in browser
- Real named individual — composite character only (ethical/academic requirement)
- Hamburger menu on mobile — nav links simply hide

## Context

- **Course:** GLOH 3303 · Georgetown University · 2026
- **Deadline:** This week
- **Author:** Nikki Jiang
- **Research basis:** Nikki's lit review on SUD treatment in US and German prisons (sources: Ferguson 2019, Iacobelli 2026, Kopak 2024, McLean 2025, Querengässer 2017, Russell 2024, Schalast 2025, Strange 2022, Sugarman 2020, Tomlin 2024, World Prison Brief, BJS)
- **Narrative addition beyond original PRD:** Composite incarcerated individual appears as a throughline — introduced in the hero, referenced at scale/barriers/gaps sections, fate revealed at the pitch as the emotional anchor for the CTA
- **Hero image:** Placeholder dark overlay; real image to be swapped in by user before submission
- **Placeholder copy:** Hero subheading, country card text, and CTA email to be filled in by user

## Constraints

- **Tech stack:** Single HTML file — vanilla HTML, CSS, JS only; Google Fonts via CDN
- **Timeline:** Must be complete this week for course submission
- **No server:** Must run by opening `.html` directly in a browser
- **Content:** User provides final copy; site built with clearly marked placeholders

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Single HTML file | Course requirement + zero-dependency portability | — Pending |
| Composite character throughline | Identified individual effect; ethically clean for academic work; no real person misrepresented | — Pending |
| Dark editorial palette | "Investigative journalism meets policy brief" tone; high credibility for funder audience | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-22 after initialization*
