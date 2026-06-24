import { Project, StatusKey, STATUS_META, BOUNDS, Lang } from "./data";
import { STRINGS, StringSet } from "./strings";

// "Today" is fixed to keep the demo deterministic (matches the seed data window).
export const TODAY = new Date(2026, 5, 25);

export function fmtCr(cr: number): string {
  const n = Number(cr);
  const s = (Math.round(n * 10) / 10).toLocaleString("en-IN", {
    maximumFractionDigits: 1,
  });
  return "₹" + s + " cr";
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function fmtDate(iso: string | null): string {
  if (!iso) return "—";
  const d = new Date(iso);
  return d.getDate() + " " + MONTHS[d.getMonth()] + " " + d.getFullYear();
}

export function overdueDays(p: Project): number {
  if (p.status === "notStarted" || p.actualDate) return 0;
  const d = Math.floor((TODAY.getTime() - new Date(p.promisedDate).getTime()) / 86400000);
  return d > 0 ? d : 0;
}

export interface ViewModel {
  id: string;
  raw: Project;
  name: string;
  area: string;
  ward: string;
  zone: string;
  wardZone: string;
  metaLine: string;
  workType: string;
  statusKey: StatusKey;
  statusLabel: string;
  statusColor: string;
  statusBg: string;
  statusIcon: string;
  costStr: string;
  spentStr: string;
  sanctionedCr: number;
  spentPct: number;
  spentPctStr: string;
  contractor: string;
  workOrder: string;
  officerName: string;
  officerDesig: string;
  lengthStr: string;
  funding: string;
  progress: number;
  progressStr: string;
  sanctionedStr: string;
  startedStr: string;
  promisedStr: string;
  actualStr: string;
  lastUpdatedStr: string;
  isOverdue: boolean;
  overdueDays: number;
  flag: string;
  dlpEnd: string | null;
  dlpEndStr: string;
  dlpActive: boolean;
  dlpMonths: number;
  maintenanceStr: string;
  lat: number;
  lng: number;
  title: string;
}

export function buildVM(p: Project, lang: Lang): ViewModel {
  const L = STRINGS[lang];
  const sm = STATUS_META[p.status];
  const od = overdueDays(p);
  const dlpActive = !!p.dlpEnd && new Date(p.dlpEnd) > TODAY;
  let flag = "";
  if (p.status === "delayed" || p.status === "stalled") {
    flag = od.toLocaleString("en-IN") + " " + L.overdue;
  }
  const statusLabel = L[("s_" + p.status) as keyof StringSet] as string;
  return {
    id: p.id,
    raw: p,
    name: lang === "kn" && p.nameKn ? p.nameKn : p.name,
    area: p.area,
    ward: p.ward,
    zone: p.zone,
    wardZone: p.ward + " · " + p.zone,
    metaLine: p.area + " · " + p.zone,
    workType: p.workType,
    statusKey: p.status,
    statusLabel,
    statusColor: sm.color,
    statusBg: sm.bg,
    statusIcon: sm.icon,
    costStr: fmtCr(p.sanctionedCr),
    spentStr: fmtCr(p.spentCr),
    sanctionedCr: p.sanctionedCr,
    spentPct: Math.round((p.spentCr / p.sanctionedCr) * 100) || 0,
    spentPctStr: (Math.round((p.spentCr / p.sanctionedCr) * 100) || 0) + "%",
    contractor: p.contractor,
    workOrder: p.workOrder,
    officerName: p.officer.name,
    officerDesig: p.officer.designation,
    lengthStr: p.lengthKm.toFixed(1) + " km",
    funding: p.funding,
    progress: p.progress,
    progressStr: p.progress + "%",
    sanctionedStr: fmtDate(p.sanctionedDate),
    startedStr: fmtDate(p.startDate),
    promisedStr: fmtDate(p.promisedDate),
    actualStr: fmtDate(p.actualDate),
    lastUpdatedStr: fmtDate(p.lastUpdated),
    isOverdue: od > 0,
    overdueDays: od,
    flag,
    dlpEnd: p.dlpEnd,
    dlpEndStr: fmtDate(p.dlpEnd),
    dlpActive,
    dlpMonths: p.dlpMonths,
    maintenanceStr: p.dlpMonths + " " + L.months,
    lat: p.lat,
    lng: p.lng,
    title: p.name + " — " + statusLabel,
  };
}

export interface Filters {
  status: StatusKey | "all";
  zone: string;
  workType: string;
  overdueOnly: boolean;
}

export type SortKey = "cost" | "delay" | "recent" | "progress";

export function filterProjects(
  projects: Project[],
  filters: Filters,
  q: string
): Project[] {
  const query = q.trim().toLowerCase();
  return projects.filter((p) => {
    if (filters.status !== "all" && p.status !== filters.status) return false;
    if (filters.zone !== "all" && p.zone !== filters.zone) return false;
    if (filters.workType !== "all" && p.workType !== filters.workType) return false;
    if (filters.overdueOnly && overdueDays(p) <= 0) return false;
    if (query) {
      const hay = (
        p.name + " " + p.area + " " + p.ward + " " + p.zone + " " + p.contractor + " " + p.id
      ).toLowerCase();
      if (!hay.includes(query)) return false;
    }
    return true;
  });
}

export function sortProjects(list: Project[], sort: SortKey): Project[] {
  const c = [...list];
  if (sort === "cost") c.sort((a, b) => b.sanctionedCr - a.sanctionedCr);
  else if (sort === "delay") c.sort((a, b) => overdueDays(b) - overdueDays(a));
  else if (sort === "recent")
    c.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime());
  else if (sort === "progress") c.sort((a, b) => b.progress - a.progress);
  return c;
}
