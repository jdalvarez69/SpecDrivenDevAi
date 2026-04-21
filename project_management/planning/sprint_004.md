# Sprint 004
## Goal
Finalize deployment to GitHub Pages and complete project documentation for reliable handoff.

## Scope
### In
- Configure GitHub Actions workflow for Astro static build and Pages publish.
- Verify successful deployment from `main` branch.
- Validate all key links after deployment.
- Update README with setup, build, deploy, and content-update instructions.

### Out
- New UI features or content expansion.
- Performance optimization beyond obvious quick fixes.
- Advanced CI/CD enhancements beyond required workflow.

## Tasks
- Add/update GitHub Actions workflow for Pages deployment.
- Confirm Astro build output is correctly configured for Pages publishing.
- Push to `main` and verify workflow success.
- Open live Pages URL and test required pages/links.
- Update README with:
  - local setup steps
  - build command and expected output
  - deployment summary for GitHub Pages
  - how to add/update a project card entry

## Files to touch
- .github/workflows/(pages workflow file)
- astro.config.mjs
- README.md
- src/data/projects.(ts|json)

## Acceptance criteria
- GitHub Actions deployment workflow succeeds on push to `main`.
- Public GitHub Pages URL serves latest version.
- Home, Projects, About/Resume, and Contact are reachable on live site.
- Key external links (email, GitHub, LinkedIn, project repos) work from deployed site.
- README contains all required setup/build/deploy/update instructions.

## Verification checklist
- Check Actions run status is successful for latest commit.
- Open live URL and click through top-level navigation.
- Test all key external links from deployed pages.
- Follow README steps in a clean pull to verify reproducibility.

## Completion evidence
- Link to successful Actions run.
- Live site URL.
- README section checklist marked complete.

## What not to do
- Do not add post-launch enhancements in this sprint.
- Do not refactor stable code without a deployment-related reason.
- Do not change scope beyond acceptance criteria.
