import type { MetadataRoute } from "next";
import { deploymentBaseUrl } from "../lib/site";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = deploymentBaseUrl();

  return {
    // Nothing is disallowed: CSS, JavaScript, fonts, images and every page
    // route must stay crawlable for Google to render these pages correctly.
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
