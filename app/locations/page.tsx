import type { Metadata } from "next";
import Link from "next/link";
import { locations } from "../../data/locations";

export const metadata: Metadata = {
  title: "Hair Patch Clinics and Consultations in India",
  description: "Explore American Hair Club locations in Pune, Bangalore, and Vizag for private hair patch and hair replacement consultations.",
};

export default function LocationsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="shell">
          <p className="breadcrumb">Home &nbsp;›&nbsp; Locations</p>
          <h1>Our Locations</h1>
        </div>
      </section>
      <section id="about" className="location-intro">
        <div className="shell location-intro-grid">
          <div>
            <p className="eyebrow">American Hair Club</p>
            <h2>Find the right place to begin.</h2>
            <p className="section-copy">Visit an American Hair Club location for clear, personal guidance on hair patches, hair replacement systems, extensions, and ongoing care.</p>
            <p className="section-copy">Every consultation is private, unrushed, and focused on what feels right for you.</p>
          </div>
          <div className="location-image-placeholder">
            <p>Private consultations across India.</p>
          </div>
        </div>
      </section>
      <section id="services" className="locations-list">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow">Choose your city</p><h2>Locations</h2></div>
            <p className="section-copy">Select a location to see the branch details and services available there.</p>
          </div>
          <div className="location-grid">
            {locations.map((location, index) => (
              <Link className="location-card" href={`/${location.slug}`} key={location.slug}>
                <span className="card-index">0{index + 1}</span>
                <span className="card-city">{location.city}</span>
                <span className="card-region">{location.region}</span>
                <span className="card-address">{location.address}</span>
                <span className="card-link">Explore location&nbsp; »</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section id="consultation" className="cta-section">
        <div className="shell cta-inner">
          <div><p className="eyebrow">Begin privately</p><h2>A confident next step starts with a conversation.</h2><p>Choose a location and request a private consultation.</p></div>
          <a className="button button-gold" href="#contact">Free Consultation</a>
        </div>
      </section>
    </main>
  );
}
