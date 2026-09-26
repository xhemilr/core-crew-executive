import { company } from '../data/company.ts'
import { dictionaries } from './dictionaries.ts'
import { LANGS, SITE_URL, absoluteUrl, languages, type Lang } from './languages.ts'

/* ------------------------------------------------------------------
   The translated part of <head>: title, description, link previews,
   canonical + hreflang links and the structured company data.

   Used by the build (vite.config.ts) to write index.html, mk/index.html
   and sq/index.html, so search engines and link previews see each
   language without running any JavaScript.
   ------------------------------------------------------------------ */

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export function renderHead(lang: Lang): string {
  const { meta } = dictionaries[lang]
  const url = absoluteUrl(lang)

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'EmploymentAgency',
    name: company.legalName,
    alternateName: company.name,
    slogan: meta.slogan,
    url: SITE_URL,
    telephone: company.phone,
    email: company.email,
    areaServed: 'North Macedonia',
    knowsLanguage: [...LANGS],
    address: { '@type': 'PostalAddress', addressCountry: 'MK' },
  }

  return [
    `<title>${escapeHtml(meta.title)}</title>`,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
    `<meta name="keywords" content="${escapeHtml(meta.keywords)}" />`,
    `<meta property="og:title" content="${escapeHtml(meta.socialTitle)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.socialDescription)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:site_name" content="${company.name}" />`,
    `<meta property="og:locale" content="${languages[lang].ogLocale}" />`,
    ...LANGS.filter((other) => other !== lang).map(
      (other) => `<meta property="og:locale:alternate" content="${languages[other].ogLocale}" />`,
    ),
    `<meta name="twitter:card" content="summary" />`,
    `<link rel="canonical" href="${url}" />`,
    ...LANGS.map((code) => `<link rel="alternate" hreflang="${code}" href="${absoluteUrl(code)}" />`),
    `<link rel="alternate" hreflang="x-default" href="${absoluteUrl('en')}" />`,
    `<script type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, '\\u003c')}</script>`,
  ].join('\n    ')
}

/** Brings the live page's <head> in line after switching language in the browser. */
export function applyHead(doc: { documentElement: { lang: string }; title: string; head: ParentNodeLike }, lang: Lang) {
  const { meta } = dictionaries[lang]
  const url = absoluteUrl(lang)
  const set = (selector: string, attribute: string, value: string) =>
    doc.head.querySelector(selector)?.setAttribute(attribute, value)

  doc.documentElement.lang = lang
  doc.title = meta.title
  set('meta[name="description"]', 'content', meta.description)
  set('meta[name="keywords"]', 'content', meta.keywords)
  set('meta[property="og:title"]', 'content', meta.socialTitle)
  set('meta[property="og:description"]', 'content', meta.socialDescription)
  set('meta[property="og:url"]', 'content', url)
  set('meta[property="og:locale"]', 'content', languages[lang].ogLocale)
  set('link[rel="canonical"]', 'href', url)
}

// Minimal structural type so this file also type-checks without the DOM library.
type ParentNodeLike = {
  querySelector(selector: string): { setAttribute(name: string, value: string): void } | null
}
