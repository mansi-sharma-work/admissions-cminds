// ─── CONTENT FILE ────────────────────────────────────────────────────────────
// All page content lives here. Dates, links, text — update this file only.
// No need to touch any component when content changes.
// ─────────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "C-MInDS",
  fullName: "Centre for Machine Intelligence & Data Science",
  institute: "IIT Bombay",
  year: "2026–27",
  email: "admissions@minds.iitb.ac.in",
  phone: "022-2159-3767 / 022-2159-3778",
  applyUrl: "https://portal.iitb.ac.in/asc/Register",
  webinarRegisterUrl: "https://events.teams.microsoft.com/event/5be9d092-2036-47ae-b4fc-08d0f8592410@403ee5f4-55b3-45cd-8ae2-824be887a075",
  iitbScheduleUrl: "https://www.iitb.ac.in/admissions",
  mainSiteUrl: "https://www.minds.iitb.ac.in",
}

export const msProgram = {
  label: "MS by Research",
  fullTitle: "MS by Research in DS & AI",
  color: "navy" as const,
  duration: "2 years",
  funding: "Stipend eligible",
  brochureUrl: "https://www.iitb.ac.in/newacadhome/CMInDS-MSBR_AdmBrochure23-24.pdf",
  programUrl: "https://www.minds.iitb.ac.in/academics/ms",
  iitbAdmissionsUrl: "https://www.iitb.ac.in/newacadhome/toMS.jsp",
  gateRequirementsUrl: "https://www.iitb.ac.in/newacadhome/GATE_Requirement.pdf",
  testSyllabusUrl: "https://www.minds.iitb.ac.in/admissions/ms-test-syllabus",

  eligibility: [
    "B.E / B.Tech / 4-Year BS / MSc in science, statistics, or mathematics with a valid GATE score.",
    "IIT B.Tech degree holders with CPI \u2265 8.00 are exempted from GATE (limited seats).",
  ],
  gateNote: "GATE requirements vary by discipline — check the GATE requirements link for details.",

  process: [
    "Online written test (same syllabus as PhD)",
    "Interview of shortlisted candidates",
  ],

  dates: [
    { date: "March 27", label: "Applications open", highlight: false },
    { date: "April 7", label: "Admissions Webinar at 6 PM", highlight: true, isWebinar: true },
    { date: "April 10", label: "Closing date for regular applications", highlight: false },
    { date: "April 16, 5 PM", label: "Extended deadline (with late fee)", highlight: false },
    { date: "April 26", label: "Online written test", highlight: false },
    { date: "May 11\u201312", label: "Online interviews of shortlisted candidates", highlight: false },
    { date: "COAP Round 2", label: "Admission results declared on COAP", highlight: false },
  ],
}

export const phdProgram = {
  label: "PhD",
  fullTitle: "PhD in DS & AI",
  color: "teal" as const,
  duration: "4\u20135 years",
  funding: "Funding available",
  brochureUrl: "https://www.minds.iitb.ac.in/sites/default/files/PhD_Brochure_2026.pdf",
  programUrl: "https://www.minds.iitb.ac.in/academics/phd",
  iitbAdmissionsUrl: "https://www.iitb.ac.in/newacadhome/toPhD.jsp",
  testSyllabusUrl: "https://www.minds.iitb.ac.in/admissions/phd-test-syllabus",

  eligibility: [
    "ME / MTech / MS, or BE / BTech / 4-Year BS / MSc with a valid GATE score.",
    "IIT BTech or Dual-Degree holders with CPI \u2265 8.0 are exempted from GATE.",
    "Industry professionals can apply via External, Sponsored, or Self-funded categories \u2014 GATE waiver available with 2+ years of relevant experience.",
  ],
  gateNote: "IIT BTech / Dual-Degree holders with CPI \u2265 8.0 may be exempt. Industry applicants with 2+ years experience may also qualify for a GATE waiver.",

  process: [
    "Online written test (same as MS, shared syllabus)",
    "Interview of shortlisted candidates",
  ],

  dates: [
    { date: "March 27", label: "Applications open", highlight: false },
    { date: "April 7", label: "Admissions Webinar at 6 PM", highlight: true, isWebinar: true },
    { date: "April 10", label: "Closing date for regular applications", highlight: false },
    { date: "April 14, 5 PM", label: "Extended deadline (with late fee)", highlight: false },
    { date: "April 26", label: "Online written test", highlight: false },
    { date: "May 13\u201314", label: "In-person interviews at IIT Bombay", highlight: false },
    { date: "COAP Round 2", label: "Admission results declared on COAP", highlight: false },
  ],
}

export const webinar = {
  date: "Tuesday, April 7, 2026",
  time: "6:00 PM IST",
  platform: "Google Meet / Zoom",
  registerUrl: siteConfig.webinarRegisterUrl,
  hasQrCode: false,
}

export const videos = [
  { id: "v1", title: "MS by Research \u2014 Program Overview", youtubeId: "" },
  { id: "v2", title: "Life at C-MInDS, IIT Bombay", youtubeId: "" },
  { id: "v3", title: "PhD Program \u2014 Research Areas", youtubeId: "" },
]
export const updates = [
  {
    id: "webinar-apr7",
    tag: "Webinar",
    date: "April 7, 2026",
    text: "Admissions Webinar at 6 PM IST on Microsoft Teams. Join faculty and current students for a live Q&A on both programs.",
    url: siteConfig.webinarRegisterUrl,
    cta: "Register →",
  },
  // Add future updates here — announcements, deadline reminders, result dates, etc.
]
