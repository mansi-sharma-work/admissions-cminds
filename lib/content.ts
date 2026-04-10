

export const siteConfig = {
  name: "C-MInDS",
  fullName: "Centre for Machine Intelligence & Data Science",
  institute: "IIT Bombay",
  year: "2026–27",
  email: "admissions@minds.iitb.ac.in",
  phone: "022-2159-3767 / 022-2159-3778",
  applyUrl: "https://portal.iitb.ac.in/mtechapp/mtechAdmissionLinks.jsp",
  webinarRegisterUrl: "https://events.teams.microsoft.com/event/5be9d092-2036-47ae-b4fc-08d0f8592410@403ee5f4-55b3-45cd-8ae2-824be887a075",
  iitbScheduleUrl: "https://www.iitb.ac.in/admissions",
  mainSiteUrl: "https://www.minds.iitb.ac.in",
}

export const msProgram = {
  label: "MS by Research",
  fullTitle: "MS by Research in DS & AI",
  color: "navy" as const,
  duration: "1.5\u2013 3  years",
  funding: "Stipend eligible",
  applyUrl: "https://portal.iitb.ac.in/mtechapp/mtechAdmissionLinks.jsp",
  brochureUrl: "https://acad.iitb.ac.in/files/MSBR_BROCHURE_2026_0.pdf",
  programUrl: "https://www.minds.iitb.ac.in/academic-details/msr",
  iitbAdmissionsUrl: "https://www.iitb.ac.in/newacadhome/toMS.jsp",
  gateRequirementsUrl: "https://www.iitb.ac.in/newacadhome/GATE_Requirement.pdf",

  eligibility: [
    "B.E / B.Tech / 4-Year BS / MSc in science, statistics, or mathematics with a valid GATE score.",
    "IIT B.Tech degree holders with CPI \u2265 8.00 are exempted from GATE (limited seats).",
     "GATE score ≥ 650 required. Eligible disciplines: AE, BM, BT, CE, CH, CS, CY, DA, EC, EE, ES, IN, MA, ME, MN, MT, PH, PI, ST, XE, XL.",

  ],
  gateNote: "GATE requirements vary by discipline — check the GATE requirements link for details.",

  process: [
    "Online written test (same syllabus as PhD)",
    "Interview of shortlisted candidates",
  ],

  dates: [
    { isoDate: "2026-03-27", label: "Applications open", highlight: false },
    { isoDate: "2026-04-07", istTime: "18:00", label: "Admissions Webinar at 6 PM", highlight: true, isWebinar: true, url: siteConfig.webinarRegisterUrl, cta: "Register" },
    { isoDate: "2026-04-10", label: "Closing date for regular applications", highlight: true },
    { isoDate: "2026-04-16", istTime: "17:00",label: "Extended deadline (with late fee)", highlight: false },
    { isoDate: "2026-04-26", istTime: "14:00", istTimeEnd: "16:00", label: "Online written test", highlight: false },
    { isoDate: "2026-05-11", label: "Online interviews of shortlisted candidates", highlight: false },
    { isoDate: "2026-05-11",isToDate:"2026-05-12",  label: "In-person interviews at IIT Bombay", highlight: false },
    { isoDate: null,         label: "Admission results declared on COAP (Round 2)", highlight: false },
  ],
}

export const phdProgram = {
  label: "PhD",
  fullTitle: "PhD in DS & AI",
  color: "teal" as const,
  duration: "4\u20135 years",
  funding: "Funding available",
  applyUrl: "https://portal.iitb.ac.in/phdapp/phdAdmissionLinks.jsp",
  brochureUrl: "https://acad.iitb.ac.in/files/Ph.D._Brochure_2026-27FIN_0.pdf",
  programUrl: "https://www.minds.iitb.ac.in/academic-details/phd",
  iitbAdmissionsUrl: "https://www.iitb.ac.in/newacadhome/toPhD.jsp",

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
    { isoDate: "2026-03-27", label: "Applications open", highlight: false },
    { isoDate: "2026-04-07",istTime: "18:00", label: "Admissions Webinar at 6 PM", highlight: true, isWebinar: true, url: siteConfig.webinarRegisterUrl, cta: "Register" },
    { isoDate: "2026-04-10", label: "Closing date for regular applications", highlight: true },
    { isoDate: "2026-04-14", istTime: "17:00",label: "Extended deadline (with late fee)", highlight: false },
    { isoDate: "2026-04-26",istTime: "14:00", istTimeEnd: "16:00", label: "Online written test", highlight: false },
    { isoDate: "2026-05-12",isToDate:"2026-05-13",  label: "In-person interviews at IIT Bombay", highlight: false },
  ],
}

export const webinar = {
  date: "Tuesday, April 7, 2026",
  time: "6:00 PM IST",
  platform: "Microsoft Teams",
  eventPageUrl: "https://www.minds.iitb.ac.in/events-details/info-session-on-ms-by-research-phd-in-ds-ai-at-iit-bombay",
  registerUrl: siteConfig.webinarRegisterUrl,
  hasQrCode: false,
}

export const videos = [
  { 
    id: "v1", 
    title: "Pranay Sharma, Core Faculty", 
    youtubeId: "", 
    localSrc: "/Admission video.mp4",
    profileUrl: "https://www.minds.iitb.ac.in/people/core-faculty/pranay-sharma"
  },
  { 
    id: "v2", 
    title: "Pratik Jawanpuria, Core Faculty", 
    youtubeId: "", 
    localSrc: "/Admission video 2.mp4",
    profileUrl: "https://www.minds.iitb.ac.in/people/core-faculty/pratik-jawanpuria"
  },
  { 
    id: "v3", 
    title: "Arjun Bhagoji, Core Faculty", 
    youtubeId: "", 
    localSrc: "/Admission video 3.mp4",
    profileUrl: "https://www.minds.iitb.ac.in/people/core-faculty/arjun-bhagoji"
  },
];