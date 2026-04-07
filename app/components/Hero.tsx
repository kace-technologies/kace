import { Link } from "react-router";
import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        paddingBottom: "clamp(48px, 8vw, 96px)",
        position: "relative",
        overflow: "hidden",
      }}
      className="grid-bg"
    >
      <div style={{
        position: "absolute", top: "15%", right: "-10%",
        width: "clamp(300px, 50vw, 600px)", height: "clamp(300px, 50vw, 600px)",
        background: "radial-gradient(circle, rgba(232,255,71,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", left: "-5%",
        width: "clamp(200px, 35vw, 400px)", height: "clamp(200px, 35vw, 400px)",
        background: "radial-gradient(circle, rgba(0,212,200,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Top meta row */}
      <div style={{
        position: "absolute",
        top: "clamp(16px, 4vw, 40px)", left: "50%", transform: "translateX(-50%)",
        width: "100%", maxWidth: "1280px",
        padding: "0 clamp(16px, 4vw, 64px)",
        display: "flex", justifyContent: "space-between", alignItems: "flex-start",
        flexWrap: "wrap", gap: "12px",
      }}>
        <div className="animate-fadeUp delay-100">
          <div className="section-label" style={{ marginBottom: "10px" }}>Est. 2019</div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <MapPin size={12} color="var(--text-muted)" />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.06em" }}>
              Abuja, Nigeria
            </span>
          </div>
        </div>
        <div className="animate-fadeUp delay-200" style={{ textAlign: "right" }}>
          <div className="section-label" style={{ justifyContent: "flex-end", marginBottom: "8px" }}>Status</div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "flex-end" }}>
            <span style={{ display: "block", width: "6px", height: "6px", borderRadius: "50%", background: "#39ff14", boxShadow: "0 0 8px #39ff14" }} className="glow-pulse" />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.06em" }}>
              Available for Projects
            </span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{
        maxWidth: "1280px", margin: "0 auto",
        padding: "0 clamp(16px, 4vw, 64px)",
        width: "100%",
      }}>
        <div className="animate-fadeUp delay-200" style={{ marginBottom: "24px" }}>
          <span className="tag">Software Development & Consulting</span>
        </div>

        <h1 className="hero-title animate-fadeUp delay-300">
          <span style={{ display: "block" }}>We Build</span>
          <span style={{ display: "block", color: "var(--accent)" }}>Systems</span>
          <span style={{ display: "block" }}>That Scale</span>
        </h1>

        <div style={{
          display: "flex", flexDirection: "row",
          justifyContent: "space-between", alignItems: "flex-end",
          marginTop: "clamp(28px, 5vw, 52px)",
          gap: "28px", flexWrap: "wrap",
        }}>
          <p className="animate-fadeUp delay-500" style={{
            maxWidth: "440px",
            fontSize: "clamp(14px, 2vw, 17px)",
            color: "var(--text-muted)", lineHeight: "1.75", fontWeight: 300,
          }}>
            Kace Technologies engineers{" "}
            <em style={{ color: "var(--text)", fontStyle: "italic" }}>production-grade</em> software
            for startups, enterprises, and institutions — from Abuja to the world.
          </p>

          <div className="animate-fadeUp delay-600" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link to="/contact" className="btn-accent">
              Start a Project <ArrowRight size={13} />
            </Link>
            <Link to="/work" className="btn-ghost">View Our Work</Link>
          </div>
        </div>

        <div className="animate-fadeUp delay-800" style={{
          marginTop: "clamp(40px, 6vw, 72px)",
          display: "flex", alignItems: "center", gap: "12px",
        }}>
          <div style={{
            width: "1px", height: "40px",
            background: "linear-gradient(to bottom, transparent, var(--border-bright))",
          }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-subtle)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
}
