import Image from "next/image"
import { msProgram, phdProgram } from "@/lib/content"

// Hero — first thing someone sees. Three things need to be immediately clear:
// 1. What this page is (Admissions 2026-27, C-MInDS IIT Bombay)
// 2. That there are two programs (MS + PhD)
// 3. How to get more details
export default function HeroSection() {
  return (
    <section className="relative text-white overflow-hidden min-h-[520px]">

      {/* Campus photo — next/image handles WebP conversion + lazy sizing automatically */}
      <Image
        src="/campus.jpg"
        alt="IIT Bombay campus gate"
        fill
        priority
        quality={80}
        className="object-cover"
style={{ zIndex: 0, objectPosition: "50% 70%" }}
      />

      {/* Gradient — heavier at top where text sits, lighter in the middle */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.5) 100%)",

          zIndex: 1,
        }}
      />

      {/* All content sits above the image and gradient */}
      <div
        className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-28"
        style={{ zIndex: 2 }}
      >
        <h1
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
          style={{ textShadow: "0 2px 16px rgba(0,0,0,0.7)" }}
        >
          Admissions 2026–27
        </h1>

        <p
          className="text-white/90 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed font-light"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
        >
          C-MInDS offers MS by Research and PhD programs in Data Science and AI.
          Admissions are typically held in April and May, with the academic year
          beginning in late July or early August.{" "}
          <a
            href="#programs"
            className="underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            See more details below.
          </a>
        </p>

        {/* Program cards — capped width so they don't stretch on wide screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
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

// Card shown inside the hero for each program
function HeroProgramCard({
  label,
  badge,
  desc,
  brochureUrl,
  anchor,
  color,
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
      className="rounded-xl p-5 border card-lift backdrop-blur-sm"
      style={{
        backgroundColor: isTeal ? "rgba(14,124,123,0.35)" : "rgba(0,0,0,0.35)",
        borderColor: isTeal ? "rgba(14,124,123,0.5)" : "rgba(255,255,255,0.15)",
      }}
    >
      <span className="text-[11px] font-semibold text-white/60 uppercase tracking-widest mb-2 block">
        {badge}
      </span>

      <h2 className="font-display text-xl font-bold mb-2 text-white">{label}</h2>

      {/* Static HTML only — no user input, safe to use dangerouslySetInnerHTML */}
      <p
        className="text-white/80 text-sm mb-4 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: desc }}
      />

      <div className="flex flex-wrap gap-2">
        <a
          href={anchor}
          className="text-xs font-semibold px-3 py-1.5 rounded transition-opacity hover:opacity-80"
          style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "white" }}
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