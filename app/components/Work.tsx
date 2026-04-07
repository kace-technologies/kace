import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    index: "01",
    name: "FinPay Gateway",
    category: "Fintech · Web · API",
    desc: "A high-throughput payment processing platform supporting Paystack, Flutterwave, MTN MoMo, and USSD for unbanked users across sub-Saharan Africa.",
    tags: ["TypeScript", "Bun", "PostgreSQL", "Redis", "Docker"],
    accent: "var(--accent)",
  },
  {
    index: "02",
    name: "HealthTrack EMR",
    category: "Healthtech · Mobile · Cloud",
    desc: "Electronic medical records system for a network of 40+ clinics in Nigeria. Offline-first architecture with real-time sync on reconnect.",
    tags: [".NET MAUI", "Go", "MongoDB", "Kubernetes"],
    accent: "var(--cyan)",
  },
  {
    index: "03",
    name: "LogiRoute Platform",
    category: "Logistics · Web · DevOps",
    desc: "Last-mile delivery orchestration platform for an e-commerce brand, handling 10k+ daily deliveries with live tracking and route optimisation.",
    tags: ["React", "Node.js", "MySQL", "Terraform", "GitHub Actions"],
    accent: "#ff6b6b",
  },
  {
    index: "04",
    name: "EdCore LMS",
    category: "Edtech · Web · AI",
    desc: "AI-powered learning management system for a university consortium, featuring adaptive quizzes, plagiarism detection, and analytics dashboards.",
    tags: ["Python", "Flask", "PostgreSQL", "Redis", "Docker"],
    accent: "#b47fff",
  },
];

export default function Work() {
  return (
    <div style={{ padding: "clamp(32px, 6vw, 80px) 0" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {projects.map((project) => (
          <div
            key={project.index}
            style={{
              display: "grid",
              gridTemplateColumns: "clamp(40px, 5vw, 64px) 1fr clamp(40px, 5vw, 48px)",
              gap: "clamp(16px, 3vw, 32px)",
              alignItems: "start",
              padding: "clamp(28px, 4vw, 44px) 0",
              borderBottom: "1px solid var(--border)",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.015)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
          >
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-subtle)", paddingTop: "4px" }}>
              {project.index}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px", minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(24px, 4vw, 44px)",
                  letterSpacing: "0.02em",
                  textTransform: "uppercase", lineHeight: 1,
                }}>
                  {project.name}
                </h3>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: "10.5px",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color: project.accent, opacity: 0.85,
                  flexShrink: 0,
                }}>
                  {project.category}
                </span>
              </div>

              <p style={{ maxWidth: "580px", fontSize: "13.5px", color: "var(--text-muted)", lineHeight: 1.75, fontWeight: 300 }}>
                {project.desc}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>

            <div
              style={{
                width: "clamp(36px, 4vw, 48px)", height: "clamp(36px, 4vw, 48px)",
                border: "1px solid var(--border-bright)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, transition: "background 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--accent-dim)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-bright)";
              }}
            >
              <ArrowUpRight size={16} color="var(--text-muted)" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
