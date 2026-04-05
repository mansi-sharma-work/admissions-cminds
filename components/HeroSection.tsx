import { msProgram, phdProgram, siteConfig, webinar } from "@/lib/content"

// Hero — first thing someone sees. We want three things immediately clear:
// 1. What this page is (Admissions 2026-27, C-MInDS IIT Bombay)
// 2. That there are two programs (MS + PhD)
// 3. Where to apply / get more info
export default function HeroSection() {
  return (
    <section
      className="relative text-white overflow-hidden hero-grid"
      style={{ backgroundColor: "#1a2e5a" }}
    >
      {/* Decorative top-right circle — soft, not shouty */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #0e7c7b 0%, transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-28">

        

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
  MS by Research and PhD in DS &amp; AI
</h1>

        <p className="text-blue-100 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed font-light">
  Admissions 2026–27
</p>

        {/* CTA row — primary action (Apply) and secondary (Brochure / Webinar) */}
        

        {/* Program cards — the most important visual split on the page */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <HeroProgramCard
            label="MS by Research"
            badge={`${msProgram.duration} · ${msProgram.funding}`}
            desc="Research-focused master's in DS &amp; AI. Written test + interview."
            brochureUrl={msProgram.brochureUrl}
            anchor="#programs"
            color="navy"
          />
          <HeroProgramCard
            label="PhD"
            badge={`${phdProgram.duration} · ${phdProgram.funding}`}
            desc="Doctoral research in AI, ML &amp; Data Science. Same written test as MS."
            brochureUrl={phdProgram.brochureUrl}
            anchor="#programs"
            color="teal"
          />
        </div>
      </div>
    </section>
  )
}

// Individual program summary card inside the hero
function HeroProgramCard({
  label, badge, desc, brochureUrl, anchor, color,
}: {
  label: string
  badge: string
  desc: string
  brochureUrl: string
  anchor: string
  color: "navy" | "teal"
}) {
  const isTeal = color === "teal"
  return (
    <div
      className="rounded-xl p-5 border card-lift"
      style={{
        backgroundColor: isTeal ? "rgba(14,124,123,0.3)" : "rgba(255,255,255,0.09)",
        borderColor: isTeal ? "rgba(14,124,123,0.5)" : "rgba(255,255,255,0.15)",
      }}
    >
      <span className="text-[11px] font-semibold text-blue-200 uppercase tracking-widest mb-2 block">
        {badge}
      </span>
      <h2 className="font-display text-xl font-bold mb-2">{label}</h2>
      {/* Only safe static HTML — no user input here */}
      <p className="text-blue-100 text-sm mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: desc }} />
      <div className="flex flex-wrap gap-2">
        <a
          href={anchor}
          className="text-xs font-semibold px-3 py-1.5 rounded transition-colors hover:opacity-90"
          style={{ backgroundColor: "rgba(255,255,255,0.18)", color: "white" }}
        >
          View Details ↓
        </a>
        <a
          href={brochureUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold border border-white/25 text-white px-3 py-1.5 rounded hover:bg-white/10 transition-colors"
        >
          Brochure (PDF) ↗
        </a>
      </div>
    </div>
  )
}
