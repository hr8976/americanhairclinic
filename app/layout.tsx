import type { Metadata } from "next";
import Link from "next/link";
import { BRAND_LOGO_URL, PRODUCTION_URL, SITE } from "../lib/site";
import "./globals.css";

const logoUrl = BRAND_LOGO_URL;

export const metadata: Metadata = {
  // Resolves relative metadata URLs (Open Graph, canonicals) against the
  // production domain rather than the deployment host.
  metadataBase: new URL(PRODUCTION_URL),
  title: {
    default: "American Hair Club Locations",
    template: "%s | American Hair Club",
  },
  description:
    "Find American Hair Club hair patch and hair replacement consultations in Pune, Bangalore, and Vizag.",
  applicationName: SITE.name,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: SITE.locale,
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>
        <div className="topbar">
          <div className="shell topbar-inner">
            <div className="topbar-contact">
              <span className="topbar-item"><span className="topbar-icon">⌖</span> Madhapur, Hyderabad</span>
              <span className="topbar-item"><span className="topbar-icon">⌕</span> +(91)8977545598</span>
              <span className="topbar-item"><span className="topbar-icon">✉</span> ahcmadhapur@gmail.com</span>
            </div>
            <div className="topbar-social" aria-label="Social links">
              <a href="https://www.instagram.com/" aria-label="Instagram">Instagram</a>
              <a href="https://www.facebook.com/" aria-label="Facebook">Facebook</a>
              <a href="https://x.com/" aria-label="X">X</a>
              <a href="https://www.linkedin.com/" aria-label="LinkedIn">LinkedIn</a>
            </div>
          </div>
        </div>

        <header className="site-header">
          <div className="shell header-inner">
            <Link className="brand" href="/locations/" aria-label="American Hair Club locations home">
              <img className="brand-logo" src={logoUrl} alt="American Hair Club" />
            </Link>
            <nav className="main-nav" aria-label="Main navigation">
              <Link href="/locations/">HOME</Link>
              <Link className="nav-with-caret" href="/locations/#about">ABOUT US</Link>
              <Link className="nav-with-caret" href="/locations/#services">SERVICES</Link>
              <Link href="/locations/#consultation">FRANCHISE</Link>
              <Link href="/locations/#contact">CONTACT US</Link>
            </nav>
            <div className="header-cta">
              <a className="button button-gold" href="/locations/#consultation">Free Consultation</a>
            </div>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="shell footer-grid">
            <div className="footer-brand">
              <Link className="brand" href="/locations/" aria-label="American Hair Club home">
                <img className="brand-logo" src={logoUrl} alt="American Hair Club" />
              </Link>
              <p>American Hair Club — trusted non-surgical hair restoration and hair replacement solutions.</p>
            </div>
            <div>
              <h2 className="footer-heading">ABOUT US</h2>
              <div className="footer-links">
                <Link href="/locations/">Home</Link>
                <Link href="/locations/#about">About Us</Link>
                <Link href="/locations/#services">Services</Link>
                <Link href="/locations/#consultation">Franchise</Link>
                <Link href="/locations/#contact">Contact Us</Link>
              </div>
            </div>
            <div>
              <h2 className="footer-heading">SERVICES</h2>
              <div className="footer-links">
                <Link href="/locations/#services">HAIR PATCH</Link>
                <Link href="/locations/#services">HAIR EXTENSIONS</Link>
                <Link href="/locations/#services">CLIP IN &amp; CLIP ON HAIR</Link>
                <Link href="/locations/#services">TAPE HAIR EXTENSIONS</Link>
                <Link href="/locations/#services">MICRO/NANO HAIR</Link>
                <Link href="/locations/#services">HAIR WEARING</Link>
              </div>
            </div>
            <div id="contact">
              <h2 className="footer-heading">ADDRESS</h2>
              <div className="footer-contact">
                <div><strong>Phone</strong>+(91)8977545598</div>
                <div><strong>Email</strong>ahcmadhapur@gmail.com</div>
                <div><strong>Hyderabad</strong>Plot No - 1-81, 2nd floor, 202, Mk Maphar Eternal, Kavuri Hills, Madhapur, Telangana 500033, Hyderabad, India.</div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="shell"><p>Copyright @americanhairclubs. All Rights Reserved.</p></div>
          </div>
        </footer>
      </body>
    </html>
  );
}
