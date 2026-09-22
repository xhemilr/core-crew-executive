# Core Crew Solutions — website (Executive concept)

Marketing site for Core Crew Solutions DOOEL, a workforce and labor supply company in North Macedonia.

**Stack:** React 19 + TypeScript, Vite, Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # serve the built site locally
```

## How it is put together

| Path | What it holds |
| --- | --- |
| `src/App.tsx` | Page composition and the quick-start → quote-form state |
| `src/components/` | One component per section of the page |
| `src/components/ui/` | Shared bits: `Section`, `Wrap`, `Heading`, `Kicker`, `Button`, icons |
| `src/data/site.ts` | **All copy and contact details** — phone, email, the sector matrix, process steps, FAQs |
| `src/hooks/useFitNav.ts` | Collapses the top menu to a button when the links no longer fit on one line |
| `src/index.css` | Tailwind import plus the design tokens (`@theme`): colours, fonts, breakpoints |

Changing text, a phone number or a row in the workforce table usually means editing
`src/data/site.ts` only.

Design tokens are Tailwind utilities: `bg-navy`, `text-gold`, `border-ivory-line`, `font-serif`.
Breakpoints follow the design: `md` = 720px, `tab` = 820px (the sector table turns into cards below
it), `lg` = 1100px.

## Deployment

Pushing to `main` builds the site and publishes it with GitHub Pages
(`.github/workflows/deploy.yml`). In the repository, set **Settings → Pages → Source** to
**GitHub Actions** once.

`vite.config.ts` sets `base: './'`, so the build works both under `https://<user>.github.io/<repo>/`
and on a custom domain.

## Before going live

- Remove the `<meta name="robots" content="noindex, nofollow">` line in `index.html`.
- The quote form opens the visitor's email app (mailto). Swap it for a real form service.
- Photos are hotlinked from Unsplash (free licence) — download and self-host them, then replace
  them with real Core Crew photos as they become available.
- Add the logo, company registration number, legal pages and social links.

The previous single-file version of this site is kept in `legacy/index.html` for reference.
