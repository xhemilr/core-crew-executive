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
| `src/i18n/en.ts`, `mk.ts`, `sq.ts` | **All text on the site**, one file per language (English, Macedonian, Albanian) |
| `src/i18n/languages.ts` | The language list and URLs (`/`, `/mk/`, `/sq/`) |
| `src/data/site.ts` | Everything that isn't text: icons, photos, crew sizes (phone/email live in `company.ts`) |
| `src/hooks/useFitNav.ts` | Collapses the top menu to a button when the links no longer fit on one line |
| `src/index.css` | Tailwind import plus the design tokens (`@theme`): colours, fonts, breakpoints |

## Languages

The site is in English (`/`), Macedonian (`/mk/`) and Albanian (`/sq/`). Visitors switch with
the globe button in the header or the links at the bottom of the footer; the address changes
without reloading, so back/forward and shared links keep the language.

- **Changing text:** edit the same key in `src/i18n/en.ts`, `mk.ts` and `sq.ts`. TypeScript fails
  the build if a key is missing in one language.
- `*asterisks*` mark the gold italic words in a heading — each language can put them wherever its
  word order needs.
- Lists (sectors, steps, FAQs, industry cards…) line up by position with the icons/photos in
  `src/data/site.ts`, so keep the same number of items and the same order in every language.
- `\u00ad` in `mk.ts` is a soft hyphen (an invisible break point for long words in the table);
  `\u00a0` in `sq.ts` is a non-breaking space.
- Page title, description and link-preview text are the `meta` block of each dictionary. The build
  writes them into `index.html`, `mk/index.html` and `sq/index.html` (see `vite.config.ts` and
  `src/i18n/head.ts`), together with `hreflang` links, so search engines index every language.
- Hanken Grotesk and Instrument Serif have no Cyrillic letters. `src/index.css` fills those in
  with Onest and Noto Serif Display (self-hosted in `src/assets/fonts/`, SIL OFL); browsers only
  download them when Macedonian text is on screen.

Changing a phone number or the email means editing `src/data/company.ts`.

Design tokens are Tailwind utilities: `bg-navy`, `text-gold`, `border-ivory-line`, `font-serif`.
Breakpoints follow the design: `md` = 720px, `tab` = 1024px (the sector table turns into cards below
it), `lg` = 1100px.

## Deployment

Live at **https://www.corecrew-solutions.com** (the bare domain redirects to www).

Pushing to `main` builds the site and publishes it with GitHub Pages
(`.github/workflows/deploy.yml`). In the repository, set **Settings → Pages → Source** to
**GitHub Actions** once, then add `www.corecrew-solutions.com` as the custom domain and tick
**Enforce HTTPS** after the certificate is issued.

`public/CNAME` carries the domain into every build, so the setting survives redeploys.
`vite.config.ts` sets `base: './'`, so the build also works from `https://<user>.github.io/<repo>/`.

### DNS records at the registrar

| Type | Host | Value |
| --- | --- | --- |
| CNAME | `www` | `xhemilr.github.io` |
| A | `@` | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153` |

The four A/AAAA records let the bare domain redirect to the www address.

## Still to do

- The quote form opens the visitor's email app (mailto). Swap it for a real form service.
- Photos are hotlinked from Unsplash (free licence) — download and self-host them, then replace
  them with real Core Crew photos as they become available.
- Add the logo, company registration number, legal pages and social links.

The previous single-file version of this site is kept in `legacy/index.html` for reference.
