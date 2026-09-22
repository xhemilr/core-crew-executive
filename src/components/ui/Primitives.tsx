import type { AnchorHTMLAttributes, ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'

export type Tone = 'dark' | 'light'

/** Fades content in as it scrolls into view (no motion for reduced-motion users). */
export function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'article' | 'section'
}) {
  const { ref, shown } = useReveal<HTMLDivElement>()
  return (
    <Tag
      ref={ref as never}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
      className={`reveal ${shown ? 'reveal-in' : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}

/** Small gold label with a rule, used above every section heading. */
export function Kicker({ children, tone = 'dark' }: { children: ReactNode; tone?: Tone }) {
  return (
    <p
      className={`flex items-center gap-3.5 text-[13px] font-semibold tracking-[0.16em] uppercase ${
        tone === 'dark' ? 'text-gold' : 'text-gold-ink'
      }`}
    >
      <span aria-hidden="true" className="h-px w-9 bg-current" />
      {children}
    </p>
  )
}

/** Italic gold phrase inside a serif heading. */
export function Em({
  children,
  tone = 'dark',
  block = false,
}: {
  children: ReactNode
  tone?: Tone
  block?: boolean
}) {
  return (
    <em className={`italic ${block ? 'block' : ''} ${tone === 'dark' ? 'text-gold' : 'text-gold-ink'}`}>
      {children}
    </em>
  )
}

/** Serif section heading. */
export function Heading({
  children,
  className = '',
  as: Tag = 'h2',
}: {
  children: ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3'
}) {
  return (
    <Tag
      className={`mt-5 font-serif leading-none tracking-[-0.01em] text-[44px] lg:text-[64px] ${className}`}
    >
      {children}
    </Tag>
  )
}

const variants = {
  gold: 'border-transparent bg-gold text-navy hover:bg-gold-soft hover:shadow-(--shadow-gold)',
  navy: 'border-transparent bg-navy text-cream hover:bg-raised hover:shadow-(--shadow-lift)',
  line: 'border-line text-cream hover:border-gold hover:text-gold hover:bg-gold/5',
} as const

/** Buttons lift a little and their arrow slides on hover. */
const base =
  'group inline-flex items-center justify-center gap-2.5 min-h-[52px] px-6 rounded-full border text-base font-semibold whitespace-nowrap cursor-pointer ' +
  'transition-[background-color,color,border-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.22,0.75,0.3,1)] ' +
  'hover:-translate-y-0.5 active:translate-y-0 [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-x-1'

type ButtonVariant = keyof typeof variants

export function ButtonLink({
  variant = 'gold',
  className = '',
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: ButtonVariant }) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  )
}

export function Button({
  variant = 'gold',
  className = '',
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant }) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  )
}

/** Page gutter + max width, used by every section. */
export function Wrap({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative z-2 mx-auto w-full max-w-[1240px] px-4 md:px-10 ${className}`}>
      {children}
    </div>
  )
}

/** Section wrapper: dark by default, ivory when tone="light". */
export function Section({
  id,
  tone = 'dark',
  glow,
  className = '',
  children,
}: {
  id?: string
  tone?: Tone | 'surface'
  /** optional warm/cool light behind the section */
  glow?: 'gold' | 'cool'
  className?: string
  children: ReactNode
}) {
  const bg = tone === 'light' ? 'bg-ivory text-ink' : tone === 'surface' ? 'bg-surface' : 'bg-navy'
  return (
    <section id={id} className={`relative overflow-hidden py-[72px] lg:py-28 ${bg} ${className}`}>
      {glow && (
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 ${glow === 'gold' ? 'glow-gold' : 'glow-cool'}`}
        />
      )}
      {children}
    </section>
  )
}

/** Heading block used at the top of most sections. */
export function SectionHead({
  kicker,
  heading,
  text,
  tone = 'dark',
}: {
  kicker: string
  heading: ReactNode
  text: string
  tone?: Tone
}) {
  return (
    <Reveal className="mb-8 grid items-end gap-4 lg:mb-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
      <div>
        <Kicker tone={tone}>{kicker}</Kicker>
        <Heading>{heading}</Heading>
      </div>
      <p className={`text-lg ${tone === 'dark' ? 'text-fog' : 'text-ink-muted'}`}>{text}</p>
    </Reveal>
  )
}
