import type { ComponentType } from 'react'
import {
  IconBolt,
  IconHardHat,
  IconKitchen,
  IconFactory,
  IconTruck,
  IconWrench,
} from '../components/ui/icons'

/* ------------------------------------------------------------------
   All site content lives here, so copy and contact details can be
   changed in one place without touching any component.
   ------------------------------------------------------------------ */

export const company = {
  name: 'Core Crew Solutions',
  legalName: 'Core Crew Solutions DOOEL',
  tagline: 'Reliable workforce. Ready when you need it.',
  phone: '+389 70 968 868',
  phoneHref: 'tel:+38970968868',
  email: 'info@corecrew-solutions.com',
  emailHref: 'mailto:info@corecrew-solutions.com',
  whatsapp: 'https://wa.me/38970968868',
  office: 'North Macedonia — address to be announced',
  registration: 'Registered in North Macedonia · Reg. no. [to be added]',
}

export const navLinks = [
  { href: '#solutions', label: 'Workforce Solutions' },
  { href: '#industries', label: 'Industries' },
  { href: '#process', label: 'For Employers' },
  { href: '#about', label: 'About Us' },
  { href: '#quote', label: 'Contact' },
]

export const facts = [
  {
    title: 'Helper',
    accent: '→',
    titleEnd: 'Engineer',
    text: 'Every level of experience, across many trades.',
  },
  {
    title: 'Fully',
    accent: 'handled',
    text: 'Documentation, work permit and accommodation — all by Core Crew.',
  },
  {
    title: '3 · 5 · 10',
    accent: '+',
    text: 'Crew sizes that start focused and scale with you.',
  },
  {
    title: 'India · Nepal ·',
    accent: 'Philippines',
    text: 'Where our workers are sourced.',
  },
]

export const levels = [
  { name: 'Entry', desc: 'Helpers', pips: 1 },
  { name: 'Skilled', desc: 'Tradespeople', pips: 2 },
  { name: 'Senior', desc: 'Specialists', pips: 3 },
  { name: 'Supervisory', desc: 'Foremen & leads', pips: 4 },
  { name: 'Professional', desc: 'Engineers', pips: 5 },
]

export type SectorRow = {
  sector: string
  Icon: ComponentType<{ className?: string }>
  roles: string[]
}

export const matrix: SectorRow[] = [
  {
    sector: 'Construction & civil',
    Icon: IconHardHat,
    roles: [
      'Construction helpers, general labourers',
      'Masons, carpenters, steel fixers, tilers, plasterers, painters',
      'Welders, formwork specialists, equipment operators',
      'Foremen, site supervisors',
      'Civil & structural engineers, architects',
    ],
  },
  {
    sector: 'Electrical',
    Icon: IconBolt,
    roles: [
      'Electrical helpers',
      'Installation electricians',
      'Industrial electricians, panel specialists',
      'Electrical foremen, technicians',
      'Certified electrical engineers',
    ],
  },
  {
    sector: 'Hospitality & kitchen',
    Icon: IconKitchen,
    roles: [
      'Kitchen helpers, dishwashers',
      'Commis cooks, waiters, housekeeping',
      'Cooks, chefs de partie',
      'Sous chefs, shift supervisors',
      'Head chefs, kitchen managers',
    ],
  },
  {
    sector: 'Manufacturing',
    Icon: IconFactory,
    roles: [
      'Production helpers, packers',
      'Machine operators, assemblers',
      'CNC operators, welders, QC inspectors',
      'Line leaders, shift supervisors',
      'Production & mechanical engineers',
    ],
  },
  {
    sector: 'Warehouse & logistics',
    Icon: IconTruck,
    roles: [
      'Warehouse helpers, pickers, loaders',
      'Forklift operators, storekeepers',
      'Truck drivers (C/CE), inventory controllers',
      'Warehouse team leaders',
      'Logistics coordinators',
    ],
  },
  {
    sector: 'Maintenance & cleaning',
    Icon: IconWrench,
    roles: [
      'Cleaners, facility helpers',
      'Maintenance workers, handymen',
      'Plumbers, HVAC technicians',
      'Maintenance supervisors',
      'Facility & mechanical engineers',
    ],
  },
]

export type Step = {
  num: string
  who: 'You' | 'Core Crew'
  title: string
  text: string
  bullets?: string[]
}

export const steps: Step[] = [
  {
    num: '01',
    who: 'You',
    title: 'Share your requirements',
    text: 'Roles, level of experience, number of workers, work location, start date and duration.',
  },
  {
    num: '02',
    who: 'Core Crew',
    title: 'Sourcing & selection',
    text: 'We source candidates from India, Nepal and the Philippines and match them to your role. You approve the final selection.',
  },
  {
    num: '03',
    who: 'Core Crew',
    title: 'All documentation',
    text: 'We prepare and complete the required documents for every worker.',
    bullets: [
      'Candidate documents',
      'Qualification checks where applicable',
      'Employment paperwork',
      'Updates at every stage',
    ],
  },
  {
    num: '04',
    who: 'Core Crew',
    title: 'Work permit & accommodation',
    text: 'We manage the work permit process in accordance with applicable procedures, and arrange accommodation for your workers.',
  },
  {
    num: '05',
    who: 'You',
    title: 'Your crew starts work',
    text: 'Workers arrive with housing arranged, ready to begin. You welcome them on site.',
  },
]

