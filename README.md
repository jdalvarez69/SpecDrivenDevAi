# Jorge Alvarez Portfolio

Static student portfolio built with Astro and prepared for GitHub Pages deployment.

## Live Site

- Status: Live
- URL: https://jdalvarez69.github.io/SpecDrivenDevAi/

## Local Setup

1. Install Node.js 20 or newer.
2. Install dependencies:

```bash
npm install
```

3. Start the local dev server:

```bash
npm run dev
```

4. Open the local URL shown in the terminal.

## Build

Run a production build:

```bash
npm run build
```

Expected result: Astro generates a static `dist/` folder with all portfolio pages.

## Deployment (GitHub Pages)

Deployment is handled by the workflow in [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

- Trigger: push to `main`
- Steps: install dependencies, build site, upload `dist/`, deploy to GitHub Pages
- Required repo setting: in GitHub Pages, use **GitHub Actions** as the source

## Updating Project Cards

Project data is stored in [src/data/projects.ts](src/data/projects.ts).

To add or update a project:

1. Add or edit an object in the `projects` array.
2. Keep required fields filled: `title`, `oneLineOutcome`, `problemContext`, `whatWasBuilt`, `roleDecisions`, `stack`, `resultEvidence`, `repoUrl`.
3. Set `featured: true` for projects you want shown on the homepage selected section.
4. Run `npm run build` to validate changes.

## Reflection

This project taught me how important it is to work in small, defined steps instead of trying to build everything at once. The sprint structure helped me focus on one milestone at a time, starting with foundation, then content, then design quality, and finally deployment prep. I learned that writing a spec first makes implementation decisions much easier because I always had a clear definition of done.

I also learned that clean design is not about adding more, but removing noise. During the styling sprint, I focused on readability, spacing consistency, and strong hierarchy. Those details made the site feel more credible without adding complexity. On the technical side, I became more comfortable with Astro, reusable components, and keeping content in a structured data file.

The deployment prep was a good lesson in practical engineering. Things like base paths, workflow files, and documentation can feel secondary, but they are what make a project usable by other people. Overall, I feel more confident planning, building, and finishing a project in a disciplined way.
