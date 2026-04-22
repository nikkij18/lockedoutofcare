# FEATURES.md — Scrollytelling Feature Research
*Locked Out of Care · 2026-04-22*

## Table Stakes (Must Have for Credibility)

| Feature | Why Table Stakes |
|---------|-----------------|
| Scroll progress bar | Sets expectation of length; signals the site is an intentional narrative |
| Smooth anchor nav | Clicking chapter links must scroll smoothly — janky jumps destroy credibility |
| Fade-up reveal animations | Standard for editorial sites; absence feels unfinished |
| Responsive layout | Funders will open on various devices; mobile collapse is required |
| Legible typography at all sizes | Playfair Display at large sizes can break on narrow screens |
| `window.print()` for Download Brief | Funders expect a printable artifact |

## Differentiators (What Makes This Site Work)

| Feature | Impact |
|---------|--------|
| Composite character throughline | Identified individual effect — moves funders more than aggregate stats |
| Animated bar charts (IO-triggered) | Data lands harder when it appears dynamically rather than static |
| Tab toggle for US vs. DE barriers | Allows focused comparison without overwhelming the reader |
| Gold/red/blue color system | Immediate visual grammar — reader learns the system by section 2 |
| Pull quotes in Playfair italic | Human voice anchors the data; breaks up dense copy |
| Gap item hover animation | Signals interactivity in an otherwise scroll-only experience |

## Anti-Features (Deliberately Not Building)

| Feature | Why Not |
|---------|---------|
| Parallax backgrounds | Causes motion sickness, performs poorly on file:// protocol |
| Sticky section headers | Adds JS complexity; section labels in the nav are sufficient |
| Video background in hero | File size problem for a local HTML file |
| Animated counter numbers | Counting up to "542" feels like a trick rather than information |
| Popover citations | Over-engineers what a simple footer handles well |

## Throughline Narrative — Implementation Pattern

The composite individual needs **3 anchor moments** to feel like a throughline without dominating the data narrative:

1. **Hero:** Introduce Marcus (or name user chooses). One sentence about who he is and why he's incarcerated. Photo placeholder behind stats.
2. **Barriers section:** A brief "Marcus experienced ___" callout box — 2 sentences. Connects policy barriers to a human outcome.
3. **Pitch section:** Marcus's fate — a single sentence above the CTA. Becomes the emotional payoff that drives the "Fund This" click.

Keep each appearance short — the throughline should feel like a thread, not a competing narrative.
