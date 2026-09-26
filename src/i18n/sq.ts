import type { Dictionary } from './en.ts'

/* Shqip — same shape and order as en.ts. */

export const sq: Dictionary = {
  meta: {
    title: 'Core Crew Solutions | Furnizim me fuqi punëtore në Maqedoninë e Veriut',
    description:
      'Core Crew Solutions u siguron kompanive në Maqedoninë e Veriut punëtorë të besueshëm — çdo zanat, çdo nivel, nga ndihmësit deri te inxhinierët e certifikuar. Rekrutimin, dokumentacionin, lejen e punës dhe akomodimin i marrim përsipër ne.',
    keywords:
      'fuqi punëtore Maqedonia e Veriut, furnizim me fuqi punëtore, punësim punëtorësh, punëtorë të huaj Maqedonia e Veriut, punëtorë ndërtimi, punëtorë për hoteleri, kuzhinierë dhe staf kuzhine, punëtorë mirëmbajtjeje, punëtorë magazine, zgjidhje punësimi',
    socialTitle: 'Core Crew Solutions | Furnizim me fuqi punëtore në Maqedoninë e Veriut',
    socialDescription:
      'Fuqi punëtore e besueshme. Gati kur ju nevojitet. Çdo zanat, çdo nivel — dokumentet, leja e punës dhe akomodimi janë në kujdesin tonë.',
    slogan: 'Fuqi punëtore e besueshme. Gati kur ju nevojitet.',
  },

  common: {
    skipToContent: 'Kalo te përmbajtja',
    requestQuote: 'Kërkoni ofertë',
  },

  company: {
    office: 'Maqedonia e Veriut — adresa do të njoftohet',
    registration: 'E regjistruar në Maqedoninë e Veriut · Nr. i regjistrimit [do të shtohet]',
  },

  language: {
    change: 'Zgjidhni gjuhën',
  },

  header: {
    homeLabel: 'Core Crew Solutions — faqja kryesore',
    navLabel: 'Menyja kryesore',
    cta: 'Kërkoni punëtorë',
    openMenu: 'Hap menynë',
    closeMenu: 'Mbyll menynë',
  },

  nav: {
    solutions: 'Fuqia punëtore',
    industries: 'Industritë',
    process: 'Për punëdhënësit',
    about: 'Rreth nesh',
    contact: 'Kontakt',
  },

  hero: {
    kicker: 'Furnizim me fuqi punëtore — Maqedonia e Veriut',
    // \u00a0 = non-breaking space: keeps “e” on the line with “besueshme”
    title: 'Fuqi punëtore e\u00a0besueshme. *Gati kur ju nevojitet.*',
    lead: 'Core Crew Solutions u ofron kompanive në të gjithë Maqedoninë e Veriut zgjidhje fleksibile për fuqi punëtore, duke siguruar punëtorë të besueshëm sipas nevojave reale operative.',
    talkToUs: 'Na telefononi',
    imageAlt:
      'Dy punëtorë ndërtimi me helmeta mbrojtëse dhe jelekë reflektues duke mbikëqyrur ngritjen e një ngarkese me vinç',
    captionTitle: 'Nga ndihmësit deri te inxhinierët e certifikuar.',
    captionText: 'Specialistë individualë ose ekipe të plota.',
  },

  quickStart: {
    formLabel: 'Filloni një kërkesë për punëtorë',
    eyebrow: 'Fillim i shpejtë',
    title: 'Filloni një kërkesë',
    typeLabel: 'Sektori',
    levelLabel: 'Niveli',
    countLabel: 'Punëtorë',
    startLabel: 'Fillimi',
    submit: 'Vazhdoni',
    types: [
      'Ndërtim',
      'Instalime elektrike',
      'Hoteleri',
      'Prodhim',
      'Logjistikë',
      'Mirëmbajtje',
      'Tjetër / e kombinuar',
    ],
    levels: [
      'Fillestar',
      'I kualifikuar',
      'I avancuar',
      'Mbikëqyrës',
      'Profesional',
      'Nivele të përziera',
    ],
    levelPhrases: [
      'Nivel fillestar',
      'Nivel i kualifikuar',
      'Nivel i avancuar',
      'Nivel mbikëqyrës',
      'Nivel profesional',
      'Nivele të përziera',
    ],
    counts: ['3', '5', '10', 'Më shumë se 10'],
    starts: ['Sa më shpejt', 'Brenda 3 muajve', 'Pas 3–6 muajsh', 'Më vonë'],
  },

  facts: {
    label: 'Me një shikim',
    items: [
      {
        title: 'Ndihmës',
        accent: '→',
        titleEnd: 'Inxhinier',
        text: 'Çdo nivel përvoje, në shumë zanate.',
      },
      {
        title: 'Gjithçka',
        accent: 'e rregulluar',
        titleEnd: '',
        text: 'Dokumentacioni, leja e punës dhe akomodimi — të gjitha nga Core Crew.',
      },
      {
        title: '3 · 5 · 10',
        accent: '+',
        titleEnd: '',
        text: 'Ekipe që fillojnë të vogla dhe rriten bashkë me ju.',
      },
      {
        title: 'India · Nepali ·',
        accent: 'Filipinet',
        titleEnd: '',
        text: 'Vendet nga ku rekrutojmë punëtorët tanë.',
      },
    ],
  },

  matrix: {
    kicker: 'Zgjidhje për fuqi punëtore',
    title: 'Çdo zanat. *Çdo nivel.*',
    text: 'Një tabelë, e gjithë pamja. Zgjidhni një sektor dhe një nivel përvoje — ne sigurojmë punëtorë individualë ose ekipe të plota sipas nevojës suaj.',
    caption: 'Profilet e punëtorëve sipas sektorit dhe nivelit të përvojës',
    sectorHeading: 'Sektori',
    byLevel: 'Sipas nivelit →',
    levels: [
      { name: 'Fillestar', desc: 'Ndihmës' },
      { name: 'I kualifikuar', desc: 'Mjeshtër' },
      { name: 'I avancuar', desc: 'Specialistë' },
      { name: 'Mbikëqyrës', desc: 'Kryepunëtorë dhe drejtues' },
      { name: 'Profesional', desc: 'Inxhinierë' },
    ],
    sectors: [
      {
        name: 'Ndërtim dhe punë civile',
        roles: [
          'Ndihmës ndërtimi, punëtorë të përgjithshëm',
          'Muratorë, marangozë, hekurkthyes, pllakashtrues, suvatues, bojaxhinj',
          'Saldatorë, specialistë kallëpesh, operatorë makinerish',
          'Kryepunëtorë, mbikëqyrës kantieri',
          'Inxhinierë ndërtimi dhe konstruktorë, arkitektë',
        ],
      },
      {
        name: 'Instalime elektrike',
        roles: [
          'Ndihmës elektricistë',
          'Elektricistë për instalime',
          'Elektricistë industrialë, specialistë për kuadro elektrike',
          'Kryepunëtorë elektrikë, teknikë',
          'Inxhinierë elektrikë të certifikuar',
        ],
      },
      {
        name: 'Hoteleri dhe kuzhinë',
        roles: [
          'Ndihmës kuzhine, larës enësh',
          'Kuzhinierë ndihmës, kamarierë, pastrues dhomash',
          'Kuzhinierë, shefa seksioni',
          'Zëvendësshefa kuzhine, mbikëqyrës turni',
          'Kryekuzhinierë, menaxherë kuzhine',
        ],
      },
      {
        name: 'Prodhim',
        roles: [
          'Ndihmës prodhimi, paketues',
          'Operatorë makinash, montues',
          'Operatorë CNC, saldatorë, kontrollues cilësie',
          'Drejtues linje, mbikëqyrës turni',
          'Inxhinierë prodhimi dhe inxhinierë mekanikë',
        ],
      },
      {
        name: 'Magazinim dhe logjistikë',
        roles: [
          'Ndihmës magazine, mbledhës porosish, ngarkues',
          'Operatorë forklifti, magazinierë',
          'Shoferë kamioni (C/CE), kontrollues inventari',
          'Drejtues ekipesh në magazinë',
          'Koordinatorë logjistike',
        ],
      },
      {
        name: 'Mirëmbajtje dhe pastrim',
        roles: [
          'Pastrues, ndihmës për objektet',
          'Punëtorë mirëmbajtjeje, mjeshtër për riparime',
          'Hidraulikë, teknikë ngrohjeje dhe klimatizimi (HVAC)',
          'Mbikëqyrës mirëmbajtjeje',
          'Inxhinierë objektesh dhe inxhinierë mekanikë',
        ],
      },
    ],
    moreTitle: 'Keni nevojë për një profil që nuk është në listë? *Na tregoni.*',
    moreText:
      'Punëtorët i përzgjedhim sipas kërkesave të çdo angazhimi. Në varësi të pozitës, kandidatët mund të vlerësohen për përvojën përkatëse, kualifikimet, aftësitë, disponueshmërinë dhe dokumentacionin.',
    moreCta: 'Përshkruani nevojën tuaj',
  },

  process: {
    kicker: 'Për punëdhënësit',
    title: 'Nga kërkesa deri te leja e punës. *Ne kujdesemi.*',
    text: 'Core Crew e drejton të gjithë procesin deri te leja e punës, plotëson të gjithë dokumentacionin dhe organizon akomodimin për punëtorët tuaj. Ju përqendroheni te veprimtaria juaj — ne ju sjellim njerëzit.',
    yourPart: 'Pjesa juaj',
    employerPart: [
      'Na tregoni çfarë ju nevojitet',
      'Miratoni përzgjedhjen përfundimtare',
      'Mirëpritni ekipin tuaj në vendin e punës',
    ],
    handledBy: 'Në kujdesin e Core Crew',
    who: { you: 'Ju', core: 'Core Crew' },
    steps: [
      {
        title: 'Na dërgoni kërkesat tuaja',
        text: 'Pozitat, niveli i përvojës, numri i punëtorëve, vendi i punës, data e fillimit dhe kohëzgjatja.',
      },
      {
        title: 'Rekrutimi dhe përzgjedhja',
        text: 'Gjejmë kandidatë nga India, Nepali dhe Filipinet dhe i përshtatim me pozitën tuaj. Ju e miratoni përzgjedhjen përfundimtare.',
      },
      {
        title: 'I gjithë dokumentacioni',
        text: 'Përgatisim dhe plotësojmë dokumentet e nevojshme për çdo punëtor.',
        bullets: [
          'Dokumentet e kandidatëve',
          'Verifikimi i kualifikimeve, kur është e nevojshme',
          'Dokumentacioni i punësimit',
          'Njoftime në çdo fazë',
        ],
      },
      {
        title: 'Leja e punës dhe akomodimi',
        text: 'E menaxhojmë procesin e lejes së punës në përputhje me procedurat në fuqi dhe organizojmë akomodimin për punëtorët tuaj.',
      },
      {
        title: 'Ekipi juaj fillon punën',
        text: 'Punëtorët mbërrijnë me akomodimin të siguruar, gati për të filluar. Ju i mirëprisni në vendin e punës.',
      },
    ],
  },

  industries: {
    kicker: 'Industritë',
    title: 'Sektorët *që mbulojmë.*',
    text: 'Kompanitë në të gjithë Maqedoninë e Veriut kanë nevojë për njerëz shtesë dhe të besueshëm që puna të mos ndalet. Ne ua sigurojmë — për një pozitë të vetme ose për një ekip të tërë.',
    cards: [
      {
        kicker: 'Ndërtim dhe teknikë',
        title: 'Ndërtim dhe instalime elektrike',
        text: 'Ekipe kantieri, mjeshtër, elektricistë, kryepunëtorë dhe inxhinierë.',
        alt: 'Elektricist duke kontrolluar instalimet brenda një kuadri elektrik',
      },
      {
        kicker: 'Hoteleri',
        title: 'Hotele, restorante dhe katering',
        text: 'Kuzhinierë, staf kuzhine, pastrues dhomash dhe ekipe shërbimi.',
        alt: 'Kuzhinierë me uniforma të bardha duke përgatitur ushqim në një kuzhinë profesionale',
      },
      {
        kicker: 'Industri dhe logjistikë',
        title: 'Prodhim dhe magazinim',
        text: 'Operatorë, mbledhës porosish, paketues, shoferë dhe drejtues linje.',
        alt: 'Një forklift duke lëvizur nëpër një magazinë plot me paleta',
      },
    ],
    allSectors: 'Të gjithë sektorët që mbështesim',
    chips: [
      'Ndërtim',
      'Mirëmbajtje dhe shërbime për objekte',
      'Hoteleri',
      'Restorante dhe katering',
      'Industri përpunuese',
      'Magazinim',
      'Logjistikë',
      'Pastrim',
      'Prodhim',
    ],
    other: '+ Industri të tjera',
  },

  pricing: {
    crewKicker: 'Madhësia e ekipeve',
    crewTitle: 'Filloni me pak. *Zgjerohuni kur të jeni gati.*',
    crewText:
      'Kërkesat zakonisht janë për ekipe me 3, 5 ose 10 punëtorë — ose për specialistë të kualifikuar individualë. Nevojat më të mëdha për fuqi punëtore i planifikojmë individualisht, bashkë me ju.',
    crewLabel: 'Madhësitë e zakonshme të ekipeve',
    workers: 'punëtorë',
    orMore: 'ose më shumë',
    kicker: 'Çmimet dhe kontratat',
    title: 'Ofertë sipas *kërkesës suaj.*',
    text: 'Nuk ka listë çmimesh fikse. Çdo ofertë përgatitet individualisht, bazuar në:',
    factors: [
      { title: 'Kategoria e punëtorëve', text: 'Zanati dhe niveli i kërkuar i përvojës.' },
      { title: 'Numri i punëtorëve', text: 'Nga specialistë individualë deri te ekipe të plota.' },
      { title: 'Kohëzgjatja e angazhimit', text: 'Për sa kohë ju nevojitet fuqia punëtore.' },
      { title: 'Kërkesat operative', text: 'Vendndodhja, orari dhe çdo nevojë e veçantë.' },
    ],
    contractsNote: 'Kontratat dhe kushtet tregtare dakordohen individualisht me secilin klient.',
  },

  about: {
    kicker: 'Rreth nesh',
    title: 'Një kompani e fokusuar, *e ndërtuar për t’u rritur.*',
    paragraphs: [
      'Core Crew Solutions DOOEL është një kompani për furnizim me fuqi punëtore, e regjistruar në Maqedoninë e Veriut. U sigurojmë kompanive punëtorë të besueshëm sipas nevojave të tyre reale operative.',
      'Po fillojmë me një veprimtari të fokusuar dhe me ekipe zakonisht nga 3 deri në 10 punëtorë për kërkesë — me strukturën për t’u rritur bashkë me nevojat më të mëdha për fuqi punëtore.',
    ],
    values: [
      { title: 'Të besueshëm', text: 'Punëtorë të përzgjedhur sipas asaj që kërkon realisht çdo angazhim.' },
      { title: 'Transparentë', text: 'Përgjegjësi të qarta dhe oferta individuale.' },
      { title: 'Në përputhje', text: 'Sipas procedurave dhe rregulloreve në fuqi.' },
    ],
    sourcingKicker: 'Rekrutimi',
    sourcingTitle: 'Punëtorë të rekrutuar ndërkombëtarisht, për punëdhënës në Maqedoninë e Veriut.',
    countries: ['India', 'Nepali', 'Filipinet'],
    sourcingCountry: 'Vendi i rekrutimit',
    destinationTitle: 'Kompania juaj në Maqedoninë e Veriut',
    destinationText:
      'Punëtorët mbërrijnë me dokumentacionin, lejen e punës dhe akomodimin të rregulluar',
    accommodationNote: 'Akomodimin për punëtorët e organizon Core Crew.',
  },

  faq: {
    kicker: 'Pyetje',
    title: 'Përgjigje të qarta, *që në fillim.*',
    whatsapp: 'Pyetni në WhatsApp',
    items: [
      {
        q: 'Kush merret me dokumentet dhe lejen e punës?',
        a: 'Ne. Core Crew Solutions e drejton të gjithë procesin deri te leja e punës dhe plotëson të gjithë dokumentacionin e nevojshëm, në përputhje me procedurat dhe rregulloret në fuqi.',
      },
      {
        q: 'Çfarë lloj punëtorësh mund të siguroni?',
        a: 'Të çdo niveli — nga ndihmës dhe punëtorë të përgjithshëm deri te mjeshtër të kualifikuar, kryepunëtorë, inxhinierë dhe arkitektë — në ndërtim, instalime elektrike, hoteleri, prodhim, logjistikë, mirëmbajtje dhe më shumë.',
      },
      {
        q: 'Sa punëtorë mund të kërkoj?',
        a: 'Zakonisht ekipe me 3, 5 ose 10 punëtorë, si dhe punëtorë të kualifikuar individualë. Nevojat më të mëdha diskutohen individualisht.',
      },
      {
        q: 'Nga vijnë punëtorët?',
        a: 'Punëtorët i rekrutojmë kryesisht ndërkombëtarisht, nga India, Nepali dhe Filipinet.',
      },
      {
        q: 'Kush e organizon akomodimin?',
        a: 'Ne. Core Crew organizon akomodimin për punëtorët tuaj, që ata të mbërrijnë me strehimin gati.',
      },
      {
        q: 'Sa kushton?',
        a: 'Çmimi përgatitet individualisht sipas kategorisë së punëtorëve, numrit të punëtorëve, kohëzgjatjes së angazhimit dhe kërkesave operative.',
      },
      {
        q: 'Sa zgjat procesi?',
        a: 'Varet nga pozitat, numri i punëtorëve dhe shqyrtimi i lejeve. Së bashku me ofertën ju japim një afat kohor realist.',
      },
      {
        q: 'A mund të kërkoj një pozitë që nuk është në listë?',
        a: 'Po. Na tregoni çfarë ju nevojitet — ne rekrutojmë punëtorë sipas kërkesave tuaja operative.',
      },
    ],
  },

  quote: {
    kicker: 'Kontakt',
    title: 'Kërkoni një *ofertë për fuqi punëtore.*',
    text: 'Na tregoni çfarë ju nevojitet. Do t’ju kthejmë përgjigje me një propozim të përshtatur për pozitat, madhësinë e ekipit dhe afatet tuaja.',
    phone: 'Telefoni',
    email: 'Email',
    whatsapp: 'WhatsApp',
    whatsappValue: 'Na shkruani',
    office: 'Zyra',
    selectionLabel: 'Zgjedhja juaj:',
    workers: (count: string) => `${count} punëtorë`,
    start: 'Fillimi:',
    fields: {
      company: 'Emri i kompanisë',
      person: 'Personi i kontaktit',
      phone: 'Telefoni',
      email: 'Email',
      type: 'Punëtorët që kërkohen',
      count: 'Numri i punëtorëve',
      location: 'Vendi i punës',
      start: 'Fillimi i pritshëm',
      duration: 'Kohëzgjatja e pritshme e punësimit / angazhimit',
      notes: 'Kërkesa shtesë',
    },
    placeholders: {
      type: 'p.sh. 5 muratorë të kualifikuar, 1 kryepunëtor',
      count: 'p.sh. 5',
      location: 'Qyteti / vendi',
      start: 'p.sh. mars 2027',
      duration: 'p.sh. 12 muaj',
      notes: 'Kualifikime, gjuhë, turne, çdo gjë tjetër…',
    },
    validation: {
      required: 'Ju lutemi plotësoni këtë fushë.',
      email: 'Ju lutemi shkruani një adresë email të vlefshme.',
    },
    sendNote: (email: string) =>
      `Kërkesa juaj dërgohet te ${email} përmes aplikacionit tuaj të email-it. Ne përgjigjemi me email ose në telefon.`,
    mail: {
      subject: (company: string) => `Kërkesë për ofertë për fuqi punëtore — ${company}`,
      company: 'Kompania',
      person: 'Personi i kontaktit',
      phone: 'Telefoni',
      email: 'Email',
      type: 'Punëtorët që kërkohen',
      count: 'Numri i punëtorëve',
      location: 'Vendi i punës',
      start: 'Fillimi i pritshëm',
      duration: 'Kohëzgjatja',
      notes: 'Kërkesa shtesë',
    },
  },

  footer: {
    topLabel: 'Core Crew Solutions — kthehu në krye',
    tagline: 'Fuqi punëtore e\u00a0besueshme. *Gati kur ju nevojitet.*',
    company: 'Kompania',
    contact: 'Kontakt',
    legal: 'Informacione ligjore',
    language: 'Gjuha',
    office: 'Zyra: do të njoftohet',
    legalLinks: [
      'Politika e privatësisë',
      'Politika e cookie-ve',
      'Kushtet e përdorimit',
      'Të dhënat e kompanisë',
    ],
    jobsTitle: 'Kërkoni punë?',
    jobsText: 'Regjistrimi i kandidatëve vjen së shpejti — ndërkohë, na kontaktoni me email.',
    jobsSubject: 'Kërkesë për punë',
    photos: 'Fotografitë: Unsplash',
  },

  mobileBar: {
    label: 'Kontakt i shpejtë',
    call: 'Thirrni',
    whatsapp: 'WhatsApp',
    quote: 'Merrni ofertë',
  },
}
