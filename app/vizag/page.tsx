import type { Metadata } from "next";
import { LocationPage } from "../../components/location-page";
import { getLocation } from "../../data/locations";

const location = getLocation("vizag")!;

export const metadata: Metadata = {
  title: "Hair Patch in Vizag",
  description: "Private hair patch and hair replacement consultations in Vizag with American Hair Club.",
};

export default function VizagPage() {
  return <LocationPage location={location} />;
}
