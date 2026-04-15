"use client"

import { siteConfig, msProgram, phdProgram } from "@/lib/content"

export default function ContactFooter() {
  return (
    <footer style={{ backgroundColor: "#1a2e5a" }} className="text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 ">

          {/* Contact */}
          <div>
            <h3 className="flex flex-col font-display text-base font-bold mb-4 text-white items-center md:items-start text-center md:text-left">
              Admissions Queries
            </h3>
            <div className="space-y-3 text-sm items-center text-center" style={{ color: "#bfdbfe" }}>
<p className="flex justify-center md:justify-start items-center gap-2">                <svg className="w-4 h-4 shrink-0 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
<p className="flex justify-center md:justify-start items-center gap-2">
                  <svg className="w-4 h-4 shrink-0 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {siteConfig.phone}
              </p>
              <p className="flex justify-center md:justify-start items-center gap-2" style={{ color: "#93c5fd" }}>Mon–Fri, 9 AM – 5 PM IST</p>
            </div>
          </div>

          

          {/* Programs + brochures + social */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h3 className="font-display text-base font-bold mb-4 text-white">Programs & Social</h3>
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
                    
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {label} ↗
                  </a>
                </li>
              ))}
            </ul>

            {/* Social icons */}
<div className="flex flex-row items-start md:items-end space-x-4 mt-2">
                <a href="https://www.linkedin.com/company/cminds-iitb" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.25 19h-3v-9h3v9zm-1.5-10.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm12.75 10.25h-3v-4.5c0-1.07-.02-2.44-1.5-2.44-1.5 0-1.73 1.17-1.73 2.38v4.56h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.74z"/>
                </svg>
              </a>
              <a href="https://x.com/iitbminds" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.96-2.48 9.07 9.07 0 01-2.88 1.1 4.52 4.52 0 00-7.72 4.12 12.83 12.83 0 01-9.3-4.7 4.52 4.52 0 001.4 6.03 4.48 4.48 0 01-2.05-.57v.06a4.52 4.52 0 003.63 4.44 4.52 4.52 0 01-2.04.08 4.52 4.52 0 004.22 3.13A9.06 9.06 0 012 19.54a12.78 12.78 0 006.92 2.03c8.3 0 12.85-6.88 12.85-12.85l-.01-.58A9.22 9.22 0 0023 3z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@C-MInDS_IIT_Bombay" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.5 6.2a2.8 2.8 0 00-1.97-1.98C19.3 4 12 4 12 4s-7.3 0-9.53.22a2.8 2.8 0 00-1.97 1.98A29.35 29.35 0 000 12a29.35 29.35 0 00.5 5.8 2.8 2.8 0 001.97 1.97C4.7 20 12 20 12 20s7.3 0 9.53-.22a2.8 2.8 0 001.97-1.97A29.35 29.35 0 0024 12a29.35 29.35 0 00-.5-5.8zM9.75 15.02V8.98l6.2 3.02-6.2 3.02z"/>
                </svg>
              </a>
            </div>
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