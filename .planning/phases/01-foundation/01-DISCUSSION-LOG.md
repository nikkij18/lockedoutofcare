# Phase 1: Foundation - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-04-22
**Phase:** 01-foundation
**Areas discussed:** Nav behavior on scroll

---

## Nav behavior on scroll

| Option | Description | Selected |
|--------|-------------|----------|
| Always semi-opaque | rgba(10,10,10,0.95) always — no JS needed | ✓ |
| Fades in on scroll | Transparent at top, background appears after ~50px | |
| Fully transparent always | No background — relies on dark hero | |

**User's choice:** Always semi-opaque

---

## Nav link hover style

| Option | Description | Selected |
|--------|-------------|----------|
| Gold color on hover | Links default muted, turn gold on hover | |
| Underline on hover | Subtle underline appears | ✓ |
| Opacity lift on hover | Links at 0.6 opacity, go to 1 on hover | |

**User's choice:** Underline on hover

---

## Nav chapter link labels

| Option | Description | Selected |
|--------|-------------|----------|
| Use PRD labels exactly | "The Scale", "Findings", "Barriers", "Gaps", "Research", "Fund This" | |
| Adjust labels | Different wording | ✓ |

**User's choice:** Custom labels
**Final labels:**
1. "The Problem" → #scale
2. "The Statistics" → #findings
3. "Barriers" → #barriers
4. "Gaps" → #gaps
5. "The Proposal" → #pitch
6. "Take Action" → #action (dedicated CTA section, separate from pitch)

**Notes:** User clarified "Take Action" should be where funding CTA lives. This surfaces the need for a dedicated `#action` section (separate from `#pitch`) in Phase 5, which also aligns with the donation option mentioned in PROJECT.md.

---

## Claude's Discretion

- HTML reset style
- CSS `scroll-behavior: smooth` as fallback alongside JS approach
- Section stub inner HTML depth

## Deferred Ideas

- Small one-time donations option → Phase 5 / v2
- Active section highlight in nav → v2 (NAV-V2-02)
- Scroll progress bar → v2 (NAV-V2-01)
