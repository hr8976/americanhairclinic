import type { Metadata } from "next";
import Link from "next/link";
import { locations } from "../data/locations";

export const metadata: Metadata = {
  title: { absolute: "Page not found | American Hair Club" },
  description:
    "The page you were looking for is not available. Browse American Hair Club locations in Pune, Bangalore and Vizag.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main>
      <section className="page-hero">
        <div className="shell">
          <h1>Page not found</h1>
          <p className="hero-lede">
            The page you were looking for is not available. The links below will
            take you back to the right place.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="shell">
          <h2>Where would you like to go?</h2>
          <ul className="plain-list">
            <li>
              <Link className="inline-link" href="/locations/">
                All American Hair Club locations
              </Link>
            </li>
            {locations.map((location) => (
              <li key={location.slug}>
                <Link className="inline-link" href={`/${location.slug}/`}>
                  Hair patch and hair replacement in {location.city}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
