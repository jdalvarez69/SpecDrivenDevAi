# Checkpoint Packet
## Project
- Name: Student personal portfolio website (SpecDrivenDevAI planning project).
- Summary: Static portfolio focused on credibility, clarity, and fast reviewer scanability.
- Current status: Sprint 003 complete. Editorial Minimal styling, responsive behavior, and baseline accessibility improvements are implemented. No active sprint. Ready to begin Sprint 004.

## Chosen style
- Editorial Minimal (content-first).
- Why chosen: strongest fit for credibility and clarity with low implementation risk for a beginner.

## Chosen stack
- Astro static site.
- HTML/CSS with minimal JavaScript.
- No backend/database.
- Deployment target: GitHub Pages via GitHub Actions.

## Current active sprint
- None. Sprint 003 is complete. Sprint 004 not yet started.

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

## Current deploy URL
- Pending deployment (expected URL: https://jdalvarez69.github.io/SpecDrivenDevAi/)

## Known issues / risks
- No deployment workflow yet (Sprint 004 scope).
- TODO marker remains for LinkedIn username in contact page.
- resume.pdf not yet added to public/ — needed before deployment.

## Next acceptance criteria
(Sprint 004 — deployment and README completion)
- GitHub Actions deployment workflow succeeds on push to main.
- Public GitHub Pages URL serves latest version.
- Home, Projects, About/Resume, and Contact are reachable on live site.
- Key external links (email, GitHub repo, LinkedIn) work from deployed site.
- README includes setup, build, deploy, and project update instructions.
