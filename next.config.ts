import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  /**
   * The published URLs for these pages are /locations/, /pune/, /bangalore/
   * and /vizag/. Enforcing the trailing slash keeps the served URL identical
   * to the canonical tag and to the sitemap entry, so the slash-less form
   * 308-redirects instead of becoming a second indexable copy.
   */
  trailingSlash: true,
};

export default nextConfig;
