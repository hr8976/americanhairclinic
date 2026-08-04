import type { Metadata } from "next";
import Link from "next/link";
import { locations } from "../../data/locations";

export const metadata: Metadata = {
  title: "Hair Patch Clinics and Consultations in India",
  description:
    "Explore American Hair Club locations in Pune, Bangalore, and Vizag for private hair patch and hair replacement consultations.",
};

export default function LocationsPage() {
  return (
    <main>
      <section className="locations-hero">
        <div className="shell locations-hero-grid">
          <div>
            <p className="eyebrow">American Hair Club · Locations</p>
            <h1>Find a private place to start your next chapter.</h1>
            <p className="hero-lead">
              Visit an American Hair Club location for clear, personal guidance on hair patches, hair replacement systems, and ongoing care.
            </p>
          </div>
          <div className="hero-orbit" aria-hidden="true">
            <span className="orbit-ring orbit-ring-one" />
            <span className="orbit-ring orbit-ring-two" />
            <span className="orbit-center">AHC</span>
            <span className="orbit-label orbit-label-one">Private</span>
            <span className="orbit-label orbit-label-two">Personal</span>
            <span className="orbit-label orbit-label-three">Natural</span>
          </div>
        </div>
      </section>

      <section className="location-list-section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Choose your city</p>
              <h2>Our locations</h2>
            </div>
            <p>Each consultation is designed to be private, unrushed, and focused on what feels right for you.</p>
          </div>
          <div className="location-grid">
            {locations.map((location, index) => (
              <Link className="location-card" href={`/${location.slug}`} key={location.slug}>
                <span className="card-index">0{index + 1}</span>
                <span className="card-city">{location.city}</span>
                <span className="card-region">{location.region}</span>
                <span className="card-address">{location.address}</span>
                <span className="card-link">Explore location <span aria-hidden="true">↗</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="consultation" className="consultation-band">
        <div className="shell consultation-inner">
          <div>
            <p className="eyebrow eyebrow-light">Begin privately</p>
            <h2>A confident next step starts with a conversation.</h2>
          </div>
          <p>Phone, WhatsApp, and opening-hour details will be added after each branch is verified.</p>
        </div>
      </section>
    </main>
  );
}
