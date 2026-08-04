import type { MetadataRoute } from "next";
import { locations } from "../data/locations";
import { deploymentBaseUrl } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = deploymentBaseUrl();
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}/locations/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...locations.map((location) => ({
      url: `${baseUrl}/${location.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
