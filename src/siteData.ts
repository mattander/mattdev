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
    title: "Frontend architecture teams can build on",
    place: "Composition, routing, forms, state",
    period: "Patterns",
    body: "Defines scalable component boundaries, route contracts, and data flows so teams can move faster without turning the UI into a pile of special cases.",
  },
  {
    title: "Accessible experiences with texture",
    place: "HTML, CSS, interaction details",
    period: "Craft",
    body: "Cares about the full frontend stack: semantic markup, the CSS spec, keyboard flows, readable states, and the small bits of delight that make a product feel considered.",
  },
  {
    title: "Problem solving past the UI layer",
    place: "Agents, CI, scaffolding, delivery",
    period: "Systems",
    body: "Uses structural thinking and agent workflows to take on platform problems too: continuous deployment, app scaffolding, browser verification, and safer engineering loops.",
  },
];

export const activity: ActivityItem[] = [
  {
    value: "Writing + UX testing",
    label: "background",
    detail: "Non-traditional engineering path with a strong bias toward clarity and user evidence",
  },
  {
    value: "Frontend architecture",
    label: "specialty",
    detail: "Composable patterns, accessible foundations, and interfaces teams can extend",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend fundamentals",
    items: ["Semantic HTML", "CSS spec", "Accessibility", "Interaction states", "Performance"],
  },
  {
    label: "Compositional UI",
    items: ["React", "TypeScript", "TanStack Router", "Forms", "Design systems"],
  },
  {
    label: "Engineering systems",
    items: ["Architecture", "Scaffolding", "GitHub Actions", "Cloudflare", "Release checks"],
  },
  {
    label: "Verification",
    items: ["Vitest", "Playwright", "Oxlint", "Browser QA", "Code review"],
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
