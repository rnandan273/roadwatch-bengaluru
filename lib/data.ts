// Bengaluru Road Works — sample dataset + bilingual strings.
// Sample of works drawn from a (fictional) ₹5,500 cr program.
// All contractor and officer names are anonymized placeholders ("Contractor A",
// "Officer A", …) and do NOT refer to any real person or firm.

export type StatusKey =
  | "notStarted"
  | "inProgress"
  | "delayed"
  | "completed"
  | "dlp"
  | "stalled";

export type Lang = "en" | "kn";

export interface Officer {
  name: string;
  designation: string;
}

export interface Project {
  id: string;
  name: string;
  nameKn: string;
  area: string;
  ward: string;
  zone: string;
  workType: string;
  status: StatusKey;
  sanctionedCr: number;
  spentCr: number;
  contractor: string;
  workOrder: string;
  officer: Officer;
  lengthKm: number;
  funding: string;
  sanctionedDate: string;
  startDate: string | null;
  promisedDate: string;
  actualDate: string | null;
  progress: number;
  lastUpdated: string;
  dlpMonths: number;
  dlpEnd: string | null;
  lat: number;
  lng: number;
}

export interface Portfolio {
  trackedCr: number;
  totalProjects: number;
  roadKm: number;
  dist: { key: StatusKey; pct: number }[];
  lastUpdated: string;
}

export const PORTFOLIO: Portfolio = {
  trackedCr: 5500,
  totalProjects: 1932,
  roadKm: 1140,
  // portfolio-wide status distribution (%), sums to 100
  dist: [
    { key: "completed", pct: 41 },
    { key: "inProgress", pct: 22 },
    { key: "delayed", pct: 18 },
    { key: "notStarted", pct: 9 },
    { key: "dlp", pct: 7 },
    { key: "stalled", pct: 3 },
  ],
  lastUpdated: "2026-06-23",
};

// Geographic bounds used to place pins on the schematic map.
export const BOUNDS = { latMin: 12.83, latMax: 13.13, lngMin: 77.45, lngMax: 77.78 };

// Map default centre / zoom for Leaflet (Bengaluru).
export const MAP_CENTER: [number, number] = [12.965, 77.6];
export const MAP_ZOOM = 11;

