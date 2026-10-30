# Landing page conversion

- **Date:** 2026-10-30
- **Status:** Adopted in the landing page redesign (`app/page.tsx`)
- **Question:** What, with evidence, makes a free-to-start SaaS landing page turn visitors into sign-ups and then buyers, and what does that mean for cvsapiens.com?

Companion file: [Resume builder landing pages](resume-builder-landing-pages.md), the competitor teardown.

## Summary

The evidence agrees on a short list:

1. Say what the product does and for whom in the first screen.
2. Show the product doing its job instead of describing it.
3. Keep one primary action and repeat it.
4. Show the full price and the free tier's limits up front.
5. Answer the objections near the buttons.
6. Keep the page fast.

Two findings matter most for us:

- **We have no testimonials, logos or usage numbers, and must not invent any** (`../cvsapiens/PRODUCT.md`). The substitutes the evidence supports are a demonstration of real output (clearly labelled as example data), a published method, verifiable specifics, and lower risk on the price.
- **Fake proof and hidden renewals are now a legal risk, not just a trust risk.** The FTC's rule on fake reviews took effect on 21 Oct 2024. Amazon paid US$2.5B over Prime enrolment and cancellation in 2025. The large resume builders are being sued over their auto-renewing trials (see the companion file). Our one-time 5-day pass is a real, sayable difference.

## Principles

Source types: **UX** usability research, **A/B** published test, **Bench** benchmark dataset, **Acad** peer-reviewed, **Reg** regulator or law, **Vendor** vendor or agency case study (weak).

