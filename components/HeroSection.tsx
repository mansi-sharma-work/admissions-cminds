import Image from "next/image"
import Link from "next/link"
import { msProgram, phdProgram } from "@/lib/content"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "600px" }}>
      
      <img
  src="/admissions/hero-img.jpg"
  alt="IIT Bombay campus"
  className="absolute inset-0 w-full h-full object-cover"
  style={{ zIndex: 0, objectPosition: "50% 20%" }}
/>

      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.3) 100%)",
          zIndex: 1,
        }}
      />

      <div className="relative flex flex-col" style={{ zIndex: 2 }}>
        <div className="h-28 sm:h-36 lg:h-12" />

        {/* Heading */}
        <div
          className="w-full px-6 sm:px-12 lg:px-24 py-10 text-center"
          style={{
            backgroundColor: "rgba(255,255,255,0.3)",
            backdropFilter: "blur(10px)",
          }}
        >
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 text-neutral-900">
            Admissions 2026–27
          </h1>

          <p className="text-neutral-700 max-w-3xl mx-auto">
            C-MInDS offers MS by Research and PhD programs in Data Science and AI.
          </p>
        </div>

        {/* Cards */}
        <div className="px-4 sm:px-6 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">

            <HeroProgramCard
              label="MS by Research"
              badge={msProgram.duration}
              descLine1="Research-focused Master's in DS & AI."
              descLine2="Written test + interview."
              href="/?tab=ms#programs"
              color="navy"
            />

            <HeroProgramCard
              label="PhD"
              badge={`${phdProgram.duration} · ${phdProgram.funding}`}
              descLine1="Doctoral research in AI, ML & Data Science."
              descLine2="Written test + interview."
              href="/?tab=phd#programs"
              color="#0e4bbf"
            />

          </div>
        </div>
      </div>
    </section>
  )
}

function HeroProgramCard({
  label,
  badge,
  descLine1,
  descLine2,
  href,
  color,
}: {
  label: string
  badge: string
  descLine1: string
  descLine2: string
  href: string
  color: "navy" | "#0e4bbf"
}) {
  const isTeal = color === "#0e4bbf"

  const backgroundColor = isTeal ? "rgba(14, 75, 191, 0.85)" : "rgba(35, 66, 128, 0.85)"
  const borderColor = isTeal ? "#2a9ab5" : "#1a2e5a"

  return (
    <Link href={href} scroll>
      <div
        className="rounded-xl p-5 border cursor-pointer transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
        style={{ backgroundColor, borderColor }}
      >
        <span className="text-[11px] text-white/70 mb-2 block uppercase tracking-wide">
          {badge}
        </span>

        <h2 className="text-xl font-bold text-white mb-2">{label}</h2>

        <p className="text-white/90 text-sm leading-relaxed">
          {descLine1}
          <br />
          <span className="text-white/75">{descLine2}</span>
        </p>

        {/* Down arrow */}
        <div className="text-center text-white/70 text-lg">
          ↓
        </div>
      </div>
    </Link>
  )
}