import type { Location } from "../data/locations";
import Link from "next/link";

const logoUrl = "https://americanhairclubs.com/wp-content/uploads/2023/08/channels4_profile-removebg-preview-e1758703204748.png";

export function LocationPage({ location }: { location: Location }) {
  return (
    <main className="location-page">
      <section className="page-hero">
        <div className="shell">
          <p className="breadcrumb">Home &nbsp;›&nbsp; {location.city}</p>
          <h1>{location.title}</h1>
        </div>
      </section>

      <section id="about" className="location-intro">
        <div className="shell location-intro-grid">
          <div>
            <p className="eyebrow">About American Hair Club</p>
            <h2>Hair solutions designed around you.</h2>
            <p className="section-copy">{location.shortDescription}</p>
            <p className="section-copy">Our team takes the time to understand your goals, explain your options clearly, and help you find a comfortable, natural-looking solution without pressure.</p>
            <div className="button-row">
              <a className="button button-dark" href="#consultation">Free Consultation</a>
              <a className="button button-outline" href="#location-details">View Location</a>
            </div>
          </div>
          <div className="location-image-placeholder" aria-label={`American Hair Club ${location.city}`}>
            <img src={logoUrl} alt="American Hair Club" />
            <p>Personal care. Natural-looking confidence.</p>
          </div>
        </div>
      </section>

      <section className="gold-band" aria-label="American Hair Club benefits">
        <div className="shell gold-band-grid">
          <div className="gold-band-item"><strong>Private consultations</strong><span>Comfortable, discreet guidance</span></div>
          <div className="gold-band-item"><strong>Natural-looking results</strong><span>Matched to your appearance</span></div>
          <div className="gold-band-item"><strong>Personalised support</strong><span>Help before and after your visit</span></div>
        </div>
      </section>

      <section id="services" className="content-section tinted">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow">Our services</p><h2>Hair patches for men and women.</h2></div>
            <p className="section-copy">Explore practical, discreet options with guidance from consultation through ongoing care.</p>
          </div>
          <div className="service-grid">
            <article className="service-card"><span className="service-number">01</span><h3>Hair Patch</h3><p>A lightweight, breathable system custom-fitted to your scalp shape, hair texture, and desired look.</p></article>
            <article className="service-card"><span className="service-number">02</span><h3>Hair Replacement</h3><p>Comfortable, natural-looking solutions with support for fit, styling, maintenance, and care.</p></article>
            <article className="service-card"><span className="service-number">03</span><h3>Hair Extensions</h3><p>Matched options for adding volume, length, and confidence while keeping your natural style in mind.</p></article>
          </div>
        </div>
      </section>

      <section id="location-details" className="details-section">
        <div className="shell details-grid">
          <div>
            <p className="eyebrow">Visit American Hair Club</p>
            <h2>Hair patch support in {location.city}.</h2>
            <p className="section-copy">Serving {location.areas}. Visit us for a private consultation and a clear conversation about your next step.</p>
          </div>
          <div className="contact-card">
            <p><span className="contact-label">Address</span>{location.address}</p>
            <p><span className="contact-label">Branch contact details</span><span className="contact-note">Phone, WhatsApp, opening hours, and the Google Maps link will be added after this branch information is verified.</span></p>
            <Link className="text-link" href="/locations">« See all locations</Link>
          </div>
        </div>
      </section>

      <section id="consultation" className="cta-section">
        <div className="shell cta-inner">
          <div><p className="eyebrow">Start with a conversation</p><h2>Ready to explore your options?</h2><p>Book a private consultation at our {location.city} location.</p></div>
          <a className="button button-gold" href="/locations#contact">Request a Consultation</a>
        </div>
      </section>
    </main>
  );
}
