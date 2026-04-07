interface PageHeroProps {
  label: string;
  title: string;
  accent: string;
  description: string;
  accentColor?: string;
}

export default function PageHero({
  label,
  title,
  accent,
  description,
  accentColor = "var(--accent)",
}: PageHeroProps) {
  return (
    <section
      style={{
        padding: "clamp(72px, 12vw, 128px) 0 clamp(56px, 8vw, 96px)",
        borderBottom: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
      }}
      className="grid-bg"
    >
      {/* Glow blob */}
      <div style={{
        position: "absolute",
        top: "-60px", right: "-80px",
        width: "500px", height: "500px",
        background: `radial-gradient(circle, ${accentColor}0d 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 64px)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="section-label animate-fadeUp" style={{ marginBottom: "20px" }}>
          {label}
        </div>
        <h1
          className="animate-fadeUp delay-100"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(60px, 10vw, 120px)",
            lineHeight: 0.9,
            textTransform: "uppercase",
            letterSpacing: "0.02em",
            marginBottom: "32px",
          }}
        >
          {title}{" "}
          <span style={{ color: accentColor }}>{accent}</span>
        </h1>
        <p
          className="animate-fadeUp delay-200"
          style={{
            maxWidth: "520px",
            fontSize: "clamp(14px, 2vw, 17px)",
            color: "var(--text-muted)",
            lineHeight: 1.8,
            fontWeight: 300,
          }}
        >
          {description}
        </p>
      </div>
    </section>
  );
}
