export type LinkItem = {
  label: string;
  href: string;
  meta: string;
};

export type Comment = {
  author: "you" | "mattander";
  role: string;
  body: string;
};

export type ReviewThread = {
  id: string;
  comments: Comment[];
};

export type Commit = {
  hash: string;
  type: string;
  message: string;
  detail: string;
};

export type CommitGroup = {
  label: string;
  period: string;
  commits: Commit[];
};

export type Check = {
  name: string;
  status: "pass" | "warn";
  summary: string;
  duration: string;
  items: string[];
};

export type ProjectItem = {
  path: string;
  name: string;
  description: string;
  imageAlt: string;
  imageSrc: string;
  githubUrl?: string;
  liveUrl?: string;
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
    href: "https://www.linkedin.com/in/matt-anderson-75197246/",
    meta: "profile",
  },
];

export const pullRequest = {
  number: 1,
  title: "Matt Anderson: product engineer, frontend at heart",
  author: "mattander",
  head: "frontend-roots",
  base: "whole-product",
  labels: ["product", "frontend", "agents"],
  location: "Canada",
  currently: "Customer.io",
};

export const readmeDiff = {
  file: "README.md",
  context: "# Matt Anderson, software engineer in Canada",
  removed: "Frontend architecture with a user-first spine.",
  added: "User-first software engineer. Frontend roots, whole‑product reach.",
  body: [
    "I learned the craft in frontend: semantic HTML, accessible states, and React systems other teams can extend.",
    "Agents changed my radius. Now I follow a product problem wherever it lives: Go services, schema migrations, CI, observability, even an iOS app.",
  ],
};

export const headlineThread: ReviewThread = {
  id: "headline",
  comments: [
    {
      author: "you",
      role: "reviewer",
      body: "nit: every engineer says they're user-first. What does it mean for you?",
    },
    {
      author: "mattander",
      role: "author",
      body: "I came to software sideways. I was a digital content writer, a UX tester, and a webmaster, and I was talking to users about their experience before I could write a line of code. So when I'm solving a problem, I start with the person, not the software.",
    },
  ],
};

export const agentsThread: ReviewThread = {
  id: "agents",
  comments: [
    {
      author: "you",
      role: "reviewer",
      body: "If agents write code now, what do you do?",
    },
    {
      author: "mattander",
      role: "author",
      body: "I bring the whole-product view. Agents are great at producing code, but not at knowing whether it's the right code for this product and these users. An agent can run 59 QA scenarios overnight. Deciding which bugs actually matter to a customer is still my job. Software engineering was never just about code. We may write less of it now, but we haven't stopped solving problems.",
    },
  ],
};

export const commitGroups: CommitGroup[] = [
  {
    label: "Customer.io",
    period: "2026 to now",
    commits: [
      {
        hash: "d7a2f19",
        type: "feat(automations)",
        message: "Lead Draft Mode from architecture to launch",
        detail:
          "Project lead. Shipped the Go publish pipeline as a frontend engineer and coordinated launch across product, design, docs, and beta customers.",
      },
      {
        hash: "c3d05e7",
        type: "ci(deploy)",
        message: "Ship continuous deployment for the frontend repos in my first 10 days",
        detail:
          "Label-driven, coalesced deploys on GitHub Actions with release gates. Then a runbook, a retro, and pause controls in the internal deploy tool so the team could trust it.",
      },
      {
        hash: "4c90e3b",
        type: "perf(web)",
        message: "Cut the app's entry bundle from 1.47 MB to 794 KB",
        detail: "Route-level code splitting, shipped to production.",
      },
      {
        hash: "b18f6d0",
        type: "feat(ai)",
        message: "Ground the AI assistant's answers",
        detail:
          "After real hallucination incidents, added a grounded-answers rule, then made it measurable with a refusal metric, dashboards, and evals.",
      },
      {
        hash: "e62c1a8",
        type: "ci(agents)",
        message: "Build a bot that fixes flaky tests",
        detail:
          "Watches flaky-test reports, deduplicates them, spawns fix workers, opens PRs, and routes review to the right people.",
      },
      {
        hash: "0fa83e2",
        type: "feat(ios)",
        message: "Build the core screens of a hack-week iOS app",
        detail: "Feed, chat, tasks, and outcomes for the Customer.io agent, in three days.",
      },
    ],
  },
  {
    label: "Before that",
    period: "",
    commits: [
      {
        hash: "a3e1c05",
        type: "feat",
        message: "Frontend architecture",
        detail:
          "Composable React patterns, accessible foundations, and interfaces teams can extend without special cases.",
      },
      {
        hash: "7c2b9f1",
        type: "feat",
        message: "UX testing",
        detail: "Learned to watch people struggle with software and write down exactly why.",
      },
      {
        hash: "1e00d2a",
        type: "init",
        message: "Writing",
        detail: "Where the bias toward clarity started.",
      },
    ],
  },
];

