import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import Hero from "~/components/Hero";
import Stats from "~/components/Stats";

export const meta: MetaFunction = () => [
  { title: "Kace Technologies — Software Development & Consulting, Abuja" },
  { name: "description", content: "Kace Technologies is a premier software development and consulting agency based in Abuja, Nigeria. We build robust, scalable systems across web, mobile, cloud, and DevOps." },
];

const teasers = [
  { label: "Services", to: "/services", desc: "See what we build"      },
  { label: "Stack",    to: "/stack",    desc: "Our technology lineup"  },
  { label: "Work",     to: "/work",     desc: "Projects we've shipped" },
  { label: "About",    to: "/about",    desc: "Who we are"             },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />

      {/* Quick-nav teaser */}
      <section style={{ borderTop: "1px solid var(--border)" }}>
        <div style={{
          maxWidth: "1280px", margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 64px)",
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
          }}>
            {teasers.map(({ label, to, desc }) => (
              <Link
                key={to}
                to={to}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                  padding: "clamp(22px, 3vw, 36px) clamp(20px, 2.5vw, 32px)",
                  background: "var(--bg-card)",
                  textDecoration: "none",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--bg-elevated)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--bg-card)")}
              >
                <div>
                  <div style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(20px, 2.5vw, 28px)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: "var(--text)",
                    marginBottom: "5px",
                    lineHeight: 1,
                  }}>
                    {label}
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "10.5px", color: "var(--text-subtle)", letterSpacing: "0.06em" }}>
                    {desc}
                  </div>
                </div>
                <ArrowRight size={17} color="var(--accent)" style={{ flexShrink: 0 }} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
