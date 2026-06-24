"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/lib/i18n";

export default function Header() {
  const { lang, setLang, L } = useLang();
  const pathname = usePathname();

  const navItems = [
    { key: "home", href: "/", label: L.navHome },
    { key: "map", href: "/map", label: L.navMap },
    { key: "projects", href: "/projects", label: L.navProjects },
    { key: "about", href: "/about", label: L.navAbout },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/projects")
      return pathname === "/projects" || pathname.startsWith("/projects/");
    return pathname === href;
  };

  const tabStyle = (active: boolean): React.CSSProperties => ({
    height: 34,
    padding: "0 13px",
    fontSize: 13,
    fontWeight: 700,
    background: active ? "#1B4F8A" : "#fff",
    color: active ? "#fff" : "#79838F",
  });

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "rgba(255,255,255,.92)",
        backdropFilter: "saturate(1.4) blur(8px)",
        borderBottom: "1px solid #E2E7ED",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 28px",
          height: 64,
          display: "flex",
          alignItems: "center",
          gap: 28,
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 11,
            textDecoration: "none",
          }}
        >
          <span
            style={{
              width: 34,
              height: 34,
              borderRadius: 8,
              background: "#1B4F8A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 6px rgba(27,79,138,.32)",
            }}
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 21l3-18M19 21l-3-18M12 4v2M12 10v2M12 16v2" />
            </svg>
          </span>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: 1,
              textAlign: "left",
            }}
          >
            <span
              style={{
                fontSize: 16,
                fontWeight: 800,
                letterSpacing: "-.01em",
                color: "#14181E",
              }}
            >
              {L.brand}
            </span>
            <span
              style={{
                fontSize: 10.5,
                fontWeight: 600,
                letterSpacing: ".13em",
                textTransform: "uppercase",
                color: "#1B4F8A",
                marginTop: 3,
              }}
            >
              {L.brandSub}
            </span>
          </span>
        </Link>

        <nav
          style={{
            display: "flex",
            alignItems: "stretch",
            gap: 2,
            marginLeft: 8,
            height: 64,
          }}
        >
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.key}
                href={item.href}
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 15px",
                  fontSize: 14.5,
                  fontWeight: active ? 700 : 500,
                  color: active ? "#14181E" : "#79838F",
                  textDecoration: "none",
                }}
              >
                <span>{item.label}</span>
                <span
                  style={{
                    position: "absolute",
                    left: 12,
                    right: 12,
                    bottom: 0,
                    height: 3,
                    borderRadius: "3px 3px 0 0",
                    background: active ? "#1B4F8A" : "transparent",
                  }}
                />
              </Link>
            );
          })}
        </nav>

        <div style={{ flex: 1 }} />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #E2E7ED",
            borderRadius: 9,
            overflow: "hidden",
            height: 36,
          }}
        >
          <button onClick={() => setLang("en")} style={tabStyle(lang === "en")}>
            EN
          </button>
          <button onClick={() => setLang("kn")} style={tabStyle(lang === "kn")}>
            ಕನ್ನಡ
          </button>
        </div>
      </div>
    </header>
  );
}
