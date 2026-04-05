"use client"
// Only this component ships client-side JS.
// Everything else on the page is static HTML — keeps bundle tiny.

import { useState } from "react"
import ProgramPanel from "./ProgramPanel"
import { msProgram, phdProgram } from "@/lib/content"

export default function ProgramTabs() {
  const [active, setActive] = useState<"ms" | "phd">("ms")

  return (
    <section id="programs" className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">

      {/* Section heading — same visual weight as the reference site */}
      <div className="mb-8">
        <h2 className="font-display text-2xl sm:text-3xl font-bold mb-2" style={{ color: "#1a2e5a" }}>
          Program Details
        </h2>
        <p className="text-neutral-500 text-sm">
          Select a program to see eligibility, process, and important dates.
        </p>
      </div>

      {/* Tab row — underline-style, matching the reference design */}
      <div className="flex border-b border-neutral-200 mb-10">
        <Tab
          label="MS by Research"
          sublabel="2-year research master's"
          active={active === "ms"}
          activeColor="#1a2e5a"
          onClick={() => setActive("ms")}
        />
        <Tab
          label="PhD"
          sublabel="Doctoral program"
          active={active === "phd"}
          activeColor="#0e7c7b"
          onClick={() => setActive("phd")}
        />
      </div>

      {/* key prop triggers the CSS slideIn animation on every tab switch */}
      <div className="tab-panel" key={active}>
        {active === "ms" ? (
          <ProgramPanel program={msProgram} />
        ) : (
          <ProgramPanel program={phdProgram} />
        )}
      </div>
    </section>
  )
}

function Tab({
  label,
  sublabel,
  active,
  activeColor,
  onClick,
}: {
  label: string
  sublabel: string
  active: boolean
  activeColor: string
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-start px-5 sm:px-8 py-3 border-b-2 -mb-px transition-colors text-left"
      style={{
        borderBottomColor: active ? activeColor : "transparent",
        color: active ? activeColor : "#6b7280",
      }}
    >
      <span className="text-sm sm:text-base font-semibold leading-tight">{label}</span>
      <span className="text-xs text-neutral-400 mt-0.5 hidden sm:block">{sublabel}</span>
    </button>
  )
}
