export type LinkItem = {
  label: string;
  href: string;
  meta: string;
};

export type WorkItem = {
  title: string;
  place: string;
  period: string;
  body: string;
};

export type ActivityItem = {
  value: string;
  label: string;
  detail: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type ProjectItem = {
  name: string;
  description: string;
  imageAlt: string;
  imageSrc: string;
  githubUrl: string;
  liveUrl: string;
  tags: string[];
};

export const links: LinkItem[] = [
  {
    label: "GitHub",
    href: "https://github.com/mattander",
    meta: "mattander",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mattanderson",
    meta: "profile",
  },
];

export const work: WorkItem[] = [
  {
    title: "React surfaces that age well",
    place: "Routing, forms, state, validation",
    period: "Product UI",
    body: "Builds typed interfaces with clear route contracts, boring data flow, and component boundaries that still make sense after the first launch.",
  },
  {
    title: "AI-assisted work with guardrails",
    place: "Prompts, permissions, recovery states",
    period: "Workflow design",
    body: "Turns rough intent into reviewable software without hiding the machinery: plans, diffs, tests, browser checks, and clear places for people to steer.",
  },
  {
    title: "Deploys you can repeat",
    place: "GitHub Actions, Cloudflare, browser QA",
    period: "Delivery",
    body: "Tightens the path from local change to shipped page with checks that catch real regressions and deployment steps that are easy to repeat.",
  },
];

export const activity: ActivityItem[] = [
  {
    value: "Jank Launcher",
    label: "browser game",
    detail: "PixiJS rocket sandbox with hand-drawn procedural art and flight logic",
  },
  {
    value: "Just Quiz Me",
    label: "quiz app",
    detail: "TanStack Start app on Cloudflare Workers with authored quiz content",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Interface work",
    items: ["React", "TypeScript", "TanStack Router", "Forms", "Accessibility"],
  },
  {
    label: "Shipping",
    items: ["Vite", "GitHub Actions", "Cloudflare", "Wrangler", "Release checks"],
  },
  {
    label: "Quality",
    items: ["Vitest", "Playwright", "Oxlint", "Browser QA", "Code review"],
  },
  {
    label: "Product systems",
    items: ["Design systems", "Agent workflows", "Performance", "Architecture"],
  },
];

export const projects: ProjectItem[] = [
  {
    name: "Jank Launcher",
    description:
      "A hand-drawn 2D rocket sandbox for building weird little spacecraft, launching them across a tiny solar system, shaping orbits, landing badly, and firing lasers at whatever gets in the way.",
    imageAlt: "Jank Launcher preview with a hand-drawn rocket over a dark space background",
    imageSrc: "/projects/jank-launcher-card.png",
    githubUrl: "https://github.com/mattander/jank-launcher",
    liveUrl: "https://jank-launcher.pages.dev",
    tags: ["Vite", "TypeScript", "PixiJS", "Vitest", "Cloudflare Pages"],
  },
  {
    name: "Just Quiz Me",
    description:
      "A fast, absurd quiz site with a lightweight public homepage, multiple published quizzes, instant result pages, and a Cloudflare-backed runtime built for shareable nonsense.",
    imageAlt: "Just Quiz Me preview card with the site logo and tagline",
    imageSrc: "/projects/just-quiz-me-card.png",
    githubUrl: "https://github.com/mattander/just-quiz-me",
    liveUrl: "https://justquiz.me",
    tags: [
      "TanStack Start",
      "React",
      "TypeScript",
      "Cloudflare Workers",
      "D1",
      "Tailwind CSS",
      "Valibot",
    ],
  },
];
