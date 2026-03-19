# White Springs Municipal Homepage — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a polished POC homepage for the Town of White Springs, FL — a municipal site that is ADA/WCAG 2.1 AA compliant, announcement-first, and visually distinctive with Southern heritage aesthetics.

**Architecture:** Next.js App Router with SSG. Server components by default, `'use client'` only for interactive components (Header mobile menu, EmergencyBanner dismiss, HeroSection/AnnouncementsSection Framer Motion animations). All styling via Tailwind CSS with custom CSS variables for the design system.

**Tech Stack:** Next.js 15, TypeScript (strict), Tailwind CSS 4, Framer Motion, shadcn/ui (Default style), lucide-react, next/font/google

**Spec:** `docs/superpowers/specs/2026-03-18-white-springs-homepage-design.md`

---

## File Map

| File | Responsibility | Client? |
|------|---------------|---------|
| `app/layout.tsx` | Root layout, fonts, metadata, skip nav | No |
| `app/page.tsx` | Homepage composition | No |
| `app/globals.css` | Tailwind config, CSS vars, texture overlay | N/A |
| `components/layout/Header.tsx` | Sticky nav, mobile menu, wordmark | Yes |
| `components/layout/Footer.tsx` | Footer with contact, nav, social | No |
| `components/home/EmergencyBanner.tsx` | Dismissable alert banner | Yes |
| `components/home/HeroSection.tsx` | Bell tower hero with animations | Yes |
| `components/home/BellTowerSVG.tsx` | SVG fallback illustration | No |
| `components/home/AnnouncementsSection.tsx` | Announcement cards grid | Yes |
| `components/home/AnnouncementCard.tsx` | Individual announcement card | No |
| `components/home/QuickLinksSection.tsx` | Services grid with icons | No |
| `components/home/AboutTownSection.tsx` | About section with pull quote + SVG | No |
| `lib/announcements.ts` | Announcement type + 6 mock entries | N/A |
| `lib/utils.ts` | `cn()` utility (from shadcn init) | N/A |
| `app/announcements/page.tsx` | Stub page | No |
| `app/government/page.tsx` | Stub page | No |
| `app/services/page.tsx` | Stub page | No |
| `app/contact/page.tsx` | Stub page | No |
| `app/accessibility/page.tsx` | Accessibility statement | No |
| `tailwind.config.ts` | Custom colors, fonts, theme extensions | N/A |

---

## Task 1: Scaffold Project & Install Dependencies

**Files:**
- Create: entire project via `create-next-app`
- Modify: `package.json` (dependencies)

- [ ] **Step 1: Scaffold Next.js project**

Run from the parent directory (`white-springs/`). Since we're already in a `white-springs` directory with a git repo, scaffold into a temp dir and move files:

```bash
cd /c/Users/lukeg/client-websites/white-springs
npx create-next-app@latest ws-temp --typescript --tailwind --app --eslint --src-dir=false --import-alias="@/*" --use-npm
```

Then move all generated files (except `.git`) into the existing `white-springs/` directory:

```bash
cd /c/Users/lukeg/client-websites/white-springs
# Move all files including dotfiles from ws-temp into the project dir
shopt -s dotglob
cp -r ws-temp/* white-springs/ 2>/dev/null
cp ws-temp/.gitignore white-springs/.gitignore 2>/dev/null
cp ws-temp/.eslintrc.json white-springs/.eslintrc.json 2>/dev/null
rm -rf ws-temp
cd white-springs
```

**Note on Tailwind version:** `create-next-app@latest` may scaffold with Tailwind CSS v4, which uses `@import "tailwindcss"` instead of `@tailwind base/components/utilities` directives, and CSS-based configuration instead of `tailwind.config.ts`. If Tailwind v4 is scaffolded, adapt the config in Task 2 accordingly — use `@theme` blocks in CSS instead of `tailwind.config.ts`, and `@import "tailwindcss"` instead of `@tailwind` directives. The color/font values remain the same regardless of version.

- [ ] **Step 2: Install additional dependencies**

