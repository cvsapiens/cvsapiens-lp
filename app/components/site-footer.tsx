import Image from "next/image";
import { content } from "../content/en";

const { footer } = content;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <Image
          src="/illustration-icons-lp-svg/SapiensLP-Banner.png"
          alt={footer.cast}
          width={1244}
          height={174}
          sizes="(min-width: 1280px) 1200px, 100vw"
          className="site-footer__cast"
        />
      </div>
      <div className="site-footer__band">
        <div className="container site-footer__grid">
          <div>
            <Image
              src="/illustration-icons-lp-svg/logo-horizontal-white.svg"
              alt="cv sapiens"
              width={656}
              height={92}
              className="site-footer__logo"
            />
            <p className="site-footer__tagline">{footer.tagline}</p>
          </div>
          <nav aria-label="Footer" className="site-footer__nav">
            {footer.links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="site-footer__legal">
            {footer.legal.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <span>{footer.copyright}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
