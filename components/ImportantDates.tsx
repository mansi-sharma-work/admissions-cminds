// Reusable timeline used inside both MS and PhD panels.
// Highlighted rows (webinar, deadlines) stand out at a glance —
// the goal is that someone scanning quickly doesn't miss key dates.

type DateEntry = {
  date: string
  label: string
  highlight: boolean
  isWebinar?: boolean
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
  return (
    <div>
      <h3 className="font-display text-base font-bold mb-4" style={{ color: accentColor }}>
        Important Dates
      </h3>

      <div className="space-y-1">
        {dates.map((item, i) => (
          <div
            key={i}
            className="flex gap-3 px-3 py-2.5 rounded-lg"
            style={
              item.highlight
                ? { backgroundColor: bgColor, border: `1px solid ${borderColor}` }
                : {}
            }
          >
            {/* Fixed-width date column keeps labels aligned no matter the date length */}
            <div className="shrink-0 w-28">
              <span
                className="text-xs font-bold uppercase tracking-wide"
                style={{ color: item.highlight ? accentColor : "#6b7280" }}
              >
                {item.date}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 min-w-0">
              <span
                className="text-sm leading-snug"
                style={{
                  fontWeight: item.highlight ? 600 : 400,
                  color: item.highlight ? "#111" : "#374151",
                }}
              >
                {item.label}
              </span>
              {item.isWebinar === true && (
                <span className="text-[11px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-semibold shrink-0 border border-amber-200">
                  Webinar
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
