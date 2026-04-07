import { ArrowRight, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router";

export default function Contact() {
  return (
    <div style={{ padding: "clamp(32px, 6vw, 80px) 0" }}>
      {/* Big CTA panel */}
      <div style={{
        background: "var(--bg-card)", border: "1px solid var(--border)",
        padding: "clamp(40px, 7vw, 96px) clamp(28px, 6vw, 80px)",
        position: "relative", overflow: "hidden",
        marginBottom: "clamp(32px, 4vw, 48px)",
      }}>
        <div style={{
          position: "absolute", top: "-80px", right: "-80px",
          width: "400px", height: "400px",
          background: "radial-gradient(circle, rgba(232,255,71,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "2px",
          background: "linear-gradient(to right, var(--accent), var(--cyan), transparent)",
        }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label" style={{ marginBottom: "20px" }}>Start a Conversation</div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(44px, 9vw, 100px)",
            lineHeight: 0.9, textTransform: "uppercase",
            marginBottom: "clamp(20px, 3vw, 36px)",
          }}>
            Have a project<br />in{" "}
            <span style={{ color: "var(--accent)" }}>mind?</span>
          </h2>

          <p style={{
            maxWidth: "520px",
            fontSize: "clamp(14px, 1.8vw, 16px)",
            color: "var(--text-muted)", lineHeight: 1.8, fontWeight: 300,
            marginBottom: "clamp(28px, 4vw, 48px)",
          }}>
            Tell us what you're building. We'll get back to you within one business day
            with a clear scope, realistic timeline, and honest assessment.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="mailto:hello@kacetech.ng" className="btn-accent">
              Send us an Email <ArrowRight size={13} />
            </a>
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Book a Discovery Call
            </a>
          </div>
        </div>
      </div>

      {/* Info cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
        gap: "clamp(8px, 1.5vw, 16px)",
      }}>
        {[
          { icon: Mail,   label: "Email",         value: "hello@kacetech.ng",       href: "mailto:hello@kacetech.ng" },
          { icon: MapPin, label: "Location",       value: "Abuja, FCT, Nigeria",     href: "https://maps.google.com/?q=Abuja+Nigeria" },
          { icon: Clock,  label: "Working Hours",  value: "Mon–Fri, 8 AM–6 PM WAT", href: null },
        ].map(({ icon: Icon, label, value, href }) => (
          <div
            key={label}
            style={{
              background: "var(--bg-card)", border: "1px solid var(--border)",
              padding: "clamp(20px, 2.5vw, 28px)",
              display: "flex", alignItems: "flex-start", gap: "14px",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-bright)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
          >
            <div style={{
              width: "34px", height: "34px",
              border: "1px solid var(--border-bright)",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <Icon size={14} color="var(--accent)" />
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-subtle)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "5px" }}>
                {label}
              </div>
              {href ? (
                <a href={href} style={{ fontSize: "13px", color: "var(--text-muted)", textDecoration: "none", wordBreak: "break-all" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  {value}
                </a>
              ) : (
                <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>{value}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
