import { siteConfig, msProgram, phdProgram } from "@/lib/content"

// Footer — contact info and quick links, always reachable.
// Intentionally not collapsed into an accordion; people should be able
// to find the email address without hunting for it.
export default function ContactFooter() {
  return (
    <footer style={{ backgroundColor: "#1a2e5a" }} className="text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {/* Contact */}
          <div>
            <h3 className="font-display text-base font-bold mb-4 text-white">
              Admissions Queries
            </h3>
            <div className="space-y-3 text-sm" style={{ color: "#bfdbfe" }}>
              <p className="flex items-center gap-2">
                {/* Envelope icon */}
                <svg className="w-4 h-4 shrink-0 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="underline underline-offset-2 hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                {/* Phone icon */}
                <svg className="w-4 h-4 shrink-0 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {siteConfig.phone}
              </p>
              <p className="text-xs" style={{ color: "#93c5fd" }}>Mon–Fri, 9 AM – 5 PM IST</p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-base font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm" style={{ color: "#bfdbfe" }}>
              {[
                { href: msProgram.iitbAdmissionsUrl, label: "IIT Bombay MS Admissions" },
                { href: phdProgram.iitbAdmissionsUrl, label: "IIT Bombay PhD Admissions" },
                { href: siteConfig.iitbScheduleUrl, label: "Full IIT Bombay Schedule" },
                { href: "https://www.minds.iitb.ac.in/admissions", label: "C-MInDS Admissions Page" },
              ].map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs + brochures */}
          <div>
            <h3 className="font-display text-base font-bold mb-4 text-white">Programs</h3>
            <ul className="space-y-2 text-sm" style={{ color: "#bfdbfe" }}>
              {[
                { href: msProgram.programUrl, label: "MS by Research in DS & AI" },
                { href: phdProgram.programUrl, label: "PhD in DS & AI" },
                { href: msProgram.brochureUrl, label: "MS Brochure (PDF)" },
                { href: phdProgram.brochureUrl, label: "PhD Brochure (PDF)" },
              ].map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div
          className="border-t mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs"
          style={{ borderColor: "rgba(255,255,255,0.1)", color: "#93c5fd" }}
        >
          <p>
            © {new Date().getFullYear()} Centre for Machine Intelligence &amp; Data Science, IIT Bombay
          </p>
          <a
            href={siteConfig.mainSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            www.minds.iitb.ac.in
          </a>
        </div>
      </div>
    </footer>
  )
}
