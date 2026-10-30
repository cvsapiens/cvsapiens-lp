# Resume builder landing pages

- **Date:** 2026-10-30
- **Status:** Adopted in the landing page redesign (`app/page.tsx`)
- **Question:** How do companies selling resume builders and job-search tools build their landing pages: techniques, language, proof and pricing? What should cvsapiens.com copy, and what should it refuse?

Companion file: [Landing page conversion](landing-page-conversion.md), the evidence on what converts.

## Summary

We looked at 21 landing pages in three groups:

- **Mass-market builders:** Zety, Resume.io, Resume Genius, MyPerfectResume, LiveCareer, Novorésumé, Kickresume, Enhancv, Resume Now and Canva.
- **AI job-search tools:** Teal, Rezi, Jobscan, Resume Worded, Huntr, Careerflow, Simplify, FlowCV and Reactive Resume.
- **Brazilian pages in the "resume for jobs abroad" niche:** VagaNaGringa.dev, PreparaCV, Curriculol, RemoteDevsBR and geracontratos.

They all run the same play:

1. **Lead with free.** 11/11 AI tools and 7/10 mass-market headlines say free.
2. **Show a big user count** in or near the hero (9/10 and 9/11).
3. **Sell a score:** a match % or "ATS score" is the hero concept at 10 of the 11 AI tools.
4. **Show ratings and a "hired at" logo wall.**
5. **Say "ATS-friendly"** (9/10).
6. **Close with an FAQ** (8/10 and 8/11).

Where they differ, the honest ones are the interesting ones:

- **Reactive Resume** says "it suggests, you decide".
- **Resume Worded** says "The same resume always gets the same score".
- **Enhancv** admits "there's no such thing as an ATS score".
- **Jobscan** publishes how its score is weighted.
- **Novorésumé** sells one-time passes: "One payment. Nothing to cancel."

**Three openings for cv sapiens:**

1. **The job description as the way in.** None of the 11 AI tools puts "paste the job description" in the hero; they all lead with uploading a resume. That is our unit of work (`../cvsapiens/PRODUCT.md`).
2. **The whole application, not one document.** Only Enhancv, Huntr and PreparaCV (Brazil) bundle the resume, cover letter, tracker and interview prep around one job. Huntr calls it an "Application Packet".
3. **Honesty as positioning.** The category's two loudest habits are unsourced outcome stats and cheap trials that auto-renew at 8–13× the price every four weeks. Those habits are now in court. We can show a deterministic match whose method we publish, and a pass that does not renew.

## Per company, in brief

### Mass-market builders

- **Resume.io**
  - Hero: "This resume builder gets you hired" / "Only 2% of resumes win. Yours will be one of them."
  - CTAs: "Create my resume", "Upload my resume".
  - Proof: Trustpilot 4.2 (56,266) under the button; "hired at" logos.
  - Pricing: trial from A$3.95, then renews at A$32.95 every 4 weeks.
  - Stats such as 2%, 39%, 92% and 98% are unsourced.
- **Resume Genius**
  - Hero: "The Smartest Online Resume Builder". CTA: "Build My Resume Now".
  - Proof: Trustpilot 4.6; logos with per-company hire counts, unsourced.
  - The only builder that prints the renewal terms on the landing page: $2.95 for 14 days, then $23.95 every 4 weeks.
- **Zety, MyPerfectResume, LiveCareer and Resume Now (Bold LLC)**
  - Hero: "Free AI Resume Builder… in Minutes".
  - Free means a TXT download only.
  - Trials cost $1.85–2.95 and auto-renew at $23.85–25.95 every 4 weeks.
  - Billing is the top Trustpilot, BBB and Reclame Aqui complaint.
- **Novorésumé**
  - Trust strip: "Trusted by 18M+ · ATS friendly · No credit card required · 14-day money-back guarantee".
  - Shows a recruiter's review of the template.
  - Pro is sold as 1-, 3- and 6-month passes: "One payment. Nothing to cancel."
- **Kickresume**
  - Hero: "Best AI Resume Builder" / "Build a resume. Land a job."
  - Witty section heads ("This AI won't steal your job.").
  - Pricing on the page; 14-day money back.
  - User counts contradict each other (8M, 70k and 2M).
- **Enhancv**
  - Hero: "Land more interviews". Second CTA: "Get Your Resume Score".
  - Pitches "One place to run your entire job search" with a tracker and interview prep, the closest feature match to ours.
  - Its checker page says "there's no such thing as an ATS score".
- **Canva**
  - Hero: "Stand out with professional custom resumes".
  - Its logos are Canva customers, not hires.
  - No ratings, no ATS talk.

