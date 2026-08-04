import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
  return ["/locations", "/pune", "/bangalore", "/vizag"].map((path) => ({ url: `${baseUrl}${path}`, changeFrequency: "monthly", priority: path === "/locations" ? 0.9 : 0.8 }));
}
