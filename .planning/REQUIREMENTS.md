# Requirements: Locked Out of Care

**Defined:** 2026-04-22
**Core Value:** A funder who reaches the "Fund This Research" section believes this research is worth funding — because they followed a composite individual's story through the scroll and felt the gap between what's possible and what exists.

## v1 Requirements

### Navigation

- [ ] **NAV-01**: User sees a fixed top nav with "Locked Out of Care" logo (gold, DM Mono) and 6 chapter anchor links

### Hero

- [ ] **HERO-01**: User reads "Locked / Out of / Care" as a 3-line Playfair Display 900-weight display headline with "Out of" in gold italic
- [ ] **HERO-02**: User is introduced to a composite incarcerated individual (1–2 sentences) as the narrative anchor for the page

### Scale

- [ ] **SCALE-01**: User sees the US incarceration crisis framed as the primary subject — large stat (~2M incarcerated, 542/100k), contextual sentences, red accent
- [ ] **SCALE-02**: User sees an interactive inline SVG choropleth map of the US, colored by state incarceration rate (BJS data); clicking a state shows that state's rate per 100k in a tooltip/panel
- [ ] **SCALE-03**: User sees a "What's Possible" case study sidebar for Germany — one compact block with the 78/100k stat and 1–2 sentences on mandated MAT; framed as proof of concept, not co-protagonist
- [ ] **SCALE-04**: User sees an animated bar chart comparing US vs. Germany incarceration rate, filling on IntersectionObserver trigger

### Findings

- [ ] **FIND-01**: User reads 6 evidence cards in a responsive grid; US-focused cards dominate (4 red, 1 gold/both, 1 blue for Germany as contrast); each has colored top border, tag badge, large stat, body copy, source
- [ ] **FIND-02**: User sees a pull quote below the cards: *"You're doing it because your freedom is on the line."* — Iacobelli et al., 2026
- [ ] **FIND-03**: Cards fade up with staggered delays when scrolled into view

### Barriers

- [ ] **BARR-01**: Section is US-focused by default; US barriers displayed as a timeline (4 items): No Federal Mandate, DEA Certification, Stigma Within Facilities, Entrapped by Treatment
- [ ] **BARR-02**: Germany appears as a brief "By Contrast" callout — one paragraph noting Germany's barrier is retention/scale, not access — to reinforce the US critique, not to give Germany equal billing
- [ ] **BARR-03**: A highlighted summary box: "In Germany, treatment is a legal right. In the US, it's a jurisdiction-dependent privilege."

### Research Gaps

- [ ] **GAP-01**: User reads 5 numbered research gaps (01–05), each with a large Playfair number, title, and 2–3 sentence description
- [ ] **GAP-02**: Gap numbers animate from `var(--border)` color to gold on hover
- [ ] **GAP-03**: Gap items fade up with staggered delays when scrolled into view

### Pitch

- [ ] **PITCH-01**: User sees a 2×2 cost grid with 4 cells: $42K (cost to incarcerate), 60% (overdose reduction with MAT), 17% (recidivism reduction from Germany's Section 64 — cited as the goal), 2M (people inside this failure)
- [ ] **PITCH-02**: User reads 3 "Why Fund This" cards: Legal Reform Evidence, A New Outcome Framework, Cross-National Policy Blueprint

### Design System

- [ ] **DES-01**: Full CSS custom property palette (--bg, --bg2, --bg3, --cream, --gold, --red, --blue, --muted, --border) applied consistently
- [ ] **DES-02**: Typography loaded from Google Fonts CDN: Playfair Display (400/700/900 + italic), DM Mono (300/400/500), DM Sans (300/400)
- [ ] **DES-03**: Section padding: 120px vertical / 10vw horizontal; section labels in DM Mono uppercase with 0.3em letter-spacing
- [ ] **DES-04**: All reveal animations use `.reveal` / `.visible` IntersectionObserver pattern

### Responsive

- [ ] **RESP-01**: At 768px max-width: nav links hidden, sections collapse to single column, padding reduces to 80px / 6vw; map scales down gracefully

### Developer Experience

- [ ] **DEV-01**: Placeholder copy is marked with `<!-- FILL IN: [description] -->` HTML comments for hero subheading, country card copy, and CTA email

## v2 Requirements

### Nav

- **NAV-V2-01**: Scroll progress bar (3px gold bar at top)
- **NAV-V2-02**: Active section highlight in nav

### Hero

- **HERO-V2-01**: Stats row with 3 animated stats (~2M incarcerated, 7.8%, 60%)
- **HERO-V2-02**: Background image placeholder (dark overlay for photo)
- **HERO-V2-03**: Scroll hint animation at bottom of hero

### Throughline

- **THRU-V2-01**: Composite character callout in Barriers section
- **THRU-V2-02**: Composite character fate reveal in Pitch section

### Pitch

- **PITCH-V2-01**: "Fund This Research" CTA button (mailto link)
- **PITCH-V2-02**: "Download Brief" button (window.print())
- **PITCH-V2-03**: Pull quote above CTA

### Polish

- **POLISH-V2-01**: Print styles (@media print hides nav, progress bar)

## Out of Scope

| Feature | Reason |
|---------|--------|
| Build tools / bundlers | Course requirement: single .html file only |
| Backend or server | Must run by opening file directly in browser |
| Real named individual | Academic ethics — composite character only |
| Germany as co-protagonist | Germany is a proof-of-concept reference, not a parallel subject |
| Hamburger menu on mobile | Nav links simply hide; not a navigation-heavy site |
| Parallax backgrounds | Performs poorly on file:// protocol |
| Animated number counters | Feels like a trick; static stats are more credible for funder audience |
| External JS libraries | Zero-dependency is a feature |
| D3.js or mapping libraries | Inline SVG with vanilla JS click handlers is sufficient |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| NAV-01 | Phase 1 | Pending |
| HERO-01 | Phase 1 | Pending |
| HERO-02 | Phase 1 | Pending |
| DES-01 | Phase 1 | Pending |
| DES-02 | Phase 1 | Pending |
| DES-03 | Phase 1 | Pending |
| DES-04 | Phase 1 | Pending |
| SCALE-01 | Phase 2 | Pending |
| SCALE-02 | Phase 2 | Pending |
| SCALE-03 | Phase 2 | Pending |
| SCALE-04 | Phase 2 | Pending |
| FIND-01 | Phase 2 | Pending |
| FIND-02 | Phase 2 | Pending |
| FIND-03 | Phase 2 | Pending |
| BARR-01 | Phase 3 | Pending |
| BARR-02 | Phase 3 | Pending |
| BARR-03 | Phase 3 | Pending |
| GAP-01 | Phase 3 | Pending |
| GAP-02 | Phase 3 | Pending |
| GAP-03 | Phase 3 | Pending |
| PITCH-01 | Phase 4 | Pending |
| PITCH-02 | Phase 4 | Pending |
| RESP-01 | Phase 4 | Pending |
| DEV-01 | Phase 4 | Pending |

**Coverage:**
- v1 requirements: 24 total
- Mapped to phases: 24
- Unmapped: 0 ✓

---
*Requirements defined: 2026-04-22*
*Last updated: 2026-04-22 — added interactive US map (SCALE-02), reframed Germany as case study sidebar (SCALE-03, BARR-02, BARR-03 revised)*
