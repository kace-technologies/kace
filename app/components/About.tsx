import { CheckCircle2 } from "lucide-react";

const values = [
  "Engineering rigour over shortcuts",
  "Security and performance by design",
  "Clean architecture, maintainable code",
  "Transparent communication, always",
  "African context — global standards",
];

export default function About() {
  return (
    <div style={{ padding: "clamp(32px, 6vw, 80px) 0" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
        gap: "clamp(40px, 6vw, 80px)",
        alignItems: "start",
      }}>
        {/* Left */}
        <div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(40px, 6vw, 72px)",
            lineHeight: 0.92, textTransform: "uppercase",
            marginBottom: "clamp(24px, 4vw, 40px)",
          }}>
            Built in<br />
            <span style={{ color: "var(--accent)" }}>Nigeria,</span><br />
            Built for<br />
            <span style={{ color: "var(--cyan)" }}>the World</span>
          </h2>

          <p style={{ fontSize: "clamp(13.5px, 1.6vw, 15px)", color: "var(--text-muted)", lineHeight: 1.85, fontWeight: 300, marginBottom: "18px" }}>
            Kace Technologies was founded in Abuja by engineers who understood a simple truth:
            the software being shipped here should be just as rigorous and ambitious as anything
            built in San Francisco or Berlin.
          </p>
          <p style={{ fontSize: "clamp(13.5px, 1.6vw, 15px)", color: "var(--text-muted)", lineHeight: 1.85, fontWeight: 300 }}>
            We're a small, senior-heavy team. No junior-heavy body shops, no offshore hand-offs.
            Every line of code is written by someone who will own it in production.
          </p>
        </div>

        {/* Right */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{
            background: "var(--bg-card)", border: "1px solid var(--border)",
            padding: "clamp(28px, 4vw, 48px) clamp(24px, 3vw, 40px)",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: "2px",
              background: "linear-gradient(to right, var(--accent), transparent)",
            }} />
            <div style={{
              fontFamily: "var(--font-display)", fontSize: "18px",
              letterSpacing: "0.08em", textTransform: "uppercase",
              color: "var(--accent)", marginBottom: "24px",
            }}>
              Our Principles
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {values.map((v) => (
                <div key={v} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <CheckCircle2 size={14} color="var(--accent)" style={{ flexShrink: 0, marginTop: "3px" }} />
                  <span style={{ fontSize: "13.5px", color: "var(--text-muted)", lineHeight: 1.6, fontWeight: 300 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div style={{
            background: "var(--bg-card)", border: "1px solid var(--border)",
            padding: "clamp(20px, 2.5vw, 28px) clamp(20px, 3vw, 32px)",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "12px",
          }}>
            {[
              { label: "Engineers",   value: "8" },
              { label: "Designers",   value: "2" },
              { label: "DevOps",      value: "2" },
              { label: "Strategists", value: "2" },
            ].map((item) => (
              <div key={item.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 40px)", color: "var(--text)", lineHeight: 1 }}>{item.value}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-subtle)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "6px" }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
