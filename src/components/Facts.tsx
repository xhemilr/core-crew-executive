import { Reveal, Wrap } from './ui/Primitives'
import { useLanguage } from '../i18n/context'

export function Facts() {
  const { t } = useLanguage()
  return (
    <section aria-label={t.facts.label} className="relative py-16 lg:py-24">
      <span aria-hidden="true" className="rule-fade absolute inset-x-0 bottom-0 h-px" />
      <Wrap className="grid gap-3 lg:grid-cols-4 lg:gap-4">
        {t.facts.items.map((fact, index) => (
          <Reveal
            key={index}
            delay={index * 80}
            className="group rounded-[var(--radius-card)] border border-line/60 bg-surface/40 p-5 transition-all duration-500 ease-[cubic-bezier(0.22,0.75,0.3,1)] hover:-translate-y-1 hover:border-gold/50 hover:bg-surface/70 hover:shadow-(--shadow-lift) lg:p-6"
          >
            <b className="block font-serif text-[30px] leading-tight font-normal lg:text-[34px]">
              {fact.title} <span className="text-gold">{fact.accent}</span>
              {fact.titleEnd ? ` ${fact.titleEnd}` : ''}
            </b>
            <span className="mt-2.5 block text-[15px] leading-normal text-fog">{fact.text}</span>
          </Reveal>
        ))}
      </Wrap>
    </section>
  )
}
