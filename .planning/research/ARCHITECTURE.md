# ARCHITECTURE.md — Architecture Research
*Locked Out of Care · 2026-04-22*

## Single HTML File Structure

```
index.html
├── <head>
│   ├── meta, title, Google Fonts link
│   └── <style> (all CSS, ~600-800 lines)
│       ├── 1. CSS custom properties (:root)
│       ├── 2. Reset + base
│       ├── 3. Fixed elements (nav, progress bar)
│       ├── 4. Section layouts (per section)
│       ├── 5. Component styles (cards, timeline, tabs, etc.)
│       ├── 6. Animation classes (.reveal, .visible, @keyframes)
│       └── 7. Responsive (@media max-width: 768px)
├── <body>
│   ├── #progress-bar (fixed, top)
│   ├── <nav> (fixed)
│   ├── #hero
│   ├── #scale
│   ├── #findings
│   ├── #barriers
│   ├── #gaps
│   ├── #pitch
│   └── <footer>
└── <script> (all JS, ~150-200 lines)
    ├── Scroll progress bar
    ├── Smooth scroll for nav links
    ├── IntersectionObserver (reveals + bar animation)
    ├── Tab toggle (barriers section)
    └── Card stagger (on DOMContentLoaded)
```

## Component Boundaries

### Nav
- Fixed, always visible
- Smooth scroll anchors via `scrollIntoView({ behavior: 'smooth' })`
- Active section highlighting optional (nice-to-have, not required)

### Progress Bar
- Separate from nav, sits above it at `top: 0; z-index: 1000`
- Single div `id="progress-bar"`, width set by scroll handler

### Section Pattern
Every section follows:
```html
<section id="[id]" class="section">
  <p class="section-label reveal">LABEL · IN DM MONO</p>
  <h2 class="reveal">Heading</h2>
  <!-- content -->
</section>
```

### Throughline Character Callout
A reusable inline callout pattern for Marcus:
```html
<div class="throughline-callout reveal">
  <span class="throughline-name">Marcus</span>
  <p>[2-sentence narrative anchor]</p>
</div>
```
Appears in: hero (intro), barriers (callout), pitch (fate).

## Data Flow

Static → all content is hardcoded HTML. No API calls, no dynamic data loading. The only "data" is:
- Bar chart target widths in `data-width` attributes
- Card stagger delays set via JS on DOMContentLoaded
- Scroll progress via `window.scrollY`

## Build Order (Phase Mapping)

1. **Foundation** — HTML skeleton + design system CSS (variables, reset, nav, progress bar)
2. **Hero** — Background, typography, stats row, character intro, fadeUp animations
3. **Scale + Findings** — Two-column cards, bar charts, evidence cards, IO reveals
4. **Barriers + Gaps** — Tab toggle, timeline items, numbered gaps, hover interaction
5. **Pitch + Footer** — Cost grid, CTA cards, pull quote, buttons, footer
6. **Polish** — Throughline character callouts, responsive, print styles, placeholder markers

## CSS Custom Properties Reference

```css
:root {
  --bg:     #0a0a0a;
  --bg2:    #111111;
  --bg3:    #1a1a1a;
  --cream:  #f0ead8;
  --gold:   #c8a96e;
  --red:    #c0392b;
  --blue:   #2980b9;
  --muted:  #888888;
  --border: #2a2a2a;
  --pad-v:  120px;
  --pad-h:  10vw;
}
```
