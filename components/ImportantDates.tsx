"use client"

import { useEffect, useState } from "react"

type DateEntry = {
  isoDate: string | null
  istTime?: string
  label: string
  highlight: boolean
  isWebinar?: boolean
  url?: string
  cta?: string
  istTimeEnd: string
  isToDate: string | null
}

function toIST(date: Date): Date {
  const utcMs = date.getTime() + date.getTimezoneOffset() * 60_000
  return new Date(utcMs + 5.5 * 60 * 60_000)
}

function buildTargetUTC(isoDate: string, istTime?: string): Date {
  const [year, month, day] = isoDate.split("-").map(Number)
  const [istH, istM] = istTime ? istTime.split(":").map(Number) : [23, 59]
  const istS = istTime ? 0 : 59
  return new Date(Date.UTC(year, month - 1, day, istH - 5, istM - 30, istS))
}

function isPast(isoDate: string | null, istTime?: string): boolean {
  if (!isoDate) return false
  return buildTargetUTC(isoDate, istTime).getTime() < Date.now()
}

function formatDate(isoDate: string): string {
  const ist = toIST(new Date(isoDate))
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
  return `${months[ist.getMonth()]} ${ist.getDate()} '${String(ist.getFullYear()).slice(2)}`
}

function formatISTTime(istTime: string, istTimeEnd?: string): string {
  const fmt = (t: string) => {
    const [h, m] = t.split(":").map(Number)
    const suffix = h >= 12 ? "PM" : "AM"
    const hour = h % 12 || 12
    return `${hour}:${String(m).padStart(2, "0")} ${suffix}`
  }
  return istTimeEnd
    ? `${fmt(istTime)} – ${fmt(istTimeEnd)} IST`
    : `${fmt(istTime)} IST`
}

function getCountdown(isoDate: string, istTime?: string): string {
  const diff = buildTargetUTC(isoDate, istTime).getTime() - Date.now()
  if (diff <= 0) return ""

  const totalSeconds = Math.floor(diff / 1000)
  const seconds = totalSeconds % 60
  const totalMinutes = Math.floor(totalSeconds / 60)
  const minutes = totalMinutes % 60
  const totalHours = Math.floor(totalMinutes / 60)
  const hours = totalHours % 24
  const totalDays = Math.floor(totalHours / 24)
  const weeks = Math.floor(totalDays / 7)
  const days = totalDays % 7

  const pad = (n: number) => String(n).padStart(2, "0")
  const weekPart = weeks > 0 ? `${pad(weeks)}w ` : ""

  return `${weekPart}${pad(days)}d ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}

export default function ImportantDates({
  dates,
  accentColor,
  bgColor,
  borderColor,
}: {
  dates: DateEntry[]
  accentColor: string
  bgColor: string
  borderColor: string
}) {
  const [mounted, setMounted] = useState(false)
  const [, setTick] = useState(0)

  useEffect(() => {
    setMounted(true)
    const id = setInterval(() => setTick(t => t + 1), 1000)
    return () => clearInterval(id)
  }, [])

  const upcoming = mounted
    ? dates.filter(item => !isPast(item.isoDate, item.istTime))
    : dates

  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #e5e7eb" }}>

      {/* Header */}
      <div className="px-6 pt-6 pb-3 text-center">
        <h3 className="font-display text-xl font-bold text-neutral-800">Important Dates</h3>
      </div>

      {mounted && upcoming.length === 0 ? (
        <p className="text-sm text-neutral-400 text-center px-6 pb-6">
          All deadlines for this cycle have passed.
        </p>
      ) : (
        <div className="divide-y divide-neutral-100">
          {upcoming.map((item, i) => {
            const countdown = mounted && item.isoDate ? getCountdown(item.isoDate, item.istTime) : null
            const formatted = item.isoDate ? formatDate(item.isoDate) : null

            return (
              <div
                key={i}
                className="flex items-center gap-4 px-6 py-4"
                style={
                  item.highlight
                    ? { borderLeft: `3px solid ${accentColor}`, backgroundColor: bgColor }
                    : { borderLeft: "3px solid transparent" }
                }
              >
                {/* Calendar icon */}
                <div
                  className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: item.highlight ? accentColor : "#f3f4f6" }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke={item.highlight ? "white" : "#9ca3af"}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="text-sm"
                      style={{
                        fontWeight: item.highlight ? 600 : 500,
                        color: item.highlight ? "#111827" : "#374151",
                      }}
                    >
                      {item.label}
                    </span>

                    {item.url && item.cta && (
                      <a
                        href={item.url}
                        rel="noopener noreferrer"
                        className="text-xs font-semibold px-2 py-0.5 rounded transition-opacity hover:opacity-80 text-white"
                        style={{ backgroundColor: accentColor }}
                      >
                        {item.cta} ↗
                      </a>
                    )}
                  </div>

                  
                  {item.istTime && (
                    <p className="text-xs mt-0.5" style={{ color: "#6b7280" }}>
                      {formatISTTime(item.istTime, item.istTimeEnd)}
                    </p>
                  )}

                  {/* Live countdown */}
                  {countdown && (
                    <p className="text-xs mt-0.5 font-body" style={{ color: accentColor }}>
                      {countdown}
                    </p>
                  )}
                </div>

                {/* Formatted date (IST) on the right */}
                {formatted && (
  <div className="shrink-0 text-right">
    <span
      className="text-xs font-semibold whitespace-nowrap"
      style={{ color: item.highlight ? accentColor : "#6b7280" }}
    >
      {formatted}
      {item.isToDate && ` – ${formatDate(item.isToDate)}`}
    </span>
  </div>
)}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}