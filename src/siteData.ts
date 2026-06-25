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
  href?: string;
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
    name: "React architecture and migration",
    description:
      "Component systems, routing, state boundaries, form patterns, typed contracts, and UI architecture that can survive real product pressure.",
  },
  {
    name: "Agentic product engineering",
    description:
      "Agent UX, prompt and skill guidance, recovery states, permissions, and AI-assisted workflows for turning rough intent into reviewed software.",
  },
  {
    name: "Quality and delivery systems",
    description:
      "TypeScript hardening, cast removal, browser test stability, release automation, deploy gates, documentation, and reviewable change sets.",
  },
];
