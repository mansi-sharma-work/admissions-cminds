# C-MInDS Admissions Page — Developer Notes

## Stack
- **Next.js 16** (App Router, static export via `output: "export"`)
- **Tailwind CSS v4**
- **TypeScript**

## How to update content
All copy, dates, links, and URLs live in **`lib/content.ts`**.
You should rarely need to edit component files for routine updates.

| What to change | Where |
|---|---|
| Dates | `msProgram.dates` / `phdProgram.dates` |
| Apply URL | `siteConfig.applyUrl` |
| Brochure PDFs | `msProgram.brochureUrl` / `phdProgram.brochureUrl` |
| Webinar date/time | `webinar.date` and `webinar.time` |
| Activate QR code | Set `webinar.hasQrCode: true`, drop image at `/public/webinar-qr.png` |
| Add YouTube videos | Fill in `youtubeId` in the `videos` array |
| Email / phone | `siteConfig.email` / `siteConfig.phone` |

## Commands
```bash
npm install
npm run dev     # localhost:3000
npm run build   # produces /out (static HTML/CSS/JS)
```

## Color tokens
- Navy (`#1a2e5a`) — MS by Research, header, hero, footer
- Teal (`#0e7c7b`) — PhD, webinar section
- These are applied inline via `tokens` in `ProgramPanel.tsx`

## Fonts
- **DM Serif Display** — headings (`font-display`)
- **DM Sans** — body (`font-body`)
- Loaded via Google Fonts in `app/layout.tsx`
