import { Em, Heading, Kicker, Reveal, Section, Wrap } from './ui/Primitives'
import { IconArrowDown } from './ui/icons'
import { sourcingCountries, values } from '../data/site'

export function AboutSection() {
  return (
    <Section id="about" tone="light">
      <Wrap className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <Kicker tone="light">About us</Kicker>
          <Heading>
            A focused company, <Em tone="light">built to scale.</Em>
          </Heading>
          <p className="mt-6 text-lg text-ink-muted">
            Core Crew Solutions DOOEL is a workforce and labor supply company registered in North
            Macedonia. We supply dependable workers to companies according to their real operational
            needs.
          </p>
          <p className="mt-5 text-lg text-ink-muted">
            We are starting with a focused operation and teams of typically 3 to 10 workers per
            request — with the structure to grow alongside larger workforce requirements.
          </p>

          <div className="mt-10 grid gap-5 border-t border-ivory-line pt-7 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title}>
                <b className="block font-serif text-[26px] font-normal">{value.title}</b>
                <span className="mt-1.5 block text-sm leading-normal text-ink-muted">{value.text}</span>
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={120} className="rounded-[var(--radius-xl2)] bg-navy p-5 text-cream shadow-(--shadow-soft) ring-1 ring-white/5 md:p-9">
          <Kicker>Sourcing</Kicker>
          <h3 className="mt-3.5 font-serif text-[34px] leading-tight">
            Workers sourced internationally, for employers in North Macedonia.
          </h3>

          <div className="mt-6 grid gap-2.5">
            {sourcingCountries.map((country) => (
              <div
                key={country.code}
                className="grid grid-cols-[64px_1fr_28px] items-center gap-4 rounded-xl border border-line px-4 py-3.5 transition-colors duration-300 hover:border-gold/50 hover:bg-white/5"
              >
                <b className="font-serif text-[34px] leading-none font-normal text-gold">
                  {country.code}
                </b>
                <span>
                  <strong className="block font-semibold">{country.name}</strong>
                  <small className="text-[13px] text-fog">Sourcing country</small>
                </span>
                <IconArrowDown className="h-[22px] w-[22px] text-fog" />
              </div>
            ))}
          </div>

          <div className="mt-2.5 grid grid-cols-[64px_1fr] items-center gap-4 rounded-xl bg-gold p-4 text-navy shadow-(--shadow-gold)">
            <b className="font-serif text-[34px] leading-none font-normal">MK</b>
            <span>
              <strong className="block font-bold">Your company in North Macedonia</strong>
              <small className="mt-0.5 block text-[13px] leading-snug">
                Workers delivered with documentation, work permit and accommodation handled
              </small>
            </span>
          </div>

          <p className="mt-[18px] text-sm text-fog">
            Accommodation for the workers is arranged by Core Crew.
          </p>
        </Reveal>
      </Wrap>
    </Section>
  )
}
