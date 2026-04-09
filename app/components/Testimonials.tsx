"use client";
const testimonials = [
  {
    quote:
      "Working with Dr. Reynolds completely changed how I relate to anxiety. She helped me understand what was driving it—not just manage symptoms. I feel more like myself than I have in years.",
    name: "Client, Santa Monica",
    detail: "Anxiety & Panic Therapy",
  },
  {
    quote:
      "I came to therapy feeling burnt out and disconnected. Dr. Reynolds created a space where I could finally slow down and figure out what I actually wanted—without judgment. Life-changing.",
    name: "Client, Los Angeles",
    detail: "Burnout & Professional Stress",
  },
  {
    quote:
      "EMDR with Dr. Reynolds was transformative. I was skeptical at first, but the trauma that had affected me for years began to lose its grip. I finally feel like I have my life back.",
    name: "Client, California (Telehealth)",
    detail: "Trauma & PTSD Treatment",
  },
];

export default function Testimonials() {
  return (
    <section
      style={{
        padding: "120px 40px",
        backgroundColor: "var(--color-primary-dark)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background texture */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "40%",
          height: "100%",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=40')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.08,
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.72rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-accent-light)",
              marginBottom: "16px",
            }}
          >
            Client Experiences
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
              fontWeight: 300,
              color: "white",
              lineHeight: 1.2,
            }}
          >
            Healing That Lasts
          </h2>
        </div>

        {/* Testimonials grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "32px",
          }}
          className="testimonials-grid"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                padding: "40px 36px",
                position: "relative",
              }}
            >
              {/* Quote mark */}
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "5rem",
                  color: "var(--color-accent)",
                  opacity: 0.4,
                  lineHeight: 0.7,
                  marginBottom: "24px",
                }}
              >
                &ldquo;
              </p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.88)",
                  lineHeight: 1.7,
                  marginBottom: "28px",
                  fontWeight: 300,
                }}
              >
                {t.quote}
              </p>
              <div
                style={{
                  width: "40px",
                  height: "1.5px",
                  backgroundColor: "var(--color-accent)",
                  marginBottom: "16px",
                }}
              />
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.7)",
                  marginBottom: "4px",
                }}
              >
                {t.name}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.72rem",
                  color: "var(--color-accent-light)",
                  letterSpacing: "0.08em",
                }}
              >
                {t.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p
          style={{
            textAlign: "center",
            fontFamily: "var(--font-body)",
            fontSize: "0.72rem",
            color: "rgba(255,255,255,0.3)",
            marginTop: "32px",
            fontStyle: "italic",
          }}
        >
          * Testimonials are illustrative and represent composite client experiences. All details have been changed to protect privacy.
        </p>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
