import type { Lang } from "./data";

export interface ArcItem {
  t: string;
  d: string;
}

export interface StringSet {
  dir: string;
  brand: string;
  brandSub: string;
  navHome: string;
  navMap: string;
  navProjects: string;
  navAbout: string;
  heroKicker: string;
  heroTitleA: string;
  heroTitleB: string;
  heroSub: string;
  findRoad: string;
  findCta: string;
  exploreMap: string;
  browseAll: string;
  kpiTracked: string;
  kpiProjects: string;
  kpiCompleted: string;
  kpiInProgress: string;
  kpiDelayed: string;
  kpiRoad: string;
  portfolioHealth: string;
  portfolioSub: string;
  mapPreviewTitle: string;
  mapPreviewSub: string;
  spotlightDelayed: string;
  spotlightLargest: string;
  spotlightRecent: string;
  viewAll: string;
  viewDetails: string;
  filters: string;
  status: string;
  allStatuses: string;
  zone: string;
  allZones: string;
  workType: string;
  allTypes: string;
  overdueOnly: string;
  clear: string;
  sortBy: string;
  sortCost: string;
  sortDelay: string;
  sortRecent: string;
  sortProgress: string;
  results: string;
  s_notStarted: string;
  s_inProgress: string;
  s_delayed: string;
  s_completed: string;
  s_dlp: string;
  s_stalled: string;
  sanctionedCost: string;
  spent: string;
  contractor: string;
  officer: string;
  accountable: string;
  wardZone: string;
  length: string;
  funding: string;
  promised: string;
  started: string;
  sanctioned: string;
  actual: string;
  progress: string;
  lastUpdated: string;
  workOrder: string;
  overdue: string;
  stalledFor: string;
  notBegun: string;
  backToProjects: string;
  timeline: string;
  maintenance: string;
  dlpNote: string;
  freeRepairUntil: string;
  dlpExpired: string;
  maintenancePeriod: string;
  months: string;
  reportIssue: string;
  share: string;
  download: string;
  costBreakdown: string;
  ofSanctioned: string;
  aboutTitle: string;
  aboutLead: string;
  dataSource: string;
  methodology: string;
  contribute: string;
  lastUpdatedAt: string;
  trustNote: string;
  aboutP1: string;
  arc: ArcItem[];
  dataSourceBody: string;
  methodologyBody: string;
  contributeBody: string;
  noResults: string;
}