### AI job-search tools

- **Rezi**
  - Hero: "Ranked #1 AI Resume Builder by Forbes" / "Join 4.5 million job seekers… no credit card required".
  - Visual: an animated parse demo (Submitted → Scanning → "Qualification Match 47%", matched skills, missing requirements).
  - Shows a 30-day money-back guarantee next to the prices.
- **Jobscan**
  - Hero: "Optimize your resume for the exact ATS". CTA: "Scan Your Resume For Free".
  - Claims "3x more interview callbacks".
  - Its FAQ is candid: aim for 75%, over-optimizing is possible, and the score's weights are published.
- **Resume Worded**
  - Hero: "Improve your resume and LinkedIn profile". CTA: "Score My Resume".
  - Copy: "A real score, not an opinion", "The same resume always gets the same score", "you approve every change".
  - Privacy microcopy sits under the upload.
- **Huntr**
  - Hero: "Less Hassle, More Interviews". CTA: "Sign Up for Free".
  - Never says "ATS"; it compares "qualifications and responsibilities". Free plan includes 2 tailored resumes and 2 "Application Packets".
- **Careerflow**
  - Hero: "Land your dream job. Without the stress."
  - Weekly, monthly, quarterly and yearly price tabs, with $45 struck through.
- **FlowCV**
  - Hero: "Your first resume is 100% free forever. Unlimited downloads. No hidden fees. Yes, really."
  - Ratings carry dates ("as of Sept 2026").
- **Reactive Resume**
  - Hero: "free, open-source… no ads, no paywall".
  - Seven named steps (Write, Design, Check, Tailor, Share, Prepare, Remember).
  - Live counters refreshed every 6 hours; "it suggests, you decide".
- **Teal and Simplify** (third-party sources only; their sites blocked our fetcher)
  - Both use weekly and quarterly plans.
  - Simplify: "AI suggestions that beat applicant tracking systems".

### Brazil, "jobs abroad"

- **PreparaCV:** "Cole a Vaga" ("paste the job") in 4 steps, and a full application kit in English for jobs abroad. The closest overlap with cv sapiens. Its logo strip shows Nubank, iFood and Itaú without saying they're customers. Uses the unsourced "75% descartados por robôs" ("75% discarded by robots").
- **Curriculol:**
  - One-time credits, no subscription.
  - A guarantee it can keep: the score goes up on the job you bring, or your credits come back.
  - Labels its mockups "Exemplo ilustrativo com dados fictícios" ("illustrative example with fictional data").