```bash
cd /c/Users/lukeg/client-websites/white-springs/white-springs
npm install framer-motion lucide-react
```

- [ ] **Step 3: Initialize shadcn/ui**

```bash
npx shadcn@latest init --defaults
```

This creates `components/ui/`, `lib/utils.ts`, and updates `tailwind.config.ts` and `globals.css`.

- [ ] **Step 4: Add shadcn Badge component**

```bash
npx shadcn@latest add badge
```

- [ ] **Step 5: Verify dev server starts**

```bash
npm run dev
```

Expected: Next.js dev server starts on localhost:3000 without errors.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "chore: scaffold Next.js project with dependencies"
```

---

## Task 2: Design System — Fonts, Colors, Globals

**Files:**
- Modify: `app/layout.tsx` — fonts via next/font/google, metadata, HTML structure
- Modify: `app/globals.css` — CSS custom properties, texture overlay
- Modify: `tailwind.config.ts` — custom colors, font families

- [ ] **Step 1: Configure tailwind.config.ts with custom theme**

Extend the theme with the White Springs color palette and font families:

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#1B4332",
          light: "#2D6A4F",
        },
        ivory: {
          DEFAULT: "#FAF5E9",
          dark: "#F0E8D4",
        },
        gold: {
          DEFAULT: "#C9A84C",
          light: "#D4BA6A",
          dark: "#B8963A",
        },
        slate: {
          DEFAULT: "#4A5568",
        },
        sky: {
          DEFAULT: "#5B9DC9",
        },
        amber: {
          banner: "#D97706",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-lato)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
```

Note: Merge with whatever shadcn generated — keep shadcn's `plugins` and `darkMode` config, add the custom `colors` and `fontFamily` entries.

- [ ] **Step 2: Set up fonts in app/layout.tsx**

```typescript
import type { Metadata } from "next";
import { Playfair_Display, Lato, DM_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "700", "900"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  weight: ["400", "700"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "White Springs, Florida | Official Town Website",
    template: "%s | White Springs, FL",
  },
  description:
    "Official website of White Springs, Florida. Town announcements, government services, and community information for residents of Hamilton County.",
  keywords: [
    "White Springs",
    "Florida",
    "Hamilton County",
    "Suwannee River",
    "town government",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://whitespringsflorida.gov",
    siteName: "White Springs, Florida",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lato.variable} ${dmMono.variable}`}
    >
      <body className="font-body bg-ivory text-slate antialiased">
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Set up globals.css with CSS variables and texture**

Replace the default globals.css content. Keep Tailwind directives, add custom properties and the linen texture overlay:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --color-forest: 27 67 50;
    --color-ivory: 250 245 233;
    --color-gold: 201 168 76;
    --color-slate: 74 85 104;
    --color-sky: 91 157 201;
  }

  body::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    opacity: 0.03;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  }

  body > * {
    position: relative;
    z-index: 1;
  }
}

@layer utilities {
  .gold-divider {
    @apply h-px bg-gradient-to-r from-transparent via-gold to-transparent;
  }
}
```

Note: Preserve any shadcn CSS variables that were generated during init. Merge, don't replace.

- [ ] **Step 4: Create a minimal app/page.tsx to verify**

```typescript
export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      <h1 className="font-display text-4xl text-forest p-8">
        White Springs, Florida
      </h1>
      <p className="font-body text-slate p-8">
        Design system working.
      </p>
      <p className="font-mono text-sm text-gold p-8">
        DM Mono font test
      </p>
    </main>
  );
}
```

- [ ] **Step 5: Verify dev server — fonts, colors, texture visible**

```bash
npm run dev
```

Expected: Page shows Playfair Display heading in forest green, Lato body text in slate gray, DM Mono monospace in gold, ivory background with subtle texture.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: design system — fonts, colors, CSS variables, texture overlay"
```

---

## Task 3: Layout Shell — Header

**Files:**
- Create: `components/layout/Header.tsx`
- Modify: `app/layout.tsx` — import Header, add skip nav link

- [ ] **Step 1: Create Header component**

Create `components/layout/Header.tsx`. This is a client component (mobile menu state).

