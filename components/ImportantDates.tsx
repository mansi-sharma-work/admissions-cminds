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

/* -------------------- TIME HELPERS -------------------- */

function toIST(date: Date): Date {
  const utcMs = date.getTime() + date.getTimezoneOffset() * 60_000
  return new Date(utcMs + 5.5 * 60 * 60_000)
}

function buildTargetUTC(isoDate: string, istTime?: string): Date {
  const [y, m, d] = isoDate.split("-").map(Number)
  const [h, min] = istTime ? istTime.split(":").map(Number) : [23, 59]
  const s = istTime ? 0 : 59

  return new Date(Date.UTC(y, m - 1, d, h - 5, min - 30, s))
}

function isPast(isoDate: string | null, istTime?: string): boolean {
  if (!isoDate) return false
  return buildTargetUTC(isoDate, istTime).getTime() < Date.now()
}

/* -------------------- FORMATTING -------------------- */

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

  const total = Math.floor(diff / 1000)
  const s = total % 60
  const m = Math.floor(total / 60) % 60
  const h = Math.floor(total / 3600) % 24
  const d = Math.floor(total / 86400)
  const w = Math.floor(d / 7)

  const pad = (n: number) => String(n).padStart(2, "0")
  const wPart = w > 0 ? `${pad(w)}w ` : ""

  return `In ${wPart}${pad(d % 7)}d ${pad(h)}:${pad(m)}:${pad(s)}`
}

/* -------------------- SMART STATUS -------------------- */

function getEventStatus(item: DateEntry): "live" | "soon" | "future" {
  if (!item.isoDate) return "future"

  const start = buildTargetUTC(item.isoDate, item.istTime).getTime()

  const end = item.istTimeEnd
    ? buildTargetUTC(item.isoDate, item.istTimeEnd).getTime()
    : start + 60 * 60 * 1000

  const now = Date.now()

  if (now >= start && now <= end) return "live"

  const diff = start - now
  const hours = diff / (1000 * 60 * 60)

  if (diff > 0 && hours <= 24) return "soon"

  return "future"
}

/* -------------------- COMPONENT -------------------- */

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

  const isValid = (d?: string | null) =>
  !!d && !isNaN(new Date(d).getTime())

const upcoming = mounted
  ? dates.filter(item =>
      isValid(item.isoDate) &&
      !isPast(item.isoDate, item.istTime)
    )
  : dates

  const nextIndex = upcoming.findIndex(
    item => item.isoDate && !isPast(item.isoDate, item.istTime)
  )

  function isSmartHighlighted(item: DateEntry, i: number) {
    const status = getEventStatus(item)
    if (status === "live") return true
    if (item.highlight) return true
    if (i === nextIndex) return true
    return false
  }

  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #e5e7eb" }}>

      {/* HEADER */}
      <div className="px-6 pt-6 pb-3 text-center">
        <h3 className="font-display text-xl font-bold text-neutral-800">
          Important Dates
        </h3>
      </div>

      {mounted && upcoming.length === 0 ? (
        <p className="text-sm text-neutral-400 text-center px-6 pb-6">
          All deadlines for this cycle have passed.
        </p>
      ) : (
        <div className="divide-y divide-neutral-100">
          {upcoming.map((item, i) => {
            const status = getEventStatus(item)
            const isHighlighted = isSmartHighlighted(item, i)

            const countdown =
              mounted && item.isoDate
                ? getCountdown(item.isoDate, item.istTime)
                : null

            const formatted = item.isoDate
              ? formatDate(item.isoDate)
              : null

            return (
              <div
                key={i}
                className="flex items-center gap-4 px-6 py-4 transition-all"
                style={
                  status === "live"
                    ? {
                        borderLeft: "4px solid #ef4444",
                        backgroundColor: "#fef2f2",
                        boxShadow: "0 6px 18px rgba(239,68,68,0.15)",
                      }
                    : isHighlighted
                    ? {
                        borderLeft: `4px solid ${accentColor}`,
                        backgroundColor: bgColor,
                        boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
                      }
                    : { borderLeft: "4px solid transparent" }
                }
              >

                {/* ICON */}
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{
                    backgroundColor:
                      status === "live"
                        ? "#ef4444"
                        : isHighlighted
                        ? accentColor
                        : "#f3f4f6",
                  }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="white"
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

                {/* CONTENT */}
                <div className="flex-1 min-w-0">

                  <div className="flex flex-wrap items-center gap-2">

                    <span
                      className="text-sm font-medium"
                      style={{
                        color: "#111827",
                        fontWeight: isHighlighted ? 700 : 500,
                      }}
                    >
                      {item.label}
                    </span>

                    {status === "live" && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-500 text-white animate-pulse">
                        LIVE
                      </span>
                    )}

                    {status === "soon" && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#0e4bbf] text-white">
                        NEXT
                      </span>
                    )}

                    {status === "future" && isHighlighted && (
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded text-white"
                        style={{ backgroundColor: accentColor }}
                      >
                        NEXT
                      </span>
                    )}

                    {item.url && item.cta && (
                      <a
                        href={item.url}
                        className="text-xs font-semibold px-2 py-0.5 rounded text-white hover:opacity-80"
                        style={{ backgroundColor: accentColor }}
                      >
                        {item.cta} ↗
                      </a>
                    )}
                  </div>

                  {item.istTime && (
                    <p className="text-xs mt-0.5 text-gray-500">
                      {formatISTTime(item.istTime, item.istTimeEnd)}
                    </p>
                  )}

                  {countdown && (
                    <p
                      className="text-xs mt-0.5 font-medium"
                      style={{
                        color:
                          status === "live" ? "#ef4444" : accentColor,
                      }}
                    >
                      {countdown}
                    </p>
                  )}
                </div>

                {/* DATE */}
                {formatted && (
                  <div className="text-right shrink-0">
                    <span
                      className="text-xs font-semibold whitespace-nowrap"
                      style={{
                        color:
                          status === "live"
                            ? "#ef4444"
                            : isHighlighted
                            ? accentColor
                            : "#6b7280",
                      }}
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