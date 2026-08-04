import type { Location } from "../data/locations";
import Link from "next/link";

export function LocationPage({ location }: { location: Location }) {
  return (
    <main className="location-page">
      <section className="location-hero">
        <div className="shell location-hero-grid">
          <div className="location-hero-copy">
            <p className="eyebrow">American Hair Club · {location.city}</p>
            <h1>{location.title}</h1>
            <p className="hero-lead">{location.shortDescription}</p>
            <div className="button-row">
              <a className="button button-primary" href="#consultation">Book a private consultation</a>
              <a className="button button-secondary" href="#location-details">View location details</a>
            </div>
          </div>
          <div className="location-visual" style={{ "--accent": location.accent } as React.CSSProperties}>
            <div className="visual-sun" />
            <div className="visual-arch">
              <span className="visual-mark">AHC</span>
              <span className="visual-city">{location.city}</span>
            </div>
            <span className="visual-caption">A more personal approach to hair replacement</span>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="American Hair Club benefits">
        <div className="shell trust-grid">
          <div><strong>Private consultations</strong><span>Comfortable, discreet guidance</span></div>
          <div><strong>Natural-looking results</strong><span>Designed around your appearance</span></div>
          <div><strong>Personalised support</strong><span>Help before and after your visit</span></div>
        </div>
      </section>

      <section className="content-section">
        <div className="shell two-column">
          <div>
            <p className="eyebrow">Hair solutions for you</p>
            <h2>A more confident way to address hair loss.</h2>
          </div>
          <div className="copy">
            <p>Hair loss can affect how you feel every day. Our team takes the time to understand what you want, explain your options clearly, and help you choose a solution that feels natural and comfortable.</p>
            <p>Every consultation is private and personal. You can ask questions, see suitable options, and decide at your own pace.</p>
          </div>
        </div>
      </section>

      <section className="content-section tinted">
        <div className="shell">
          <div className="section-heading compact-heading">
            <div><p className="eyebrow">Our services</p><h2>Support that starts with listening.</h2></div>
          </div>
          <div className="service-grid">
            <article><span>01</span><h3>Hair patch consultation</h3><p>Discuss your goals and explore options suited to your hair, lifestyle, and budget.</p></article>
            <article><span>02</span><h3>Hair replacement systems</h3><p>Find a natural-looking system with guidance on fit, styling, maintenance, and care.</p></article>
            <article><span>03</span><h3>Ongoing maintenance</h3><p>Receive practical support to keep your hair replacement looking and feeling its best.</p></article>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="shell">
          <div className="section-heading compact-heading"><div><p className="eyebrow">What to expect</p><h2>Your consultation, step by step.</h2></div></div>
          <div className="steps-grid">
            <div><span>1</span><h3>Talk privately</h3><p>Tell us what you are experiencing and what you would like to change.</p></div>
            <div><span>2</span><h3>Explore your options</h3><p>We explain suitable solutions and answer your questions without pressure.</p></div>
            <div><span>3</span><h3>Choose your next step</h3><p>Move forward only when you feel comfortable and confident.</p></div>
          </div>
        </div>
      </section>

      <section id="location-details" className="details-section">
        <div className="shell two-column details-grid">
          <div>
            <p className="eyebrow">Visit American Hair Club</p>
            <h2>Hair patch support in {location.city}.</h2>
            <p className="copy">Serving {location.areas}.</p>
          </div>
          <div className="contact-card">
            <p><strong>Address</strong><br />{location.address}</p>
            <p><strong>Phone, WhatsApp, and hours</strong><br /><em>Branch details will be added after verification.</em></p>
            <Link className="text-link" href="/locations">See all locations <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section id="consultation" className="cta-section">
        <div className="shell cta-inner">
          <div><p className="eyebrow eyebrow-light">Start with a conversation</p><h2>Ready to explore your options?</h2><p>Book a private consultation at our {location.city} location.</p></div>
          <a className="button button-light" href="/locations#consultation">Request a consultation</a>
        </div>
      </section>
    </main>
  );
}
