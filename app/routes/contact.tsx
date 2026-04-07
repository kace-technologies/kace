import type { MetaFunction } from "react-router";
import PageHero from "~/components/PageHero";
import ContactSection from "~/components/Contact";

export const meta: MetaFunction = () => [
  { title: "Contact — Kace Technologies" },
  { name: "description", content: "Get in touch with Kace Technologies to start a project, request a quote, or book a discovery call with our engineering team in Abuja, Nigeria." },
];

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "It depends on scope. A well-scoped MVP is usually 6–10 weeks. Larger enterprise systems are 3–6 months. We always give you a timeline before work begins.",
  },
  {
    q: "Do you work with clients outside Nigeria?",
    a: "Yes. Roughly 30% of our clients are based outside Nigeria — in the UK, US, and other African countries. We work async-first with weekly syncs.",
  },
  {
    q: "What's your pricing model?",
    a: "We price per project or on a retainer for ongoing work. We don't do time-and-materials for new builds — you get a fixed scope and a fixed price.",
  },
  {
    q: "Can you take over an existing codebase?",
    a: "Yes, and we're experienced at it. We start with a code audit, give you an honest assessment, and propose a plan — no sycophancy.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. We offer monthly support and maintenance retainers covering bug fixes, dependency updates, monitoring, and minor feature work.",
  },
];

export default function Contact() {
  return (
    <>
      <PageHero
        label="Get in Touch"
        title="Let's"
        accent="Talk"
        description="Whether you have a fully scoped project or just an idea on a napkin — we want to hear about it."
        accentColor="var(--accent)"
      />

      {/* Contact section */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 64px)" }}>
        <ContactSection />
      </div>

      {/* FAQ */}
      <section style={{ borderTop: "1px solid var(--border)", padding: "clamp(64px, 8vw, 112px) 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 64px)" }}>
          <div style={{ marginBottom: "clamp(36px, 5vw, 56px)" }}>
            <div className="section-label" style={{ marginBottom: "16px" }}>FAQ</div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 60px)",
              lineHeight: 0.92, textTransform: "uppercase",
            }}>
              Common <span style={{ color: "var(--accent)" }}>Questions</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {faqs.map((faq, i) => (
              <details
                key={faq.q}
                style={{
                  borderBottom: "1px solid var(--border)",
                  cursor: "pointer",
                }}
              >
                <summary style={{
                  padding: "clamp(20px, 3vw, 28px) 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  listStyle: "none",
                  userSelect: "none",
                }}>
                  <span style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(17px, 2.2vw, 22px)",
                    letterSpacing: "0.03em",
                    textTransform: "uppercase",
                    color: "var(--text)",
                    lineHeight: 1.2,
                  }}>
                    {faq.q}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: "18px",
                    color: "var(--accent)", flexShrink: 0, lineHeight: 1,
                  }}>
                    +
                  </span>
                </summary>
                <p style={{
                  padding: "0 0 clamp(20px, 3vw, 28px) 0",
                  fontSize: "clamp(13.5px, 1.6vw, 15px)",
                  color: "var(--text-muted)",
                  lineHeight: 1.8, fontWeight: 300,
                  maxWidth: "640px",
                }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        details[open] summary span:last-child { content: "−"; }
        details summary::-webkit-details-marker { display: none; }
      `}</style>
    </>
  );
}