export const STRINGS: Record<Lang, StringSet> = {
  en: {
    dir: "en",
    brand: "RoadWatch",
    brandSub: "Bengaluru",
    navHome: "Home",
    navMap: "Map",
    navProjects: "Projects",
    navAbout: "About",
    heroKicker: "Public money, made publicly visible",
    heroTitleA: "₹5,500 crore later,",
    heroTitleB: "Bengaluru deserves answers.",
    heroSub:
      "Find any road and see exactly what it cost, who built it, which officer signed off, when it was promised — and whether it was actually delivered.",
    findRoad: "Find your road — name or area",
    findCta: "Search",
    exploreMap: "Explore the map",
    browseAll: "Browse all projects",
    kpiTracked: "Total sanctioned",
    kpiProjects: "Road works",
    kpiCompleted: "Completed",
    kpiInProgress: "In progress",
    kpiDelayed: "Delayed",
    kpiRoad: "Road length",
    portfolioHealth: "The state of Bengaluru\u2019s roads",
    portfolioSub: "Every work, by status. Tap a band to filter.",
    mapPreviewTitle: "Where the money is",
    mapPreviewSub: "Road works across the city, colour-coded by status.",
    spotlightDelayed: "Most delayed",
    spotlightLargest: "Largest by cost",
    spotlightRecent: "Recently updated",
    viewAll: "View all",
    viewDetails: "View full details",
    filters: "Filters",
    status: "Status",
    allStatuses: "All statuses",
    zone: "Zone",
    allZones: "All zones",
    workType: "Work type",
    allTypes: "All types",
    overdueOnly: "Overdue only",
    clear: "Clear",
    sortBy: "Sort by",
    sortCost: "Cost (high \u2192 low)",
    sortDelay: "Most delayed",
    sortRecent: "Recently updated",
    sortProgress: "Progress",
    results: "works",
    s_notStarted: "Not Started",
    s_inProgress: "In Progress",
    s_delayed: "Delayed",
    s_completed: "Completed",
    s_dlp: "Under Maintenance",
    s_stalled: "Stalled",
    sanctionedCost: "Sanctioned cost",
    spent: "Spent",
    contractor: "Contractor",
    officer: "Officer responsible",
    accountable: "Accountable",
    wardZone: "Ward / Zone",
    length: "Length",
    funding: "Funding source",
    promised: "Promised completion",
    started: "Work started",
    sanctioned: "Sanctioned",
    actual: "Completed",
    progress: "Progress",
    lastUpdated: "Last updated",
    workOrder: "Work order",
    overdue: "days overdue",
    stalledFor: "no activity",
    notBegun: "not started",
    backToProjects: "All projects",
    timeline: "Timeline",
    maintenance: "Maintenance & defect liability",
    dlpNote:
      "The contractor must repair any defects free of cost until this date.",
    freeRepairUntil: "Free repair until",
    dlpExpired: "Defect liability has ended",
    maintenancePeriod: "Maintenance period",
    months: "months",
    reportIssue: "Report an issue",
    share: "Share",
    download: "Download details",
    costBreakdown: "Cost",
    ofSanctioned: "of sanctioned spent",
    aboutTitle: "Why this exists",
    aboutLead:
      "Every taxpayer is tracked for every rupee they owe. Citizens deserve the same visibility into how their money is spent.",
    dataSource: "Data source",
    methodology: "How this works",
    contribute: "Contribute",
    lastUpdatedAt: "Data last updated",
    trustNote:
      "Built as a non-partisan civic utility. No logins, no paywalls — every field, always public.",
    aboutP1:
      "Every taxpayer in Bengaluru is tracked for every rupee they owe the government. Yet citizens have had no way to see where ₹5,500 crore of road money has gone, who spent it, who is accountable, and whether the work was actually delivered. This dashboard flips that relationship — it makes public money publicly visible.",
    arc: [
      { t: "Recognition", d: "This is my road, my ward — I can find it." },
      { t: "Clarity", d: "I now understand where the money went." },
      {
        t: "Accountability",
        d: "I know exactly who is responsible and what they owe.",
      },
      { t: "Empowerment", d: "I can share this, question this, and act on it." },
    ],
    dataSourceBody:
      "Compiled from published BBMP works registers, sanction orders, and tender documents — consolidated into one open record per road work.",
    methodologyBody:
      "Each work is matched to its sanction, contractor, responsible officer, and promised timeline. Status is derived from progress reports against the promised completion date.",
    contributeBody:
      "A non-partisan effort by volunteer technologists and citizens. Spot an error or a missing road? Flag it, and help keep the record honest.",
    noResults: "No works match these filters.",
  },
  kn: {
    dir: "kn",
    brand: "ರೋಡ್‌ವಾಚ್",
    brandSub: "ಬೆಂಗಳೂರು",
    navHome: "ಮುಖಪುಟ",
    navMap: "ನಕ್ಷೆ",
    navProjects: "ಯೋಜನೆಗಳು",
    navAbout: "ಬಗ್ಗೆ",
    heroKicker: "ಸಾರ್ವಜನಿಕ ಹಣ, ಸಾರ್ವಜನಿಕವಾಗಿ ಗೋಚರ",
    heroTitleA: "₹5,500 ಕೋಟಿ ನಂತರ,",
    heroTitleB: "ಬೆಂಗಳೂರಿಗೆ ಉತ್ತರ ಬೇಕು.",
    heroSub:
      "ಯಾವುದೇ ರಸ್ತೆಯನ್ನು ಹುಡುಕಿ — ಅದರ ವೆಚ್ಚ, ಗುತ್ತಿಗೆದಾರ, ಸಹಿ ಮಾಡಿದ ಅಧಿಕಾರಿ, ಭರವಸೆಯ ದಿನಾಂಕ ಮತ್ತು ಅದು ನಿಜವಾಗಿ ಪೂರ್ಣಗೊಂಡಿದೆಯೇ ಎಂದು ನೋಡಿ.",
    findRoad: "ನಿಮ್ಮ ರಸ್ತೆ ಹುಡುಕಿ — ಹೆಸರು ಅಥವಾ ಪ್ರದೇಶ",
    findCta: "ಹುಡುಕಿ",
    exploreMap: "ನಕ್ಷೆ ನೋಡಿ",
    browseAll: "ಎಲ್ಲಾ ಯೋಜನೆಗಳು",
    kpiTracked: "ಒಟ್ಟು ಮಂಜೂರಾತಿ",
    kpiProjects: "ರಸ್ತೆ ಕಾಮಗಾರಿಗಳು",
    kpiCompleted: "ಪೂರ್ಣಗೊಂಡಿದೆ",
    kpiInProgress: "ಪ್ರಗತಿಯಲ್ಲಿ",
    kpiDelayed: "ವಿಳಂಬ",
    kpiRoad: "ರಸ್ತೆ ಉದ್ದ",
    portfolioHealth: "ಬೆಂಗಳೂರಿನ ರಸ್ತೆಗಳ ಸ್ಥಿತಿ",
    portfolioSub: "ಪ್ರತಿ ಕಾಮಗಾರಿ, ಸ್ಥಿತಿಯ ಪ್ರಕಾರ.",
    mapPreviewTitle: "ಹಣ ಎಲ್ಲಿದೆ",
    mapPreviewSub: "ನಗರದಾದ್ಯಂತ ರಸ್ತೆ ಕಾಮಗಾರಿಗಳು, ಸ್ಥಿತಿಯ ಬಣ್ಣದಿಂದ.",
    spotlightDelayed: "ಅತಿ ಹೆಚ್ಚು ವಿಳಂಬ",
    spotlightLargest: "ಅತಿ ದೊಡ್ಡ ವೆಚ್ಚ",
    spotlightRecent: "ಇತ್ತೀಚೆಗೆ ನವೀಕರಿಸಲಾಗಿದೆ",
    viewAll: "ಎಲ್ಲಾ ನೋಡಿ",
    viewDetails: "ಪೂರ್ಣ ವಿವರ ನೋಡಿ",
    filters: "ಫಿಲ್ಟರ್",
    status: "ಸ್ಥಿತಿ",
    allStatuses: "ಎಲ್ಲಾ ಸ್ಥಿತಿ",
    zone: "ವಲಯ",
    allZones: "ಎಲ್ಲಾ ವಲಯ",
    workType: "ಕಾಮಗಾರಿ ಬಗೆ",
    allTypes: "ಎಲ್ಲಾ ಬಗೆ",
    overdueOnly: "ವಿಳಂಬಿತ ಮಾತ್ರ",
    clear: "ತೆರವು",
    sortBy: "ವಿಂಗಡಿಸಿ",
    sortCost: "ವೆಚ್ಚ (ಹೆಚ್ಚು \u2192 ಕಡಿಮೆ)",
    sortDelay: "ಅತಿ ವಿಳಂಬ",
    sortRecent: "ಇತ್ತೀಚಿನ",
    sortProgress: "ಪ್ರಗತಿ",
    results: "ಕಾಮಗಾರಿಗಳು",
    s_notStarted: "ಆರಂಭವಾಗಿಲ್ಲ",
    s_inProgress: "ಪ್ರಗತಿಯಲ್ಲಿ",
    s_delayed: "ವಿಳಂಬ",
    s_completed: "ಪೂರ್ಣಗೊಂಡಿದೆ",
    s_dlp: "ನಿರ್ವಹಣೆಯಲ್ಲಿ",
    s_stalled: "ಸ್ಥಗಿತ",
    sanctionedCost: "ಮಂಜೂರಾದ ವೆಚ್ಚ",
    spent: "ಖರ್ಚು",
    contractor: "ಗುತ್ತಿಗೆದಾರ",
    officer: "ಜವಾಬ್ದಾರ ಅಧಿಕಾರಿ",
    accountable: "ಜವಾಬ್ದಾರ",
    wardZone: "ವಾರ್ಡ್ / ವಲಯ",
    length: "ಉದ್ದ",
    funding: "ಧನಸಹಾಯ ಮೂಲ",
    promised: "ಭರವಸೆಯ ಪೂರ್ಣಗೊಳಿಸುವಿಕೆ",
    started: "ಕಾಮಗಾರಿ ಆರಂಭ",
    sanctioned: "ಮಂಜೂರಾತಿ",
    actual: "ಪೂರ್ಣಗೊಂಡಿದೆ",
    progress: "ಪ್ರಗತಿ",
    lastUpdated: "ಕೊನೆಯ ನವೀಕರಣ",
    workOrder: "ಕಾರ್ಯಾದೇಶ",
    overdue: "ದಿನ ವಿಳಂಬ",
    stalledFor: "ಚಟುವಟಿಕೆ ಇಲ್ಲ",
    notBegun: "ಆರಂಭವಾಗಿಲ್ಲ",
    backToProjects: "ಎಲ್ಲಾ ಯೋಜನೆಗಳು",
    timeline: "ಕಾಲಾನುಕ್ರಮ",
    maintenance: "ನಿರ್ವಹಣೆ ಮತ್ತು ದೋಷ ಹೊಣೆಗಾರಿಕೆ",
    dlpNote:
      "ಈ ದಿನಾಂಕದವರೆಗೆ ಗುತ್ತಿಗೆದಾರ ಯಾವುದೇ ದೋಷಗಳನ್ನು ಉಚಿತವಾಗಿ ಸರಿಪಡಿಸಬೇಕು.",
    freeRepairUntil: "ಉಚಿತ ದುರಸ್ತಿ ಇಲ್ಲಿಯವರೆಗೆ",
    dlpExpired: "ದೋಷ ಹೊಣೆಗಾರಿಕೆ ಮುಗಿದಿದೆ",
    maintenancePeriod: "ನಿರ್ವಹಣಾ ಅವಧಿ",
    months: "ತಿಂಗಳು",
    reportIssue: "ಸಮಸ್ಯೆ ವರದಿ",
    share: "ಹಂಚಿಕೊಳ್ಳಿ",
    download: "ವಿವರ ಡೌನ್‌ಲೋಡ್",
    costBreakdown: "ವೆಚ್ಚ",
    ofSanctioned: "ಮಂಜೂರಾತಿಯ ಖರ್ಚು",
    aboutTitle: "ಇದು ಏಕೆ ಇದೆ",
    aboutLead:
      "ಪ್ರತಿ ತೆರಿಗೆದಾರನ ಪ್ರತಿ ರೂಪಾಯಿಯನ್ನೂ ಸರ್ಕಾರ ಗಮನಿಸುತ್ತದೆ. ತಮ್ಮ ಹಣ ಹೇಗೆ ಖರ್ಚಾಗುತ್ತದೆ ಎಂಬ ಅದೇ ಪಾರದರ್ಶಕತೆ ನಾಗರಿಕರಿಗೂ ಬೇಕು.",
    dataSource: "ದತ್ತಾಂಶ ಮೂಲ",
    methodology: "ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
    contribute: "ಕೊಡುಗೆ ನೀಡಿ",
    lastUpdatedAt: "ದತ್ತಾಂಶ ಕೊನೆಯ ನವೀಕರಣ",
    trustNote:
      "ಪಕ್ಷಾತೀತ ನಾಗರಿಕ ಸೌಲಭ್ಯವಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ. ಲಾಗಿನ್ ಇಲ್ಲ, ಶುಲ್ಕ ಇಲ್ಲ — ಪ್ರತಿ ಮಾಹಿತಿ, ಸದಾ ಸಾರ್ವಜನಿಕ.",
    aboutP1:
      "ಬೆಂಗಳೂರಿನ ಪ್ರತಿ ತೆರಿಗೆದಾರನ ಪ್ರತಿ ರೂಪಾಯಿಯನ್ನೂ ಸರ್ಕಾರ ಗಮನಿಸುತ್ತದೆ. ಆದರೆ ₹5,500 ಕೋಟಿ ರಸ್ತೆ ಹಣ ಎಲ್ಲಿ ಹೋಯಿತು, ಯಾರು ಖರ್ಚು ಮಾಡಿದರು, ಯಾರು ಜವಾಬ್ದಾರರು ಮತ್ತು ಕೆಲಸ ನಿಜವಾಗಿ ಪೂರ್ಣಗೊಂಡಿದೆಯೇ ಎಂದು ನೋಡಲು ನಾಗರಿಕರಿಗೆ ಯಾವ ಮಾರ್ಗವೂ ಇರಲಿಲ್ಲ. ಈ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಆ ಸಂಬಂಧವನ್ನು ಬದಲಿಸುತ್ತದೆ — ಸಾರ್ವಜನಿಕ ಹಣವನ್ನು ಸಾರ್ವಜನಿಕವಾಗಿ ಗೋಚರಗೊಳಿಸುತ್ತದೆ.",
    arc: [
      {
        t: "ಗುರುತಿಸುವಿಕೆ",
        d: "ಇದು ನನ್ನ ರಸ್ತೆ, ನನ್ನ ವಾರ್ಡ್ — ನಾನು ಅದನ್ನು ಹುಡುಕಬಲ್ಲೆ.",
      },
      { t: "ಸ್ಪಷ್ಟತೆ", d: "ಹಣ ಎಲ್ಲಿ ಹೋಯಿತು ಎಂದು ನನಗೆ ಈಗ ಅರ್ಥವಾಗಿದೆ." },
      {
        t: "ಜವಾಬ್ದಾರಿ",
        d: "ಯಾರು ಜವಾಬ್ದಾರರು, ಏನು ಬಾಕಿ ಎಂದು ನನಗೆ ತಿಳಿದಿದೆ.",
      },
      {
        t: "ಸಬಲೀಕರಣ",
        d: "ನಾನು ಇದನ್ನು ಹಂಚಬಲ್ಲೆ, ಪ್ರಶ್ನಿಸಬಲ್ಲೆ, ಕ್ರಮ ಕೈಗೊಳ್ಳಬಲ್ಲೆ.",
      },
    ],
    dataSourceBody:
      "ಪ್ರಕಟಿತ ಬಿಬಿಎಂಪಿ ಕಾಮಗಾರಿ ದಾಖಲೆಗಳು, ಮಂಜೂರಾತಿ ಆದೇಶಗಳು ಮತ್ತು ಟೆಂಡರ್ ದಾಖಲೆಗಳಿಂದ ಸಂಗ್ರಹಿಸಲಾಗಿದೆ — ಪ್ರತಿ ರಸ್ತೆ ಕಾಮಗಾರಿಗೆ ಒಂದು ಮುಕ್ತ ದಾಖಲೆ.",
    methodologyBody:
      "ಪ್ರತಿ ಕಾಮಗಾರಿಯನ್ನು ಅದರ ಮಂಜೂರಾತಿ, ಗುತ್ತಿಗೆದಾರ, ಜವಾಬ್ದಾರ ಅಧಿಕಾರಿ ಮತ್ತು ಭರವಸೆಯ ಕಾಲಮಿತಿಗೆ ಹೊಂದಿಸಲಾಗಿದೆ. ಭರವಸೆಯ ದಿನಾಂಕದ ವಿರುದ್ಧ ಪ್ರಗತಿಯಿಂದ ಸ್ಥಿತಿ ನಿರ್ಧರಿಸಲಾಗುತ್ತದೆ.",
    contributeBody:
      "ಸ್ವಯಂಸೇವಕ ತಂತ್ರಜ್ಞರು ಮತ್ತು ನಾಗರಿಕರ ಪಕ್ಷಾತೀತ ಪ್ರಯತ್ನ. ತಪ್ಪು ಅಥವಾ ಕಾಣೆಯಾದ ರಸ್ತೆ ಕಂಡರೆ ತಿಳಿಸಿ, ದಾಖಲೆ ಪ್ರಾಮಾಣಿಕವಾಗಿರಲು ಸಹಾಯ ಮಾಡಿ.",
    noResults: "No works match these filters.",
  },
};
