import { content } from "./content/en";
import { Faq } from "./components/faq";
import { FinalCta } from "./components/final-cta";
import { Hero } from "./components/hero";
import { Honest } from "./components/honest";
import { HowItWorks } from "./components/how-it-works";
import { KitSpread } from "./components/kit-spread";
import { Pricing } from "./components/pricing";
import { Problem } from "./components/problem";
import { SiteFooter } from "./components/site-footer";
import { SiteNav } from "./components/site-nav";
import { StickyCta } from "./components/sticky-cta";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        {content.nav.skip}
      </a>
      <div id="top" />
      <SiteNav />
      <main id="main">
        <Hero />
        <Problem />
        <HowItWorks />
        <KitSpread />
        <Honest />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <StickyCta />
    </>
  );
}
