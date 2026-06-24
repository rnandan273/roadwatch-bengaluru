"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLang } from "@/lib/i18n";
import { PROJECTS, PORTFOLIO, STATUS_META, StatusKey } from "@/lib/data";
import { buildVM, overdueDays, ViewModel } from "@/lib/helpers";
import RoadMapDynamic from "@/components/RoadMapDynamic";

export default function HomePage() {
  const { lang, L } = useLang();
  const router = useRouter();
  const [q, setQ] = useState("");
  const [searchHover, setSearchHover] = useState(false);
  const [mapBtnHover, setMapBtnHover] = useState(false);

  const vms = useMemo(() => PROJECTS.map((p) => buildVM(p, lang)), [lang]);

  const statusSegments = PORTFOLIO.dist.map((d) => ({
    key: d.key,
    label: L[("s_" + d.key) as keyof typeof L] as string,
    pct: d.pct,
    color: STATUS_META[d.key].color,
  }));

  const kpis = [
    { value: "₹5,500 cr", label: L.kpiTracked, color: "#1B4F8A" },
    { value: "1,932", label: L.kpiProjects, color: "#5B6573" },
    { value: "41%", label: L.kpiCompleted, color: STATUS_META.completed.color },
    { value: "22%", label: L.kpiInProgress, color: STATUS_META.inProgress.color },
    { value: "18%", label: L.kpiDelayed, color: STATUS_META.delayed.color },
    { value: "1,140 km", label: L.kpiRoad, color: "#0E8587" },
  ];

  const mkSpot = (
    list: typeof PROJECTS,
    valFn: (p: (typeof PROJECTS)[number], v: ViewModel) => string
  ) =>
    list.map((p) => {
      const v = buildVM(p, lang);
      return { ...v, spotlightValue: valFn(p, v) };
    });

  const delayed = mkSpot(
    [...PROJECTS]
      .filter((p) => overdueDays(p) > 0)
      .sort((a, b) => overdueDays(b) - overdueDays(a))
      .slice(0, 4),
    (p) => overdueDays(p).toLocaleString("en-IN") + "d"
  );
  const largest = mkSpot(
    [...PROJECTS].sort((a, b) => b.sanctionedCr - a.sanctionedCr).slice(0, 4),
    (p) => "₹" + p.sanctionedCr.toLocaleString("en-IN") + " cr"
  );
  const recent = mkSpot(
    [...PROJECTS]
      .sort(
        (a, b) =>
          new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
      )
      .slice(0, 4),
    (_p, v) => v.statusLabel
  );

  const spotlights = [
    { title: L.spotlightDelayed, accent: STATUS_META.delayed.color, items: delayed },
    { title: L.spotlightLargest, accent: "#1B4F8A", items: largest },
    { title: L.spotlightRecent, accent: "#0E8587", items: recent },
  ];

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(q.trim() ? `/projects?q=${encodeURIComponent(q.trim())}` : "/projects");
  };

  return (
    <div>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          background:
            "linear-gradient(180deg,#102B4C 0%,#163C66 55%,#1B4F8A 100%)",
          color: "#fff",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.16,
            backgroundImage:
              "repeating-linear-gradient(90deg,transparent 0 38px,rgba(255,255,255,.5) 38px 40px)",
            maskImage: "linear-gradient(180deg,transparent,#000 60%,transparent)",
            WebkitMaskImage:
              "linear-gradient(180deg,transparent,#000 60%,transparent)",
          }}
        />
        <div
          style={{
            position: "relative",
            maxWidth: 1280,
            margin: "0 auto",
            padding: "64px 28px 56px",
            display: "grid",
            gridTemplateColumns: "minmax(0,1.15fr) minmax(0,.85fr)",
            gap: 56,
            alignItems: "center",
          }}
          className="rw-hero-grid"
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 13px",
                border: "1px solid rgba(255,255,255,.28)",
                borderRadius: 100,
                fontSize: 12.5,
                fontWeight: 600,
                letterSpacing: ".04em",
                color: "#bcd2ec",
                marginBottom: 22,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#5fd29a",
                }}
              />
              {L.heroKicker}
            </div>
            <h1
              className="rw-serif"
              style={{
                fontWeight: 700,
                fontSize: "clamp(34px,4.4vw,58px)",
                lineHeight: 1.04,
                letterSpacing: "-.015em",
                margin: "0 0 20px",
              }}
            >
              <span style={{ color: "#fff" }}>{L.heroTitleA}</span>
              <br />
              <span style={{ color: "#9fc3ec" }}>{L.heroTitleB}</span>
            </h1>
            <p
              style={{
                fontSize: 17.5,
                lineHeight: 1.55,
                color: "#cdddf0",
                maxWidth: 560,
                margin: "0 0 30px",
              }}
            >
              {L.heroSub}
            </p>
            <form
              onSubmit={onSubmit}
              style={{ display: "flex", gap: 10, maxWidth: 560 }}
            >
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  background: "#fff",
                  borderRadius: 11,
                  padding: "0 16px",
                  height: 54,
                  boxShadow: "0 8px 24px rgba(0,0,0,.18)",
                }}
              >
                <svg
                  width="20"
                  height="20"
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
                    fontSize: 16,
                    color: "#14181E",
                    background: "none",
                  }}
                />
              </div>
              <button
                type="submit"
                onMouseEnter={() => setSearchHover(true)}
                onMouseLeave={() => setSearchHover(false)}
                style={{
                  height: 54,
                  padding: "0 26px",
                  borderRadius: 11,
                  background: searchHover ? "#eef4fb" : "#fff",
                  color: "#1B4F8A",
                  fontWeight: 700,
                  fontSize: 15.5,
                  whiteSpace: "nowrap",
                  boxShadow: "0 8px 24px rgba(0,0,0,.18)",
                }}
              >
                {L.findCta}
              </button>
            </form>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,.07)",
              border: "1px solid rgba(255,255,255,.16)",
              borderRadius: 16,
              padding: 24,
              backdropFilter: "blur(4px)",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "#9fc3ec",
                marginBottom: 6,
              }}
            >
              {L.kpiTracked}
            </div>
            <div
              className="rw-num"
              style={{
                fontSize: "clamp(40px,5vw,60px)",
                fontWeight: 800,
                lineHeight: 1,
                letterSpacing: "-.02em",
              }}
            >
              ₹5,500
              <span
                style={{
                  fontSize: ".42em",
                  fontWeight: 600,
                  color: "#bcd2ec",
                  marginLeft: 8,
                }}
              >
                cr
              </span>
            </div>
            <div
              style={{
                height: 1,
                background: "rgba(255,255,255,.16)",
                margin: "20px 0",
              }}
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "18px 20px",
              }}
            >
              <HeroStat value="1,932" label={L.kpiProjects} />
              <HeroStat value="41%" label={L.kpiCompleted} color="#7be0a8" />
              <HeroStat value="18%" label={L.kpiDelayed} color="#f3b765" />
              <HeroStat
                value={
                  <>
                    1,140
                    <span style={{ fontSize: ".6em", fontWeight: 600, color: "#bcd2ec" }}>
                      {" "}
                      km
                    </span>
                  </>
                }
                label={L.kpiRoad}
              />
            </div>
          </div>
        </div>
      </section>

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "44px 28px 64px",
          width: "100%",
        }}
      >
        {/* PORTFOLIO HEALTH */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #E2E7ED",
            borderRadius: 16,
            padding: "28px 30px",
            marginBottom: 36,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: 12,
              marginBottom: 20,
            }}
          >
            <div>
              <h2
                className="rw-serif"
                style={{
                  fontWeight: 600,
                  fontSize: 24,
                  margin: "0 0 4px",
                  letterSpacing: "-.01em",
                }}
              >
                {L.portfolioHealth}
              </h2>
              <p style={{ margin: 0, fontSize: 14, color: "#79838F" }}>
                {L.portfolioSub}
              </p>
            </div>
            <Link
              href="/projects"
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#1B4F8A",
                display: "flex",
                alignItems: "center",
                gap: 6,
                textDecoration: "none",
              }}
            >
              {L.browseAll}
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1B4F8A"
                strokeWidth="2.2"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              height: 48,
              borderRadius: 10,
              overflow: "hidden",
              gap: 2,
            }}
          >
            {statusSegments.map((seg) => (
              <Link
                key={seg.key}
                href={`/projects?status=${seg.key}`}
                title={`${seg.label} — ${seg.pct}%`}
                style={{
                  width: `${seg.pct}%`,
                  background: seg.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: 30,
                  textDecoration: "none",
                }}
              >
                <span
                  className="rw-num"
                  style={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 13,
                    textShadow: "0 1px 2px rgba(0,0,0,.25)",
                  }}
                >
                  {seg.pct}%
                </span>
              </Link>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px 22px",
              marginTop: 18,
            }}
          >
            {statusSegments.map((seg) => (
              <div
                key={seg.key}
                style={{ display: "flex", alignItems: "center", gap: 8 }}
              >
                <span
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: 3,
                    background: seg.color,
                  }}
                />
                <span style={{ fontSize: 13, color: "#4A5460" }}>
                  <span style={{ fontWeight: 600, color: "#14181E" }}>
                    {seg.label}
                  </span>{" "}
                  · {seg.pct}%
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* KPI ROW */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6,1fr)",
            gap: 14,
            marginBottom: 40,
          }}
          className="rw-kpi-grid"
        >
          {kpis.map((k, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                border: "1px solid #E2E7ED",
                borderRadius: 14,
                padding: "18px 18px 16px",
                borderTop: `3px solid ${k.color}`,
              }}
            >
              <div
                className="rw-num"
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  letterSpacing: "-.01em",
                  lineHeight: 1,
                  color: "#14181E",
                }}
              >
                {k.value}
              </div>
              <div
                style={{
                  fontSize: 12.5,
                  color: "#79838F",
                  marginTop: 8,
                  fontWeight: 500,
                }}
              >
                {k.label}
              </div>
            </div>
          ))}
        </section>

        {/* MAP PREVIEW + SPOTLIGHTS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1.5fr) minmax(0,1fr)",
            gap: 24,
            alignItems: "start",
          }}
          className="rw-map-grid"
        >
          <section
            style={{
              background: "#fff",
              border: "1px solid #E2E7ED",
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "22px 24px 16px" }}>
              <h2
                className="rw-serif"
                style={{ fontWeight: 600, fontSize: 22, margin: "0 0 3px" }}
              >
                {L.mapPreviewTitle}
              </h2>
              <p style={{ margin: 0, fontSize: 14, color: "#79838F" }}>
                {L.mapPreviewSub}
              </p>
            </div>
            <div
              style={{
                position: "relative",
                height: 360,
                margin: "0 4px 4px",
                borderRadius: 12,
                overflow: "hidden",
                background: "#eef2f6",
              }}
            >
              <RoadMapDynamic
                projects={vms}
                height={360}
                zoom={11}
                scrollWheelZoom={false}
                showPopups
              />
              <Link
                href="/map"
                onMouseEnter={() => setMapBtnHover(true)}
                onMouseLeave={() => setMapBtnHover(false)}
                style={{
                  position: "absolute",
                  right: 14,
                  bottom: 14,
                  zIndex: 500,
                  background: mapBtnHover ? "#143A66" : "#1B4F8A",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 14,
                  padding: "11px 18px",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  boxShadow: "0 6px 18px rgba(0,0,0,.25)",
                  textDecoration: "none",
                }}
              >
                {L.exploreMap}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2.2"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </section>

          <section style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {spotlights.map((sp, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  border: "1px solid #E2E7ED",
                  borderRadius: 14,
                  padding: "16px 18px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 12,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 18,
                      borderRadius: 3,
                      background: sp.accent,
                    }}
                  />
                  <h3
                    style={{
                      margin: 0,
                      fontSize: 14,
                      fontWeight: 700,
                      letterSpacing: ".02em",
                      textTransform: "uppercase",
                      color: "#4A5460",
                    }}
                  >
                    {sp.title}
                  </h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {sp.items.map((p) => (
                    <SpotlightRow key={p.id} p={p} />
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}

function HeroStat({
  value,
  label,
  color,
}: {
  value: React.ReactNode;
  label: string;
  color?: string;
}) {
  return (
    <div>
      <div className="rw-num" style={{ fontSize: 24, fontWeight: 800, color }}>
        {value}
      </div>
      <div style={{ fontSize: 12.5, color: "#bcd2ec", marginTop: 2 }}>{label}</div>
    </div>
  );
}

function SpotlightRow({ p }: { p: ViewModel & { spotlightValue: string } }) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={`/projects/${p.id}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "9px 6px",
        borderRadius: 8,
        textAlign: "left",
        width: "100%",
        background: hover ? "#F4F6F9" : "transparent",
        textDecoration: "none",
      }}
    >
      <span
        style={{
          width: 9,
          height: 9,
          borderRadius: "50%",
          background: p.statusColor,
          flexShrink: 0,
        }}
      />
      <span style={{ flex: 1, minWidth: 0 }}>
        <span
          style={{
            display: "block",
            fontSize: 13.5,
            fontWeight: 600,
            color: "#14181E",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {p.name}
        </span>
        <span style={{ fontSize: 12, color: "#79838F" }}>{p.metaLine}</span>
      </span>
      <span
        className="rw-num"
        style={{
          fontSize: 13.5,
          fontWeight: 700,
          color: "#14181E",
          whiteSpace: "nowrap",
        }}
      >
        {p.spotlightValue}
      </span>
    </Link>
  );
}
