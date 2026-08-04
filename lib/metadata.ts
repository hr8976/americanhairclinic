import type { Metadata } from "next";
import { BRAND_LOGO_ALT, BRAND_LOGO_URL, SITE } from "./site";

/**
 * Builds a complete, self-referencing metadata block.
 *
 * `title.absolute` is used so the layout's `%s | American Hair Club` template
 * is not applied twice — every page title supplied here is already final and
 * already unique.
 */
export function buildPageMetadata({
  title,
  description,
  canonical,
}: {
  title: string;
  description: string;
  canonical: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: SITE.locale,
      url: canonical,
      title,
      description,
      images: [{ url: BRAND_LOGO_URL, alt: BRAND_LOGO_ALT }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: BRAND_LOGO_URL, alt: BRAND_LOGO_ALT }],
    },
  };
}
