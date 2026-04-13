"use client"

import { msProgram, phdProgram } from "@/lib/content"

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

  if (!msUpcoming && !phdUpcoming) return null
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
      <div className="flex justify-between items-center gap-4 border-t border-white/20 pt-4">
  <div>
    <div className="flex items-center gap-3">
      <p className="text-white font-semibold">Admissions Webinar</p>
      
        <a href="https://youtu.be/rfbJzsBjc8k?si=4tU8ibqXedkCye2s"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs font-semibold px-3 py-0.5 rounded-full bg-white/20 text-white whitespace-nowrap hover:bg-white/30"
      >
        Watch ↗
      </a>
    </div>
    <p className="text-white/60 text-xs mt-0.5">MS & PhD</p>
  </div>
  <span className="text-xs bg-white/20 text-white/60 px-3 py-1 rounded-full font-bold whitespace-nowrap">
    Past
  </span>
</div>

    </div>
  </div>
)}