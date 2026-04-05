import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Admissions 2026–27 | C-MInDS, IIT Bombay",
  description:
    "Apply to the MS by Research or PhD programs in Data Science & AI at the Centre for Machine Intelligence and Data Science, IIT Bombay.",
  openGraph: {
    title: "C-MInDS Admissions 2026–27",
    description: "MS & PhD programs in DS & AI at IIT Bombay",
    siteName: "C-MInDS, IIT Bombay",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Preconnect to Google Fonts — shaves ~100ms off first load */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-white text-neutral-900">{children}</body>
    </html>
  )
}
