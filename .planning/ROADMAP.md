# Roadmap: Locked Out of Care

**Project:** Locked Out of Care — Scrollytelling funder pitch (SUD treatment, US prisons)
**Phases:** 6 | **Requirements:** 24 v1 | **Granularity:** Standard
**Created:** 2026-04-22

---

## Phase Summary

| # | Phase | Goal | Requirements | Success Criteria |
|---|-------|------|--------------|-----------------|
| 1 | Foundation | Design system + nav shell live in browser | NAV-01, DES-01–04 | 5 |
| 2 | Hero | Above-fold section complete with character intro | HERO-01–02 | 3 |
| 3 | Scale + Findings | US crisis visualized; evidence section complete | SCALE-01–04, FIND-01–03 | 6 |
| 4 | Barriers + Gaps | US barriers timeline and research gaps complete | BARR-01–03, GAP-01–03 | 5 |
| 5 | Pitch + Footer | Funding case made; site is end-to-end | PITCH-01–02, DEV-01 | 4 |
| 6 | Responsive + QA | Site works on mobile; ready for submission | RESP-01 | 3 |

---

## Phase 1: Foundation

**Goal:** HTML skeleton, design system CSS, and fixed nav are live — opening index.html in a browser shows a working dark page with functioning nav.

**Requirements:** NAV-01, DES-01, DES-02, DES-03, DES-04

**Tasks:**
- Create `index.html` with full HTML skeleton (all 6 section stubs with IDs)
- Implement `:root` CSS custom properties (--bg, --bg2, --bg3, --cream, --gold, --red, --blue, --muted, --border)
- Load Google Fonts CDN (Playfair Display 400/700/900+italic, DM Mono 300/400/500, DM Sans 300/400) in single combined link
- Build fixed nav: "Locked Out of Care" logo left (DM Mono gold), 6 chapter anchor links right; smooth scroll on click
- Implement base `.reveal` / `.visible` IntersectionObserver pattern (shared JS function)
- Set global section padding (120px / 10vw) and section label style (DM Mono uppercase, 0.3em letter-spacing)

