import { videos } from "@/lib/content"

// Video section — static placeholders until real YouTube IDs land in content.ts.
// To publish a video: just fill in `youtubeId` for that entry in content.ts.
// No component changes needed.
export default function VideosSection() {
  return (
    <section className="bg-neutral-50 py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <h2 className="font-display text-2xl sm:text-3xl font-bold mb-2" style={{ color: "#1a2e5a" }}>
          Hear from Us
        </h2>
        <p className="text-neutral-500 text-sm mb-8">
          Program overviews, student stories, and research highlights from C-MInDS.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  )
}

function VideoCard({ video }: { video: { id: string; title: string; youtubeId: string } }) {
  const hasVideo = !!video.youtubeId

  return (
    <div className="rounded-xl overflow-hidden border border-neutral-200 bg-white card-lift">
      {/* 16:9 aspect ratio — consistent regardless of content */}
      <div className="aspect-video bg-neutral-100 relative flex items-center justify-center">
        {hasVideo ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="w-full h-full"
          />
        ) : (
          // Placeholder card — shown until a real YouTubeId is added
          <div className="flex flex-col items-center gap-3 text-neutral-400 px-6 text-center">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "rgba(26,46,90,0.07)" }}
            >
              <svg className="w-6 h-6" fill="none" stroke="#1a2e5a" viewBox="0 0 24 24" opacity="0.4">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-xs text-neutral-400">Video coming soon</span>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-neutral-100">
        <p className="text-sm font-semibold text-neutral-800 leading-snug">{video.title}</p>
      </div>
    </div>
  )
}
