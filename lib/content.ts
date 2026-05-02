export const shortlists = {
  ms: {
    label: "MS by Research",
    ids: ["B271856111","B274387137","B268652430","B266232210","B268016132","B264791180","B266969866","B275198198","B272003196","B268958535","B269452164","B273957210","B274788125","B270051208","B265247164","B269439497","B274507214","B273478264","B271777200","B268989202","B267019206","B274361447","B268492476","B266528214","B271367490","B271566112","B268960211","B276842106","B271145101","B270906104","B270773143","B272181159","B271179948","B267334119","B264893356","B270479137","B276462606","B273258334","B272428209","B271801203","B265430137","B268877139","B267044572","B273005786","B272140152","B267767125","B274873158","B265132197","B271776134","B266786304","B266864281","B267296266","B273100110","B272467194","B265069944","B271545167","B266995170","B274871155","B272580155","B266143378","B265973154","B271519909","B267076624","B272546689","B267330957","B267665164","B265911551","B273200140","B267298151","B272606100","B268353202","B271633121","B272585626","B272081198","B274471669","B274427166","B274543914","B273717395","B270279736","B274517137"],
  },
  phd: {
    label: "PhD",
    ids: ["PW4729487","PW0507703","PW1937205","PW2291641","PW0340207","PW2890776","PW1318336","PW5332162","PW6434542","PW2043204","PW4567631","PW2350183","PW3847228","PW1825700","PW5758184","PW5446824","PW4850528","PW4300476","PW5719512","PW5841872","PW2788118","PW0131144","PW1217111","PW3576925","PW5263938","PW2510180","PW5252205","PW61611921","PW5155168","PW22281824","PW3276181","PW02191921","PW4611653","PW4960151","PW1033196","PW4753201","PW12751591","PW2213532","PW1539781","PW3921219","PW0669527","PW5025448","PW25581192","PW2463167","PW4317139","PW17371841","PW1566305","PW6137781","PW44631322","PW6343439","PW1444983","PW4424158","PW2794151","PW1302246","PW3359883","PW6468968"],
  },
  foreign: {
  label: "Foreign National",
  ids: [
    { id: "826240", via: "IIT Bombay application" },
    { id: "26-91-000200602", via: "Study-in-India portal" },
    { id: "26-91-000203915", via: "Study-in-India portal" },
    { id: "26-977-000200840", via: "Study-in-India portal" },
    { id: "26-977-000210510", via: "Study-in-India portal" },
  ],
},
}

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
  brochureUrl: "/brochure-ms.pdf",
  programUrl: "https://www.minds.iitb.ac.in/academic-details/msr",
  iitbAdmissionsUrl: "https://www.iitb.ac.in/newacadhome/toMS.jsp",
  gateRequirementsUrl: "https://www.iitb.ac.in/newacadhome/GATE_Requirement.pdf",
  detailsUrl : "https://acad.iitb.ac.in/admissions/masters/msbyresearch",

  eligibility: [
    "B.E / B.Tech / 4-Year BS / MSc in science, statistics, or mathematics with a valid GATE score.",
    "IIT B.Tech degree holders with CPI \u2265 8.00 are exempted from GATE (limited seats).",
     "GATE score ≥ 650 required (for general category). Eligible disciplines: AE, BM, BT, CE, CH, CS, CY, DA, EC, EE, ES, IN, MA, ME, MN, MT, PH, PI, ST, XE, XL.",

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
    { isoDate: "2026-04-16", istTime: "17:00",label: "Extended deadline (for MS)", highlight: false },
    { isoDate: "2026-04-26", istTime: "14:00", istTimeEnd: "16:00", label: "Online written test", highlight: false },
    { isoDate: "2026-05-11", label: "Online interviews of shortlisted candidates", highlight: false },
{ isoDate: "2026-05-24", isToDate: "2026-05-27", label: "Selection results by IITB on COAP (Round 3)", highlight: false },    { isoDate: null,         label: "Admission results declared on COAP (Round 2)", highlight: false },
    { isoDate: "2026-07-22",  label: "Reporting at IIT Bombay (9:30 am onwards)", istTime: "9:30",highlight: false },
    { isoDate: "2026-07-27",  label: "Start of semester", istTime: "9:30",highlight: false },
  ],
}

export const phdProgram = {
  label: "PhD",
  fullTitle: "PhD in DS & AI",
  color: "teal" as const,
  duration: "4\u20135 years",
  funding: "Funding available",
  applyUrl: "https://portal.iitb.ac.in/phdapp/phdAdmissionLinks.jsp",
  brochureUrl: "Phd.pdf",
  programUrl: "https://www.minds.iitb.ac.in/academic-details/phd",
  iitbAdmissionsUrl: "https://www.iitb.ac.in/newacadhome/toPhD.jsp",
  detailsUrl : "https://acad.iitb.ac.in/admissions/research",


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
    { isoDate: "2026-04-14", istTime: "17:00",label: "Extended deadline (For PhD)", highlight: false },
    { isoDate: "2026-04-26",istTime: "14:00", istTimeEnd: "16:00", label: "Online written test", highlight: false },
    { isoDate: "2026-05-12",isToDate:"2026-05-13",  label: "In-person interviews at IIT Bombay", highlight: false },
    { isoDate: "2026-05-22",  label: "PhD selection",highlight: false },
    { isoDate: "2026-07-22",  label: "Reporting at IIT Bombay (9:30 am onwards)", istTime: "9:30",highlight: false },
    { isoDate: "2026-07-27",  label: "Start of semester", istTime: "9:30",highlight: false },


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
    id: "webinar",
    title: "Admissions Webinar 2026 — MS & PhD",
    youtubeId: "rfbJzsBjc8k",
    localSrc: undefined,
    profileUrl: undefined,
  },
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