**Success Criteria:**
1. Opening `index.html` in Chrome renders a dark (#0a0a0a) page with no errors in console
2. Fixed nav is visible at top; clicking any chapter link smoothly scrolls to that section stub
3. All three fonts render correctly (Playfair Display, DM Mono, DM Sans)
4. CSS custom properties resolve correctly across all section stubs
5. IntersectionObserver wired up: adding `.reveal` class to any element causes it to fade up when scrolled into view

**UI hint:** yes

---

## Phase 2: Hero

**Goal:** Above-fold section is complete — the display headline and character intro are visible and animated on load.

**Requirements:** HERO-01, HERO-02

**Tasks:**
- Build hero section HTML: section label, 3-line H1 ("Locked / Out of / Care" with "Out of" in `<em>` gold italic), character intro paragraph
- Style H1 with Playfair Display 900; "Out of" line uses `font-style: italic; color: var(--gold)`
- Write composite character intro placeholder text (2 sentences, marked with `<!-- FILL IN: character intro -->`)
- Implement `@keyframes fadeUp` with staggered `animation-delay` on load (no IO needed — above fold)
- Style section: `min-height: 100vh`, dark background, left-aligned content, `max-width: 680px` for copy

**Success Criteria:**
1. Hero section occupies full viewport height on load
2. "Locked / Out of / Care" renders as 3 distinct lines; "Out of" is gold italic at 900 weight
3. All hero elements (label, H1, character intro) fade up on page load with staggered timing
4. Character intro paragraph is visible with a clear `<!-- FILL IN -->` comment in source

**UI hint:** yes

---

## Phase 3: Scale + Findings

**Goal:** The US crisis is visualized with an interactive map and bar chart; the evidence section presents 6 cards with staggered reveals.

**Requirements:** SCALE-01, SCALE-02, SCALE-03, SCALE-04, FIND-01, FIND-02, FIND-03

**Tasks:**

*Scale:*
- Build Scale section with US primary stat block (542/100k in red, ~2M total, contextual sentences)
- Build inline SVG choropleth map of US states; color states by BJS incarceration rate (red intensity scale); add click handler that shows a tooltip/panel with state name + rate per 100k
- Embed BJS state-level incarceration rate data as a JS object (all 50 states + DC)
- Build Germany "What's Possible" sidebar: compact block, 78/100k in blue, 1–2 sentences framed as proof of concept
- Build animated bar chart (US vs. DE incarceration rate): IO-triggered, `data-width` pattern, `cubic-bezier(0.16, 1, 0.3, 1)` 1.5s transition

*Findings:*
- Build 6 evidence cards in CSS grid (`repeat(auto-fit, minmax(280px, 1fr))`): 4 red (US), 1 gold (both), 1 blue (DE contrast); each has colored top border, tag badge (DM Mono 9px), large stat (Playfair 48px), body copy, source line
- Add pull quote below cards: Iacobelli et al. 2026 (Playfair italic)
- Wire IO stagger: query all `.cards-grid .card`, set `transition-delay: i * 0.1s` on DOMContentLoaded

**Success Criteria:**
1. Scale section headline and US stat block render correctly in red
2. US map renders all 50 states; clicking any state shows its BJS incarceration rate in a panel/tooltip
3. Germany sidebar appears as a compact secondary block — visually subordinate to the US content
4. Bar chart fills on scroll (IO trigger); transitions complete in ~1.5s
5. All 6 evidence cards render with correct color accent (4 red, 1 gold, 1 blue); stagger visible on scroll
6. Pull quote renders in Playfair italic below the cards grid

**UI hint:** yes

---

## Phase 4: Barriers + Gaps

**Goal:** US barriers timeline is complete; Germany appears as a brief contrast callout; 5 research gaps are readable and interactive.

**Requirements:** BARR-01, BARR-02, BARR-03, GAP-01, GAP-02, GAP-03

**Tasks:**

*Barriers:*
- Build US barriers as a left-bordered vertical timeline (4 items): No Federal Mandate, DEA Certification, Stigma Within Facilities, Entrapped by Treatment; each with dot, DM Mono label, H3, paragraph
- Build Germany "By Contrast" callout: compact paragraph block below the US timeline, blue accent, framed as "contrast" not "comparison"
- Build highlighted summary box: gold-tinted background, "In Germany, treatment is a legal right. In the US, it's a jurisdiction-dependent privilege."

*Gaps:*
- Build 5 numbered gap items (stacked, `border-bottom: 1px solid var(--border)`): large Playfair number 01–05, title, 2–3 sentence description
- Wire hover: gap numbers transition from `var(--border)` to `var(--gold)` on hover (`transition: color 0.3s`)
- Wire IO stagger reveals on all gap items

**Success Criteria:**
1. US barriers timeline renders as a left-bordered vertical list with 4 items, each clearly labeled
2. Germany contrast callout appears below the US timeline as a clearly subordinate block (not a tab, not equal billing)
3. Summary box renders with gold-tinted background and correct copy
4. All 5 research gaps render with large Playfair numbers; numbers turn gold on hover
5. Gap items animate in from `translateY(20px)` with staggered delays on scroll

**UI hint:** yes

---

## Phase 5: Pitch + Footer

**Goal:** The funding case is complete — cost grid, "Why Fund This" cards, and footer with sources are all in place. Site is end-to-end scrollable.

**Requirements:** PITCH-01, PITCH-02, DEV-01

**Tasks:**
- Build chapter marker: full-width decorative rule with centered "Chapter 06 — Why Fund This"
- Build H2 + brief bridge paragraph (placeholder marked for user copy)
- Build 2×2 cost grid: 4 cells with `background: var(--bg3)`, gold large number, muted description ($42K, 60%, 17%, 2M)
- Build 3 "Why Fund This" cards: ⚖️ Legal Reform Evidence, 🧬 A New Outcome Framework, 🌍 Cross-National Policy Blueprint
- Build footer: `border-top: 1px solid var(--border)`; left: copyright; right: source list in DM Mono (all 12 sources)
- Audit entire file for missing `<!-- FILL IN: [description] -->` markers in hero, card copy, and CTA email

**Success Criteria:**
1. Full page scroll from top to bottom works without layout breaks or console errors
2. 2×2 cost grid renders with 4 cells; gold numbers, muted labels
3. 3 "Why Fund This" cards render in a 3-column row
4. Footer renders with copyright left and source list right
5. At least 3 `<!-- FILL IN -->` markers visible in source: hero subheading, country card copy, CTA email

**UI hint:** yes

---

## Phase 6: Responsive + QA

**Goal:** Site works on mobile and is ready for course submission.

**Requirements:** RESP-01

**Tasks:**
- Add `@media (max-width: 768px)` block: hide nav links, collapse `.two-col` and grid layouts to single column, reduce padding to `80px 6vw`
- Ensure SVG map scales down gracefully (set viewBox, remove fixed width)
- Ensure H1 display type doesn't overflow on narrow screens (use `clamp()` or `word-break`)
- Add `@media print { nav, #progress-bar { display: none; } }` (v2 feature, minimal effort at this stage)
- Manual QA checklist: open in Chrome at 375px, 768px, 1440px; check all IO triggers fire; check all fonts load; check smooth scroll

**Success Criteria:**
1. At 375px width: nav shows logo only; all sections stack to single column; no horizontal scroll
2. SVG map shrinks proportionally to container width without overflowing
3. Display headline does not overflow or wrap unexpectedly at any tested width
4. All IntersectionObserver triggers fire correctly at 375px
5. No console errors on any tested viewport

**UI hint:** no

---

## Requirement Coverage

All 24 v1 requirements mapped:

| Phase | Requirements |
|-------|-------------|
| 1 | NAV-01, DES-01, DES-02, DES-03, DES-04 |
| 2 | HERO-01, HERO-02 |
| 3 | SCALE-01, SCALE-02, SCALE-03, SCALE-04, FIND-01, FIND-02, FIND-03 |
| 4 | BARR-01, BARR-02, BARR-03, GAP-01, GAP-02, GAP-03 |
| 5 | PITCH-01, PITCH-02, DEV-01 |
| 6 | RESP-01 |

**Unmapped:** 0 ✓
