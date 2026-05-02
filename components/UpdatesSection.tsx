"use client"

import { msProgram, phdProgram } from "@/lib/content"
import { useState, useEffect } from "react"
import { shortlists } from "@/lib/content"
/* ---------------- DATE HELPERS ---------------- */

const parseDate = (iso: string) => new Date(`${iso}T00:00:00`)

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

function isPast(iso: string) {
  const d = parseDate(iso)
  d.setHours(23, 59, 59, 999)
  return d.getTime() < Date.now()
}

/* ---------------- MERGE ---------------- */

function getAllDates() {
  const map = new Map<string, any>()

  const add = (entry: any, program: string) => {
    const key = `${entry.isoDate}-${entry.label}`

    if (!map.has(key)) {
      map.set(key, { ...entry, program })
    } else {
      const existing = map.get(key)
      if (existing.program !== program) {
        existing.program = "MS & PhD"
      }
    }
  }

  msProgram.dates.forEach(d => add(d, "MS"))
  phdProgram.dates.forEach(d => add(d, "PhD"))

  return Array.from(map.values())
}

/* ---------------- COMPONENT ---------------- */

export default function UpdatesSection() {
  const [msOpen, setMsOpen] = useState(false)
  const [phdOpen, setPhdOpen] = useState(false)
  const [foreignOpen, setForeignOpen] = useState(false)
  const all = getAllDates()

  // attach safe date
  const enriched = all.map(i => ({
    ...i,
    effectiveDate: i.isoDate ?? null,
  }))

  const upcoming = enriched
    .filter(i => i.effectiveDate && !isPast(i.effectiveDate))
    .sort(
      (a, b) =>
        parseDate(a.effectiveDate!).getTime() -
        parseDate(b.effectiveDate!).getTime()
    )

  const msUpcoming = upcoming
    .filter(i => i.program === "MS" || i.program === "MS & PhD")
    .sort(
      (a, b) =>
        parseDate(a.effectiveDate!).getTime() -
        parseDate(b.effectiveDate!).getTime()
    )[0]

  const phdUpcoming = upcoming
    .filter(i => i.program === "PhD" || i.program === "MS & PhD")
    .sort(
      (a, b) =>
        parseDate(a.effectiveDate!).getTime() -
        parseDate(b.effectiveDate!).getTime()
    )[0]

  
    const firstUpcoming = msUpcoming && phdUpcoming
  ? parseDate(msUpcoming.effectiveDate!).getTime() <= parseDate(phdUpcoming.effectiveDate!).getTime()
    ? { first: msUpcoming, firstLabel: 'MS', second: phdUpcoming, secondLabel: 'PhD' }
    : { first: phdUpcoming, firstLabel: 'PhD', second: msUpcoming, secondLabel: 'MS' }
  : msUpcoming
    ? { first: msUpcoming, firstLabel: 'MS', second: null, secondLabel: '' }
    : phdUpcoming
      ? { first: phdUpcoming, firstLabel: 'PhD', second: null, secondLabel: '' }
      : null
return (
  <div
    id="updates"
    className="w-full px-4 sm:px-6 py-14 flex justify-center"
    style={{ backgroundColor: "#234280" }}
  >
    <div className="w-full max-w-4xl border border-white/30 rounded-2xl px-6 sm:px-8 py-6 flex flex-col gap-6">

      {/* TITLE */}
      <h2 className="text-white text-lg font-bold">
        Updates
      </h2>

      {/* MS UPCOMING */}
      {firstUpcoming && (
  <div className="flex justify-between items-center flex-wrap gap-4">
    <div>
      <p className="text-white font-semibold">{firstUpcoming.first.label}</p>
      <p className="text-white/60 text-xs">
        {firstUpcoming.firstLabel} — {formatDate(firstUpcoming.first.effectiveDate!)}
      </p>
    </div>
    {(() => {
  const d = Math.ceil((parseDate(firstUpcoming.first.effectiveDate!).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
  return <span className="text-xs bg-white/10 text-white px-3 py-1 rounded-full font-bold">{d} {d === 1 ? 'day' : 'days'}</span>
})()}
  </div>
)}

{firstUpcoming?.second && (
  <div className="flex justify-between items-center flex-wrap gap-4 border-t border-white/20 pt-4">
    <div>
      <p className="text-white font-semibold">{firstUpcoming.second.label}</p>
      <p className="text-white/60 text-xs">
        {firstUpcoming.secondLabel} — {formatDate(firstUpcoming.second.effectiveDate!)}
      </p>
    </div>
    {(() => {
  const d = Math.ceil((parseDate(firstUpcoming.second.effectiveDate!).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
  return <span className="text-xs bg-white/10 text-white px-3 py-1 rounded-full font-bold">{d} {d === 1 ? 'day' : 'days'}</span>
})()}
  </div>
)}

      
      {/* STATIC WEBINAR — always at bottom with past tag */}
      
{/* SHORTLISTS */}
<div className="border-t border-white/20 pt-4 flex flex-col gap-3">
  <p className="text-white text-sm font-bold">Interview Shortlists</p>
  <p className="text-white/50 text-xs -mt-2">Candidates have been notified on their registered email address.</p>

  {/* MS Shortlist */}
  <div className="rounded-xl border border-white/20 overflow-hidden">
    <button
      onClick={() => setMsOpen(o => !o)}
      className="w-full flex justify-between items-center px-4 py-3 text-left hover:bg-white/5 transition"
    >
      <div>
        <p className="text-white text-sm font-semibold">MS by Research — Shortlisted Candidates</p>
      </div>
      <span className="text-white/60 text-lg">{msOpen ? '−' : '+'}</span>
    </button>
    {msOpen && (
      <div className="px-4 pb-4 flex flex-wrap gap-2">
        {[...shortlists.ms.ids].sort().map(id => (
          <span key={id} className="text-xs bg-white/10 text-white/80 px-2 py-0.5 rounded font-mono">
            {id}
          </span>
        ))}
      </div>
    )}
  </div>

  {/* PhD Shortlist */}
  <div className="rounded-xl border border-white/20 overflow-hidden">
    <button
      onClick={() => setPhdOpen(o => !o)}
      className="w-full flex justify-between items-center px-4 py-3 text-left hover:bg-white/5 transition"
    >
      <div>
        <p className="text-white text-sm font-semibold">PhD — Shortlisted Candidates</p>
      </div>
      <span className="text-white/60 text-lg">{phdOpen ? '−' : '+'}</span>
    </button>
    {phdOpen && (
      <div className="px-4 pb-4 flex flex-wrap gap-2">
        {[...shortlists.phd.ids].sort().map(id => (
          <span key={id} className="text-xs bg-white/10 text-white/80 px-2 py-0.5 rounded font-mono">
            {id}
          </span>
        ))}
      </div>
    )}
  </div>
  {/* Foreign National Shortlist */}
<div className="rounded-xl border border-white/20 overflow-hidden">
  <button
    onClick={() => setForeignOpen(o => !o)}
    className="w-full flex justify-between items-center px-4 py-3 text-left hover:bg-white/5 transition"
  >
    <div>
      <p className="text-white text-sm font-semibold">Foreign National — Shortlisted Candidates</p>
    </div>
    <span className="text-white/60 text-lg">{foreignOpen ? '−' : '+'}</span>
  </button>
  {foreignOpen && (
    <div className="px-4 pb-4 flex flex-col gap-1.5">
      {shortlists.foreign.ids.map(({ id, via }) => (
        <div key={id} className="flex items-center justify-between">
          <span className="text-xs bg-white/10 text-white/80 px-2 py-0.5 rounded font-mono">{id}</span>
          <span className="text-xs text-white/50">via {via}</span>
        </div>
      ))}
    </div>
  )}
</div>
</div>

    </div>
  </div>
)}