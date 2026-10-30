---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: []
---

# Landing page (cvsapiens.com)

## Scope and mode

The marketing home page, `app/page.tsx` and `app/components/*`, copy in `app/content/en.ts`. Visitor mode: Persuade.

## Brief

- Audience: job seekers applying to several roles, in any field rather than developers, often applying to international and remote jobs; mostly on phones. The page's focus is tailoring the resume to the job and the suggestions that do it (2026-10-31).
- Action: Start free (app sign-up). Secondary: understand what the paid plans add and that the 5-day pass does not renew.
- Proof: demonstration on one made-up application with no visible "Example" stamp, at the user's request (the job match readout, a suggestion you keep or skip, a real template page rendered by the app), the published match method, the parseability tests, honest pricing. No testimonials, logos, counts or outcome stats exist; none may be invented.
- Constraints: prices and claims match the app (PRODUCT.md). Blended world chosen by the user: app palette and type, the old page's coloured shapes and mascot banner as accents.
- Memorable moment: one example posting, pinned at the top, whose marked requirements are tied by an orange thread to everything the page shows it becoming.
- Unresolved: pt-BR page (copy file is ready to translate); a refund window beyond the terms; real testimonials once users consent.

## Direction contract

THESIS: The page follows one example job posting from paste to interview; every section is something that posting becomes, tied to it by one thread. It refuses the category page of hero + logo wall + equal feature cards + user counts.
OWN-WORLD: Warm paper ground (#fbf8f5, deeper #f5f0eb bands), white documents as the only elevated objects, ink #1e1e1e for type and the one primary button, burnt orange #c44100 for the thread, links and focus, illustration orange #fd853a for requirement marks. Zilla Slab headlines, Google Sans Flex for everything else. Hand-drawn monkey scenes; the old page's arch, U and asterisk shapes as pins and stickers; the mascot banner as sign-off.
STORY: The visitor sees a real-looking posting become a tailored resume, a letter, a board card and interview prep; learns the match is counted and they choose every change; sees every price and that the pass ends on its own; starts free.
FIRST VIEWPORT: Desktop: slim nav; the posting pinned at left at document scale, tilted -3deg, requirements marked; headline "Paste the job. Get your resume tailored to it." at right, 56-64px Zilla Slab, lead, ink Start free; the kit scene on a pink stage bottom right; the thread runs from the marks to the headline and to the scene. Phone: headline, lead, Start free, then the posting and scene.
FORM: "One posting, one application", item 1 of my ordered list of 7, dealt second in the hand. seed: 07c958bc50231a52. Signature interaction: the thread draws itself section by section as you scroll (scroll-driven, static fallback) and the kit scene plays once, then offers Play again; one suggestion card you keep or skip moves the match from 3 to 4 of 6. Motion grammar: ease-out-expo arrivals, nothing loops unless work is shown happening.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
