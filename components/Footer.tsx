"use client";

import { useLang } from "@/lib/i18n";
import { PORTFOLIO } from "@/lib/data";
import { fmtDate } from "@/lib/helpers";

export default function Footer() {
  const { L } = useLang();
  return (
    <footer style={{ borderTop: "1px solid #E2E7ED", background: "#fff" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "24px 28px",
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontSize: 13,
            color: "#79838F",
            maxWidth: 620,
            lineHeight: 1.5,
          }}
        >
          {L.trustNote}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 12.5,
            color: "#79838F",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#1F8A52",
            }}
          />
          {L.lastUpdatedAt}:{" "}
          <span style={{ fontWeight: 600, color: "#4A5460" }}>
            {fmtDate(PORTFOLIO.lastUpdated)}
          </span>
        </div>
      </div>
    </footer>
  );
}
