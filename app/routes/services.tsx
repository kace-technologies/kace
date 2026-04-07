import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import PageHero from "~/components/PageHero";
import ServicesGrid from "~/components/Services";

export const meta: MetaFunction = () => [
  { title: "Services — Kace Technologies" },
  { name: "description", content: "End-to-end software delivery — web engineering, mobile development, cloud & DevOps, AI & data systems, security architecture, and technical consulting." },
];

const process = [
  { step: "01", title: "Discovery",       desc: "We learn your domain, constraints, and goals. No templates — every engagement starts with listening." },
  { step: "02", title: "Architecture",    desc: "We design a system that fits your scale today and grows with you. Documentation before a single line of code." },
  { step: "03", title: "Engineering",     desc: "Iterative delivery in short cycles with full visibility. Weekly demos, async updates, no black boxes." },
  { step: "04", title: "Deployment",      desc: "CI/CD pipelines, infrastructure as code, observability from day one. We ship and monitor, not just ship." },
  { step: "05", title: "Handover",        desc: "Thorough knowledge transfer, runbooks, and optional ongoing support. Your team owns the system." },
];

export default function Services() {
  return (
    <>
      <PageHero
        label="What We Build"
        title="Our"
        accent="Services"
        description="End-to-end software delivery — from the first whiteboard session to production infrastructure and ongoing support."
      />

      {/* Services grid */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 64px)" }}>
        <ServicesGrid />
      </div>

      {/* Process section */}
      <section style={{ borderTop: "1px solid var(--border)", padding: "clamp(64px, 8vw, 112px) 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 64px)" }}>
          <div style={{ marginBottom: "clamp(40px, 6vw, 64px)" }}>
            <div className="section-label" style={{ marginBottom: "16px" }}>How We Work</div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(38px, 5.5vw, 64px)",
              lineHeight: 0.92, textTransform: "uppercase",
            }}>
              Our <span style={{ color: "var(--accent)" }}>Process</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {process.map((p, i) => (
              <div
                key={p.step}
                style={{
                  display: "grid",
                  gridTemplateColumns: "clamp(40px, 5vw, 72px) 1fr",
                  gap: "clamp(20px, 3vw, 40px)",
                  padding: "clamp(28px, 4vw, 44px) 0",
                  borderBottom: i < process.length - 1 ? "1px solid var(--border)" : "none",
                  alignItems: "start",
                }}
              >
                <div style={{
                  fontFamily: "var(--font-mono)", fontSize: "11px",
                  color: "var(--accent)", letterSpacing: "0.1em", paddingTop: "4px",
                }}>
                  {p.step}
                </div>
                <div>
                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(22px, 3vw, 32px)",
                    letterSpacing: "0.04em", textTransform: "uppercase",
                    marginBottom: "12px", lineHeight: 1,
                  }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: "clamp(13px, 1.5vw, 15px)", color: "var(--text-muted)", lineHeight: 1.8, fontWeight: 300, maxWidth: "580px" }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section style={{ borderTop: "1px solid var(--border)", background: "var(--bg-card)" }}>
        <div style={{
          maxWidth: "1280px", margin: "0 auto",
          padding: "clamp(40px, 6vw, 72px) clamp(16px, 4vw, 64px)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: "24px", flexWrap: "wrap",
        }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 44px)", textTransform: "uppercase", marginBottom: "8px" }}>
              Ready to <span style={{ color: "var(--accent)" }}>ship</span>?
            </h3>
            <p style={{ fontSize: "14px", color: "var(--text-muted)", fontWeight: 300 }}>
              Tell us about your project and let's figure out how to build it together.
            </p>
          </div>
          <Link to="/contact" className="btn-accent" style={{ flexShrink: 0 }}>
            Start a Project <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </>
  );
}
