# White Springs Municipal Homepage — Design Spec

## Overview

Proof-of-concept homepage for the Town of White Springs, Florida. A municipal government site that is ADA/WCAG 2.1 AA compliant, announcement-first in content hierarchy, and visually distinctive with Southern heritage aesthetics.

This is a client proposal POC — must look polished enough to sell the vision.

## Tech Stack

- Next.js (App Router) — SSG, file-based routing
- TypeScript — strict mode
- Tailwind CSS — all styling (no CSS modules)
- Framer Motion — animations and page transitions
- shadcn/ui (Default style) — Badge, Card, Dialog where appropriate

## Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Deep forest green | `#1B4332` | Primary, header/footer bg |
| Warm ivory/cream | `#FAF5E9` | Page background |
| Burnished gold | `#C9A84C` | Accent, dividers, decorative |
| Slate gray | `#4A5568` | Body text |
| Sky blue | `#5B9DC9` | Links, secondary accent |

### Typography

| Role | Font | Source |
|------|------|--------|
| Display/headings | Playfair Display | next/font/google |
| Body | Lato | next/font/google |
| Monospace (dates, labels) | DM Mono | next/font/google |

All fonts loaded via `next/font/google` in root layout, applied as CSS custom properties on `<html>`.

### Aesthetic Details

- Subtle warm paper/linen texture on background (CSS noise overlay)
- Gold dividers and decorative rules
- Tasteful serif drop caps or pull quotes on announcements
- Gentle scroll-triggered fade-ups (Framer Motion)
- Civic/governmental gravitas — not a startup landing page

## Architecture

### Rendering Strategy

- Server components by default for all static content
- `'use client'` only where required:
  - **Header** — mobile menu toggle state
  - **HeroSection** — Framer Motion animations
  - **AnnouncementsSection** — Framer Motion scroll animations (`useInView`)
  - **EmergencyBanner** — dismiss state with localStorage persistence

### File Structure

```
white-springs/
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Tailwind base + CSS vars + texture
│   ├── announcements/page.tsx  # Stub
│   ├── government/page.tsx     # Stub
│   ├── services/page.tsx       # Stub
│   ├── contact/page.tsx        # Stub
│   └── accessibility/page.tsx  # Accessibility statement
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Nav + skip link
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── HeroSection.tsx     # Bell tower hero
│   │   ├── AnnouncementsSection.tsx
│   │   ├── QuickLinksSection.tsx
│   │   ├── AboutTownSection.tsx
│   │   └── EmergencyBanner.tsx # Conditional urgent banner
│   └── ui/                     # shadcn/ui components
├── lib/
│   ├── announcements.ts        # Mock data + types
│   └── utils.ts                # cn() utility from shadcn
├── public/
│   └── images/
│       └── bell-tower.jpg      # Placeholder (replace with real photo)
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

## Component Specifications

### 1. Skip Navigation Link

First focusable element in the DOM. Visually hidden until focused.

```
<a href="#main-content" class="sr-only focus:not-sr-only ...">
  Skip to main content
</a>
```

### 2. Header

- Left: "⚜ White Springs" wordmark with bell icon placeholder
- Right (desktop): Home | Announcements | Government | Services | Contact
- Mobile: hamburger button with `aria-expanded`, `aria-controls`, keyboard-navigable drawer
- Sticky on scroll with `backdrop-blur`
- All items keyboard navigable with `focus-visible:ring-2 ring-offset-2`
- Semantic `<header>` and `<nav>` elements with ARIA landmarks

### 3. EmergencyBanner

- Thin banner ABOVE the hero, amber `#D97706` background, white text
- Controlled by `showEmergencyBanner` boolean in mock config
- Dismiss button (X) persists to localStorage
- `role="alert"`, `aria-live="assertive"`
- Default: "⚠ Town Hall will be closed Monday, July 7th in observance of a holiday."
- Client component (state + localStorage)

### 4. HeroSection — Bell Tower

**Layout:**
- Full viewport height (90vh)
- Bell tower photo (`/images/bell-tower.jpg`) anchored center/right via Next.js `<Image>`
- On image load error → inline SVG silhouette fallback (artistic steeple against dusk gradient)
- Gradient overlay: forest green (left, ~60% opacity) → transparent (right)
- Text content positioned left/center-left

**Content:**
- Eyebrow: "Town of"
- Headline: "White Springs, Florida"
- Subhead: "Suwannee River Valley — Incorporated 1901"
- Body: "Your official source for town announcements, services, and community news."
- CTAs: [View Announcements ↓] [Contact Town Hall →]

**Bell Tower SVG Fallback:**
- Recognizable steeple/bell tower shape
- Warm gold/ivory tones against gradient sky (deep blue → burnt orange → gold at horizon)
- Artistic quality, not clip-art

