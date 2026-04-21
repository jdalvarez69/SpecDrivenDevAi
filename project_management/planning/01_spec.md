# Implementation Spec

## Project summary
- Build a static student portfolio website focused on credibility, clarity, and fast scan-ability.
- Primary goal: let a reviewer understand who the student is, what they built, and how to contact them within 30 seconds.
- Scope is intentionally small: core portfolio pages/sections only, no backend features, no advanced interactions.
- Target delivery: beginner-realistic implementation completed in 1-2 weekends.

## Chosen style
- Style direction: Editorial Minimal (content-first).
- Rationale: strongest fit for credibility and clarity with lowest implementation risk.
- Visual characteristics:
	- restrained color palette (neutrals + one accent color)
	- one primary typeface with clear heading/body hierarchy
	- generous whitespace and consistent spacing
	- minimal decorative effects and minimal animation
- UX priority order:
	- readable content
	- clear project evidence
	- obvious contact actions

## Chosen stack
- Framework: Astro (static site generation).
- Languages: HTML/CSS with minimal JavaScript only when necessary.
- Content source: local markdown/content files committed in repository.
- Backend/database: none.
- Hosting/deployment: GitHub Pages via GitHub Actions on push to `main`.

## Pages / sections
- Required top-level navigation items:
	- Home
	- Projects
	- About/Resume
	- Contact
- Home must include:
	- short hero intro (name + role focus + 1-2 sentence value statement)
	- selected projects preview (2-3 items)
	- brief skills snapshot
	- clear call to action to contact and to view all projects
- Projects must include:
	- full list of project cards (minimum 3 cards)
	- consistent card format across all entries
- About/Resume must include:
	- short bio paragraph
	- strengths/interests summary
	- education summary
	- resume link (download or view)
- Contact must include:
	- email
	- LinkedIn
	- GitHub

## Content model
- Define one reusable project card/case-study structure with these fields:
	- `title` (string, required)
	- `oneLineOutcome` (string, required)
	- `problemContext` (string, required, 1-2 lines)
	- `whatWasBuilt` (string, required)
	- `roleDecisions` (string, required)
	- `stack` (array of strings, required)
	- `resultEvidence` (string, required)
	- `repoUrl` (URL, required)
	- `demoUrl` (URL, optional)
	- `writeupUrl` (URL, optional)
- Rules for project content:
	- each project must have truthful, specific outcomes (no generic claims)
	- each project must include at least one working link (`repoUrl`)
	- optional links may be omitted if unavailable; required fields may not be empty

## Design rules
- Use one primary typeface and one optional mono/support typeface at most.
- Use a restrained palette: neutral background/text plus one accent color for links/buttons.
- Maintain consistent spacing scale across sections (for example 8/16/24/32px rhythm).
- Keep body text readable: avoid long line lengths and low contrast.
- Show project outcomes before technical details in project previews/cards.
- Keep interactions simple and predictable; avoid novelty UI patterns.
- Limit animation to subtle transitions only; no motion-heavy hero effects.

## Deployment requirements
- Repository must build a static output directory suitable for GitHub Pages.
- GitHub Actions workflow must:
	- install dependencies
	- run production build
	- publish static output to GitHub Pages
- Deployment trigger: push to `main`.
- Build must complete without errors.
- Published URL must be publicly accessible.

## Acceptance criteria
- Homepage:
	- homepage displays name, role focus, value statement, selected projects, skills snapshot, and contact call-to-action
	- reviewer can identify student focus and next contact step within 30 seconds
	- no placeholder text appears in visible homepage sections
- Projects/content section:
	- projects view contains at least 3 project cards
	- every card includes title, one-line outcome, stack, result/evidence, and repo link
	- optional demo/write-up links render only when provided
	- project card layout is visually consistent across all entries
- Navigation:
	- top-level nav includes Home, Projects, About/Resume, Contact
	- each nav link routes to the correct page/section
	- active/focus states are visible for keyboard and mouse users
- Responsiveness:
	- layout remains readable and usable at 360px width, 768px width, and desktop widths
	- no text overlap, clipped content, or horizontal scrolling on core pages (except if code snippets intentionally overflow with handling)
	- navigation remains usable on mobile without broken links
- Deployment:
	- GitHub Actions completes successfully on push to `main`
	- GitHub Pages URL loads and serves latest commit
	- all internal links and key external links (email, GitHub, LinkedIn, project repos) are functional
- README requirements:
	- README includes local setup steps
	- README includes build command and output expectations
	- README includes deployment summary for GitHub Pages
	- README includes how to add or update a project card entry

## Non-goals
- No backend APIs, authentication, databases, or admin dashboard.
- No blog/CMS integration in initial version.
- No advanced animation libraries or heavy client-side frameworks.
- No filtering/search/sorting UI for projects in initial version.
- No multilingual support in initial version.
- No dark mode requirement for initial version.
