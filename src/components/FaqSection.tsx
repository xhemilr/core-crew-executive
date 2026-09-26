import { ButtonLink, Heading, Kicker, Reveal, Rich, Section, Wrap } from './ui/Primitives'
import { IconPlus } from './ui/icons'
import { company, faqOpen } from '../data/site'
import { useLanguage } from '../i18n/context'

export function FaqSection() {
  const { t } = useLanguage()
  return (
    <Section id="faq" glow="gold">
      <Wrap>
        <div className="mb-11 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Kicker>{t.faq.kicker}</Kicker>
            <Heading>
              <Rich text={t.faq.title} />
            </Heading>
          </div>
          <ButtonLink variant="line" href={company.whatsapp}>
            {t.faq.whatsapp}
          </ButtonLink>
        </div>

        <Reveal className="grid border-t border-line lg:grid-cols-2 lg:gap-x-14">
          {t.faq.items.map((faq, index) => (
            <details
              key={index}
              open={faqOpen[index]}
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
