"use client";

import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import Link from "next/link";
import { MAP_CENTER, MAP_ZOOM } from "@/lib/data";
import type { ViewModel } from "@/lib/helpers";
import { useLang } from "@/lib/i18n";

interface Props {
  projects: ViewModel[];
  selectedId?: string | null;
  onSelect?: (id: string) => void;
  height?: string | number;
  zoom?: number;
  scrollWheelZoom?: boolean;
  showPopups?: boolean;
}

function markerIcon(color: string, selected: boolean): L.DivIcon {
  const size = selected ? 19 : 14;
  const ring = selected ? `box-shadow:0 1px 5px rgba(0,0,0,.35),0 0 0 5px ${color}44;` : "";
  return L.divIcon({
    className: "",
    html: `<div class="rw-marker" style="width:${size}px;height:${size}px;background:${color};${ring}"></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2 - 4],
  });
}

// Pans the map when the selected project changes.
function FlyToSelected({
  projects,
  selectedId,
}: {
  projects: ViewModel[];
  selectedId?: string | null;
}) {
  const map = useMap();
  useEffect(() => {
    if (!selectedId) return;
    const p = projects.find((x) => x.id === selectedId);
    if (p) map.flyTo([p.lat, p.lng], Math.max(map.getZoom(), 13), { duration: 0.6 });
  }, [selectedId, projects, map]);
  return null;
}

export default function RoadMap({
  projects,
  selectedId,
  onSelect,
  height = 360,
  zoom = MAP_ZOOM,
  scrollWheelZoom = true,
  showPopups = true,
}: Props) {
  const { L: T } = useLang();

  return (
    <MapContainer
      center={MAP_CENTER}
      zoom={zoom}
      scrollWheelZoom={scrollWheelZoom}
      style={{ height, width: "100%" }}
      zoomControl={scrollWheelZoom}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FlyToSelected projects={projects} selectedId={selectedId} />
      {projects.map((p) => (
        <Marker
          key={p.id}
          position={[p.lat, p.lng]}
          icon={markerIcon(p.statusColor, selectedId === p.id)}
          eventHandlers={{
            click: () => onSelect?.(p.id),
          }}
        >
          {showPopups && (
            <Popup>
              <div style={{ padding: "14px 16px 0" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "4px 9px 4px 7px",
                    borderRadius: 100,
                    background: p.statusBg,
                  }}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={p.statusColor}
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={p.statusIcon} />
                  </svg>
                  <span
                    style={{ fontSize: 11.5, fontWeight: 700, color: p.statusColor }}
                  >
                    {p.statusLabel}
                  </span>
                </span>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#14181E",
                    margin: "11px 0 3px",
                    lineHeight: 1.25,
                  }}
                >
                  {p.name}
                </div>
                <div style={{ fontSize: 12.5, color: "#79838F" }}>{p.wardZone}</div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 8,
                    margin: "12px 0 14px",
                  }}
                >
                  <span
                    className="rw-num"
                    style={{ fontSize: 21, fontWeight: 800, color: "#14181E" }}
                  >
                    {p.costStr}
                  </span>
                  <span style={{ fontSize: 12, color: "#9aa4b0" }}>
                    {p.contractor}
                  </span>
                </div>
              </div>
              <Link
                href={`/projects/${p.id}`}
                style={{
                  width: "100%",
                  padding: "12px",
                  background: "#1B4F8A",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 7,
                  textDecoration: "none",
                }}
              >
                {T.viewDetails}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2.3"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </Popup>
          )}
        </Marker>
      ))}
    </MapContainer>
  );
}