- **VagaNaGringa.dev:** write in Portuguese, get an English, ATS-friendly resume; part of a job board and community.
- **geracontratos:** turns the trap into its pitch, "Sem assinatura, sem renovação automática" ("no subscription, no auto-renewal"), with Pix logos as trust badges.
- **Nobody mentions Gupy** (Brazil's dominant ATS) or LGPD on a landing page.

## Patterns, and what we did with each

| Pattern | Count | cv sapiens |
| --- | --- | --- |
| Free-first CTA | 11/11 AI, 7/10 mass | **Kept, honestly.** "Start free", with the free plan's limits and the paid prices stated next to it. |
| Paste-JD tailoring or keyword gap | 10/11 AI | **Made it the hero.** The job description is where every application starts. |
| Score or match % as hero concept | 10/11 AI | **Changed.** Shows "9 of 12 required shown" with the method, not an invented ATS %. |
| Big user count | 9/10, 9/11 | **Refused.** We have none and won't invent one. |
| "ATS-friendly" claim | 9/10 | **Replaced** with what we test: every template is rendered, read back like a parser, and must return every word. |
| Ratings and "hired at" logos | 5–8 each | **Refused.** No reviews exist yet. |
| Unsourced outcome stats (2%, 39%, 3x) | 7/10 | **Refused.** Our terms disclaim interview and ATS guarantees. |
| Two entry points (build or upload) | 5/10 | **Kept** in the copy: start from scratch or import a PDF (import is a Premium feature). |
| Suite positioning | 6/10, 9/11 | **Kept,** framed around one job: resume, letter, tracked application, interview prep. |
| "Suggests, you decide" | Reactive Resume, Resume Worded | **Kept.** True of our pipeline: every suggestion is checked against your resume, and you choose. |
| Published method | Jobscan, Enhancv | **Kept.** "Matched on the job's own words and known synonyms, without AI." |
| One-time pass, no renewal | Novorésumé, Curriculol, geracontratos | **Kept.** The 5-Day Pass is one payment and does not renew. |
| Labelled example data | Curriculol | **Kept.** Every demo carries an "example" label. |
| Privacy microcopy | 5/11 | **Kept.** We don't use resume content to train AI models (privacy policy). |
| FAQ at the bottom | 8/10, 8/11 | **Kept,** written around real objections. |
| Countdown timers | 0 of 6 fetched | **Refused.** No real deadline exists. |

## Language

- **Recurring words:** "ATS-friendly", "in minutes", "land your dream job", "hired", "recruiter-approved", "beat the bots", "free".
- **Tone:** confident, second person, short sentences. The best headlines name the outcome. The worst rely on fear ("filtered out. Silently.") or invented odds ("Only 2% of resumes win").
- **ATS claims, from honest to overclaiming:**
  1. Reactive Resume: "reads your resume the way hiring software does".
  2. FlowCV: "text-based PDFs with properly embedded fonts".
  3. Huntr: keywords plus qualifications.
  4. Enhancv: there's no ATS score.
  5. Resume Worded: "5x more interviews".
  6. Rezi: "guarantees parsing accuracy".
  7. Jobscan: "beat the bots".
  8. Simplify: "beat applicant tracking systems".

We write at the honest end, in the app's own voice: "Not found as written", "Found as a synonym", "you choose which changes to keep".

## What not to copy

- **Auto-renewing cheap trials.**
  - Every Bold brand and Resume.io run them.
  - *Rocket Resume v. BOLD* (N.D. Cal., filed 2026-04-02) alleges these brands "charge 10-20 times the initial fee every four weeks" and make cancelling hard. These are allegations only.
  - Reclame Aqui's complaint "Currículo grátis é pago ao finalizar" ("free resume is paid at the end") is the Brazilian version.
- **Unsourced statistics and implied endorsements** (employer logos, per-company hire counts).
- **Contradictory counts** on the same site.
- **Permanent strike-through discounts.**

## Not verified

- **Bold LLC sites** (Zety, MyPerfectResume, LiveCareer, Resume Now, meucurriculoperfeito) timed out. Their details come from search snippets and third-party reviews.
- **Teal and Simplify** came from third-party reviews only.
- **Resume.io** served Australian-dollar prices; the US figures are second-hand.
- **Static fetches** can't see exit-intent popups or sticky headers.
- **Prices from third-party sites** (Jobscan, Resume Worded, Teal) disagree with each other.
- **The status of *Rocket Resume v. BOLD*** after the motion to dismiss is unknown.

## Sources

- **Fetched on 2026-10-30:**
  - Mass-market builders: resume.io, resume.io/pricing, resumegenius.com, novoresume.com, novoresume.com/pricing, kickresume.com, kickresume.com/pt/, enhancv.com, enhancv.com/pricing/, enhancv.com/pt-br/, enhancv.com/resources/resume-checker/, canva.com/resumes/, canva.com/pt_br/criar/curriculo/
  - AI job-search tools: rezi.ai, jobscan.co, resumeworded.com, huntr.co, huntr.co/pricing, careerflow.ai, flowcv.com, flowcv.com/pricing, rxresu.me
  - Brazil: vaganagringa.dev/tools/resume-builder/, prepara.cv, curricu.lol, remotedevsbr.com, geracontratos.com.br/curriculo
  - Reviews: trustpilot.com/review/resumegenius.com, trustpilot.com/review/resume.io
- **Lawsuit:**
  - https://aijourn.com/rocket-resume-files-antitrust-suit-against-bold-alleging-deception-and-anticompetitive-conduct-by-the-owner-of-careerbuilder-monster-com-and-dozens-of-other-resume-builder-websites/
  - https://www.hrdive.com/news/monster-parent-company-rebuffs-competitor-antitrust-lawsuit/823620/
  - https://hrexecutive.com/antitrust-suit-alleges-monster-careerbuilder-and-resume-genius-are-all-the-same-company/
- **Complaints:**
  - https://legalclarity.org/myperfcvrltr-charge-how-to-cancel-and-get-a-refund/
  - https://www.reclameaqui.com.br/zety/curriculo-gratis-e-pago-ao-finalizar_GY20gllk0J72ljRf/
  - https://www.portaldaqueixa.com/brands/zety/complaints
- **Third-party reviews (Teal, Simplify, prices):** hiredradar.com/teal-hq-review/, toolradar.com/tools/teal-hq/pricing, jobsaicopilot.com/simplify-jobs-review/, wobo.ai/blog/simplify-review/, morningdough.com, weekday.works, careery.pro
- **FTC click-to-cancel:** https://www.fenwick.com/insights/publications/eighth-circuit-vacates-ftcs-click-to-cancel-rule
