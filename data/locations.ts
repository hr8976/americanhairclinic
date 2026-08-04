export type Location = {
  slug: "pune" | "bangalore" | "vizag";
  city: string;
  region: string;
  title: string;
  shortDescription: string;
  address: string;
  areas: string;
  accent: string;
};

export const locations: Location[] = [
  {
    slug: "pune",
    city: "Pune",
    region: "Maharashtra",
    title: "Hair patch and hair replacement in Pune",
    shortDescription:
      "Private, natural-looking hair replacement guidance designed around your comfort, appearance, and lifestyle.",
    address:
      "Shop 82, 1st Floor, Rajiv Gandhi Infotech Park, VJ Happiness Street, Hinjawadi Phase II, Pune",
    areas: "Pune and nearby areas",
    accent: "#c7a26b",
  },
  {
    slug: "bangalore",
    city: "Bangalore",
    region: "Karnataka",
    title: "Hair patch and hair replacement in Bangalore",
    shortDescription:
      "Explore discreet hair replacement solutions with personal guidance from consultation through ongoing care.",
    address:
      "2nd Floor, Site, Saroj Square, 1, Silver Spring Layout Road, Silver Springs Layout, Bengaluru",
    areas: "Bangalore and nearby areas",
    accent: "#9aa879",
  },
  {
    slug: "vizag",
    city: "Vizag",
    region: "Andhra Pradesh",
    title: "Hair patch and hair replacement in Vizag",
    shortDescription:
      "A private place to understand your options, see suitable solutions, and decide on your next step with confidence.",
    address:
      "SevenHills Hospital, 2nd Floor, Flat No. 10, 29-10/11/1, Waltair Main Road, Visakhapatnam",
    areas: "Vizag and nearby areas",
    accent: "#c08d80",
  },
];

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}