Key requirements:
- Skip-to-content link as first focusable element (in layout.tsx, not Header)
- Left: "⚜ White Springs" wordmark
- Right desktop: Home | Announcements | Government | Services | Contact
- Mobile: hamburger with `aria-expanded`, `aria-controls`, keyboard-navigable drawer
- Sticky with `backdrop-blur-md`
- `focus-visible:ring-2 ring-offset-2` on all interactive elements
- Semantic `<header>` and `<nav>` with ARIA landmarks
- `// ADA:` comment at top

Nav links data:
```typescript
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Announcements", href: "/announcements" },
  { label: "Government", href: "/government" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];
```

Mobile menu: use `useState` for open/close. Close on Escape key. Focus trap within drawer when open. Hamburger uses `Menu` and `X` icons from lucide-react.

- [ ] **Step 2: Update layout.tsx to include skip nav + Header**

Add the skip navigation link as the first child of `<body>`, then import and render `<Header />`.

```tsx
<body className="font-body bg-ivory text-slate antialiased">
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-forest focus:text-ivory focus:rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
  >
    Skip to main content
  </a>
  <Header />
  {children}
</body>
```

- [ ] **Step 3: Verify — sticky header, mobile menu toggle, skip link on Tab**

```bash
npm run dev
```

Expected: Header renders with wordmark and nav links. Mobile hamburger toggles drawer. Skip link appears on first Tab press. Header sticks on scroll with blur.

- [ ] **Step 4: Commit**

```bash
git add components/layout/Header.tsx app/layout.tsx
git commit -m "feat: Header with sticky nav, mobile menu, skip navigation"
```

---

## Task 4: Layout Shell — Footer

**Files:**
- Create: `components/layout/Footer.tsx`
- Modify: `app/layout.tsx` — import Footer

- [ ] **Step 1: Create Footer component**

Create `components/layout/Footer.tsx`. Server component (no interactivity).

Key requirements:
- Dark background: `bg-forest`, ivory text
- Town seal area: "⚜ White Springs, Florida" wordmark
- Contact info: address, phone (as `<a href="tel:...">`), email (as `<a href="mailto:...">`)
- Nav links repeated (same 5 links as Header)
- Accessibility statement link: `/accessibility`
- Copyright: © 2025 Town of White Springs, Florida. All Rights Reserved.
- Facebook social icon (placeholder `#` href) with `aria-label="Visit our Facebook page"`
- Semantic `<footer>` element
- `// ADA:` comment at top
- Use lucide-react `Facebook`, `Mail`, `Phone`, `MapPin` icons

- [ ] **Step 2: Add Footer to layout.tsx**

```tsx
<body className="font-body bg-ivory text-slate antialiased">
  <a href="#main-content" className="sr-only focus:not-sr-only ...">Skip to main content</a>
  <Header />
  {children}
  <Footer />
</body>
```

- [ ] **Step 3: Verify — footer renders with correct styling and links**

```bash
npm run dev
```

Expected: Dark green footer with ivory text, contact info, nav links, social icon, copyright.

- [ ] **Step 4: Commit**

```bash
git add components/layout/Footer.tsx app/layout.tsx
git commit -m "feat: Footer with contact info, nav links, social icons"
```

---

## Task 5: Emergency Banner

**Files:**
- Create: `components/home/EmergencyBanner.tsx`
- Modify: `app/page.tsx` — import and render

- [ ] **Step 1: Create EmergencyBanner component**

Create `components/home/EmergencyBanner.tsx`. Client component.

Key requirements:
- `'use client'`
- Amber `#D97706` background (`bg-amber-banner`), white text
- Default message: "⚠ Town Hall will be closed Monday, July 7th in observance of a holiday."
- Dismiss button (X icon from lucide-react) with `aria-label="Dismiss alert"`
- On dismiss: save to `localStorage` key `"ws-emergency-dismissed"`
- On mount: check localStorage, if dismissed, don't show
- Props: `message?: string`, `show?: boolean` (default true)
- `role="alert"`, `aria-live="assertive"`
- `// ADA:` comment at top

