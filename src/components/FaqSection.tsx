import { ButtonLink, Em, Heading, Kicker, Reveal, Section, Wrap } from './ui/Primitives'
import { IconPlus } from './ui/icons'
import { company, faqs } from '../data/site'

export function FaqSection() {
  return (
    <Section id="faq" glow="gold">
      <Wrap>
        <div className="mb-11 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Kicker>Questions</Kicker>
            <Heading>
              Clear answers, <Em>up front.</Em>
            </Heading>
          </div>
          <ButtonLink variant="line" href={company.whatsapp}>
            Ask on WhatsApp
          </ButtonLink>
        </div>

        <Reveal className="grid border-t border-line lg:grid-cols-2 lg:gap-x-14">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              open={faq.open}
              className="group border-b border-line transition-colors duration-300 hover:border-gold/40"
            >
              <summary className="flex min-h-[44px] cursor-pointer items-center justify-between gap-5 py-6 font-serif text-[22px] leading-snug transition-colors duration-200 group-hover:text-gold lg:text-[25px]">
                {faq.q}
                <i className="grid h-9 w-9 flex-none place-items-center rounded-full border border-line text-gold transition-all duration-300 group-hover:border-gold group-hover:bg-gold/10 group-open:rotate-45 group-open:border-gold">
                  <IconPlus className="h-4 w-4" />
                </i>
              </summary>
              <p className="pr-10 pb-6 text-fog">{faq.a}</p>
            </details>
          ))}
        </Reveal>
      </Wrap>
    </Section>
  )
}
