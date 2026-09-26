import { createContext, useContext } from 'react'
import type { Dictionary } from './dictionaries.ts'
import type { Lang } from './languages.ts'

export type LanguageState = {
  lang: Lang
  /** All text for the current language. */
  t: Dictionary
  setLang: (lang: Lang) => void
  /** Link to this page in another language. */
  hrefFor: (lang: Lang) => string
}

export const LanguageContext = createContext<LanguageState | null>(null)

export function useLanguage(): LanguageState {
  const value = useContext(LanguageContext)
  if (!value) throw new Error('useLanguage() must be used inside <LanguageProvider>')
  return value
}
