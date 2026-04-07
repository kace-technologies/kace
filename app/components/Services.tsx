import { Globe, Smartphone, Cloud, BrainCircuit, ShieldCheck, Layers } from "lucide-react";

const services = [
  {
    icon: Globe, number: "01", title: "Web Engineering",
    desc: "Full-stack web applications built with modern frameworks. Performant, secure, and maintainable codebases at any scale.",
    tags: ["React", "Node.js", "Bun", "Laravel", "Go"],
  },
  {
    icon: Smartphone, number: "02", title: "Mobile Development",
    desc: "Cross-platform and native mobile apps for iOS and Android. From MVPs to enterprise-grade applications with offline-first architecture.",
    tags: [".NET MAUI", "React Native", "Flutter"],
  },
  {
    icon: Cloud, number: "03", title: "Cloud & DevOps",
    desc: "Infrastructure as code, CI/CD pipelines, and cloud-native deployments. We automate everything so your team ships faster.",
    tags: ["Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
  {
    icon: BrainCircuit, number: "04", title: "AI & Data Systems",
    desc: "Intelligent systems that learn and adapt. We integrate machine learning models, build data pipelines, and ship AI features into production.",
    tags: ["Python", "Flask", "PostgreSQL", "Redis"],
  },
  {
    icon: ShieldCheck, number: "05", title: "Security & Architecture",
    desc: "Security-first design, threat modelling, and architectural reviews. We identify vulnerabilities before they become incidents.",
    tags: ["Auth", "Penetration Testing", "Compliance"],
  },
  {
    icon: Layers, number: "06", title: "Technical Consulting",
    desc: "Strategic technology advisory for CTOs and founders. Stack selection, team structure, roadmaps, and code audits.",
    tags: ["CTO Advisory", "Code Audit", "Team Building"],
  },
];

export default function Services() {
  return (
    <div style={{ padding: "clamp(32px, 6vw, 80px) 0" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
        gap: "1px",
        background: "var(--border)",
        border: "1px solid var(--border)",
      }}>
        {services.map((svc) => {
          const Icon = svc.icon;
          return (
            <div
              key={svc.number}
              style={{
                background: "var(--bg-card)",
                padding: "clamp(28px, 4vw, 40px) clamp(22px, 3vw, 36px)",
                display: "flex", flexDirection: "column", gap: "18px",
                cursor: "default",
                transition: "background 0.25s ease",
                position: "relative", overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--bg-elevated)";
                const a = e.currentTarget.querySelector(".svc-accent") as HTMLElement;
                if (a) a.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--bg-card)";
                const a = e.currentTarget.querySelector(".svc-accent") as HTMLElement;
                if (a) a.style.opacity = "0";
              }}
            >
              <div className="svc-accent" style={{
                position: "absolute", top: 0, left: 0,
                width: "3px", height: "100%",
                background: "var(--accent)", opacity: 0, transition: "opacity 0.25s ease",
              }} />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-subtle)", letterSpacing: "0.1em" }}>
                  {svc.number}
                </span>
                <div style={{
                  width: "38px", height: "38px",
                  border: "1px solid var(--border-bright)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon size={16} color="var(--accent)" />
                </div>
              </div>

              <h3 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(22px, 3vw, 28px)",
                letterSpacing: "0.04em",
                textTransform: "uppercase", lineHeight: 1,
              }}>
                {svc.title}
              </h3>

              <p style={{ fontSize: "13.5px", color: "var(--text-muted)", lineHeight: 1.75, fontWeight: 300, flex: 1 }}>
                {svc.desc}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginTop: "auto" }}>
                {svc.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
