import type { MetaFunction } from "react-router";
import PageHero from "~/components/PageHero";
import TechStack from "~/components/TechStack";

export const meta: MetaFunction = () => [
  { title: "Our Stack — Kace Technologies" },
  { name: "description", content: "The full technology stack Kace Technologies works with — databases, runtimes, frameworks, DevOps tools, and cloud infrastructure." },
];

const categories = [
  {
    label: "Databases",
    color: "var(--accent)",
    items: [
      { name: "PostgreSQL",  note: "Primary relational DB for most production systems" },
      { name: "MongoDB",     note: "Document store for flexible, schema-less workloads" },
      { name: "MySQL",       note: "Legacy and partner-mandated relational workloads" },
      { name: "SQLite",      note: "Embedded storage, edge deployments, offline-first apps" },
      { name: "Redis",       note: "Caching, queues, pub/sub, session management" },
    ],
  },
  {
    label: "Runtimes & Languages",
    color: "var(--cyan)",
    items: [
      { name: "TypeScript",  note: "Default language for all JS/TS projects" },
      { name: "Bun",         note: "Fast JS runtime for APIs and CLI tooling" },
      { name: "Node.js",     note: "Mature ecosystem for long-running services" },
      { name: "Go",          note: "High-throughput microservices and system tools" },
      { name: "Python",      note: "ML pipelines, data processing, scripting" },
      { name: "C",           note: "Embedded systems and performance-critical modules" },
    ],
  },
  {
    label: "Frameworks & Libraries",
    color: "#b47fff",
    items: [
      { name: "React",       note: "Primary UI library for web applications" },
      { name: "Elysia",      note: "Type-safe Bun-native HTTP framework" },
      { name: "Flask",       note: "Lightweight Python API and ML serving" },
      { name: "Laravel",     note: "Full-stack PHP framework for enterprise CMS" },
      { name: ".NET MAUI",   note: "Cross-platform mobile apps for iOS & Android" },
    ],
  },
  {
    label: "DevOps & Infrastructure",
    color: "#ff6b6b",
    items: [
      { name: "Docker",          note: "Containerisation for every environment" },
      { name: "Kubernetes",      note: "Orchestration for production workloads" },
      { name: "Terraform",       note: "Infrastructure as code across cloud providers" },
      { name: "GitHub Actions",  note: "CI/CD pipelines and automated workflows" },
    ],
  },
  {
    label: "Data & ORM",
    color: "#f0a060",
    items: [
      { name: "Prisma",      note: "Type-safe ORM with migration tooling" },
    ],
  },
];

export default function Stack() {
  return (
    <>
      <PageHero
        label="Technology"
        title="Our"
        accent="Stack"
        description="We pick the right tool for every job — battle-tested and cutting-edge, never dogmatic. Here's what we reach for and why."
        accentColor="var(--cyan)"
      />

      {/* Ticker + full grid */}
      <TechStack />

      {/* Detailed breakdown */}
      <section style={{ borderTop: "1px solid var(--border)", padding: "clamp(64px, 8vw, 112px) 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 64px)" }}>
          <div className="section-label" style={{ marginBottom: "clamp(32px, 5vw, 56px)" }}>
            Detailed Breakdown
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(40px, 5vw, 64px)" }}>
            {categories.map((cat) => (
              <div key={cat.label}>
                {/* Category header */}
                <div style={{
                  display: "flex", alignItems: "center", gap: "14px",
                  marginBottom: "clamp(16px, 2.5vw, 24px)",
                  paddingBottom: "16px",
                  borderBottom: `1px solid ${cat.color}33`,
                }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: cat.color, boxShadow: `0 0 8px ${cat.color}` }} />
                  <span style={{
                    fontFamily: "var(--font-display)", fontSize: "clamp(20px, 2.5vw, 26px)",
                    letterSpacing: "0.06em", textTransform: "uppercase", color: cat.color,
                  }}>
                    {cat.label}
                  </span>
                </div>

                {/* Items grid */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
                  gap: "1px",
                  background: "var(--border)",
                  border: "1px solid var(--border)",
                }}>
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      style={{
                        background: "var(--bg-card)",
                        padding: "clamp(18px, 2.5vw, 26px) clamp(18px, 2.5vw, 28px)",
                        transition: "background 0.2s",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--bg-elevated)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--bg-card)")}
                    >
                      <div style={{
                        fontFamily: "var(--font-mono)", fontSize: "13px",
                        color: "var(--text)", letterSpacing: "0.04em", marginBottom: "7px",
                      }}>
                        {item.name}
                      </div>
                      <div style={{ fontSize: "12.5px", color: "var(--text-muted)", lineHeight: 1.6, fontWeight: 300 }}>
                        {item.note}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
