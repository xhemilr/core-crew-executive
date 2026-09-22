import { ButtonLink, Em, Kicker, Reveal, Wrap } from './ui/Primitives'
import { IconArrowRight, IconPhone } from './ui/icons'
import { company } from '../data/site'
import { QuickStart } from './QuickStart'
import type { Selection } from '../types'

export function Hero({ onStart }: { onStart: (selection: Selection) => void }) {
  return (
    <section id="top" className="relative overflow-hidden pt-24 lg:pt-32">
      {/* warm and cool light behind the opening screen */}
      <span aria-hidden="true" className="glow-gold pointer-events-none absolute inset-0" />
      <span aria-hidden="true" className="glow-cool pointer-events-none absolute inset-0" />

      <Wrap>
        <div className="grid items-end gap-14 lg:grid-cols-[1.25fr_0.85fr] lg:gap-[72px]">
          <Reveal>
            <Kicker>Workforce &amp; labor supply — North Macedonia</Kicker>
            <h1 className="mt-7 font-serif text-[54px] leading-[0.98] tracking-[-0.02em] md:text-[72px] lg:text-[96px]">
              Reliable workforce. <Em block>Ready when you need it.</Em>
            </h1>
            <p className="mt-7 max-w-[600px] text-[17px] leading-relaxed text-fog md:text-xl">
              Core Crew Solutions provides flexible workforce solutions to companies across North
              Macedonia, sourcing dependable workers according to real operational requirements.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <ButtonLink href="#quote">
                Request a Workforce Quote <IconArrowRight className="h-[18px] w-[18px]" />
              </ButtonLink>
              <a
                href={company.phoneHref}
                className="group inline-flex min-h-[52px] items-center gap-3 rounded-full px-1.5 font-semibold text-cream no-underline"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full border border-line text-gold transition-all duration-300 group-hover:border-gold group-hover:bg-gold/10">
                  <IconPhone className="h-[18px] w-[18px]" />
                </span>
                <span>
                  <small className="block text-xs font-medium tracking-[0.06em] uppercase text-fog">
                    Talk to us
                  </small>
                  {company.phone}
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <figure className="group relative z-10 mx-4 lg:mx-0 lg:-mb-[140px]">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-[18px] -left-[18px] right-[18px] bottom-[18px] rounded-[var(--radius-xl2)] border border-gold/60 transition-transform duration-700 ease-[cubic-bezier(0.22,0.75,0.3,1)] group-hover:-translate-x-1 group-hover:-translate-y-1"
              />
              <div className="relative overflow-hidden rounded-[var(--radius-xl2)] shadow-(--shadow-soft) ring-1 ring-white/10">
                <img
                  src="https://images.unsplash.com/photo-1751054720514-067105f538d4?auto=format&fit=crop&w=1000&q=75"
                  width={800}
                  height={1000}
                  alt="Two construction workers in hard hats and high-visibility vests overseeing a crane lift"
                  className="block h-[400px] w-full bg-raised object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,0.75,0.3,1)] group-hover:scale-[1.04] md:h-[480px] lg:h-[600px]"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/5 to-transparent"
                />
              </div>
              <figcaption className="absolute top-6 -left-2.5 max-w-[250px] rounded-[var(--radius-card)] bg-ivory/95 p-4 text-ink shadow-(--shadow-soft) backdrop-blur-sm md:top-12 md:-left-7 md:p-5">
                <b className="block font-serif text-2xl leading-tight font-normal">
                  From helpers to certified engineers.
                </b>
                <span className="mt-1.5 block text-[13px] leading-snug text-ink-muted">
                  Individual specialists or complete crews.
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <QuickStart onStart={onStart} />
      </Wrap>
    </section>
  )
}