- [ ] **Step 2: Add EmergencyBanner to page.tsx**

```tsx
import { EmergencyBanner } from "@/components/home/EmergencyBanner";

export default function Home() {
  return (
    <>
      <EmergencyBanner />
      <main id="main-content" className="min-h-screen">
        {/* sections will go here */}
      </main>
    </>
  );
}
```

- [ ] **Step 3: Verify — banner shows, dismisses, persists across refresh**

Expected: Amber banner visible at top. Click X to dismiss. Refresh — stays dismissed. Clear localStorage — banner returns.

- [ ] **Step 4: Commit**

```bash
git add components/home/EmergencyBanner.tsx app/page.tsx
git commit -m "feat: EmergencyBanner with dismiss + localStorage persistence"
```

---

## Task 6: Hero Section — Bell Tower

**Files:**
- Create: `components/home/HeroSection.tsx`
- Create: `components/home/BellTowerSVG.tsx`
- Create: `public/images/bell-tower.jpg` (1x1 placeholder)
- Modify: `app/page.tsx` — import and render

- [ ] **Step 1: Create BellTowerSVG fallback component**

Create `components/home/BellTowerSVG.tsx`. Server component — a pure SVG illustration.

Build an artistic bell tower silhouette:
- Recognizable steeple shape with arched windows and a bell
- Rendered in warm gold (`#C9A84C`) and ivory (`#FAF5E9`) tones
- Background gradient sky: deep blue (`#1B2A4A`) → burnt orange (`#C65D3E`) → gold (`#C9A84C`) at the horizon
- Should look artistic, not clip-art — use SVG paths with some detail
- Viewbox sized appropriately (e.g., `0 0 400 600`)

- [ ] **Step 2: Create placeholder bell-tower.jpg**

Create a minimal 1x1 pixel JPEG at `public/images/bell-tower.jpg` so the path exists. Add a comment in HeroSection: `// Replace with actual Bell Tower photo`.

```bash
# Create a 1x1 placeholder image
mkdir -p public/images
convert -size 1x1 xc:gray public/images/bell-tower.jpg 2>/dev/null || printf '\xff\xd8\xff\xe0\x00\x10JFIF' > public/images/bell-tower.jpg
```

- [ ] **Step 3: Create HeroSection component**

Create `components/home/HeroSection.tsx`. Client component (Framer Motion).

Key requirements:
- `'use client'`
- 90vh height, relative positioning
- Background: Try to load `/images/bell-tower.jpg` via Next.js `<Image>` with `fill` and `object-cover`
- On image error: show `<BellTowerSVG />` fallback instead
- Gradient overlay: `bg-gradient-to-r from-forest/80 via-forest/40 to-transparent` positioned absolute over the image
- Text content positioned left (`max-w-2xl`, left-aligned, z-10):
  - Eyebrow: "Town of" — small caps, gold, `font-mono`
  - Headline: "White Springs, Florida" — `font-display text-5xl md:text-7xl text-ivory font-bold`
  - Subhead: "Suwannee River Valley — Incorporated 1901" — `font-body text-ivory/80`
  - Body: "Your official source for town announcements, services, and community news."
  - CTAs: two buttons — "View Announcements ↓" (link to `#announcements`) and "Contact Town Hall →" (link to `/contact`)
- Framer Motion animations (all gated by `useReducedMotion()`):
  - Tower image/SVG: `initial={{ opacity: 0, y: 40 }}` → `animate={{ opacity: 1, y: 0 }}`, `transition={{ duration: 0.8, delay: 0.3 }}`
  - Headline: staggered line reveal
  - CTAs: fade in, delay 0.8s
- `// ADA:` comment at top
- All text must pass contrast against the gradient overlay

- [ ] **Step 4: Add HeroSection to page.tsx**

```tsx
import { EmergencyBanner } from "@/components/home/EmergencyBanner";
import { HeroSection } from "@/components/home/HeroSection";

export default function Home() {
  return (
    <>
      <EmergencyBanner />
      <main id="main-content">
        <HeroSection />
      </main>
    </>
  );
}
```