export const PROJECTS: Project[] = [
  { id: "BLR-0142", name: "Outer Ring Road (Marathahalli–Sarjapur)", nameKn: "ಹೊರವರ್ತುಲ ರಸ್ತೆ (ಮಾರತಹಳ್ಳಿ–ಸರ್ಜಾಪುರ)", area: "Marathahalli", ward: "Ward 84", zone: "Mahadevapura", workType: "Whitetopping", status: "delayed", sanctionedCr: 238.5, spentCr: 171.2, contractor: "Contractor A", workOrder: "BBMP/RW/2023/0142", officer: { name: "Officer A", designation: "Executive Engineer, Roads" }, lengthKm: 7.4, funding: "Nagarothana Phase IV", sanctionedDate: "2022-11-18", startDate: "2023-03-02", promisedDate: "2025-09-30", actualDate: null, progress: 72, lastUpdated: "2026-06-12", dlpMonths: 36, dlpEnd: null, lat: 12.956, lng: 77.701 },
  { id: "BLR-0098", name: "100 Feet Road, Indiranagar", nameKn: "100 ಅಡಿ ರಸ್ತೆ, ಇಂದಿರಾನಗರ", area: "Indiranagar", ward: "Ward 80", zone: "East", workType: "Resurfacing", status: "completed", sanctionedCr: 9.6, spentCr: 9.1, contractor: "Contractor B", workOrder: "BBMP/RW/2024/0098", officer: { name: "Officer B", designation: "Asst. Executive Engineer" }, lengthKm: 2.1, funding: "BBMP Capital Works", sanctionedDate: "2024-01-10", startDate: "2024-02-20", promisedDate: "2024-06-30", actualDate: "2024-06-21", progress: 100, lastUpdated: "2024-07-01", dlpMonths: 24, dlpEnd: "2026-06-21", lat: 12.971, lng: 77.64 },
  { id: "BLR-0211", name: "Sarjapur Main Road", nameKn: "ಸರ್ಜಾಪುರ ಮುಖ್ಯ ರಸ್ತೆ", area: "Bellandur", ward: "Ward 150", zone: "Bommanahalli", workType: "Asphalting", status: "inProgress", sanctionedCr: 22.4, spentCr: 12.8, contractor: "Contractor C", workOrder: "BBMP/RW/2025/0211", officer: { name: "Officer C", designation: "Executive Engineer, Roads" }, lengthKm: 4.8, funding: "BBMP Capital Works", sanctionedDate: "2024-09-05", startDate: "2025-01-15", promisedDate: "2026-08-31", actualDate: null, progress: 57, lastUpdated: "2026-06-18", dlpMonths: 24, dlpEnd: null, lat: 12.925, lng: 77.681 },
  { id: "BLR-0176", name: "Bannerghatta Road (Dairy Circle–Hulimavu)", nameKn: "ಬನ್ನೇರುಘಟ್ಟ ರಸ್ತೆ", area: "Hulimavu", ward: "Ward 191", zone: "Bommanahalli", workType: "Whitetopping", status: "delayed", sanctionedCr: 96.3, spentCr: 64.0, contractor: "Contractor D", workOrder: "BBMP/RW/2023/0176", officer: { name: "Officer D", designation: "Superintending Engineer" }, lengthKm: 5.2, funding: "Nagarothana Phase IV", sanctionedDate: "2022-08-22", startDate: "2023-02-11", promisedDate: "2025-03-31", actualDate: null, progress: 66, lastUpdated: "2026-05-30", dlpMonths: 36, dlpEnd: null, lat: 12.889, lng: 77.601 },
  { id: "BLR-0233", name: "Old Madras Road (KR Puram)", nameKn: "ಹಳೆ ಮದ್ರಾಸ್ ರಸ್ತೆ", area: "KR Puram", ward: "Ward 57", zone: "Mahadevapura", workType: "Stormwater drain", status: "inProgress", sanctionedCr: 41.7, spentCr: 19.5, contractor: "Contractor E", workOrder: "BBMP/SWD/2025/0233", officer: { name: "Officer E", designation: "Executive Engineer, SWD" }, lengthKm: 3.6, funding: "World Bank assisted", sanctionedDate: "2024-10-30", startDate: "2025-02-04", promisedDate: "2026-12-31", actualDate: null, progress: 38, lastUpdated: "2026-06-20", dlpMonths: 24, dlpEnd: null, lat: 13.0, lng: 77.7 },
  { id: "BLR-0061", name: "80 Feet Road, Koramangala", nameKn: "80 ಅಡಿ ರಸ್ತೆ, ಕೋರಮಂಗಲ", area: "Koramangala", ward: "Ward 151", zone: "Bommanahalli", workType: "Resurfacing", status: "dlp", sanctionedCr: 8.2, spentCr: 8.0, contractor: "Contractor F", workOrder: "BBMP/RW/2023/0061", officer: { name: "Officer F", designation: "Asst. Executive Engineer" }, lengthKm: 1.9, funding: "BBMP Capital Works", sanctionedDate: "2023-05-12", startDate: "2023-07-01", promisedDate: "2023-11-30", actualDate: "2023-11-18", progress: 100, lastUpdated: "2023-12-05", dlpMonths: 36, dlpEnd: "2026-11-18", lat: 12.935, lng: 77.624 },
  { id: "BLR-0188", name: "Ballari Road (Hebbal Flyover Approach)", nameKn: "ಬಳ್ಳಾರಿ ರಸ್ತೆ", area: "Hebbal", ward: "Ward 21", zone: "East", workType: "Junction improvement", status: "inProgress", sanctionedCr: 34.9, spentCr: 21.3, contractor: "Contractor H", workOrder: "BBMP/RW/2025/0188", officer: { name: "Officer G", designation: "Executive Engineer, Roads" }, lengthKm: 1.4, funding: "Nagarothana Phase IV", sanctionedDate: "2024-07-19", startDate: "2024-12-09", promisedDate: "2026-07-31", actualDate: null, progress: 61, lastUpdated: "2026-06-15", dlpMonths: 24, dlpEnd: null, lat: 13.035, lng: 77.591 },
  { id: "BLR-0119", name: "Hosur Road Service Road (Electronic City)", nameKn: "ಹೊಸೂರು ರಸ್ತೆ ಸೇವಾ ರಸ್ತೆ", area: "Electronic City", ward: "Ward 198", zone: "Bommanahalli", workType: "Asphalting", status: "delayed", sanctionedCr: 18.7, spentCr: 11.0, contractor: "Contractor G", workOrder: "BBMP/RW/2023/0119", officer: { name: "Officer A", designation: "Executive Engineer, Roads" }, lengthKm: 3.3, funding: "BBMP Capital Works", sanctionedDate: "2023-03-28", startDate: "2023-08-14", promisedDate: "2024-12-31", actualDate: null, progress: 54, lastUpdated: "2026-04-22", dlpMonths: 24, dlpEnd: null, lat: 12.845, lng: 77.66 },
  { id: "BLR-0102", name: "CMH Road, Indiranagar", nameKn: "ಸಿಎಂಎಚ್ ರಸ್ತೆ, ಇಂದಿರಾನಗರ", area: "Indiranagar", ward: "Ward 80", zone: "East", workType: "Footpath", status: "completed", sanctionedCr: 4.3, spentCr: 4.1, contractor: "Contractor B", workOrder: "BBMP/RW/2024/0102", officer: { name: "Officer B", designation: "Asst. Executive Engineer" }, lengthKm: 1.6, funding: "BBMP Capital Works", sanctionedDate: "2024-02-15", startDate: "2024-03-25", promisedDate: "2024-08-31", actualDate: "2024-08-12", progress: 100, lastUpdated: "2024-09-02", dlpMonths: 24, dlpEnd: "2026-08-12", lat: 12.978, lng: 77.64 },
  { id: "BLR-0070", name: "Magadi Road (Rajajinagar)", nameKn: "ಮಾಗಡಿ ರಸ್ತೆ", area: "Rajajinagar", ward: "Ward 99", zone: "West", workType: "Whitetopping", status: "notStarted", sanctionedCr: 61.0, spentCr: 0, contractor: "Contractor A", workOrder: "BBMP/RW/2025/0070", officer: { name: "Officer H", designation: "Executive Engineer, Roads" }, lengthKm: 4.0, funding: "Nagarothana Phase IV", sanctionedDate: "2025-12-01", startDate: null, promisedDate: "2027-06-30", actualDate: null, progress: 0, lastUpdated: "2026-01-08", dlpMonths: 36, dlpEnd: null, lat: 12.991, lng: 77.552 },
  { id: "BLR-0044", name: "Bellandur–Kadubeesanahalli Drain", nameKn: "ಬೆಳ್ಳಂದೂರು–ಕಾಡುಬೀಸನಹಳ್ಳಿ ಚರಂಡಿ", area: "Bellandur", ward: "Ward 150", zone: "Bommanahalli", workType: "Stormwater drain", status: "stalled", sanctionedCr: 52.8, spentCr: 14.6, contractor: "Contractor D", workOrder: "BBMP/SWD/2022/0044", officer: { name: "Officer E", designation: "Executive Engineer, SWD" }, lengthKm: 2.9, funding: "World Bank assisted", sanctionedDate: "2021-12-09", startDate: "2022-06-20", promisedDate: "2024-03-31", actualDate: null, progress: 28, lastUpdated: "2025-02-14", dlpMonths: 24, dlpEnd: null, lat: 12.926, lng: 77.676 },
  { id: "BLR-0157", name: "JP Nagar 24th Main", nameKn: "ಜೆಪಿ ನಗರ 24ನೇ ಮುಖ್ಯ", area: "JP Nagar", ward: "Ward 178", zone: "South", workType: "Resurfacing", status: "completed", sanctionedCr: 6.9, spentCr: 6.6, contractor: "Contractor F", workOrder: "BBMP/RW/2024/0157", officer: { name: "Officer F", designation: "Asst. Executive Engineer" }, lengthKm: 1.7, funding: "BBMP Capital Works", sanctionedDate: "2024-04-02", startDate: "2024-05-18", promisedDate: "2024-09-30", actualDate: "2024-10-09", progress: 100, lastUpdated: "2024-10-20", dlpMonths: 24, dlpEnd: "2026-10-09", lat: 12.908, lng: 77.585 },
  { id: "BLR-0203", name: "Whitefield Main Road (ITPL)", nameKn: "ವೈಟ್‌ಫೀಲ್ಡ್ ಮುಖ್ಯ ರಸ್ತೆ", area: "Whitefield", ward: "Ward 84", zone: "Mahadevapura", workType: "Whitetopping", status: "delayed", sanctionedCr: 142.6, spentCr: 88.4, contractor: "Contractor A", workOrder: "BBMP/RW/2023/0203", officer: { name: "Officer C", designation: "Executive Engineer, Roads" }, lengthKm: 6.1, funding: "Nagarothana Phase IV", sanctionedDate: "2022-10-04", startDate: "2023-04-22", promisedDate: "2025-06-30", actualDate: null, progress: 63, lastUpdated: "2026-06-01", dlpMonths: 36, dlpEnd: null, lat: 12.969, lng: 77.749 },
  { id: "BLR-0129", name: "Kanakapura Road (Banashankari)", nameKn: "ಕನಕಪುರ ರಸ್ತೆ", area: "Banashankari", ward: "Ward 172", zone: "South", workType: "Asphalting", status: "inProgress", sanctionedCr: 24.1, spentCr: 15.7, contractor: "Contractor C", workOrder: "BBMP/RW/2025/0129", officer: { name: "Officer H", designation: "Executive Engineer, Roads" }, lengthKm: 5.0, funding: "BBMP Capital Works", sanctionedDate: "2024-08-11", startDate: "2024-11-28", promisedDate: "2026-09-30", actualDate: null, progress: 69, lastUpdated: "2026-06-19", dlpMonths: 24, dlpEnd: null, lat: 12.925, lng: 77.546 },
  { id: "BLR-0085", name: "Jayanagar 4th Block", nameKn: "ಜಯನಗರ 4ನೇ ಬ್ಲಾಕ್", area: "Jayanagar", ward: "Ward 169", zone: "South", workType: "Footpath", status: "completed", sanctionedCr: 5.2, spentCr: 5.0, contractor: "Contractor B", workOrder: "BBMP/RW/2024/0085", officer: { name: "Officer B", designation: "Asst. Executive Engineer" }, lengthKm: 2.3, funding: "BBMP Capital Works", sanctionedDate: "2024-01-22", startDate: "2024-03-04", promisedDate: "2024-07-31", actualDate: "2024-07-26", progress: 100, lastUpdated: "2024-08-10", dlpMonths: 24, dlpEnd: "2026-07-26", lat: 12.93, lng: 77.583 },
  { id: "BLR-0167", name: "Hennur Main Road", nameKn: "ಹೆಣ್ಣೂರು ಮುಖ್ಯ ರಸ್ತೆ", area: "Hennur", ward: "Ward 24", zone: "East", workType: "Resurfacing", status: "dlp", sanctionedCr: 11.4, spentCr: 11.1, contractor: "Contractor G", workOrder: "BBMP/RW/2023/0167", officer: { name: "Officer G", designation: "Executive Engineer, Roads" }, lengthKm: 3.1, funding: "BBMP Capital Works", sanctionedDate: "2023-06-15", startDate: "2023-08-20", promisedDate: "2024-02-28", actualDate: "2024-03-14", progress: 100, lastUpdated: "2024-03-25", dlpMonths: 36, dlpEnd: "2027-03-14", lat: 13.04, lng: 77.64 },
  { id: "BLR-0052", name: "Mysuru Road (RR Nagar)", nameKn: "ಮೈಸೂರು ರಸ್ತೆ", area: "RR Nagar", ward: "Ward 160", zone: "RR Nagar", workType: "Junction improvement", status: "notStarted", sanctionedCr: 29.5, spentCr: 0, contractor: "Contractor H", workOrder: "BBMP/RW/2026/0052", officer: { name: "Officer D", designation: "Superintending Engineer" }, lengthKm: 1.2, funding: "Nagarothana Phase IV", sanctionedDate: "2026-02-20", startDate: null, promisedDate: "2027-08-31", actualDate: null, progress: 0, lastUpdated: "2026-03-02", dlpMonths: 24, dlpEnd: null, lat: 12.945, lng: 77.52 },
  { id: "BLR-0093", name: "BTM Layout 16th Main", nameKn: "ಬಿಟಿಎಂ ಬಡಾವಣೆ 16ನೇ ಮುಖ್ಯ", area: "BTM Layout", ward: "Ward 176", zone: "South", workType: "Asphalting", status: "completed", sanctionedCr: 7.8, spentCr: 7.5, contractor: "Contractor F", workOrder: "BBMP/RW/2024/0093", officer: { name: "Officer F", designation: "Asst. Executive Engineer" }, lengthKm: 2.0, funding: "BBMP Capital Works", sanctionedDate: "2024-03-11", startDate: "2024-04-29", promisedDate: "2024-08-31", actualDate: "2024-08-25", progress: 100, lastUpdated: "2024-09-05", dlpMonths: 24, dlpEnd: "2026-08-25", lat: 12.916, lng: 77.61 },
  { id: "BLR-0221", name: "Tumkur Road (Yeshwanthpur)", nameKn: "ತುಮಕೂರು ರಸ್ತೆ", area: "Yeshwanthpur", ward: "Ward 45", zone: "West", workType: "Whitetopping", status: "inProgress", sanctionedCr: 118.9, spentCr: 47.6, contractor: "Contractor A", workOrder: "BBMP/RW/2025/0221", officer: { name: "Officer H", designation: "Executive Engineer, Roads" }, lengthKm: 6.8, funding: "Nagarothana Phase IV", sanctionedDate: "2024-11-26", startDate: "2025-03-30", promisedDate: "2027-03-31", actualDate: null, progress: 41, lastUpdated: "2026-06-21", dlpMonths: 36, dlpEnd: null, lat: 13.028, lng: 77.54 },
  { id: "BLR-0038", name: "Hebbal–Nagawara Valley Drain", nameKn: "ಹೆಬ್ಬಾಳ–ನಾಗವಾರ ಕಣಿವೆ ಚರಂಡಿ", area: "Nagawara", ward: "Ward 23", zone: "East", workType: "Stormwater drain", status: "stalled", sanctionedCr: 73.2, spentCr: 22.9, contractor: "Contractor E", workOrder: "BBMP/SWD/2022/0038", officer: { name: "Officer E", designation: "Executive Engineer, SWD" }, lengthKm: 4.4, funding: "World Bank assisted", sanctionedDate: "2021-09-30", startDate: "2022-04-12", promisedDate: "2024-06-30", actualDate: null, progress: 31, lastUpdated: "2025-05-19", dlpMonths: 24, dlpEnd: null, lat: 13.045, lng: 77.62 },
  { id: "BLR-0148", name: "Malleshwaram 8th Cross", nameKn: "ಮಲ್ಲೇಶ್ವರಂ 8ನೇ ಅಡ್ಡರಸ್ತೆ", area: "Malleshwaram", ward: "Ward 95", zone: "West", workType: "Resurfacing", status: "completed", sanctionedCr: 5.6, spentCr: 5.4, contractor: "Contractor B", workOrder: "BBMP/RW/2024/0148", officer: { name: "Officer G", designation: "Executive Engineer, Roads" }, lengthKm: 1.3, funding: "BBMP Capital Works", sanctionedDate: "2024-05-06", startDate: "2024-06-17", promisedDate: "2024-10-31", actualDate: "2024-10-22", progress: 100, lastUpdated: "2024-11-02", dlpMonths: 24, dlpEnd: "2026-10-22", lat: 13.003, lng: 77.57 },
  { id: "BLR-0195", name: "Varthur Main Road", nameKn: "ವರ್ತೂರು ಮುಖ್ಯ ರಸ್ತೆ", area: "Varthur", ward: "Ward 84", zone: "Mahadevapura", workType: "Asphalting", status: "delayed", sanctionedCr: 19.9, spentCr: 12.2, contractor: "Contractor C", workOrder: "BBMP/RW/2023/0195", officer: { name: "Officer C", designation: "Executive Engineer, Roads" }, lengthKm: 3.7, funding: "BBMP Capital Works", sanctionedDate: "2023-02-14", startDate: "2023-07-09", promisedDate: "2024-10-31", actualDate: null, progress: 58, lastUpdated: "2026-05-11", dlpMonths: 24, dlpEnd: null, lat: 12.94, lng: 77.74 },
  { id: "BLR-0066", name: "Yelahanka New Town Arterial", nameKn: "ಯಲಹಂಕ ನ್ಯೂ ಟೌನ್ ಧಮನಿ ರಸ್ತೆ", area: "Yelahanka", ward: "Ward 6", zone: "Yelahanka", workType: "Whitetopping", status: "notStarted", sanctionedCr: 54.3, spentCr: 0, contractor: "Contractor D", workOrder: "BBMP/RW/2026/0066", officer: { name: "Officer A", designation: "Executive Engineer, Roads" }, lengthKm: 3.8, funding: "Nagarothana Phase IV", sanctionedDate: "2026-01-15", startDate: null, promisedDate: "2027-09-30", actualDate: null, progress: 0, lastUpdated: "2026-02-01", dlpMonths: 36, dlpEnd: null, lat: 13.1, lng: 77.596 },
  { id: "BLR-0114", name: "HSR Layout 27th Main", nameKn: "ಎಚ್‌ಎಸ್‌ಆರ್ ಬಡಾವಣೆ 27ನೇ ಮುಖ್ಯ", area: "HSR Layout", ward: "Ward 174", zone: "Bommanahalli", workType: "Footpath", status: "dlp", sanctionedCr: 3.9, spentCr: 3.7, contractor: "Contractor F", workOrder: "BBMP/RW/2023/0114", officer: { name: "Officer F", designation: "Asst. Executive Engineer" }, lengthKm: 1.5, funding: "BBMP Capital Works", sanctionedDate: "2023-07-20", startDate: "2023-09-11", promisedDate: "2024-01-31", actualDate: "2024-01-22", progress: 100, lastUpdated: "2024-02-05", dlpMonths: 36, dlpEnd: "2027-01-22", lat: 12.911, lng: 77.647 },
];

