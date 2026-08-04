import Link from "next/link";
import {
  isVerified,
  otherLocations,
  type Location,
} from "../data/locations";
import { BRAND_LOGO_ALT, BRAND_LOGO_URL, canonicalUrl } from "../lib/site";
import {
  breadcrumbNode,
  buildGraph,
  faqPageNode,
  localBusinessNode,
  organizationNode,
  webPageNode,
  websiteNode,
} from "../lib/structured-data";
import { JsonLd } from "./json-ld";
import { Breadcrumbs } from "./breadcrumbs";
import { SiteFrame } from "./site-chrome";

const PENDING_BRANCH_DETAILS =
  "Contact our team to confirm current appointment availability and branch details.";

export function LocationPage({ location }: { location: Location }) {
  const url = location.canonical;
  const nearby = otherLocations(location.slug);
  const localBusiness = localBusinessNode(location);

  const graph = buildGraph([
    organizationNode(),
    websiteNode(),
    breadcrumbNode(url, [
      { name: "Home", url: canonicalUrl("/") },
      { name: "Locations", url: canonicalUrl("locations") },
      { name: location.city, url },
    ]),
    webPageNode({
      url,
      name: location.metaTitle,
      description: location.metaDescription,
      hasBreadcrumb: true,
      primaryEntityId: localBusiness
        ? (localBusiness["@id"] as string)
        : undefined,
    }),
    localBusiness,
    faqPageNode(url, location.faqs),
  ]);

  const hasVerifiedContact =
    (isVerified(location, "phone") && location.contact.phone) ||
    (isVerified(location, "whatsapp") && location.contact.whatsapp) ||
    (isVerified(location, "hours") && location.contact.hoursLabel);

  return (
    <SiteFrame location={location}>
      <main className="location-page">
      <JsonLd id={`ld-${location.slug}`} data={graph} />

      <section className="page-hero">
        <div className="shell">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Locations", href: "/locations/" },
              { name: location.city },
            ]}
          />
          <h1>{location.pageTitle}</h1>
          <p className="hero-lede">{location.hero.lede}</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#consultation">
              Book a Private Consultation
            </a>
            <a className="button button-outline-light" href="#visit">
              See {location.city} branch details
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="location-intro">
        <div className="shell location-intro-grid">
          <div>
            <p className="eyebrow">{location.hero.eyebrow}</p>
            <h2>{location.intro.heading}</h2>
            {location.intro.paragraphs.map((paragraph, index) => (
              <p className="section-copy" key={index}>
                {paragraph}
              </p>
            ))}
            <div className="button-row">
              <a className="button button-dark" href="#consultation">
                Book a Private Consultation
              </a>
              <a className="button button-outline" href="#faq">
                Read common questions
              </a>
            </div>
          </div>
          {/*
            A real branch photograph is used as soon as one is supplied and
            marked verified; until then the branded panel is shown rather than
            an empty placeholder. Explicit width/height on the photo reserves
            its space so it cannot shift the layout while loading.
          */}
          {isVerified(location, "photos") && location.media.heroImage ? (
            <div className="location-image">
              <img
                src={location.media.heroImage.src}
                alt={location.media.heroImage.alt}
                width={location.media.heroImage.width}
                height={location.media.heroImage.height}
              />
            </div>
          ) : (
            <div className="location-image-placeholder">
              <img src={BRAND_LOGO_URL} alt={BRAND_LOGO_ALT} loading="lazy" />
              <p>Personal care. Natural-looking confidence.</p>
            </div>
          )}
        </div>
      </section>

      <section className="gold-band" aria-label={`American Hair Club ${location.city} at a glance`}>
        <div className="shell gold-band-grid">
          {location.band.map((item) => (
            <div className="gold-band-item" key={item.label}>
              <strong>{item.label}</strong>
              <span>{item.note}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="content-section tinted">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Our services</p>
              <h2>{location.services.heading}</h2>
            </div>
            <p className="section-copy">{location.services.lede}</p>
          </div>
          <div className="service-grid">
            {location.services.cards.map((card, index) => {
              const image = location.media.galleryImages[index % location.media.galleryImages.length];

              return (
                <article className="service-card" key={card.id}>
                  {image ? (
                    <img
                      className="service-card-image"
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      loading="lazy"
                    />
                  ) : null}
                  <div className="service-card-body">
                    <span className="service-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="why" className="content-section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Why American Hair Club</p>
              <h2>{location.whyChoose.heading}</h2>
            </div>
            <p className="section-copy">{location.whyChoose.lede}</p>
          </div>
          <ul className="reason-grid">
            {location.whyChoose.points.map((point) => (
              <li className="reason-card" key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="faq" className="faq-section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Questions</p>
              <h2>
                Hair patch and hair replacement questions,
                <br />
                answered for {location.city}.
              </h2>
            </div>
            <p className="section-copy">{location.faqIntro}</p>
          </div>
          <div className="faq-list">
            {location.faqs.map((faq) => (
              <article className="faq-item" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="details-section">
        <div className="shell details-grid">
          <div>
            <p className="eyebrow">Visit American Hair Club</p>
            <h2>{location.visit.heading}</h2>
            <p className="section-copy">{location.visit.lede}</p>
            <p className="section-copy">
              We regularly see visitors from {location.areasServedLabel}.
            </p>
            <p className="section-copy">
              Considering another city? Compare all{" "}
              <Link className="text-link" href="/locations/">
                American Hair Club locations
              </Link>
              {nearby.map((other, index) => (
                <span key={other.slug}>
                  {index === 0 ? ", or read about " : " and "}
                  <Link className="text-link" href={`/${other.slug}/`}>
                    hair patch and hair replacement in {other.city}
                  </Link>
                </span>
              ))}
              .
            </p>
          </div>

          <div className="contact-card">
            <h3 className="contact-card-title">
              American Hair Club {location.city}
            </h3>

            {location.contact.address ? (
              <p>
                <span className="contact-label">Address</span>
                <span>{location.contact.address}</span>
              </p>
            ) : null}

            {isVerified(location, "phone") && location.contact.phone ? (
              <p>
                <span className="contact-label">Phone</span>
                <a
                  className="text-link"
                  href={`tel:${location.contact.phone.replace(/\s+/g, "")}`}
                >
                  {location.contact.phone}
                </a>
              </p>
            ) : null}

            {isVerified(location, "whatsapp") && location.contact.whatsapp ? (
              <p>
                <span className="contact-label">WhatsApp</span>
                <a
                  className="text-link"
                  href={`https://wa.me/${location.contact.whatsapp.replace(/\D/g, "")}`}
                >
                  {location.contact.whatsapp}
                </a>
              </p>
            ) : null}

            {isVerified(location, "hours") && location.contact.hoursLabel ? (
              <p>
                <span className="contact-label">Opening hours</span>
                <span>{location.contact.hoursLabel}</span>
              </p>
            ) : null}

            {isVerified(location, "mapUrl") && location.contact.mapUrl ? (
              <p>
                <a
                  className="text-link"
                  href={location.contact.mapUrl}
                  rel="noopener"
                >
                  Open the {location.city} studio in Google Maps
                </a>
              </p>
            ) : null}

            {hasVerifiedContact ? null : (
              <p>
                <span className="contact-label">Appointments</span>
                <span className="contact-note">{PENDING_BRANCH_DETAILS}</span>
              </p>
            )}

            <p>
              <Link className="text-link" href="/locations/">
                See all American Hair Club locations
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section id="consultation" className="cta-section">
        <div className="shell cta-inner">
          <div>
            <p className="eyebrow">Start with a conversation</p>
            <h2>Ready to talk it through?</h2>
            <p>
              Consultations at our {location.city}
              {location.alternateCityName
                ? ` (${location.alternateCityName})`
                : ""}{" "}
              studio are private, by appointment, and come with no obligation to
              go ahead.
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