**Animations (Framer Motion):**
- Tower: `initial={{ opacity: 0, y: 40 }}` → `animate={{ opacity: 1, y: 0 }}`, delay 0.3s
- Headline: staggered line-by-line reveal
- CTAs: fade in after headline, delay 0.8s
- Subtle parallax on scroll for tower image
- All wrapped in `useReducedMotion()` check

### 5. AnnouncementsSection (Primary Content)

**Header:**
- "Town Announcements"
- "Stay up to date with the latest news from White Springs."
- [View All Announcements →]

**Layout:** 3-column card grid (desktop), 1-column (mobile)

**Data type:**
```typescript
interface Announcement {
  id: string;
  title: string;
  date: string;          // ISO string
  category: 'General' | 'Emergency' | 'Event' | 'Meeting' | 'Closure';
  excerpt: string;
  isPinned?: boolean;
  href: string;
}
```

**6 mock announcements:**
1. (Pinned, Meeting) — "Regular Town Commission Meeting — July 8, 2025"
2. (Event) — "4th of July Celebration at the Suwannee River Park"
3. (General) — "Water System Maintenance Notice — June 28"
4. (Closure) — "Town Hall Holiday Hours"
5. (General) — "Community Input Session: Downtown Revitalization Project"
6. (Event) — "Stephen Foster Folk Culture Center Summer Concert Series"

**Card design:**
- Category badge (color-coded): Emergency=red, Event=blue, Meeting=green, Closure=amber, General=gray
- Pinned: gold border + pin icon
- Date in DM Mono
- Title in Playfair Display
- Excerpt clamped to 3 lines
- "Read More →" with accessible focus state
- Hover: subtle lift shadow

**Animations:** Stagger cards on scroll enter via `useInView`

### 6. QuickLinksSection

**Header:** "Town Services"

**Grid:** 2×3 or 3×2 (6 tiles) with lucide-react icons:

| Icon | Label | Route |
|------|-------|-------|
| Landmark | Town Government | /government |
| Droplets | Water & Utilities | /services |
| ClipboardList | Permits & Licensing | /services |
| Trees | Parks & Recreation | /services |
| Shield | Public Safety | /services |
| Phone | Contact Town Hall | /contact |

- Hover: gold underline + slight background tint
- `aria-label` on each link

### 7. AboutTownSection

**Layout:** 2-column (text left, decorative SVG right) on desktop, stacked on mobile

**Content:**
> "Nestled on the banks of the Suwannee River, White Springs has been a cornerstone of Hamilton County since 1901. Home to the Stephen Foster Folk Culture Center State Park and the historic sulfur springs that drew visitors from across the country, our town carries a rich tradition of community, culture, and Southern heritage."

**Pull quote:** "Where the Suwannee River meets history."

**Decorative element:** SVG of Suwannee River winding, or geometric pattern in gold + green.

### 8. Footer

- Dark background (forest green `#1B4332`), ivory text
- Town seal / logo
- Address: PO Box 307, White Springs, FL 32096
- Phone: (386) 397-2000
- Email: info@whitespringsflorida.gov
- Nav links: Home | Announcements | Government | Services | Contact
- Accessibility statement link: /accessibility
- Copyright: © 2025 Town of White Springs, Florida. All Rights Reserved.
- Social icons (Facebook placeholder) with aria-labels

## Stub Pages

All share Header/Footer, centered "Coming Soon" message, consistent branding:

- `/announcements` — "Announcements — Coming Soon"
- `/government` — "Town Government — Coming Soon"
- `/services` — "Town Services — Coming Soon"
- `/contact` — "Contact Us — Coming Soon"
- `/accessibility` — Full accessibility statement (real content)

## ADA / WCAG 2.1 AA Requirements

Non-negotiable, enforced throughout:

- Color contrast ≥ 4.5:1 for all text/bg combinations
- Skip to main content as first focusable element
- All images have descriptive `alt` text
- Full keyboard navigation, no tab traps
- `focus-visible:ring-2 ring-offset-2` on all interactive elements
- ARIA landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`
- ARIA labels on all icon-only buttons and links
- `aria-live="assertive"` on emergency banner
- Semantic HTML: proper h1→h6 hierarchy, lists, buttons
- All Framer Motion animations wrapped in `useReducedMotion()` / `prefers-reduced-motion`
- Descriptive link text (no "click here")
- `// ADA:` comment at top of each component file

## Metadata & SEO

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

## Build Order

1. Scaffold Next.js project (`create-next-app`)
2. Install dependencies: `framer-motion`, `lucide-react`, init shadcn/ui (Default)
3. Root layout + fonts + globals.css with theme variables + texture
4. Header + Footer (layout shell)
5. EmergencyBanner
6. HeroSection (photo + SVG fallback + gradient + animations)
7. AnnouncementsSection + mock data in `lib/announcements.ts`
8. QuickLinksSection
9. AboutTownSection
10. Stub pages
11. Final ADA audit pass