- [ ] **Step 5: Verify — hero renders with SVG fallback (since placeholder is tiny), animations play, reduced motion respected**

```bash
npm run dev
```

Expected: Hero section at 90vh. Bell tower SVG visible (since placeholder image will fail/look wrong). Gradient overlay. Text content with staggered animations. CTAs visible.

- [ ] **Step 6: Commit**

```bash
git add components/home/HeroSection.tsx components/home/BellTowerSVG.tsx public/images/ app/page.tsx
git commit -m "feat: HeroSection with bell tower SVG, gradient overlay, Framer Motion animations"
```

---

## Task 7: Announcements — Data + Cards + Section

**Files:**
- Create: `lib/announcements.ts`
- Create: `components/home/AnnouncementCard.tsx`
- Create: `components/home/AnnouncementsSection.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create lib/announcements.ts with types and mock data**

```typescript
export type AnnouncementCategory = "General" | "Emergency" | "Event" | "Meeting" | "Closure";

export interface Announcement {
  id: string;
  title: string;
  date: string;
  category: AnnouncementCategory;
  excerpt: string;
  isPinned?: boolean;
  href: string;
}

export const announcements: Announcement[] = [
  {
    id: "1",
    title: "Regular Town Commission Meeting — July 8, 2025",
    date: "2025-07-08T18:00:00",
    category: "Meeting",
    excerpt: "The White Springs Town Commission will hold its regular monthly meeting at Town Hall. Agenda items include the downtown revitalization proposal and water infrastructure updates. Public comment period will be available.",
    isPinned: true,
    href: "/announcements",
  },
  {
    id: "2",
    title: "4th of July Celebration at the Suwannee River Park",
    date: "2025-07-04T10:00:00",
    category: "Event",
    excerpt: "Join the White Springs community for our annual Independence Day celebration featuring live music, local food vendors, family activities, and fireworks over the Suwannee River at dusk.",
    href: "/announcements",
  },
  {
    id: "3",
    title: "Water System Maintenance Notice — June 28",
    date: "2025-06-28T08:00:00",
    category: "General",
    excerpt: "Scheduled maintenance on the town water system will take place Saturday, June 28th from 8 AM to 2 PM. Residents in the downtown area may experience temporary low water pressure.",
    href: "/announcements",
  },
  {
    id: "4",
    title: "Town Hall Holiday Hours",
    date: "2025-07-01T00:00:00",
    category: "Closure",
    excerpt: "White Springs Town Hall will be closed Friday, July 4th and Monday, July 7th in observance of Independence Day. Regular hours resume Tuesday, July 8th at 8:30 AM.",
    href: "/announcements",
  },
  {
    id: "5",
    title: "Community Input Session: Downtown Revitalization Project",
    date: "2025-07-15T17:30:00",
    category: "General",
    excerpt: "Share your vision for downtown White Springs. The Planning Committee invites residents to a community input session to discuss proposed improvements to the historic downtown corridor.",
    href: "/announcements",
  },
  {
    id: "6",
    title: "Stephen Foster Folk Culture Center Summer Concert Series",
    date: "2025-07-12T19:00:00",
    category: "Event",
    excerpt: "The Stephen Foster Folk Culture Center State Park kicks off its summer concert series with performances every Saturday evening in July. Bring a blanket and enjoy live folk and bluegrass music.",
    href: "/announcements",
  },
];

export const categoryColors: Record<AnnouncementCategory, string> = {
  Emergency: "bg-red-100 text-red-800 border-red-200",
  Event: "bg-blue-100 text-blue-800 border-blue-200",
  Meeting: "bg-green-100 text-green-800 border-green-200",
  Closure: "bg-amber-100 text-amber-800 border-amber-200",
  General: "bg-gray-100 text-gray-700 border-gray-200",
};
```

- [ ] **Step 2: Create AnnouncementCard component**

Create `components/home/AnnouncementCard.tsx`. Server component (no client-side logic — the parent handles animations).

Key requirements:
- Props: `announcement: Announcement`
- Category badge using shadcn `<Badge>` with color from `categoryColors`
- Pinned: gold left border (`border-l-4 border-gold`) + 📌 icon next to title
- Date formatted in `font-mono text-sm` (format: "July 8, 2025")
- Title in `font-display text-lg font-bold`
- Excerpt clamped to 3 lines (`line-clamp-3`)
- "Read More →" link with `focus-visible:ring-2 ring-offset-2`
- Hover: `hover:shadow-lg transition-shadow duration-200`
- Card uses ivory background, subtle border
- `// ADA:` comment at top

