# Research Summary
*Locked Out of Care · 2026-04-22*

## Stack

**Confirmed:** Single HTML file, vanilla HTML/CSS/JS, Google Fonts CDN. No libraries needed.

Key implementation details:
- IntersectionObserver with `observer.unobserve()` after first trigger (no re-animation)
- Bar chart animation via `data-width` attributes + CSS `transition`
- Google Fonts: combine all three families in one CDN request with `display=swap`
- All assets inline — `file://` protocol blocks external CSS/JS imports

## Table Stakes (must ship)

- Scroll progress bar
- Smooth anchor nav
- Fade-up reveal animations (IntersectionObserver)
- Responsive collapse at 768px
- `window.print()` for Download Brief CTA

## Key Differentiators (what makes this site work)

- **Composite character throughline** — 3 appearances: hero intro, barriers callout, pitch fate reveal. Keep each appearance to 2 sentences max.
- **Animated bar charts** — IO-triggered, `cubic-bezier(0.16, 1, 0.3, 1)`, `1.5s`
- **Gold/red/blue color grammar** — reader learns the system by section 2

## Watch Out For

1. **`file://` CORS on Google Fonts** — Chrome works; Firefox/Safari may block. Use `display=swap` + serif/monospace fallbacks.
2. **IO triggers on above-fold elements** — use CSS `@keyframes` for hero, IO only for below-fold content
3. **Tab toggle flash** — set DE content to `display:none` in HTML, not via JS
4. **`window.print()` fixed elements** — add `@media print { nav, #progress-bar { display: none; } }`
5. **Playfair 900 italic doesn't exist** — use 700 italic or 400 italic

## Build Order

1. Foundation (design system, nav, progress bar)
2. Hero (character intro, stats, animations)
3. Scale + Findings (bar charts, evidence cards)
4. Barriers + Gaps (tab toggle, timelines, numbered gaps)
5. Pitch + Footer (cost grid, CTA, throughline payoff)
6. Polish (responsive, print, placeholder markers)
