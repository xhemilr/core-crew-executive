import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { LanguageContext } from './context.ts'
import { dictionaries } from './dictionaries.ts'
import { applyHead } from './head.ts'
import { langFromPath, pathFor, type Lang } from './languages.ts'

/**
 * Holds the current language. The URL is the source of truth (/, /mk/, /sq/):
 * switching languages updates the address without reloading, so the visitor
 * keeps their scroll position, and back/forward move between languages.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => langFromPath(window.location.pathname))

  useEffect(() => {
    const onPopState = () => setLangState(langFromPath(window.location.pathname))
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  // Tab title, description, <html lang> — so screen readers switch voice too.
  useEffect(() => applyHead(document, lang), [lang])

  const setLang = useCallback((next: Lang) => {
    const { pathname, search, hash } = window.location
    if (langFromPath(pathname) !== next) {
      window.history.pushState(null, '', pathFor(next, pathname) + search + hash)
    }
    setLangState(next)
  }, [])

  const value = useMemo(
    () => ({
      lang,
      t: dictionaries[lang],
      setLang,
      hrefFor: (target: Lang) => pathFor(target, window.location.pathname),
    }),
    [lang, setLang],
  )

  return <LanguageContext value={value}>{children}</LanguageContext>
}
