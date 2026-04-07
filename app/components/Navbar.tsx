import { useState, useEffect, useCallback } from "react";
import { NavLink, useLocation } from "react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home",     to: "/" },
  { label: "Services", to: "/services" },
  { label: "Stack",    to: "/stack" },
  { label: "Work",     to: "/work" },
  { label: "About",    to: "/about" },
  { label: "Contact",  to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleScroll = useCallback(() => setScrolled(window.scrollY > 40), []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 900,
          transition: "background 0.35s ease, border-color 0.35s ease",
          background: scrolled || menuOpen ? "rgba(6,6,8,0.95)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(16px)" : "none",
          borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
        }}
      >
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 64px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
          gap: "16px",
        }}>

          {/* Logo */}
          <NavLink to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "9px", flexShrink: 0 }}>
            <div style={{
              width: "28px", height: "28px",
              background: "var(--accent)",
              clipPath: "polygon(0 0, 100% 0, 100% 68%, 68% 100%, 0 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "16px", color: "#060608", lineHeight: 1 }}>K</span>
            </div>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "20px", letterSpacing: "0.07em", color: "var(--text)" }}>
              KACE<span style={{ color: "var(--accent)" }}>.</span>
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "2px", flex: 1, justifyContent: "center" }} className="desktop-nav">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                style={({ isActive }) => ({
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "6px 13px",
                  color: isActive ? "var(--accent)" : "var(--text-muted)",
                  background: isActive ? "var(--accent-dim)" : "transparent",
                  border: `1px solid ${isActive ? "rgba(232,255,71,0.22)" : "transparent"}`,
                  transition: "color 0.2s, background 0.2s, border-color 0.2s",
                  whiteSpace: "nowrap",
                })}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  if (!el.classList.contains("active")) el.style.color = "var(--text)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  if (!el.classList.contains("active")) el.style.color = "var(--text-muted)";
                }}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right: CTA + Burger */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
            <NavLink to="/contact" className="btn-accent cta-desktop" style={{ fontSize: "11px", padding: "9px 18px" }}>
              Start a Project <ArrowUpRight size={12} />
            </NavLink>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="burger-btn"
              style={{
                display: "none",
                background: menuOpen ? "var(--accent-dim)" : "transparent",
                border: `1px solid ${menuOpen ? "rgba(232,255,71,0.3)" : "var(--border-bright)"}`,
                color: menuOpen ? "var(--accent)" : "var(--text)",
                width: "38px", height: "38px",
                cursor: "pointer",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "all 0.2s",
              }}
            >
              {menuOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
        style={{
          position: "fixed", inset: 0, zIndex: 800,
          background: "rgba(0,0,0,0.65)",
          backdropFilter: "blur(4px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Mobile Drawer */}
      <aside
        aria-label="Mobile navigation"
        style={{
          position: "fixed",
          top: 0, right: 0, bottom: 0,
          width: "min(300px, 82vw)",
          zIndex: 850,
          background: "#0a0a0e",
          borderLeft: "1px solid var(--border)",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.38s cubic-bezier(0.4, 0, 0.2, 1)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Top accent */}
        <div style={{
          height: "2px", flexShrink: 0,
          background: "linear-gradient(to right, var(--accent), var(--cyan), transparent)",
        }} />

        {/* Header row */}
        <div style={{
          height: "64px", display: "flex", alignItems: "center",
          justifyContent: "space-between",
          padding: "0 22px",
          borderBottom: "1px solid var(--border)",
        }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "18px", letterSpacing: "0.07em" }}>
            KACE<span style={{ color: "var(--accent)" }}>.</span>
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{
              background: "transparent", border: "1px solid var(--border-bright)",
              color: "var(--text-muted)", width: "34px", height: "34px",
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-bright)"; (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
          >
            <X size={15} />
          </button>
        </div>

        {/* Nav links */}
        <nav style={{ flex: 1, overflowY: "auto", paddingTop: "8px" }}>
          {navLinks.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              style={({ isActive }) => ({
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 24px",
                fontFamily: "var(--font-display)",
                fontSize: "clamp(22px, 5vw, 28px)",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: isActive ? "var(--accent)" : "var(--text)",
                borderBottom: "1px solid var(--border)",
                background: isActive ? "rgba(232,255,71,0.05)" : "transparent",
                transition: "background 0.2s, color 0.2s",
              })}
            >
              {({ isActive }) => (
                <>
                  <span>{link.label}</span>
                  <span style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: isActive ? "var(--accent)" : "var(--text-subtle)",
                    letterSpacing: "0.12em",
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Mobile CTA */}
        <div style={{ padding: "20px 24px 28px", borderTop: "1px solid var(--border)" }}>
          <NavLink
            to="/contact"
            className="btn-accent"
            style={{ display: "flex", justifyContent: "center", width: "100%", boxSizing: "border-box" }}
          >
            Start a Project <ArrowUpRight size={13} />
          </NavLink>
          <p style={{
            marginTop: "14px",
            fontFamily: "var(--font-mono)",
            fontSize: "10.5px",
            color: "var(--text-subtle)",
            textAlign: "center",
            letterSpacing: "0.06em",
          }}>
            hello@kacetech.ng
          </p>
        </div>
      </aside>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav  { display: none !important; }
          .cta-desktop  { display: none !important; }
          .burger-btn   { display: flex !important; }
        }
        @media (min-width: 901px) {
          aside[aria-label="Mobile navigation"] { display: none !important; }
        }
      `}</style>
    </>
  );
}
