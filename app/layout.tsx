import type { Metadata } from "next";
import { BRAND_LOGO_URL, PRODUCTION_URL, SITE } from "../lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(PRODUCTION_URL),
  title: {
    default: "American Hair Club Locations",
    template: "%s | American Hair Club",
  },
  description:
    "Find American Hair Club hair patch and hair replacement consultations in Pune, Bangalore, and Vizag.",
  applicationName: SITE.name,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: SITE.locale,
    images: [{ url: BRAND_LOGO_URL, alt: "American Hair Club" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [BRAND_LOGO_URL],
  },
  formatDetection: { telephone: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
