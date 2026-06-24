"use client";

import { useMemo, useState } from "react";
import { useLang } from "@/lib/i18n";
import { PROJECTS, PORTFOLIO, STATUS_META, STATUS_ORDER, StatusKey } from "@/lib/data";
import { buildVM, filterProjects, sortProjects, Filters } from "@/lib/helpers";
import RoadMapDynamic from "@/components/RoadMapDynamic";

export default function MapPage() {
  const { lang, L } = useLang();
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<StatusKey | "all">("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filters: Filters = {
    status,
    zone: "all",
    workType: "all",
    overdueOnly: false,
  };

  const vms = useMemo(() => {
    const filtered = filterProjects(PROJECTS, filters, q);
    return sortProjects(filtered, "cost").map((p) => buildVM(p, lang));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, q, lang]);

  const statusKeys: (StatusKey | "all")[] = ["all", ...STATUS_ORDER];

  return (
    <div style={{ display: "flex", height: "calc(100vh - 65px)" }} className="rw-map-page">
      {/* SIDEBAR */}
      <aside
        style={{
          width: 360,
          flexShrink: 0,
          borderRight: "1px solid #E2E7ED",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
        }}
        className="rw-map-aside"
      >
        <div style={{ padding: "18px 18px 14px", borderBottom: "1px solid #EEF1F5" }}>
          <h1
            className="rw-serif"
            style={{ margin: "0 0 12px", fontSize: 22, fontWeight: 600 }}
          >
            {L.mapPreviewTitle}
          </h1>
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
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
            {statusKeys.map((k) => {
              const active = status === k;
              const color = k === "all" ? "#5B6573" : STATUS_META[k].color;
              const label =
                k === "all"
                  ? L.allStatuses
                  : (L[("s_" + k) as keyof typeof L] as string);
              return (
                <button
                  key={k}
                  onClick={() => setStatus(k)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "5px 9px",
                    borderRadius: 100,
                    fontSize: 12,
                    fontWeight: 600,
                    border: `1px solid ${active ? "#1B4F8A" : "#E2E7ED"}`,
                    background: active ? "#EaF1F9" : "#fff",
                    color: active ? "#143A66" : "#4A5460",
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 2,
                      background: color,
                    }}
                  />
                  {label}
                </button>
              );
            })}
          </div>
        </div>
        <div
          style={{
            padding: "10px 14px",
            fontSize: 12.5,
            fontWeight: 600,
            color: "#79838F",
            borderBottom: "1px solid #EEF1F5",
          }}
        >
          {vms.length} {L.results}
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: 8 }}>
          {vms.map((p) => {
            const sel = selectedId === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedId(p.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 11,
                  width: "100%",
                  textAlign: "left",
                  padding: "11px 12px",
                  borderRadius: 10,
                  border: `1px solid ${sel ? "#cdd9e8" : "transparent"}`,
                  background: sel ? "#EaF1F9" : "transparent",
                }}
              >
                <span
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    background: p.statusColor,
                    flexShrink: 0,
                  }}
                />
                <span style={{ flex: 1, minWidth: 0 }}>
                  <span
                    style={{
                      display: "block",
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#14181E",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {p.name}
                  </span>
                  <span style={{ fontSize: 12, color: "#79838F" }}>
                    {p.metaLine}
                  </span>
                </span>
                <span
                  className="rw-num"
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#14181E",
                    whiteSpace: "nowrap",
                  }}
                >
                  {p.costStr}
                </span>
              </button>
            );
          })}
        </div>
      </aside>

      {/* MAP */}
      <div style={{ flex: 1, position: "relative", background: "#e9eef3" }}>
        <RoadMapDynamic
          projects={vms}
          selectedId={selectedId}
          onSelect={setSelectedId}
          height="100%"
          zoom={11}
          scrollWheelZoom
          showPopups
        />
        {/* Legend */}
        <div
          style={{
            position: "absolute",
            left: 24,
            top: 20,
            zIndex: 500,
            background: "rgba(255,255,255,.92)",
            border: "1px solid #E2E7ED",
            borderRadius: 10,
            padding: "11px 14px",
            backdropFilter: "blur(4px)",
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: ".06em",
              textTransform: "uppercase",
              color: "#9aa4b0",
              marginBottom: 8,
            }}
          >
            {L.status}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            {PORTFOLIO.dist.map((seg) => (
              <div
                key={seg.key}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 12.5,
                  color: "#4A5460",
                }}
              >
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: STATUS_META[seg.key].color,
                  }}
                />
                {L[("s_" + seg.key) as keyof typeof L] as string}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
