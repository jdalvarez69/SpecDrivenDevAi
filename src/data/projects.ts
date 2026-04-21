export interface Project {
  title: string;
  oneLineOutcome: string;
  problemContext: string;
  whatWasBuilt: string;
  roleDecisions: string;
  stack: string[];
  resultEvidence: string;
  repoUrl: string;
  demoUrl?: string;
  writeupUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "SpecDrivenDevAi Portfolio Site",
    oneLineOutcome:
      "Built and deployed a personal portfolio site with a structured sprint workflow, clear documentation, and GitHub Pages hosting.",
    problemContext:
      "I needed one credible place to present my background, contact information, and project work without overengineering the stack.",
    whatWasBuilt:
      "A static Astro portfolio with Home, Projects, About/Resume, and Contact pages, using reusable components and project data sourced from a single file.",
    roleDecisions:
      "I planned and implemented the site in small sprints, prioritized readability and maintainability, and configured a GitHub Actions workflow for deployment.",
    stack: ["Astro", "TypeScript", "HTML", "CSS", "GitHub Pages", "GitHub Actions"],
    resultEvidence:
      "The site is live on GitHub Pages with working navigation and contact links, and the repository includes planning artifacts and deployment documentation.",
    repoUrl: "https://github.com/jdalvarez69/SpecDrivenDevAi",
    demoUrl: "https://jdalvarez69.github.io/SpecDrivenDevAi/",
    featured: true,
  },
];
