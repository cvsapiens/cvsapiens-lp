# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

People in an active job search, applying to several roles at once and tailoring each application. The page is written for tech professionals applying to international and remote roles; many are Brazilian or Latin American and write in Portuguese or Spanish as well as English (confirmed 2026-10-30). Visitors arrive from search, social posts and, later, paid ads; most are on a phone.

## Product Purpose

cvsapiens.com is the marketing site for the CV Sapiens app (app.cvsapiens.com). Its one job is to turn a visitor into a signed-up user who understands what the paid plans add. The app turns one job description into a complete, tracked application: a tailored resume, a matching cover letter, an application record on a board, then interview prep and practice for that same application.

## Positioning

The application kit: the job description is the unit of work. Resume, letter, pipeline stage, interview date, prep and practice answers all hang off one application, instead of living in separate builders and spreadsheets. The job match is counted without AI, on the job's own words and known synonyms, and every suggested change is checked against the person's resume before they see it.

## Operating Context

- Sign up and log in happen in the app: `https://app.cvsapiens.com/auth/signup` and `/auth/signin`.
- People keep one base resume and create a tailored copy per application.
- Documents export as PDF, DOCX and TXT and are sent outside the app.

## Capabilities and Constraints

Checked against `../cvsapiens` on 2026-10-30:

- Plans (`src/api/modules/subscription/subscription.constants.ts`):
  - **Free:** 1 resume, 1 cover letter, TXT export, no AI, no card.
  - **5-Day Pass:** $9.90, a one-time payment in Stripe `payment` mode that does not renew.
  - **Monthly:** $24.90, renews monthly.
  - **3 Months:** $59.90, billed every 3 months, about 20% less than monthly.
  - Every paid plan unlocks application kits, job match, tailoring suggestions, interview prep, PDF import, unlimited documents, and PDF/DOCX/packet export. AI use is capped at 40 actions a day.
- Subscriptions renew until cancelled; access lasts to the end of the period. Fees are generally non-refundable (terms). No money-back guarantee exists.
- **Job match** reports "{found} of {total} required shown". Each requirement shows as Found, Found as "term", Found as a synonym, or Not found as written. It also lists keywords that are in the posting but not the resume.
- 22 resume templates. Each is rendered to PDF in CI and read back like a parser: every word must come out, and the file must stay under 2.5 MB.
- Document language: English, Brazilian Portuguese or Spanish. It sets section titles, dates and letter defaults. Translating content is not a confirmed feature.
- Resume content is not used to train AI models; AI requests go to OpenAI (privacy policy).
- The terms disclaim any guarantee of interviews, offers or ATS acceptance.
- Copy lives in one content module so a pt-BR version is a translation, not a rebuild (confirmed 2026-10-30).

## Brand Commitments

- Name and wordmark "cv sapiens" and the monkey mascot.
- Hand-drawn black-ink illustrations with an orange accent, from `../cvsapiens/public/illustrations`.
- Visual world: the app's palette and type (warm paper, ink, burnt orange, Zilla Slab for titles, Google Sans Flex for working text). Some of the landing page's earlier personality is kept as accents: the coloured shapes and the mascot avatar banner (confirmed 2026-10-30).

## Evidence on Hand

- The product itself: job match wording, the kit progress scene, templates, plans. Example data in demonstrations must be labelled as an example.
- Research: `research/landing-page-conversion.md`, `research/resume-builder-landing-pages.md`.
- **None of these exist, and none may be invented:** testimonials, customer or employer logos, user counts, ratings, reviews, outcome statistics (confirmed 2026-10-30).

## Product Principles

1. Prove, don't claim. Show the product working on an example rather than promising outcomes.
2. Honest price. Show what the free plan does not include, every paid price, and which plans renew.
3. The job description is the way in. Every message starts from the job the visitor wants.
4. You stay the author. AI suggests; the person chooses; nothing is invented.
5. Calm under stress. Job hunting is stressful; the page is clear, specific and never uses fear or fake urgency.

## Accessibility & Inclusion

WCAG 2.2 AA contrast and keyboard access. Reduced-motion users get composed still frames. Copy is written at a plain reading level for people reading in a second language.
