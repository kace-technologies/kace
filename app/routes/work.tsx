import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import PageHero from "~/components/PageHero";
import WorkList from "~/components/Work";

export const meta: MetaFunction = () => [
  { title: "Our Work — Kace Technologies" },
  { name: "description", content: "A selection of software projects shipped by Kace Technologies — fintech, healthtech, logistics, and edtech systems built to production grade." },
];

const testimonials = [
  {
    quote: "Kace delivered a complex payment gateway in six weeks with zero production incidents on launch day. Their attention to edge cases was remarkable.",
    author: "CTO, FinPay",
    tag: "Fintech",
  },
  {
    quote: "They didn't just write code — they genuinely understood the healthcare domain and built workflows our clinicians actually enjoy using.",
    author: "Medical Director, HealthTrack",
    tag: "Healthtech",
  },
  {
    quote: "The logistics platform scaled from 2k to 12k daily orders in three months with only minor infrastructure adjustments. Solid engineering.",
    author: "VP Engineering, LogiRoute",
    tag: "Logistics",
  },
];

export default function Work() {
  return (
    <>
      <PageHero
        label="Portfolio"
        title="Selected"
        accent="Work"
        description="A handful of projects we're proud to have shipped — each one a system that's live, used daily, and maintained to high standards."
        accentColor="var(--accent)"
      />

      {/* Work list */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 64px)" }}>
        <WorkList />
      </div>

      {/* Testimonials */}
      <section style={{ borderTop: "1px solid var(--border)", padding: "clamp(64px, 8vw, 112px) 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 64px)" }}>
          <div className="section-label" style={{ marginBottom: "clamp(36px, 5vw, 60px)" }}>Client Feedback</div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
          }}>
            {testimonials.map((t) => (
              <div
                key={t.author}
                style={{
                  background: "var(--bg-card)",
                  padding: "clamp(28px, 4vw, 44px) clamp(24px, 3vw, 36px)",
                  display: "flex", flexDirection: "column", gap: "24px",
                  position: "relative", overflow: "hidden",
                }}
              >
                {/* Quote mark */}
                <div style={{
                  position: "absolute", top: "16px", right: "20px",
                  fontFamily: "var(--font-display)", fontSize: "80px",
                  color: "var(--accent)", opacity: 0.07, lineHeight: 1,
                  userSelect: "none",
                }}>
                  "
                </div>

                <span className="tag" style={{ alignSelf: "flex-start" }}>{t.tag}</span>

                <p style={{
                  fontSize: "clamp(14px, 1.7vw, 16px)",
                  color: "var(--text)",
                  lineHeight: 1.75, fontStyle: "italic", fontWeight: 300,
                  flex: 1,
                }}>
                  "{t.quote}"
                </p>

                <div style={{
                  fontFamily: "var(--font-mono)", fontSize: "11px",
                  color: "var(--text-muted)", letterSpacing: "0.06em",
                }}>
                  — {t.author}
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
              Your project could be <span style={{ color: "var(--accent)" }}>next.</span>
            </h3>
            <p style={{ fontSize: "14px", color: "var(--text-muted)", fontWeight: 300 }}>
              We're selective about what we take on, and serious about what we commit to.
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
