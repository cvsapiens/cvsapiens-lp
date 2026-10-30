// Every word on the landing page. A pt-BR or es page is a copy of this file with the
// same shape, translated. Facts here are checked against the app (../cvsapiens):
// plans in subscription.constants.ts, job-match wording in messages/en.json,
// template checks in utils/pdf/parseability, document strings in utils/document-locale.ts.
// Keep them in step when the app changes. Words in [brackets] are marked on the page.

export const APP_URLS = {
  signUp: "https://app.cvsapiens.com/auth/signup",
  logIn: "https://app.cvsapiens.com/auth/signin",
  terms: "https://app.cvsapiens.com/terms",
  privacy: "https://app.cvsapiens.com/privacy",
} as const;

export const content = {
  meta: {
    title: "cv sapiens | A tailored resume, cover letter and interview prep for every job",
    description:
      "Paste a job description and get a resume tailored to it, a matching cover letter, a tracked application and interview prep. Free plan, no card needed.",
  },

  nav: {
    skip: "Skip to content",
    links: [
      { label: "How it works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    logIn: "Log in",
    startFree: "Start free",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    home: "cv sapiens home",
  },

  hero: {
    title: "Paste the job. Get the whole application.",
    lead: "A resume tailored to the posting, a cover letter that matches it, a card on your board and interview prep for that one job.",
    primary: "Start free",
    secondary: "See how it works",
    reassurance: "Free plan, no card needed. Application kits from $9.90 for 5 days, and the pass doesn't renew.",
  },

  // The example application the page follows. Every name and number in it is made up.
  example: {
    stamp: "Example",
    posting: {
      label: "Example job posting",
      kind: "Job posting",
      title: "Senior Backend Engineer",
      company: "Lumen Pay",
      meta: "Remote, EU time zones · Fintech",
      intro: "Build the services that move money for small businesses across Europe.",
      requirementsTitle: "What you'll need",
      requirements: [
        "5+ years building backend services in [Python]",
        "[PostgreSQL] at scale",
        "[Event streaming] with Kafka",
        "[AWS] in production",
        "[Payments] or ledger systems",
        "[On-call] experience",
      ],
    },
    scene: {
      label: "The application kit being made from the example posting",
      steps: ["Tailoring your resume to the job", "Writing the cover letter", "Adding the application to your board"],
      done: "Kit ready: resume, cover letter and a card on your board",
      replay: "Play again",
      applied: "Applied",
      company: "Lumen Pay",
    },
    note: "Made-up example. Your kit uses your resume and the job you paste.",
  },

  // The hero's demo film: the real app, recorded with the example posting above.
  demo: {
    label:
      "Product demo, 40 seconds: the example posting is pasted into CV Sapiens and becomes a tailored resume, a cover letter, a card on the board and interview prep",
    watch: "Watch with sound",
    length: "0:40",
    pause: "Pause the demo",
    play: "Play the demo",
    captions: "English",
    note: "The real app, with made-up example data. Your kit uses your resume and the job you paste.",
  },

  problem: {
    title: "Every job asks for something a little different.",
    body: [
      "Recruiters, and the software they use, search for the job's own words: its title, its tools, its requirements.",
      "A resume written for “any backend role” says those things in other words, or not at all. Tailoring it fixes that, but doing it by hand takes an evening per application.",
    ],
    compare: {
      caption: "Your base resume against this job",
      jobColumn: "The job asks for",
      resumeColumn: "Your resume says",
      statusColumn: "Job match",
      rows: [
        { job: "PostgreSQL at scale", resume: "Tuned PostgreSQL for the ledger", status: "found", label: "Found" },
        { job: "Event streaming with Kafka", resume: "Worked on the messaging system", status: "missing", label: "Not found as written" },
        { job: "On-call experience", resume: "Nothing yet", status: "missing", label: "Not found as written" },
      ],
      titleNote: {
        before: "The job is ",
        job: "Senior Backend Engineer",
        middle: "; your resume says ",
        resume: "Software Engineer",
        after: ". Recruiters search by title, so use theirs if it's true for you.",
      },
    },
  },

  howItWorks: {
    title: "One posting in. Everything for that job out.",
    lead: "Three steps, and the first one is a paste.",
    steps: [
      {
        title: "Paste the job description",
        body: "The whole posting: responsibilities, requirements, about the team. cv sapiens reads what the job asks for.",
      },
      {
        title: "Keep the changes you agree with",
        body: "You get a tailored copy of your resume, a matching cover letter and the job match. Each suggested change waits for your yes.",
      },
      {
        title: "Apply, track and prepare",
        body: "Download PDF or Word, send it, and move the card along your board. When an interview is booked, prepare for that job.",
      },
    ],
    paste: {
      label: "Job description",
      text: "Senior Backend Engineer, Lumen Pay. Remote, EU time zones. You'll build the services that move money for small businesses across Europe. What you'll need: 5+ years building backend services in Python, PostgreSQL at scale, event streaming with Kafka…",
      counts: "2,184 characters • 341 words",
      hint: "The more of the posting you paste, the closer the tailoring.",
    },
    suggestion: {
      where: "Employment · Fintech Brasil",
      before: "Worked on the messaging system for payments.",
      after: "Ran event streaming with Kafka for the payment services.",
      why: "The job asks for “event streaming with Kafka”. Your resume already lists Kafka under Skills.",
      keep: "Keep",
      skip: "Skip",
      undo: "Undo",
      kept: "Kept",
      skipped: "Skipped",
      matchLabel: "Job match",
      matchOf: "of 12 required shown",
      groupLabel: "Example suggested change",
    },
    board: {
      columns: [
        {
          title: "Applied",
          cards: [{ company: "Lumen Pay", role: "Senior Backend Engineer", pill: "Applied", tone: "applied", meta: "Resume · tailored · Cover letter" }],
        },
        {
          title: "Screening",
          cards: [{ company: "Northwind", role: "Platform Engineer", pill: "Screening", tone: "screening", meta: "Interview Tue 14:00 · Prep ready" }],
        },
      ],
      label: "Example job-search board",
    },
  },

  kit: {
    title: "What's in an application kit",
    lead: "Everything hangs off the job you pasted, so nothing ends up in a spreadsheet.",
    items: [
      { id: "resume", title: "A tailored resume", body: "A copy of your base resume, tailored to this job. Your original stays as it is." },
      { id: "match", title: "The job match", body: "Which of the job's requirements your resume shows, as written or in other words, and which it doesn't yet." },
      { id: "letter", title: "A cover letter", body: "Written for this job from your resume. Edit it like any document." },
      { id: "board", title: "A card on your board", body: "Applied, Screening, Final round. The interview date lives on the card, next to what you sent." },
      { id: "prep", title: "Interview prep", body: "Likely questions, stories to tell and practice answers with feedback, for this job." },
      { id: "export", title: "Ready to send", body: "PDF, Word and a packet with everything for this application." },
    ],
    resume: {
      name: "Ana Souza",
      role: "Senior Backend Engineer",
      contact: "Porto Alegre, Brazil · Remote · ana.souza@example.com",
      summaryTitle: "Professional Summary",
      summary: "Backend engineer with seven years in Python and PostgreSQL, the last three running payment services at a Brazilian fintech.",
      historyTitle: "Employment History",
      jobTitle: "Senior Software Engineer, Fintech Brasil",
      jobDates: "Jul 2022 – Present",
      bullets: [
        "Ran event streaming with Kafka for the payment services.",
        "Tuned PostgreSQL for the ledger, cutting report times from minutes to seconds.",
        "Built the refunds service in Python on AWS.",
      ],
    },
    letter: {
      greeting: "Dear Lumen Pay team,",
      body: "For the last three years I have run the payment services behind a Brazilian fintech, in Python, PostgreSQL and Kafka.",
    },
    match: {
      title: "Job match",
      found: "9",
      of: "of 12 required shown",
      rows: [
        { requirement: "Python", label: "Found", status: "found" },
        { requirement: "Event streaming", label: "Found as “Kafka”", status: "found" },
        { requirement: "PostgreSQL at scale", label: "Found", status: "found" },
        { requirement: "On-call experience", label: "Not found as written", status: "missing" },
      ],
      footnote: "Matched on the job's own words and known synonyms, without AI.",
    },
    prep: {
      title: "Interview prep",
      question: "How would you design a ledger that never loses a payment?",
      tip: "Story to tell: tuning PostgreSQL for the ledger.",
    },
    card: { company: "Lumen Pay", role: "Senior Backend Engineer", pill: "Applied" },
    exports: ["PDF", "DOCX", "Packet"],
    label: "Example application kit",
  },

  honest: {
    title: "Built to be trusted with your job search.",
    lead: "No invented experience, no made-up scores, no surprise charges.",
    points: [
      {
        title: "You stay the author",
        body: "Each suggested change is checked against what your resume already says before you see it. You choose which ones to keep.",
      },
      {
        title: "The match is counted, not guessed",
        body: "Requirements are matched on the job's own words and known synonyms, without AI. “Not found as written” can still be true of you: if it is, say it the way the job does.",
      },
      {
        title: "Templates software can read",
        body: "All 22 templates are rendered to PDF and read back by our tests. Every word has to come out, and every file stays under 2.5 MB.",
      },
      {
        title: "No surprise renewals",
        body: "The 5-day pass is one payment and ends on its own. Monthly and 3-month plans cancel from your account, anytime.",
      },
      {
        title: "Your resume isn't training data",
        body: "We don't use your resume to train AI models, and we don't sell your data.",
      },
    ],
  },

  abroad: {
    title: "Applying abroad? Write it in the job's language.",
    body: "Each document can be in English, Brazilian Portuguese or Spanish. Section titles, dates and letter wording follow its language, and the app itself speaks all three.",
    label: "Document language",
    languages: [
      {
        id: "en",
        name: "English",
        summary: "Professional Summary",
        history: "Employment History",
        skills: "Skills",
        dates: "Jul 2022 – Present",
        salutation: "Dear Hiring Team,",
      },
      {
        id: "pt-BR",
        name: "Português",
        summary: "Resumo Profissional",
        history: "Experiência Profissional",
        skills: "Habilidades",
        dates: "jul 2022 – Atual",
        salutation: "Prezada equipe de recrutamento,",
      },
      {
        id: "es",
        name: "Español",
        summary: "Perfil Profesional",
        history: "Experiencia Laboral",
        skills: "Habilidades",
        dates: "jul 2022 – Actualidad",
        salutation: "Estimado equipo de selección:",
      },
    ],
  },

  pricing: {
    title: "Start free. Pay when you're applying.",
    lead: "Build your base resume for free. Unlock application kits when you have jobs to apply to.",
    perDay: "a day",
    plans: [
      {
        id: "free",
        name: "Free",
        price: "$0",
        cadence: "forever",
        summary: "Build your base resume and one cover letter.",
        cta: "Start free",
        terms: "No card needed",
      },
      {
        id: "pass",
        name: "5-Day Pass",
        price: "$9.90",
        cadence: "one-time payment",
        summary: "Everything a paid plan unlocks, for five days. Made for a week of applications.",
        cta: "Get the 5-day pass",
        terms: "Doesn't renew",
        perDay: "$1.98",
        badge: "Easiest way to try",
      },
      {
        id: "monthly",
        name: "Monthly",
        price: "$24.90",
        cadence: "per month",
        summary: "For a search that runs for weeks.",
        cta: "Choose Monthly",
        terms: "Renews monthly · cancel anytime",
        perDay: "$0.83",
      },
      {
        id: "quarterly",
        name: "3 Months",
        price: "$59.90",
        cadence: "billed every 3 months",
        summary: "$19.97 a month, 20% less than Monthly.",
        cta: "Choose 3 Months",
        terms: "Renews every 3 months · cancel anytime",
        perDay: "$0.67",
        badge: "Lowest price per month",
      },
    ],
    freeIncludesTitle: "Free includes",
    freeIncludes: ["1 resume and 1 cover letter", "Resume and cover letter editors", "Download as TXT"],
    freeExcludesTitle: "Not on Free",
    freeExcludes: ["PDF and Word downloads", "Application kits, job match and AI"],
    premiumTitle: "Every paid plan, the pass included",
    premiumIncludes: [
      "Application kits: a tailored resume and cover letter per job",
      "Job match against every job you paste",
      "Interview prep with practice feedback",
      "Import the resume you already have (PDF)",
      "Unlimited resumes and cover letters",
      "PDF, Word and application packet downloads",
      "Up to 40 AI actions a day",
    ],
    note: "You create a free account first, then choose a plan inside the app. Prices in US dollars.",
  },

  faq: {
    title: "Questions people ask before they start",
    items: [
      {
        question: "Is it really free?",
        answer:
          "Yes. The free plan lets you build one resume and one cover letter and download them as text, with no card. PDF and Word downloads, application kits and AI need a paid plan.",
      },
      {
        question: "Does the 5-day pass renew?",
        answer: "No. It's one payment, and it ends after five days. If your search runs longer, add five more days or switch to a plan.",
      },
      {
        question: "Can I cancel Monthly or 3 Months?",
        answer:
          "Yes, anytime from your account. Your plan stays on until the end of the period you paid for. Payments are generally not refunded, so the 5-day pass is the cheapest way to try everything.",
      },
      {
        question: "Will the AI make things up?",
        answer:
          "It's built not to. Every suggested change is checked against what your resume already says before you see it, and you choose which changes to keep. If a requirement isn't in your resume, the job match tells you instead of adding it.",
      },
      {
        question: "Will my resume get past an ATS? Can you promise interviews?",
        answer:
          "No one can honestly promise either. What we can show you: every template is tested so software reads back every word, and the job match tells you which of the job's requirements your resume states in the job's own words.",
      },
      {
        question: "What happens to my resume and data?",
        answer:
          "It's used to make your documents. When you use AI features, your resume and the job description are sent to OpenAI to generate suggestions. We don't use your resume to train AI models, and we don't sell your data.",
      },
      {
        question: "Can I write in Portuguese or Spanish?",
        answer:
          "Yes. Each document can be in English, Brazilian Portuguese or Spanish: section titles, dates and letter wording follow its language. The app's interface is available in all three too.",
      },
      {
        question: "Can I import the resume I already have?",
        answer: "Yes, from a PDF, on any paid plan including the 5-day pass. On the free plan you build it in the editor.",
      },
    ],
    privacyLink: "Read the privacy policy",
  },

  finalCta: {
    title: "Your next application starts with the job you want.",
    body: "Paste it in. See what your resume already shows, and what it doesn't yet.",
    primary: "Start free",
    reassurance: "Free plan, no card needed.",
  },

  stickyCta: {
    text: "Free plan, no card needed",
    action: "Start free",
  },

  footer: {
    tagline: "One job description in. The whole application out.",
    cast: "The cv sapiens cast",
    links: [
      { label: "How it works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
      { label: "Log in", href: APP_URLS.logIn },
    ],
    legal: [
      { label: "Terms", href: APP_URLS.terms },
      { label: "Privacy", href: APP_URLS.privacy },
    ],
    copyright: "© 2026 cv sapiens",
  },
} as const;

export type Content = typeof content;
