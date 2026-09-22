import { Em, Reveal, Section, SectionHead, Wrap } from './ui/Primitives'
import { industryCards, sectorChips } from '../data/site'

export function IndustriesSection() {
  return (
    <Section id="industries" tone="light">
      <Wrap>
        <SectionHead
          tone="light"
          kicker="Industries"
          heading={
            <>
              The sectors <Em tone="light">we staff.</Em>
            </>
          }
          text="Companies across North Macedonia rely on additional, dependable people to keep operations moving. We supply them — for a single role or a whole team."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industryCards.map((card, index) => (
            <Reveal
              as="article"
              key={card.title}
              delay={index * 90}
              className="group flex flex-col overflow-hidden rounded-[var(--radius-xl2)] border border-ivory-line bg-white transition-all duration-500 ease-[cubic-bezier(0.22,0.75,0.3,1)] hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-[0_28px_60px_-40px_rgba(11,24,48,0.65)]"
            >
              <div className="overflow-hidden">
                <img
                  src={card.img}
                  alt={card.alt}
                  loading="lazy"
                  width={800}
                  height={560}
                  className="block h-[220px] w-full bg-ivory-2 object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,0.75,0.3,1)] group-hover:scale-[1.06] lg:h-[280px]"
                />
              </div>
              <div className="px-6 pt-6 pb-7">
                <span className="text-xs font-semibold tracking-[0.14em] uppercase text-gold-ink">
                  {card.kicker}
                </span>
                <h3 className="mt-2 font-serif text-[32px] leading-tight">{card.title}</h3>
                <p className="mt-2.5 text-[15px] text-ink-muted">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid items-start gap-6 border-t border-ivory-line pt-8 lg:grid-cols-[200px_1fr]">
          <h3 className="font-serif text-[26px] leading-tight">All sectors we support</h3>
          <ul className="flex flex-wrap gap-2.5">
            {sectorChips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-ivory-line bg-white px-4 py-2.5 text-[15px] font-medium transition-colors duration-200 hover:border-gold hover:bg-gold/10"
              >
                {chip}
              </li>
            ))}
            <li className="rounded-full border border-navy bg-navy px-4 py-2.5 text-[15px] font-medium text-cream">
              + Other industries
            </li>
          </ul>
        </div>
      </Wrap>
    </Section>
  )
}
