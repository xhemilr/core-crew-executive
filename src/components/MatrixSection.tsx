import { ButtonLink, Reveal, Rich, Section, SectionHead, Wrap } from './ui/Primitives'
import { levelPips, sectorIcons } from '../data/site'
import { useLanguage } from '../i18n/context'

function Pips({ on }: { on: number }) {
  return (
    <span className="mt-3 flex gap-1">
      {[1, 2, 3, 4, 5].map((index) => (
        <i key={index} className={`h-[3px] w-4 ${index <= on ? 'bg-gold' : 'bg-white/20'}`} />
      ))}
    </span>
  )
}

/**
 * Every sector against every level. A real table on desktop; below 820px each
 * sector becomes a card with the level name in front of each role list.
 */
export function MatrixSection() {
  const { t } = useLanguage()
  const { levels, sectors } = t.matrix
  return (
    <Section id="solutions" tone="light">
      <Wrap>
        <SectionHead
          tone="light"
          kicker={t.matrix.kicker}
          heading={<Rich text={t.matrix.title} tone="light" />}
          text={t.matrix.text}
        />

        <Reveal className="overflow-hidden rounded-[var(--radius-xl2)] border border-ivory-line bg-white shadow-[0_30px_70px_-50px_rgba(11,24,48,0.5)]">
          <table className="w-full table-fixed border-collapse break-words">
            <caption className="sr-only">{t.matrix.caption}</caption>
            <thead className="hidden tab:table-header-group">
              <tr>
                <th
                  scope="col"
                  className="w-[22%] border-b border-white/10 bg-navy p-[18px] text-left align-top text-cream"
                >
                  <span className="block text-[13px] tracking-[0.14em] uppercase text-gold">
                    {t.matrix.sectorHeading}
                  </span>
                  <span className="mt-1.5 block font-serif text-[22px] leading-tight">{t.matrix.byLevel}</span>
                </th>
                {levels.map((level, index) => (
                  <th
                    key={index}
                    scope="col"
                    className="border-b border-l border-white/10 bg-navy p-[18px] text-left align-top text-cream"
                  >
                    <span className="block text-[13px] tracking-[0.14em] uppercase text-gold">
                      {level.name}
                    </span>
                    <span className="mt-1.5 block font-serif text-[22px] leading-tight">{level.desc}</span>
                    <Pips on={levelPips[index]} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sectors.map(({ name, roles }, row) => {
                const Icon = sectorIcons[row]
                return (
                  <tr
                    key={row}
                    className="group block overflow-hidden rounded-[var(--radius-card)] border-b-8 border-ivory tab:table-row tab:rounded-none tab:border-b-0 tab:transition-colors tab:duration-200 tab:hover:bg-[#FBF8F1]"
                  >
                    <th
                      scope="row"
                      className="block bg-navy p-4 text-left align-top font-normal tab:table-cell tab:border-b tab:border-ivory-line tab:bg-transparent tab:p-[18px]"
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="h-[26px] w-[26px] flex-none text-gold transition-transform duration-300 group-hover:scale-110 tab:text-gold-ink" />
                        <b className="font-serif text-2xl leading-tight font-normal text-cream tab:text-ink">
                          {name}
                        </b>
                      </span>
                    </th>
                    {roles.map((role, index) => (
                      <td
                        key={index}
                        className={`grid grid-cols-[120px_1fr] gap-3 px-[18px] py-3 align-top text-[15px] leading-normal text-ink-soft tab:table-cell tab:border-b tab:border-l tab:border-ivory-line tab:p-[18px] ${
                          index === 4 ? 'bg-[#F8F3E6] tab:shadow-[inset_3px_0_0_var(--color-gold)]' : ''
                        }`}
                      >
                        <span className="text-xs font-bold tracking-[0.12em] uppercase text-gold-ink tab:hidden">
                          {levels[index].name}
                        </span>
                        <span>{role}</span>
                      </td>
                    ))}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </Reveal>

        <div className="mt-9 grid items-center gap-4 lg:grid-cols-[1fr_1fr_auto] lg:gap-10">
          <h3 className="font-serif text-[30px] leading-tight">
            <Rich text={t.matrix.moreTitle} tone="light" />
          </h3>
          <p className="text-[15px] text-ink-muted">
            {t.matrix.moreText}
          </p>
          <ButtonLink variant="navy" href="#quote">
            {t.matrix.moreCta}
          </ButtonLink>
        </div>
      </Wrap>
    </Section>
  )
}
