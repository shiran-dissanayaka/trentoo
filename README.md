# Trentoo

Marketing site for **Trentoo** — a Sri Lanka based software / web / AI studio — and the
future home of the UniRAG product. Built as a clean, typed, scalable Next.js app.

## Stack

- **Next.js** (App Router) + **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-based `@theme` tokens in `app/globals.css`)
- **next/font** for Space Grotesk (display), Inter (body), JetBrains Mono (labels)
- No runtime UI dependencies — animations are CSS + a small typed
  `useInView` IntersectionObserver hook. Deploys to **Vercel** as-is.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Command         | What it does                                  |
| --------------- | --------------------------------------------- |
| `npm run dev`   | Start the dev server                          |
| `npm run build` | Production build (type-checked, static)       |
| `npm start`     | Serve the production build                    |
| `npm run lint`  | ESLint                                        |

## Project structure

```text
app/
  layout.tsx      Root layout: fonts, Metadata API, JSON-LD, Nav/Footer, skip link
  page.tsx        Home page — composes the section components
  globals.css     Design tokens (@theme) + keyframes + component classes
  sitemap.ts      /sitemap.xml
  robots.ts       /robots.txt
components/        One typed component per section + primitives
  Nav, Hero, Services, UniRAG, SelectedWork, Approach,
  TechnicalServices, Contact, Footer
  Logo, Icon, SignalCard, ScrollProgress, Reveal, Section,
  SectionHeading, Container
lib/
  content.ts      Typed content arrays (services, work, technical services, UniRAG steps…)
  site.ts         Site constants — domain, email, GitHub  ← EDIT THESE
  useInView.ts    Typed IntersectionObserver hook (reduced-motion aware)
  cn.ts           className joiner
public/
  favicon.svg           Animated brand favicon (SVG)
  favicon-32.png        PNG fallback
  apple-touch-icon.png  180×180 iOS icon
  og-cover.png          Social share image (placeholder — replace)
```

Repeated content is driven from the typed arrays in `lib/content.ts`, so editing copy or
adding a service/work item is a one-line data change — no JSX duplication.

## Deploy to Cloudflare Pages

The site is a **static export** (`output: "export"` in `next.config.ts`) — `npm run build`
emits a plain `/out` folder of HTML/CSS/JS, so no server runtime or adapter is needed.

1. Push this repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**, pick the repo.
3. Build settings:
   - **Framework preset:** `Next.js (Static HTML Export)` (or `None`)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - Node version is pinned to 22 via `.nvmrc`.
4. **Save and Deploy.** Every push to the default branch redeploys automatically.

After the first deploy, set your real domain in `lib/site.ts` (`SITE_URL`) so canonical /
Open Graph / sitemap URLs are correct, and add a custom domain in the Pages project.

## ✅ Before you ship — placeholders to fill

These are intentionally left for you (all clearly marked in code):

- [ ] **Canonical / production domain** — `SITE_URL` in [`lib/site.ts`](lib/site.ts).
      Drives `metadataBase`, canonical URL, Open Graph URL, sitemap, robots, and JSON-LD.
- [ ] **Contact email** — `CONTACT_EMAIL` in [`lib/site.ts`](lib/site.ts) (currently the
      placeholder `hello@trentoo.com`).
- [ ] **`public/og-cover.png`** — a branded 1200×630 placeholder is included; swap in your
      final social share image (same filename, or update the path in `app/layout.tsx`).

## Notes on content

- **IoT & embedded systems** was removed as a *service*; the tea-processing thermal monitor
  remains in **Selected work** as a case study.
- The hero lede and the services intro still mention IoT / "hardware" verbatim from the
  original copy — left unchanged deliberately. Update `components/Hero.tsx` and
  `lib/content.ts` if you'd like them to drop the IoT references now that it's not a
  listed service.
- Accessibility: single `<h1>`, landmark elements, visible focus rings, an accessible
  mobile menu (focus trap + Escape + scroll lock), and full `prefers-reduced-motion`
  support.
