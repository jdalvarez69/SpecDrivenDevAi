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
    title: "Study Session Tracker",
    oneLineOutcome: "Reduced time lost to untracked study gaps by giving students a simple log they can act on.",
    problemContext:
      "Students often lose track of how much time they actually spend studying versus planning to study. Existing tools were too complex or required an account.",
    whatWasBuilt:
      "A single-page web app that lets users start/stop a timer, tag sessions by subject, and view a daily summary — all stored locally with no login required.",
    roleDecisions:
      "Sole developer. Chose localStorage over a backend to keep the app zero-friction to start. Deliberately kept the UI to one screen to avoid feature sprawl.",
    stack: ["HTML", "CSS", "JavaScript", "localStorage"],
    resultEvidence:
      "App runs fully in-browser with no server. Timer, tagging, and daily summary all function as intended. Loads in under 1 second on a cold start.",
    repoUrl: "https://github.com/jdalvarez69/SpecDrivenDevAi.git",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    oneLineOutcome: "Delivered a clean, readable 5-day forecast view by combining two public APIs into a single interface.",
    problemContext:
      "Default weather apps show too much noise. The goal was a minimal view focused on the data most useful for daily planning: temperature, precipitation chance, and wind.",
    whatWasBuilt:
      "A browser-based dashboard that fetches current conditions and a 5-day forecast using the OpenWeather API, with a city search and clean card-based layout.",
    roleDecisions:
      "Chose vanilla JS over a framework to keep the project dependency-free and easier to debug. Made API key handling explicit in a config file with a README warning.",
    stack: ["HTML", "CSS", "JavaScript", "OpenWeather API", "Fetch API"],
    resultEvidence:
      "City search returns results in under 2 seconds. Forecast cards render correctly for any valid city name. Error state shows a clear message for invalid input.",
    repoUrl: "https://github.com/jdalvarez69/SpecDrivenDevAi.git",
    featured: true,
  },
  {
    title: "Markdown Notes CLI",
    oneLineOutcome: "Cut note-retrieval time by making plain markdown files searchable and organized from the terminal.",
    problemContext:
      "Existing note apps either lock content behind proprietary formats or require a GUI. The goal was a lightweight tool for developers already living in the terminal.",
    whatWasBuilt:
      "A Python CLI tool that creates, lists, and searches plain markdown note files in a local directory. Supports tagging via frontmatter and fuzzy title search.",
    roleDecisions:
      "Used Python's argparse and pathlib for portability — no third-party dependencies required. Stored notes as plain files so they remain readable without the tool.",
    stack: ["Python", "argparse", "pathlib", "Markdown"],
    resultEvidence:
      "All core commands (new, list, search) work correctly. Notes persist across sessions as plain .md files. Tested on macOS and Linux.",
    repoUrl: "https://github.com/jdalvarez69/SpecDrivenDevAi.git",
    featured: false,
  },
];
