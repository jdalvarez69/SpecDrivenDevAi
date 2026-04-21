# Sprint 001
## Goal
Ship the smallest meaningful milestone: a running Astro site with core page shells and working top-level navigation.

## Scope
### In
- Initialize Astro project structure and dependencies.
- Create page shells for Home, Projects, About/Resume, and Contact.
- Add a shared site layout and header navigation.
- Ensure local dev server runs and routes load.

### Out
- Final written content.
- Polished visual styling beyond basic readability.
- Deployment workflow.
- Project card data model implementation.

## Tasks
- Initialize Astro project.
- Create shared layout component with page title handling.
- Create header/nav component with links: Home, Projects, About/Resume, Contact.
- Create route files for all required pages/sections.
- Add placeholder-safe headings and minimal starter text per page.
- Confirm no broken internal links across top-level navigation.

## Files to touch
- package.json
- astro.config.mjs
- src/layouts/BaseLayout.astro
- src/components/SiteHeader.astro
- src/pages/index.astro
- src/pages/projects.astro
- src/pages/about.astro
- src/pages/contact.astro
- src/styles/global.css

## Acceptance criteria
- `npm install` and `npm run dev` execute without errors.
- All four required routes render without 404 errors.
- Header nav appears on every top-level page.
- Nav links route to the correct page.
- Build command runs successfully once (`npm run build`).

## Verification checklist
- Run `npm run dev` and open all required routes.
- Click each nav link from each page and confirm destination.
- Run `npm run build` and confirm successful output.
- Confirm no placeholder lorem ipsum text is introduced.

## Completion evidence
- Terminal output showing successful `npm run build`.
- Screenshot or note confirming all four routes render.
- Short log entry listing created layout and page files.

## What not to do
- Do not add animations, filters, or advanced UI components.
- Do not add backend services or external APIs.
- Do not spend time on detailed typography tuning yet.
