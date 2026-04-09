"use client";
const modalities = [
  {
    icon: "◈",
    title: "Cognitive-Behavioral Therapy",
    short: "CBT",
    desc: "Identify and reshape the thought patterns that fuel anxiety, perfectionism, and emotional distress.",
  },
  {
    icon: "◈",
    title: "EMDR Therapy",
    short: "Eye Movement Desensitization",
    desc: "A specialized approach to process and integrate traumatic memories so they no longer hold power over your present.",
  },
  {
    icon: "◈",
    title: "Mindfulness-Based Practices",
    short: "Present-Moment Awareness",
    desc: "Learn to observe thoughts and sensations without being overwhelmed—building regulation from the inside out.",
  },
  {
    icon: "◈",
    title: "Body-Oriented Techniques",
    short: "Somatic Awareness",
    desc: "Address the physiological side of anxiety and trauma, because healing isn't only cognitive—it lives in the body too.",
  },
];

export default function Approach() {
  return (
    <section
      style={{
        padding: "120px 40px",
        backgroundColor: "var(--color-white)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "end",
            marginBottom: "72px",
          }}
          className="approach-header"
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.72rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--color-accent)",
                marginBottom: "16px",
              }}
            >
              Therapeutic Approach
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
                fontWeight: 300,
                color: "var(--color-primary-dark)",
                lineHeight: 1.1,
              }}
            >
              Evidence-Based Methods,
              <br />
              <em style={{ fontStyle: "italic" }}>Human at Heart</em>
            </h2>
          </div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.95rem",
              fontWeight: 300,
              color: "var(--color-text-muted)",
              lineHeight: 1.85,
            }}
          >
            I draw from multiple evidence-based modalities to address both the
            emotional and physiological dimensions of what you&apos;re experiencing.
            Therapy is paced carefully—with safety and stabilization at the
            forefront—so healing unfolds in a way that feels manageable and sustainable.
          </p>
        </div>

        {/* Modalities grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2px",
            backgroundColor: "var(--color-border)",
          }}
          className="modalities-grid"
        >
          {modalities.map((m) => (
            <div
              key={m.title}
              style={{
                backgroundColor: "white",
                padding: "48px 44px",
                transition: "background-color 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor =
                  "var(--color-secondary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor =
                  "white";
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.8rem",
                  color: "var(--color-accent)",
                  marginBottom: "20px",
                }}
              >
                {m.icon}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.68rem",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-text-light)",
                  marginBottom: "10px",
                }}
              >
                {m.short}
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--color-primary-dark)",
                  marginBottom: "16px",
                  lineHeight: 1.3,
                }}
              >
                {m.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  fontWeight: 300,
                  color: "var(--color-text-muted)",
                  lineHeight: 1.75,
                }}
              >
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .approach-header {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .modalities-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
