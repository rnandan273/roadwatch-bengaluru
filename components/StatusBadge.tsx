"use client";

interface Props {
  color: string;
  bg: string;
  icon: string;
  label: string;
  size?: "sm" | "md";
}

export default function StatusBadge({ color, bg, icon, label, size = "md" }: Props) {
  const iconSize = size === "sm" ? 13 : 14;
  const fontSize = size === "sm" ? 11.5 : 12;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "5px 10px 5px 8px",
        borderRadius: 100,
        background: bg,
        flexShrink: 0,
      }}
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={icon} />
      </svg>
      <span
        style={{
          fontSize,
          fontWeight: 700,
          color,
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
    </span>
  );
}

export function OverdueFlag({ text }: { text: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        fontSize: 12,
        fontWeight: 700,
        color: "#C77A12",
      }}
    >
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C77A12"
        strokeWidth="2.4"
      >
        <path d="M12 8v5M12 17h.01M10.3 4.4 2.7 18a2 2 0 0 0 1.7 3h15.2a2 2 0 0 0 1.7-3L13.7 4.4a2 2 0 0 0-3.4 0Z" />
      </svg>
      {text}
    </span>
  );
}
