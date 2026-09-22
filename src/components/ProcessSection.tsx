import { Em, Heading, Kicker, Reveal, Section, Wrap } from './ui/Primitives'
import { IconCheck, IconDot } from './ui/icons'
import { employerPart, steps } from '../data/site'

export function ProcessSection() {
  return (
    <Section id="process" glow="cool">
      <Wrap className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-[88px]">
        <div className="lg:sticky lg:top-[120px]">
          <Kicker>For employers</Kicker>
          <Heading>
            From request to work permit. <Em block>Handled.</Em>
          </Heading>
          <p className="mt-6 text-lg text-fog">
            Core Crew runs the entire process up to the work permit, completes all of the
            documentation and arranges accommodation for your workers. You focus on your operation —
            we deliver the people.
          </p>

          <div className="mt-9 rounded-[var(--radius-card)] border border-line bg-surface/70 px-7 py-6 backdrop-blur-sm">
            <h3 className="text-[13px] font-semibold tracking-[0.14em] uppercase text-gold">Your part</h3>
            <ul className="mt-3.5 grid gap-2.5">
              {employerPart.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-cream">
                  <IconDot className="mt-[3px] h-5 w-5 flex-none text-fog" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ol className="relative">
          {steps.map((step, index) => {
            const core = step.who === 'Core Crew'
            return (
              <Reveal
                as="li"
                key={step.num}
                delay={index * 60}
                className={`relative grid gap-1.5 py-6 pl-[22px] lg:grid-cols-[96px_1fr] lg:gap-6 lg:py-8 lg:pl-7 ${
                  core ? 'border-l-2 border-gold/80' : 'border-l border-line'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute top-10 h-3 w-3 rounded-full ${
                    core
                      ? '-left-2 border border-gold bg-gold shadow-[0_0_0_4px_rgba(212,176,98,0.18)]'
                      : '-left-[7px] border border-fog bg-navy'
                  }`}
                />
                {step.num === '02' && (
                  <span className="absolute -left-9 top-[34px] hidden rounded-full border border-gold/30 bg-gold/5 px-1.5 py-3 text-xs font-semibold whitespace-nowrap tracking-[0.2em] uppercase text-gold [writing-mode:vertical-rl] lg:block rotate-180">
                    Handled by Core Crew
                  </span>
                )}
                <span
                  className={`font-serif text-5xl leading-[0.9] lg:text-[64px] ${
                    core ? 'text-gold' : 'text-cream/30'
                  }`}
                >
                  {step.num}
                </span>
                <div>
                  <span
                    className={`inline-block px-2.5 py-[5px] text-xs font-bold tracking-[0.14em] uppercase ${
                      core ? 'bg-gold text-navy' : 'border border-line text-fog'
                    }`}
                  >
                    {step.who}
                  </span>
                  <h3 className="mt-2 font-serif text-[28px] leading-tight lg:text-[32px]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-fog">{step.text}</p>

                  {step.bullets && (
                    <ul className="mt-3.5 grid gap-2 lg:grid-cols-2 lg:gap-x-6">
                      {step.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5 text-[15px] text-cream">
                          <IconCheck className="mt-1 h-[18px] w-[18px] flex-none text-gold" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            )
          })}
        </ol>
      </Wrap>
    </Section>
  )
}
