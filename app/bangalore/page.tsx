import type { Metadata } from "next";
import { LocationPage } from "../../components/location-page";
import { getLocation } from "../../data/locations";

const location = getLocation("bangalore")!;

export const metadata: Metadata = {
  title: "Hair Patch in Bangalore",
  description: "Private hair patch and hair replacement consultations in Bangalore with American Hair Club.",
};

export default function BangalorePage() {
  return <LocationPage location={location} />;
}
