/**
 * Single source of truth for site-wide SEO constants.
 *
 * Canonical URLs always point at the production domain, even on preview
 * deployments, so a Vercel preview can never compete with production in
 * search results. The sitemap and robots files are environment aware.
 */

export const PRODUCTION_URL = "https://americanhairclubs.com";

export const SITE = {
  name: "American Hair Club",
  legalName: "American Hair Club",
  url: PRODUCTION_URL,
  locale: "en_IN",
  language: "en-IN",
  twitterCard: "summary_large_image",
  /**
   * Contact details published site-wide in the header and footer of the
   * existing site. These belong to the organisation, not to an individual
   * branch, and must not be presented as branch contact details.
   */
  organisation: {
    telephone: "+91 89775 45598",
    email: "ahcmadhapur@gmail.com",
    headOffice: {
      streetAddress:
        "Plot No 1-81, 2nd Floor, 202, Mk Maphar Eternal, Kavuri Hills, Madhapur",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500033",
      addressCountry: "IN",
    },
  },
} as const;

/**
 * The only brand asset currently available in the project. Used for the logo,
 * Open Graph and Twitter previews so social cards never fall back to a blank
 * or third-party image.
 */
export const BRAND_LOGO_URL =
  "https://americanhairclubs.com/wp-content/uploads/2023/08/channels4_profile-removebg-preview-e1758703204748.png";

export const BRAND_LOGO_ALT = "American Hair Club";

/** Trailing slashes are enforced by `trailingSlash: true` in next.config.ts. */
export function canonicalUrl(path: string): string {
  const normalised = `/${path.replace(/^\/+|\/+$/g, "")}/`.replace("//", "/");
  return `${PRODUCTION_URL}${normalised === "//" ? "/" : normalised}`;
}

/**
 * Base URL for sitemap.xml and robots.txt.
 *
 * - Production deployments and local builds use the production domain.
 * - Vercel preview / branch deployments use their own generated domain so the
 *   sitemap in a preview describes the preview, not production.
 * - NEXT_PUBLIC_SITE_URL overrides everything, which is useful while the
 *   routes are still served from a standalone Vercel project.
 */
export function deploymentBaseUrl(): string {
  const override = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (override) return override.replace(/\/+$/, "");

  const vercelEnv = process.env.VERCEL_ENV;
  if (vercelEnv && vercelEnv !== "production" && process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return PRODUCTION_URL;
}