// Status meta: icon path (24x24, stroke), and palette. Labels live in STRINGS.
export const STATUS_META: Record<StatusKey, { color: string; bg: string; icon: string }> = {
  notStarted: { color: "#5B6573", bg: "#EEF1F5", icon: "M12 4.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" },
  inProgress: { color: "#2D6FD6", bg: "#E7F0FC", icon: "M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" },
  delayed: { color: "#C77A12", bg: "#FBF0DC", icon: "M12 7.5V12l3 1.8M12 4.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" },
  completed: { color: "#1F8A52", bg: "#E2F3E8", icon: "M5 12.5l4.2 4.2L19 7" },
  dlp: { color: "#0E8587", bg: "#DDF2F2", icon: "M14.6 6.4a3.8 3.8 0 01-5 5L5 16v3h3l4.6-4.6a3.8 3.8 0 015-5l-2.4 2.4-2-2 2.4-2.4z" },
  stalled: { color: "#C0392B", bg: "#FBE4E1", icon: "M12 9v4.5M12 17h.01M10.3 4.4L2.7 18a2 2 0 001.7 3h15.2a2 2 0 001.7-3L13.7 4.4a2 2 0 00-3.4 0z" },
};

export const STATUS_ORDER: StatusKey[] = [
  "notStarted",
  "inProgress",
  "delayed",
  "completed",
  "dlp",
  "stalled",
];
