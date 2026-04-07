const technologies = [
  { name: "PostgreSQL",     color: "#336791" },
  { name: "MongoDB",        color: "#47A248" },
  { name: "MySQL",          color: "#00758F" },
  { name: "SQLite",         color: "#6aa9c8" },
  { name: "Redis",          color: "#FF4438" },
  { name: "Bun",            color: "#f5e6c8" },
  { name: "Node.js",        color: "#339933" },
  { name: "Flask",          color: "#AAAAAA" },
  { name: "Laravel",        color: "#FF2D20" },
  { name: "Go",             color: "#00ACD7" },
  { name: "C",              color: "#A8B9CC" },
  { name: ".NET MAUI",      color: "#512BD4" },
  { name: "TypeScript",     color: "#3178C6" },
  { name: "Python",         color: "#3776AB" },
  { name: "Docker",         color: "#2496ED" },
  { name: "Kubernetes",     color: "#326CE5" },
  { name: "GitHub Actions", color: "#2088FF" },
  { name: "Terraform",      color: "#7B42BC" },
  { name: "React",          color: "#61DAFB" },
  { name: "Prisma",         color: "#5a67d8" },
  { name: "Elysia",         color: "#e8ff47" },
];

const doubled = [...technologies, ...technologies];

export default function TechStack() {
  return (
    <div style={{ padding: "clamp(32px, 6vw, 72px) 0", overflow: "hidden" }}>
      <div style={{ position: "relative" }}>
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: "80px", zIndex: 10,
          background: "linear-gradient(to right, var(--bg), transparent)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: "80px", zIndex: 10,
          background: "linear-gradient(to left, var(--bg), transparent)",
          pointerEvents: "none",
        }} />

        <div style={{ overflow: "hidden", padding: "20px 0" }}>
          <div className="ticker-track">
            {doubled.map((tech, i) => (
              <div
                key={i}
                style={{
                  display: "flex", alignItems: "center", gap: "10px",
                  padding: "12px 24px", marginRight: "2px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  whiteSpace: "nowrap", flexShrink: 0,
                  transition: "border-color 0.2s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-bright)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
              >
                <div style={{
                  width: "7px", height: "7px", borderRadius: "50%",
                  background: tech.color, boxShadow: `0 0 6px ${tech.color}55`, flexShrink: 0,
                }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--text-muted)", letterSpacing: "0.04em" }}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of all technologies */}
      <div style={{
        maxWidth: "1280px", margin: "clamp(40px, 6vw, 72px) auto 0",
        padding: "0 clamp(16px, 4vw, 64px)",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 180px), 1fr))",
          gap: "1px",
          background: "var(--border)",
          border: "1px solid var(--border)",
        }}>
          {technologies.map((tech) => (
            <div
              key={tech.name}
              style={{
                background: "var(--bg-card)",
                padding: "clamp(18px, 2.5vw, 28px) clamp(16px, 2vw, 24px)",
                display: "flex", alignItems: "center", gap: "14px",
                transition: "background 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--bg-elevated)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--bg-card)")}
            >
              <div style={{
                width: "10px", height: "10px", borderRadius: "50%", flexShrink: 0,
                background: tech.color, boxShadow: `0 0 8px ${tech.color}60`,
              }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "12.5px", color: "var(--text-muted)", letterSpacing: "0.04em" }}>
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
