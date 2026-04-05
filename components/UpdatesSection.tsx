import { updates } from "@/lib/content"

// Updates strip — scrollable list of announcements.
// To add a new update, just add an entry to the `updates` array in content.ts.
// No component changes needed.
export default function UpdatesSection() {
  return (
    <section id="updates" className="py-12 sm:py-16" style={{ backgroundColor: "#0e7c7b" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <h2 className="font-display text-2xl font-bold text-white mb-6">
          Updates
        </h2>

        {/* Scrollable vertical list — capped height so it doesn't dominate the page */}
        <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
          {updates.map((item) => (
            <div
              key={item.id}
              className="rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-3"
              style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              {/* Tag + date */}
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[11px] font-semibold bg-white text-teal-800 px-2 py-0.5 rounded-full">
                  {item.tag}
                </span>
                <span className="text-teal-200 text-xs">{item.date}</span>
              </div>

              {/* Text */}
              <p className="text-white text-sm leading-relaxed flex-1">
                {item.text}
              </p>

              {/* CTA link — only shown if url is set */}
              {item.url && item.cta && (
                
                  <a href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold shrink-0 px-4 py-2 rounded-lg transition-colors hover:bg-white/20"
                  style={{ color: "white", border: "1px solid rgba(255,255,255,0.3)" }}
                >
                  {item.cta}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}