# White Springs, Florida — Municipal Website (POC Homepage)

## Project Overview

Build a **proof-of-concept homepage** for the Town of White Springs, Florida. This is a municipal government site, so it must be:

- Fully **ADA / WCAG 2.1 AA compliant**
- **Announcement-first** in content hierarchy — the primary purpose is publishing city announcements to residents
- Visually distinctive and proud of the town's heritage
- Built with the specified tech stack

This is a POC for a client proposal — it should look polished enough to sell the vision, not just demo scaffolding.

---

## Tech Stack

- **Next.js** (App Router) — SSG for SEO, file-based routing
- **TypeScript** — strict mode
- **Tailwind CSS** — all styling (no CSS modules)
- **Framer Motion** — animations and page transitions
- **shadcn/ui** — components where appropriate (Badge, Card, Dialog, etc.)

---

## Design Direction

### Aesthetic
Southern heritage meets civic pride. Think: **warm, dignified, editorial**. Not corporate-sterile, not cartoonish.

- **Color Palette:**
  - Deep forest green: `#1B4332` (primary)
  - Warm ivory/cream: `#FAF5E9` (background)
  - Burnished gold: `#C9A84C` (accent)
  - Slate gray: `#4A5568` (body text)
  - Sky blue: `#5B9DC9` (links / secondary accent)

- **Typography:**
  - Display / headings: `Playfair Display` (Google Fonts) — serif, editorial weight
  - Body: `Lato` or `Source Sans 3` — clean, accessible sans-serif
  - Monospace (dates, labels): `DM Mono`

- **Aesthetic Details:**
  - Subtle warm paper/linen texture on the background (CSS noise overlay)
  - Gold dividers and decorative rules
  - Tasteful serif drop caps or pull quotes on announcements
  - Gentle scroll-triggered fade-ups for content sections
  - Civic/governmental gravitas — this is NOT a startup landing page

### Must-Include Visual: The Bell Tower
The **Stephen Foster Memorial Bell Tower** in White Springs, FL is the centerpiece visual identity of this site. It must appear:

1. **Hero section** — as either a full-bleed photographic background (use a royalty-free placeholder or an SVG/CSS artistic rendering of a bell tower silhouette) OR as a stylized SVG illustration layered over a gradient sky background
2. The tower silhouette can be implemented as:
   - An SVG path drawing of a bell tower/steeple against a sunrise/dusk sky gradient
   - OR a CSS clip-path / illustration if a photo is unavailable
3. Animate the tower entrance on load: fade + subtle upward translate with Framer Motion

If using an image placeholder, use `/public/images/bell-tower.jpg` as the `src` and add a comment `// Replace with actual Bell Tower photo`. Provide an SVG fallback silhouette inline so the design is never broken.

---

## File Structure

```
white-springs/
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata
│   ├── page.tsx                # Homepage
│   └── globals.css             # Tailwind base + CSS vars
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Nav + accessibility skip link
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── HeroSection.tsx     # Bell tower hero
│   │   ├── AnnouncementsSection.tsx
│   │   ├── QuickLinksSection.tsx
│   │   ├── AboutTownSection.tsx
│   │   └── EmergencyBanner.tsx # Conditional urgent banner
│   └── ui/                     # shadcn/ui components live here
├── lib/
│   └── announcements.ts        # Mock announcement data + types
├── public/
│   └── images/
│       └── bell-tower.jpg      # Placeholder (add comment to replace)
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

---

## Homepage Sections (Top to Bottom)

### 1. Skip Navigation Link (ADA)
```
<a href="#main-content" class="sr-only focus:not-sr-only ...">
  Skip to main content
</a>
```
Must be the very first focusable element.

---

### 2. Header / Navigation

- Town seal / logo area (left): "⚜ White Springs" wordmark with a small bell icon or placeholder seal SVG
- Nav links (right, desktop): `Home | Announcements | Government | Services | Contact`
- Mobile: hamburger menu with accessible `aria-expanded`, `aria-controls`, keyboard-navigable drawer
- Sticky on scroll with subtle backdrop-blur
- **Accessible**: all nav items keyboard navigable, focus-visible rings, ARIA landmarks

---

### 3. Emergency/Alert Banner (Conditional)

- A thin, high-contrast banner ABOVE the hero for urgent alerts
- Background: amber `#D97706`, text white
- Controlled by a boolean `showEmergencyBanner` in a config or mock data
- Include a dismiss button (X) that sets it to hidden (localStorage persist)
- ARIA role: `alert`, `aria-live="assertive"`
- Default content: `"⚠ Town Hall will be closed Monday, July 7th in observance of a holiday."`

