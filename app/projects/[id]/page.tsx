"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { PROJECTS } from "@/lib/data";
import { buildVM, fmtDate } from "@/lib/helpers";
import StatusBadge, { OverdueFlag } from "@/components/StatusBadge";
import RoadMapDynamic from "@/components/RoadMapDynamic";

export default function ProjectDetailPage() {
  const { lang, L } = useLang();
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const project = useMemo(() => PROJECTS.find((p) => p.id === id), [id]);
  const vm = useMemo(
    () => (project ? buildVM(project, lang) : null),
    [project, lang]
  );

  if (!project || !vm) {
    return (
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "60px 28px",
          textAlign: "center",
        }}
      >
        <h1 className="rw-serif" style={{ fontSize: 28 }}>
          404
        </h1>
        <p style={{ color: "#79838F" }}>This road work could not be found.</p>
        <Link href="/projects" style={{ color: "#1B4F8A", fontWeight: 600 }}>
          {L.backToProjects}
        </Link>
      </div>
    );
  }

  const hasActual = !!project.actualDate;
  const timeline = [
    { label: L.sanctioned, dateStr: vm.sanctionedStr, done: true, warn: false },
    {
      label: L.started,
      dateStr: vm.startedStr,
      done: !!project.startDate,
      warn: false,
    },
    {
      label: L.promised,
      dateStr: vm.promisedStr,
      done: hasActual,
      warn: vm.isOverdue && !hasActual,
    },
    { label: L.actual, dateStr: vm.actualStr, done: hasActual, warn: false },
  ];

  const dlpIsPending = !hasActual;
  const dlpIsActive = hasActual && vm.dlpActive;
  const dlpIsEnded = hasActual && !vm.dlpActive;

  const actions = [
    {
      label: L.reportIssue,
      icon: "M12 9v4M12 17h.01M10.3 4.4 2.7 18a2 2 0 0 0 1.7 3h15.2a2 2 0 0 0 1.7-3L13.7 4.4a2 2 0 0 0-3.4 0Z",
    },
    {
      label: L.share,
      icon: "M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7M16 6l-4-4-4 4M12 2v13",
    },
    { label: L.download, icon: "M12 3v12M7 10l5 5 5-5M5 21h14" },
  ];

  return (
    <div
      style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "24px 28px 64px",
        width: "100%",
      }}
    >
      <Link
        href="/projects"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 7,
          fontSize: 13.5,
          fontWeight: 600,
          color: "#1B4F8A",
          marginBottom: 18,
          textDecoration: "none",
        }}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1B4F8A"
          strokeWidth="2.3"
        >
          <path d="M19 12H5M11 18l-6-6 6-6" />
        </svg>
        {L.backToProjects}
      </Link>

      {/* HEADER CARD */}
      <div
        style={{
          background: "#fff",
          border: "1px solid #E2E7ED",
          borderRadius: 16,
          padding: "26px 28px",
          marginBottom: 22,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div style={{ minWidth: 0, flex: 1 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 12,
                flexWrap: "wrap",
              }}
            >
              <StatusBadge
                color={vm.statusColor}
                bg={vm.statusBg}
                icon={vm.statusIcon}
                label={vm.statusLabel}
              />
              <span
                className="rw-num"
                style={{ fontSize: 13, fontWeight: 600, color: "#9aa4b0" }}
              >
                {vm.id}
              </span>
              {vm.isOverdue && <OverdueFlag text={vm.flag} />}
            </div>
            <h1
              className="rw-serif"
              style={{
                margin: "0 0 10px",
                fontSize: 34,
                fontWeight: 700,
                letterSpacing: "-.015em",
                lineHeight: 1.1,
              }}
            >
              {vm.name}
            </h1>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "7px 22px",
                fontSize: 14,
                color: "#4A5460",
              }}
            >
              <span>{vm.wardZone}</span>
              <span style={{ color: "#cdd5de" }}>|</span>
              <span>{vm.workType}</span>
              <span style={{ color: "#cdd5de" }}>|</span>
              <span>{vm.lengthStr}</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 9, flexShrink: 0, flexWrap: "wrap" }}>
            {actions.map((a) => (
              <button
                key={a.label}
                title={a.label}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  height: 42,
                  padding: "0 16px",
                  borderRadius: 10,
                  fontSize: 13.5,
                  fontWeight: 600,
                  border: "1px solid #E2E7ED",
                  background: "#fff",
                  color: "#4A5460",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={a.icon} />
                </svg>
                {a.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0,1.7fr) minmax(0,1fr)",
          gap: 22,
          alignItems: "start",
        }}
        className="rw-detail-grid"
      >
        {/* LEFT */}
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          {/* COST */}
          <section style={cardStyle}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 22,
                marginBottom: 20,
              }}
            >
              <div>
                <div style={fieldLabelStyle}>{L.sanctionedCost}</div>
                <div
                  className="rw-num"
                  style={{
                    fontSize: 34,
                    fontWeight: 800,
                    letterSpacing: "-.02em",
                    color: "#14181E",
                  }}
                >
                  {vm.costStr}
                </div>
              </div>
              <div>
                <div style={fieldLabelStyle}>{L.spent}</div>
                <div
                  className="rw-num"
                  style={{
                    fontSize: 34,
                    fontWeight: 800,
                    letterSpacing: "-.02em",
                    color: "#1B4F8A",
                  }}
                >
                  {vm.spentStr}
                </div>
              </div>
            </div>
            <div
              style={{
                height: 10,
                borderRadius: 6,
                background: "#EEF1F5",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: vm.spentPctStr,
                  background: "linear-gradient(90deg,#1B4F8A,#2D6FD6)",
                  borderRadius: 6,
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 9,
                fontSize: 13,
                color: "#79838F",
              }}
            >
              <span>
                <span
                  className="rw-num"
                  style={{ fontWeight: 700, color: "#4A5460" }}
                >
                  {vm.spentPctStr}
                </span>{" "}
                {L.ofSanctioned}
              </span>
              <span>
                {L.funding}:{" "}
                <span style={{ fontWeight: 600, color: "#4A5460" }}>
                  {vm.funding}
                </span>
              </span>
            </div>
          </section>

          {/* TIMELINE */}
          <section style={cardStyle}>
            <h2 style={sectionHeadingStyle}>{L.timeline}</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 17,
                  right: 17,
                  top: 17,
                  height: 2,
                  background: "#E2E7ED",
                }}
              />
              {timeline.map((step, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 11,
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      zIndex: 1,
                      background: step.warn
                        ? "#FBF0DC"
                        : step.done
                        ? "#1B4F8A"
                        : "#fff",
                      border: `2px solid ${
                        step.warn ? "#C77A12" : step.done ? "#1B4F8A" : "#cdd5de"
                      }`,
                    }}
                  >
                    {step.done && (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2.6"
                      >
                        <path d="M5 12.5l4.2 4.2L19 7" />
                      </svg>
                    )}
                    {step.warn && (
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#C77A12"
                        strokeWidth="2.4"
                      >
                        <path d="M12 7.5V12l3 1.8" />
                        <circle cx="12" cy="12" r="8" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <div
                      style={{ fontSize: 13, fontWeight: 700, color: "#14181E" }}
                    >
                      {step.label}
                    </div>
                    <div
                      className="rw-num"
                      style={{ fontSize: 13, color: "#79838F", marginTop: 2 }}
                    >
                      {step.dateStr}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* MAINTENANCE / DLP */}
          <section style={cardStyle}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0E8587"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.6 6.4a3.8 3.8 0 0 1-5 5L5 16v3h3l4.6-4.6a3.8 3.8 0 0 1 5-5l-2.4 2.4-2-2 2.4-2.4Z" />
              </svg>
              <h2 style={{ ...sectionHeadingStyle, margin: 0 }}>{L.maintenance}</h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 18,
                marginBottom: 16,
              }}
            >
              <div>
                <div style={{ fontSize: 12.5, color: "#9aa4b0", marginBottom: 5 }}>
                  {L.maintenancePeriod}
                </div>
                <div
                  className="rw-num"
                  style={{ fontSize: 18, fontWeight: 700, color: "#14181E" }}
                >
                  {vm.maintenanceStr}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 12.5, color: "#9aa4b0", marginBottom: 5 }}>
                  {L.freeRepairUntil}
                </div>
                <div
                  className="rw-num"
                  style={{ fontSize: 18, fontWeight: 700, color: "#14181E" }}
                >
                  {vm.dlpEndStr}
                </div>
              </div>
            </div>
            {dlpIsActive && (
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 11,
                  background: "#DDF2F2",
                  borderRadius: 11,
                  padding: "14px 16px",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0E8587"
                  strokeWidth="2.2"
                  style={{ flexShrink: 0, marginTop: 1 }}
                >
                  <path d="M9 12.5l2.2 2.2L16 9.5" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
                <div>
                  <div
                    style={{ fontSize: 14, fontWeight: 700, color: "#0a6b6c" }}
                  >
                    {L.freeRepairUntil} {vm.dlpEndStr}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "#1c7374",
                      marginTop: 3,
                      lineHeight: 1.45,
                    }}
                  >
                    {L.dlpNote}
                  </div>
                </div>
              </div>
            )}
            {dlpIsPending && (
              <div
                style={{
                  fontSize: 13.5,
                  color: "#79838F",
                  lineHeight: 1.5,
                  background: "#F4F6F9",
                  borderRadius: 11,
                  padding: "14px 16px",
                }}
              >
                {L.dlpNote}
              </div>
            )}
            {dlpIsEnded && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 11,
                  background: "#F4F6F9",
                  borderRadius: 11,
                  padding: "14px 16px",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#79838F",
                }}
              >
                {L.dlpExpired}
              </div>
            )}
          </section>
        </div>

        {/* RIGHT: ACCOUNTABILITY */}
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <section
            style={{ ...cardStyle, padding: 0, overflow: "hidden" }}
          >
            <div style={{ padding: "18px 22px 8px" }}>
              <div style={fieldLabelStyle}>{L.officer}</div>
            </div>
            <div
              style={{
                padding: "6px 22px 20px",
                display: "flex",
                alignItems: "center",
                gap: 14,
                borderBottom: "1px solid #EEF1F5",
              }}
            >
              <span
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "#EaF1F9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1B4F8A"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21a8 8 0 0 1 16 0" />
                </svg>
              </span>
              <div>
                <div
                  style={{ fontSize: 17, fontWeight: 700, color: "#14181E" }}
                >
                  {vm.officerName}
                </div>
                <div style={{ fontSize: 13, color: "#79838F", marginTop: 2 }}>
                  {vm.officerDesig}
                </div>
              </div>
            </div>
            <div style={{ padding: "18px 22px 8px" }}>
              <div style={fieldLabelStyle}>{L.contractor}</div>
            </div>
            <div
              style={{
                padding: "6px 22px 20px",
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <span
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "#F1EEE7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9a5e0d"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 18h20M4 18V9l8-5 8 5v9M9 18v-5h6v5" />
                </svg>
              </span>
              <div style={{ minWidth: 0 }}>
                <div
                  style={{ fontSize: 16, fontWeight: 700, color: "#14181E" }}
                >
                  {vm.contractor}
                </div>
                <div
                  className="rw-num"
                  style={{ fontSize: 12.5, color: "#79838F", marginTop: 2 }}
                >
                  {L.workOrder}: {vm.workOrder}
                </div>
              </div>
            </div>
          </section>

          <section style={{ ...cardStyle, padding: 0, overflow: "hidden" }}>
            <div style={{ position: "relative", height: 180 }}>
              <RoadMapDynamic
                projects={[vm]}
                height={180}
                zoom={14}
                scrollWheelZoom={false}
                showPopups={false}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "14px 20px",
                fontSize: 13,
              }}
            >
              <span style={{ color: "#79838F" }}>{L.lastUpdated}</span>
              <span
                className="rw-num"
                style={{ fontWeight: 600, color: "#4A5460" }}
              >
                {fmtDate(project.lastUpdated)}
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  background: "#fff",
  border: "1px solid #E2E7ED",
  borderRadius: 16,
  padding: "24px 26px",
};

const fieldLabelStyle: React.CSSProperties = {
  fontSize: 12.5,
  fontWeight: 700,
  letterSpacing: ".04em",
  textTransform: "uppercase",
  color: "#9aa4b0",
};

const sectionHeadingStyle: React.CSSProperties = {
  margin: "0 0 22px",
  fontSize: 15,
  fontWeight: 700,
  letterSpacing: ".02em",
  textTransform: "uppercase",
  color: "#4A5460",
};