export const checks: Check[] = [
  {
    name: "product",
    status: "pass",
    summary: "Research, scoping, decisions, launches",
    duration: "4s",
    items: ["UX testing", "Scope docs", "Decision records", "Launch coordination", "Writing"],
  },
  {
    name: "frontend",
    status: "pass",
    summary: "Where the knowledge was built",
    duration: "2s",
    items: ["React", "TypeScript", "TanStack Router", "Accessibility", "CSS", "Performance"],
  },
  {
    name: "backend",
    status: "pass",
    summary: "Followed the product into services",
    duration: "9s",
    items: ["Go", "Schema migrations", "Transactions", "API design", "ADRs"],
  },
  {
    name: "agents",
    status: "pass",
    summary: "Agents as teammates, with guardrails",
    duration: "6s",
    items: ["Claude Code", "Codex", "Agent workflows", "Evals", "AI code review"],
  },
  {
    name: "platform",
    status: "pass",
    summary: "Shipping safely and seeing what happened",
    duration: "7s",
    items: ["Continuous deployment", "GitHub Actions", "Cloudflare", "Grafana", "Prometheus"],
  },
  {
    name: "verify",
    status: "pass",
    summary: "Proof before merge",
    duration: "11s",
    items: ["Vitest", "Playwright", "Browser QA", "Code review"],
  },
  {
    name: "physics",
    status: "warn",
    summary: "Rockets land badly. Working as intended.",
    duration: "∞",
    items: ["PixiJS", "Orbital mechanics, roughly"],
  },
];

export const projects: ProjectItem[] = [
  {
    path: "projects/porthole",
    name: "Porthole",
    description:
      "A native Linux family calendar and weather dashboard running on a hacked digital photo frame, with an optional AI briefing. No browser required.",
    imageAlt: "Porthole showing the time, weather forecast, and today's calendar events",
    imageSrc: "/projects/porthole-card.png",
    githubUrl: "https://github.com/mattander/porthole",
    tags: ["C++", "Qt", "Linux", "CalDAV", "AI"],
  },
  {
    path: "projects/jank-launcher",
    name: "Jank Launcher",
    description:
      "A hand-drawn 2D rocket sandbox for building weird little spacecraft, launching them across a tiny solar system, landing badly, and firing lasers at whatever gets in the way.",
    imageAlt: "Jank Launcher preview with a hand-drawn rocket over a dark space background",
    imageSrc: "/projects/jank-launcher-card.png",
    githubUrl: "https://github.com/mattander/jank-launcher",
    liveUrl: "https://jank-launcher.pages.dev",
    tags: ["TypeScript", "PixiJS", "Vitest", "Cloudflare Pages"],
  },
  {
    path: "projects/just-quiz-me",
    name: "Just Quiz Me",
    description:
      "A fast, absurd quiz site with instant result pages and a Cloudflare-backed runtime built for shareable nonsense.",
    imageAlt: "Just Quiz Me preview card with the site logo and tagline",
    imageSrc: "/projects/just-quiz-me-card.png",
    githubUrl: "https://github.com/mattander/just-quiz-me",
    liveUrl: "https://justquiz.me",
    tags: ["TanStack Start", "React", "Cloudflare Workers", "D1"],
  },
];
