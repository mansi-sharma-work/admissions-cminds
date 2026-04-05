// One panel = one program. Everything here is driven by content.ts.
// To change eligibility criteria or dates, just edit content.ts.
// Don't touch this file for content updates.

import ImportantDates from "./ImportantDates"
import { msProgram, phdProgram, siteConfig } from "@/lib/content"

type Program = typeof msProgram | typeof phdProgram

// Color tokens: navy for MS, teal for PhD — matches the site-wide color language
const tokens = {
  navy: {
    accent: "#1a2e5a",
    bg: "rgba(26,46,90,0.05)",
    border: "rgba(26,46,90,0.14)",
    btnBg: "#1a2e5a",
    iconBg: "rgba(26,46,90,0.08)",
  },
  teal: {
    accent: "#0e7c7b",
    bg: "rgba(14,124,123,0.05)",
    border: "rgba(14,124,123,0.16)",
    btnBg: "#0e7c7b",
    iconBg: "rgba(14,124,123,0.08)",
  },
}

export default function ProgramPanel({ program }: { program: Program }) {
  const t = tokens[program.color]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">

      {/* Left: eligibility + process + resources (takes 2/3 on large screens) */}
      <div className="lg:col-span-2 space-y-10">

        {/* ── Eligibility ─────────────────────────────────────────────── */}
        <div>
          <SectionLabel text="Eligibility Criteria" color={t.accent} />

          <ul className="mt-4 space-y-3">
            {program.eligibility.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm sm:text-base text-neutral-700 leading-relaxed">
                <span
                  className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ backgroundColor: t.iconBg, color: t.accent }}
                >
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* GATE exemption note — gets asked a lot, so we give it its own box */}
          <div
            className="mt-5 p-4 rounded-lg text-sm text-neutral-700 leading-relaxed"
            style={{ backgroundColor: t.bg, border: `1px solid ${t.border}` }}
          >
            <span className="font-semibold" style={{ color: t.accent }}>GATE exemption: </span>
            {"gateNote" in program
              ? (program as typeof msProgram).gateNote
              : "IIT BTech / Dual-Degree holders with CPI \u2265 8.0 may be exempt. Check the brochure for details."}
          </div>

          <p className="mt-4 text-sm text-neutral-500 italic">
            Refer the{" "}
            <a
              href={program.brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:opacity-75"
              style={{ color: t.accent }}
            >
              {program.label} Admissions Brochure
            </a>{" "}
            for full eligibility, admission categories, and C-MInDS specific requirements.
          </p>
        </div>

        {/* ── Admission process ───────────────────────────────────────── */}
        <div>
          <SectionLabel text="Admission Process" color={t.accent} />
          <ol className="mt-4 space-y-3">
            {program.process.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm sm:text-base text-neutral-700 leading-relaxed">
                <span className="font-bold shrink-0" style={{ color: t.accent }}>
                  {i + 1}.
                </span>
                <span>
                  {step}
                  {/* Syllabus link only on the first step, and only if the URL exists */}
                  {i === 0 && "testSyllabusUrl" in program && (
                    <>
                      {" "}
                      <a
                        href={(program as typeof msProgram).testSyllabusUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2 text-sm"
                        style={{ color: t.accent }}
                      >
                        View syllabus ↗
                      </a>
                    </>
                  )}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* ── Resources ──────────────────────────────────────────────── */}
        <div>
          <SectionLabel text="Resources" color={t.accent} />
          <div className="mt-4 flex flex-wrap gap-3">
            <ResourceChip href={program.brochureUrl} label="Download Brochure" t={t} />
            <ResourceChip href={program.programUrl} label="Program Page" t={t} />
            <ResourceChip href={program.iitbAdmissionsUrl} label="IIT Bombay Admissions" t={t} />
            {"gateRequirementsUrl" in program && (
              <ResourceChip
                href={(program as typeof msProgram).gateRequirementsUrl}
                label="GATE Requirements"
                t={t}
              />
            )}
            <ResourceChip href={siteConfig.iitbScheduleUrl} label="Full IIT Bombay Schedule" t={t} />
          </div>
        </div>
        <div
          className="p-5 rounded-xl"
          style={{ backgroundColor: t.bg, border: `1px solid ${t.border}` }}
        >
          <p className="text-sm font-semibold text-neutral-700 mb-1">Ready to apply?</p>
          <p className="text-xs text-neutral-500 mb-4">
            Regular deadline: {program.dates[2]?.date ?? "April 10"}
          </p>
          <a
            href={"applyUrl" in program ? (program as typeof msProgram).applyUrl : siteConfig.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block text-center py-3 rounded-lg font-semibold text-white text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: t.btnBg }}
          >
            Apply Now →
          </a>
          <p className="text-xs text-neutral-400 mt-2 text-center">IIT Bombay application portal</p>
        </div>
      </div>

      {/* Right: dates + sticky apply CTA (1/3 on large screens) */}
      <div className="space-y-6" id="dates">
        <ImportantDates
          dates={program.dates}
          accentColor={t.accent}
          bgColor={t.bg}
          borderColor={t.border}
        />

        {/* Apply box — stays visible without having to scroll back up */}
        
      </div>
    </div>
  )
}

// Section heading with a left-accent bar — mirrors the reference site's style
function SectionLabel({ text, color }: { text: string; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-1 h-5 rounded-full shrink-0" style={{ backgroundColor: color }} />
      <h3 className="font-display text-lg font-bold" style={{ color }}>
        {text}
      </h3>
    </div>
  )
}

function ResourceChip({
  href,
  label,
  t,
}: {
  href: string
  label: string
  t: { accent: string; border: string }
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm px-4 py-2 rounded-lg font-medium transition-opacity hover:opacity-75"
      style={{ color: t.accent, border: `1px solid ${t.border}` }}
    >
      {label} ↗
    </a>
  )
}
