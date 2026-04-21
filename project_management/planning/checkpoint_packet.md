# Checkpoint Packet
## Project
- Name: Student personal portfolio website (SpecDrivenDevAI planning project).
- Summary: Static portfolio focused on credibility, clarity, and fast reviewer scanability.
- Current status: Sprint 004 complete. Site is deployed to GitHub Pages with workflow-based deployment and updated documentation. No active sprint.

## Chosen style
- Editorial Minimal (content-first).
- Why chosen: strongest fit for credibility and clarity with low implementation risk for a beginner.

## Chosen stack
- Astro static site.
- HTML/CSS with minimal JavaScript.
- No backend/database.
- Deployment target: GitHub Pages via GitHub Actions.

## Current active sprint
- None. Sprint 004 is complete.

## Completed sprints + evidence links
- Sprint 001 — COMPLETE
  - Receipt: project_management/completed/sprint_001.md
  - Build output: `4 page(s) built in 1.12s — Complete!`
  - Routes confirmed: /, /projects, /about, /contact
  - Nav confirmed on all pages
  - No lorem ipsum introduced
- Sprint 002 — COMPLETE
  - Receipt: project_management/completed/sprint_002.md
  - Build output: `4 page(s) built in 615ms — Complete!`
  - 3 project cards confirmed on /projects
  - 2 featured cards on home, outcome-first
  - About/Resume: bio, strengths, education, resume link all present
  - Contact: email, GitHub, LinkedIn links present
  - Identity updated to Jorge Alvarez / NJIT BIS
  - TODO markers in place for real URLs/email
- Sprint 003 — COMPLETE
  - Receipt: project_management/completed/sprint_003.md
  - Build output: `4 page(s) built in 592ms — Complete!`
  - Editorial Minimal tokens and typography/spacing hierarchy applied
  - Navigation responsive at mobile breakpoints with active state
  - Focus visibility + skip link + heading structure checks passed
  - Placeholder email and repo links replaced with provided real details
- Sprint 004 — COMPLETE
  - Receipt: project_management/completed/sprint_004.md
  - GitHub Pages workflow configured in `.github/workflows/deploy.yml`
  - Live site confirmed: https://jdalvarez69.github.io/SpecDrivenDevAi/
  - Internal navigation routes confirmed on live deployment
  - README updated with live URL and deployment instructions

## Current deploy URL
- https://jdalvarez69.github.io/SpecDrivenDevAi/

## Known issues / risks
- TODO marker remains for LinkedIn username in contact page.
- resume.pdf may be missing from `public/` and should be added to avoid a broken resume link.

## Next acceptance criteria
- TBD
