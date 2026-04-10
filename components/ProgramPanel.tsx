"use client"

import ImportantDates from "./ImportantDates"
import { msProgram, phdProgram, siteConfig } from "@/lib/content"

type Program = typeof msProgram | typeof phdProgram

const tokens = {
  navy: {
    accent: "#1a2e5a",
    bg: "rgba(26,46,90,0.05)",
    border: "rgba(26,46,90,0.14)",
    btnBg: "#1a2e5a",
    iconBg: "rgba(26,46,90,0.08)",
  },
  teal: {
    accent: "#0e4bbf",
    bg: "rgba(35,66,128,0.05)",
    border: "rgba(35,66,128,0.16)",
    btnBg: "#0e4bbf",
    iconBg: "rgba(35,66,128,0.08)",
  },
}

async function downloadViaProxy(pdfUrl: string) {
  const proxyUrl = `/api/brochure?url=${encodeURIComponent(pdfUrl)}`
  const res = await fetch(proxyUrl)
  const blob = await res.blob()
  const blobUrl = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = blobUrl
  a.download = "brochure.pdf"
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(blobUrl)
}

interface ProgramPanelProps {
  program?: Program
  onTabSelect?: (tab: "ms" | "phd") => void
}

export default function ProgramPanel({ program, onTabSelect }: ProgramPanelProps) {
  if (!program) {
    return (
      <div className="p-6 border rounded-lg text-sm text-neutral-500">
        Program data not available
      </div>
    )
  }

  const t = tokens[program.color as keyof typeof tokens] ?? tokens.navy
  const otherTab = program === msProgram ? "phd" : "ms"
  const otherLabel = program === msProgram ? "PhD" : "MS by Research"

  return (
    <div className="flex flex-col lg:flex-row gap-12">

      {/* ───────── LEFT SIDE ───────── */}
      <div className="flex-1">
        <div className="divide-y divide-neutral-100">

          {/* ── Eligibility ── */}
          <div className="py-6">
            <SectionLabel text="Eligibility Criteria" color={t.accent} />

            <ul className="mt-5 space-y-4">
              {program.eligibility?.map((item, i) => (
                <li key={i} className="flex gap-3 text-base text-neutral-700 leading-relaxed">
                  <span
                    className="mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: t.iconBg, color: t.accent }}
                  >
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {program === msProgram && (
              <div
                className="mt-6 p-4 rounded-lg text-sm text-neutral-700 leading-relaxed"
                style={{ backgroundColor: t.bg }}
              >
                <span className="font-semibold" style={{ color: t.accent }}>
                  GATE exemption:{" "}
                </span>
                {(program as typeof msProgram).gateNote}
              </div>
            )}

            <p className="mt-5 text-sm text-neutral-500 italic">
              Refer the{" "}
              <a
                href={program.brochureUrl}
                
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:opacity-75"
                style={{ color: t.accent }}
              >
                {program.label} Admissions Brochure
              </a>{" "}
              for full eligibility and requirements.
            </p>
          </div>

          {/* ── Admission process ── */}
          <div className="py-6">
            <SectionLabel text="Admission Process" color={t.accent} />

            <ol className="mt-5 space-y-4">
              {program.process?.map((step, i) => (
                <li key={i} className="flex gap-3 text-base text-neutral-700 leading-relaxed">
                  <span className="font-bold shrink-0" style={{ color: t.accent }}>
                    {i + 1}.
                  </span>
                  <span className="flex flex-col">
                    <span>{step}</span>
                    {step.toLowerCase().includes("online written test") && (
                      <a
                        href="/test-syllabus.pdf"
  download="Test Syllabus.pdf"
  rel="noopener noreferrer"
  className="text-sm underline underline-offset-2 hover:opacity-80 mt-1"
  style={{ color: t.accent }}
>
  View test syllabus (PDF)
</a>
                    )}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* ── Resources ── */}
          <div className="py-6">
            <SectionLabel text="Resources" color={t.accent} />

            <div className="mt-5 flex flex-wrap gap-3">

              <a
                href={program.programUrl}
                
                rel="noopener noreferrer"
                className="flex items-center gap-3 flex-1 min-w-[140px] p-4 rounded-xl border transition-colors hover:opacity-80"
                style={{ borderColor: t.border, backgroundColor: t.bg }}
              >
                <IconBox color={t.iconBg}>
                  <BuildingIcon stroke={t.accent} />
                </IconBox>
                <ResourceText title="Program Details" subtitle="minds.iitb.ac.in" color={t.accent} />
              </a>

              <button
                onClick={() => downloadViaProxy(program.brochureUrl)}
                className="flex items-center gap-3 flex-1 min-w-[140px] p-4 rounded-xl border transition-colors hover:opacity-80 text-left cursor-pointer bg-transparent"
                style={{ borderColor: t.border, backgroundColor: t.bg }}
              >
                <IconBox color={t.iconBg}>
                  <DownloadIcon stroke={t.accent} />
                </IconBox>
                <ResourceText
                  title="Download Brochure"
                  subtitle="PDF · 2026 edition"
                  color={t.accent}
                />
              </button>

              <a
                href={program.iitbAdmissionsUrl}
                
                rel="noopener noreferrer"
                className="flex items-center gap-3 flex-1 min-w-[140px] p-4 rounded-xl border transition-colors hover:opacity-80"
                style={{ borderColor: t.border, backgroundColor: t.bg }}
              >
                <IconBox color={t.iconBg}>
                  <ExternalIcon stroke={t.accent} />
                </IconBox>
                <ResourceText title="IIT Bombay Admissions" subtitle="iitb.ac.in" color={t.accent} />
              </a>

            </div>
          </div>

          {/* ── Switch program CTA ── */}
          

          {/* ── Apply CTA ── */}
          <div className="flex flex-col items-center gap-3 pt-6">
            <p className="text-sm text-neutral-500">
              Regular deadline:{" "}
              {program.dates?.[2]?.isoDate
                ? new Date(program.dates[2].isoDate).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                  })
                : "April 10"}
            </p>

            <a
              href={
                "applyUrl" in program
                  ? (program as typeof msProgram).applyUrl
                  : siteConfig.applyUrl
              }
              
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-semibold text-white text-base transition-opacity hover:opacity-90"
              style={{ backgroundColor: t.btnBg }}
            >
              {program === msProgram ? "Apply for Master's →" : "Apply for PhD →"}
            </a>

            <p className="text-xs text-neutral-400">
              IIT Bombay application portal
            </p>
          </div>

        </div>
      </div>

      {/* ───────── RIGHT SIDE (Important Dates) ───────── */}
      <div className="w-full lg:w-[420px] shrink-0">
        <div className="lg:sticky lg:top-24">
          <ImportantDates
            dates={program.dates as any}
            accentColor={t.accent}
            bgColor={t.bg}
            borderColor={t.border}
          />
        </div>
      </div>

    </div>
  )
}

/* ───────── COMPONENTS ───────── */

function SectionLabel({ text, color }: { text: string; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-1 h-6 rounded-full" style={{ backgroundColor: color }} />
      <h3 className="font-display text-xl font-bold" style={{ color }}>
        {text}
      </h3>
    </div>
  )
}

function IconBox({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <div
      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
      style={{ backgroundColor: color }}
    >
      {children}
    </div>
  )
}

function ResourceText({
  title,
  subtitle,
  color,
}: {
  title: string
  subtitle: string
  color: string
}) {
  return (
    <div>
      <span className="text-sm font-semibold block" style={{ color }}>
        {title}
      </span>
      <span className="text-xs text-neutral-400">{subtitle}</span>
    </div>
  )
}

/* ───────── ICONS ───────── */

function ExternalIcon({ stroke }: { stroke: string }) {
  return (
    <svg className="w-4 h-4" fill="none" stroke={stroke} strokeWidth={1.8} viewBox="0 0 24 24">
      <path d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5-4.5h6m0 0v6m0-6L11.25 12" />
    </svg>
  )
}

function DownloadIcon({ stroke }: { stroke: string }) {
  return (
    <svg className="w-4 h-4" fill="none" stroke={stroke} strokeWidth={1.8} viewBox="0 0 24 24">
      <path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
  )
}

function BuildingIcon({ stroke }: { stroke: string }) {
  return (
    <svg className="w-4 h-4" fill="none" stroke={stroke} strokeWidth={1.8} viewBox="0 0 24 24">
      <path d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18" />
    </svg>
  )
}