- [ ] **Step 3: Create AnnouncementsSection component**

Create `components/home/AnnouncementsSection.tsx`. Client component (Framer Motion `useInView`).

Key requirements:
- `'use client'`
- Section header: "Town Announcements" in `font-display`, subtitle, "View All Announcements →" link
- Gold divider under header
- 3-column grid desktop (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`), 1-column mobile
- Import and render `AnnouncementCard` for each announcement
- Pinned announcements sorted first
- Framer Motion: stagger cards on scroll enter using `useInView` on the grid container
- Each card wrapped in `motion.div` with staggered delay
- Gate animations with `useReducedMotion()`
- `id="announcements"` on the section (anchor target from hero CTA)
- `// ADA:` comment at top

- [ ] **Step 4: Add AnnouncementsSection to page.tsx**

```tsx
<main id="main-content">
  <HeroSection />
  <AnnouncementsSection />
</main>
```

- [ ] **Step 5: Verify — 6 cards render, pinned card first with gold border, badges colored correctly, scroll animation works**

```bash
npm run dev
```

Expected: 3-column grid with 6 announcement cards. Pinned card has gold border and pin icon. Category badges are color-coded. Cards stagger in on scroll.

- [ ] **Step 6: Commit**

```bash
git add lib/announcements.ts components/home/AnnouncementCard.tsx components/home/AnnouncementsSection.tsx app/page.tsx
git commit -m "feat: AnnouncementsSection with 6 mock announcements, category badges, scroll animations"
```

---

## Task 8: Quick Links / Services Grid

**Files:**
- Create: `components/home/QuickLinksSection.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create QuickLinksSection component**

Create `components/home/QuickLinksSection.tsx`. Server component.

Key requirements:
- Section header: "Town Services" in `font-display`
- Gold divider
- Grid: `grid-cols-2 md:grid-cols-3 gap-4` (6 tiles)
- Each tile: lucide-react icon + label + link
- Tiles data:
  ```typescript
  const services = [
    { icon: Landmark, label: "Town Government", href: "/government" },
    { icon: Droplets, label: "Water & Utilities", href: "/services" },
    { icon: ClipboardList, label: "Permits & Licensing", href: "/services" },
    { icon: Trees, label: "Parks & Recreation", href: "/services" },
    { icon: Shield, label: "Public Safety", href: "/services" },
    { icon: Phone, label: "Contact Town Hall", href: "/contact" },
  ];
  ```
- Each tile: `<a>` with `aria-label`, `focus-visible:ring-2 ring-offset-2`
- Hover: gold underline + slight ivory-dark background tint
- Icons: `size={32}` in forest green
- Labels in `font-body font-bold`
- Background: white with subtle border, rounded
- `// ADA:` comment at top

- [ ] **Step 2: Add QuickLinksSection to page.tsx**

```tsx
<main id="main-content">
  <HeroSection />
  <AnnouncementsSection />
  <QuickLinksSection />
</main>
```

- [ ] **Step 3: Verify — 6 tiles render in grid, hover effects work, links navigate**

```bash
npm run dev
```

- [ ] **Step 4: Commit**

```bash
git add components/home/QuickLinksSection.tsx app/page.tsx
git commit -m "feat: QuickLinksSection with 6 service tiles and lucide-react icons"
```

---

## Task 9: About Town Section

**Files:**
- Create: `components/home/AboutTownSection.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create AboutTownSection component**

Create `components/home/AboutTownSection.tsx`. Server component.

Key requirements:
- 2-column layout desktop (text left, decorative SVG right), stacked mobile
- Section header: "About White Springs" in `font-display`
- Gold divider
- Body text (the authentic paragraph from the spec) in `font-body text-lg leading-relaxed`
- Pull quote: "Where the Suwannee River meets history." — styled with large serif italic, gold left border, `font-display text-2xl italic`
- Right column: decorative SVG — a geometric pattern or stylized river curves in gold + forest green
  - Build as inline SVG with flowing curved paths representing the Suwannee River
  - Use `stroke` in gold, subtle fill variations
- `// ADA:` comment at top
- Decorative SVG has `aria-hidden="true"` (it's decorative, not informational)

- [ ] **Step 2: Add AboutTownSection to page.tsx**

```tsx
<main id="main-content">
  <HeroSection />
  <AnnouncementsSection />
  <QuickLinksSection />
  <AboutTownSection />
</main>
```

- [ ] **Step 3: Verify — text renders, pull quote styled, SVG visible on desktop**

```bash
npm run dev
```

- [ ] **Step 4: Commit**

```bash
git add components/home/AboutTownSection.tsx app/page.tsx
git commit -m "feat: AboutTownSection with pull quote and decorative river SVG"
```

---

## Task 10: Stub Pages

**Files:**
- Create: `app/announcements/page.tsx`
- Create: `app/government/page.tsx`
- Create: `app/services/page.tsx`
- Create: `app/contact/page.tsx`
- Create: `app/accessibility/page.tsx`

- [ ] **Step 1: Create 4 stub pages**

Each stub page follows the same pattern:

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title",
};

export default function PageName() {
  return (
    <main id="main-content" className="min-h-screen flex items-center justify-center py-20">
      <div className="text-center">
        <h1 className="font-display text-4xl text-forest mb-4">Page Title</h1>
        <p className="font-body text-slate text-lg">Coming Soon</p>
        <div className="gold-divider w-24 mx-auto mt-6" />
      </div>
    </main>
  );
}
```

Create for: `/announcements` ("Announcements"), `/government` ("Town Government"), `/services` ("Town Services"), `/contact` ("Contact Us").

- [ ] **Step 2: Create accessibility statement page**

Create `app/accessibility/page.tsx` with real content:

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement",
};
```

Content should include:
- Heading: "Accessibility Statement"
- Commitment paragraph about WCAG 2.1 AA compliance
- List of accessibility features implemented
- Contact info for accessibility concerns (phone + email from spec)
- Date of last review

- [ ] **Step 3: Verify — all 5 routes render without 404, share Header/Footer**

```bash
npm run dev
```

Navigate to `/announcements`, `/government`, `/services`, `/contact`, `/accessibility` — all should render with Header and Footer.

- [ ] **Step 4: Commit**

```bash
git add app/announcements/ app/government/ app/services/ app/contact/ app/accessibility/
git commit -m "feat: stub pages for announcements, government, services, contact + accessibility statement"
```

---

## Task 11: Final Polish & Build Verification

**Files:**
- Possibly modify: any component for ADA fixes
- No new files

- [ ] **Step 1: Run TypeScript build check**

```bash
npm run build
```

Expected: Build completes with zero TypeScript errors.

- [ ] **Step 2: Fix any build errors**

If any errors, fix them. Common issues: missing types, import paths, next/image configuration.

- [ ] **Step 3: Visual check at mobile (375px) and desktop (1440px)**

```bash
npm run dev
```

Check both viewports manually. Ensure:
- Mobile: single column layouts, hamburger menu works, no horizontal overflow
- Desktop: full grid layouts, hover effects, sticky header

- [ ] **Step 4: ADA audit pass**

Verify in each component:
- `// ADA:` comment present at top
- All images have `alt` text
- All interactive elements have `focus-visible` ring
- All icon-only buttons have `aria-label`
- Semantic heading hierarchy (single `h1` per page, descending)
- Emergency banner has `role="alert"` and `aria-live="assertive"`
- Skip-to-content link works on Tab

- [ ] **Step 5: Commit any fixes**

```bash
git add -A
git commit -m "fix: final ADA audit and build verification polish"
```

Only commit this if there were actual changes. Skip if everything was clean.
