import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../../components/breadcrumbs";
import { JsonLd } from "../../components/json-ld";
import { locations } from "../../data/locations";
import { buildPageMetadata } from "../../lib/metadata";
import { canonicalUrl } from "../../lib/site";
import { SiteFrame } from "../../components/site-chrome";
import {
  breadcrumbNode,
  buildGraph,
  organizationNode,
  webPageNode,
  websiteNode,
} from "../../lib/structured-data";

const PAGE_TITLE = "American Hair Club Locations | Pune, Bangalore & Vizag";
const PAGE_DESCRIPTION =
  "Explore American Hair Club locations in Pune, Bangalore and Vizag for hair patch and non-surgical hair replacement consultations.";
const CANONICAL = canonicalUrl("locations");

export const metadata: Metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  canonical: CANONICAL,
});

const graph = buildGraph([
  organizationNode(),
  websiteNode(),
  breadcrumbNode(CANONICAL, [
    { name: "Home", url: canonicalUrl("/") },
    { name: "Locations", url: CANONICAL },
  ]),
  webPageNode({
    url: CANONICAL,
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    hasBreadcrumb: true,
  }),
]);

export default function LocationsPage() {
  return (
    <SiteFrame>
      <main>
      <JsonLd id="ld-locations" data={graph} />

      <section className="page-hero">
        <div className="shell">
          <Breadcrumbs
            items={[{ name: "Home", href: "/" }, { name: "Locations" }]}
          />
          <h1>American Hair Club Locations</h1>
          <p className="hero-lede">
            Private hair patch and non-surgical hair replacement consultations
            in Pune, Bangalore and Vizag.
          </p>
        </div>
      </section>

      <section id="about" className="location-intro">
        <div className="shell location-intro-grid">
          <div>
            <p className="eyebrow">American Hair Club</p>
            <h2>Find the right place to begin.</h2>
            <p className="section-copy">
              Each American Hair Club studio offers the same starting point: an
              unhurried, one-to-one conversation about custom hair patches, hair
              replacement systems, extensions and the upkeep that goes with
              them. Nothing is decided for you on the day.
            </p>
            <p className="section-copy">
              Choose the city closest to you below. Every location page explains
              what that studio can help with, answers the questions people in
              that city ask most often, and tells you how to arrange a private
              consultation.
            </p>
          </div>
          <div className="location-image-placeholder">
            <p>Private consultations across India.</p>
          </div>
        </div>
      </section>

      <section id="services" className="locations-list">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Choose your city</p>
              <h2>Our locations</h2>
            </div>
            <p className="section-copy">
              Select a city to see what that studio offers and how to book.
            </p>
          </div>
          <ul className="location-grid">
            {locations.map((location, index) => (
              <li key={location.slug}>
                <Link className="location-card" href={`/${location.slug}/`}>
                  <span className="card-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="card-city">{location.city}</span>
                  <span className="card-region">
                    {location.alternateCityName
                      ? `${location.alternateCityName} · ${location.region}`
                      : location.region}
                  </span>
                  <span className="card-address">
                    {location.contact.address}
                  </span>
                  <span className="card-link">
                    Hair patch &amp; hair replacement in {location.city}
                    &nbsp;»
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="section-copy locations-note">
            Read more about{" "}
            <Link className="inline-link" href="/pune/">
              hair patch and hair replacement in Pune
            </Link>
            ,{" "}
            <Link className="inline-link" href="/bangalore/">
              hair patch and hair replacement in Bangalore
            </Link>{" "}
            or{" "}
            <Link className="inline-link" href="/vizag/">
              hair patch and hair replacement in Vizag
            </Link>
            .
          </p>
        </div>
      </section>

      <section id="consultation" className="cta-section">
        <div className="shell cta-inner">
          <div>
            <p className="eyebrow">Begin privately</p>
            <h2>A confident next step starts with a conversation.</h2>
            <p>
              Choose the studio nearest to you and arrange a private, no
              obligation consultation.
            </p>
          </div>
          <a className="button button-gold" href="#contact">
            Book a Private Consultation
          </a>
        </div>
      </section>
      </main>
    </SiteFrame>
  );
}