| # | Principle | Evidence | Confidence |
| --- | --- | --- | --- |
| 1 | Say what it is, for whom and the outcome in the first ~10 s. Clear beats clever. | The chance of leaving is highest in the first 10 s of a visit (2B+ page dwells, Liu/White/Dumais via NN/g). Concise, scannable, objective copy was 124% more usable than promotional copy (NN/g). [UX/Acad] | Strong |
| 2 | Put the concrete offer in the headline; use the subhead to remove friction. | Highrise: a headline naming the offer plus "sign up in under 60 seconds" beat the control by 30% (37signals, 2008). [A/B] | Moderate |
| 3 | Write at a 5th–7th grade reading level, and localize. | Unbounce 2024 (41k pages, 57M conversions): grade 5–7 copy converted at 11.1% vs 5.3% for professional-level copy; in SaaS, 12.9% vs 2.1%. 76% of consumers prefer to buy in their own language (CSA Research, n=8,709). [Bench] | Moderate |
| 4 | Lead with the real product or its output, not decoration. | People ignore decorative and stock imagery and study images that carry information (NN/g eye-tracking). A specific image beat a 2-minute video (Brookdale, 30k visitors). [UX/A/B] | Strong (images), weak (video) |
| 5 | Show value before asking for the account; show the work being done. | Duolingo's later sign-up lifted daily active users about 20%. Login walls rank among users' worst frustrations (NN/g). Visible effort raises perceived value (Buell & Norton 2011, "labor illusion"). [A/B/UX/Acad] | Moderate |
| 6 | One goal and one primary CTA; drop the navigation on paid-traffic pages. | Removing the navigation doubled conversions in a Yuppiechef test (VWO). Choice-overload effects are fragile (meta-analysis of 50 experiments, mean ≈ 0). [A/B/Acad] | Moderate/Weak |
| 7 | CTA copy names the outcome; say "free" only when it is. | Free has outsized pull (Shampanier, Mazar & Ariely 2007). EU law bans "free" when the consumer must pay something else (UCPD Annex I, point 20). [Acad/Reg] | Moderate |
| 8 | Put a CTA above the fold, repeat it after each persuasive section, and make it sticky on mobile. | 57% of viewing time is above the fold and 74% within the first two screens (NN/g 2018). Sticky CTA: +8% (Conversion Rate Experts), +9% mobile orders (Zipify). 79% of SaaS landing-page visits are mobile (Unbounce). [UX/Vendor] | Moderate |
| 9 | Put true friction reducers next to the button. | 18% abandon over forced accounts and 12% over unclear total cost (Baymard). [UX/Bench] | Moderate |
| 10 | Size the page to the visitor's questions: a considered product needs a longer, scannable page. | A long Crazy Egg page built around visitors' questions beat the control by 30%. A Moz page built from customer interviews raised sales 52% (Conversion Rate Experts). [A/B] | Moderate |
| 11 | Design for scanning. Front-load headings; use numbered steps only where order matters. | The F-pattern is a failure mode, not a goal (NN/g). [UX] | Strong |
| 12 | Match the page to the ad or link that brought the visitor. | Information scent (NN/g). Landing-page relevance is part of Google Ads Quality Score. [UX/Reg] | Moderate–Strong |
| 13 | Speed: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1. | 0.1 s faster on mobile: +8.4% retail conversions (Deloitte/Google, 30M sessions). Vodafone: 31% better LCP gave +8% sales. [Bench/A/B] | Strong |
| 14 | Social proof works when it is specific, attributable and from similar people; showing low counts backfires. | 5 reviews vs none: 270% more likely to buy (Spiegel Research Center). Similar-people norms are stronger (Goldstein & Cialdini 2008). Low counts backfire (NN/g). [Acad/UX] | Strong/Moderate |
| 15 | Pricing: 2–4 plans, an honest "recommended" plan, no decoys. | Centre-stage effect (Valenzuela & Raghubir 2009). The decoy effect did not replicate in 19 studies with realistic products (Frederick, Lee & Baskin 2014). A "Most popular" badge must be true. [Acad] | Moderate |
| 16 | Episodic needs suit time-boxed passes; per-day framing makes small prices feel small. | "Pennies-a-day" framing (Gourville 1998). People prefer flat fees, without higher churn (Lambrecht & Skiera 2006). A job search is episodic (our inference). [Acad] | Moderate |
| 17 | Show the free tier's limits and the full price up front. | 12% abandon over unclear total cost (Baymard). US law (ROSCA) requires material terms before billing details are collected. [Reg/UX] | Strong |
| 18 | Lenient refunds raise purchases. | Meta-analysis of ~21 studies (Janakiraman et al. 2016). Brazil's 7-day right of withdrawal (CDC art. 49) is the legal floor, so it can't be marketed as a perk. [Acad/Reg] | Moderate |
| 19 | Answer objections next to pricing and CTAs. | For us: will it invent experience, what happens to my data, does the pass renew, is it ATS-safe, do you guarantee interviews (no). FAQs still deliver value (NN/g). [UX] | Moderate |
| 20 | Use urgency only when it's real. | Scarcity raises purchase intent (Barton et al. 2022, 416 effects). Aggressive dark patterns nearly quadrupled sign-ups but caused strong backlash (Luguri & Strahilevitz 2021). Fake countdowns are illegal in the EU and UK. [Acad/Reg] | Strong (risk) |
| 21 | Substantiate AI and outcome claims. | FTC Operation AI Comply (DoNotPay). "There is no AI exemption" (FTC). [Reg] | Strong |

## When there is no social proof

- **Don't fake any.** 16 CFR 465 bans fake or AI-written testimonials, invented reviewers and fake counts.
- **Let the product be the proof.** Show real output on sample data and label it as an example. A labelled sample document is not a testimonial, so never attach an invented name or photo to it.
- **Publish the method and its limits.** Say how the match is counted and what the AI will not do. Two-sided messages read as more credible (Eisend 2006).
- **Show credentials, not counts.** Real and checkable beats big.
- **Lower the risk.** A one-time pass with no renewal is a risk reducer. A refund window longer than the legal minimum would be another, but that's a business decision; the terms currently say fees are generally non-refundable.
- **Collect real proof from day one,** with consent, and with no reward that depends on the review being positive.

## Dark patterns to avoid

- Fake or resetting countdown timers, or "N people viewing".
- Invented reviews, logos or counts.
- Auto-renewal hidden in a cheap trial, or cancelling that is harder than signing up.
- Confirmshaming.
- Fake "was $X" prices.
- Calling something free when the download is paid.
- Decoy plans, and false "Most popular" badges.
- Marketing a legal right as a perk.

## What this changed on cvsapiens.com

