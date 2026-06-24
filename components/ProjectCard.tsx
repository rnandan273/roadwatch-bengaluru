"use client";

import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/lib/i18n";
import type { ViewModel } from "@/lib/helpers";
import StatusBadge, { OverdueFlag } from "./StatusBadge";

export default function ProjectCard({ vm }: { vm: ViewModel }) {
  const { L } = useLang();
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={`/projects/${vm.id}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        textAlign: "left",
        background: "#fff",
        border: `1px solid ${hover ? "#cdd5de" : "#E2E7ED"}`,
        borderRadius: 14,
        padding: "18px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        textDecoration: "none",
        boxShadow: hover ? "0 8px 24px rgba(20,24,30,.09)" : "none",
        transition: "box-shadow .15s, border-color .15s",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <div style={{ minWidth: 0 }}>
          <div
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: "#14181E",
              lineHeight: 1.25,
            }}
          >
            {vm.name}
          </div>
          <div style={{ fontSize: 13, color: "#79838F", marginTop: 3 }}>
            {vm.wardZone}
          </div>
        </div>
        <StatusBadge
          color={vm.statusColor}
          bg={vm.statusBg}
          icon={vm.statusIcon}
          label={vm.statusLabel}
        />
      </div>

      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
        <span
          className="rw-num"
          style={{
            fontSize: 23,
            fontWeight: 800,
            letterSpacing: "-.01em",
            color: "#14181E",
          }}
        >
          {vm.costStr}
        </span>
        <span style={{ fontSize: 12.5, color: "#9aa4b0" }}>
          ·&nbsp; {vm.workType} · {vm.lengthStr}
        </span>
      </div>

      <div>
        <div
          style={{
            height: 7,
            borderRadius: 5,
            background: "#EEF1F5",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: vm.progressStr,
              background: vm.statusColor,
              borderRadius: 5,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 7,
          }}
        >
          <span
            className="rw-num"
            style={{ fontSize: 12, fontWeight: 600, color: "#4A5460" }}
          >
            {vm.progressStr}
          </span>
          <span style={{ fontSize: 12, color: "#79838F" }}>{vm.contractor}</span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
          paddingTop: 12,
          borderTop: "1px solid #EEF1F5",
        }}
      >
        <span style={{ fontSize: 12.5, color: "#79838F" }}>
          {L.promised}:{" "}
          <span style={{ fontWeight: 600, color: "#4A5460" }}>
            {vm.promisedStr}
          </span>
        </span>
        {vm.isOverdue && <OverdueFlag text={vm.flag} />}
      </div>
    </Link>
  );
}
