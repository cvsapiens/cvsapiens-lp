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
    title: "cv sapiens | Tailor your resume to every job you apply to",
    description:
      "Paste a job description and get suggestions that tailor your resume to it, in the job's own words. You keep the ones that are true. 22 designed templates, free plan, no card needed.",
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
    title: "Paste the job. Get your resume tailored to it.",
    lead: "cv sapiens compares your resume with the posting and suggests changes in the job's own words. You keep the ones that are true.",
    primary: "Start free",
    secondary: "See how it works",
  },

  // The application the page follows, a non-tech role on purpose. Every name and number in it
  // is made up; the demo film and the template sample in public/showcase use the same person.
  example: {
    posting: {
      label: "Sample job posting",
      kind: "Job posting",
      title: "Customer Success Manager",
      company: "Fieldnote",
      meta: "Remote, US time zones · B2B software",
      intro: "Help 9,000 small service businesses get set up and keep growing with our scheduling software.",
      requirementsTitle: "What you'll need",
      requirements: [
        "3+ years in [customer success] or account management",
        "[Onboarding] new customers",
        "[HubSpot] or Salesforce",
        "[Renewals] and upsells",
        "[Churn] and health-score reporting",
        "Fluent [English]; Spanish a plus",
      ],
    },
    scene: {
      label: "The application kit being made from the sample posting",
      steps: ["Tailoring your resume to the job", "Writing the cover letter", "Adding the application to your board"],
      done: "Kit ready: resume, cover letter and a card on your board",
      replay: "Play again",
      applied: "Applied",
      company: "Fieldnote",
    },
  },

  // The hero's demo film: the real app, recorded with the posting above.
  demo: {
    label:
      "Product demo, 40 seconds: the posting is pasted into cv sapiens and becomes a tailored resume, a cover letter, a card on the board and interview prep",
    watch: "Watch with sound",
    length: "0:40",
    pause: "Pause the demo",
    play: "Play the demo",
    captions: "English",
  },

  problem: {
    title: "Every job asks for something a little different.",
    body: [
      "Recruiters, and the software they use, search for the job's own words: its title, its tools, its requirements.",
      "A resume written for “any account role” says those things in other words, or not at all. Tailoring it fixes that, but doing it by hand takes an evening per application.",
    ],
    compare: {
      caption: "Your base resume against this job",
      jobColumn: "The job asks for",
      resumeColumn: "Your resume says",
      statusColumn: "Job match",
      rows: [
        { job: "HubSpot or Salesforce", resume: "Managed 120 accounts in HubSpot", status: "found", label: "Found" },
        { job: "Onboarding new customers", resume: "Helped new clients get started", status: "missing", label: "Not found as written" },
        { job: "Renewals and upsells", resume: "Nothing yet", status: "missing", label: "Not found as written" },
      ],
      titleNote: {
        before: "The job is ",
        job: "Customer Success Manager",
        middle: "; your resume says ",
        resume: "Account Manager",
        after: ". Recruiters search by title, so use theirs if it's true for you.",
      },
    },
  },

  howItWorks: {
    title: "One posting in. A tailored resume out.",
    lead: "Three steps, and the first one is a paste.",
    steps: [
      {
        title: "Paste the job description",
        body: "The whole posting: responsibilities, requirements, about the team. cv sapiens reads what the job asks for.",
      },
      {
        title: "Keep the suggestions you agree with",
        body: "Each change is written in the job's own words and says why. Nothing changes until you say yes.",
      },
      {
        title: "Download it in a template",
        body: "Your tailored copy as PDF or Word, in any of 22 templates. Your base resume stays as it is.",
      },
    ],
    paste: {
      label: "Job description",
      text: "Customer Success Manager, Fieldnote. Remote, US time zones. Fieldnote makes scheduling and booking software for 9,000 small service businesses. What you'll need: 3+ years in customer success or account management, onboarding new customers, HubSpot or Salesforce…",
      counts: "953 characters • 161 words",
      hint: "The more of the posting you paste, the closer the tailoring.",
    },
    suggestion: {
      where: "Employment · Bookwell",
      before: "Helped new clients get started with the platform.",
      after: "Ran customer onboarding for 40+ new accounts a quarter.",
      why: "The job asks for “onboarding new customers”. Your summary already says you brought 40+ new accounts on board each quarter.",
      keep: "Keep",
      skip: "Skip",
      undo: "Undo",
      kept: "Kept",
      skipped: "Skipped",
      matchLabel: "Job match",
      matchOf: "of 6 required shown",
      groupLabel: "Suggested change",
    },
    download: {
      label: "Your tailored copy",
      file: "Rachel-Morgan-Fieldnote.pdf",
      formats: ["PDF", "DOCX", "TXT"],
      hint: "Saved with this job, next to the posting you pasted.",
    },
  },

  // A real page from the app: the tailored resume above, rendered by one of the app's templates
  // (public/showcase). Regenerate it from ../cvsapiens when the templates change.
  showcase: {
    title: "A resume that looks the part.",
    lead: "Pick any of the 22 templates, then change colours, fonts and spacing. Each one is designed for people to read and tested so software reads back every word.",
    points: [
      "22 templates, from classic to bold",
      "PDF and Word files, each under 2.5 MB",
      "Every template is on the free plan",
    ],
    primary: "Start free",
    sample: "Download this resume (PDF)",
    image: { src: "/showcase/rachel-morgan-slant-navy.png", width: 1800, height: 2546 },
    // A second template fanned behind the first, to show there is more than one look.
    behind: { src: "/showcase/rachel-morgan-poster.png", width: 1800, height: 2546 },
    pdf: "/showcase/rachel-morgan-slant-navy.pdf",
    alt: "Rachel Morgan's one-page resume for the Customer Success Manager job, in the Slant template with a navy header",
    caption: "Slant in Navy professional, with Poster behind it",
    thumbCaption: "Slant template · 1 page",
  },

  kit: {
    title: "Everything else that job needs",
    lead: "On a paid plan each posting becomes a kit around the tailored resume, so nothing ends up in a spreadsheet.",
    items: [
      { id: "resume", title: "A tailored resume", body: "A copy of your base resume, tailored to this job. Your original stays as it is." },
      { id: "match", title: "The job match", body: "Which of the job's requirements your resume shows, as written or in other words, and which it doesn't yet." },
      { id: "letter", title: "A cover letter", body: "Written for this job from your resume. Edit it like any document." },
      { id: "board", title: "A card on your board", body: "Applied, Screening, Final round. The interview date lives on the card, next to what you sent." },
      { id: "prep", title: "Interview prep", body: "Likely questions, stories to tell and practice answers with feedback, for this job." },
      { id: "export", title: "Ready to send", body: "PDF, Word and a packet with everything for this application." },
    ],
    resume: {
      name: "Rachel Morgan",
      role: "Customer Success Manager",
      contact: "Austin, TX · Remote · rachel.morgan@example.com",
      summaryTitle: "Professional Summary",
      summary: "Account manager with six years in B2B software, the last three looking after 120 small-business accounts and bringing 40+ new ones on board each quarter.",
      historyTitle: "Employment History",
      jobTitle: "Account Manager, Bookwell",
      jobDates: "Mar 2021 – Present",
      bullets: [
        "Ran customer onboarding for 40+ new accounts a quarter.",
        "Managed a book of 120 small-business accounts in HubSpot.",
        "Built monthly churn and retention reports for the leadership team.",
      ],
    },
    letter: {
      greeting: "Dear Fieldnote team,",
      body: "For the last three years I have looked after 120 small-business accounts at a scheduling software company, from the first onboarding call onward.",
    },
    match: {
      title: "Job match",
      found: "5",
      of: "of 6 required shown",
      rows: [
        { requirement: "Account management", label: "Found as a synonym", status: "found" },
        { requirement: "Customer onboarding", label: "Found", status: "found" },
        { requirement: "HubSpot", label: "Found", status: "found" },
        { requirement: "Renewals and upsells", label: "Not found as written", status: "missing" },
      ],
      footnote: "Matched on the job's own words and known synonyms, without AI.",
    },
    prep: {
      title: "Interview prep",
      question: "Tell us about an account that was about to leave. What did you do?",
      tip: "Story to tell: the retention reports that flagged at-risk accounts early.",
    },
    card: { company: "Fieldnote", role: "Customer Success Manager", pill: "Applied" },
    exports: ["PDF", "DOCX", "Packet"],
    label: "Sample application kit",
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
    freeIncludes: [
      "1 resume and 1 cover letter",
      "All 22 professionally designed templates",
      "Colours, fonts and spacing to make it yours",
      "Resume and cover letter editors",
      "Download as TXT",
    ],
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
    tagline: "Your resume, tailored to every job you apply to.",
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
