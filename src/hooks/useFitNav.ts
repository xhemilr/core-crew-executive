import { useCallback, useEffect, useRef, useState } from 'react'

const DESKTOP = 1100

/**
 * Keeps the top menu on a single line.
 *
 * Below 1100px the menu is a button anyway (CSS). Above it, the links are
 * measured against the header width — if they no longer fit (narrow window,
 * browser zoom, fallback fonts), the menu collapses to the button as well.
 */
export function useFitNav<T extends HTMLElement>() {
  const rowRef = useRef<T | null>(null)
  const needed = useRef(0)
  const compactRef = useRef(false)
  const [compact, setCompact] = useState(false)

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

  useEffect(() => {
    check()

    let frame = 0
    const onResize = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(check)
    }

    window.addEventListener('resize', onResize)
    // Web fonts change the text width, so measure again once they land.
    document.fonts?.ready.then(check).catch(() => undefined)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', onResize)
    }
  }, [check])

  return { rowRef, compact }
}
