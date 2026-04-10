import Link from "next/link"
import { siteConfig } from "@/lib/content"

const mainNav = [
  { label: "About", href: "https://www.minds.iitb.ac.in/about" },
  { label: "People", href: "https://www.minds.iitb.ac.in/people/core-faculty" },
  { label: "Academics", href: "https://www.minds.iitb.ac.in/academics" },
  { label: "Research", href: "https://www.minds.iitb.ac.in/research" },
  { label: "Seminars", href: "https://www.minds.iitb.ac.in/seminars/current" },
  { label: "News & Events", href: "https://www.minds.iitb.ac.in/news/2026" },
  { label: "Collaboration", href: "https://www.minds.iitb.ac.in/collaboration" },
]

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
      <div className="w-full pl-4 pr-4 sm:pr-6 h-20 flex items-center justify-between gap-4">
        <Link
          href={siteConfig.mainSiteUrl}
          className="flex items-center shrink-0 group"
        >
          <img
            src="/logo.svg"
            alt="C-MInDS logo"
            className="h-9 sm:h-18 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Main site nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {mainNav.map((item) => (
            <a                                        
              key={item.href}
              href={item.href}
              
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-600 hover:text-blue-900 hover:bg-blue-50 transition-colors px-3 py-1.5 rounded whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        
      </div>
    </header>
  )
}