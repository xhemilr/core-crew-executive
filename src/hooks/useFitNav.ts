import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'

const DESKTOP = 1100

/**
 * Keeps the top menu on a single line.
 *
 * Below 1100px the menu is a button anyway (CSS). Above it, the links are
 * measured against the header width — if they no longer fit (narrow window,
 * browser zoom, fallback fonts, longer translated labels), the menu collapses
 * to the button as well.
 *
 * `contentKey` (the language) changes when the labels change. Then, and
 * whenever web fonts finish loading, the menu is shown in full again for one
 * layout pass (before the browser paints) and re-measured.
 */
export function useFitNav<T extends HTMLElement>(contentKey?: string) {
  const rowRef = useRef<T | null>(null)
  const needed = useRef(0)
  const compactRef = useRef(false)
  const remeasure = useRef(false)
  const [compact, setCompact] = useState(false)
  const [fontsLoaded, setFontsLoaded] = useState(0)

  const apply = useCallback((next: boolean) => {
    compactRef.current = next
    setCompact(next)
  }, [])

  const check = useCallback(() => {
    const row = rowRef.current
    if (!row) return

    if (window.innerWidth < DESKTOP) {
      if (compactRef.current) apply(false)
      return
    }

    if (!compactRef.current) {
      // Full menu is on screen: remember how much room it needs.
      needed.current = Math.max(needed.current, row.scrollWidth)
      if (row.scrollWidth > row.clientWidth + 1) apply(true)
    } else if (needed.current && row.clientWidth >= needed.current + 8) {
      apply(false)
    }
  }, [apply])

  // First render, every language change and every font load: forget the old
  // width, put the full menu back and measure it before the browser paints.
  useLayoutEffect(() => {
    needed.current = 0
    if (compactRef.current) {
      remeasure.current = true
      apply(false)
    } else {
      check()
    }
  }, [contentKey, fontsLoaded, apply, check])

  useLayoutEffect(() => {
    if (remeasure.current && !compact) {
      remeasure.current = false
      check()
    }
  }, [compact, check])

  useEffect(() => {
    let frame = 0
    const onResize = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(check)
    }

    window.addEventListener('resize', onResize)
    // Web fonts change the text width, so measure again once they land —
    // including the Cyrillic fonts, which only load when Macedonian is shown.
    const onFonts = () => setFontsLoaded((count) => count + 1)
    document.fonts?.ready.then(onFonts).catch(() => undefined)
    document.fonts?.addEventListener('loadingdone', onFonts)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', onResize)
      document.fonts?.removeEventListener('loadingdone', onFonts)
    }
  }, [check])

  return { rowRef, compact }
}
