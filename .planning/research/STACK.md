# STACK.md — Technology Research
*Locked Out of Care · 2026-04-22*

## Confirmed Stack (from PRD)

| Layer | Choice | Confidence |
|-------|--------|------------|
| HTML | Semantic HTML5 sections with `id` anchors | High |
| CSS | Custom properties + vanilla CSS (no preprocessor) | High |
| JS | Vanilla ES6+ (no libraries) | High |
| Fonts | Google Fonts CDN (Playfair Display, DM Mono, DM Sans) | High |
| Deployment | Open file in browser (no server) | High |

## Single File Architecture

For a file that will grow large, keep this structure in `index.html`:

```
<head>
  <!-- CSS variables → reset → layout → components → animations → responsive -->
</head>
<body>
  <!-- nav, sections in order -->
</body>
<script>
  <!-- DOMContentLoaded wrapper, then: scroll progress, IO observers, tab toggle, card stagger -->
</script>
```

**CSS ordering matters:** custom properties first so everything else can reference them. Animations last so they don't interfere with layout rules.

## IntersectionObserver — 2026 Best Practice

- `threshold: 0.15` is appropriate for most reveals (triggers when 15% of element is visible)
- Use `rootMargin: '0px 0px -50px 0px'` to trigger reveals slightly before fully in view — feels more responsive
- `once: true` pattern (disconnect after first trigger) avoids re-animating already-seen content:

```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // fire once
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
```

## Google Fonts CDN Loading

Combine all three families in one `<link>` request to avoid render-blocking:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500&family=DM+Sans:wght@300;400&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap" rel="stylesheet">
```

`display=swap` prevents invisible text while fonts load.

## Bar Chart Animation

Store target width in `data-width` attribute, read on IO trigger:

```js
// On intersection of .bar-compare:
el.querySelectorAll('.bar-fill').forEach(bar => {
  bar.style.width = bar.dataset.width;
});
```

CSS handles the transition:
```css
.bar-fill {
  width: 0;
  transition: width 1.5s cubic-bezier(0.16, 1, 0.3, 1);
}
```

## What NOT to Use

- **GSAP / ScrollTrigger** — overkill, adds 60KB+ dependency
- **D3.js** — bar charts are simple enough for pure CSS/JS
- **Locomotive Scroll** — smooth scroll is nice but breaks `print()` and file:// protocol
- **AOS library** — IntersectionObserver is already native; no need for a wrapper library
