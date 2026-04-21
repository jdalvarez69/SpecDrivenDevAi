# Sprint 002
## Goal
Implement the content model and populate credible portfolio content with at least 3 project cards.

## Scope
### In
- Define one reusable project card data structure.
- Add at least 3 complete project entries.
- Render selected projects on Home and full list on Projects page.
- Fill About/Resume and Contact with real, non-placeholder structure.

### Out
- Final visual polish and responsive tuning.
- Deployment automation.
- Optional per-project detail pages.

## Tasks
- Create content source file(s) for projects (JSON/TS/Markdown collection).
- Define required fields: title, oneLineOutcome, problemContext, whatWasBuilt, roleDecisions, stack, resultEvidence, repoUrl.
- Implement reusable project card component.
- Render 2-3 selected cards on Home.
- Render full project list (minimum 3) on Projects page.
- Fill About/Resume sections: bio, strengths/interests, education, resume link.
- Fill Contact section with email, LinkedIn, GitHub links.

## Files to touch
- src/data/projects.(ts|json)
- src/components/ProjectCard.astro
- src/pages/index.astro
- src/pages/projects.astro
- src/pages/about.astro
- src/pages/contact.astro

## Acceptance criteria
- At least 3 project cards render on the Projects page.
- Every project card includes required fields and a working repo link.
- Home page shows 2-3 selected projects with outcome-first summaries.
- About/Resume page includes bio, strengths/interests, education, and resume link.
- Contact page includes email, LinkedIn, and GitHub links.

## Verification checklist
- Manually verify every card has all required fields present.
- Click every repo/contact link and confirm no broken URLs.
- Confirm optional fields (demo/write-up) only display when provided.
- Validate there is no generic placeholder copy in public sections.

## Completion evidence
- Snapshot of rendered Projects page showing 3+ cards.
- Link-check notes for repo/contact URLs.
- Short note listing where project data model is defined.

## What not to do
- Do not introduce project filtering, search, or sorting.
- Do not add CMS/blog or dynamic backend content.
- Do not add extra pages outside required IA.
