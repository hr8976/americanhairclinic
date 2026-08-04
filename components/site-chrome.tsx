import Link from "next/link";
import type { Location } from "../data/locations";
import { isVerified } from "../data/locations";
import { BRAND_LOGO_ALT, BRAND_LOGO_URL } from "../lib/site";

type IconName = "location" | "calendar";

function ContactIcon({ name }: { name: IconName }) {
  const paths: Record<IconName, string> = {
    location:
      "M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z M12 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
    calendar:
      "M5 4h14a2 2 0 0 1 2 2v13H3V6a2 2 0 0 1 2-2Z M7 2v4M17 2v4M3 9h18",
  };

  return (
    <svg className="topbar-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {paths[name].split(" M").map((path, index) => (
        <path key={index} d={(index ? "M" : "") + path} />
      ))}
    </svg>
  );
}

function SiteHeader({ location }: { location?: Location }) {
  const basePath = location ? "/" + location.slug + "/" : "/locations/";
  const locationLabel = location
    ? location.city + ", " + location.region
    : "Pune · Bangalore · Vizag";

  return (
    <>
      <div className="topbar">
        <div className="shell topbar-inner">
          <div className="topbar-contact">
            <span className="topbar-item">
              <ContactIcon name="location" /> {locationLabel}
            </span>
            <span className="topbar-item">
              <ContactIcon name="calendar" /> Private consultation by appointment
            </span>
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
            <img className="brand-logo" src={BRAND_LOGO_URL} alt={BRAND_LOGO_ALT} />
          </Link>
          <nav className="main-nav" aria-label="Main navigation">
            <Link href="/locations/">HOME</Link>
            <Link className="nav-with-caret" href={basePath + "#about"}>ABOUT US</Link>
            <Link className="nav-with-caret" href={basePath + "#services"}>SERVICES</Link>
            <Link href={basePath + "#consultation"}>FRANCHISE</Link>
            <Link href={basePath + "#contact"}>CONTACT US</Link>
          </nav>
          <div className="header-cta">
            <a className="button button-gold" href={basePath + "#consultation"}>Free Consultation</a>
          </div>
        </div>
      </header>
    </>
  );
}

function SiteFooter({ location }: { location?: Location }) {
  const cityLabel = location
    ? location.city + ", " + location.region
    : "Pune · Bangalore · Vizag";

  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Link className="brand" href="/locations/" aria-label="American Hair Club home">
            <img className="brand-logo" src={BRAND_LOGO_URL} alt={BRAND_LOGO_ALT} />
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
          <h2 className="footer-heading">LOCATION</h2>
          <div className="footer-contact">
            <div><strong>City</strong>{cityLabel}</div>
            {location && location.contact.address ? (
              <div><strong>Address</strong>{location.contact.address}</div>
            ) : null}
            {location && isVerified(location, "phone") && location.contact.phone ? (
              <div><strong>Phone</strong>{location.contact.phone}</div>
            ) : null}
            {location && isVerified(location, "hours") && location.contact.hoursLabel ? (
              <div><strong>Opening hours</strong>{location.contact.hoursLabel}</div>
            ) : null}
            {!location || !location.contact.address ? (
              <div><strong>Appointments</strong>Contact our team to confirm current branch details.</div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="shell"><p>Copyright @americanhairclubs. All Rights Reserved.</p></div>
      </div>
    </footer>
  );
}

export function SiteFrame({
  children,
  location,
}: {
  children: React.ReactNode;
  location?: Location;
}) {
  return (
    <>
      <SiteHeader location={location} />
      {children}
      <SiteFooter location={location} />
    </>
  );
}
