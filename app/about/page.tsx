"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

export default function AboutPage() {
  const { L } = useLang();

  const infoCols: { title: string; body: string; icon: React.ReactNode }[] = [
    {
      title: L.dataSource,
      body: L.dataSourceBody,
      icon: (
        <>
          <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7L9 4H5a2 2 0 0 0-2 2Z" />
        </>
      ),
    },
    {
      title: L.methodology,
      body: L.methodologyBody,
      icon: (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </>
      ),
    },
    {
      title: L.contribute,
      body: L.contributeBody,
      icon: (
        <>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11" />
        </>
      ),
    },
  ];

  return (
    <div>
      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(160deg, #102B4C 0%, #163C66 60%, #1B4F8A 100%)",
          color: "#fff",
          padding: "72px 28px 64px",
        }}
      >
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 12.5,
              fontWeight: 700,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "#9FC0E4",
              marginBottom: 16,
            }}
          >
            {L.navAbout}
          </div>
          <h1
            className="rw-serif"
            style={{
              margin: "0 0 18px",
              fontSize: 42,
              lineHeight: 1.12,
              fontWeight: 600,
              letterSpacing: "-.02em",
            }}
          >
            {L.aboutTitle}
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: 19,
              lineHeight: 1.55,
              color: "#D7E3F1",
              maxWidth: 720,
            }}
          >
            {L.aboutLead}
          </p>
        </div>
      </section>

      {/* BODY */}
      <div
        style={{
          maxWidth: 880,
          margin: "0 auto",
          padding: "52px 28px 72px",
          width: "100%",
        }}
      >
        <p
          style={{
            margin: "0 0 44px",
            fontSize: 17.5,
            lineHeight: 1.7,
            color: "#37414D",
          }}
        >
          {L.aboutP1}
        </p>

        {/* ACCOUNTABILITY ARC */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0,1fr))",
            gap: 16,
            marginBottom: 56,
          }}
          className="rw-cards-2"
        >
          {L.arc.map((item, i) => (
            <div
              key={item.t}
              style={{
                background: "#fff",
                border: "1px solid #E2E7ED",
                borderTop: "3px solid #1B4F8A",
                borderRadius: 13,
                padding: "20px 18px 22px",
              }}
            >
              <div
                className="rw-num"
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  color: "#1B4F8A",
                  letterSpacing: ".04em",
                  marginBottom: 12,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#14181E",
                  marginBottom: 7,
                }}
              >
                {item.t}
              </div>
              <div
                style={{ fontSize: 13.5, lineHeight: 1.5, color: "#5B6573" }}
              >
                {item.d}
              </div>
            </div>
          ))}
        </div>

        {/* INFO COLUMNS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0,1fr))",
            gap: 24,
            marginBottom: 52,
          }}
          className="rw-cards-2"
        >
          {infoCols.map((col) => (
            <div key={col.title}>
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 11,
                  background: "#EaF1F9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 14,
                }}
              >
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1B4F8A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {col.icon}
                </svg>
              </div>
              <h3
                style={{
                  margin: "0 0 8px",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#14181E",
                }}
              >
                {col.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: "#5B6573",
                }}
              >
                {col.body}
              </p>
            </div>
          ))}
        </div>

        {/* CTA BANNER */}
        <div
          style={{
            background: "#EaF1F9",
            border: "1px solid #cdd9e8",
            borderRadius: 15,
            padding: "28px 30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 18,
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 15,
              lineHeight: 1.55,
              color: "#1D3A5C",
              fontWeight: 500,
              maxWidth: 560,
            }}
          >
            {L.trustNote}
          </p>
          <Link
            href="/projects"
            style={{
              flexShrink: 0,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#1B4F8A",
              color: "#fff",
              fontSize: 14.5,
              fontWeight: 700,
              padding: "12px 20px",
              borderRadius: 10,
              textDecoration: "none",
            }}
          >
            {L.browseAll}
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
