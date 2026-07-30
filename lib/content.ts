/**
 * Typed content model for the Trentoo site.
 * Repeated UI (service cards, work items, etc.) is driven from these
 * arrays so the JSX stays declarative and DRY.
 */

import { GITHUB_URL } from "@/lib/site";

export type IconName =
  | "code"
  | "ai"
  | "ad"
  | "os"
  | "laptop"
  | "network"
  | "device";

export type ServiceTag = "Core" | "Product" | "Roadmap";

export interface Service {
  title: string;
  tag: ServiceTag;
  icon: IconName;
  description: string;
  stack: string[];
}

export interface TechnicalService {
  title: string;
  description: string;
  icon: IconName;
}

export interface WorkItem {
  kicker: string;
  title: string;
  description: string;
  stack: string[];
}

export interface ApproachItem {
  n: string;
  title: string;
  description: string;
}

export interface UniragStep {
  n: string;
  title: string;
  detail: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "#services", label: "Services" },
  { href: "#unirag", label: "UniRAG" },
  { href: "#work", label: "Work" },
  { href: "#approach", label: "Approach" },
  { href: "#team", label: "Team" },
];

/**
 * Premium studio offering (top of page).
 * "IoT & embedded systems" was removed as a sold service; the telemetry
 * brand metaphor now reads as data / AI flow.
 */
export const services: Service[] = [
  {
    title: "Web & software development",
    tag: "Core",
    icon: "code",
    description:
      "Full-stack web apps, dashboards, and internal tools — designed, built, and shipped. Clean interfaces backed by databases with proper access control.",
    stack: ["React", "Supabase", "Postgres · RLS", "APIs"],
  },
  {
    title: "AI solutions",
    tag: "Product",
    icon: "ai",
    description:
      "Retrieval-based assistants, document Q&A, and OCR pipelines that pull answers out of your own files — grounded in real sources, not guesses.",
    stack: ["RAG", "NLP", "OCR", "Python"],
  },
  {
    title: "Advertising & marketing",
    tag: "Roadmap",
    icon: "ad",
    description:
      "Social campaigns and ad creative that put your product in front of the right people — run and measured, so the spend actually earns its keep.",
    stack: ["social ads", "creative", "campaigns"],
  },
];

/**
 * Local / on-site offering (lower on the page, deliberately distinct from
 * the premium studio positioning above).
 */
export const technicalServices: TechnicalService[] = [
  {
    title: "OS installation & upgrades",
    description: "Windows and Linux — clean installs, dual-boot, and upgrades done right.",
    icon: "os",
  },
  {
    title: "Laptop & PC setup and optimization",
    description: "New machines configured, slow ones tuned up — drivers, storage, and speed.",
    icon: "laptop",
  },
  {
    title: "Network solutions",
    description: "Wi-Fi, routers, and small-office setups that stay fast and reliable.",
    icon: "network",
  },
  {
    title: "Device recovery & account setup (for your own devices)",
    description: "Getting you back into your own devices and accounts, and set up cleanly.",
    icon: "device",
  },
];

export const uniragSteps: UniragStep[] = [
  { n: "01", title: "Upload", detail: "notes, past papers, syllabus" },
  { n: "02", title: "Ask", detail: "a question in plain language" },
  { n: "03", title: "Answer", detail: "with the exact page & source" },
];

/**
 * Selected work — proof of engineering depth. The tea-processing thermal
 * monitor stays here as a case study (not as an offered service).
 */
export const workItems: WorkItem[] = [
  {
    kicker: "web app · production",
    title: "Quality-control submission platform",
    description:
      "A production web app with dual anonymous and signed-in submission flows, role-based access, and privacy-safe reporting views.",
    stack: ["React", "Supabase", "RLS"],
  },
  {
    kicker: "website · institutional",
    title: "Research institute website",
    description:
      "Design and build of a public-facing site for a sustainability research institute, from brand and logo through to a live, maintainable site.",
    stack: ["design", "web", "branding"],
  },
  {
    kicker: "iot · agriculture",
    title: "Tea-processing thermal monitor",
    description:
      "A two-unit IoT system streaming thermal-grid data over cellular to a private dashboard, with watchdogs and auto-recovery for unattended field use.",
    stack: ["ESP32", "MQTT", "ThingsBoard"],
  },
];

export const approachItems: ApproachItem[] = [
  {
    n: "// 01",
    title: "Ship the core first",
    description:
      "We build the smallest version that proves the idea works, get it in your hands, then grow it. No months of silence before you see anything.",
  },
  {
    n: "// 02",
    title: "Built to keep running",
    description:
      "Watchdogs on the hardware, access rules on the data, clean code you can hand to anyone. Systems that hold up after we're gone.",
  },
  {
    n: "// 03",
    title: "Direct, no layers",
    description:
      "You talk to the person building it. Fast decisions, honest timelines, and clear pricing — the advantage of working with a small studio.",
  },
];

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  /** Path under /public (e.g. /team/name.jpeg). */
  photo: string;
  /** Company address (kept public instead of a personal email). */
  email: string;
  /** Profile URLs — "#" is treated as a not-yet-filled placeholder. */
  linkedin: string;
  github: string;
}

// ── Team profile links ───────────────────────────────────────────────
// Real profile URLs. (An empty string or "#" would render the icon in a
// dimmed, non-clickable state — kept as a safe fallback in the Team card.)
const SHIRAN_LINKEDIN =
  "https://www.linkedin.com/in/d-m-shiran-supun-dissanayaka-aa167b2a3";
const YASIRU_LINKEDIN = "https://www.linkedin.com/in/yasiru-chamith-lansakara";
const YASIRU_GITHUB = "https://github.com/YasiruChamithLansakara";
const NAVOD_LINKEDIN = "https://www.linkedin.com/in/navod-madushanka-7a1327256";
const NAVOD_GITHUB = "https://github.com/Navod-Madushanka";

export const team: TeamMember[] = [
  {
    name: "Shiran Supun Dissanayaka",
    role: "Founder",
    bio: "Full-stack and AI developer. Builds the products and leads the vision.",
    photo: "/team/shiran.jpeg",
    email: "shiran@trentoo.com",
    linkedin: SHIRAN_LINKEDIN,
    github: GITHUB_URL,
  },
  {
    name: "Yasiru Chamith Lansakara",
    role: "Co-founder",
    bio: "Shapes strategy and partnerships, and keeps delivery moving on time.",
    photo: "/team/yasiru.jpeg",
    email: "yasiru@trentoo.com",
    linkedin: YASIRU_LINKEDIN,
    github: YASIRU_GITHUB,
  },
  {
    name: "Navod Maithripala",
    role: "Technical Lead",
    bio: "Leads engineering and architecture across the studio's builds.",
    photo: "/team/navod.jpeg",
    email: "navod@trentoo.com",
    linkedin: NAVOD_LINKEDIN,
    github: NAVOD_GITHUB,
  },
];
