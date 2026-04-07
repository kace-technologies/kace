const stats = [
  { value: "50+",  label: "Projects Shipped",   desc: "Across fintech, healthtech, edtech, and logistics" },
  { value: "12+",  label: "Enterprise Clients",  desc: "From funded startups to government institutions" },
  { value: "99.9", label: "Uptime SLA",           desc: "Guaranteed availability on all managed systems" },
  { value: "6",    label: "Years in Business",   desc: "Building software in Nigeria and beyond since 2019" },
];

export default function Stats() {
  return (
    <section style={{ padding: "clamp(60px, 8vw, 100px) 0", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 64px)" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
          gap: "1px",
          background: "var(--border)",
          border: "1px solid var(--border)",
        }}>
          {stats.map((stat) => (
            <div key={stat.value} style={{
              background: "var(--bg-card)",
              padding: "clamp(28px, 4vw, 44px) clamp(20px, 3vw, 36px)",
              display: "flex", flexDirection: "column", gap: "10px",
            }}>
              <div className="stat-number">{stat.value}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text)" }}>
                {stat.label}
              </div>
              <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.6, fontWeight: 300 }}>
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
