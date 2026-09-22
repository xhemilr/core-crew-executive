import { useEffect, useRef, useState } from 'react'

/**
 * Adds a gentle fade-and-rise the first time an element scrolls into view.
 * Anything already on screen at load reveals immediately, and the CSS drops
 * the motion entirely when the visitor prefers reduced motion.
 */
export function useReveal<T extends HTMLElement>(rootMargin = '-10% 0px -5% 0px') {
  const ref = useRef<T | null>(null)
  // No IntersectionObserver (very old browser): show everything from the start.
  const [shown, setShown] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const node = ref.current
    if (!node || shown) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShown(true)
          observer.disconnect()
        }
      },
      { rootMargin, threshold: 0.05 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [rootMargin, shown])

  return { ref, shown }
}
