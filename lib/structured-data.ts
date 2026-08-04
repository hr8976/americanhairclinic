import {
  canPublishLocalBusiness,
  isVerified,
  type Faq,
  type Location,
} from "../data/locations";
import { BRAND_LOGO_ALT, BRAND_LOGO_URL, PRODUCTION_URL, SITE } from "./site";

/**
 * JSON-LD is emitted as a single `@graph` per page. Keeping every node in one
 * graph, each with a stable `@id`, prevents the duplicate and conflicting
 * schema blocks that appear when separate scripts each redeclare the
 * organisation or the page.
 */

type JsonLdNode = Record<string, unknown>;

export const ORGANIZATION_ID = `${PRODUCTION_URL}/#organization`;
export const WEBSITE_ID = `${PRODUCTION_URL}/#website`;

export function organizationNode(): JsonLdNode {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: `${PRODUCTION_URL}/`,
    logo: {
      "@type": "ImageObject",
      url: BRAND_LOGO_URL,
      caption: BRAND_LOGO_ALT,
    },
    image: BRAND_LOGO_URL,
    telephone: SITE.organisation.telephone,
    email: SITE.organisation.email,
    address: {
      "@type": "PostalAddress",
      ...SITE.organisation.headOffice,
    },
    // `sameAs` is deliberately omitted: no official social profile URLs have
    // been confirmed for the business yet.
  };
}

export function websiteNode(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${PRODUCTION_URL}/`,
    name: SITE.name,
    inLanguage: SITE.language,
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export type BreadcrumbItem = { name: string; url: string };

export function breadcrumbNode(
  pageUrl: string,
  items: BreadcrumbItem[],
): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function webPageNode({
  url,
  name,
  description,
  hasBreadcrumb,
  primaryEntityId,
}: {
  url: string;
  name: string;
  description: string;
  hasBreadcrumb: boolean;
  primaryEntityId?: string;
}): JsonLdNode {
  const node: JsonLdNode = {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: SITE.language,
    isPartOf: { "@id": WEBSITE_ID },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: BRAND_LOGO_URL,
    },
  };
  if (hasBreadcrumb) node.breadcrumb = { "@id": `${url}#breadcrumb` };
  if (primaryEntityId) node.mainEntity = { "@id": primaryEntityId };
  return node;
}

/**
 * FAQPage must mirror the FAQs rendered on the page exactly. It is always built
 * from the same array the component renders, so the two cannot drift apart.
 */
export function faqPageNode(pageUrl: string, faqs: Faq[]): JsonLdNode | null {
  if (faqs.length === 0) return null;
  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Returns a LocalBusiness node only when the branch has a verified postal
 * address and a verified telephone number. Optional properties are added one
 * by one, and only if their verification flag has been set. Nothing here is
 * ever populated with a placeholder.
 */
export function localBusinessNode(location: Location): JsonLdNode | null {
  if (!canPublishLocalBusiness(location)) return null;

  const url = location.canonical;
  const postal = location.contact.postalAddress!;

  const node: JsonLdNode = {
    "@type": "HealthAndBeautyBusiness",
    "@id": `${url}#localbusiness`,
    name: `${SITE.name} ${location.city}`,
    url,
    image: BRAND_LOGO_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: postal.streetAddress,
      addressLocality: postal.addressLocality,
      addressRegion: postal.addressRegion,
      ...(postal.postalCode ? { postalCode: postal.postalCode } : {}),
      addressCountry: postal.addressCountry,
    },
    telephone: location.contact.phone,
    areaServed: [
      { "@type": "City", name: location.city },
      ...(location.alternateCityName
        ? [{ "@type": "City", name: location.alternateCityName }]
        : []),
      ...location.areasServed.map((area) => ({ "@type": "Place", name: area })),
    ],
    parentOrganization: { "@id": ORGANIZATION_ID },
  };

  if (isVerified(location, "hours") && location.contact.hours?.length) {
    node.openingHours = location.contact.hours;
  }
  if (
    isVerified(location, "geo") &&
    location.contact.latitude !== null &&
    location.contact.longitude !== null
  ) {
    node.geo = {
      "@type": "GeoCoordinates",
      latitude: location.contact.latitude,
      longitude: location.contact.longitude,
    };
  }
  if (isVerified(location, "mapUrl") && location.contact.mapUrl) {
    node.hasMap = location.contact.mapUrl;
  }

  const sameAs = [
    ...(isVerified(location, "googleBusinessProfile") &&
    location.contact.googleBusinessProfileUrl
      ? [location.contact.googleBusinessProfileUrl]
      : []),
    ...location.contact.officialProfiles,
  ];
  if (sameAs.length > 0) node.sameAs = sameAs;

  return node;
}

/** Assembles the final `@context` + `@graph` document for a page. */
export function buildGraph(nodes: Array<JsonLdNode | null>) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.filter((node): node is JsonLdNode => node !== null),
  };
}
