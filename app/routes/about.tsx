import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import PageHero from "~/components/PageHero";
import AboutSection from "~/components/About";

export const meta: MetaFunction = () => [
  { title: "About Us — Kace Technologies" },
  { name: "description", content: "Kace Technologies is a senior-heavy software engineering team based in Abuja, Nigeria. Learn about our team, values, and how we work." },
];

const team = [
  { name: "Kelechi Joseph",  role: "Co-founder & CTO",          mono: "Backend · Architecture" },
  { name: "Caleb Egbuta",    role: "Co-founder & CEO",          mono: "Strategy · Business Dev" },
  { name: "Chidi Eze",       role: "Lead Frontend Engineer",    mono: "React · TypeScript" },
  { name: "Praise Karachi",  role: "DevOps & Infrastructure",   mono: "K8s · Terraform · GH Actions" },
  { name: "Seun Adeyemi",    role: "Mobile Engineer",           mono: ".NET MAUI · React Native" },
  { name: "Taiwo Bello",     role: "AI & Data Engineer",        mono: "Python · ML · PostgreSQL" },
];

export default function About() {
  return (
    <>
      <PageHero
        label="Who We Are"
        title="About"
        accent="Kace"
        description="A small, senior-heavy engineering team in Abuja building systems that hold up under real-world load, for real-world users."
        accentColor="var(--cyan)"
      />

      {/* Story + values */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 64px)" }}>
        <div style={{ padding: "clamp(48px, 6vw, 80px) 0", borderBottom: "1px solid var(--border)" }}>
          <AboutSection />
        </div>
      </div>

      {/* Team */}
      <section style={{ padding: "clamp(64px, 8vw, 112px) 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 64px)" }}>
          <div style={{ marginBottom: "clamp(36px, 5vw, 60px)" }}>
            <div className="section-label" style={{ marginBottom: "16px" }}>The People</div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 60px)",
              lineHeight: 0.92, textTransform: "uppercase",
            }}>
              Meet the <span style={{ color: "var(--accent)" }}>Team</span>
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
          }}>
            {team.map((member) => (
              <div
                key={member.name}
                style={{
                  background: "var(--bg-card)",
                  padding: "clamp(24px, 3vw, 36px) clamp(20px, 2.5vw, 32px)",
                  display: "flex", flexDirection: "column", gap: "10px",
                  position: "relative", overflow: "hidden",
                  transition: "background 0.22s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--bg-elevated)";
                  const bar = e.currentTarget.querySelector(".member-bar") as HTMLElement;
                  if (bar) bar.style.width = "100%";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--bg-card)";
                  const bar = e.currentTarget.querySelector(".member-bar") as HTMLElement;
                  if (bar) bar.style.width = "0%";
                }}
              >
                {/* Animated bottom bar */}
                <div className="member-bar" style={{
                  position: "absolute", bottom: 0, left: 0,
                  height: "2px", width: "0%",
                  background: "var(--accent)",
                  transition: "width 0.3s ease",
                }} />

                {/* Avatar placeholder */}
                <div style={{
                  width: "44px", height: "44px",
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border-bright)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "4px",
                }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "20px", color: "var(--accent)", lineHeight: 1 }}>
                    {member.name.charAt(0)}
                  </span>
                </div>

                <div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "clamp(14px, 1.6vw, 15px)", color: "var(--text)", fontWeight: 500, marginBottom: "4px" }}>
                    {member.name}
                  </div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--text-muted)", fontWeight: 300 }}>
                    {member.role}
                  </div>
                </div>

                <div style={{ fontFamily: "var(--font-mono)", fontSize: "10.5px", color: "var(--cyan)", letterSpacing: "0.05em", marginTop: "auto" }}>
                  {member.mono}
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
              Want to <span style={{ color: "var(--accent)" }}>work with us?</span>
            </h3>
            <p style={{ fontSize: "14px", color: "var(--text-muted)", fontWeight: 300 }}>
              We're always open to interesting projects and talented engineers.
            </p>
          </div>
          <Link to="/contact" className="btn-accent" style={{ flexShrink: 0 }}>
            Get in Touch <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </>
  );
}
