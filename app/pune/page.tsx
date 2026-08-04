import type { Metadata } from "next";
import { LocationPage } from "../../components/location-page";
import { getLocation } from "../../data/locations";

const location = getLocation("pune")!;

export const metadata: Metadata = {
  title: "Hair Patch in Pune",
  description: "Private hair patch and hair replacement consultations in Pune with American Hair Club.",
};

export default function PunePage() {
  return <LocationPage location={location} />;
}
