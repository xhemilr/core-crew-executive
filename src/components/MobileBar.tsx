import { IconChat, IconPhone } from './ui/icons'
import { company } from '../data/site'

const item =
  'flex min-h-12 items-center justify-center gap-2 rounded-full border border-line text-[15px] font-semibold text-cream no-underline'

/** Fixed call / WhatsApp / quote bar, phones only. */
export function MobileBar() {
  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-60 grid grid-cols-[1fr_1fr_1.4fr] gap-2 border-t border-line bg-deep/90 px-3 py-2.5 backdrop-blur-xl md:hidden"
    >
      <a href={company.phoneHref} className={item}>
        <IconPhone className="h-[18px] w-[18px]" />
        Call
      </a>
      <a href={company.whatsapp} className={item}>
        <IconChat className="h-[18px] w-[18px]" />
        WhatsApp
      </a>
      <a href="#quote" className={`${item} border-gold bg-gold text-navy`}>
        Get a quote
      </a>
    </nav>
  )
}
