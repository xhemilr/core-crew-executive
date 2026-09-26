import { Heading, Kicker, Reveal, Rich, Section, Wrap } from './ui/Primitives'
import { IconArrowDown } from './ui/icons'
import { sourcingCodes } from '../data/site'
import { useLanguage } from '../i18n/context'

export function AboutSection() {
  const { t } = useLanguage()
  return (
    <Section id="about" tone="light">
      <Wrap className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <Kicker tone="light">{t.about.kicker}</Kicker>
          <Heading>
            <Rich text={t.about.title} tone="light" />
          </Heading>
          {t.about.paragraphs.map((paragraph, index) => (
            <p key={index} className={`${index === 0 ? 'mt-6' : 'mt-5'} text-lg text-ink-muted`}>
              {paragraph}
            </p>
          ))}

          <div className="mt-10 grid gap-5 border-t border-ivory-line pt-7 lg:grid-cols-3">
            {t.about.values.map((value, index) => (
              <div key={index}>
                <b className="block font-serif text-[26px] font-normal">{value.title}</b>
                <span className="mt-1.5 block text-sm leading-normal text-ink-muted">{value.text}</span>
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={120} className="rounded-[var(--radius-xl2)] bg-navy p-5 text-cream shadow-(--shadow-soft) ring-1 ring-white/5 md:p-9">
          <Kicker>{t.about.sourcingKicker}</Kicker>
          <h3 className="mt-3.5 font-serif text-[34px] leading-tight">
            {t.about.sourcingTitle}
          </h3>

          <div className="mt-6 grid gap-2.5">
            {sourcingCodes.map((code, index) => (
              <div
                key={code}
                className="grid grid-cols-[64px_1fr_28px] items-center gap-4 rounded-xl border border-line px-4 py-3.5 transition-colors duration-300 hover:border-gold/50 hover:bg-white/5"
              >
                <b className="font-serif text-[34px] leading-none font-normal text-gold">
                  {code}
                </b>
                <span>
                  <strong className="block font-semibold">{t.about.countries[index]}</strong>
                  <small className="text-[13px] text-fog">{t.about.sourcingCountry}</small>
                </span>
                <IconArrowDown className="h-[22px] w-[22px] text-fog" />
              </div>
            ))}
          </div>

          <div className="mt-2.5 grid grid-cols-[64px_1fr] items-center gap-4 rounded-xl bg-gold p-4 text-navy shadow-(--shadow-gold)">
            <b className="font-serif text-[34px] leading-none font-normal">MK</b>
            <span>
              <strong className="block font-bold">{t.about.destinationTitle}</strong>
              <small className="mt-0.5 block text-[13px] leading-snug">
                {t.about.destinationText}
              </small>
            </span>
          </div>

          <p className="mt-[18px] text-sm text-fog">
            {t.about.accommodationNote}
          </p>
        </Reveal>
      </Wrap>
    </Section>
  )
}