---

### 4. Hero Section — The Bell Tower

This is the **crown jewel** of the homepage.

**Layout:**
- Full viewport height (`100vh`) or 90vh
- The bell tower visual (photo or SVG silhouette) anchored center/right
- Overlaid text content positioned left or center-left
- Gradient overlay from forest green (left, ~60% opacity) to transparent (right)

**Content:**
```
Eyebrow:   "Town of"
Headline:  "White Springs, Florida"
Subhead:   "Suwannee River Valley — Incorporated 1901"
Body:      "Your official source for town announcements, services, and community news."
CTA:       [View Announcements ↓]  [Contact Town Hall →]
```

**Bell Tower SVG Silhouette** (build this inline if no photo):
- A simple but recognizable steeple/bell tower shape
- Rendered in warm gold/ivory tones against a gradient sky (dusk colors: deep blue → burnt orange → gold at horizon)
- Should feel artistic, not clip-art

**Animations (Framer Motion):**
- Tower silhouette: `initial={{ opacity: 0, y: 40 }}` → `animate={{ opacity: 1, y: 0 }}`, delay 0.3s
- Headline: staggered word-by-word or line-by-line reveal
- CTAs: fade in after headline, delay 0.8s
- Subtle parallax on scroll for the tower image

---

### 5. Announcements Section (PRIMARY CONTENT)

This is the **most important** content section.

**Header:**
```
"Town Announcements"
"Stay up to date with the latest news from White Springs."
[View All Announcements →]
```

**Layout:** 3-column card grid (desktop), 1-column (mobile)

**Announcement Card** (`AnnouncementCard.tsx`):
```typescript
interface Announcement {
  id: string;
  title: string;
  date: string;          // ISO string
  category: 'General' | 'Emergency' | 'Event' | 'Meeting' | 'Closure';
  excerpt: string;
  isPinned?: boolean;    // pinned to top
  href: string;          // link to full announcement page
}
```

**Mock Data** — populate `lib/announcements.ts` with **6 realistic announcements**:
1. (Pinned, Meeting) — "Regular Town Commission Meeting — July 8, 2025"
2. (Event) — "4th of July Celebration at the Suwannee River Park"
3. (General) — "Water System Maintenance Notice — June 28"
4. (Closure) — "Town Hall Holiday Hours"
5. (General) — "Community Input Session: Downtown Revitalization Project"
6. (Event) — "Stephen Foster Folk Culture Center Summer Concert Series"

**Card design:**
- Category badge (color-coded): Emergency=red, Event=blue, Meeting=green, Closure=amber, General=gray
- Pinned announcement gets a subtle gold border and pin icon `📌`
- Date in `DM Mono` font
- Title in `Playfair Display`
- Excerpt in body font, clamped to 3 lines
- "Read More →" link with accessible focus state
- Hover: subtle lift shadow with transition

**Animations:** Stagger cards on scroll enter with Framer Motion `useInView`

---

### 6. Quick Links / Services Grid

**Header:** `"Town Services"`

**Grid:** 2×3 or 3×2 (6 tiles) with icon + label

```
🏛  Town Government      🚰  Water & Utilities
📋  Permits & Licensing  🌳  Parks & Recreation
🚔  Public Safety        📞  Contact Town Hall
```

Each tile:
- Icon (use lucide-react icons)
- Label
- `href` pointing to placeholder routes (`/government`, `/utilities`, etc.)
- Hover: gold underline + slight background tint
- `aria-label` on each link

---

### 7. About White Springs (Brief)

A editorial-style section with a warm, humanized tone.

**Layout:** 2-column (text left, decorative element right) OR full-width with pull quote

**Content (placeholder, write authentically):**
```
"Nestled on the banks of the Suwannee River, White Springs has been a 
cornerstone of Hamilton County since 1901. Home to the Stephen Foster 
Folk Culture Center State Park and the historic sulfur springs that drew 
visitors from across the country, our town carries a rich tradition of 
community, culture, and Southern heritage."

Pull quote: "Where the Suwannee River meets history."
```

