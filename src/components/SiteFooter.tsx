import { Wrap } from './ui/Primitives'
import { Brand } from './SiteHeader'
import { IconFacebook, IconInstagram, IconLinkedIn } from './ui/icons'
import { company, footerLinks } from '../data/site'

const socials = [
  { label: 'LinkedIn', Icon: IconLinkedIn },
  { label: 'Facebook', Icon: IconFacebook },
  { label: 'Instagram', Icon: IconInstagram },
]

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-4 text-xs font-semibold tracking-[0.16em] uppercase text-gold">{title}</h4>
      <ul className="grid gap-2.5 text-[15px]">{children}</ul>
    </div>
  )
}

export function SiteFooter() {
  return (
    <footer className="relative bg-deep pt-16 pb-7 text-fog">
      <span aria-hidden="true" className="rule-fade absolute inset-x-0 top-0 h-px" />
      <Wrap>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Brand label="Core Crew Solutions — back to top" />
            <p className="mt-6 max-w-[320px] font-serif text-[30px] leading-tight text-cream">
              Reliable workforce. <em className="block italic text-gold">Ready when you need it.</em>
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

          <Column title="Company">
            {footerLinks.company.map((link) => (
              <li key={link.href}>
                <a className="inline-block py-1 text-cream no-underline transition-colors duration-200 hover:text-gold" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </Column>

          <Column title="Contact">
            <li>
              <a className="inline-block py-1 text-cream no-underline transition-colors duration-200 hover:text-gold" href={company.phoneHref}>
                {company.phone}
              </a>
            </li>
            <li>
              <a className="inline-block py-1 text-cream no-underline transition-colors duration-200 hover:text-gold" href={company.emailHref}>
                {company.email}
              </a>
            </li>
            <li>
              <a className="inline-block py-1 text-cream no-underline transition-colors duration-200 hover:text-gold" href={company.whatsapp}>
                WhatsApp
              </a>
            </li>
            <li>Office: to be announced</li>
          </Column>

          <Column title="Legal">
            {footerLinks.legal.map((link) => (
              <li key={link.label}>
                <a className="inline-block py-1 text-cream no-underline transition-colors duration-200 hover:text-gold" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </Column>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-y border-line py-[22px]">
          <p className="text-cream">
            Looking for work?{' '}
            <span className="text-fog">
              Candidate registration is coming soon — meanwhile, contact us by email.
            </span>
          </p>
          <a
            className="text-gold no-underline hover:text-gold-soft"
            href={`${company.emailHref}?subject=Job%20seeker%20enquiry`}
          >
            {company.email}
          </a>
        </div>

        <div className="mt-6 flex flex-wrap justify-between gap-3 text-[13px]">
          <span>
            © {new Date().getFullYear()} {company.legalName} · {company.registration}
          </span>
          <span>Photos: Unsplash</span>
        </div>
      </Wrap>
    </footer>
  )
}
