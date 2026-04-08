import { Link } from "react-router";
/* import github from "../../public/github.svg";
import facebook from "../../public/facebook.svg";
import instagram from "../../public/instagram.svg";
import x from "../../public/x.svg"; */
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Web Engineering",      to: "/services" },
    { label: "Mobile Development",   to: "/services" },
    { label: "Cloud & DevOps",       to: "/services" },
    { label: "AI & Data",            to: "/services" },
    { label: "Consulting",           to: "/services" },
  ],
  Company: [
    { label: "About",    to: "/about" },
    { label: "Work",     to: "/work" },
    { label: "Stack",    to: "/stack" },
    { label: "Contact",  to: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy",   to: "/" },
    { label: "Terms of Service", to: "/" },
    { label: "Cookie Policy",    to: "/" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", background: "var(--bg-card)" }}>
      <div style={{
        maxWidth: "1280px", margin: "0 auto",
        padding: "clamp(48px, 7vw, 72px) clamp(16px, 4vw, 64px) clamp(32px, 4vw, 48px)",
      }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "clamp(32px, 4vw, 48px)",
            marginBottom: "clamp(40px, 5vw, 64px)",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "9px", marginBottom: "18px" }}>
              <div style={{
                width: "26px", height: "26px", background: "var(--accent)",
                clipPath: "polygon(0 0, 100% 0, 100% 68%, 68% 100%, 0 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "15px", color: "#060608" }}>K</span>
              </div>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "19px", letterSpacing: "0.07em", color: "var(--text)" }}>
                KACE<span style={{ color: "var(--accent)" }}>.</span>
              </span>
            </Link>
            <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.75, fontWeight: 300, maxWidth: "240px", marginBottom: "24px" }}>
              Software development and consulting agency. Abuja, Nigeria. Building systems that scale.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" style={{
                  width: "34px", height: "34px",
                  border: "1px solid var(--border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--text-muted)", textDecoration: "none",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
                >
                  <Icon size={13} />
                  {/* <img src={Icon} alt="social" style={{ width: "13px", height: "13px" }} /> */}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([col, items]) => (
            <div key={col}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "10.5px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text)", marginBottom: "18px" }}>
                {col}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
                {items.map((item) => (
                  <Link key={item.label} to={item.to} style={{ fontSize: "13px", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s", fontWeight: 300 }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-subtle)" }}>
            © {new Date().getFullYear()} Kace Technologies Ltd. All rights reserved.
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-subtle)" }}>
            Abuja, Nigeria 🇳🇬
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 440px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