Decorative: A simple SVG of the Suwannee River winding, or a geometric pattern in gold + green.

---

### 8. Footer

- Town seal / logo
- Address: `PO Box 307, White Springs, FL 32096`
- Phone: `(386) 397-2000` (placeholder)
- Email: `info@whitespringsflorida.gov` (placeholder)
- Nav links repeated: Home | Announcements | Government | Services | Contact
- Accessibility statement link: `/accessibility`
- Copyright: `© 2025 Town of White Springs, Florida. All Rights Reserved.`
- Social icons (Facebook, placeholder) — aria-labels required
- Dark background (forest green or near-black), ivory text

---

## Navigation Routes (Stub Pages)

The homepage links to these routes. **Do NOT build them** — just create minimal placeholder pages so Next.js routing doesn't 404:

- `/announcements` — "Announcements — Coming Soon"
- `/government` — "Town Government — Coming Soon"
- `/services` — "Town Services — Coming Soon"
- `/contact` — "Contact Us — Coming Soon"
- `/accessibility` — Basic accessibility statement page (can have real content)

Each stub: same Header/Footer, centered "Coming Soon" message, consistent branding.

---

## ADA / WCAG 2.1 AA Requirements

These are **non-negotiable** — enforce throughout:

| Requirement | Implementation |
|---|---|
| Color contrast ≥ 4.5:1 (text) | Verify all text/bg combos |
| Skip to main content | First focusable element |
| All images have `alt` text | Descriptive, not "image of..." |
| Keyboard navigation | Tab order, no traps |
| Focus visible rings | `focus-visible:ring-2 ring-offset-2` everywhere |
| ARIA landmarks | `<header>`, `<nav>`, `<main>`, `<footer>`, `role="banner"` |
| ARIA labels | All icon-only buttons, all links |
| Live regions | Emergency banner: `aria-live="assertive"` |
| Semantic HTML | h1→h6 hierarchy, lists, buttons vs divs |
| Motion safe | Wrap all animations in `@media (prefers-reduced-motion: no-preference)` or use Framer Motion's `useReducedMotion()` |
| Form labels | Any form inputs fully labeled |
| Link purpose | No "click here" links — descriptive text |

Add a comment at the top of each component file: `// ADA: [brief note on accessibility features in this component]`

---

## Metadata & SEO

In `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: {
    default: 'White Springs, Florida | Official Town Website',
    template: '%s | White Springs, FL'
  },
  description: 'Official website of White Springs, Florida. Town announcements, government services, and community information for residents of Hamilton County.',
  keywords: ['White Springs', 'Florida', 'Hamilton County', 'Suwannee River', 'town government'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://whitespringsflorida.gov',
    siteName: 'White Springs, Florida',
  }
}
```

---

## Code Quality Standards

- **TypeScript strict mode** — no `any`, no untyped props
- All components have typed props interfaces
- Use `'use client'` only where necessary (Framer Motion, interactive components)
- Server components by default for static sections
- `cn()` utility from shadcn for conditional classNames
- Responsive: mobile-first Tailwind breakpoints (`sm:`, `md:`, `lg:`)
- No inline styles — Tailwind only
- No placeholder `lorem ipsum` — all copy should feel authentic to White Springs

---

## Deliverable Checklist

When done, the following must work:

- [ ] `npm run dev` starts without errors
- [ ] `npm run build` completes with no TypeScript errors
- [ ] Homepage renders correctly at 375px (mobile) and 1440px (desktop)
- [ ] Bell tower visual is present and animated in hero
- [ ] 6 announcement cards render from mock data
- [ ] All nav links are clickable and route to stub pages
- [ ] Skip-to-content link appears on Tab press
- [ ] Emergency banner is visible and dismissable
- [ ] No console errors or warnings
- [ ] All images have alt text

---

## Notes for Claude Code

- Start by scaffolding the project with `npx create-next-app@latest white-springs --typescript --tailwind --app --eslint`
- Install dependencies: `framer-motion`, `lucide-react`, then initialize shadcn/ui
- Add Google Fonts (`Playfair Display`, `Lato`, `DM Mono`) via `next/font/google` in `layout.tsx`
- Build components in this order: layout shell → Hero → Announcements → Quick Links → About → Footer
- Use `useReducedMotion()` from Framer Motion to respect system accessibility preferences
- The bell tower SVG silhouette is the most important creative element — spend time making it look good