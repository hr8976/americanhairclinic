import type { Metadata } from "next";
import { LocationPage } from "../../components/location-page";
import { requireLocation } from "../../data/locations";
import { buildPageMetadata } from "../../lib/metadata";

const location = requireLocation("pune");

export const metadata: Metadata = buildPageMetadata({
  title: location.metaTitle,
  description: location.metaDescription,
  canonical: location.canonical,
});

export default function PunePage() {
  return <LocationPage location={location} />;
}