| Before | After | Principle |
| --- | --- | --- |
| "Build a resume that passes ATS and gets interviews" | Says what one job description becomes; no promise the terms of service disclaim | 1, 2, 21 |
| Decorative mascots in the hero | The application kit being made, with the real job-match readout on example data, labelled as an example | 4, 5 |
| "Start Free Trial" (there is no trial) | "Start free" plus what the free plan includes and what the paid plans cost | 7, 9, 17 |
| Prices that didn't match the app ($0 / $30 / $19 per quarter) | The app's plans: Free, 5-Day Pass $9.90 one-time, Monthly $24.90, 3 Months $59.90 | 17 |
| Placeholder "Preview placeholder" boxes | Real kit contents and the published match method | 4, 10 |
| No FAQ | Objections answered: renewals, AI inventing experience, data, ATS, guarantees | 19 |
| CTA only in hero and footer | CTA after each persuasive section, plus a sticky mobile bar | 8 |

## Not verified

- The ContentVerve "+90% from first-person CTA" figure (original page didn't load) and the Highrise "photo +102%" claim. Both were left out.
- The Google/SOASTA bounce figures (the Think with Google page 404s); used as reproduced by Deloitte.
- Spiegel's 4.2–4.7 band, Goldstein's 44%/35%, the details of the Janakiraman meta-analysis, and Eisend's findings are second-hand.
- Brazilian law points (CDC, Decree 7.962/2013) come from secondary sources; planalto.gov.br refused the connection.
- FTC 2026 rulemaking dates come from law-firm alerts, not the Federal Register.
- Sticky-CTA, Yuppiechef, Brookdale and ChartMogul results are vendor case studies; treat them as directional.

## Sources

- NN/g: https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/ · https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/ · https://www.nngroup.com/articles/photos-as-web-content/ · https://www.nngroup.com/articles/login-walls/ · https://www.nngroup.com/articles/scrolling-and-attention/ · https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/ · https://www.nngroup.com/articles/information-scent/ · https://www.nngroup.com/articles/social-proof-ux/ · https://www.nngroup.com/articles/faqs-deliver-value/
- 37signals headline test: https://signalvnoise.com/posts/1525-writing-decisions-headline-tests-on-the-highrise-signup-page
- Unbounce Conversion Benchmark Report: https://unbounce.com/conversion-benchmark-report/saas-conversion-rate/
- VWO / Wingify: https://vwo.com/blog/a-b-testing-case-study-navigation-menu/ · https://wingify.com/blog/image-outperforms-video-increases-monthly-revenue/
- Duolingo: https://review.firstround.com/the-tenets-of-a-b-testing-from-duolingos-master-growth-hacker
- Scheibehenne et al. 2010: https://ideas.repec.org/a/oup/jconrs/v37y2010i3p409-425.html
- Shampanier, Mazar & Ariely 2007: https://ideas.repec.org/a/inm/ormksc/v26y2007i6p742-757.html
- UCPD Annex I: https://www.legislation.gov.uk/eudr/2005/29/annex/I/adopted
- Conversion Rate Experts: https://conversion-rate-experts.com/sticky-cta-win-report/ · https://conversion-rate-experts.com/crazy-egg-case-study/ · https://conversion-rate-experts.com/moz-case-study/
- Zipify: https://zipify.com/mobile-sticky-button-split-test-results/
- Baymard: https://baymard.com/lists/cart-abandonment-rate
- Core Web Vitals and case studies: https://web.dev/articles/vitals · https://web.dev/case-studies/milliseconds-make-millions · https://web.dev/case-studies/vodafone
- Spiegel Research Center: https://spiegel.medill.northwestern.edu/How-Online-Reviews-Influence-Sales
- Yoganarasimhan et al. 2023 (trial length): https://pubsonline.informs.org/doi/10.1287/mnsc.2022.4507
- Luguri & Strahilevitz 2021: https://academic.oup.com/jla/article/13/1/43/6180579
- Mathur et al. 2019: https://arxiv.org/abs/1907.07032
- FTC: https://www.ftc.gov/news-events/news/press-releases/2024/09/ftc-announces-crackdown-deceptive-ai-claims-schemes · Rule on reviews and testimonials: https://www.govinfo.gov/content/pkg/FR-2024-08-22/html/2024-18519.htm
- Stanford Web Credibility: https://credibility.stanford.edu/guidelines
