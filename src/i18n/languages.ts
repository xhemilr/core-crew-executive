/* ------------------------------------------------------------------
   The three site languages and how they map to URLs.

     /      English (default)
     /mk/   Macedonian
     /sq/   Albanian

   Kept free of React and DOM types so vite.config.ts can import it too
   (that is also why imports in src/i18n spell out the .ts extension).
   ------------------------------------------------------------------ */

export const SITE_URL = 'https://www.corecrew-solutions.com/'

export const LANGS = ['en', 'mk', 'sq'] as const
export type Lang = (typeof LANGS)[number]

export const DEFAULT_LANG: Lang = 'en'

export const languages: Record<
  Lang,
  {
    /** The language's own name — shown in the switcher, never translated. */
    name: string
    /** Short label for the header button. */
    short: string
    /** Open Graph locale. */
    ogLocale: string
    /** Folder the language lives in, relative to the site root. */
    path: string
  }
> = {
  en: { name: 'English', short: 'EN', ogLocale: 'en_US', path: '' },
  mk: { name: 'Македонски', short: 'MK', ogLocale: 'mk_MK', path: 'mk/' },
  sq: { name: 'Shqip', short: 'SQ', ogLocale: 'sq_AL', path: 'sq/' },
}

// "/mk", "/mk/", "/mk/index.html" — also under a GitHub Pages project path.
const LANG_SEGMENT = /\/(mk|sq)(?:\/(?:index\.html)?)?$/

/** Which language a URL path is in. */
export function langFromPath(pathname: string): Lang {
  const match = pathname.match(LANG_SEGMENT)
  return match ? (match[1] as Lang) : DEFAULT_LANG
}

/** The site root for a path: "/" on the custom domain, "/<repo>/" on github.io. */
export function siteRoot(pathname: string): string {
  const root = pathname.replace(LANG_SEGMENT, '/').replace(/index\.html$/, '')
  return root.endsWith('/') ? root : `${root}/`
}

/** Path of the same page in another language, relative to the current host. */
export function pathFor(lang: Lang, pathname: string): string {
  return siteRoot(pathname) + languages[lang].path
}

/** Public, absolute address of a language version (canonical / hreflang). */
export function absoluteUrl(lang: Lang): string {
  return SITE_URL + languages[lang].path
}
