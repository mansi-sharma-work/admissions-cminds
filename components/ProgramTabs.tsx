"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import ProgramPanel from "./ProgramPanel"
import { msProgram, phdProgram } from "@/lib/content"

type TabType = "ms" | "phd"

export default function ProgramTabs() {
  const searchParams = useSearchParams()

  // default safe state
  const [active, setActive] = useState<TabType>("ms")

  // sync URL → state
  useEffect(() => {
    const tab = searchParams.get("tab")

    if (tab === "ms" || tab === "phd") {
      setActive(tab)
    }
  }, [searchParams])

  return (
    <section
      id="programs"
      className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20"
    >
      {/* Header */}
      <div className="mb-8">
        <h2
          className="font-display text-2xl sm:text-3xl font-bold mb-2"
          style={{ color: "#1a2e5a" }}
        >
          Program Details
        </h2>

        <p className="text-neutral-500 text-sm">
          Select a program to see eligibility, process, and important dates.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-neutral-200 mb-10">
        <Tab
          label="MS by Research"
          active={active === "ms"}
          activeColor="#1a2e5a"
          onClick={() => setActive("ms")}
        />
        <Tab
          label="PhD"
          active={active === "phd"}
          activeColor="#0e4bbf"
          onClick={() => setActive("phd")}
        />
      </div>

      {/* Panel */}
      <div className="tab-panel">
        {active === "ms" ? (
          <ProgramPanel
            program={msProgram}
            onTabSelect={setActive}
          />
        ) : (
          <ProgramPanel
            program={phdProgram}
            onTabSelect={setActive}
          />
        )}
      </div>
    </section>
  )
}

/* ---------------- TAB ---------------- */

function Tab({
  label,
  active,
  activeColor,
  onClick,
}: {
  label: string
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
      <span className="text-sm sm:text-base font-semibold leading-tight">
        {label}
      </span>
    </button>
  )
}