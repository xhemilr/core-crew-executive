import type { ComponentType } from 'react'
import {
  IconBolt,
  IconHardHat,
  IconKitchen,
  IconFactory,
  IconTruck,
  IconWrench,
} from '../components/ui/icons'
import type { Dictionary } from '../i18n/dictionaries'

/* ------------------------------------------------------------------
   Everything on the page that is NOT text: contact details, icons,
   photos, crew sizes. The words live in src/i18n/en.ts, mk.ts, sq.ts.

   Lists here line up by position with the matching lists in the
   dictionaries (6 sectors, 5 steps, 3 industry photos, …).
   ------------------------------------------------------------------ */

export { company } from './company'

export const navLinks: { href: string; key: keyof Dictionary['nav'] }[] = [
  { href: '#solutions', key: 'solutions' },
  { href: '#industries', key: 'industries' },
  { href: '#process', key: 'process' },
  { href: '#about', key: 'about' },
  { href: '#quote', key: 'contact' },
]

/** How many gold pips each level shows in the table header (Entry → Professional). */
export const levelPips = [1, 2, 3, 4, 5]

/** Icons for the sector rows, same order as `matrix.sectors` in the dictionaries. */
export const sectorIcons: ComponentType<{ className?: string }>[] = [
  IconHardHat,
  IconBolt,
  IconKitchen,
  IconFactory,
  IconTruck,
  IconWrench,
]

/** Process steps: number and who does the step, same order as `process.steps`. */
export const steps: { num: string; who: 'you' | 'core' }[] = [
  { num: '01', who: 'you' },
  { num: '02', who: 'core' },
  { num: '03', who: 'core' },
  { num: '04', who: 'core' },
  { num: '05', who: 'you' },
]

/** Photos for the three industry cards, same order as `industries.cards`. */
export const industryImages = [
  'https://images.unsplash.com/photo-1758101755915-462eddc23f57?auto=format&fit=crop&w=800&q=75',
  'https://images.unsplash.com/photo-1726992117805-6b3c5a8ebd3f?auto=format&fit=crop&w=800&q=75',
  'https://images.unsplash.com/photo-1645736315000-6f788915923b?auto=format&fit=crop&w=800&q=75',
]

export const heroImage =
  'https://images.unsplash.com/photo-1751054720514-067105f538d4?auto=format&fit=crop&w=1000&q=75'

/** Crew-size rows. `more` rows use the "or more" caption instead of "workers". */
export const crews = [
  { size: '3', filled: 3, dim: 0 },
  { size: '5', filled: 5, dim: 0 },
  { size: '10', filled: 10, dim: 0 },
  { size: '10+', filled: 3, dim: 3, more: true },
]

export const quoteNumerals = ['i', 'ii', 'iii', 'iv']

/** Sourcing country codes, same order as `about.countries`. */
export const sourcingCodes = ['IN', 'NP', 'PH']

/** FAQ items shown open on load (by position). */
export const faqOpen = [true, true, false, false, false, false, false, false]

/** Labels on the worker-count buttons; the dictionaries say what each one means. */
export const countLabels = ['3', '5', '10', '10+']
