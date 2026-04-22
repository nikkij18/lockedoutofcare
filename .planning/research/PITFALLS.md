# PITFALLS.md — Common Pitfalls
*Locked Out of Care · 2026-04-22*

## Critical Pitfalls

### 1. `file://` protocol breaks scroll behavior
**Warning sign:** Smooth scroll or fetch fails when opening file directly
**Prevention:** Use only native browser APIs. `scrollIntoView({ behavior: 'smooth' })` works on `file://`. Avoid `fetch()`, `import()`, or relative XHR — all fail on `file://`. Put all assets inline (no external CSS/JS files).
**Phase:** Foundation

### 2. IntersectionObserver triggers on load for above-fold elements
**Warning sign:** Hero elements animate when they shouldn't (already visible)
**Prevention:** Add `rootMargin: '0px 0px -50px 0px'` and check `entry.isIntersecting` before adding `.visible`. For hero elements, use CSS `@keyframes` on load directly, not IO.
**Phase:** Hero

### 3. Bar chart animation resets on re-scroll
**Warning sign:** Bar fills re-animate to 0 and back each time section re-enters viewport
**Prevention:** `observer.unobserve(entry.target)` after first trigger. Use `.animated` class guard: `if (!el.classList.contains('animated')) { el.classList.add('animated'); ... }`
**Phase:** Scale

### 4. Google Fonts CORS issue on `file://`
**Warning sign:** Fonts load in Chrome but not Firefox/Safari
**Prevention:** Use `<link rel="preconnect">` + `display=swap`. Test in Chrome (most permissive with `file://`). Firefox/Safari may block CDN fonts on `file://` — if so, fallback to system-ui serif for Playfair, monospace for DM Mono. Document this for the user.
**Phase:** Foundation

### 5. Single file becomes unmanageable
**Warning sign:** CSS section collides with another; hard to find things
**Prevention:** Heavy use of CSS comments as section dividers (`/* ======= HERO ======= */`). Keep JS in a single `<script>` block at bottom with clear function separation.
**Phase:** All

### 6. Mobile `clamp()` / large type breaks layout
**Warning sign:** H1 "Locked Out of Care" overflows on narrow screens
**Prevention:** Use `clamp()` for hero display type. Verify at 375px width. `word-break: break-word` as a fallback.
**Phase:** Hero, Responsive

### 7. `window.print()` captures fixed elements weirdly
**Warning sign:** Print preview shows duplicate nav at top of every page
**Prevention:** Add `@media print { nav, #progress-bar { display: none; } }`. Test print preview before calling the Download Brief button complete.
**Phase:** Pitch

### 8. Tab toggle content visible on page load before JS runs
**Warning sign:** Both US and DE barrier panels visible for a flash before JS hides one
**Prevention:** Set DE tab to `display: none` in HTML/CSS directly, not via JS. JS only toggles; doesn't set initial state.
**Phase:** Barriers

## Low-Risk But Worth Noting

- **Playfair Display italic at 900 weight** — the 900 italic variant doesn't exist; use 700 italic or 400 italic for emphasis
- **Scroll progress bar z-index** — must be higher than nav (`z-index: 1000` vs nav at `999`) so it renders above nav background
- **Gold color on dark** — `#c8a96e` on `#0a0a0a` is WCAG AA compliant for large text; not for body copy — use `var(--cream)` for body
