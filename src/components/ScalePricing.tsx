import { ButtonLink, Em, Heading, Kicker, Reveal, Section, Wrap } from './ui/Primitives'
import { IconPerson } from './ui/icons'
import { crews, quoteFactors } from '../data/site'

export function ScalePricing() {
  return (
    <Section id="pricing" tone="surface" glow="gold">
      <Wrap className="grid gap-14 lg:grid-cols-2 lg:gap-[88px]">
        <div>
          <Kicker>Crew sizes</Kicker>
          <Heading className="lg:text-[56px] lg:leading-[1.02]">
            Start focused. <Em>Scale when you’re ready.</Em>
          </Heading>
          <p className="mt-5 text-lg text-fog">
            Requests are typically for teams of 3, 5 or 10 workers — or individual skilled
            specialists. Larger workforce requirements are planned with you individually.
          </p>

          <div className="mt-9 grid gap-3" aria-label="Typical crew sizes">
            {crews.map((crew, index) => (
              <Reveal
                key={crew.size}
                delay={index * 70}
                className={`grid grid-cols-[64px_1fr] items-center gap-5 rounded-[var(--radius-card)] border border-line bg-navy/80 p-3.5 transition-all duration-500 ease-[cubic-bezier(0.22,0.75,0.3,1)] hover:border-gold/50 hover:bg-navy lg:grid-cols-[88px_1fr] lg:px-5 lg:py-[18px] ${
                  crew.dashed ? 'border-dashed' : ''
                }`}
              >
                <b className="font-serif text-[32px] leading-none font-normal text-gold lg:text-[40px]">
                  {crew.size}
                  <small className="mt-1 block font-sans text-xs tracking-[0.12em] uppercase text-fog">
                    {crew.note}
                  </small>
                </b>
                <div className="flex flex-wrap gap-1.5" aria-hidden="true">
                  {Array.from({ length: crew.filled }).map((_, index) => (
                    <IconPerson key={`on-${index}`} className="h-[22px] w-4 text-gold lg:w-[22px]" />
                  ))}
                  {Array.from({ length: crew.dim }).map((_, index) => (
                    <IconPerson key={`dim-${index}`} className="h-[22px] w-4 text-cream/30 lg:w-[22px]" />
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Kicker>Pricing &amp; contracts</Kicker>
          <Heading className="lg:text-[56px] lg:leading-[1.02]">
            Quoted for <Em>your</Em> requirement.
          </Heading>
          <p className="mt-5 text-lg text-fog">
            There is no fixed price list. Every quote is prepared individually, based on:
          </p>

          <div className="mt-9 border-t border-line">
            {quoteFactors.map((factor, index) => (
              <Reveal
                key={factor.numeral}
                delay={index * 60}
                className="group grid grid-cols-[48px_1fr] gap-4 border-b border-line py-[22px] transition-colors duration-300 hover:border-gold/40"
              >
                <span className="font-serif text-[28px] leading-none text-gold transition-transform duration-300 group-hover:translate-x-1">{factor.numeral}</span>
                <div>
                  <h3 className="text-lg font-semibold">{factor.title}</h3>
                  <p className="mt-1 text-[15px] text-fog">{factor.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-[18px] text-sm text-fog">
            Contracts and commercial terms are agreed individually with each client.
          </p>
          <div className="mt-8">
            <ButtonLink href="#quote">Request a Workforce Quote</ButtonLink>
          </div>
        </div>
      </Wrap>
    </Section>
  )
}
