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
    title: "Type-safe frontend systems",
    place: "React, routing, tooling",
    period: "Recent focus",
    body: "Builds and hardens React systems with typed data flow, shared route contracts, validation boundaries, and linting that catches real problems before review.",
  },
  {
    title: "Agentic product work",
    place: "AI-assisted workflows",
    period: "Recent focus",
    body: "Works on agent-facing product surfaces and uses AI agents as practical engineering partners for planning, implementation, verification, and review loops.",
  },
  {
    title: "Platform and delivery",
    place: "DX, tests, releases",
    period: "Recent focus",
    body: "Improves the machinery around product work: browser test reliability, CI and deploy gates, release automation, documentation, and code review habits.",
  },
];

export const activity: ActivityItem[] = [
  {
    value: "1.4k+",
    label: "contributions",
    detail: "last 12 months",
  },
  {
    value: "190+",
    label: "active days",
    detail: "steady product, platform, and tooling work",
  },
];

export const skills: string[] = [
  "TypeScript",
  "React",
  "Agentic dev",
  "Architecture",
  "AI-assisted workflows",
  "Frontend systems",
  "Vite",
  "TanStack Router",
  "Oxlint",
  "Vitest",
  "Playwright",
  "GitHub Actions",
  "Cloudflare",
  "Design systems",
  "Accessibility",
  "Performance",
  "Code review",
  "Developer tooling",
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
