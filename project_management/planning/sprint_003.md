# Sprint 003
## Goal
Apply Editorial Minimal design rules and complete responsive usability for mobile and desktop.

## Scope
### In
- Implement typography hierarchy, spacing scale, and restrained color palette.
- Standardize card, section, and link/button styles.
- Ensure responsive behavior at 360px, 768px, and desktop widths.
- Add basic accessibility improvements (focus visibility, semantic headings, contrast checks).

### Out
- Rebranding or major visual experimentation.
- Motion-heavy effects and animation libraries.
- New feature development.

## Tasks
- Define and apply a global design token baseline (colors, spacing, type scale).
- Update page layouts for consistent spacing and readable line lengths.
- Ensure project cards are visually consistent across Home and Projects.
- Implement clear focus and hover states for links/buttons.
- Test and fix layout issues at target breakpoints.
- Run a quick accessibility pass for heading order, alt text (if images), and contrast.

## Files to touch
- src/styles/global.css
- src/layouts/BaseLayout.astro
- src/components/SiteHeader.astro
- src/components/ProjectCard.astro
- src/pages/index.astro
- src/pages/projects.astro
- src/pages/about.astro
- src/pages/contact.astro

## Acceptance criteria
- Visual style matches Editorial Minimal constraints from spec.
- No horizontal scrolling on core pages at 360px and 768px widths.
- Text remains readable with no overlaps or clipped blocks.
- Navigation remains usable on mobile and desktop.
- Keyboard focus states are visible on interactive elements.

## Verification checklist
- Test pages at 360px, 768px, and desktop widths.
- Tab through navigation and links to confirm focus visibility.
- Confirm heading order is logical (`h1` then descending structure).
- Confirm contrast is acceptable for body text and links.

## Completion evidence
- Before/after screenshots at mobile and desktop widths.
- Short issue log of responsive fixes applied.
- Accessibility checklist notes with pass/fail outcomes.

## What not to do
- Do not redesign information architecture.
- Do not add dark mode or theme switchers.
- Do not introduce third-party UI frameworks unless absolutely required.