export const employerPart = [
  'Tell us what you need',
  'Approve the final selection',
  'Welcome your crew on site',
]

export const industryCards = [
  {
    kicker: 'Construction & technical',
    title: 'Building & electrical',
    text: 'Site crews, tradespeople, electricians, foremen and engineers.',
    img: 'https://images.unsplash.com/photo-1758101755915-462eddc23f57?auto=format&fit=crop&w=800&q=75',
    alt: 'Electrician testing wiring inside an electrical control panel',
  },
  {
    kicker: 'Hospitality',
    title: 'Hotels, restaurants & catering',
    text: 'Cooks, kitchen staff, housekeeping and service teams.',
    img: 'https://images.unsplash.com/photo-1726992117805-6b3c5a8ebd3f?auto=format&fit=crop&w=800&q=75',
    alt: 'Chefs in white uniforms preparing food in a professional kitchen',
  },
  {
    kicker: 'Industry & logistics',
    title: 'Production & warehousing',
    text: 'Operators, pickers, packers, drivers and line leaders.',
    img: 'https://images.unsplash.com/photo-1645736315000-6f788915923b?auto=format&fit=crop&w=800&q=75',
    alt: 'A forklift moving through a warehouse filled with pallets',
  },
]

export const sectorChips = [
  'Construction',
  'Maintenance & facility services',
  'Hospitality',
  'Restaurants & catering',
  'Manufacturing',
  'Warehousing',
  'Logistics',
  'Cleaning',
  'Production',
]

export const crews = [
  { size: '3', note: 'workers', filled: 3, dim: 0 },
  { size: '5', note: 'workers', filled: 5, dim: 0 },
  { size: '10', note: 'workers', filled: 10, dim: 0 },
  { size: '10+', note: 'or more', filled: 3, dim: 3, dashed: true },
]

export const quoteFactors = [
  {
    numeral: 'i',
    title: 'Worker category',
    text: 'The trade and the level of experience required.',
  },
  {
    numeral: 'ii',
    title: 'Number of workers',
    text: 'From individual specialists to complete teams.',
  },
  {
    numeral: 'iii',
    title: 'Assignment duration',
    text: 'How long you need the workforce.',
  },
  {
    numeral: 'iv',
    title: 'Operational requirements',
    text: 'Location, schedule and any special needs.',
  },
]

export const values = [
  { title: 'Dependable', text: 'Workers matched to what each assignment actually requires.' },
  { title: 'Transparent', text: 'Clear responsibilities and individual quotes.' },
  { title: 'Compliant', text: 'In accordance with applicable procedures and regulations.' },
]

export const sourcingCountries = [
  { code: 'IN', name: 'India' },
  { code: 'NP', name: 'Nepal' },
  { code: 'PH', name: 'Philippines' },
]

export const faqs = [
  {
    q: 'Who handles the paperwork and work permit?',
    a: 'We do. Core Crew Solutions runs the whole process up to the work permit and completes all required documentation, in accordance with applicable procedures and regulations.',
    open: true,
  },
  {
    q: 'What types of workers can you supply?',
    a: 'Every level — from helpers and general labourers to skilled tradespeople, foremen, engineers and architects — across construction, electrical, hospitality, manufacturing, logistics, maintenance and more.',
    open: true,
  },
  {
    q: 'How many workers can I request?',
    a: 'Typically teams of 3, 5 or 10 workers, as well as individual skilled workers. Larger requirements are discussed individually.',
  },
  {
    q: 'Where do the workers come from?',
    a: 'Workers are mainly sourced internationally from India, Nepal and the Philippines.',
  },
  {
    q: 'Who arranges accommodation?',
    a: 'We do. Core Crew arranges accommodation for your workers, so they arrive with housing ready.',
  },
  {
    q: 'How much does it cost?',
    a: 'Pricing is prepared individually according to worker category, number of workers, assignment duration and operational requirements.',
  },
  {
    q: 'How long does the process take?',
    a: 'It depends on the roles, the number of workers and permit processing. We give you a realistic timeline together with your quote.',
  },
  {
    q: 'Can I request a role that isn’t listed?',
    a: 'Yes. Tell us what you need — we source workers according to your operational requirements.',
  },
]

export const quickStart = {
  types: [
    'Construction',
    'Electrical',
    'Hospitality',
    'Manufacturing',
    'Logistics',
    'Maintenance',
    'Other / mixed',
  ],
  levels: ['Entry', 'Skilled', 'Senior', 'Supervisory', 'Professional', 'Mixed levels'],
  counts: [
    { value: '3', label: '3' },
    { value: '5', label: '5' },
    { value: '10', label: '10' },
    { value: 'More than 10', label: '10+' },
  ],
  starts: ['ASAP', 'Within 3 months', '3–6 months', 'Later'],
}

export const footerLinks = {
  company: navLinks,
  legal: [
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Cookie Policy' },
    { href: '#', label: 'Website Terms' },
    { href: '#', label: 'Company information' },
  ],
}
