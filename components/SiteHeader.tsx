import Link from "next/link"
import { siteConfig } from "@/lib/content"

// Sticky header — the Apply button stays visible no matter how far you scroll.
// Really matters on mobile where people land from a QR code mid-page.
export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

        {/* Wordmark — links back to the main C-MInDS site */}
        <Link
          href={siteConfig.mainSiteUrl}
          className="flex items-center gap-3 shrink-0 group"
        >
          {/* The circle badge mirrors the actual C-MInDS logo shape */}
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[8px] font-bold leading-tight text-center transition-opacity group-hover:opacity-85"
            style={{ backgroundColor: "#1a2e5a" }}
          >
            C<br />MInDS
          </div>
          <div className="hidden sm:block leading-tight">
            <p className="text-xs font-bold tracking-wide" style={{ color: "#1a2e5a" }}>
              C-MInDS
            </p>
            <p className="text-[10px] text-neutral-500">IIT Bombay</p>
          </div>
        </Link>

        {/* Nav + CTA */}
        <nav className="flex items-center gap-1 sm:gap-3">
          <a
            href="#programs"
            className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors px-2 py-1 rounded hidden md:block"
          >
            Programs
          </a>
          <a
            href="#dates"
            className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors px-2 py-1 rounded hidden md:block"
          >
            Dates
          </a>
          <a
            href="#webinar"
            className="text-sm font-medium px-2 py-1 rounded transition-colors hidden md:block"
            style={{ color: "#0e7c7b" }}
          >
            Webinar ↗
          </a>
          <a
            href={siteConfig.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm font-semibold px-4 py-2 rounded-md transition-opacity hover:opacity-90 ml-1"
            style={{ backgroundColor: "#1a2e5a" }}
          >
            Apply Now
          </a>
        </nav>
      </div>
    </header>
  )
}
