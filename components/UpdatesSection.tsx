"use client"

import { useEffect, useState } from "react"
import { msProgram, phdProgram } from "@/lib/content"

type DateEntry = {
  isoDate: string | null
  label: string
  highlight: boolean
  isWebinar?: boolean
  url?: string
  cta?: string
}

function getAllDates(): (DateEntry & { program: string })[] {
  const seen = new Set<string>()
  const all: (DateEntry & { program: string })[] = []

  const add = (entry: DateEntry, program: string) => {
    const key = `${entry.isoDate}-${entry.label}`
    if (!seen.has(key)) {
      seen.add(key)
      all.push({ ...entry, program })
    } else {
      const existing = all.find(e => `${e.isoDate}-${e.label}` === key)
      if (existing) existing.program = "MS & PhD"
    }
  }

  msProgram.dates.forEach(d => add(d as DateEntry, "MS"))
  phdProgram.dates.forEach(d => add(d as DateEntry, "PhD"))

  return all.sort((a, b) => {
    if (!a.isoDate) return 1
    if (!b.isoDate) return -1
    return new Date(a.isoDate).getTime() - new Date(b.isoDate).getTime()
  })
}

function isPast(isoDate: string | null): boolean {
  if (!isoDate) return false
  const d = new Date(isoDate)
  d.setHours(23, 59, 59)
  return d.getTime() < Date.now()
}

function isToday(isoDate: string): boolean {
  const d = new Date(isoDate)
  const now = new Date()
  return d.getFullYear() === now.getFullYear() &&
    d.getMonth() === now.getMonth() &&
    d.getDate() === now.getDate()
}

function daysUntil(isoDate: string): number {
  return Math.ceil((new Date(isoDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
}

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export default function UpdatesSection() {
  const [, setTick] = useState(0)

  // Re-check every minute so the banner updates when a date passes
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 60_000)
    return () => clearInterval(id)
  }, [])

  const all = getAllDates()

  // Pick the single most relevant update 
  const next = all.find(item => !isPast(item.isoDate))

  // Nothing upcoming 
  if (!next) return null

  const today = next.isoDate ? isToday(next.isoDate) : false
  const days = next.isoDate ? daysUntil(next.isoDate) : null
  const soon = days !== null && days <= 7 && days > 0

  return (
    <div
      id="updates"
      className="w-full px-4 sm:px-6 py-14 flex justify-center"
      style={{ backgroundColor: "#234280" }}
    >
      <div
        className="w-full max-w-4xl border border-white/30 rounded-2xl px-6 sm:px-8 py-6 sm:py-7 flex flex-col gap-4 sm:gap-6"
        style={{
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
        }}
      >
        {/* Title */}
        <h2 className="w-full text-white text-lg font-bold mb-2 text-center sm:text-left">
          Updates
        </h2>

        {/* Main content: status badge, label, CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full">
          {/* Status badge */}
          <div className="flex items-center gap-2 shrink-0">
            {today ? (
              <span className="text-xs font-bold bg-white text-teal-800 px-3 py-1 rounded-full">
                Today
              </span>
            ) : soon ? (
              <span className="text-xs font-bold bg-amber-400 text-amber-900 px-3 py-1 rounded-full">
                In {days} day{days === 1 ? "" : "s"}
              </span>
            ) : (
              <span className="text-xs font-semibold bg-white/20 text-white px-3 py-1 rounded-full">
                Upcoming
              </span>
            )}
            <span className="text-xs text-white/60 font-medium">{next.program}</span>
          </div>

          {/* Label + date */}
          <p className="text-white text-base sm:text-lg font-semibold flex-1 leading-snug text-center sm:text-left">
            {next.label}
            {next.isoDate && (
              <span className="text-white/70 font-normal ml-2">
                — {formatDate(next.isoDate)}
              </span>
            )}
          </p>

          {/* CTA */}
          {next.url && next.cta && (
            <a
              href={next.url}
              
              rel="noopener noreferrer"
              className="shrink-0 text-sm font-semibold px-5 py-2 rounded-lg bg-white text-teal-800 transition hover:opacity-90"
            >
              {next.cta} ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}