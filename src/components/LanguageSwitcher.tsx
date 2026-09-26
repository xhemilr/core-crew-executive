import { useEffect, useId, useRef, useState, type MouseEvent } from 'react'
import { IconCheck, IconChevronDown, IconGlobe } from './ui/icons'
import { useLanguage } from '../i18n/context'
import { LANGS, languages, type Lang } from '../i18n/languages'

/** Globe button in the header that opens the list of site languages. */
export function LanguageSwitcher() {
  const { lang, t, setLang, hrefFor } = useLanguage()
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const listId = useId()

  // Close on a click elsewhere or on Escape.
  useEffect(() => {
    if (!open) return
    const onPointerDown = (event: PointerEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  function choose(event: MouseEvent<HTMLAnchorElement>, next: Lang) {
    // Ctrl/Cmd/middle click: let the browser open the other language in a new tab.
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    setLang(next)
    setOpen(false)
    buttonRef.current?.focus()
  }

  return (
    <div
      ref={wrapRef}
      className="relative"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false)
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-11 items-center gap-1.5 rounded-full border border-line px-2.5 text-sm min-[381px]:px-3 font-semibold tracking-[0.06em] text-cream transition-colors duration-300 hover:border-gold hover:text-gold aria-expanded:border-gold aria-expanded:text-gold"
      >
        <IconGlobe className="h-[18px] w-[18px]" />
        {languages[lang].short}
        <span className="sr-only"> — {t.language.change}</span>
        <IconChevronDown
          className={`hidden h-3.5 w-3.5 transition-transform duration-300 min-[381px]:block ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <ul
        id={listId}
        hidden={!open}
        className="absolute top-[calc(100%+10px)] right-0 z-50 min-w-[210px] rounded-2xl border border-line bg-navy/95 p-1.5 shadow-(--shadow-soft) backdrop-blur-xl"
      >
        {LANGS.map((code) => {
          const active = code === lang
          return (
            <li key={code}>
              <a
                href={hrefFor(code)}
                hrefLang={code}
                lang={code}
                aria-current={active ? 'true' : undefined}
                onClick={(event) => choose(event, code)}
                className={`flex min-h-11 items-center justify-between gap-4 rounded-xl px-3.5 text-[15px] font-medium no-underline transition-colors duration-200 ${
                  active ? 'text-gold' : 'text-cream hover:bg-white/5 hover:text-gold'
                }`}
              >
                {languages[code].name}
                {active ? (
                  <IconCheck className="h-4 w-4" />
                ) : (
                  <span className="text-xs tracking-[0.12em] text-fog">{languages[code].short}</span>
                )}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
