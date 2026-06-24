"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useLang } from "@/lib/i18n";
import { PROJECTS, STATUS_META, STATUS_ORDER, StatusKey } from "@/lib/data";
import {
  buildVM,
  filterProjects,
  sortProjects,
  Filters,
  SortKey,
} from "@/lib/helpers";
import ProjectCard from "@/components/ProjectCard";

function ProjectsContent() {
  const { lang, L } = useLang();
  const params = useSearchParams();

  const initialStatus = (params.get("status") as StatusKey | null) ?? "all";
  const initialQ = params.get("q") ?? "";

  const [q, setQ] = useState(initialQ);
  const [filters, setFilters] = useState<Filters>({
    status: STATUS_ORDER.includes(initialStatus as StatusKey)
      ? (initialStatus as StatusKey)
      : "all",
    zone: "all",
    workType: "all",
    overdueOnly: false,
  });
  const [sort, setSort] = useState<SortKey>("cost");

  const zones = useMemo(
    () => ["all", ...Array.from(new Set(PROJECTS.map((p) => p.zone)))],
    []
  );
  const types = useMemo(
    () => ["all", ...Array.from(new Set(PROJECTS.map((p) => p.workType)))],
    []
  );

  const filtered = useMemo(
    () => filterProjects(PROJECTS, filters, q),
    [filters, q]
  );
  const vms = useMemo(
    () => sortProjects(filtered, sort).map((p) => buildVM(p, lang)),
    [filtered, sort, lang]
  );

  const statusKeys: (StatusKey | "all")[] = ["all", ...STATUS_ORDER];
  const hasFilters =
    filters.status !== "all" ||
    filters.zone !== "all" ||
    filters.workType !== "all" ||
    filters.overdueOnly ||
    q !== "";

  const clearFilters = () => {
    setFilters({ status: "all", zone: "all", workType: "all", overdueOnly: false });
    setQ("");
  };

  const setFilter = <K extends keyof Filters>(key: K, val: Filters[K]) =>
    setFilters((f) => ({ ...f, [key]: val }));

  const sortOpts: [SortKey, string][] = [
    ["cost", L.sortCost],
    ["delay", L.sortDelay],
    ["recent", L.sortRecent],
    ["progress", L.sortProgress],
  ];

  return (
    <div
      style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "32px 28px 64px",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "264px minmax(0,1fr)",
          gap: 28,
          alignItems: "start",
        }}
        className="rw-projects-layout"
      >
        {/* SIDEBAR */}
        <aside
          style={{
            position: "sticky",
            top: 88,
            background: "#fff",
            border: "1px solid #E2E7ED",
            borderRadius: 14,
            padding: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 16,
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: ".02em",
                textTransform: "uppercase",
                color: "#4A5460",
              }}
            >
              {L.filters}
            </h2>
            {hasFilters && (
              <button
                onClick={clearFilters}
                style={{ fontSize: 12.5, fontWeight: 600, color: "#1B4F8A" }}
              >
                {L.clear}
              </button>
            )}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "#F4F6F9",
              border: "1px solid #E2E7ED",
              borderRadius: 9,
              padding: "0 12px",
              height: 42,
              marginBottom: 20,
            }}
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#79838F"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.2-3.2" />
            </svg>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={L.findRoad}
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                background: "none",
                fontSize: 14,
                color: "#14181E",
              }}
            />
          </div>

          <SidebarLabel>{L.status}</SidebarLabel>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              marginBottom: 22,
            }}
          >
            {statusKeys.map((k) => {
              const active = filters.status === k;
              const color = k === "all" ? "#5B6573" : STATUS_META[k].color;
              const label =
                k === "all"
                  ? L.allStatuses
                  : (L[("s_" + k) as keyof typeof L] as string);
              return (
                <button
                  key={k}
                  onClick={() => setFilter("status", k)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 9,
                    padding: "8px 11px",
                    borderRadius: 9,
                    fontSize: 13.5,
                    fontWeight: active ? 700 : 500,
                    border: `1px solid ${active ? "#1B4F8A" : "#E2E7ED"}`,
                    background: active ? "#EaF1F9" : "#fff",
                    color: active ? "#143A66" : "#4A5460",
                  }}
                >
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 3,
                      background: color,
                    }}
                  />
                  <span style={{ flex: 1, textAlign: "left" }}>{label}</span>
                </button>
              );
            })}
          </div>

          <SidebarLabel>{L.zone}</SidebarLabel>
          <select
            value={filters.zone}
            onChange={(e) => setFilter("zone", e.target.value)}
            style={selectStyle}
          >
            {zones.map((z) => (
              <option key={z} value={z}>
                {z === "all" ? L.allZones : z}
              </option>
            ))}
          </select>

          <div style={{ height: 16 }} />

          <SidebarLabel>{L.workType}</SidebarLabel>
          <select
            value={filters.workType}
            onChange={(e) => setFilter("workType", e.target.value)}
            style={selectStyle}
          >
            {types.map((t) => (
              <option key={t} value={t}>
                {t === "all" ? L.allTypes : t}
              </option>
            ))}
          </select>

          <div style={{ height: 20 }} />

          <button
            onClick={() => setFilter("overdueOnly", !filters.overdueOnly)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              padding: "9px 13px",
              borderRadius: 9,
              width: "100%",
              border: `1px solid ${filters.overdueOnly ? "#C77A12" : "#E2E7ED"}`,
              background: filters.overdueOnly ? "#FBF0DC" : "#fff",
              fontSize: 13.5,
              fontWeight: 600,
              color: filters.overdueOnly ? "#9a5e0d" : "#4A5460",
            }}
          >
            <span
              style={{
                width: 34,
                height: 20,
                borderRadius: 11,
                position: "relative",
                transition: "background .15s",
                background: filters.overdueOnly ? "#C77A12" : "#cdd5de",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: 2,
                  left: filters.overdueOnly ? 16 : 2,
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  background: "#fff",
                  transition: "left .15s",
                }}
              />
            </span>
            <span>{L.overdueOnly}</span>
          </button>
        </aside>

        {/* RESULTS */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
              marginBottom: 18,
            }}
          >
            <h1
              className="rw-serif"
              style={{
                margin: 0,
                fontSize: 26,
                fontWeight: 600,
                letterSpacing: "-.01em",
              }}
            >
              {L.navProjects}{" "}
              <span
                className="rw-num"
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#79838F",
                  fontFamily: "var(--font-sans), sans-serif",
                }}
              >
                · {filtered.length} {L.results}
              </span>
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <span style={{ fontSize: 13, color: "#79838F" }}>{L.sortBy}</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                style={{
                  height: 40,
                  border: "1px solid #E2E7ED",
                  borderRadius: 9,
                  padding: "0 12px",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#14181E",
                  background: "#fff",
                }}
              >
                {sortOpts.map(([v, l]) => (
                  <option key={v} value={v}>
                    {l}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {vms.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,minmax(0,1fr))",
                gap: 16,
              }}
              className="rw-cards-2"
            >
              {vms.map((vm) => (
                <ProjectCard key={vm.id} vm={vm} />
              ))}
            </div>
          ) : (
            <div
              style={{
                background: "#fff",
                border: "1px dashed #cdd5de",
                borderRadius: 14,
                padding: "60px 20px",
                textAlign: "center",
                color: "#79838F",
              }}
            >
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#4A5460",
                  marginBottom: 6,
                }}
              >
                {L.noResults}
              </div>
              <button
                onClick={clearFilters}
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#1B4F8A",
                  marginTop: 6,
                }}
              >
                {L.clear}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SidebarLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: ".06em",
        textTransform: "uppercase",
        color: "#9aa4b0",
        marginBottom: 10,
      }}
    >
      {children}
    </div>
  );
}

const selectStyle: React.CSSProperties = {
  width: "100%",
  height: 40,
  border: "1px solid #E2E7ED",
  borderRadius: 9,
  padding: "0 10px",
  fontSize: 14,
  color: "#14181E",
  background: "#fff",
};

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div style={{ padding: 40 }} />}>
      <ProjectsContent />
    </Suspense>
  );
}
