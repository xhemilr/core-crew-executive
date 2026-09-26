/* ------------------------------------------------------------------
   English — the source text for the whole site.

   mk.ts and sq.ts must have exactly the same shape: TypeScript checks
   them against the Dictionary type at the bottom of this file, so a
   missing or misspelt key fails the build.

   Conventions
   - *asterisks* mark the gold italic words in a heading.
   - Lists (sectors, steps, FAQs…) are matched by position with the
     non-text data in src/data/site.ts (icons, photos, numbers), so keep
     the order and the number of items the same in every language.
   ------------------------------------------------------------------ */

type StepText = { title: string; text: string; bullets?: string[] }

export const en = {
  /** <head>: browser tab, search results, link previews. */
  meta: {
    title: 'Core Crew Solutions | Workforce & Labor Supply North Macedonia',
    description:
      'Core Crew Solutions supplies dependable workers to companies in North Macedonia — every trade, every level, from helpers to certified engineers. Sourcing, documentation, work permit and accommodation handled by us.',
    keywords:
      'labor supply North Macedonia, workforce solutions North Macedonia, workforce provider, construction workers, foreign workers North Macedonia, hospitality workers, cooks and kitchen staff, maintenance workers, warehouse workers, staffing solutions',
    socialTitle: 'Core Crew Solutions | Workforce & Labor Supply North Macedonia',
    socialDescription:
      'Reliable workforce. Ready when you need it. Every trade, every level — paperwork, work permit and accommodation handled.',
    slogan: 'Reliable Workforce. Ready When You Need It.',
  },

  common: {
    skipToContent: 'Skip to content',
    requestQuote: 'Request a Workforce Quote',
  },

  company: {
    office: 'North Macedonia — address to be announced',
    registration: 'Registered in North Macedonia · Reg. no. [to be added]',
  },

  language: {
    change: 'Change language',
  },

  header: {
    homeLabel: 'Core Crew Solutions — home',
    navLabel: 'Main',
    cta: 'Request Workforce',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },

  nav: {
    solutions: 'Workforce Solutions',
    industries: 'Industries',
    process: 'For Employers',
    about: 'About Us',
    contact: 'Contact',
  },

  hero: {
    kicker: 'Workforce & labor supply — North Macedonia',
    title: 'Reliable workforce. *Ready when you need it.*',
    lead: 'Core Crew Solutions provides flexible workforce solutions to companies across North Macedonia, sourcing dependable workers according to real operational requirements.',
    talkToUs: 'Talk to us',
    imageAlt:
      'Two construction workers in hard hats and high-visibility vests overseeing a crane lift',
    captionTitle: 'From helpers to certified engineers.',
    captionText: 'Individual specialists or complete crews.',
  },

  quickStart: {
    formLabel: 'Start a workforce request',
    eyebrow: 'Quick start',
    title: 'Start a request',
    typeLabel: 'I need',
    levelLabel: 'Level',
    countLabel: 'Workers',
    startLabel: 'Start',
    submit: 'Continue',
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
    /** Same order as `levels`, written as they read in the quote form. */
    levelPhrases: [
      'Entry level',
      'Skilled level',
      'Senior level',
      'Supervisory level',
      'Professional level',
      'Mixed levels',
    ],
    /** What each worker-count button writes into the quote form (buttons show 3 · 5 · 10 · 10+). */
    counts: ['3', '5', '10', 'More than 10'],
    starts: ['ASAP', 'Within 3 months', '3–6 months', 'Later'],
  },

  facts: {
    label: 'At a glance',
    items: [
      {
        title: 'Helper',
        accent: '→',
        titleEnd: 'Engineer',
        text: 'Every level of experience, across many trades.',
      },
      {
        title: 'Fully',
        accent: 'handled',
        titleEnd: '',
        text: 'Documentation, work permit and accommodation — all by Core Crew.',
      },
      {
        title: '3 · 5 · 10',
        accent: '+',
        titleEnd: '',
        text: 'Crew sizes that start focused and scale with you.',
      },
      {
        title: 'India · Nepal ·',
        accent: 'Philippines',
        titleEnd: '',
        text: 'Where our workers are sourced.',
      },
    ],
  },

  matrix: {
    kicker: 'Workforce solutions',
    title: 'Every trade. *Every level.*',
    text: 'One table, the whole picture. Choose a sector and a level of experience — we source individual workers or complete teams to match.',
    caption: 'Worker profiles by sector and level of experience',
    sectorHeading: 'Sector',
    byLevel: 'By level →',
    levels: [
      { name: 'Entry', desc: 'Helpers' },
      { name: 'Skilled', desc: 'Tradespeople' },
      { name: 'Senior', desc: 'Specialists' },
      { name: 'Supervisory', desc: 'Foremen & leads' },
      { name: 'Professional', desc: 'Engineers' },
    ],
    /** One row per sector; five roles each, one per level (Entry → Professional). */
    sectors: [
      {
        name: 'Construction & civil',
        roles: [
          'Construction helpers, general labourers',
          'Masons, carpenters, steel fixers, tilers, plasterers, painters',
          'Welders, formwork specialists, equipment operators',
          'Foremen, site supervisors',
          'Civil & structural engineers, architects',
        ],
      },
      {
        name: 'Electrical',
        roles: [
          'Electrical helpers',
          'Installation electricians',
          'Industrial electricians, panel specialists',
          'Electrical foremen, technicians',
          'Certified electrical engineers',
        ],
      },
      {
        name: 'Hospitality & kitchen',
        roles: [
          'Kitchen helpers, dishwashers',
          'Commis cooks, waiters, housekeeping',
          'Cooks, chefs de partie',
          'Sous chefs, shift supervisors',
          'Head chefs, kitchen managers',
        ],
      },
      {
        name: 'Manufacturing',
        roles: [
          'Production helpers, packers',
          'Machine operators, assemblers',
          'CNC operators, welders, QC inspectors',
          'Line leaders, shift supervisors',
          'Production & mechanical engineers',
        ],
      },
      {
        name: 'Warehouse & logistics',
        roles: [
          'Warehouse helpers, pickers, loaders',
          'Forklift operators, storekeepers',
          'Truck drivers (C/CE), inventory controllers',
          'Warehouse team leaders',
          'Logistics coordinators',
        ],
      },
      {
        name: 'Maintenance & cleaning',
        roles: [
          'Cleaners, facility helpers',
          'Maintenance workers, handymen',
          'Plumbers, HVAC technicians',
          'Maintenance supervisors',
          'Facility & mechanical engineers',
        ],
      },
    ],
    moreTitle: 'Need a profile not listed here? *Tell us.*',
    moreText:
      'We match workers to the requirements of each assignment. Depending on the role, candidates may be reviewed for relevant experience, qualifications, skills, availability and documentation.',
    moreCta: 'Describe your need',
  },

  process: {
    kicker: 'For employers',
    title: 'From request to work permit. *Handled.*',
    text: 'Core Crew runs the entire process up to the work permit, completes all of the documentation and arranges accommodation for your workers. You focus on your operation — we deliver the people.',
    yourPart: 'Your part',
    employerPart: [
      'Tell us what you need',
      'Approve the final selection',
      'Welcome your crew on site',
    ],
    handledBy: 'Handled by Core Crew',
    who: { you: 'You', core: 'Core Crew' },
    steps: [
      {
        title: 'Share your requirements',
        text: 'Roles, level of experience, number of workers, work location, start date and duration.',
      },
      {
        title: 'Sourcing & selection',
        text: 'We source candidates from India, Nepal and the Philippines and match them to your role. You approve the final selection.',
      },
      {
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
        title: 'Work permit & accommodation',
        text: 'We manage the work permit process in accordance with applicable procedures, and arrange accommodation for your workers.',
      },
      {
        title: 'Your crew starts work',
        text: 'Workers arrive with housing arranged, ready to begin. You welcome them on site.',
      },
    ] as StepText[],
  },

  industries: {
    kicker: 'Industries',
    title: 'The sectors *we staff.*',
    text: 'Companies across North Macedonia rely on additional, dependable people to keep operations moving. We supply them — for a single role or a whole team.',
    cards: [
      {
        kicker: 'Construction & technical',
        title: 'Building & electrical',
        text: 'Site crews, tradespeople, electricians, foremen and engineers.',
        alt: 'Electrician testing wiring inside an electrical control panel',
      },
      {
        kicker: 'Hospitality',
        title: 'Hotels, restaurants & catering',
        text: 'Cooks, kitchen staff, housekeeping and service teams.',
        alt: 'Chefs in white uniforms preparing food in a professional kitchen',
      },
      {
        kicker: 'Industry & logistics',
        title: 'Production & warehousing',
        text: 'Operators, pickers, packers, drivers and line leaders.',
        alt: 'A forklift moving through a warehouse filled with pallets',
      },
    ],
    allSectors: 'All sectors we support',
    chips: [
      'Construction',
      'Maintenance & facility services',
      'Hospitality',
      'Restaurants & catering',
      'Manufacturing',
      'Warehousing',
      'Logistics',
      'Cleaning',
      'Production',
    ],
    other: '+ Other industries',
  },

  pricing: {
    crewKicker: 'Crew sizes',
    crewTitle: 'Start focused. *Scale when you’re ready.*',
    crewText:
      'Requests are typically for teams of 3, 5 or 10 workers — or individual skilled specialists. Larger workforce requirements are planned with you individually.',
    crewLabel: 'Typical crew sizes',
    workers: 'workers',
    orMore: 'or more',
    kicker: 'Pricing & contracts',
    title: 'Quoted for *your* requirement.',
    text: 'There is no fixed price list. Every quote is prepared individually, based on:',
    factors: [
      { title: 'Worker category', text: 'The trade and the level of experience required.' },
      { title: 'Number of workers', text: 'From individual specialists to complete teams.' },
      { title: 'Assignment duration', text: 'How long you need the workforce.' },
      { title: 'Operational requirements', text: 'Location, schedule and any special needs.' },
    ],
    contractsNote: 'Contracts and commercial terms are agreed individually with each client.',
  },

  about: {
    kicker: 'About us',
    title: 'A focused company, *built to scale.*',
    paragraphs: [
      'Core Crew Solutions DOOEL is a workforce and labor supply company registered in North Macedonia. We supply dependable workers to companies according to their real operational needs.',
      'We are starting with a focused operation and teams of typically 3 to 10 workers per request — with the structure to grow alongside larger workforce requirements.',
    ],
    values: [
      { title: 'Dependable', text: 'Workers matched to what each assignment actually requires.' },
      { title: 'Transparent', text: 'Clear responsibilities and individual quotes.' },
      { title: 'Compliant', text: 'In accordance with applicable procedures and regulations.' },
    ],
    sourcingKicker: 'Sourcing',
    sourcingTitle: 'Workers sourced internationally, for employers in North Macedonia.',
    /** Same order as the country codes in site.ts: IN, NP, PH. */
    countries: ['India', 'Nepal', 'Philippines'],
    sourcingCountry: 'Sourcing country',
    destinationTitle: 'Your company in North Macedonia',
    destinationText:
      'Workers delivered with documentation, work permit and accommodation handled',
    accommodationNote: 'Accommodation for the workers is arranged by Core Crew.',
  },

  faq: {
    kicker: 'Questions',
    title: 'Clear answers, *up front.*',
    whatsapp: 'Ask on WhatsApp',
    items: [
      {
        q: 'Who handles the paperwork and work permit?',
        a: 'We do. Core Crew Solutions runs the whole process up to the work permit and completes all required documentation, in accordance with applicable procedures and regulations.',
      },
      {
        q: 'What types of workers can you supply?',
        a: 'Every level — from helpers and general labourers to skilled tradespeople, foremen, engineers and architects — across construction, electrical, hospitality, manufacturing, logistics, maintenance and more.',
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
    ],
  },

  quote: {
    kicker: 'Contact',
    title: 'Request a *Workforce Quote.*',
    text: 'Tell us what you need. We’ll come back with a tailored proposal for your roles, team size and timeline.',
    phone: 'Phone',
    email: 'Email',
    whatsapp: 'WhatsApp',
    whatsappValue: 'Message us',
    office: 'Office',
    selectionLabel: 'Your selection:',
    workers: (count: string) => `${count} workers`,
    start: 'Start:',
    fields: {
      company: 'Company name',
      person: 'Contact person',
      phone: 'Phone',
      email: 'Email',
      type: 'Type of workers required',
      count: 'Number of workers',
      location: 'Work location',
      start: 'Expected start date',
      duration: 'Expected employment / assignment duration',
      notes: 'Additional requirements',
    },
    placeholders: {
      type: 'e.g. 5 skilled masons, 1 foreman',
      count: 'e.g. 5',
      location: 'City / site',
      start: 'e.g. March 2027',
      duration: 'e.g. 12 months',
      notes: 'Qualifications, languages, shifts, anything else…',
    },
    validation: {
      required: 'Please fill in this field.',
      email: 'Please enter a valid email address.',
    },
    sendNote: (email: string) =>
      `Sends your request to ${email} via your email app. We reply by email or phone.`,
    /** The email the form opens in the visitor's mail app. */
    mail: {
      subject: (company: string) => `Workforce quote request — ${company}`,
      company: 'Company',
      person: 'Contact person',
      phone: 'Phone',
      email: 'Email',
      type: 'Type of workers',
      count: 'Number of workers',
      location: 'Work location',
      start: 'Expected start',
      duration: 'Duration',
      notes: 'Additional requirements',
    },
  },

  footer: {
    topLabel: 'Core Crew Solutions — back to top',
    tagline: 'Reliable workforce. *Ready when you need it.*',
    company: 'Company',
    contact: 'Contact',
    legal: 'Legal',
    language: 'Language',
    office: 'Office: to be announced',
    legalLinks: ['Privacy Policy', 'Cookie Policy', 'Website Terms', 'Company information'],
    jobsTitle: 'Looking for work?',
    jobsText: 'Candidate registration is coming soon — meanwhile, contact us by email.',
    jobsSubject: 'Job seeker enquiry',
    photos: 'Photos: Unsplash',
  },

  mobileBar: {
    label: 'Quick contact',
    call: 'Call',
    whatsapp: 'WhatsApp',
    quote: 'Get a quote',
  },
}

export type Dictionary = typeof en
