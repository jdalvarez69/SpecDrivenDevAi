# Exploration

## Project goal
- Build a student personal portfolio website.
- Solve the problem of scattered work (resume, projects, contact info) by presenting everything in one credible, easy-to-scan place.
- Core outcome: a clean site that helps reviewers quickly understand skills, see proof of work, and contact the student.

## Audience
- Primary: internship recruiters, hiring managers, and professors reviewing student work.
- Secondary: peers/collaborators and scholarship/program evaluators.
- Key needs: fast clarity on role focus, strongest projects, technical skills, and how to contact.
- Context: short review windows on laptop/mobile, often opening many portfolio tabs in sequence.

## Constraints
- Time limit: 1-2 focused weekends to reach publishable quality.
- Scope limits: 1 homepage, 1 projects page, 1 about/resume page, optional lightweight project detail pages.
- Technical limits: static site only (no database/backend required), low maintenance, beginner-friendly tooling.
- Required platform target: reliable GitHub Pages deployment from repo.

## Success criteria
- A reviewer can answer in under 30 seconds: who this student is, what they build, and how to reach them.
- At least 2-4 project cards include outcome + stack + links (demo/repo if available).
- Site is responsive, readable, and free of broken links on major pages.
- Updates are easy enough to make in under 15 minutes for a new project addition.

## Design direction options
- Direction 1: Editorial Minimal (clean, content-first)
	- What it signals: maturity, clarity, and confidence in the work itself.
	- When it is a bad fit: if the target role is highly visual/brand-heavy and expects expressive art direction.
	- 5 non-negotiable rules:
		- Use one primary typeface with clear hierarchy (headline, subhead, body).
		- Keep a restrained palette (1 accent color + neutrals).
		- Prioritize whitespace and consistent spacing rhythm.
		- Every project preview must show outcome before technical detail.
		- Avoid decorative effects that compete with content.
	- 2 example layout patterns:
		- Hero intro + selected projects grid + compact footer CTA.
		- Two-column about section + single-column project list with strong summaries.

- Direction 2: Product UI (dashboard-like, structured)
	- What it signals: engineering discipline, system thinking, and implementation rigor.
	- When it is a bad fit: if content is sparse (few projects), because structured shells can feel empty quickly.
	- 5 non-negotiable rules:
		- Use card and section components consistently.
		- Show metadata clearly (role, timeline, stack) for each project.
		- Keep interaction patterns predictable (same button/link behavior site-wide).
		- Maintain strong contrast and readable table/list styles.
		- Limit animations to functional cues only.
	- 2 example layout patterns:
		- Sticky left nav + right content panels.
		- Top nav + filterable project cards + detail pages with section anchors.

- Direction 3: Bold Creative (high personality)
	- What it signals: originality, experimentation, and visual confidence.
	- When it is a bad fit: when applying broadly to conservative or mixed technical audiences that prioritize quick readability.
	- 5 non-negotiable rules:
		- Preserve readability first (font size, contrast, line length).
		- Keep motion purposeful, not constant.
		- Use one standout visual motif repeatedly (not many competing ones).
		- Ensure project links are always obvious and above the fold.
		- Provide a calm fallback structure on mobile.
	- 2 example layout patterns:
		- Full-bleed hero + alternating project story blocks.
		- Bento-style section grid with one featured case study.

## Chosen design direction
- Selected option: Direction 1 - Editorial Minimal.
- Recommendation (credibility + clarity): best default for a beginner portfolio because it maximizes scannability, reduces implementation risk, and keeps attention on evidence of work.
- Why this direction:
	- Recruiters can parse key information fast.
	- Easy to build cleanly without advanced frontend complexity.
	- Scales well as new projects are added.
- Accepted tradeoffs:
	- Less visually distinctive than a creative-heavy direction.
	- Requires stronger writing quality to stand out.

## Content / information architecture
- Lean IA:
	- Home: intro, value statement, selected projects, short skills snapshot, contact CTA.
	- Projects: full project list with consistent cards.
	- About/Resume: bio, strengths, education, downloadable resume link.
	- Contact: email + LinkedIn + GitHub.
- Navigation structure: Home | Projects | About/Resume | Contact.
- Primary user flow: land on Home -> scan top 2 projects -> open one project detail or repo -> contact.
- Required content blocks:
	- One-line role focus (for example, "CS student focused on full-stack web apps").
	- 2-4 strongest projects.
	- Skills grouped by category (languages, frameworks, tools).
	- Clear contact methods.

- Simple case-study/project card structure:
	- Project title + one-sentence outcome.
	- Problem/context (1-2 lines).
	- What I built (scope and key features).
	- My role and decisions.
	- Stack used.
	- Result/evidence (metrics, demo behavior, or what works now).
	- Links: live demo (if available), repo, optional write-up.

## Tech stack options
- Option 1: Plain HTML + CSS + lightweight JS
	- Complexity: lowest.
	- Fit: best for learning fundamentals and simple content updates.
	- Tradeoff: more manual repetition as site grows.

- Option 2: Astro (static output)
	- Complexity: low to moderate.
	- Fit: great balance of component reuse and mostly static content.
	- Tradeoff: small build-tool learning curve.

- Option 3: Eleventy (11ty)
	- Complexity: low to moderate.
	- Fit: excellent for content-driven static sites with templates and markdown.
	- Tradeoff: template conventions can feel unfamiliar at first.

## Chosen stack
- Recommended stack: Option 2 - Astro static site.
- Frontend: Astro + HTML/CSS components (minimal JS only where needed).
- Backend: none.
- Data/storage: local markdown/content files in repo.
- Why this stack (easy updates, low complexity, reliable GitHub Pages):
	- Content updates are straightforward through component/markdown edits.
	- Keeps site architecture simple while avoiding duplicated markup.
	- Reliable static build output works well with GitHub Pages deployment workflows.

## Deployment approach
- Host on GitHub Pages.
- Deploy through GitHub Actions on push to main (build static output and publish).
- Verification checklist after each deploy:
	- Homepage loads correctly.
	- Navigation links work.
	- Project/demo/repo links open correctly.
	- Mobile layout is readable.

## Definition of done
- [ ] Live GitHub Pages URL is public and loading.
- [ ] Home, Projects, About/Resume, and Contact sections/pages are complete.
- [ ] At least 3 project cards are filled with outcome, role, stack, and links.
- [ ] No placeholder text remains on public-facing sections.
- [ ] Mobile and desktop layouts are readable with no overlap/cutoff.
- [ ] All internal/external links tested and working.
- [ ] Basic accessibility pass: heading order, alt text, contrast, keyboard-focus visibility.
- [ ] README includes run/build/deploy steps and update instructions.
