import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "American Hair Club Locations",
    template: "%s | American Hair Club",
  },
  description:
    "Find American Hair Club hair patch and hair replacement consultations in Pune, Bangalore, and Vizag.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>
        <header className="site-header">
          <div className="shell header-inner">
            <Link className="brand" href="/locations" aria-label="American Hair Club locations home">
              <span className="brand-mark">AHC</span>
              <span className="brand-name">American Hair Club</span>
            </Link>
            <nav className="main-nav" aria-label="Main navigation">
              <Link href="/locations">Locations</Link>
              <a href="#consultation">Private consultation</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="shell footer-inner">
            <div>
              <span className="brand-name">American Hair Club</span>
              <p>Private hair replacement consultations across India.</p>
            </div>
            <Link href="/locations">View locations <span aria-hidden="true">↗</span></Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
