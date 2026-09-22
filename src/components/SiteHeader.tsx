import { useEffect, useState } from 'react'
import { ButtonLink } from './ui/Primitives'
import { IconMenu } from './ui/icons'
import { useFitNav } from '../hooks/useFitNav'
import { navLinks } from '../data/site'

export function Brand({ label }: { label: string }) {
  return (
    <a
      href="#top"
      aria-label={label}
      className="group flex flex-none items-center gap-3.5 text-cream no-underline"
    >
      <span
        aria-hidden="true"
        className="grid h-11 w-11 place-items-center rounded-[10px] border border-gold/70 font-serif text-[23px] leading-none tracking-[-0.06em] text-gold transition-all duration-300 group-hover:border-gold group-hover:bg-gold/10 group-hover:shadow-(--shadow-gold)"
      >
        CC
      </span>
      <span className="flex flex-col leading-none">
        <b className="font-serif text-[22px] font-normal tracking-[0.01em] md:text-[26px]">Core Crew</b>
        <span className="mt-1 text-[10px] font-semibold tracking-[0.34em] text-fog">SOLUTIONS</span>
      </span>
    </a>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [stuck, setStuck] = useState(false)
  const { rowRef, compact } = useFitNav<HTMLDivElement>()

  // Transparent over the hero, frosted once the page moves.
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Exactly one display class per state — Tailwind resolves conflicting
  // display utilities by stylesheet order, not by the order written here.
  const navClasses = open
    ? 'absolute inset-x-0 top-full flex flex-col border-b border-line bg-navy/95 px-6 pt-3 pb-6 backdrop-blur-xl'
    : compact
      ? 'hidden'
      : 'hidden lg:flex'
  const buttonVisibility = compact ? 'inline-flex' : 'inline-flex lg:hidden'

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,0.75,0.3,1)] ${
        stuck || open
          ? 'border-b border-line bg-navy/80 shadow-[0_10px_30px_-20px_rgba(3,9,20,0.9)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div
        ref={rowRef}
        className={`mx-auto flex w-full max-w-[1240px] items-center gap-7 px-4 transition-[height] duration-500 md:px-10 ${
          stuck ? 'h-[62px] lg:h-[72px]' : 'h-[68px] lg:h-20'
        }`}
      >
        <Brand label="Core Crew Solutions — home" />

        <nav id="main-nav" aria-label="Main" className={`ml-auto gap-1 ${navClasses}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`relative rounded-full px-3.5 py-2.5 text-[15px] font-medium whitespace-nowrap text-cream no-underline transition-colors duration-200 hover:text-gold ${
                open
                  ? 'rounded-none border-b border-line px-1 py-3.5'
                  : 'after:absolute after:inset-x-3.5 after:bottom-1.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:after:scale-x-100'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3.5">
          {/* wrapper, not a `hidden` class on the button itself: Tailwind's
              display utilities would fight each other inside one element */}
          <span className="hidden md:block">
            <ButtonLink href="#quote" className="min-h-[44px] px-5 text-[15px]">
              Request Workforce
            </ButtonLink>
          </span>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen((v) => !v)}
            className={`h-12 w-12 items-center justify-center rounded-full border border-line text-cream transition-colors duration-300 hover:border-gold hover:text-gold ${buttonVisibility}`}
          >
            <IconMenu className="h-[22px] w-[22px]" />
          </button>
        </div>
      </div>
    </header>
  )
}
