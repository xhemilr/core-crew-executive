import { Rich, Wrap } from './ui/Primitives'
import { Brand } from './SiteHeader'
import { IconFacebook, IconInstagram, IconLinkedIn } from './ui/icons'
import { company, navLinks } from '../data/site'
import { useLanguage } from '../i18n/context'
import { LANGS, languages } from '../i18n/languages'

const socials = [
  { label: 'LinkedIn', Icon: IconLinkedIn },
  { label: 'Facebook', Icon: IconFacebook },
  { label: 'Instagram', Icon: IconInstagram },
]

const link = 'inline-block py-1 text-cream no-underline transition-colors duration-200 hover:text-gold'

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-4 text-xs font-semibold tracking-[0.16em] uppercase text-gold">{title}</h4>
      <ul className="grid gap-2.5 text-[15px]">{children}</ul>
    </div>
  )
}

export function SiteFooter() {
  const { lang, t, setLang, hrefFor } = useLanguage()

  return (
    <footer className="relative bg-deep pt-16 pb-7 text-fog">
      <span aria-hidden="true" className="rule-fade absolute inset-x-0 top-0 h-px" />
      <Wrap>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Brand label={t.footer.topLabel} />
            <p className="mt-6 max-w-[320px] font-serif text-[30px] leading-tight text-cream">
              <Rich text={t.footer.tagline} block />
            </p>
            <div className="mt-6 flex gap-2.5">
              {socials.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-line text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold/10 hover:text-gold"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <Column title={t.footer.company}>
            {navLinks.map((item) => (
              <li key={item.href}>
                <a className={link} href={item.href}>
                  {t.nav[item.key]}
                </a>
              </li>
            ))}
          </Column>

          <Column title={t.footer.contact}>
            <li>
              <a className={link} href={company.phoneHref}>
                {company.phone}
              </a>
            </li>
            <li>
              <a className={link} href={company.emailHref}>
                {company.email}
              </a>
            </li>
            <li>
              <a className={link} href={company.whatsapp}>
                WhatsApp
              </a>
            </li>
            <li>{t.footer.office}</li>
          </Column>

          <Column title={t.footer.legal}>
            {t.footer.legalLinks.map((label) => (
              <li key={label}>
                <a className={link} href="#">
                  {label}
                </a>
              </li>
            ))}
          </Column>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-y border-line py-[22px]">
          <p className="text-cream">
            {t.footer.jobsTitle} <span className="text-fog">{t.footer.jobsText}</span>
          </p>
          <a
            className="text-gold no-underline hover:text-gold-soft"
            href={`${company.emailHref}?subject=${encodeURIComponent(t.footer.jobsSubject)}`}
          >
            {company.email}
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 text-[13px]">
          <span>
            © {new Date().getFullYear()} {company.legalName} · {t.company.registration}
          </span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <nav aria-label={t.footer.language}>
              <ul className="flex items-center gap-1">
                {LANGS.map((code) => (
                  <li key={code}>
                    <a
                      href={hrefFor(code)}
                      hrefLang={code}
                      lang={code}
                      aria-current={code === lang ? 'true' : undefined}
                      onClick={(event) => {
                        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return
                        event.preventDefault()
                        setLang(code)
                      }}
                      className={`inline-block rounded-full px-2.5 py-1.5 no-underline transition-colors duration-200 ${
                        code === lang ? 'text-gold' : 'text-fog hover:text-cream'
                      }`}
                    >
                      {languages[code].name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <span>{t.footer.photos}</span>
          </div>
        </div>
      </Wrap>
    </footer>
  )
}
