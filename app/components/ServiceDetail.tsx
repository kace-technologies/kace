import { Link } from "react-router";
import { ArrowRight, CheckCircle } from "lucide-react";
import PageHero from "~/components/PageHero";

interface ServiceDetailProps {
  label: string;
  title: string;
  accent: string;
  description: string;
  overview: {
    heading: string;
    content: string;
  };
  capabilities: string[];
  capabilitiesTitle?: string;
  sections?: Array<{
    title: string;
    items: Array<{
      name: string;
      description: string;
    }>;
  }>;
  process: Array<{
    title: string;
    desc: string;
  }>;
}

export default function ServiceDetail(props: ServiceDetailProps) {
  const {
    label,
    title,
    accent,
    description,
    overview,
    capabilities,
    capabilitiesTitle = "Our Capabilities",
    sections = [],
    process,
  } = props;

  return (
    <>
      <PageHero
        label={label}
        title={title}
        accent={accent}
        description={description}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 64px)" }}>
        {/* Overview */}
        <section style={{ padding: "clamp(64px, 8vw, 96px) 0", borderBottom: "1px solid var(--border)" }}>
          <div style={{ maxWidth: "720px" }}>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 5vw, 48px)",
              lineHeight: 1.2,
              textTransform: "uppercase",
              marginBottom: "24px",
            }}>
              {overview.heading}
            </h2>
            <p style={{
              fontSize: "16px",
              color: "var(--text-muted)",
              lineHeight: 1.8,
              fontWeight: 300,
            }}>
              {overview.content}
            </p>
          </div>
        </section>

        {/* Capabilities */}
        <section style={{ padding: "clamp(64px, 8vw, 96px) 0", borderBottom: "1px solid var(--border)" }}>
          <h3 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 4vw, 40px)",
            textTransform: "uppercase",
            marginBottom: "clamp(40px, 6vw, 60px)",
            letterSpacing: "0.04em",
          }}>
            {capabilitiesTitle.split(" ").slice(0, -1).join(" ")}
            {" "}
            <span style={{ color: "var(--accent)" }}>
              {capabilitiesTitle.split(" ").slice(-1)[0]}
            </span>
          </h3>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "clamp(32px, 4vw, 48px)",
          }}>
            {capabilities.map((cap, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <CheckCircle size={20} color="var(--accent)" style={{ marginTop: "2px", flexShrink: 0 }} />
                <p style={{ fontSize: "15px", lineHeight: 1.6, color: "var(--text-secondary)" }}>
                  {cap}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Sections */}
        {sections.map((section, sectionIndex) => (
          <section key={sectionIndex} style={{ padding: "clamp(64px, 8vw, 96px) 0", borderBottom: "1px solid var(--border)" }}>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 4vw, 40px)",
              textTransform: "uppercase",
              marginBottom: "clamp(40px, 6vw, 60px)",
              letterSpacing: "0.04em",
            }}>
              {section.title.split(" ").slice(0, -1).join(" ")}
              {" "}
              <span style={{ color: "var(--accent)" }}>
                {section.title.split(" ").slice(-1)[0]}
              </span>
            </h3>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
              gap: "clamp(32px, 4vw, 48px)",
            }}>
              {section.items.map((item, i) => (
                <div key={i} style={{
                  padding: "clamp(24px, 3vw, 32px)",
                  border: "1px solid var(--border)",
                  background: "var(--bg-card)",
                }}>
                  <h4 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "16px",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: "12px",
                    letterSpacing: "0.08em",
                    fontWeight: "600",
                  }}>
                    {item.name}
                  </h4>
                  <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Process */}
        <section style={{ padding: "clamp(64px, 8vw, 96px) 0", borderBottom: "1px solid var(--border)" }}>
          <h3 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 4vw, 40px)",
            textTransform: "uppercase",
            marginBottom: "clamp(40px, 6vw, 60px)",
            letterSpacing: "0.04em",
          }}>
            Our <span style={{ color: "var(--accent)" }}>Process</span>
          </h3>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {process.map((p, i) => (
              <div key={i} style={{
                paddingBottom: "clamp(28px, 4vw, 44px)",
                marginBottom: "clamp(28px, 4vw, 44px)",
                borderBottom: i < process.length - 1 ? "1px solid var(--border)" : "none",
              }}>
                <h4 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(20px, 2.5vw, 28px)",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                  letterSpacing: "0.04em",
                }}>
                  {p.title}
                </h4>
                <p style={{
                  fontSize: "15px",
                  color: "var(--text-muted)",
                  lineHeight: 1.8,
                  fontWeight: 300,
                  maxWidth: "600px",
                }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "clamp(64px, 8vw, 96px) 0" }}>
          <div style={{
            padding: "clamp(40px, 6vw, 72px)",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            textAlign: "center",
          }}>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 4vw, 44px)",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}>
              Ready to <span style={{ color: "var(--accent)" }}>get started</span>?
            </h3>
            <p style={{
              fontSize: "15px",
              color: "var(--text-muted)",
              marginBottom: "32px",
              fontWeight: 300,
            }}>
              Let's discuss your needs and create a plan tailored to your project.
            </p>
            <Link to="/contact" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 28px",
              fontSize: "14px",
              fontWeight: "600",
              textTransform: "uppercase",
              border: "1px solid var(--accent)",
              color: "var(--accent)",
              textDecoration: "none",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--accent)";
                el.style.color = "var(--bg)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "transparent";
                el.style.color = "var(--accent)";
              }}
            >
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
